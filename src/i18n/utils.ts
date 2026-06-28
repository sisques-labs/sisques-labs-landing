import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a localized path. ES is the default and has no prefix. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean === "/" ? "/" : clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/** Given the current URL, return the path for the other language. */
export function getAlternateLangPath(url: URL, lang: Lang): string {
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments[0] === "en") segments.shift();
  const base = "/" + segments.join("/");
  return localizePath(base === "/" ? "/" : base, lang);
}
