'use client';

import { createContext, useContext } from 'react';
import type { Locale, UiDict } from './i18n';
import { getDict } from './i18n';

const LocaleContext = createContext<Locale>('ru');

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
    return useContext(LocaleContext);
}

export function useTranslations(): UiDict {
    const locale = useContext(LocaleContext);
    return getDict(locale);
}
