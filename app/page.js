'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('explore')}</p>
    </div>
  );
}
