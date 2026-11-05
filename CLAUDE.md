# Lau Pastelería — página web

One-page para **Lau Pastelería** (pastelería de Laura, Barranquilla). Leandro la construye para **practicar Next.js** mientras estudia para entrevistas de frontend.

## Cómo trabajar conmigo (modo aprendizaje)

- **Responde en español.** Los nombres de código, commits y variables van en inglés.
- **Yo escribo el código.** Guíame paso a paso: dime qué archivo tocar, qué hacer y **por qué**. No edites ni crees archivos a menos que te lo pida explícitamente ("hazlo tú", "créalo").
- **Revisa lo que hago.** Cuando te muestre código o un error, señala el problema, explica la causa y deja que yo lo corrija.
- **Explica el concepto de Next.js detrás de cada paso** (Server vs Client Components, `layout.tsx`, `next/font`, `next/image`, metadata, Cache Components, `generateStaticParams`, etc.). De vez en cuando hazme una pregunta corta de práctica, como en una entrevista.
- **Pasos cortos.** Un paso a la vez; espera a que te confirme antes de seguir.
- **Nunca** ejecutes `deploy`, `git push` ni compres o configures nada en Cloudflare sin preguntarme.
- Si una API de Next.js 16 o de OpenNext no la tienes clara, dilo y revisa la documentación oficial en vez de suponer.

## Stack y decisiones

- **Next.js 16** (el real, no vinext) + **TypeScript** + **Tailwind CSS** + App Router + carpeta `src/`.
- **Hosting:** Cloudflare Workers (plan gratis) con el adaptador **OpenNext** (`@opennextjs/cloudflare`). Límite del worker en plan gratis: 3 MiB comprimido.
- **Dominio:** `laupasteleriabaq.com` (ya comprado en Cloudflare). Correo: no se configura por ahora.
- **Repositorio:** GitHub personal de Leandro, `lau-pasteleria`.
- **Página 100 % estática.** Sin backend, sin base de datos, sin formularios: los pedidos van por WhatsApp.
- **Sin precios** en la página (varían según tamaño y decoración).

## Comandos

Confirma los nombres exactos en `package.json`; con la plantilla de OpenNext suelen ser:

- `npm run dev` — servidor de desarrollo de Next.js (localhost:3000)
- `npm run preview` — compila con OpenNext y prueba en el runtime de Workers en local
- `npm run deploy` — compila y publica en Cloudflare (**pedir permiso antes**)
- `npm run cf-typegen` — genera los tipos de los bindings de Cloudflare
- `npm run lint`

## Diseño (referencia aprobada)

Existe un diseño de referencia (desktop 1440 px y celular 390 px) en un artifact privado de Leandro. Si necesitas un detalle, pregúntale.

**Colores**

| Uso | Color |
| --- | --- |
| Acento / botones (café) | `#8C603F` (texto blanco encima, contraste 5,4:1) |
| Texto principal | `#3B2A20` |
| Texto secundario | `#6B5446` |
| Fondo crema | `#FFF8F1` |
| Rosa pastel | `#F6D3DE` |
| Latte | `#EBDCCB` |
| Texto claro sobre café oscuro | `#E8D9CC` / `#FBEFE6` |
| Botón WhatsApp | `#25D366` |

**Tipografías** (con `next/font/google`): **Fredoka** (títulos), **Mulish** (texto), **Allura** (detalles en cursiva).

**Estilo:** bordes muy redondeados (tarjetas 24–36 px, botones tipo pastilla), fotos grandes, mucho aire. Mobile-first: en celular el menú se desplaza horizontal, los títulos bajan a ~38/30 px y las columnas pasan a una.

**Logo:** versión horizontal ("Lau" en cursiva + PASTELERÍA + hojas) en negro, café y blanco (SVG). El blanco va en el footer sobre café.

## Estructura de la página (one-page)

Menú fijo arriba; cada enlace hace **scroll suave** a su sección (`id` + `scroll-behavior: smooth`, con `scroll-margin-top` para que el header no tape el título).

1. **Header** fijo: logo + menú + botón "Pedir por WhatsApp" (en celular el botón se oculta; queda el flotante).
2. **Inicio (hero):** "Tortas, postres y sorpresas hechos para celebrar" + foto de torta de cumpleaños.
3. **Temporada** (opcional, se activa/desactiva): ahora **Navidad**, con torta navideña y flan. Botón "Pide tu postre navideño".
4. **Productos:** bloque destacado (torta personalizada de dos pisos) + 6 tarjetas, cada una con botón "Cotizar" a WhatsApp con mensaje prellenado.
5. **Para empresas:** catering y cajas sorpresa corporativas; nota "Facturación electrónica" (informativa, que **no** parezca botón); botón "Cotizar para mi empresa".
6. **Para eventos:** servicios opcionales en chips + foto.
7. **Galería:** fotos + Instagram + bloque "Nuestras mesas en video" (5 videos verticales 9:16, fila deslizable, `muted autoplay loop playsInline`).
8. **Cómo pedir:** 3 pasos; el 3.º: "Haz tu pedido con 3 días de anticipación para asegurar tu fecha."
9. **Sobre nosotros:** foto de la chef + texto de Laura.
10. **Contacto** (fondo café oscuro): WhatsApp, Instagram, entregas.
11. **Botón flotante de WhatsApp** siempre visible.

## Datos del negocio (textos reales — no inventar otros)

- **WhatsApp:** +57 316 739 8814 → `https://wa.me/573167398814?text=...` (mensaje prellenado con `encodeURIComponent`). El número 300 735 1531 de algunas etiquetas **no** se usa.
- **Instagram:** [@laupasteleria.baq](https://www.instagram.com/laupasteleria.baq/)
- **Entregas:** solo a domicilio (ya no hay local físico) en Barranquilla, Soledad y Puerto Colombia, incluida Villa Campestre.
- **Anticipación:** pedidos con 3 días.
- **Sobre nosotros:** "Hola, soy Laura. Soy una emprendedora con más de 10 años llevando productos deliciosos a muchas familias barranquilleras. En Lau Pastelería preparamos desde ricos postres hasta deliciosa comida de sal, para que en cada celebración haya algo para todos."

**Productos**

- **Tortas básicas:** vainilla con relleno de arequipe · chocolate con relleno de chocolate · zanahoria con frosting de queso crema · limón y arándanos con frosting de queso crema.
- **Tortas personalizadas:** las mismas bases, con más elaboración: fondant, papelería, temáticas, fechas especiales; de uno o varios pisos.
- **Sorpresas:** cajas sorpresa, desayunos sorpresa.
- **Postres:** galletas decoradas, alfajores, macarons, brownies, cakepops, cupcakes, postres en shot y en frasco, mini flan, mini cheesecake, tartaletas, trufas, fresas con chocolate, mini parfait, mini donas.
- **Dips:** pimentón, mexicano, cuatro quesos, uchuva, tocineta y finas hierbas, pesto y tomates secos, feta-espinaca-frutos secos, atún, frutos rojos, hummus, antipasto, caprese.
- **Horneados y picadas:** croissants, pastelitos, deditos, mini volovanes, mini pizzas, mini hamburguesas, mini perros, mini fritos, tablas de queso, nuggets.
- **Combos:** mini horneados surtidos (25/50/100), mini croissants, mini club sandwich, pinchos de frutas, pancakes y caprese, mini waffles de yuca, mini wraps.
- **Empresas (catering / cajas corporativas, ajustado a presupuesto, con factura electrónica):** mini croissants rellenos, mini horneados, mini parfait, quesos y charcutería, canapés, mini hamburguesas, sándwich club, pinchos, dips con tostadas, deditos, pastelitos, mini waffles de yuca, tablas de frutas, bruschettas.
- **Eventos (opcionales):** tablas de queso, tortas personalizadas, mesa de dulces, dispensador de jugo/mimosa/agua saborizada, dispensador de café, jarra de sangría, bouquet de globos, arreglo de flores.

## SEO (prioridad alta)

- `metadata` en `layout.tsx`/`page.tsx`: título y descripción con palabras clave locales ("tortas personalizadas en Barranquilla", "postres", "catering para empresas", "cajas sorpresa"). `lang="es-CO"`, Open Graph con foto.
- **JSON-LD** tipo `Bakery`: nombre, teléfono, Instagram (`sameAs`), `areaServed` (Barranquilla, Soledad, Puerto Colombia). Sin dirección física.
- `app/sitemap.ts` y `app/robots.ts`.
- Un solo `<h1>`; jerarquía correcta de `h2`/`h3`; HTML semántico (`header`, `nav`, `main`, `section`, `footer`).
- Todas las imágenes con `alt` descriptivo en español; `next/image` con `sizes` correcto; la foto del hero con prioridad de carga y el resto con lazy loading.
- Fotos optimizadas antes de subirlas (WebP, ~1600 px máximo). Videos comprimidos (540×960, sin audio) y con `preload="none"`; si pesan mucho, alojarlos en Cloudflare R2 en vez del repositorio.
- Medir con Lighthouse (meta: 90+ en móvil).

## Accesibilidad

- Contraste AA (ya validado en la paleta). Botones y enlaces de mínimo 44 px de alto.
- El botón flotante y los de WhatsApp con `aria-label` claro.
- Respetar `prefers-reduced-motion` (desactivar el scroll suave y el autoplay de los videos).

## Pendientes

- Nombre/sabor de la torta con hierbabuena de la galería (para su `alt`).
- La torta destacada usa personajes de Bluey (decisión de Leandro mantenerla).

## Etapas

1. ✅ Dominio y cuenta de Cloudflare
2. Proyecto base (crear, correr en local, subir a GitHub) ← **estamos aquí**
3. Maquetar sección por sección
4. SEO
5. Desplegar en Cloudflare y conectar el dominio
6. Google Search Console y Perfil de Empresa de Google
