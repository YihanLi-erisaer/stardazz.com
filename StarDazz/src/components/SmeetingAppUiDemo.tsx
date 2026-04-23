import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

type Mode = 'idle' | 'recording'

export function SmeetingAppUiDemo() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<Mode>('idle')
  const recording = mode === 'recording'

  return (
    <div
      className="mx-auto w-full max-w-[22rem] select-none rounded-[1.75rem] border border-zinc-200/90 bg-[#f0f1f4] p-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] sm:max-w-[24rem] sm:p-4"
      aria-label={t('smeeting.demoPreviewBadge')}
    >
      {/* status bar mock */}
      <div className="flex items-center justify-between px-1 pb-2 pt-0.5 text-[10px] font-medium text-zinc-500">
        <span aria-hidden>11:31</span>
        <div className="flex gap-1" aria-hidden>
          <span className="h-2 w-3 rounded-sm bg-zinc-400/60" />
          <span className="h-2 w-2 rounded-full bg-zinc-400/60" />
        </div>
      </div>

      {/* app chrome */}
      <header className="flex items-center justify-between gap-2 px-1 pb-3">
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-200/80"
          aria-label={t('smeeting.demoMenuAria')}
        >
          <span className="flex flex-col gap-1" aria-hidden>
            <span className="h-0.5 w-5 rounded-full bg-zinc-700" />
            <span className="h-0.5 w-5 rounded-full bg-zinc-700" />
            <span className="h-0.5 w-5 rounded-full bg-zinc-700" />
          </span>
        </button>
        <p className="min-w-0 flex-1 text-center text-[13px] font-semibold leading-snug text-zinc-800 sm:text-sm">
          {recording ? t('smeeting.demoResultText') : t('smeeting.demoPressStart')}
        </p>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-200/80"
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

      {/* result area */}
      <div
        className="min-h-[14rem] rounded-2xl bg-[#dee2e6] px-4 py-4 sm:min-h-[15.5rem]"
        role={recording ? 'status' : undefined}
        aria-live={recording ? 'polite' : undefined}
      >
        {recording ? (
          <p className="text-left text-[15px] font-medium text-zinc-700">
            {t('smeeting.demoRecording')}
          </p>
        ) : (
          <p className="sr-only">{t('smeeting.demoIdleHint')}</p>
        )}
      </div>

      {/* actions */}
      <div className="mt-4 flex gap-3 px-0.5">
        {recording ? (
          <button
            type="button"
            onClick={() => setMode('idle')}
            className="min-h-[48px] flex-1 rounded-full bg-[#26597d] text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#1f4a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26597d]"
          >
            {t('smeeting.demoStop')}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMode('recording')}
            className="min-h-[48px] flex-1 rounded-full bg-[#26597d] text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#1f4a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26597d]"
          >
            {t('smeeting.demoStart')}
          </button>
        )}
        <button
          type="button"
          disabled
          className="min-h-[48px] flex-1 rounded-full bg-zinc-300/90 text-[15px] font-semibold text-zinc-500"
          title={t('smeeting.demoCopyDisabled')}
        >
          {t('smeeting.demoCopy')}
        </button>
      </div>

      <p className="mt-5 pb-1 text-center text-[11px] font-medium leading-snug text-zinc-600 sm:text-xs">
        {t('smeeting.demoAiDisclaimer')}
      </p>

      {/* home indicator */}
      <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-zinc-400/50" aria-hidden />
    </div>
  )
}
