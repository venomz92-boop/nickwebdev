import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Dictionary } from "./en";
import {
  detectLanguage,
  getLanguage,
  readStoredLanguage,
  storeLanguage,
  type LanguageCode,
} from "./languages";
import { ms } from "./ms";

const dictionaries: Record<LanguageCode, Dictionary> = { en, ms };

type I18nContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  /** Copy for the active language. */
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Keeps the document in sync with the active language: the `lang`
 * attribute (used by screen readers and by `:lang()` styles), the page
 * title, and the search/social preview metadata from index.html.
 */
function applyDocumentLanguage(language: LanguageCode) {
  const { htmlLang, openGraphLocale } = getLanguage(language);
  const dictionary = dictionaries[language];

  document.documentElement.lang = htmlLang;
  document.title = dictionary.meta.title;

  const setMetaContent = (selector: string, content: string) => {
    document.querySelector(selector)?.setAttribute("content", content);
  };

  setMetaContent('meta[name="description"]', dictionary.meta.description);
  setMetaContent('meta[property="og:title"]', dictionary.meta.ogTitle);
  setMetaContent('meta[property="og:description"]', dictionary.meta.ogDescription);
  setMetaContent('meta[property="og:locale"]', openGraphLocale);
  setMetaContent('meta[name="twitter:title"]', dictionary.meta.ogTitle);
  setMetaContent(
    'meta[name="twitter:description"]',
    dictionary.meta.twitterDescription,
  );
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(
    () => readStoredLanguage() ?? detectLanguage(),
  );

  const setLanguage = useCallback((next: LanguageCode) => {
    setLanguageState(next);
    storeLanguage(next);
  }, []);

  // A layout effect runs before paint, so a saved BM preference does not
  // flash English typography for a frame on load.
  useLayoutEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext);

  if (!value) {
    throw new Error("useI18n must be used inside an I18nProvider.");
  }

  return value;
}
