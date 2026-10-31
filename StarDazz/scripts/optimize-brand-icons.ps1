# Run after replacing a source icon: powershell -ExecutionPolicy Bypass -File scripts/optimize-brand-icons.ps1
# Product icons use 256 px to cover the current maximum 112 CSS px at more than 2x resolution.
# The browser favicon uses 64 px instead of downloading the full 1024 px source.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$projectDirectory = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectDirectory 'src/assets/brand'
[void][System.IO.Directory]::CreateDirectory($outputDirectory)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
$icons = @{
    'smeeting-light' = 'public/smeeting-icon-light.png'
    'smeeting-dark' = 'public/smeeting-icon-dark.png'
    'screator-light' = 'public/screator/icon-light.png'
    'screator-dark' = 'public/screator/icon-dark.png'
    'stardazz-favicon' = 'public/StardazzIcon.jpg'
}

foreach ($name in $icons.Keys) {
    $sourcePath = Join-Path $projectDirectory $icons[$name]
    $destinationPath = Join-Path $outputDirectory "$name.jpg"
    $size = if ($name -eq 'stardazz-favicon') { 64 } else { 256 }
    $source = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $thumbnail = $null
    $graphics = $null
    $imageAttributes = $null
    $encoderParameters = $null
    try {
        # These source images are opaque. Do not silently discard future transparency.
        for ($y = 0; $y -lt $source.Height; $y++) {
            for ($x = 0; $x -lt $source.Width; $x++) {
                if ($source.GetPixel($x, $y).A -ne 255) {
                    throw "$sourcePath contains transparency; use an alpha-preserving format."
                }
            }
        }

        $thumbnail = New-Object System.Drawing.Bitmap($size, $size, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb))
        $graphics = [System.Drawing.Graphics]::FromImage($thumbnail)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $imageAttributes = New-Object System.Drawing.Imaging.ImageAttributes
        $imageAttributes.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)

        # Match the existing square object-cover/object-center presentation.
        $side = [Math]::Min($source.Width, $source.Height)
        $cropX = ($source.Width - $side) / 2
        $cropY = ($source.Height - $side) / 2
        $destination = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
        $graphics.DrawImage($source, $destination, [single]$cropX, [single]$cropY,
            [single]$side, [single]$side, [System.Drawing.GraphicsUnit]::Pixel, $imageAttributes)

        $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, [long]92)
        $thumbnail.Save($destinationPath, $jpegCodec, $encoderParameters)
        Write-Output "$name.jpg: $((Get-Item -LiteralPath $destinationPath).Length) bytes"
    }
    finally {
        if ($encoderParameters) { $encoderParameters.Dispose() }
        if ($imageAttributes) { $imageAttributes.Dispose() }
        if ($graphics) { $graphics.Dispose() }
        if ($thumbnail) { $thumbnail.Dispose() }
        $source.Dispose()
    }
}
