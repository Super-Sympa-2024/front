# CAPTCHA Jeu Interactif - README

## Introduction

Ce projet, intitulé **Game Tcha**, a été réalisé pour répondre au défi proposé par l'entreprise **Viveris** lors de la **Nuit de l'Info 2024** à Lyon. Le défi, intitulé _"Le défi : Game Tcha : le CAPTCHA ludique"_, consistait à concevoir un mini-jeu inspiré de l'univers du gaming pour remplacer les CAPTCHA traditionnels.

L'objectif principal était de combiner créativité, sécurité web et expérience utilisateur immersive en transformant un test souvent perçu comme contraignant en un véritable jeu ludique et engageant.

Je suis **Léo Coste**, membre de l'équipe **Super Sympa X MaitroBé**, et j'ai eu le plaisir de concevoir ce projet.

---

## Le Défi

### Énoncé

_"Concevoir un mini-jeu qui s’inspire de l’univers du gaming pour remplacer les CAPTCHA traditionnels. Ce défi vous permet de mêler créativité et sécurité web, tout en plongeant les utilisateurs dans une expérience ludique et immersive. Plus qu’un simple test, faites de ce CAPTCHA un véritable jeu !"_

---

## Le Concept

**Game Tcha** est un CAPTCHA transformé en mini-jeu interactif. Plutôt que de demander aux utilisateurs de cliquer sur des boîtes ou de résoudre des puzzles monotones, **Game Tcha** les invite à compléter une mission ludique dans un univers graphique dynamique.

### Fonctionnalités du mini-jeu

1. **Instructions ludiques :**

   - Les utilisateurs doivent suivre des consignes claires comme :
     - _"Cliquez sur tous les poissons."_
     - _"Cliquez sur toutes les étoiles de mer."_
     - _"Cliquez sur tous les déchets."_

2. **Éléments interactifs :**

   - Chaque jeu propose des éléments visuels répartis aléatoirement (poissons, étoiles de mer, déchets) avec plusieurs variantes graphiques pour rendre l'expérience plus immersive. Les design de poissons ont été réalisés par moi même dans la soirée et les design d'étoiles de mer et de bouteilles ont été récupérés sur internet.

3. **Expérience utilisateur immersive :**

   - Les éléments suivent une animation "flottante", donnant une sensation de vie à la scène.
   - Les utilisateurs peuvent écouter les instructions via des audios pour permettre aux personnes en difficulté de lecture de réaliser ce CAPTCHA.
   - Les utilisateurs peuvent revoir les instructions détaillées ou rafraîchir le jeu si nécessaire.

4. **Vérification dynamique :**
   - En cas de succès : le bouton "Vérifier" devient vert et le CAPTCHA disparaît après une seconde.
   - En cas d'échec : une alerte informe l'utilisateur, et le jeu est automatiquement rechargé.

---

## Réalisation

### Méthodologie

1. **Analyse du défi :**

   - Identifier les besoins pour garantir à la fois une sécurité web efficace et une expérience ludique.
   - Déterminer des mécaniques de jeu simples mais engageantes.

2. **Développement des composants :**

   - Création d’un composant principal **`CapchatComponent`** pour gérer l’ensemble des interactions utilisateur.
   - Implémentation d’un composant **`GameComponent`** pour afficher les éléments interactifs et gérer leur logique.

3. **Logique du jeu :**

   - Génération aléatoire des positions des éléments pour chaque session.
   - Vérification de la sélection utilisateur en fonction des consignes données.
   - Gestion des états de succès et d’échec.

4. **Accessibilité et UX :**
   - Ajout d’un bouton audio pour écouter les instructions.
   - Intégration de multiples variantes graphiques pour rendre l’expérience visuellement engageante.

---

### Fonctionnement

#### Flux utilisateur

1. **Début du jeu :**

   - Une instruction claire s’affiche en haut du CAPTCHA.
   - Les éléments du jeu (poissons, étoiles de mer, ou déchets) apparaissent dans une zone dynamique.

2. **Actions disponibles :**

   - **Sélectionner des éléments :** L’utilisateur clique sur les éléments correspondant à l’instruction.
   - **Écouter les instructions :** Un bouton audio permet de rejouer les consignes.
   - **Rafraîchir le jeu :** Un bouton recharge une nouvelle session avec une nouvelle disposition.

3. **Validation :**
   - L’utilisateur clique sur le bouton "Vérifier".
   - Si la sélection est correcte :
     - Le bouton devient vert.
     - Le CAPTCHA disparaît après une seconde.
   - Si la sélection est incorrecte :
     - Une alerte informe l’utilisateur.
     - Le jeu se recharge automatiquement.

---

### Technologies utilisées

1. **React + TypeScript :**

   - Gestion des composants dynamiques et de leur état.
   - Typage fort pour assurer la fiabilité et la maintenabilité.

2. **CSS & Animations :**

   - Utilisation de `keyframes` pour créer une animation flottante sur les éléments interactifs.
   - Responsive design pour un affichage optimal.

3. **Audio :**
   - Lecture des fichiers audio pour les consignes utilisateur.

---

## Organisation du Code

### Composants principaux

#### 1. `CapchatComponent`

- Gère les états globaux (type de CAPTCHA, instructions, visibilité).
- Interface utilisateur pour écouter, rafraîchir, et valider les réponses.
- Déclenche la logique de succès ou d’échec.

#### 2. `GameComponent`

- Gère le mini-jeu interactif.
- Génère les éléments du jeu avec des positions aléatoires.
- Vérifie la conformité de la sélection avec les instructions.

---

## Points techniques clés

1. **Positionnement aléatoire des éléments :**

   - Les positions des éléments sont générées de manière à éviter tout chevauchement, garantissant une expérience fluide.

2. **Diversité visuelle :**

   - Chaque type d’élément a plusieurs variantes graphiques sélectionnées aléatoirement à chaque session.

3. **Gestion des états :**

   - L’état du jeu est entièrement réinitialisé après chaque échec ou rechargement.

4. **Animations fluides :**
   - Les éléments flottent légèrement pour simuler un environnement aquatique.

---

## Résultats et conclusion

Grâce à **Game Tcha**, le CAPTCHA devient une expérience ludique et immersive. Ce projet illustre comment créativité et technologie peuvent transformer une tâche fastidieuse en un moment agréable pour l'utilisateur, tout en garantissant une sécurité web efficace.

La participation à ce défi a permis de relever plusieurs défis techniques et UX, tout en démontrant qu’un CAPTCHA peut devenir un jeu à part entière. Ce projet pourrait être intégré dans des environnements web réels pour remplacer les CAPTCHA traditionnels et offrir une expérience utilisateur unique.

---

## L'équipe

- **Léo Coste** - Développeur principal, membre de l'équipe **Super Sympa X MaitroBé**.
- Réalisé dans le cadre de la **Nuit de l'Info 2024**, Lyon.

---

Merci de votre attention ! 🎮
