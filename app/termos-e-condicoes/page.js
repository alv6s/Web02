'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function TermosCondicoes() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('terms')}</h1>
      <p>{t('readTerms')}</p>
    </div>
  );
}
