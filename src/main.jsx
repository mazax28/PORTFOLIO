import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './i18n/es/global.json'
import global_en from './i18n/en/global.json'

i18next.init({
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  resources:{
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
  lng: 'es', // default language

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
