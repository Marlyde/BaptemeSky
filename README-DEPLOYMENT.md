# 🌸 Guide de Déploiement - Invitation Baptême Sky

## 📋 Étapes pour déployer sur Vercel

### 1️⃣ Préparer les images florales

Avant de déployer, vous devez ajouter vos images florales au projet :

1. **Créez un dossier `/public`** dans la racine du projet (s'il n'existe pas déjà)

2. **Ajoutez vos deux images** dans le dossier `/public` avec ces noms EXACTS :
   - `florals-top.png` → Image avec roses roses, fleurs bleues et croix en bois (6e3c9a1e23a8b83b6b56f3c8dc01175ec9ab6c4f.png)
   - `florals-bottom.png` → Image avec lapin, roses et tétine bleue (897079dfe4a660ecd3a317d79ba67b7bd1b4e9f8.png)

### 2️⃣ Déployer sur Vercel

**Option A : Interface Vercel (Recommandé)**
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous ou créez un compte gratuit
3. Cliquez sur **"Add New Project"**
4. Cliquez sur **"Upload"** ou glissez-déposez le dossier du projet
5. Vercel détectera automatiquement la configuration Vite
6. Cliquez sur **"Deploy"**
7. Attendez 1-2 minutes
8. Votre site sera en ligne ! 🎉

**Option B : Vercel CLI**
```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Suivez les instructions
```

### 3️⃣ Partager sur WhatsApp

Une fois déployé, copiez l'URL et envoyez ce message :

```
🌸✨ Vous êtes invité au baptême de Sky ! ✨🌸

📅 Samedi 13 Juin à 11h00
⛪ Église Saint Gilles de Etampes

Confirmez votre présence ici :
[VOTRE_URL_VERCEL]

Au plaisir de vous voir ! 💕
```

## 🛠️ Structure du Projet

```
/
├── public/
│   ├── florals-top.png      ← À AJOUTER
│   └── florals-bottom.png   ← À AJOUTER
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       └── BaptismInvitation.tsx
│   ├── styles/
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## ✅ Checklist avant déploiement

- [ ] Dossier `/public` créé
- [ ] `florals-top.png` ajouté dans `/public`
- [ ] `florals-bottom.png` ajouté dans `/public`
- [ ] Les deux images ont les noms EXACTS mentionnés ci-dessus
- [ ] Prêt à déployer sur Vercel !

## 🎨 Personnalisation

Pour modifier les informations de l'invitation :
1. Déployez d'abord le site
2. Utilisez le bouton "crayon" (✏️) en haut à droite
3. Cliquez sur n'importe quel texte pour l'éditer
4. Cliquez sur la coche (✓) pour sauvegarder

## 📞 Support

Si vous rencontrez des problèmes :
- Vérifiez que les images sont bien dans `/public`
- Vérifiez que les noms des fichiers sont exacts
- Assurez-vous que les images sont au format PNG

Bon déploiement ! 🚀
