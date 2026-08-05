# Sisques Labs — Landing

Landing page de **Sisques Labs**, estudio de producto digital, construida con
[Astro](https://astro.build). Escaparate de proyectos con enfoque de agencia
de desarrollo.

## Características

- ⚡ **Astro** — HTML estático, cero JS innecesario, rendimiento alto.
- 🌗 **Tema claro / oscuro** con toggle y persistencia (sin parpadeo en carga).
- 🌍 **Bilingüe ES / EN** con i18n nativo de Astro (`/` en español, `/en/` en inglés).
- 🧩 Secciones: Hero · Proyectos · Servicios · Contacto.
- 🎨 Identidad propia: tipografía display, acento lima, textura de grano y micro-interacciones.
- ♿ Accesible y responsive, con `prefers-reduced-motion` respetado.

## Desarrollo

```bash
pnpm install
pnpm dev      # servidor local en http://localhost:4321
pnpm build    # genera la web estática en dist/
pnpm preview  # sirve el build de producción
```

## Estructura

```
src/
├─ components/      # Header, Hero, Projects, Services, Contact, Footer, toggles…
├─ content.config.ts  # schema (Zod) de la colección "projects"
├─ content/
│  └─ projects/    # 👉 un .md bilingüe por proyecto (ver "Añadir un proyecto")
├─ data/
│  └─ services.ts  # 👉 edita aquí los servicios
├─ i18n/
│  ├─ ui.ts        # 👉 todos los textos ES/EN
│  └─ utils.ts     # helpers de idioma
├─ layouts/        # Layout base (SEO, fuentes, script de tema)
├─ pages/
│  ├─ index.astro  # versión ES
│  └─ en/index.astro
└─ styles/global.css  # tokens de diseño y temas
```

## Añadir un proyecto

Los proyectos del escaparate son ficheros markdown en `src/content/projects/`,
uno por proyecto, sin necesidad de tocar código:

1. Copia `src/content/projects/_TEMPLATE.md` a `tu-proyecto.md` en la misma carpeta.
2. Rellena el frontmatter (nombre, categoría, resumen, rol y tags — categoría,
   resumen y rol van por duplicado `_es` / `_en` para el bilingüe; el resto de
   campos, como los tags, se comparten). Usa `order` para controlar la posición.
3. Guarda y ejecuta `npm run dev` — Astro valida el schema (`src/content.config.ts`)
   y avisa en build si falta algún campo o el tipo no encaja.

## Cómo personalizar

- **Servicios:** edita `src/data/services.ts`.
- **Textos:** todos los copys están en `src/i18n/ui.ts`.
- **Colores / tema:** las variables CSS viven en `src/styles/global.css`.
- **Email de contacto:** el formulario abre el cliente de correo (`mailto:`).
  Cámbialo por Formspree o un endpoint propio en `src/components/Contact.astro`.

---

Hecho con obsesión por el detalle.
