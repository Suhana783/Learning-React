import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import './Language.css';

const LanguageSelector = () => {
  const { language, changeLanguage, message } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      <h2>Current Language: {language}</h2>

      <div className="select-wrapper">
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="">Select Option</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>

      <button onClick={() => changeLanguage("")}>Reset</button>
      {message && <p>{message}</p>}
      
    </div>
  );
};

export default LanguageSelector;
