# Fiche Produit — Portfolio Laura Monneveux

**URL de production** : [lauramonneveux.me](https://lauramonneveux.me)
**Repository** : [github.com/MsGoodkat/portfolio](https://github.com/MsGoodkat/portfolio)
**Dernière mise à jour** : Mars 2026

---

## Problème adressé

Les recruteurs et décideurs reçoivent des dizaines de CV PDF identiques. Un portfolio en ligne permet de démontrer concrètement la capacité à livrer un produit, pas seulement à en parler. L'enjeu : convaincre en moins de 60 secondes.

---

## Utilisateurs cibles

| Segment | Besoin | Ce qu'ils cherchent |
|---|---|---|
| **Recruteurs tech** | Valider le profil rapidement | Titre, stack, expérience |
| **CPO / Hiring managers** | Évaluer la profondeur produit | Projets, metrics, méthode |
| **Partenaires / freelances** | Comprendre l'expertise | Parcours, façon de travailler |

---

## Proposition de valeur

> Montrer que je fais exactement ce qu'un bon PO doit faire : livrer un produit structuré, performant et orienté utilisateur — avec des métriques qui le prouvent.

---

## Fonctionnalités

### Contenu
- **Hero** — nom, titre, phrase d'accroche, 3 KPIs clés, CTA
- **À propos** — positionnement, différenciateurs, photo
- **Projets** — 5 projets avec modal détaillée (contexte, actions, résultats)
- **Compétences** — stack métier et outils
- **Parcours** — timeline expériences + formations
- **Contact** — formulaire Formspree + email + LinkedIn + Calendly

### Technique
- Animations au scroll (Framer Motion + IntersectionObserver)
- Modal projets avec scroll lock et fermeture overlay
- Design responsive (mobile, tablette, desktop)
- Lazy loading images et code splitting par section
- 27 tests automatisés (Vitest + React Testing Library)

---

## Stack technique

| Couche | Choix | Raison |
|---|---|---|
| Framework | React 18 + Vite | Rapidité de build, HMR |
| Animations | Framer Motion | Qualité des transitions |
| Styles | CSS custom + Tailwind utilitaires | Contrôle précis du design |
| Formulaire | Formspree | Zéro backend, gratuit |
| Tests | Vitest + RTL | Natif Vite, rapide |
| Hébergement | Vercel | CI/CD automatique, HTTPS |
| Domaine | lauramonneveux.me (OVH) | — |

---

## Performance

| Métrique | Valeur |
|---|---|
| Build size (gzip) | ~88 KB JS initial |
| Chunks lazy | 6 sections chargées à la demande |
| Images | WebP, gains −50% à −95% vs JPEG/PNG |
| Lazy loading | Toutes les images hors hero |

---

## Architecture des fichiers

```
src/
├── components/       # Composants UI (Hero, Projects, Modal…)
├── data/
│   ├── projects.js   # ← Modifier ici pour ajouter/éditer un projet
│   └── timeline.js   # ← Modifier ici pour le parcours
├── tests/            # 27 tests automatisés
└── index.css         # Styles globaux + variables

public/
├── images/           # Assets WebP
├── CV_Laura-Monneveux.pdf
├── Zenpark-Laura-Monneveux.pdf
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## Comment mettre à jour le contenu

### Ajouter ou modifier un projet
Éditer `src/data/projects.js` — chaque projet suit cette structure :
```js
{
  id: 6,
  number: '06',
  color: '#6C63FF',           // palette : #6C63FF | #0891B2 | #7B2FBE
  category: 'Catégorie longue modale',
  cardCategory: 'Catégorie card',
  title: 'Titre complet',
  cardTitle: 'Titre court card', // optionnel
  company: 'Entreprise',
  tags: ['Tag1', 'Tag2'],
  image: '/images/mon-image.webp',
  context: '...',
  objectifs: '...',
  actions: ['Action 1', 'Action 2'],
  results: [
    { value: '−X%', label: 'description' },
    { value: 'N', label: 'description' },
  ],
  link: '/mon-doc.pdf', // optionnel
}
```

### Modifier le parcours
Éditer `src/data/timeline.js`.

### Changer une image
1. Placer le fichier dans `public/images/`
2. Convertir en WebP : `cwebp -q 85 image.jpg -o image.webp`
3. Mettre à jour le champ `image` dans `projects.js`

---

## Déploiement

Vercel déploie automatiquement à chaque push sur `main` :

```bash
git add .
git commit -m "feat: ..."
git push
```

---

## Tests

```bash
npm test          # mode watch
npm test -- --run # one-shot
```

Couverture :
- Intégrité des données (projets, timeline)
- Rendu et interactions GalleryCard
- Rendu et interactions ProjectModal

---

## Contacts & accès

| Ressource | Accès |
|---|---|
| Vercel | vercel.com → MsGoodkat |
| Formspree | formspree.io → ID `xdawnrgy` |
| Domaine | OVH → lauramonneveux.me |
| GitHub | github.com/MsGoodkat/portfolio |
| Calendly | calendly.com/lauraamonneveux |
