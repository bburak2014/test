import { useTranslation } from "react-i18next";

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };

  return (
    <div className="flex gap-4 items-center absolute top-5 right-20">
      <button onClick={() => handleLanguageChange("en")}>Eng</button>
      <button onClick={() => handleLanguageChange("tr")}>Tr</button>
    </div>
  );
};

export default LanguageChanger;
