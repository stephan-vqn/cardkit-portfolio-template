# guide-en.md

🇬🇧 **English**  
Portfolio template customization guide.

---

## Table of contents

- [EN — English guide](#en--english-guide)
  - [1. What this guide is for](#1-what-this-guide-is-for)
  - [2. Recommended order](#2-recommended-order)
  - [3. Placeholders used in the HTML](#3-placeholders-used-in-the-html)
  - [4. Text to edit directly in the HTML](#4-text-to-edit-directly-in-the-html)
  - [5. Links, files and paths to replace](#5-links-files-and-paths-to-replace)
  - [6. Colors, fonts and theme](#6-colors-fonts-and-theme)
  - [7. SEO, social sharing and favicon](#7-seo-social-sharing-and-favicon)
  - [8. JavaScript, map and fallbacks](#8-javascript-map-and-fallbacks)
  - [9. Deliverables](#9-deliverables)
  - [10. Lucide icons](#10-lucide-icons)
  - [11. Final check](#11-final-check)

---

# EN — English guide

## 1. What this guide is for

This file helps you quickly identify everything that needs to be adapted before publishing.

It is based on the files currently present in the project:

- `index.html`
- `assets/css/style.css`
- `assets/js/script.js`

It helps you identify:

- the placeholders that are actually present in the HTML;
- the example text that is **not** inside brackets;
- the temporary links that need to be replaced;
- the files expected in `assets/images/` and `assets/docs/`;
- the useful theme colors, fonts and variables;
- the few JavaScript values that need to be edited.

Important:

- everything inside brackets must be replaced;
- everything already written plainly in the HTML must be reviewed and adapted;
- this guide describes the template as it exists on the project publication date.

> **Note**  
> This guide was translated from the French version. I am not a native English speaker, so there may be a few small translation issues. If something sounds unclear, feel free to let me know — only regarding the translation, not the technical content.

---

## 2. Recommended order

Work in this order:

1. Replace the site identity: name, title, SEO description, footer.
2. Fill in the sidebar: image, expertises, location, social links.
3. Rewrite the intro text and section titles if needed.
4. Fill in the projects, skills, background and contact sections.
5. Add the real images in `assets/images/`.
6. Then adjust the colors, fonts and favicon if you want.
7. Finish with the map, deliverables, links and final check.

Examples:

- `[FULL_NAME]` → `Alex Carter`
- `[JOB_TITLE]` → `Web Designer & Front-end Developer`
- `[PROJECT_TITLE_01]` → `Portfolio Redesign`
- `[TOOL_01]` → `Figma`

---

## 3. Placeholders used in the HTML

### 3.1 Identity, SEO and footer

| Placeholder | Role | Example |
|---|---|---|
| `[FULL_NAME]` | Full name displayed in the `<title>`, the author meta, the hero and some `alt` attributes | `Alex Carter` |
| `[JOB_TITLE]` | Main profile title | `Web Designer & Front-end Developer` |
| `[SEO_DESCRIPTION]` | Short portfolio description for SEO and sharing previews | `Portfolio focused on interface design, front-end integration and digital content.` |
| `[SITE_OWNER]` | Name displayed in the footer | `Alex Carter` |
| `[YEAR]` | Year displayed in the footer | `2026` |

### 3.2 Sidebar and profile

| Placeholder | Role | Example |
|---|---|---|
| `[PROFILE_IMAGE]` | Filename displayed in the profile image fallback | `profile-image.webp` |
| `[EXPERTISE_1]` | Badge 1 in the sidebar | `UI Design` |
| `[EXPERTISE_2]` | Badge 2 in the sidebar | `Front-end` |
| `[EXPERTISE_3]` | Badge 3 in the sidebar | `Community Management` |
| `[LOCATION]` | City or location | `Paris (75)` |
| `[AREA]` | Region, country or wider area | `Île-de-France` |

### 3.3 Availability

| Placeholder | Role | Example |
|---|---|---|
| `[AVAILABILITY_PERIOD]` | Availability period | `May to June 2026` |
| `[AVAILABILITY_DURATION]` | Desired duration | `140 hours` |
| `[TARGET_LOCATION]` | Target area | `Lyon and surrounding area` |
| `[WORK_FORMAT]` | Work format | `On-site, hybrid or remote` |

### 3.4 Projects

#### Main placeholders

| Placeholder | Role | Example |
|---|---|---|
| `[PROJECT_TITLE_01]` to `[PROJECT_TITLE_04]` | Project title | `Portfolio visual redesign` |
| `[PROJECT_TYPE_01]` to `[PROJECT_TYPE_04]` | Project type | `Landing page`, `Showcase website`, `Case study` |
| `[PROJECT_ROLE_01]` to `[PROJECT_ROLE_04]` | Role in the project | `Web design`, `Front-end integration`, `WordPress` |
| `[PROJECT_DATE_01]` to `[PROJECT_DATE_04]` | Date or period | `2026` |
| `[PROJECT_SETTING_01]` to `[PROJECT_SETTING_04]` | Project setting / context | `Personal project`, `Training project`, `Client project` |

#### Project images

| Placeholder | Role | Example |
|---|---|---|
| `[PROJECT_IMAGE_01]` to `[PROJECT_IMAGE_04]` | Name displayed in the fallback if the image is missing | `project-01-preview.webp` |

#### Tools

| Placeholder | Role | Example |
|---|---|---|
| `[TOOL_01]` to `[TOOL_16]` | Tools or technologies used in the project sheets | `Figma`, `HTML`, `CSS`, `JavaScript` |

#### Deliverables

| Placeholder | Role | Example |
|---|---|---|
| `[DELIVERABLE_01]` to `[DELIVERABLE_12]` | Name displayed for each deliverable | `Case Study PDF`, `Wireframes`, `Final mockups` |

### 3.5 Skills

#### Tools, methods and monitoring

| Placeholder | Role | Example |
|---|---|---|
| `[TOOL_NAME_01]` | Tool or software | `Figma` |
| `[TOOL_NAME_02]` | Tool or software | `Photoshop` |
| `[METHOD_NAME_01]` | Method or practice | `Wireframing` |
| `[METHOD_NAME_02]` | Method or practice | `Prototyping` |
| `[CMS_NAME_01]` | CMS or publishing tool | `WordPress` |
| `[CMS_NAME_02]` | CMS or publishing tool | `Elementor` |
| `[SEO_OR_ANALYTICS]` | SEO or analytics tool / notion | `On-page SEO` |
| `[CHANNEL_OR_SKILL_01]` to `[CHANNEL_OR_SKILL_03]` | Channel or skill | `Web writing`, `Instagram`, `Editorial planning` |
| `[TOPIC_01]` | Monitoring topic | `Web accessibility` |
| `[TOPIC_02]` | Monitoring topic | `UI design` |
| `[TOOLWATCH_01]` | Monitoring source or tool | `Google Alerts` |
| `[PRACTICE_01]` | Work practice | `Scrum project management` |

#### Soft skills

| Placeholder | Role | Example |
|---|---|---|
| `[SOFT_SKILL_01]` to `[SOFT_SKILL_06]` | Professional qualities | `Clarity`, `Curiosity`, `Thoroughness`, `Listening` |

#### Transferable skills

| Placeholder | Role | Example |
|---|---|---|
| `[TRANSFERABLE_SKILL_01]` to `[TRANSFERABLE_SKILL_06]` | Transferable skills | `Analysis`, `Writing`, `Synthesis`, `Management` |

### 3.6 Background and education

#### Experience

| Placeholder | Role | Example |
|---|---|---|
| `[EXPERIENCE_TITLE_01]` to `[EXPERIENCE_TITLE_03]` | Experience title | `Digital communication assistant` |
| `[ORGANIZATION_01]` to `[ORGANIZATION_03]` | Organization name | `Studio Example` |
| `[CITY_01]` to `[CITY_03]` | City | `Lyon (69)` |
| `[REGION_01]` to `[REGION_03]` | Region / country / area | `Auvergne-Rhône-Alpes` |
| `[DATE_RANGE_01]` to `[DATE_RANGE_03]` | Period | `2025 — 2026` |

#### Education

| Placeholder | Role | Example |
|---|---|---|
| `[DEGREE_OR_TRAINING_01]` to `[DEGREE_OR_TRAINING_03]` | Degree or training | `Bachelor in Information and Communication` |
| `[CERTIFICATION_OR_TRAINING_04]` | Certification or short course | `OpenClassrooms Certificate` |
| `[SCHOOL_01]` to `[SCHOOL_03]` | Institution | `ULB` |
| `[CITY_04]` to `[CITY_06]` | City | `Brussels` |
| `[REGION_04]` to `[REGION_06]` | Region / country | `Belgium` |
| `[DATE_RANGE_04]` to `[DATE_RANGE_07]` | Period | `2023 — 2026` |

---

## 4. Text to edit directly in the HTML

Not everything is written as a placeholder. A lot of content is still example text.

### 4.1 Navigation, buttons and general labels

You can edit these directly if necessary:

- `Aller au contenu principal` (`Skip to main content`)
- `Me contacter` (`Contact me`)
- `Disponible stage / alternance` (`Available for internship / apprenticeship`)
- `À propos` (`About`)
- `Projets` (`Projects`)
- `Compétences` (`Skills`)
- `Parcours` (`Background` or `Journey`)
- `Contact`
- `Retour aux projets` (`Back to projects`)
- `Voir le projet` (`View project`)

### 4.2 “About” section

Rewrite directly:

- the paragraph under `Qui suis-je` (`Who am I`)
- the paragraph under `Recherche de Stage / Alternance` (`Looking for an Internship / Apprenticeship`)
- the text inside the `Objectif` (`Goal`) block
- `Mes domaines de spécialisation` (`My areas of specialization`)
- `Domaine 1`, `Domaine 2`, `Domaine 3` (`Area 1`, `Area 2`, `Area 3`)
- the 3 related paragraphs
- `Mes piliers` (`My core values`)
- `Valeur 1`, `Valeur 2`, `Valeur 3` (`Value 1`, `Value 2`, `Value 3`)
- the 3 related paragraphs
- the labels `Dates`, `Durée` (`Duration`), `Localisation` (`Location`), `Format` (`Format`)

### 4.3 “Projects” section

Rewrite directly:

- the intro paragraph of the `Projets` (`Projects`) section
- the short summaries of the 4 project cards
- the image fallback help text: `Ajouter une image dans assets/images/` (`Add an image in assets/images/`)
- the text `Ajouter ici le visuel principal du projet` (`Add the main project visual here`)
- `Contexte` (`Context`) and its paragraph
- `Description` and its paragraph
- `Objectifs` (`Objectives`) and its lists
- `Résultats` (`Results`) and its lists
- `Livrables` (`Deliverables`)
- the labels `Type`, `Date`, `Cadre` (`Context` / `Setting`), `Rôle` (`Role`)

### 4.4 “Skills” section

There is already text written in the HTML. Edit it if needed:

- the section intro paragraph
- `Design d’interface` (`UI design`)
- `Front-end`
- `CMS et publication` (`CMS and publishing`)
- `Communication`
- `Veille et méthodes` (`Monitoring and methods`)
- `Soft skills`
- `Compétences transférables` (`Transferable skills`)
- `HTML5`, `CSS3`, `JavaScript` if you want different labels
- all the explanation sentences already written under the items

### 4.5 “Journey” section

Rewrite directly:

- `Expériences` (`Experience`)
- the 3 descriptive text blocks under the experience items
- `Formation` (`Education` / `Training`)
- the 4 descriptive text blocks under education / certification

### 4.6 “Contact” section

Rewrite directly:

- the intro paragraph of the `Contact` section
- `Liens et coordonnées` (`Links and contact details`)
- `Email`, `LinkedIn`, `GitHub`, `Site web` (`Website`)
- `Localisation` (`Location`)
- the map text and the no-JavaScript message

Tip: if you change the site language, make sure you also update all these fixed texts. The placeholders alone are not enough.

---

## 5. Links, files and paths to replace

### 5.1 Temporary links present in the HTML

Replace everywhere:

- `mailto:email@example.com`
- `email@example.com`
- `https://linkedin.com/in/username`
- `linkedin.com/in/username`
- `https://github.com/username`
- `github.com/username`
- `https://example.com`

Never leave `example.com` on a published site.

### 5.2 Expected files in `assets/images/`

The template expects at minimum:

- `assets/images/profile-image.webp`
- `assets/images/project-01-preview.webp`
- `assets/images/project-02-preview.webp`
- `assets/images/project-03-preview.webp`
- `assets/images/project-04-preview.webp`
- `assets/images/favicon.svg`

### 5.3 Possible files in `assets/docs/`

The HTML does not enforce one exact filename, but the deliverables naturally point to `assets/docs/`.

Simple examples:

- `assets/docs/case-study.pdf`
- `assets/docs/wireframes.pdf`
- `assets/docs/final-mockup.pdf`
- `assets/docs/cv.pdf`

### 5.4 Project image: watch out for the double location

Each project image is used in **two places**:

- in the project card;
- in the detailed project page.

If you change a filename, update both paths.

---

## 6. Colors, fonts and theme

## 6.1 Changing colors simply

If you only want to adapt the palette without redesigning the whole template, start with these variables in `assets/css/style.css`.

### Light theme

```css
:root {
  --theme-color-light: #f3efe9;
  --bg: #f3efe9;
  --surface: #f0ece8;
  --surface-alt: #f8f6f4;
  --card: #ffffff;
  --fg: #3b3533;
  --fg-muted: #6e6b69;
  --primary: #9a5d4a;
  --primary-hover: #7a4d3a;
  --secondary: #5f6d65;
  --tertiary: #8a7a63;
  --border: #3b35331c;
  --border-strong: #9a5d4a38;
}
```

### Dark theme

```css
html[data-theme="dark"] {
  --theme-color-dark: #141311;
  --bg: #141311;
  --surface: #211e1b;
  --surface-alt: #1a1816;
  --card: #1c1917;
  --fg: #ece5dd;
  --fg-muted: #a39a93;
  --primary: #c7836c;
  --primary-hover: #d9947c;
  --secondary: #7b8a82;
  --tertiary: #a69473;
  --border: #ece5dd17;
  --border-strong: #c7836c3d;
}
```

You can already do a lot with these variables.

### What to avoid

Do not rename these two variables if you are not editing the JavaScript too:

- `--theme-color-light`
- `--theme-color-dark`

The theme uses them for the `theme-color` meta tag.

## 6.2 Changing fonts

The template currently loads:

- `Instrument Sans` for body text;
- `Sora` for headings.

You need to update **two places**:

### 1. The Google Fonts link in `index.html`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 2. The variables in `assets/css/style.css`

```css
:root {
  --font-sans: 'Instrument Sans', system-ui, sans-serif;
  --font-heading: 'Sora', var(--font-sans);
}
```

### What is a fallback?

A **fallback** is a backup font.

Example:

```css
--font-sans: 'Instrument Sans', system-ui, sans-serif;
```

That means:

1. the browser first tries to use `Instrument Sans`;
2. if it does not load, it uses `system-ui`;
3. if needed, it ends with the generic `sans-serif` family.

Always keep a fallback.

## 6.3 Light / dark theme

The template works with only two themes:

- `light`
- `dark`

The JavaScript reads the CSS colors and automatically updates the `theme-color` meta tag.

---

## 7. SEO, social sharing and favicon

### 7.1 Already active in the HTML

The template already contains:

```html
<title>[FULL_NAME] — [JOB_TITLE] | Portfolio</title>
<meta name="description" content="[SEO_DESCRIPTION]" />
<meta name="author" content="[FULL_NAME]" />
<meta name="robots" content="noindex, nofollow" />
<meta name="theme-color" id="themeColorMeta" content="#f3efe9" />
<link rel="icon" href="assets/images/favicon.svg" type="image/svg+xml" />
<meta property="og:type" content="website" />
<meta property="og:title" content="[FULL_NAME] — [JOB_TITLE] | Portfolio" />
<meta property="og:description" content="[SEO_DESCRIPTION]" />
<meta property="og:locale" content="fr_FR" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[FULL_NAME] — [JOB_TITLE] | Portfolio" />
<meta name="twitter:description" content="[SEO_DESCRIPTION]" />
```

### 7.2 Replace right away

Before publishing, replace at minimum:

- `[FULL_NAME]`
- `[JOB_TITLE]`
- `[SEO_DESCRIPTION]`

### 7.3 While the site is not public

Keep:

```html
<meta name="robots" content="noindex, nofollow" />
```

Remove it only when the site is truly ready to be indexed.

### 7.4 Add later

When the final public URL is known, you can add:

```html
<link rel="canonical" href="https://your-domain.com/" />
<meta property="og:url" content="https://your-domain.com/" />
<meta property="og:image" content="https://your-domain.com/assets/images/seo-image.jpg" />
<meta name="twitter:image" content="https://your-domain.com/assets/images/seo-image.jpg" />
```

Use an absolute public URL, never a local one.

### 7.5 Favicon

The current HTML uses:

```html
<link rel="icon" href="assets/images/favicon.svg" type="image/svg+xml" />
````

The simplest option:

* keep `favicon.svg`;
* simply edit the file itself.

In this template, the current icon is a simple SVG file:

* the background is changed with the color of `<rect fill="...">`
* the letter is changed directly in the `<text>...</text>` tag
* the letter color is changed with `fill="..."` inside `<text>`

Example:

* `fill="#141311"` in `<rect>` = background color
* `>A</text>` = displayed letter
* `fill="#c7836c"` in `<text>` = letter color

If you change the name or format, also update the `href` and the `type`.

---

## 8. JavaScript, map and fallbacks

## 8.1 Map

In `assets/js/script.js`, edit **both** of the following:

```js
const defaultCoordinates = [48.8566, 2.3522];
```

```js
.bindPopup('Paris — personnaliser la localisation dans assets/js/script.js');
```

You need to replace:

- the coordinates;
- the popup text.

Example:

```js
const defaultCoordinates = [43.6045, 1.4442];
```

```js
.bindPopup('Lyon — service area');
```

## 8.2 Image fallback

The template displays a **fallback** if an image is missing or fails to load.

Concretely, a fallback is backup content.

Examples in this template:

- missing profile image → a replacement block is displayed;
- missing project image → the filename and a help message are displayed.

You do not need to edit anything in the JS to use it. You only need to:

- keep a real `src` if the image exists;
- correct the path if the image does not display.

## 8.3 `theme-color` meta tag

The JavaScript automatically updates:

```html
<meta name="theme-color" id="themeColorMeta" content="#f3efe9" />
```

from these CSS variables:

- `--theme-color-light`
- `--theme-color-dark`

If you rename these variables, you also need to update:

- the small inline script in the `<head>` of `index.html`;
- the `updateThemeMeta()` function in `assets/js/script.js`.

---

## 9. Deliverables

By default, a deliverable that is not ready stays as a disabled `span`:

```html
<span class="deliverable-link is-disabled" aria-disabled="true">
  <i data-lucide="file-text" aria-hidden="true"></i>
  [DELIVERABLE_01]
</span>
```

When the file or URL is ready, replace this `span` with an `a` link.

### Local file example

```html
<a class="deliverable-link" href="assets/docs/case-study.pdf" target="_blank" rel="noreferrer noopener">
  <i data-lucide="file-text" aria-hidden="true"></i>
  Case Study PDF
</a>
```

### External link example

```html
<a class="deliverable-link" href="https://your-domain.com/case-study" target="_blank" rel="noreferrer noopener">
  <i data-lucide="file-text" aria-hidden="true"></i>
  Case Study
</a>
```

---

## 10. Lucide icons

The template uses **Lucide**.

HTML example:

```html
<i data-lucide="mail" aria-hidden="true"></i>
```

To change an icon, simply replace the name in `data-lucide`.

The JavaScript then reloads the icons automatically.

Useful snippet:

```js
if (window.lucide) {
  window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
}
```

Official reference:

- [lucide.dev](https://lucide.dev)

Icons already used in this template:

- `mail`
- `map-pin`
- `linkedin`
- `github`
- `globe`
- `moon`
- `sun`
- `briefcase`
- `calendar`
- `hourglass`
- `map-pinned`
- `laptop`
- `target`
- `monitor-check`
- `drafting-compass`
- `images`
- `heart`
- `users`
- `lightbulb`
- `arrow-left`
- `file-text`
- `layout`
- `folder`
- `palette`
- `code-2`
- `monitor-smartphone`
- `megaphone`
- `binoculars`
- `graduation-cap`
- `map`

---

## 11. Final check

Before publishing, verify at minimum:

### Identity and SEO

- [ ] `[FULL_NAME]` replaced everywhere
- [ ] `[JOB_TITLE]` replaced everywhere
- [ ] `[SEO_DESCRIPTION]` replaced
- [ ] `[SITE_OWNER]` replaced
- [ ] `[YEAR]` replaced
- [ ] `robots` checked depending on the site status
- [ ] `canonical`, `og:url`, `og:image`, `twitter:image` added only when the final URL is known

### Sidebar and profile

- [ ] profile image added
- [ ] expertises filled in
- [ ] location filled in
- [ ] social links replaced
- [ ] favicon edited if needed

### Projects

- [ ] titles, types, roles, dates and contexts filled in
- [ ] card summaries rewritten
- [ ] `Contexte`, `Description`, `Objectifs`, `Résultats` texts rewritten
- [ ] images stored in `assets/images/`
- [ ] image paths checked in both places
- [ ] deliverables activated or cleanly left disabled

### Skills and background

- [ ] tools, methods, CMS and topics filled in
- [ ] soft skills filled in
- [ ] transferable skills filled in
- [ ] experiences filled in
- [ ] education filled in
- [ ] cities, regions and dates filled in

### Contact and technical

- [ ] real email
- [ ] real LinkedIn
- [ ] real GitHub
- [ ] real website
- [ ] footer updated
- [ ] no `example.com` left
- [ ] map coordinates updated
- [ ] popup text updated
- [ ] `--theme-color-light` and `--theme-color-dark` still consistent with the JS
- [ ] no missing image or document files
