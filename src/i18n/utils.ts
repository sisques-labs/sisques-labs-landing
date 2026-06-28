import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

// Astro injects the configured `base` here (e.g. "/sisques-labs-landing" or "/").
// Normalize to a no-trailing-slash form: "" for root, "/sisques-labs-landing" otherwise.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Remove the deploy base prefix from a pathname, if present. */
function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    const rest = pathname.slice(BASE.length);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname;
}

/** Prepend the deploy base to a root-absolute path. */
function withBase(path: string): string {
  return BASE + path;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = stripBase(url.pathname).split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a localized, base-aware path. ES is the default and has no lang prefix. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const local =
    lang === defaultLang
      ? clean
      : clean === "/"
        ? `/${lang}/`
        : `/${lang}${clean}`;
  return withBase(local);
}

/** Given the current URL, return the base-aware path for the other language. */
export function getAlternateLangPath(url: URL, lang: Lang): string {
  const segments = stripBase(url.pathname).split("/").filter(Boolean);
  if (segments[0] === "en") segments.shift();
  const base = "/" + segments.join("/");
  return localizePath(base === "/" ? "/" : base, lang);
}
