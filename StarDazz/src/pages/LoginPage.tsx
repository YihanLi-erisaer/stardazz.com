import { type FormEvent, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function LoginPage() {
  const { t } = useLanguage()
  const formId = useId()
  const emailId = `${formId}-email`
  const passwordId = `${formId}-password`
  const rememberId = `${formId}-remember`

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Auth backend not wired yet — form UI only.
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('login.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{t('login.crumbCurrent')}</span>
      </nav>

      <div className="mx-auto mt-10 max-w-md">
        <header className="text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
            StarDazz
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {t('login.title')}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('login.subtitle')}
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor={emailId}
                className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                {t('login.emailLabel')}
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t('login.emailPlaceholder')}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-emerald-400/50 dark:focus:ring-emerald-400/15"
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor={passwordId}
                  className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {t('login.passwordLabel')}
                </label>
                <Link
                  to="/contact"
                  className="text-xs font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400/95 dark:hover:text-emerald-300"
                >
                  {t('login.forgotPassword')}
                </Link>
              </div>
              <input
                id={passwordId}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={t('login.passwordPlaceholder')}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-emerald-400/50 dark:focus:ring-emerald-400/15"
              />
            </div>

            <label
              htmlFor={rememberId}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-400"
            >
              <input
                id={rememberId}
                name="remember"
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="size-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500/30 dark:border-white/15 dark:bg-white/[0.03] dark:focus:ring-emerald-400/20"
              />
              {t('login.rememberMe')}
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300 dark:focus-visible:ring-offset-zinc-950"
          >
            {t('login.submit')}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-500">
          {t('login.noAccount')}{' '}
          <Link
            to="/contact"
            className="font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400/95 dark:hover:text-emerald-300"
          >
            {t('login.contactLink')}
          </Link>
        </p>
      </div>
    </div>
  )
}
