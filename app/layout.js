'use client';

import { LanguageProvider } from '../context/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './styles.css'; // Importando o arquivo CSS

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cenarios App</title>
        {/* Importando a fonte Urbanist do Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <LanguageProvider>
          <div className="navbar">
            <LanguageSelector />
          
          </div>
          <div className="content">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
