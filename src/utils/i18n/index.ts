import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { toast } from 'sonner';
import enUS from './locales/enUS/enUS.json';
import es from './locales/es/es.json';
import ptBR from './locales/ptBR/ptBR.json';

const resources = {
  ptBR: {
    translation: ptBR,
  },
  enUS: {
    translation: enUS
  },
  es: {
    translation: es
  }
};

const initI18n = async () => {
  let savedLanguage;
  
  try {
    savedLanguage = localStorage.getItem('@PlaylistEngine:Lang');
  } catch (error) {
    toast.error('Erro!', {description: "Erro ao carregar idioma"})
    console.error('Erro ao carregar idioma:', error);
  }

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: savedLanguage || 'ptBR',
      fallbackLng: 'ptBR',
      interpolation: { escapeValue: false },
    });
}

export const changeLanguage = async (language: "ptBR" | "enUS" | "es") => {
  try {
    localStorage.setItem('@PlaylistEngine:Lang', language);
    await i18n.changeLanguage(language);
    return true;
  } catch (error) {
    toast.error('Erro!', {description: "Erro ao mudar idioma"})
    console.error('Erro ao mudar idioma:', error);
    return false;
  }
};

initI18n();

export default i18n;