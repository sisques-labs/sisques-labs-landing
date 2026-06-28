import type { Lang } from "../i18n/utils";

export interface Service {
  id: string;
  num: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  items: { es: string[]; en: string[] };
}

export const services: Service[] = [
  {
    id: "product",
    num: "01",
    title: { es: "Estrategia de producto", en: "Product strategy" },
    description: {
      es: "Convertimos una idea difusa en un plan claro: qué construir, en qué orden y por qué.",
      en: "We turn a fuzzy idea into a clear plan: what to build, in what order and why.",
    },
    items: {
      es: ["Discovery & roadmap", "Prototipado rápido", "Validación con usuarios"],
      en: ["Discovery & roadmap", "Rapid prototyping", "User validation"],
    },
  },
  {
    id: "design",
    num: "02",
    title: { es: "Diseño de producto", en: "Product design" },
    description: {
      es: "Interfaces que se entienden solas. Sistemas de diseño escalables y cuidados hasta el último píxel.",
      en: "Interfaces that explain themselves. Scalable design systems crafted to the last pixel.",
    },
    items: {
      es: ["UX / UI", "Design systems", "Identidad de marca"],
      en: ["UX / UI", "Design systems", "Brand identity"],
    },
  },
  {
    id: "engineering",
    num: "03",
    title: { es: "Ingeniería", en: "Engineering" },
    description: {
      es: "Código mantenible y rápido. Web, móvil y backend con la tecnología adecuada para cada caso.",
      en: "Maintainable, fast code. Web, mobile and backend with the right tech for each case.",
    },
    items: {
      es: ["Web & apps", "APIs y backend", "Infraestructura cloud"],
      en: ["Web & apps", "APIs & backend", "Cloud infrastructure"],
    },
  },
  {
    id: "ai",
    num: "04",
    title: { es: "IA aplicada", en: "Applied AI" },
    description: {
      es: "Llevamos modelos de lenguaje a producto real: asistentes, automatización y búsqueda inteligente.",
      en: "We bring language models to real products: assistants, automation and smart search.",
    },
    items: {
      es: ["Asistentes & agentes", "RAG y búsqueda", "Automatización"],
      en: ["Assistants & agents", "RAG & search", "Automation"],
    },
  },
];

export function localizeService(s: Service, lang: Lang) {
  return {
    ...s,
    title: s.title[lang],
    description: s.description[lang],
    items: s.items[lang],
  };
}
