# guide-fr.md

🇫🇷 **Français**  
Guide de personnalisation du template portfolio.

---

## Sommaire

- [FR — Guide français](#fr--guide-français)
  - [1. À quoi sert ce guide](#1-à-quoi-sert-ce-guide)
  - [2. Ordre conseillé](#2-ordre-conseillé)
  - [3. Placeholders réellement utilisés dans le HTML](#3-placeholders-réellement-utilisés-dans-le-html)
  - [4. Textes à modifier directement dans le HTML](#4-textes-à-modifier-directement-dans-le-html)
  - [5. Liens, fichiers et chemins à remplacer](#5-liens-fichiers-et-chemins-à-remplacer)
  - [6. Couleurs, polices et thème](#6-couleurs-polices-et-thème)
  - [7. SEO, partage social et favicon](#7-seo-partage-social-et-favicon)
  - [8. JavaScript, carte et fallbacks](#8-javascript-carte-et-fallbacks)
  - [9. Livrables](#9-livrables)
  - [10. Icônes Lucide](#10-icônes-lucide)
  - [11. Vérification finale](#11-vérification-finale)

---

# FR — Guide français

## 1. À quoi sert ce guide

Ce fichier sert à repérer rapidement tout ce qui doit être adapté avant publication.

Il s’appuie sur les fichiers actuellement présents dans le projet :

- `index.html`
- `assets/css/style.css`
- `assets/js/script.js`

Il vous aide à repérer :

- les placeholders vraiment présents dans le HTML ;
- les textes d’exemple qui ne sont **pas** entre crochets ;
- les liens temporaires à remplacer ;
- les fichiers attendus dans `assets/images/` et `assets/docs/` ;
- les couleurs, polices et variables de thème utiles ;
- les quelques valeurs du JavaScript à modifier.

Important :

- tout ce qui est entre crochets doit être remplacé ;
- tout ce qui est déjà écrit en clair dans le HTML doit être relu et adapté ;
- ce guide décrit le template tel qu’il est à la date de publication du projet.

---

## 2. Ordre conseillé

Travaillez dans cet ordre :

1. Remplacez l’identité du site : nom, titre, description SEO, footer.
2. Remplissez la sidebar : image, expertises, localisation, liens sociaux.
3. Réécrivez les textes d’introduction et les titres de sections si besoin.
4. Remplissez les projets, compétences, parcours et contact.
5. Ajoutez les vraies images dans `assets/images/`.
6. Ajustez ensuite les couleurs, les polices et la favicon si vous le souhaitez.
7. Terminez par la carte, les livrables, les liens et la vérification finale.

Exemples :

- `[FULL_NAME]` → `Alex Carter`
- `[JOB_TITLE]` → `Web Designer & Développeur Front-end`
- `[PROJECT_TITLE_01]` → `Refonte Portfolio`
- `[TOOL_01]` → `Figma`

---

## 3. Placeholders utilisés dans le HTML

### 3.1 Identité, SEO et footer

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[FULL_NAME]` | Nom complet affiché dans le `<title>`, l’auteur, le hero et certains attributs `alt` | `Alex Carter` |
| `[JOB_TITLE]` | Intitulé principal du profil | `Web Designer & Développeur Front-end` |
| `[SEO_DESCRIPTION]` | Description courte du portfolio pour le référencement et les aperçus de partage | `Portfolio axé sur le design d’interface, l’intégration front-end et le contenu numérique.` |
| `[SITE_OWNER]` | Nom affiché dans le footer | `Alex Carter` |
| `[YEAR]` | Année affichée dans le footer | `2026` |

### 3.2 Sidebar et profil

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[PROFILE_IMAGE]` | Nom du fichier affiché dans le fallback de l’image de profil | `profile-image.webp` |
| `[EXPERTISE_1]` | Badge 1 dans la sidebar | `UI Design` |
| `[EXPERTISE_2]` | Badge 2 dans la sidebar | `Front-end` |
| `[EXPERTISE_3]` | Badge 3 dans la sidebar | `Community Management` |
| `[LOCATION]` | Ville ou localisation | `Paris (75)` |
| `[AREA]` | Région, pays ou zone plus large | `Île-de-France` |

### 3.3 Disponibilité

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[AVAILABILITY_PERIOD]` | Période de disponibilité | `Mai à juin 2026` |
| `[AVAILABILITY_DURATION]` | Durée recherchée | `140 heures` |
| `[TARGET_LOCATION]` | Zone visée | `Lyon et alentours` |
| `[WORK_FORMAT]` | Format de travail | `Présentiel, hybride ou télétravail` |

### 3.4 Projets

#### Placeholders principaux

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[PROJECT_TITLE_01]` à `[PROJECT_TITLE_04]` | Titre de projet | `Refonte graphique Portfolio` |
| `[PROJECT_TYPE_01]` à `[PROJECT_TYPE_04]` | Type de projet | `Landing page`, `Site vitrine`, `Etude de cas` |
| `[PROJECT_ROLE_01]` à `[PROJECT_ROLE_04]` | Rôle dans le projet | `Webdesign`, `Intégration front-end`, `WordPress` |
| `[PROJECT_DATE_01]` à `[PROJECT_DATE_04]` | Date ou période | `2026` |
| `[PROJECT_SETTING_01]` à `[PROJECT_SETTING_04]` | Cadre du projet | `Projet personnel`, `Projet de formation`, `Projet client` |

#### Images de projet

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[PROJECT_IMAGE_01]` à `[PROJECT_IMAGE_04]` | Nom affiché dans le fallback si l’image manque | `project-01-preview.webp` |

#### Outils

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[TOOL_01]` à `[TOOL_16]` | Outils ou technologies utilisés dans les fiches projet | `Figma`, `HTML`, `CSS`, `JavaScript` |

#### Livrables

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[DELIVERABLE_01]` à `[DELIVERABLE_12]` | Nom affiché pour chaque livrable | `Étude de cas PDF`, `Wireframes`, `Maquettes finales` |

### 3.5 Compétences

#### Outils, méthodes et veille

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[TOOL_NAME_01]` | Outil ou logiciel | `Figma` |
| `[TOOL_NAME_02]` | Outil ou logiciel | `Photoshop` |
| `[METHOD_NAME_01]` | Méthode ou pratique | `Wireframing` |
| `[METHOD_NAME_02]` | Méthode ou pratique | `Prototypage` |
| `[CMS_NAME_01]` | CMS ou outil de publication | `WordPress` |
| `[CMS_NAME_02]` | CMS ou outil de publication | `Elementor` |
| `[SEO_OR_ANALYTICS]` | Outil ou notion SEO / analytics | `SEO on-page` |
| `[CHANNEL_OR_SKILL_01]` à `[CHANNEL_OR_SKILL_03]` | Canal ou compétence | `Rédaction web`, `Instagram`, `Planning éditorial` |
| `[TOPIC_01]` | Sujet de veille | `Accessibilité web` |
| `[TOPIC_02]` | Sujet de veille | `Design d’interface` |
| `[TOOLWATCH_01]` | Source ou outil de veille | `Google Alerts` |
| `[PRACTICE_01]` | Pratique de travail | `Méthodes agiles` |

#### Soft skills

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[SOFT_SKILL_01]` à `[SOFT_SKILL_06]` | Qualités professionnelles | `Clarté`, `Curiosité`, `Rigueur`, `Écoute` |

#### Compétences transférables

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[TRANSFERABLE_SKILL_01]` à `[TRANSFERABLE_SKILL_06]` | Compétences transférables | `Analyse`, `Rédaction`, `Synthèse`, `Organisation` |

### 3.6 Parcours et formation

#### Expériences

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[EXPERIENCE_TITLE_01]` à `[EXPERIENCE_TITLE_03]` | Intitulé d’expérience | `Assistant communication digitale` |
| `[ORGANIZATION_01]` à `[ORGANIZATION_03]` | Nom de la structure | `Studio Example` |
| `[CITY_01]` à `[CITY_03]` | Ville | `Lyon (69)` |
| `[REGION_01]` à `[REGION_03]` | Région / pays / zone | `Auvergne-Rhône-Alpes` |
| `[DATE_RANGE_01]` à `[DATE_RANGE_03]` | Période | `2025 — 2026` |

#### Formation

| Placeholder | Rôle | Exemple |
|---|---|---|
| `[DEGREE_OR_TRAINING_01]` à `[DEGREE_OR_TRAINING_03]` | Diplôme ou formation | `Bachelor Information et Communication` |
| `[CERTIFICATION_OR_TRAINING_04]` | Certification ou formation courte | `Certificat OpenClassrooms` |
| `[SCHOOL_01]` à `[SCHOOL_03]` | Établissement | `ULB` |
| `[CITY_04]` à `[CITY_06]` | Ville | `Bruxelles` |
| `[REGION_04]` à `[REGION_06]` | Région / pays | `Belgique` |
| `[DATE_RANGE_04]` à `[DATE_RANGE_07]` | Période | `2023 — 2026` |

---

## 4. Textes à modifier directement dans le HTML

Tout n’est pas écrit sous forme de placeholder. Beaucoup de contenus sont encore des textes d’exemple.

### 4.1 Navigation, boutons et libellés généraux

Vous pouvez modifier directement si nécessaire :

- `Aller au contenu principal`
- `Me contacter`
- `Disponible stage / alternance`
- `À propos`
- `Projets`
- `Compétences`
- `Parcours`
- `Contact`
- `Retour aux projets`
- `Voir le projet`

### 4.2 Section “À propos”

Réécrivez directement :

- le paragraphe sous `Qui suis-je`
- le paragraphe sous `Recherche de Stage / Alternance`
- le texte du bloc `Objectif`
- `Mes domaines de spécialisation`
- `Domaine 1`, `Domaine 2`, `Domaine 3`
- les 3 paragraphes associés
- `Mes piliers`
- `Valeur 1`, `Valeur 2`, `Valeur 3`
- les 3 paragraphes associés
- les libellés `Dates`, `Durée`, `Localisation`, `Format`

### 4.3 Section “Projets”

Réécrivez directement :

- le paragraphe d’introduction de la section `Projets`
- les résumés courts des 4 cartes projet
- les textes d’aide du fallback image : `Ajouter une image dans assets/images/`
- le texte `Ajouter ici le visuel principal du projet`
- `Contexte` et son paragraphe
- `Description` et son paragraphe
- `Objectifs` et ses listes
- `Résultats` et ses listes
- `Livrables`
- les libellés `Type`, `Date`, `Cadre`, `Rôle`

### 4.4 Section “Compétences”

Il y a des textes déjà écrits dans le HTML. Modifiez-les si besoin :

- le paragraphe d’introduction de la section
- `Design d’interface`
- `Front-end`
- `CMS et publication`
- `Communication`
- `Veille et méthodes`
- `Soft skills`
- `Compétences transférables`
- `HTML5`, `CSS3`, `JavaScript` si vous voulez d’autres intitulés
- toutes les phrases d’explication déjà présentes sous les items

### 4.5 Section “Parcours”

Réécrivez directement :

- `Expériences`
- les 3 blocs de phrases descriptives sous les expériences
- `Formation`
- les 4 phrases descriptives sous les formations / certification

### 4.6 Section “Contact”

Réécrivez directement :

- le paragraphe d’introduction de la section `Contact`
- `Liens et coordonnées`
- `Email`, `LinkedIn`, `GitHub`, `Site web`
- `Localisation`
- le texte de la carte et du message sans JavaScript

Conseil : si vous changez la langue du site, pensez à modifier aussi tous ces textes fixes. Les placeholders seuls ne suffisent pas.

---

## 5. Liens, fichiers et chemins à remplacer

### 5.1 Liens temporaires présents dans le HTML

Remplacez partout :

- `mailto:email@example.com`
- `email@example.com`
- `https://linkedin.com/in/username`
- `linkedin.com/in/username`
- `https://github.com/username`
- `github.com/username`
- `https://example.com`

Ne laissez jamais `example.com` sur un site publié.

### 5.2 Fichiers attendus dans `assets/images/`

Le template attend au minimum :

- `assets/images/profile-image.webp`
- `assets/images/project-01-preview.webp`
- `assets/images/project-02-preview.webp`
- `assets/images/project-03-preview.webp`
- `assets/images/project-04-preview.webp`
- `assets/images/favicon.svg`

### 5.3 Fichiers possibles dans `assets/docs/`

Le HTML n’impose pas de nom unique, mais les livrables pointent naturellement vers `assets/docs/`.

Exemples simples :

- `assets/docs/case-study.pdf`
- `assets/docs/wireframes.pdf`
- `assets/docs/final-mockup.pdf`
- `assets/docs/cv.pdf`

### 5.4 Image de projet : attention au double emplacement

Chaque image projet est utilisée à **deux endroits** :

- dans la carte projet ;
- dans la fiche projet détaillée.

Si vous changez un nom de fichier, mettez à jour les deux chemins.

---

## 6. Couleurs, polices et thème

## 6.1 Changer les couleurs simplement

Si vous voulez seulement adapter la palette sans refaire tout le template, commencez par ces variables dans `assets/css/style.css`.

### Thème clair

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

### Thème sombre

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

Vous pouvez déjà aller loin avec ces variables.

### À éviter

Ne renommez pas ces deux variables si vous ne touchez pas au JavaScript :

- `--theme-color-light`
- `--theme-color-dark`

Le thème les utilise pour la meta `theme-color`.

## 6.2 Changer les polices

Le template charge actuellement :

- `Instrument Sans` pour le texte courant ;
- `Sora` pour les titres.

Il faut mettre à jour **deux endroits** :

### 1. Le lien Google Fonts dans `index.html`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 2. Les variables dans `assets/css/style.css`

```css
:root {
  --font-sans: 'Instrument Sans', system-ui, sans-serif;
  --font-heading: 'Sora', var(--font-sans);
}
```

### Fallback, c’est quoi ?

Un **fallback** est une police de secours.

Exemple :

```css
--font-sans: 'Instrument Sans', system-ui, sans-serif;
```

Cela veut dire :

1. le navigateur essaie d’utiliser `Instrument Sans` ;
2. si elle ne charge pas, il utilise `system-ui` ;
3. si besoin, il finit par une police générique `sans-serif`.

Gardez toujours un fallback.

## 6.3 Thème clair / sombre

Le template fonctionne avec deux thèmes seulement :

- `light`
- `dark`

Le JavaScript lit les couleurs du CSS et met à jour automatiquement la meta `theme-color`.

---

## 7. SEO, partage social et favicon

### 7.1 Déjà actifs dans le HTML

Le template contient déjà :

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

### 7.2 À remplacer tout de suite

Avant publication, remplacez au minimum :

- `[FULL_NAME]`
- `[JOB_TITLE]`
- `[SEO_DESCRIPTION]`

### 7.3 Tant que le site n’est pas public

Gardez :

```html
<meta name="robots" content="noindex, nofollow" />
```

Retirez-le seulement quand le site est vraiment prêt à être indexé.

### 7.4 À ajouter plus tard

Quand l’URL publique finale est connue, vous pouvez ajouter :

```html
<link rel="canonical" href="https://your-domain.com/" />
<meta property="og:url" content="https://your-domain.com/" />
<meta property="og:image" content="https://your-domain.com/assets/images/seo-image.jpg" />
<meta name="twitter:image" content="https://your-domain.com/assets/images/seo-image.jpg" />
```

Utilisez une URL publique absolue, jamais une URL locale.

### 7.5 Favicon

Le HTML actuel utilise :

```html
<link rel="icon" href="assets/images/favicon.svg" type="image/svg+xml" />
````

Le plus simple :

* gardez `favicon.svg` ;
* modifier simplement le fichier.

Dans ce template, l’icône actuelle est un fichier SVG simple :

* le fond se change avec la couleur du `<rect fill="...">`
* la lettre se change directement dans la balise `<text>...</text>`
* la couleur de la lettre se change avec `fill="..."` dans `<text>`

Exemple :

* `fill="#141311"` dans `<rect>` = couleur de fond
* `>A</text>` = lettre affichée
* `fill="#c7836c"` dans `<text>` = couleur de la lettre

Si vous changez de nom ou de format, modifiez aussi le `href` et le `type`.

---

## 8. JavaScript, carte et fallbacks

## 8.1 Carte

Dans `assets/js/script.js`, modifiez **les deux** éléments suivants :

```js
const defaultCoordinates = [48.8566, 2.3522];
```

```js
.bindPopup('Paris — personnaliser la localisation dans assets/js/script.js');
```

Il faut remplacer :

- les coordonnées ;
- le texte du popup.

Exemple :

```js
const defaultCoordinates = [43.6045, 1.4442];
```

```js
.bindPopup('Lyon — zone d’intervention');
```

## 8.2 Fallback image

Le template affiche un **fallback** si une image manque ou ne charge pas.

Concrètement, un fallback est un contenu de secours.

Exemples dans ce template :

- image de profil absente → un bloc de remplacement s’affiche ;
- image projet absente → le nom de fichier et un message d’aide s’affichent.

Vous n’avez rien à modifier dans le JS pour l’utiliser. Il suffit de :

- garder un vrai `src` si l’image existe ;
- corriger le chemin si l’image ne s’affiche pas.

## 8.3 Meta `theme-color`

Le JavaScript met à jour automatiquement :

```html
<meta name="theme-color" id="themeColorMeta" content="#f3efe9" />
```

à partir de ces variables CSS :

- `--theme-color-light`
- `--theme-color-dark`

Si vous renommez ces variables, il faut aussi mettre à jour :

- le petit script inline dans le `<head>` de `index.html` ;
- la fonction `updateThemeMeta()` dans `assets/js/script.js`.

---

## 9. Livrables

Par défaut, un livrable non prêt reste en `span` désactivé :

```html
<span class="deliverable-link is-disabled" aria-disabled="true">
  <i data-lucide="file-text" aria-hidden="true"></i>
  [DELIVERABLE_01]
</span>
```

Quand le fichier ou l’URL est prêt, remplacez ce `span` par un lien `a`.

### Exemple fichier local

```html
<a class="deliverable-link" href="assets/docs/case-study.pdf" target="_blank" rel="noreferrer noopener">
  <i data-lucide="file-text" aria-hidden="true"></i>
  Case Study PDF
</a>
```

### Exemple lien externe

```html
<a class="deliverable-link" href="https://your-domain.com/case-study" target="_blank" rel="noreferrer noopener">
  <i data-lucide="file-text" aria-hidden="true"></i>
  Case Study
</a>
```

---

## 10. Icônes Lucide

Le template utilise **Lucide**.

Exemple HTML :

```html
<i data-lucide="mail" aria-hidden="true"></i>
```

Pour changer une icône, remplacez simplement le nom dans `data-lucide`.

Le JavaScript recharge ensuite les icônes automatiquement.

Extrait utile :

```js
if (window.lucide) {
  window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
}
```

Référence officielle :

- [lucide.dev](https://lucide.dev)

Icônes déjà utilisées dans ce template :

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

## 11. Vérification finale

Avant de publier, vérifiez au minimum :

### Identité et SEO

- [ ] `[FULL_NAME]` remplacé partout
- [ ] `[JOB_TITLE]` remplacé partout
- [ ] `[SEO_DESCRIPTION]` remplacé
- [ ] `[SITE_OWNER]` remplacé
- [ ] `[YEAR]` remplacé
- [ ] `robots` vérifié selon l’état du site
- [ ] `canonical`, `og:url`, `og:image`, `twitter:image` ajoutés seulement quand l’URL finale est connue

### Sidebar et profil

- [ ] image de profil ajoutée
- [ ] expertises remplies
- [ ] localisation remplie
- [ ] réseaux sociaux remplacés
- [ ] favicon modifiée si besoin

### Projets

- [ ] titres, types, rôles, dates et cadres remplis
- [ ] résumés de cartes réécrits
- [ ] textes `Contexte`, `Description`, `Objectifs`, `Résultats` réécrits
- [ ] images présentes dans `assets/images/`
- [ ] chemins d’images vérifiés aux deux endroits
- [ ] livrables activés ou laissés désactivés proprement

### Compétences et parcours

- [ ] outils, méthodes, CMS et sujets remplis
- [ ] soft skills remplies
- [ ] compétences transférables remplies
- [ ] expériences remplies
- [ ] formations remplies
- [ ] villes, régions et dates remplies

### Contact et technique

- [ ] email réel
- [ ] LinkedIn réel
- [ ] GitHub réel
- [ ] site réel
- [ ] footer mis à jour
- [ ] aucun `example.com` restant
- [ ] coordonnées de carte modifiées
- [ ] texte du popup modifié
- [ ] `--theme-color-light` et `--theme-color-dark` toujours cohérents avec le JS
- [ ] aucune image ou aucun document manquant