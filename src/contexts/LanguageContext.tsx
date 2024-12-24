import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es" | "zh";

interface Translations {
  launchpad: string;
  assets: string;
  dashboard: string;
  connectWallet: string;
  chat: {
    title: string;
    description: string;
    endChat: string;
  };
  footer: {
    about: string;
    terms: string;
    privacy: string;
    contact: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    launchpad: "Launchpad",
    assets: "Assets",
    dashboard: "Dashboard",
    connectWallet: "Connect Wallet",
    chat: {
      title: "Chat Support",
      description: "Chat with our AI assistant or support team",
      endChat: "End Chat",
    },
    footer: {
      about: "About",
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
    },
  },
  es: {
    launchpad: "Lanzamiento",
    assets: "Activos",
    dashboard: "Panel",
    connectWallet: "Conectar Billetera",
    chat: {
      title: "Soporte de Chat",
      description: "Chatea con nuestro asistente AI o equipo de soporte",
      endChat: "Finalizar Chat",
    },
    footer: {
      about: "Acerca de",
      terms: "Términos",
      privacy: "Privacidad",
      contact: "Contacto",
    },
  },
  zh: {
    launchpad: "发射台",
    assets: "资产",
    dashboard: "仪表板",
    connectWallet: "连接钱包",
    chat: {
      title: "聊天支持",
      description: "与我们的AI助手或支持团队聊天",
      endChat: "结束聊天",
    },
    footer: {
      about: "关于",
      terms: "条款",
      privacy: "隐私",
      contact: "联系",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};