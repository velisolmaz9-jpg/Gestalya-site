# Gestalya — Site vitrine

Site vitrine du service Gestalya (« Votre bras droit administratif. »), construit avec React, TypeScript, Tailwind CSS et Vite.

## Stack technique

- **React 18** + **TypeScript**
- **Vite** (build ultra-rapide)
- **Tailwind CSS** (design system : couleurs, ombres, typographies)
- **React Router** (navigation multi-pages)
- **lucide-react** (icônes légères, tree-shakées)

Aucune bibliothèque d'animation lourde, aucun framework CSS superflu : le bundle JS de production pèse environ 65 Ko gzippé.

## Structure du projet

```
Gestalya-site/
├── public/
│   ├── favicon.svg          # Favicon (document stylisé)
│   ├── logo.svg              # Logo (fond clair) — À REMPLACER
│   ├── logo-white.svg        # Logo (fond sombre, footer) — À REMPLACER
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx               # Point d'entrée React
│   ├── App.tsx                 # Déclaration des routes
│   ├── index.css               # Styles globaux + Tailwind
│   ├── config/
│   │   └── site.config.ts      # ⭐ Numéro WhatsApp, e-mail, réseaux sociaux, tarif
│   ├── lib/
│   │   └── whatsapp.ts         # Fonction centralisée de génération des liens WhatsApp
│   ├── data/                   # Contenus éditoriaux (services, étapes, FAQ, avis...)
│   ├── hooks/                  # Hooks réutilisables (scroll reveal, SEO par page)
│   ├── components/
│   │   ├── ui/                 # Composants génériques (Button, Accordion, Container...)
│   │   ├── layout/              # Header, Footer, bouton WhatsApp flottant
│   │   └── sections/            # Sections de la landing page (Hero, Services, FAQ...)
│   └── pages/                   # Accueil, Nos services, Contact, Mentions légales, etc.
├── index.html                  # Meta SEO, Open Graph, données structurées
├── tailwind.config.js           # Palette de couleurs et design tokens
└── package.json
```

## Installation

```bash
npm install
```

## Lancer le projet en local

```bash
npm run dev
```

Le site est alors disponible sur `http://localhost:5173`.

## Générer la version production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`. Pour prévisualiser ce build localement :

```bash
npm run preview
```

Le dossier `dist/` peut ensuite être déployé sur n'importe quel hébergeur statique (OVH, Netlify, Vercel, etc.).

## Personnalisation — ce que vous devez modifier

### 1. Le logo

Remplacez les deux fichiers suivants par votre logo réel (mêmes noms, format SVG recommandé) :
- `public/logo.svg` → utilisé dans le header (fond clair)
- `public/logo-white.svg` → utilisé dans le footer (fond sombre)

Si votre logo est au format PNG/JPG, remplacez l'extension dans les balises `<img>` de :
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`

Pensez aussi à mettre à jour `public/favicon.svg` avec votre propre icône de marque.

### 2. Le numéro WhatsApp

Un seul endroit à modifier : `src/config/site.config.ts`

```ts
whatsappNumber: "+33 6 59 83 36 85",
```

Tous les boutons du site (« Être accompagné », « Contacter Gestalya », bouton flottant, etc.) utilisent automatiquement ce numéro via `src/lib/whatsapp.ts`.

### 3. L'adresse e-mail ✅ déjà configurée

`src/config/site.config.ts` utilise désormais `contact@gestalya.fr`. Si cette adresse change un jour, c'est le seul endroit à modifier.

### 4. Le nom de domaine ✅ déjà configuré

Le domaine `https://gestalya.fr` est déjà en place dans `index.html` (canonical, Open Graph, JSON-LD), `public/robots.txt` et `public/sitemap.xml`. Si vous préférez servir le site sur `www.gestalya.fr`, remplacez les occurrences de `gestalya.fr` par `www.gestalya.fr` dans ces mêmes fichiers et configurez la redirection correspondante chez OVH.

### 5. Les liens Instagram / Facebook ✅ déjà configurés

`src/config/site.config.ts` pointe désormais vers les pages officielles :

```ts
social: {
  instagram: "https://www.instagram.com/gestalya/",
  facebook: "https://www.facebook.com/profile.php?id=61593830663043",
},
```

Utilisés automatiquement dans le footer (icônes) et partout où `siteConfig.social` est référencé.

### 6. Avant la mise en ligne — informations juridiques manquantes

Aucune information juridique n'a été inventée. Les pages **Mentions légales** (`src/pages/LegalNotice.tsx`) et **Politique de confidentialité** (`src/pages/PrivacyPolicy.tsx`) contiennent des `[À COMPLÉTER]` explicites pour :

- Forme juridique de l'entreprise (auto-entreprise, SASU, EURL, etc.)
- Numéro SIREN / SIRET
- Adresse du siège social
- Nom du responsable de la publication
- Nom et adresse de l'hébergeur du site (une fois choisi)
- Durée précise de conservation des données personnelles

Une relecture par un professionnel du droit est recommandée pour la politique de confidentialité avant publication.

- **Image Open Graph** : ajoutez une image `public/og-image.jpg` (1200×630 px) pour un aperçu soigné lors des partages sur les réseaux sociaux.

### 7. Avis clients

Dès que vous recevrez de vrais avis, ajoutez-les dans `src/data/testimonials.ts` (aucun faux avis n'a été inséré). La section s'actualise automatiquement dès que ce tableau n'est plus vide.

## Pages disponibles

| Page | URL |
|---|---|
| Accueil | `/` |
| Nos services (détail) | `/nos-services` |
| Contact | `/contact` |
| Mentions légales | `/mentions-legales` |
| Politique de confidentialité | `/politique-de-confidentialite` |

## Bonnes pratiques déjà en place

- **Mobile-first**, responsive jusqu'aux grands écrans desktop.
- **SEO** : title/description uniques par page, balises Open Graph, données structurées JSON-LD, `robots.txt`, `sitemap.xml`, URLs propres.
- **Accessibilité** : contrastes suffisants, navigation clavier, `aria-label` sur les boutons icônes, focus visible.
- **Performance** : pas de dépendance inutile, polices chargées en `swap`, icônes tree-shakées, animations discrètes au scroll (`IntersectionObserver`, sans bibliothèque tierce).
