import { useI18n } from "../i18n";
import { languages } from "../i18n/languages";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t.common.languageSwitcher}
    >
      {languages.map((option) => {
        const isActive = option.code === language;

        return (
          <button
            key={option.code}
            className={`lang-switch__option${isActive ? " is-active" : ""}`}
            type="button"
            lang={option.htmlLang}
            aria-pressed={isActive}
            title={option.name}
            onClick={() => setLanguage(option.code)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
