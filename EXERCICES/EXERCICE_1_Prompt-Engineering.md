# Exercices Module 1 : Découverte du Prompt Engineering pour PO/PM (Cas d'étude TaskFlow)

**Durée totale** : 1 heure (10 + 10 + 20 minutes + débriefs)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : Accès à [Claude](https://claude.ai), Copilot ou [Vibe de Mistral](https://chat.mistral.ai) (recommandé)

---

## 🎯 Exercice 1 : Structurer un prompt avec la méthode ACTF

**Durée** : 10 minutes  
**Objectif** : Apprendre à transformer un prompt vague en prompt structuré et efficace en utilisant le contexte de notre projet.

### Le scénario

Vous êtes Product Owner de la solution **TaskFlow**, une application SaaS de gestion de projets pour équipes hybrides. Vous devez générer une User Story complète pour la fonctionnalité **"Recevoir une notification Slack lors de la création d'une tâche"** (identifiée dans le backlog sous la référence `US-553`).

### ❌ Ce qu'il ne faut PAS faire

```text
Écris une user story pour la notification Slack de TaskFlow.
```

**Problème** : Trop vague. L'IA ne dispose d'aucun contexte sur TaskFlow, sur les destinataires des notifications, ni sur le format attendu pour l'équipe de développement.

### ✅ À vous de jouer !

Transformez ce prompt basique en utilisant la **méthode ACTF** :

#### **A - Acteur** : Quel rôle doit jouer l'IA ?

💡 *Réfléchissez* : Précisez le niveau d'expertise (ex: Product Owner senior habitué aux méthodologies agiles) et la culture projet de l'acteur virtuel.

---

#### **C - Contexte** : Quelle est la situation de TaskFlow et de cette fonctionnalité ?

💡 *Réfléchissez* : Présentez succinctement l'outil TaskFlow (SaaS de gestion de tâches) et l'objectif de la fonctionnalité (notifier en temps réel les membres de l'équipe sur leur canal Slack connecté pour qu'ils soient informés sans ouvrir l'application).

---

#### **T - Tâche** : Que doit faire précisément l'IA ?

💡 *Réfléchissez* : Demandez la rédaction d'une User Story complète, en insistant sur le besoin utilisateur (En tant que... / Je souhaite... / Afin de...) et l'intégration des critères d'acceptation.

---

#### **F - Format** : Quelle structure finale attendez-vous ?

💡 *Réfléchissez* : Imposez une structure de sortie (Titre, Rôle utilisateur, Critères d'acceptation clairs, Définition de Terminé / Definition of Done standardisée).

---

### 🧪 Testez votre prompt

1. Assemblez vos 4 composantes (A + C + T + F).
2. Copiez votre prompt dans votre outil d'IA (Vibe de Mistral, Claude ou Copilot).
3. Notez la qualité du résultat (1 à 5 ⭐).

### 💬 Débrief (5 min)

- En quoi la méthode ACTF a-t-elle changé le niveau de détail technique de la story ?
- Le format généré est-il directement exploitable par vos développeurs ?

---

## 📚 Exercice 2 : Standardiser avec le "Few-Shot Learning"

**Durée** : 10 minutes  
**Objectif** : Utiliser des exemples réels de votre historique pour imposer un format et garantir la cohérence des livrables.

### Le scénario

Pour la release du Sprint 3 de TaskFlow, vous devez générer des **Release Notes** parfaites. Afin que l'IA respecte scrupuleusement la charte éditoriale de vos précédentes publications, vous allez lui fournir des exemples de versions passées.

### 📋 Exemples historiques de Release Notes TaskFlow (à fournir à l'IA)

```markdown
📦 Version 2.2.1 - 2026-04-30

🔧 Améliorations
• [IMP-536] Configuration de projets facilitée grâce au nouveau template de suivi RH

🐛 Corrections de bugs
• [BUG-539] Correction de la duplication des rôles et permissions lors de la création d'un projet depuis un template
```

```markdown
📦 Version 2.3.0 - 2026-05-14

✨ Nouvelles fonctionnalités
• [FEAT-546] Possibilité de configurer des dates d'échéance relatives (ex: J+5) dans les modèles de projet

🐛 Corrections de bugs
• [BUG-544] Résolution d'un crash critique (Erreur 500) lors de la création de projets dotés de titres de plus de 100 caractères
```

### ✅ À vous de jouer - Construire un prompt "Few-Shot"

Rédigez un prompt structuré qui fournit ces deux exemples à l'IA, puis demandez-lui de générer les Release Notes de la **Version 2.4.0** (Sprint 4) qui intègre les éléments bruts suivants :

* **Feature** : Intégration Slack, notification lors de la création d'une tâche (US-553)
* **Feature** : Paramétrage de l'intégration Slack (choix du canal de destination et authentification OAuth2) (US-555)
* **Correction** : Élimination de la duplication de notifications Slack lors de l'édition rapide d'une tâche (BUG-556)

### 🧪 Testez et validez

Vérifiez que le résultat de l'IA respecte :
- ✅ L'en-tête de version avec emojis.
- ✅ La catégorisation stricte (Nouvelles fonctionnalités, Améliorations, Corrections de bugs) basée sur le type des tickets.
- ✅ Le formatage exact des tags de tickets (`[FEAT-553]`, `[BUG-556]`, etc.).
- ✅ Un ton tourné vers le bénéfice de l'utilisateur final.

---

## 🔄 Exercice 3 : Maîtriser l'itération pour affiner un résultat

**Durée** : 20 minutes  
**Objectif** : Apprendre à guider l'IA pas à pas pour passer d'une idée brute à une spécification exploitable en production.

### Le scénario

L'IA vous a généré une première ébauche pour l'**US-553 (Notification Slack de création de tâche)**, mais elle est beaucoup trop superficielle :

```markdown
En tant que membre d'équipe,
Je veux recevoir une notification Slack quand une tâche est créée,
Afin d'être informé des nouveaux travaux.

Critères d'acceptation :
- Un message Slack est envoyé
- Le message contient le titre de la tâche
```

### 🚨 Problèmes identifiés

Les critères sont flous, non testables pour l'équipe QA, et aucune règle de configuration de canal ou de sécurité n'est spécifiée.

### ✅ À vous de jouer - Rédiger 3 prompts d'itération successifs

#### **Itération 1** : Rendre les critères testables en format Gherkin

```text
Réécris les critères d'acceptation en format Gherkin (Given/When/Then) pour couvrir :
1. Le scénario nominal (création réussie et envoi sur le canal configuré).
2. Le scénario alternatif (le canal n'est pas configuré -> pas d'envoi).
3. Le scénario d'erreur (échec de connexion API avec Slack).
```

---

#### **Itération 2** : Ajouter la Definition of Done (DoD) et les contraintes techniques

```text
Ajoute une section "Definition of Done (DoD)" standardisée pour notre équipe technique de TaskFlow incluant :
1. Couverture de test unitaire > 80%.
2. Revue de code par un senior.
3. Sécurité (les jetons d'authentification Slack doivent être stockés de manière chiffrée et sécurisée).
```

---

#### **Itération 3** : Définir des indicateurs de performance (KPIs)

```text
Ajoute une section "Métriques & Valeur Produit" définissant 3 KPIs mesurables
permettant de valider le succès de cette intégration Slack (ex : temps de réaction, taux d'engagement).
```

---

### 🧪 Testez vos itérations

1. Copiez la story incomplète.
2. Soumettez l'Itération 1, puis l'Itération 2, puis l'Itération 3 dans le même fil de discussion.
3. Observez comment la story s'enrichit et se professionnalise.

---

## 🎓 Points clés à retenir

| Exercice | Technique apprise | Application au quotidien |
| :--- | :--- | :--- |
| **1. Structure ACTF** | Acteur, Contexte, Tâche, Format | Poser les bases solides d'un prompt pour éviter les hors-sujets |
| **2. Few-Shot Learning** | Apprentissage par l'exemple | Standardiser les livrables répétitifs (Release Notes, comptes-rendus) |
| **3. Itération guidée** | Affinement incrémental | Travailler par étapes plutôt que de chercher un prompt parfait du premier coup |

---

## 📌 Rappels importants

> [!WARNING]
> **Validation humaine indispensable** : L'IA peut halluciner des formats d'API ou des comportements. Relisez toujours les spécifications techniques générées.

> [!TIP]
> **Le secret** : Enchaînez les prompts courts dans une même session de chat pour structurer votre pensée et celle de l'IA de manière progressive.

> [!CAUTION]
> **Gouvernance et Sécurité** : Ne transmettez jamais de clés API réelles ou de données confidentielles de clients dans des modèles d'IA publics. Assurez-vous d'avoir l'accord explicite de votre organisation (Accord Projet) avant d'utiliser ces outils sur vos projets.