'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleLocaleChange = (locale) => {
    router.push(redirectedPathName(locale))
    localStorage.setItem('locale', locale)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <ul className='flex gap-x-3 absolute top-0 left-0 z-[99]'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <button
              onClick={() => handleLocaleChange(locale)}
              className='rounded-md border bg-black px-3 py-2 text-white cursor-pointer'
            >
              {locale}
            </button>
          </li>
        )
      })}
    </ul>
  )
}