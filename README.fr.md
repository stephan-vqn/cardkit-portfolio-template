# CardKit - Template Portfolio

![Project Cover](assets/images/template-github-dark_project-cover.webp)

> 🇬🇧 Version anglaise : [README.md](README.md)  
> 📚 Guides utilisateur : [guide-en.md](guide-en.md) | [guide-fr.md](guide-fr.md)  
> 📅 Date du projet : janvier 2026  
> 🔄 Version du projet : mai 2026

CardKit est un modèle de portfolio statique conçu en HTML, CSS et JavaScript pour une présentation personnelle claire et professionnelle, pensée pour des recruteurs. Il est conçu comme une base personnalisable, et non comme un portfolio à publier tel quel.

Le template actuel comprend une colonne de profil, des sections organisées par onglets, des fiches projet détaillées, un mode clair et sombre, une carte de contact, ainsi que des solutions de remplacement (fallbacks) prévues en cas de médias manquants ou d'indisponibilité de JavaScript.

## Sommaire

- [Vue d’ensemble](#vue-densemble)
- [Aperçu de l’interface](#aperçu-de-linterface)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Arborescence du projet](#arborescence-du-projet)
- [Fichiers clés](#fichiers-clés)
- [Utilisation](#utilisation)
- [Guide](#guide)
- [Avant publication](#avant-publication)
- [Notes](#notes)
- [Outils & environnement](#outils--environnement)
- [Perspectives d’évolution](#perspectives-dévolution)
- [Mot de fin](#mot-de-fin)

## Vue d’ensemble

- Modèle de portfolio statique sur une seule page
- Aucune étape de build requise
- Le contenu et les libellés d’interface par défaut sont en français
- Conçu pour être personnalisé avant publication
- Des guides détaillés sont fournis en anglais et en français

## Aperçu de l’interface

| Thème sombre                                                              | Thème clair                                                                    |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Aperçu du template en thème sombre](assets/images/preview-template.png) | ![Aperçu du template en thème clair](assets/images/preview-template-light.png) |

## Fonctionnalités principales

- Mise en page responsive avec sidebar et contenu par onglets
- Cartes projet avec vues détaillées séparées
- Bascule de thème clair et sombre avec préférence enregistrée
- Section [OpenStreetMap](https://www.openstreetmap.org/) affichée avec [Leaflet](https://leafletjs.com/)
- Icônes [Lucide](https://lucide.dev/)
- Fallbacks pour l’avatar et les images de projet
- Fallback exploitable lorsque JavaScript est désactivé
- Placeholders SEO et réglages de publication prudents dans `index.html`

## Arborescence du projet

```text
.
├── index.html
├── README.md
├── README.fr.md
├── guide-en.md
├── guide-fr.md
├── LICENSE
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   ├── favicon.svg
    │   ├── preview-template.png
    │   ├── preview-template-light.png
    │   ├── template-github-dark_project-cover.webp
    │   └── template-github-light_project-cover.webp
    └── docs/
```

## Fichiers clés

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure principale de la page, placeholders, base SEO et liens CDN externes |
| `assets/css/style.css` | Variables de thème, mise en page, composants et styles responsives |
| `assets/js/script.js` | Onglets, bascule vers les vues détaillées de projet, gestion du thème, carte Leaflet et fallbacks médias |
| `guide-en.md` | Guide de personnalisation en anglais |
| `guide-fr.md` | Guide de personnalisation en français |
| `assets/images/favicon.svg` | Modèle de favicon SVG modifiable |

## Utilisation

1. Clonez ou téléchargez le dépôt.
2. Ouvrez le dossier du projet dans un éditeur de code.
3. Ouvrez `index.html` dans votre navigateur pour prévisualiser le template.
4. Modifiez le contenu principal dans `index.html`.
5. Modifiez l’apparence dans `assets/css/style.css`.
6. Modifiez les interactions et réglages dans `assets/js/script.js`.
7. Ajoutez vos images et documents dans `assets/images/` et `assets/docs/`.
8. Consultez le guide avant publication.

## Guide

Pour les instructions détaillées de personnalisation, utilisez :

- [guide-en.md](guide-en.md)
- [guide-fr.md](guide-fr.md)

Les guides couvrent les placeholders, les textes à réécrire, les fichiers attendus, les couleurs, les polices, les réglages de carte, les livrables, les icônes, les métadonnées SEO et les vérifications finales.

## Avant publication

- Remplacez tous les placeholders entre crochets et les liens de démonstration
- Ajoutez de vraies images et, si besoin, des livrables
- Relisez les métadonnées SEO et les balises de partage social dans `index.html`
- Supprimez ou mettez à jour le réglage `noindex, nofollow` par défaut lorsque le site est prêt
- Personnalisez la favicon, les coordonnées de contact et la localisation de la carte

## Notes

- Le document HTML actuel est défini en français (`lang="fr"`), avec des libellés d’interface en français par défaut.
- Le projet utilise Google Fonts, Lucide et Leaflet via des CDN.
- Le dépôt inclut déjà une image de prévisualisation et une favicon SVG personnalisable.

## Outils & environnement

- [Figma](https://www.figma.com/) — prototype initial
- [Visual Studio Code](https://code.visualstudio.com/) — édition du code
- [GitHub](https://github.com/) — hébergement du dépôt
- [GitHub Pages](https://pages.github.com/) — publication démo en ligne prévue
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) — tests et ajustements
- [WAVE Evaluation Tool](https://wave.webaim.org/) — vérification de l’accessibilité

## Perspectives d’évolution

Ce template constitue une première base fonctionnelle, qui pourra être enrichie progressivement.

Les prochaines étapes envisagées sont :

* publier une démo en ligne avec GitHub Pages ;
* améliorer la documentation utilisateur ;
* ajuster et enrichir l’interface ;
* ajouter, si besoin, de nouvelles variantes de sections ou de composants.

## Mot de fin

Merci d’avoir consulté ce projet de template. 
Vous pouvez l’adapter, le simplifier, l’améliorer et le faire évoluer pour qu’il devienne un portfolio qui vous ressemble vraiment.
