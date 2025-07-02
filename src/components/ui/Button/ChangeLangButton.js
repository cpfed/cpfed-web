'use client';

import { useCallback, useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLocale, setCurrentLocale] = useState('kk');

    const optionBaseClass = 'block w-full px-3 py-2 text-left cursor-pointer hover:bg-[#f7fafc]';
    const optionActiveClass = 'font-bold bg-[#f1f5f9]';

    useEffect(() => {
        const savedLocale = getCookie('NEXT_LOCALE') || 'ru';
        setCurrentLocale(savedLocale);
    }, []);

    const getLanguageDisplay = (lang) => {
        switch(lang) {
            case 'kk': return 'Қаз';
            case 'ru': return 'Рус';
            case 'en': return 'Eng';
            default: return 'Рус';
        }
    };

    const onLanguageChange = useCallback((newLocale) => {
        setCookie('NEXT_LOCALE', newLocale, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
        });
        setCurrentLocale(newLocale);
        setIsOpen(false);

        // Refresh the current route to apply the new locale
        router.refresh();
    }, [router]);

    return (
        <div className="font-semibold relative inline-block">
            <button
                className="flex items-center cursor-pointer text-[#475467] text-sm gap-1.5 py-2 px-3 duration-300 leading-none"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <span>{getLanguageDisplay(currentLocale)}</span>
                <Globe className="w-4 h-4" strokeWidth={2.5}/>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-md mt-1 z-10 shadow-md text-[#475467] text-sm">
                    <button
                        onClick={() => onLanguageChange('kk')}
                        className={`${optionBaseClass} ${currentLocale === 'kk' ? optionActiveClass : ''}`}
                    >
                        Қаз
                    </button>
                    <button
                        onClick={() => onLanguageChange('ru')}
                        className={`${optionBaseClass} ${currentLocale === 'ru' ? optionActiveClass : ''}`}
                    >
                        Рус
                    </button>
                    <button
                        onClick={() => onLanguageChange('en')}
                        className={`${optionBaseClass} ${currentLocale === 'en' ? optionActiveClass : ''}`}
                    >
                        Eng
                    </button>
                </div>
            )}
        </div>
    );
}