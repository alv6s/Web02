// Adicione a diretiva "use client" no topo do arquivo
'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Welcome to Cenarios",
    explore: "Explore unique experiences with our app.",
    contacts: "Contacts",
    email: "Email: contact@cenarios.com",
    phone: "Phone: +351 123 456 789",
    terms: "Terms and Conditions",
    privacy: "Privacy Policy",
    readTerms: "Read our terms and conditions to use the app.",
    readPrivacy: "Learn how we protect your personal data.",
  },
  pt: {
    home: "Bem-vindo ao Cenarios",
    explore: "Explore experiências únicas com a nossa aplicação.",
    contacts: "Contactos",
    email: "Email: contacto@cenarios.com",
    phone: "Telefone: +351 123 456 789",
    terms: "Termos e Condições",
    privacy: "Política de Privacidade",
    readTerms: "Leia os nossos termos e condições para utilizar a aplicação.",
    readPrivacy: "Saiba como protegemos os seus dados pessoais.",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const t = (key) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
