import type { Lang } from "../i18n/utils";

export interface Project {
  /** Stable id, used for anchors and keys */
  id: string;
  /** Display name (same in both languages unless overridden) */
  name: string;
  /** Short category shown as a label */
  category: { es: string; en: string };
  /** One-line pitch */
  summary: { es: string; en: string };
  /** Tech / disciplines tags */
  tags: string[];
  year: string;
  role: { es: string; en: string };
  /** Outbound link (placeholder for now) */
  url: string;
  /** Accent color used on the card */
  accent: string;
}

// 👇 Placeholders editables. Cambia textos, tags, años y enlaces a tu gusto.
export const projects: Project[] = [
  {
    id: "nimbus",
    name: "Nimbus",
    category: { es: "Plataforma SaaS", en: "SaaS Platform" },
    summary: {
      es: "Panel de analítica en tiempo real para equipos de producto, con paneles colaborativos y alertas inteligentes.",
      en: "Real-time analytics dashboard for product teams, with collaborative boards and smart alerts.",
    },
    tags: ["Astro", "TypeScript", "PostgreSQL", "WebSockets"],
    year: "2025",
    role: { es: "Diseño + Full-stack", en: "Design + Full-stack" },
    url: "#",
    accent: "#C8FF3D",
  },
  {
    id: "harbor",
    name: "Harbor",
    category: { es: "App móvil", en: "Mobile App" },
    summary: {
      es: "Banca para autónomos: facturación, impuestos y categorización automática de gastos con IA.",
      en: "Banking for freelancers: invoicing, taxes and AI-powered expense categorization.",
    },
    tags: ["React Native", "Node", "OpenAI", "Stripe"],
    year: "2024",
    role: { es: "Producto + Ingeniería", en: "Product + Engineering" },
    url: "#",
    accent: "#7CC4FF",
  },
  {
    id: "atlas",
    name: "Atlas",
    category: { es: "Marketplace", en: "Marketplace" },
    summary: {
      es: "Mercado B2B de componentes industriales con buscador semántico y logística integrada.",
      en: "B2B marketplace for industrial parts with semantic search and integrated logistics.",
    },
    tags: ["Next.js", "Elasticsearch", "Go", "Stripe Connect"],
    year: "2024",
    role: { es: "Arquitectura + Frontend", en: "Architecture + Frontend" },
    url: "#",
    accent: "#FF8A5C",
  },
  {
    id: "lumen",
    name: "Lumen",
    category: { es: "IA aplicada", en: "Applied AI" },
    summary: {
      es: "Asistente de soporte que aprende de tu documentación y resuelve el 70% de los tickets sin humanos.",
      en: "Support assistant that learns from your docs and resolves 70% of tickets without humans.",
    },
    tags: ["Python", "RAG", "Claude", "Qdrant"],
    year: "2025",
    role: { es: "I+D + Ingeniería", en: "R&D + Engineering" },
    url: "#",
    accent: "#C792FF",
  },
  {
    id: "meridian",
    name: "Meridian",
    category: { es: "Web corporativa", en: "Corporate Web" },
    summary: {
      es: "Rediseño y plataforma de contenidos para una firma de inversión, con CMS a medida y rendimiento extremo.",
      en: "Redesign and content platform for an investment firm, with a custom CMS and extreme performance.",
    },
    tags: ["Astro", "Sanity", "Motion", "Edge"],
    year: "2023",
    role: { es: "Diseño + Desarrollo", en: "Design + Development" },
    url: "#",
    accent: "#5CE6B8",
  },
  {
    id: "forge",
    name: "Forge",
    category: { es: "Herramienta interna", en: "Internal Tool" },
    summary: {
      es: "Panel de operaciones que unifica datos de 12 sistemas en una única vista accionable para el equipo.",
      en: "Operations panel that unifies data from 12 systems into a single actionable view for the team.",
    },
    tags: ["SvelteKit", "GraphQL", "Postgres", "Temporal"],
    year: "2023",
    role: { es: "Full-stack", en: "Full-stack" },
    url: "#",
    accent: "#FFD24C",
  },
];

export function localizeProject(p: Project, lang: Lang) {
  return {
    ...p,
    category: p.category[lang],
    summary: p.summary[lang],
    role: p.role[lang],
  };
}
