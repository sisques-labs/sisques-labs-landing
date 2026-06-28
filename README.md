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
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web estática en dist/
npm run preview  # sirve el build de producción
```

## Estructura

```
src/
├─ components/      # Header, Hero, Projects, Services, Contact, Footer, toggles…
├─ data/
│  ├─ projects.ts  # 👉 edita aquí los proyectos del escaparate (placeholders)
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

## Cómo personalizar

- **Proyectos:** edita `src/data/projects.ts` (nombre, categoría, resumen, tags,
  año, rol, enlace y color de acento). Los actuales son placeholders.
- **Servicios:** edita `src/data/services.ts`.
- **Textos:** todos los copys están en `src/i18n/ui.ts`.
- **Colores / tema:** las variables CSS viven en `src/styles/global.css`.
- **Email de contacto:** el formulario abre el cliente de correo (`mailto:`).
  Cámbialo por Formspree o un endpoint propio en `src/components/Contact.astro`.

---

Hecho con obsesión por el detalle.
