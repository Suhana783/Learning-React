import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [message, setMessage] = useState("");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (language) {
      setMessage(`Your language preference is saved: ${language}`);
      const timer = setTimeout(() => setMessage(""), 1000); 
      return () => clearTimeout(timer);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, message }}>
      {children}
    </LanguageContext.Provider>
  );
};
