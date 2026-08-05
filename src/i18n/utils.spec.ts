import { describe, expect, it } from "vitest";
import {
  getAlternateLangPath,
  getLangFromUrl,
  localizePath,
  useTranslations,
} from "./utils";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function url(path: string): URL {
  return new URL(`https://example.com${BASE}${path}`);
}

describe("getLangFromUrl", () => {
  it("defaults to es for the root path", () => {
    expect(getLangFromUrl(url("/"))).toBe("es");
  });

  it("detects en from the /en/ prefix", () => {
    expect(getLangFromUrl(url("/en/"))).toBe("en");
  });

  it("falls back to es for an unknown segment", () => {
    expect(getLangFromUrl(url("/fr/"))).toBe("es");
  });
});

describe("useTranslations", () => {
  it("resolves a key for the given language", () => {
    const t = useTranslations("en");
    expect(t("nav.work")).toBe(useTranslations("en")("nav.work"));
  });

  it("falls back to the default language when a key is missing in translation", () => {
    const t = useTranslations("es");
    expect(t("nav.work")).toBeTruthy();
  });
});

describe("localizePath", () => {
  it("builds a base-aware root path for the default language", () => {
    expect(localizePath("/", "es")).toBe(`${BASE}/`);
  });

  it("prefixes the language for a non-default language", () => {
    expect(localizePath("/", "en")).toBe(`${BASE}/en/`);
  });

  it("prefixes a nested path for a non-default language", () => {
    expect(localizePath("/foo", "en")).toBe(`${BASE}/en/foo`);
  });
});

describe("getAlternateLangPath", () => {
  it("returns the en path when currently on es", () => {
    expect(getAlternateLangPath(url("/"), "en")).toBe(`${BASE}/en/`);
  });

  it("returns the es path when currently on en", () => {
    expect(getAlternateLangPath(url("/en/"), "es")).toBe(`${BASE}/`);
  });
});
