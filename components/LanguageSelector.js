'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div className="language-selector">
      <button onClick={() => setLanguage('en')} disabled={language === 'en'}>
        EN
      </button>
      <button onClick={() => setLanguage('pt')} disabled={language === 'pt'}>
        PT
      </button>
      <nav>
        <ul>
          <li><Link href="/">{t('home')}</Link></li>
          <li><Link href="/contactos">{t('contacts')}</Link></li>
          <li><Link href="/termos-e-condicoes">{t('terms')}</Link></li>
          <li><Link href="/politica-de-privacidade">{t('privacy')}</Link></li>
        </ul>
      </nav>
    </div>
  );
}
