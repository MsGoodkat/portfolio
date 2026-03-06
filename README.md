# Portfolio — Laura Monneveux

Portfolio professionnel de Laura Monneveux, Product Owner.
Construit avec **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Lancer en local

### Prérequis
- Node.js 18+ (vérifier avec `node -v`)
- npm 9+

### Installation & démarrage

```bash
# 1. Aller dans le dossier du projet
cd Profil

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrir **http://localhost:5173** dans le navigateur.

### Build de production

```bash
npm run build
# Les fichiers compilés sont dans le dossier /dist
```

---

## 📬 Configurer le formulaire de contact (Formspree)

1. Créer un compte gratuit sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire ("New Form") → copier l'**ID** (format `xxxxxxxx`)
3. Ouvrir `src/components/Contact.jsx`
4. Remplacer `YOUR_FORM_ID` par votre ID :
   ```js
   const FORMSPREE_ID = 'votre_id_formspree'
   ```
5. Le formulaire est opérationnel gratuitement (50 soumissions/mois sur le plan Free)

---

## ☁️ Déployer sur Vercel

### Méthode recommandée (via GitHub)

1. **Pousser le projet sur GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USER/portfolio.git
   git push -u origin main
   ```

2. **Connecter à Vercel :**
   - Aller sur [vercel.com](https://vercel.com) → Se connecter avec GitHub
   - Cliquer "Add New Project" → Importer le repo GitHub
   - Vercel détecte automatiquement Vite → cliquer "Deploy"
   - Votre site est en ligne en ~1 minute sur une URL `*.vercel.app`

3. **Déploiements automatiques :** chaque `git push` sur `main` redéploie automatiquement.

### Méthode via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🌐 Acheter et connecter un nom de domaine

### Étape 1 — Acheter le domaine

**Option A : OVH (recommandé pour la France)**
- Aller sur [ovh.com/fr/domaines](https://www.ovh.com/fr/domaines/)
- Rechercher `lauramonneveux.com` (ou `.fr`)
- Prix : ~10-15 €/an
- Créer un compte et procéder au paiement

**Option B : Namecheap (souvent moins cher)**
- Aller sur [namecheap.com](https://www.namecheap.com)
- Rechercher et acheter le domaine (~8-12 $/an)

### Étape 2 — Connecter le domaine à Vercel

1. Dans le **Dashboard Vercel** de votre projet :
   - Aller dans "Settings" → "Domains"
   - Cliquer "Add Domain" → entrer `lauramonneveux.com`

2. Vercel vous donne des **enregistrements DNS** à configurer :
   ```
   Type A     @    76.76.21.21
   Type CNAME www  cname.vercel-dns.com
   ```

3. **Chez OVH :**
   - Aller dans "Zone DNS" de votre domaine
   - Supprimer les enregistrements A et CNAME existants pour `@` et `www`
   - Ajouter les enregistrements fournis par Vercel
   - Attendre 15 min à 24h (propagation DNS)

4. **Chez Namecheap :**
   - Aller dans "Advanced DNS" de votre domaine
   - Même manipulation (ajouter les enregistrements Vercel)

5. Vercel active automatiquement le **certificat SSL** (HTTPS) — aucune action requise.

---

## 🎨 Personnaliser le contenu

| Fichier | Ce qu'on y modifie |
|---|---|
| `src/components/Hero.jsx` | Nom, titre, phrase d'accroche |
| `src/components/About.jsx` | Texte de présentation, différenciateurs |
| `src/components/Projects.jsx` | Projets, résultats, tags |
| `src/components/Skills.jsx` | Compétences et niveaux |
| `src/components/Timeline.jsx` | Expériences et formations |
| `src/components/Contact.jsx` | Liens email, LinkedIn, Calendly |
| `src/index.css` | Couleurs, typographie globale |
| `tailwind.config.js` | Palette de couleurs |
| `index.html` | Balises meta SEO |

---

## 📦 Stack technique

- **React 18** + **Vite 5** — build ultra-rapide
- **Tailwind CSS 3** — design system utilitaire
- **Framer Motion 11** — animations au scroll
- **react-intersection-observer** — déclenchement animations
- **Formspree** — formulaire de contact sans backend
- **Vercel** — hébergement & déploiement continu

---

## ✅ Checklist avant mise en ligne

- [ ] Remplacer `YOUR_FORM_ID` par l'ID Formspree réel
- [ ] Ajouter le lien Calendly dans `Contact.jsx`
- [ ] Vérifier les balises `<meta>` dans `index.html`
- [ ] Tester le formulaire de contact
- [ ] Tester l'affichage mobile (DevTools → responsive)
- [ ] Vérifier tous les liens (LinkedIn, email)
- [ ] Lancer `npm run build` sans erreur avant de déployer
