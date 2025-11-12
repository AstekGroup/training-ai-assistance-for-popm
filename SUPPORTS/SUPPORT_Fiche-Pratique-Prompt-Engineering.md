# Fiche pratique : Ingénierie de prompt pour PO/PM

**Version** : 1.0.0
**Date de dernière mise à jour** : 2025-11-09
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Qu'est-ce que l'ingénierie de prompt ?

L'ingénierie de prompt (prompt engineering) est l'art et la science de formuler des instructions efficaces pour obtenir les meilleurs résultats des modèles d'IA générative.

**Pourquoi c'est important pour les PO/PM** :

- Améliore la qualité des résultats obtenus
- Réduit le temps de révision et d'itération
- Permet d'obtenir des résultats directement utilisables
- Optimise l'utilisation des outils IA

---

## Structure d'un prompt efficace

### 1. Contexte et rôle

**Objectif** : Donner à l'IA le contexte nécessaire et un rôle à jouer

**Exemple** :

```
Tu es un Product Owner expérimenté travaillant dans une scale-up tech française.
Tu as 10 ans d'expérience dans la gestion de produits digitaux B2B.
```

**Pourquoi** : L'IA adapte son langage et ses recommandations au contexte

### 2. Tâche claire

**Objectif** : Définir précisément ce que vous voulez obtenir

**Exemple** :

```
Rédige une user story complète pour une fonctionnalité de connexion utilisateur
avec authentification à deux facteurs.
```

**Pourquoi** : Plus la tâche est précise, meilleur est le résultat

### 3. Format et structure

**Objectif** : Spécifier le format attendu du résultat

**Exemple** :

```
Format attendu :
- User story (format INVEST)
- 5 critères d'acceptation
- Notes techniques
- Métriques de succès

Utilise des puces et une structure claire.
```

**Pourquoi** : Facilite l'utilisation directe du résultat

### 4. Contraintes et exigences

**Objectif** : Préciser les limitations et exigences spécifiques

**Exemple** :

```
Contraintes :
- Respecter les standards de sécurité RGPD
- Compatible avec notre stack technique (React, Node.js)
- Délai de développement : 2 sprints maximum
```

**Pourquoi** : Assure que le résultat respecte vos contraintes

### 5. Exemples (optionnel mais recommandé)

**Objectif** : Fournir des exemples pour guider l'IA

**Exemple** :

```
Voici 2 exemples de user stories bien rédigées :
[exemples]

Maintenant, crée une user story similaire pour [nouvelle fonctionnalité].
```

**Pourquoi** : L'IA apprend le style et le format souhaités

---

## Techniques avancées

### Technique 1 : Chain-of-Thought (Chaînage de pensée)

**Principe** : Demander à l'IA de réfléchir étape par étape

**Exemple** :

```
Pour prioriser ces features, procède étape par étape :

1. Analyse chaque feature (valeur utilisateur, effort, risques)
2. Calcule le score RICE pour chaque feature
3. Classe les features par score décroissant
4. Justifie le classement
5. Identifie les dépendances entre features
```

**Avantage** : Résultats plus réfléchis et justifiés

### Technique 2 : Few-shot learning (Apprentissage par exemples)

**Principe** : Fournir plusieurs exemples avant de demander la tâche

**Exemple** :

```
Exemple 1 : [exemple complet]
Exemple 2 : [exemple complet]
Exemple 3 : [exemple complet]

Maintenant, crée un [nouveau élément] similaire.
```

**Avantage** : Meilleure compréhension du format et style attendus

### Technique 3 : Itération et affinement

**Principe** : Commencer large, puis préciser progressivement

**Étape 1** : Prompt général

```
Génère une user story pour une fonctionnalité de paiement.
```

**Étape 2** : Affinement après premier résultat

```
Améliore cette user story en ajoutant :
- Critères d'acceptation détaillés
- Scénarios d'erreur
- Contraintes de sécurité
```

**Avantage** : Résultats de meilleure qualité après itération

### Technique 4 : Persona et ton

**Principe** : Définir le persona et le ton de communication

**Exemple** :

```
Tu es un Product Owner présentant une roadmap à un comité de direction.
Ton : Professionnel, concis, orienté business.
Adapte le niveau de détail pour un public non technique.
```

**Avantage** : Résultats adaptés au public cible

---

## Prompts réutilisables pour PO/PM

### Prompt 1 : Génération de user story

```
Tu es un Product Owner expérimenté.

Contexte :
- Produit : [description produit]
- Utilisateurs cibles : [description utilisateurs]
- Contexte technique : [stack, contraintes]

Tâche : Rédige une user story complète pour [fonctionnalité]

Format :
1. User story (format : En tant que..., je veux..., afin de...)
2. 5 critères d'acceptation détaillés et testables
3. Notes techniques pour l'équipe
4. Métriques de succès
5. Dépendances avec autres features

Contraintes :
- Respecter les critères INVEST
- Compatible avec [contraintes]
- Délai : [délai]

Ton : Professionnel, clair, actionnable
```

### Prompt 2 : Synthèse de réunion

```
Synthétise cette transcription de réunion en un compte-rendu structuré :

Transcription :
[coller transcription]

Informations :
- Date : [date]
- Participants : [liste]
- Objectifs : [objectifs]

Format :
1. Résumé exécutif (3-4 phrases)
2. Points clés discutés (3-5 points)
3. Décisions prises (liste claire)
4. Action items (tableau : Action / Responsable / Échéance / Priorité)
5. Prochaines étapes
6. Questions ouvertes

Ton : Professionnel, concis, facile à scanner
Longueur : 1-2 pages maximum
```

### Prompt 3 : Priorisation de features

```
Tu es un Product Owner expert en priorisation.

Analyse ces features et priorise-les selon la méthode RICE :

Features :
[liste de features avec descriptions]

Contexte :
- Utilisateurs : [nombre, type]
- Capacité équipe : [vélocité, contraintes]
- Objectifs produit : [objectifs]

Pour chaque feature, calcule :
- Reach : Nombre d'utilisateurs touchés (avec justification)
- Impact : Impact par utilisateur (0.25 à 3, avec justification)
- Confidence : Niveau de confiance (50% à 100%)
- Effort : Personnes-mois nécessaires

Fournis :
- Score RICE pour chaque feature
- Classement final
- Justification du classement
- Recommandations stratégiques
```

### Prompt 4 : Analyse de risques

```
Identifie et analyse les risques pour ce projet :

Projet : [description projet]
Contexte : [contexte organisation, équipe, marché]

Pour chaque risque identifié :
- Nom du risque
- Probabilité (Faible/Moyenne/Élevée) avec justification
- Impact si réalisé (Faible/Moyen/Élevé) avec justification
- Timing probable
- Signaux d'alerte à surveiller
- Actions préventives possibles
- Plan de mitigation si risque se réalise

Priorise les risques par criticité (Probabilité × Impact).
Fournis un tableau de suivi des risques.
```

### Prompt 5 : Génération de documentation

```
Génère une documentation fonctionnelle complète :

Feature : [description feature]
Contexte : [contexte produit, utilisateurs, technique]

Sections à inclure :
1. Vue d'ensemble (objectif, valeur)
2. Cas d'usage principaux (3-5 cas)
3. Fonctionnalités détaillées
4. Guide utilisateur (étapes pas à pas)
5. FAQ (5-7 questions courantes)
6. Limitations connues
7. Prochaines évolutions prévues

Format : Markdown, clair et structuré
Public cible : [utilisateurs finaux / équipe technique / etc.]
Ton : [professionnel / technique / accessible]
```

---

## Erreurs courantes à éviter

### ❌ Prompt trop vague

**Mauvais** :

```
Écris quelque chose sur les user stories.
```

**Bon** :

```
Rédige une user story complète pour [fonctionnalité spécifique] en suivant le format INVEST.
```

### ❌ Manque de contexte

**Mauvais** :

```
Priorise ces features.
```

**Bon** :

```
Tu es un PO. Priorise ces features pour [produit] en utilisant la méthode RICE, en tenant compte de [contexte spécifique].
```

### ❌ Pas d'itération

**Mauvais** : Accepter le premier résultat sans affinement

**Bon** : Itérer pour améliorer :

1. Premier résultat → Identifier ce qui manque
2. Prompt amélioré → Obtenir meilleur résultat
3. Affinement final → Résultat optimal

### ❌ Ignorer les limites de l'IA

**Mauvais** : Demander des choses impossibles ou hors contexte

**Bon** : Demander des choses réalistes et dans le domaine de compétence de l'IA

---

## Bonnes pratiques

### ✅ Sois spécifique

Plus tu es précis, meilleur est le résultat. Inclus :

- Contexte détaillé
- Format attendu
- Contraintes
- Exemples si possible

### ✅ Itère progressivement

Commence large, puis affine :

1. Premier prompt : Vue d'ensemble
2. Deuxième prompt : Détails spécifiques
3. Troisième prompt : Affinements finaux

### ✅ Valide toujours les résultats

L'IA peut faire des erreurs (hallucinations). Toujours :

- Vérifier les faits
- Valider avec expertise humaine
- Ajuster si nécessaire

### ✅ Réutilise les prompts efficaces

Crée une bibliothèque de prompts qui fonctionnent bien pour tes cas d'usage récurrents.

### ✅ Adapte selon l'outil

Différents outils IA (ChatGPT, Claude, etc.) peuvent nécessiter des ajustements de prompt. Teste et adapte.

---

## Ressources complémentaires

- Module 1 du cours : Acculturation à l'IA (section Ingénierie de prompt)
- Bibliothèque de prompts réutilisables (voir `SUPPORTS/`)
- Outils de test de prompts : PromptPerfect, PromptBase

---

**Note** : Cette fiche pratique est développée par Astek (https://www.astek.net). N'hésitez pas à l'adapter à vos besoins spécifiques.
