'use client';

import { useTransition, useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { setUserLocale } from '@/lib/localeService';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const handleLanguageChange = (newLocale) => {
    setIsOpen(false);
    startTransition(async () => {
      await setUserLocale(newLocale);
      router.refresh();
    });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 transition hover:border-amber-400/60 hover:text-amber-400 focus:outline-none ${
          isPending ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={13} className="text-amber-400" />
        <span>{currentLanguage.flag} {currentLanguage.name}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay to close on clicking outside */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-transparent"
          />
          <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl border border-neutral-800 bg-neutral-950 p-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold transition ${
                  lang.code === locale
                    ? 'bg-amber-400/10 text-amber-400'
                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
