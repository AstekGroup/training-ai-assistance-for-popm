# Exercice 2 : Rédaction de prompts efficaces

## 🎯 Objectif de l'exercice

Apprendre à rédiger des prompts efficaces pour générer des user stories de qualité professionnelle avec l'IA.

## 📋 Contexte de l'exercice

Vous êtes Product Owner et vous devez rédiger plusieurs user stories pour une nouvelle fonctionnalité. Au lieu de les rédiger manuellement, vous allez utiliser l'IA (ChatGPT, Claude, ou Gemini) pour accélérer le processus.

**Objectif** : Maîtriser l'ingénierie de prompt pour générer des user stories complètes et de qualité.

## 🎯 Votre mission

### Partie 1 : Comprendre l'anatomie d'un prompt efficace

Un bon prompt pour générer une user story doit contenir :

1. **Contexte et rôle** : Qui vous êtes et dans quel contexte
2. **Description de la fonctionnalité** : Ce que vous voulez documenter
3. **Format attendu** : Structure de la user story (INVEST, critères d'acceptation, etc.)
4. **Contraintes spécifiques** : Limitations techniques, public cible, etc.
5. **Exemples** (optionnel) : Few-shot learning pour guider l'IA

### Partie 2 : Exercice guidé - Rédaction progressive

#### Étape 1 : Prompt basique (version faible)

**Scénario** : Vous travaillez sur une application de gestion de tâches. Vous devez créer une user story pour l'ajout de la fonctionnalité "Notifications par email pour les tâches en retard".

**Prompt basique (à NE PAS utiliser)** :

```
Écris une user story pour les notifications email.
```

**❌ Problèmes de ce prompt** :

- Trop vague
- Pas de contexte
- Pas de format spécifié
- Résultat sera générique et inutilisable

#### Étape 2 : Prompt amélioré (version intermédiaire)

**Prompt amélioré** :

```
Tu es un Product Owner.
Écris une user story pour une fonctionnalité de notifications par email
pour les tâches en retard dans une application de gestion de tâches.
Format : En tant que..., je veux..., afin de...
```

**✅ Améliorations** :

- Contexte du rôle
- Description de la fonctionnalité
- Format spécifié

**⚠️ Manques** :

- Pas assez de détails sur le contexte produit
- Pas de critères d'acceptation demandés
- Pas d'informations techniques

#### Étape 3 : Prompt optimal (version professionnelle)

**Prompt optimal** :

```
Tu es un Product Owner expérimenté travaillant sur TaskMaster,
une application web de gestion de tâches pour équipes (style Trello/Asana).

Contexte produit :
- Application utilisée par des équipes de 5-50 personnes
- Fonctionnalités existantes : création tâches, assignation, dates limites, statuts
- Stack technique : React frontend, Node.js backend, PostgreSQL database
- Utilisateurs principaux : chefs de projet et membres d'équipe

Nouvelle fonctionnalité à documenter :
Nous voulons ajouter un système de notifications par email pour alerter
les utilisateurs lorsqu'une tâche assignée dépasse sa date limite.

Tâche :
Rédige une user story complète en suivant le format INVEST et incluant :

1. Description de la user story (format : En tant que..., je veux..., afin de...)
2. Valeur métier (pourquoi cette fonctionnalité est importante)
3. 5 critères d'acceptation détaillés et testables
4. Notes techniques pour l'équipe de développement (considérations d'implémentation)
5. Métriques de succès (comment mesurer l'impact)
6. Estimation de complexité (T-shirt sizing : XS, S, M, L, XL)

Format : Utilise markdown, des sections claires et des bullet points.
Ton : Professionnel, précis, orienté développement.
```

**✅ Points forts de ce prompt** :

- Rôle et contexte détaillés
- Description du produit et des utilisateurs
- Tâche précise avec structure demandée
- Format et ton spécifiés
- Toutes les sections importantes couvertes

### Partie 3 : Exercice pratique

#### Mission 1 : Créer un prompt pour votre contexte

Choisissez **une fonctionnalité** de votre produit actuel (ou inventez-en une) et rédigez un prompt optimal pour générer une user story complète.

**Fonctionnalités suggérées si vous n'avez pas d'idée** :

- Système d'authentification à deux facteurs (2FA)
- Export de données en format CSV/Excel
- Mode hors-ligne pour application mobile
- Système de commentaires et mentions (@user)
- Dashboard analytics avec graphiques personnalisables
- Fonctionnalité de recherche avancée avec filtres

**Template de prompt à compléter** :

```
Tu es un Product Owner expérimenté travaillant sur [NOM DU PRODUIT],
[TYPE D'APPLICATION] pour [PUBLIC CIBLE].

Contexte produit :
- [Caractéristique 1 du produit]
- [Caractéristique 2]
- [Stack technique si pertinent]
- [Utilisateurs principaux]

Nouvelle fonctionnalité à documenter :
[DESCRIPTION DÉTAILLÉE DE LA FONCTIONNALITÉ]

Tâche :
Rédige une user story complète en suivant le format INVEST et incluant :

1. Description de la user story (format : En tant que..., je veux..., afin de...)
2. Valeur métier
3. [NOMBRE] critères d'acceptation détaillés et testables
4. Notes techniques pour l'équipe de développement
5. [AUTRE SECTION SI PERTINENT]

Format : Markdown, sections claires, bullet points.
Ton : [TON SOUHAITÉ]
```

#### Mission 2 : Tester et itérer

1. **Testez votre prompt** avec ChatGPT, Claude ou Gemini
2. **Évaluez le résultat** selon les critères ci-dessous
3. **Itérez** : Si le résultat n'est pas satisfaisant, affinez votre prompt
4. **Documentez** : Gardez une trace des versions de votre prompt et des résultats

**Critères d'évaluation du résultat IA** :

| Critère                                                                                      | Oui/Non | Commentaires |
| --------------------------------------------------------------------------------------------- | ------- | ------------ |
| La user story suit le format "En tant que... je veux... afin de..."                           |         |              |
| La valeur métier est claire et convaincante                                                  |         |              |
| Les critères d'acceptation sont testables (format Given/When/Then idéalement)               |         |              |
| Les notes techniques sont pertinentes                                                         |         |              |
| Le résultat est directement utilisable par l'équipe dev                                     |         |              |
| Le langage est professionnel et précis                                                       |         |              |
| La user story respecte INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) |         |              |

#### Mission 3 : Techniques avancées

Testez ces **techniques de prompt engineering** pour améliorer vos résultats :

**Technique 1 : Few-shot learning (apprentissage par exemples)**

```
Voici 2 exemples de user stories bien rédigées pour notre produit :

EXEMPLE 1 :
[Copier-coller une vraie user story de qualité]

EXEMPLE 2 :
[Copier-coller une autre user story de qualité]

Maintenant, en suivant le même format et niveau de qualité,
rédige une user story pour [nouvelle fonctionnalité].
```

**Technique 2 : Chain-of-Thought (chaînage de pensée)**

```
Procède étape par étape :

Étape 1 : Identifie les acteurs concernés par cette fonctionnalité
Étape 2 : Définis le besoin métier principal
Étape 3 : Formule la user story au format standard
Étape 4 : Liste les critères d'acceptation en pensant aux cas limites
Étape 5 : Ajoute les considérations techniques importantes

Fonctionnalité : [description]
```

**Technique 3 : Persona-driven prompt**

```
Voici le persona de notre utilisateur principal :

Nom : Marie, Chef de projet digital
Âge : 35 ans
Contexte : Manage 3 projets en parallèle, 12 personnes dans son équipe
Pain points : Trop de temps perdu en reporting manuel, besoin de visibilité temps réel
Objectifs : Gagner 5h/semaine, améliorer communication avec stakeholders
Niveau technique : Moyen (utilise Jira, Notion, Slack quotidiennement)

Rédige une user story pour [fonctionnalité] en pensant spécifiquement
aux besoins et au langage de Marie.
```

**Technique 4 : Itération et affinement**

Si le premier résultat n'est pas satisfaisant, demandez à l'IA d'affiner :

```
Le résultat est bon mais je voudrais que tu améliores :
1. Les critères d'acceptation ne sont pas assez précis, ajoute des exemples concrets
2. La valeur métier manque de chiffres/métriques, ajoute des estimations quantifiées
3. Les notes techniques sont trop vagues, sois plus spécifique sur l'implémentation
```

## 📐 Template de livrable

### Prompt initial (version 1)

```
[Votre premier prompt]
```

**Résultat obtenu** :

```
[Copier-coller le résultat de l'IA]
```

**Évaluation** :

- Points forts : [Liste]
- Points faibles : [Liste]
- Score qualité : [X/10]

### Prompt amélioré (version 2)

```
[Votre prompt après itération]
```

**Améliorations apportées** :

- [Amélioration 1]
- [Amélioration 2]
- [Amélioration 3]

**Résultat obtenu** :

```
[Copier-coller le résultat de l'IA]
```

**Évaluation** :

- Points forts : [Liste]
- Points faibles : [Liste]
- Score qualité : [X/10]

### Prompt final (version optimale)

```
[Votre prompt final optimisé]
```

**Résultat obtenu** :

```
[Copier-coller le résultat de l'IA]
```

**Évaluation finale** :

- Utilisable directement : Oui/Non
- Modifications nécessaires : [Liste si applicable]
- Score qualité : [X/10]

### Analyse comparative

| Critère                               | Version 1     | Version 2     | Version finale |
| -------------------------------------- | ------------- | ------------- | -------------- |
| Clarté de la user story               | [Note/10]     | [Note/10]     | [Note/10]      |
| Pertinence des critères d'acceptation | [Note/10]     | [Note/10]     | [Note/10]      |
| Qualité des notes techniques          | [Note/10]     | [Note/10]     | [Note/10]      |
| Utilisabilité directe                 | [Note/10]     | [Note/10]     | [Note/10]      |
| **TOTAL**                        | **/40** | **/40** | **/40**  |

### Leçons apprises

**Ce qui fonctionne bien** :

1. [Leçon 1]
2. [Leçon 2]
3. [Leçon 3]

**Ce qui ne fonctionne pas** :

1. [Leçon 1]
2. [Leçon 2]

**Bonnes pratiques identifiées** :

1. [Pratique 1]
2. [Pratique 2]
3. [Pratique 3]
