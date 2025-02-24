// Core
import { useState, useRef } from "react";
// import Image from "next/image";
import cx from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

// Styles
import Styles from "./styles/index.module.scss";
// Hooks
import { useOutsideClickCallback } from "@/hooks/useOutsideClickCallback";

const languages = [
  {
    title: "English",
    code: "en",
  },
  {
    title: "Russian",
    code: "ru",
  },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClickCallback(ref, () => setIsOpen(false));

  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find((language) => language.code === router.locale) ||
      languages[0]
  );

  const handleLanguageChange = (languageCode: string) => {
    const newLanguage = languages.find((lang) => lang.code === languageCode);
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
      router.push(router.pathname, router.asPath, { locale: languageCode });
    }
  };

  return (
    <div className={Styles["language-switcher"]} ref={ref}>
      <div
        className={Styles["icon-wrapper"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={Styles.icon}>
          {currentLanguage?.title.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className={cx([Styles.dropdown, isOpen && Styles.open])}>
        <span className={Styles.title}>
          {t("languageSwitcher.languagePreferences")}
        </span>
        <div className={Styles.option}>
          <label htmlFor="defaultLanguage">
            {t("languageSwitcher.defaultLanguage")}
          </label>
          <select
            name="defaultLanguage"
            id="defaultLanguage"
            value={currentLanguage?.code}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {languages.map((language, index) => (
              <option value={language.code} key={index}>
                {language.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
