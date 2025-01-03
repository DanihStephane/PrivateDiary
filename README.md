Application encore en cours ...

# 📝 Journal Personnel

Une application web moderne et minimaliste pour gérer vos pensées quotidiennes, avec support hors ligne.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PWA](https://img.shields.io/badge/PWA-ready-brightgreen.svg)

## ✨ Fonctionnalités

- 📱 **Progressive Web App (PWA)** - Fonctionne hors ligne
- 🎨 **Interface Minimaliste** - Design épuré et moderne
- 🏷️ **Organisation par Tags** - Catégorisez vos entrées facilement
- 💾 **Stockage Local** - Vos données restent sur votre appareil
- 📱 **Responsive Design** - S'adapte à tous les écrans

## 🛠️ Technologies

- **React** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **PWA** - Support hors ligne

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build
```

## 📖 Structure du Projet

```
src/
├── components/         # Composants React
│   ├── ui/            # Composants UI réutilisables
│   ├── EntryForm.tsx  # Formulaire d'entrée
│   ├── EntryList.tsx  # Liste des entrées
│   └── EntryCard.tsx  # Carte d'entrée individuelle
├── hooks/             # Hooks React personnalisés
├── types/             # Types TypeScript
├── utils/             # Utilitaires
└── App.tsx            # Composant principal
```

## 💡 Utilisation

1. **Créer une entrée**
   - Remplissez le titre
   - Ajoutez du contenu
   - Assignez des tags (optionnel)

2. **Gérer les tags**
   - Cliquez sur un tag pour filtrer
   - Utilisez le bouton "Voir toutes les entrées" pour réinitialiser

3. **Mode Hors Ligne**
   - L'application fonctionne sans connexion
   - Les données sont sauvegardées localement

## 🔒 Sécurité

- Toutes les données sont stockées localement
- Aucune donnée n'est envoyée à des serveurs externes

## 🎨 Personnalisation

L'application utilise Tailwind CSS pour le styling. Vous pouvez personnaliser :

- Thèmes de couleurs (`tailwind.config.js`)
- Animations (`index.css`)
- Composants UI (`components/ui/`)

## 📱 PWA

L'application est une Progressive Web App :

- Installation sur l'écran d'accueil
- Fonctionne hors ligne
- Mise à jour automatique

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

free : https://github.com/DanihStephane
