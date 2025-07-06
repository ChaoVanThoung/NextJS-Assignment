

'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

const LocalSwitches = {
    en:{
        greeting: 'Hello, This is English Language',
        button: 'English'
    },
    km:{
        greeting: 'សួស្តី, នេះគឺជាភាសាខ្មែរ',
        button: 'Khmer'
    }
}

type LocaleKeyType = keyof typeof LocalSwitches;
export default function LocaleSwitcher() {
  const pathname = usePathname()
  const [localLanguage, setLocalLanguage] = useState<LocaleKeyType>('en');
  function switchLocale(locale: LocaleKeyType) {
       const newPath = `/${locale}${pathname}`
       setLocalLanguage(locale);
    window.history.replaceState(null, newPath)
  }
  return (
    <>
      <button 
      className='p-4 bg-amber-200 border'
      onClick={() => switchLocale('en')}>
        {LocalSwitches.en.button}
      </button>
      <button
      className='p-4 bg-blue-200 border'
       onClick={() => switchLocale('km')}>
        {LocalSwitches.km.button}
       </button>

       {/* switch language */}
       <div>
        <h1>{LocalSwitches[localLanguage].greeting}</h1>
       </div>
    </>
  )
}
