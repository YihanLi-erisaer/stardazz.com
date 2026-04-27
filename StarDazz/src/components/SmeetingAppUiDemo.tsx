import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'

type Mode = 'idle' | 'recording'
type Panel = 'main' | 'settings' | 'history'
type ThemeChoice = 'system' | 'light' | 'dark'

function DemoStatusBar({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-0.5 pb-0.5 pt-0.5 text-[10px] font-medium ${
        isDark ? 'text-zinc-300' : 'text-[#4a5a6e]'
      }`}
    >
      <span aria-hidden>11:40</span>
      <div className="flex items-center gap-1.5" aria-hidden>
        <span
          className={`h-2 w-4 rounded-full ${isDark ? 'bg-zinc-500/90' : 'bg-zinc-400/75'}`}
        />
        <span
          className={`h-2 w-2 rounded-full ${isDark ? 'bg-zinc-500/90' : 'bg-zinc-400/75'}`}
        />
      </div>
    </div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SmeetingAppUiDemo() {
  const { t } = useLanguage()
  const { theme: siteTheme } = useTheme()
  const [mode, setMode] = useState<Mode>('idle')
  const [panel, setPanel] = useState<Panel>('main')
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>('system')
  const [beamOn, setBeamOn] = useState(false)
  const [copyFlash, setCopyFlash] = useState<string | null>(null)
  const [historyLongPressId, setHistoryLongPressId] = useState<string | null>(null)
  const [historyDeletedIds, setHistoryDeletedIds] = useState(() => new Set<string>())
  const historyLongPressTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)
  const historyLongPressStartRef = useRef<{ x: number; y: number } | null>(null)

  const recording = mode === 'recording'
  const mainBlocked = panel !== 'main'
  const previewIsDark =
    themeChoice === 'dark' || (themeChoice === 'system' && siteTheme === 'dark')

  const copyFullText = useCallback(
    async (id: string, text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopyFlash(id)
        window.setTimeout(() => setCopyFlash((c) => (c === id ? null : c)), 1600)
      } catch {
        setCopyFlash(null)
      }
    },
    [],
  )

  const historyCardsAll = useMemo(
    () => [
      { id: '1', text: t('smeeting.demoHistCard1'), time: t('smeeting.demoHistTime1') },
      { id: '2', text: t('smeeting.demoHistCard2'), time: t('smeeting.demoHistTime2') },
      { id: '3', text: t('smeeting.demoHistCard3'), time: t('smeeting.demoHistTime3') },
    ],
    [t],
  )
  const historyCards = historyCardsAll.filter((row) => !historyDeletedIds.has(row.id))

  const cancelHistoryLongPressPending = useCallback(() => {
    if (historyLongPressTimerRef.current) {
      window.clearTimeout(historyLongPressTimerRef.current)
      historyLongPressTimerRef.current = null
    }
  }, [])

  const resetHistoryLongPressTracking = useCallback(() => {
    cancelHistoryLongPressPending()
    historyLongPressStartRef.current = null
  }, [cancelHistoryLongPressPending])

  const onHistoryCardPointerDown = useCallback(
    (id: string) => (e: React.PointerEvent<HTMLDivElement>) => {
      if (historyLongPressId) return
      if (e.pointerType === 'mouse' && e.button !== 0) return
      cancelHistoryLongPressPending()
      historyLongPressStartRef.current = { x: e.clientX, y: e.clientY }
      historyLongPressTimerRef.current = window.setTimeout(() => {
        historyLongPressTimerRef.current = null
        historyLongPressStartRef.current = null
        setHistoryLongPressId(id)
      }, 500)
    },
    [cancelHistoryLongPressPending, historyLongPressId],
  )

  const onHistoryCardPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const start = historyLongPressStartRef.current
      if (!start || !historyLongPressTimerRef.current) return
      const dx = e.clientX - start.x
      const dy = e.clientY - start.y
      if (dx * dx + dy * dy > 144) resetHistoryLongPressTracking()
    },
    [resetHistoryLongPressTracking],
  )

  useEffect(() => {
    if (!historyLongPressId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setHistoryLongPressId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [historyLongPressId])

  useEffect(() => () => resetHistoryLongPressTracking(), [resetHistoryLongPressTracking])

  const themeSeg = (value: ThemeChoice, label: string) => {
    const on = themeChoice === value
    return (
      <button
        key={value}
        type="button"
        onClick={() => setThemeChoice(value)}
        className={`flex min-h-9 flex-1 items-center justify-center gap-0.5 px-1.5 text-[11px] font-semibold transition sm:text-xs ${
          on
            ? 'bg-[#d1e3f8] text-zinc-900 smeeting-demo-dark:bg-[#2a3d56] smeeting-demo-dark:text-zinc-100'
            : 'bg-white text-zinc-800 smeeting-demo-dark:bg-zinc-800/55 smeeting-demo-dark:text-zinc-200'
        }`}
      >
        {on ? (
          <CheckIcon className="h-3.5 w-3.5 shrink-0 text-zinc-700 smeeting-demo-dark:text-zinc-200" />
        ) : null}
        {label}
      </button>
    )
  }

  return (
    <div
      className={`mx-auto w-full max-w-[22rem] select-none sm:max-w-[24rem] ${
        previewIsDark ? 'smeeting-demo-dark' : ''
      }`}
      aria-label={t('smeeting.demoPreviewBadge')}
    >
      <div className="rounded-[1.75rem] border border-zinc-200/90 bg-[#ebecef] p-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] smeeting-demo-dark:border-[#1e293b] smeeting-demo-dark:bg-[#0d1118] sm:p-4">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[#f0f1f4] smeeting-demo-dark:bg-[#080c12]">
          <div className="relative z-30 shrink-0 rounded-t-[1.35rem] bg-[#dfe5f0] px-3 pb-2 pt-1.5 smeeting-demo-dark:bg-[#252a33]">
            <DemoStatusBar isDark={previewIsDark} />
          </div>

          <div className="relative min-h-[24.5rem] overflow-hidden rounded-b-[1.35rem] sm:min-h-[26.5rem]">
            <div
              className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
                panel === 'settings'
                  ? '-translate-x-full'
                  : panel === 'history'
                    ? 'translate-x-full'
                    : 'translate-x-0'
              } ${mainBlocked ? 'pointer-events-none' : ''}`}
              aria-hidden={mainBlocked}
            >
              <header className="flex items-center justify-between gap-2 px-2 pb-3 pt-1">
            <button
              type="button"
              onClick={() => setPanel('history')}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-200/80 smeeting-demo-dark:text-zinc-100 smeeting-demo-dark:hover:bg-zinc-800/60"
              aria-label={t('smeeting.demoMenuAria')}
            >
              <span className="flex flex-col gap-1" aria-hidden>
                <span className="h-0.5 w-5 rounded-full bg-zinc-700 smeeting-demo-dark:bg-zinc-100" />
                <span className="h-0.5 w-5 rounded-full bg-zinc-700 smeeting-demo-dark:bg-zinc-100" />
                <span className="h-0.5 w-5 rounded-full bg-zinc-700 smeeting-demo-dark:bg-zinc-100" />
              </span>
            </button>
            <p className="min-w-0 flex-1 text-center text-[13px] font-semibold leading-snug text-zinc-800 smeeting-demo-dark:text-zinc-100 sm:text-sm">
              {recording ? t('smeeting.demoResultText') : t('smeeting.demoPressStart')}
            </p>
            <button
              type="button"
              onClick={() => setPanel('settings')}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-200/80 smeeting-demo-dark:text-zinc-100 smeeting-demo-dark:hover:bg-zinc-800/60"
              aria-label={t('smeeting.demoSettingsAria')}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.723 6.723 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </header>

          <div
            className="min-h-[14rem] rounded-2xl bg-[#dee2e6] px-4 py-4 smeeting-demo-dark:bg-[#2f343d] sm:min-h-[15.5rem]"
            role={recording ? 'status' : undefined}
            aria-live={recording ? 'polite' : undefined}
          >
            {recording ? (
              <p className="text-left text-[15px] font-medium text-zinc-700 smeeting-demo-dark:text-zinc-100">
                {t('smeeting.demoRecording')}
              </p>
            ) : (
              <p className="sr-only">{t('smeeting.demoIdleHint')}</p>
            )}
          </div>

          <div className="mt-4 flex gap-3 px-0.5">
            {recording ? (
              <button
                type="button"
                onClick={() => setMode('idle')}
                className="min-h-[48px] flex-1 rounded-full bg-[#26597d] text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#1f4a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26597d] smeeting-demo-dark:bg-[#8fc2f2] smeeting-demo-dark:text-[#0b2438] smeeting-demo-dark:hover:bg-[#a4d0fa] smeeting-demo-dark:focus-visible:outline-[#8fc2f2]"
              >
                {t('smeeting.demoStop')}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setMode('recording')}
                className="min-h-[48px] flex-1 rounded-full bg-[#26597d] text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#1f4a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26597d] smeeting-demo-dark:bg-[#8fc2f2] smeeting-demo-dark:text-[#0b2438] smeeting-demo-dark:hover:bg-[#a4d0fa] smeeting-demo-dark:focus-visible:outline-[#8fc2f2]"
              >
                {t('smeeting.demoStart')}
              </button>
            )}
            <button
              type="button"
              disabled
              className="min-h-[48px] flex-1 rounded-full bg-zinc-300/90 text-[15px] font-semibold text-zinc-500 smeeting-demo-dark:bg-[#1e2430] smeeting-demo-dark:text-[#616978]"
              title={t('smeeting.demoCopyDisabled')}
            >
              {t('smeeting.demoCopy')}
            </button>
          </div>

          <p className="mt-5 pb-1 text-center text-[11px] font-medium leading-snug text-zinc-600 smeeting-demo-dark:text-zinc-200 sm:text-xs">
            {t('smeeting.demoAiDisclaimer')}
          </p>

          <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-zinc-400/50 smeeting-demo-dark:bg-zinc-100/80" aria-hidden />
        </div>

            {/* Settings: slides in from the right */}
            <div
              className={`absolute inset-0 z-20 flex flex-col bg-[#f5f6f7] px-2 text-zinc-900 transition-transform duration-300 ease-out motion-reduce:transition-none smeeting-demo-dark:bg-[#12151c] smeeting-demo-dark:text-zinc-100 ${
                panel === 'settings' ? 'translate-x-0' : 'translate-x-full pointer-events-none'
              }`}
              aria-hidden={panel !== 'settings'}
            >
              <div className="flex min-w-0 items-start gap-2 pb-5 pt-1">
                <button
                  type="button"
                  onClick={() => setPanel('main')}
                  className="flex shrink-0 items-center gap-0.5 pt-0.5 text-[13px] font-medium text-[#2c5282] smeeting-demo-dark:text-[#7eb3e8]"
                >
                  <span aria-hidden className="text-lg leading-none">
                    ←
                  </span>
                  {t('smeeting.demoBack')}
                </button>
                <h2 className="min-w-0 pt-0.5 text-2xl font-bold tracking-tight">
                  {t('smeeting.demoSettingsTitle')}
                </h2>
              </div>

              <div className="min-h-0 flex-1 space-y-6 overflow-y-auto pb-4">
                <section>
                  <h3 className="text-[15px] font-semibold text-zinc-900 smeeting-demo-dark:text-zinc-100">
                    {t('smeeting.demoTheme')}
                  </h3>
                  <div className="mt-2 flex overflow-hidden rounded-full border border-zinc-300/90 smeeting-demo-dark:border-zinc-600/80">
                    <div className="flex min-h-10 w-full divide-x divide-zinc-300/90 smeeting-demo-dark:divide-zinc-600/80">
                      {themeSeg('system', t('smeeting.demoThemeSystem'))}
                      {themeSeg('light', t('smeeting.demoThemeLight'))}
                      {themeSeg('dark', t('smeeting.demoThemeDark'))}
                    </div>
                  </div>
                </section>

                <section className="flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold text-zinc-900 smeeting-demo-dark:text-zinc-100">
                      {t('smeeting.demoBeamSearch')}
                    </h3>
                    <p className="mt-1 text-[12px] leading-snug text-zinc-500 smeeting-demo-dark:text-zinc-400">
                      {t('smeeting.demoBeamSearchDesc')}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={beamOn}
                    aria-label={t('smeeting.demoBeamSearch')}
                    onClick={() => setBeamOn((v) => !v)}
                    className={`relative mt-0.5 h-7 w-11 shrink-0 rounded-full transition-colors ${
                      beamOn ? 'bg-[#3b6ea5]' : 'bg-zinc-300 smeeting-demo-dark:bg-zinc-600'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all duration-200 ${
                        beamOn ? 'right-0.5 left-auto' : 'left-0.5'
                      }`}
                    />
                  </button>
                </section>

                <div className="flex items-center justify-between border-t border-zinc-200 pt-4 text-[15px] smeeting-demo-dark:border-zinc-700/90">
                  <span className="font-medium text-zinc-900 smeeting-demo-dark:text-zinc-100">
                    {t('smeeting.demoAppVersion')}
                  </span>
                  <span className="text-zinc-700 smeeting-demo-dark:text-zinc-300">
                    {t('smeeting.demoAppVersionValue')}
                  </span>
                </div>
              </div>

              <div
                className="mx-auto mb-1 mt-auto h-1 w-28 shrink-0 rounded-full bg-zinc-400/50 smeeting-demo-dark:bg-zinc-600/60"
                aria-hidden
              />
            </div>

            {/* Transcription history: slides in from the left */}
            <div
              className={`absolute inset-0 z-20 flex flex-col bg-[#f2f2f3] px-2 text-zinc-900 transition-transform duration-300 ease-out motion-reduce:transition-none smeeting-demo-dark:bg-[#12151c] smeeting-demo-dark:text-zinc-100 ${
                panel === 'history' ? 'translate-x-0' : '-translate-x-full pointer-events-none'
              }`}
              aria-hidden={panel !== 'history'}
            >
              <div className="flex min-w-0 items-start gap-2 pb-4 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setHistoryLongPressId(null)
                    resetHistoryLongPressTracking()
                    setPanel('main')
                  }}
                  className="flex shrink-0 items-center gap-0.5 pt-0.5 text-[13px] font-medium text-[#2c5282] smeeting-demo-dark:text-[#7eb3e8]"
                >
                  <span aria-hidden className="text-lg leading-none">
                    ←
                  </span>
                  {t('smeeting.demoBack')}
                </button>
                <h2 className="min-w-0 pt-0.5 text-lg font-bold leading-snug tracking-tight">
                  {t('smeeting.demoHistoryTitle')}
                </h2>
              </div>

              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pb-4">
                {historyCards.map((row) => (
                  <div
                    key={row.id}
                    className="relative touch-manipulation overflow-hidden rounded-2xl bg-[#e5e5e5] shadow-sm smeeting-demo-dark:bg-zinc-800/80"
                  >
                    <div
                      className="flex gap-3 px-3 py-3"
                      onPointerDown={onHistoryCardPointerDown(row.id)}
                      onPointerMove={onHistoryCardPointerMove}
                      onPointerUp={resetHistoryLongPressTracking}
                      onPointerCancel={resetHistoryLongPressTracking}
                      onPointerLeave={resetHistoryLongPressTracking}
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-3 text-left text-[13px] font-medium leading-snug text-zinc-900 smeeting-demo-dark:text-zinc-100">
                          {row.text}
                        </p>
                        <p className="mt-1.5 text-[11px] text-zinc-500 smeeting-demo-dark:text-zinc-400">{row.time}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyFullText(row.id, row.text)}
                        className="flex shrink-0 items-center self-center text-[13px] font-bold text-[#3b6ea5] underline-offset-2 hover:underline"
                      >
                        {copyFlash === row.id ? t('smeeting.demoHistCopied') : t('smeeting.demoHistCopy')}
                      </button>
                    </div>
                    {historyLongPressId === row.id ? (
                      <div
                        role="presentation"
                        className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[#505050]/80 px-3"
                        onPointerDown={(e) => {
                          if (e.target === e.currentTarget) setHistoryLongPressId(null)
                        }}
                      >
                        <button
                          type="button"
                          className="rounded-full bg-[#e53935] px-5 py-2.5 text-[13px] font-semibold text-white shadow-md"
                          onPointerDown={(e) => e.stopPropagation()}
                          onClick={() => {
                            setHistoryDeletedIds((prev) => new Set([...prev, row.id]))
                            setHistoryLongPressId(null)
                          }}
                        >
                          {t('smeeting.demoHistDelete')}
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div
                className="mx-auto mb-1 mt-auto h-1 w-28 shrink-0 rounded-full bg-zinc-400/50 smeeting-demo-dark:bg-zinc-600/60"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
