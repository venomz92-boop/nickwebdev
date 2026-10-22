/**
 * Language metadata and the saved language preference.
 *
 * Keeping this separate from the dictionaries means the switcher, the
 * <html lang> attribute and the social-preview locale all read from one
 * list. Adding another language is: add an entry here, add a dictionary
 * file, register it in ./index.tsx.
 */
export const languages = [
  {
    code: "en",
    /** Short label shown in the language switcher. */
    label: "EN",
    /** Language name, always written in that language. */
    name: "English",
    htmlLang: "en",
    openGraphLocale: "en_MY",
  },
  {
    code: "ms",
    label: "BM",
    name: "Bahasa Melayu",
    htmlLang: "ms",
    openGraphLocale: "ms_MY",
  },
] as const;

export type LanguageDefinition = (typeof languages)[number];
export type LanguageCode = LanguageDefinition["code"];

export const defaultLanguage: LanguageCode = "en";

export function getLanguage(code: LanguageCode): LanguageDefinition {
  return languages.find((language) => language.code === code) ?? languages[0];
}

export function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

/**
 * Best starting language for a first visit: Malay when the browser asks
 * for it, English otherwise. A saved choice always takes priority.
 */
export function detectLanguage(): LanguageCode {
  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const tag of preferred) {
    const code = tag.toLowerCase();
    if (code.startsWith("ms")) return "ms";
    if (code.startsWith("en")) return "en";
  }

  return defaultLanguage;
}

const STORAGE_KEY = "nicks-webdev:language";

export function readStoredLanguage(): LanguageCode | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguageCode(stored) ? stored : null;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
    return null;
  }
}

export function storeLanguage(language: LanguageCode): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Not being able to remember the choice should never break the page.
  }
}
