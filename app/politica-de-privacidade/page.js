'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function PoliticaPrivacidade() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('privacy')}</h1>
      <p>{t('readPrivacy')}</p>
    </div>
  );
}
