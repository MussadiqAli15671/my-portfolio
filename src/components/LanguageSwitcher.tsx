import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const languages = [
  { code: "en", label: "EN" },
  { code: "ur", label: "UR" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    if (i18n.language === lang) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
  <motion.div className="language-switcher-wrapper">
  <motion.span
    className="language-hint"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.85 }}
    transition={{ delay: 0.4 }}
  >
    You can change language here
  </motion.span>

  <div className="language-switcher">
    {languages.map((lang) => (
      <motion.button
        key={lang.code}
        onClick={() => changeLang(lang.code)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={i18n.language === lang.code ? "active" : ""}
      >
        {lang.label}
      </motion.button>
    ))}
  </div>
</motion.div>

  );
}
