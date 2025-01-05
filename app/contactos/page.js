'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Contactos() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('contacts')}</h1>
      <p>{t('email')}</p>
      <p>{t('phone')}</p>
    </div>
  );
}
