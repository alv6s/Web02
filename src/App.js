// Importações necessárias
import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Contexto para idioma
const LanguageContext = createContext();

// Texto em Português e Inglês
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

// Componente para selecionar idioma
function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="language-selector">
      <button onClick={() => setLanguage('en')} disabled={language === 'en'}>
        English
      </button>
      <button onClick={() => setLanguage('pt')} disabled={language === 'pt'}>
        Português
      </button>
    </div>
  );
}

// Componentes de página
function Home() {
  const { t } = useContext(LanguageContext);
  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('explore')}</p>
    </div>
  );
}

function Contactos() {
  const { t } = useContext(LanguageContext);
  return (
    <div>
      <h1>{t('contacts')}</h1>
      <p>{t('email')}</p>
      <p>{t('phone')}</p>
    </div>
  );
}

function TermosCondicoes() {
  const { t } = useContext(LanguageContext);
  return (
    <div>
      <h1>{t('terms')}</h1>
      <p>{t('readTerms')}</p>
    </div>
  );
}

function PoliticaPrivacidade() {
  const { t } = useContext(LanguageContext);
  return (
    <div>
      <h1>{t('privacy')}</h1>
      <p>{t('readPrivacy')}</p>
    </div>
  );
}

function App() {
	const [language, setLanguage] = useState('en');
	const t = (key) => translations[language][key];
  
	return (
	  <LanguageContext.Provider value={{ language, setLanguage, t }}>
		<Router>
		  <div className="navbar">
			<nav>
			  <LanguageSelector />
			  <ul>
				<li><Link to="/">{t('home')}</Link></li>
				<li><Link to="/contactos">{t('contacts')}</Link></li>
				<li><Link to="/termos-e-condicoes">{t('terms')}</Link></li>
				<li><Link to="/politica-de-privacidade">{t('privacy')}</Link></li>
			  </ul>
			</nav>
		  </div>
		  <div className="content">
			<Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/contactos" element={<Contactos />} />
			  <Route path="/termos-e-condicoes" element={<TermosCondicoes />} />
			  <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
			</Routes>
		  </div>
		</Router>
	  </LanguageContext.Provider>
	);
  }
  
  export default App;