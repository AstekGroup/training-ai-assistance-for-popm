# Module 1 : Acculturation à l'IA pour PO/PM

**Version** : 1.0.0
**Date de dernière mise à jour** : 2025-11-18
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Objectifs d'apprentissage

À l'issue de ce module, les participants seront capables de :

1. Comprendre les concepts fondamentaux de l'IA et leur application au métier de PO/PM
2. Identifier les outils IA pertinents pour leurs missions quotidiennes
3. Évaluer l'impact organisationnel de l'intégration de l'IA dans les projets
4. Distinguer les différents types d'IA (générative, analytique, prédictive) et leurs cas d'usage
5. Appliquer les principes de base de l'ingénierie de prompt pour obtenir des résultats pertinents

---

## 1. Introduction : Pourquoi l'IA pour les PO/PM ?

### 1.1 Contexte et enjeux

L'intelligence artificielle transforme la manière dont les Product Owners et Project Managers travaillent. Les outils IA permettent aujourd'hui de :

- **Gagner du temps** sur les tâches répétitives (documentation, synthèses, reporting)
- **Améliorer la qualité** des livrables (user stories, spécifications, analyses)
- **Optimiser les décisions** grâce à l'analyse de données et la prédiction
- **Réduire les coûts** par l'automatisation de processus métier

**Exemple concret** : Une [étude menée par McKinsey en 2023](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier) montre que les PM utilisant des outils IA gagnent en moyenne 6 heures par semaine sur les tâches administratives, leur permettant de se concentrer sur la valeur métier.

### 1.2 Défis et opportunités

**Défis à surmonter** :

- Résistance au changement dans les équipes
- Nécessité de formation et d'accompagnement
- Gestion de la qualité et de la fiabilité des résultats IA
- Considérations éthiques et de confidentialité

**Opportunités** :

- Amélioration de la productivité individuelle et collective
- Meilleure prise de décision basée sur les données
- Innovation dans les processus métier
- Compétitivité accrue

---

## 2. Concepts fondamentaux de l'IA

### 2.1 Qu'est-ce que l'intelligence artificielle ?

**Définition** : L'intelligence artificielle (IA) est la capacité d'une machine à reproduire des fonctions cognitives humaines telles que l'apprentissage, le raisonnement et la résolution de problèmes.

**Types d'IA pertinents pour les PO/PM** :

#### 2.1.1 IA générative

- **Définition** : Génère du contenu nouveau (texte, images, code) à partir de données d'entraînement
- **Exemples d'outils** : [ChatGPT](https://chat.openai.com), [Claude](https://claude.ai), [Gemini](https://gemini.google.com), [Mistral](https://mistral.ai)
- **Cas d'usage PO/PM** :
  - Rédaction de user stories et spécifications
  - Génération de documentation projet
  - Création de présentations et rapports

#### 2.1.2 IA analytique

- **Définition** : Analyse des données existantes pour identifier des patterns et tendances
- **Exemples d'outils** : [Tableau](https://www.tableau.com) avec IA, [Power BI](https://powerbi.microsoft.com), [Looker](https://cloud.google.com/looker)
- **Cas d'usage PO/PM** :
  - Analyse de vélocité d'équipe
  - Identification de risques projet
  - Optimisation de la roadmap produit

#### 2.1.3 IA prédictive

- **Définition** : Prédit des événements futurs basés sur des données historiques
- **Exemples d'outils** : [Forecast](https://www.forecast.app), [Jira Advanced Roadmaps](https://www.atlassian.com/software/jira/features/advanced-roadmaps) avec IA
- **Cas d'usage PO/PM** :
  - Estimation de délais de livraison
  - Prédiction de risques projet
  - Optimisation de la planification

### 2.2 Machine Learning et Deep Learning

**Machine Learning (Apprentissage automatique)** :

- Système qui apprend à partir de données sans être explicitement programmé
- Exemple : Recommandation de priorités de backlog basée sur l'historique

**Deep Learning (Apprentissage profond)** :

- Sous-ensemble du ML utilisant des réseaux de neurones complexes
- Exemple : Analyse de sentiment dans les retours utilisateurs

### 2.3 LLM (Large Language Models) et leur utilisation

**Définition** : Modèles de langage entraînés sur d'énormes volumes de texte pour comprendre et générer du langage naturel.

**Caractéristiques importantes** :

- **Contexte limité** : Attention aux limites de tokens (ex: [ChatGPT](https://chat.openai.com) ~128k tokens)
- **Hallucinations** : Peuvent générer des informations incorrectes
- **Biais** : Reflètent les biais présents dans les données d'entraînement

**Bonnes pratiques** :

- Toujours vérifier les faits générés
- Utiliser des prompts précis et contextuels
- Itérer et affiner les résultats

---

## 3. Panorama des outils IA pour PO/PM

### 3.1 Outils de génération de contenu

#### [ChatGPT](https://chat.openai.com) / [Claude](https://claude.ai) / [Gemini](https://gemini.google.com)

- **Fonctionnalités** : Génération de texte, analyse, synthèse
- **Cas d'usage** :
  - Rédaction de user stories
  - Création de documentation
  - Analyse de retours utilisateurs
- **Avantages** : Polyvalent, facile d'utilisation
- **Limites** : Nécessite vérification, coûts selon usage

#### [GitHub Copilot](https://github.com/features/copilot) / [Cursor](https://cursor.sh)

- **Fonctionnalités** : Assistance au code
- **Cas d'usage** : Compréhension de code technique pour PO
- **Note** : Utile pour comprendre le contexte technique sans coder

### 3.2 Outils d'analyse et de synthèse

#### [Notion AI](https://www.notion.so/product/ai) / [Obsidian](https://obsidian.md) avec plugins IA

- **Fonctionnalités** : Synthèse de notes, génération de contenu
- **Cas d'usage** : Documentation projet, synthèse de réunions

#### [Perplexity](https://www.perplexity.ai) / [Elicit](https://elicit.com)

- **Fonctionnalités** : Recherche et synthèse d'informations
- **Cas d'usage** : Veille concurrentielle, recherche de solutions

### 3.3 Outils d'automatisation de processus

#### [Zapier](https://zapier.com) / [Make](https://www.make.com) (ex-Integromat) avec IA

- **Fonctionnalités** : Automatisation de workflows
- **Cas d'usage** : Automatisation de reporting, synchronisation de données

#### [Microsoft Power Automate](https://powerautomate.microsoft.com) avec IA Builder

- **Fonctionnalités** : Automatisation Microsoft 365
- **Cas d'usage** : Workflows SharePoint, Teams, Outlook

### 3.4 Outils d'assistance aux réunions

#### [Otter.ai](https://otter.ai) / [Fireflies](https://fireflies.ai) / [Zoom IQ](https://zoom.us/ai)

- **Fonctionnalités** : Transcription, synthèse, extraction d'action items
- **Cas d'usage** : Comptes-rendus automatiques, suivi d'actions

#### [Microsoft Teams](https://www.microsoft.com/microsoft-teams) avec IA

- **Fonctionnalités** : Transcription, résumé, suggestions
- **Cas d'usage** : Réunions quotidiennes, rétrospectives

### 3.5 Outils de gestion de projet assistés par IA

#### [Jira](https://www.atlassian.com/software/jira) avec AI Features

- **Fonctionnalités** : Estimation automatique, détection de risques
- **Cas d'usage** : Planification, suivi de projet

#### [Monday.com](https://monday.com) / [Asana](https://asana.com) avec IA

- **Fonctionnalités** : Suggestions de priorités, prédictions
- **Cas d'usage** : Gestion de backlog, optimisation de roadmap

---

## 4. Impact organisationnel de l'intégration de l'IA

### 4.1 Transformation des rôles PO/PM

**Évolution des compétences requises** :

- Maîtrise des outils IA devient essentielle
- Capacité à évaluer la qualité des sorties IA
- Compétences en ingénierie de prompt
- Pensée critique renforcée (vérification des résultats)

**Nouvelles responsabilités** :

- Curateur de contenu IA généré
- Formateur des équipes sur les outils IA
- Gardien de la qualité et de l'éthique

### 4.2 Gestion du changement

**Stratégie d'adoption progressive** :

1. **Phase pilote** (1-2 mois)

   - Sélection d'un outil IA pour un cas d'usage spécifique
   - Formation d'un petit groupe de champions
   - Mesure des résultats
2. **Déploiement ciblé** (3-6 mois)

   - Extension à d'autres cas d'usage
   - Formation élargie
   - Partage de bonnes pratiques
3. **Intégration complète** (6-12 mois)

   - Adoption généralisée
   - Optimisation continue
   - Culture IA intégrée

**Facteurs de succès** :

- Support de la direction
- Formation et accompagnement
- Partage d'expériences et retours d'usage
- Mesure de l'impact (ROI, gain de temps)

### 4.3 Considérations éthiques et de confidentialité

**Confidentialité des données** :

- Vérifier les politiques de confidentialité des outils
- Éviter de partager des données sensibles (clients, stratégie)
- Utiliser des versions entreprise avec garanties de sécurité

**Biais et équité** :

- Être conscient des biais potentiels dans les résultats IA
- Vérifier la diversité des perspectives
- Maintenir l'humain dans la boucle de décision

**Transparence** :

- Communiquer l'utilisation de l'IA aux parties prenantes
- Documenter les processus assistés par IA
- Maintenir la traçabilité des décisions

---

## 5. Principes de base de l'ingénierie de prompt

### 5.1 Qu'est-ce qu'un prompt efficace ?

**Définition** : Un prompt est une instruction donnée à un modèle IA pour obtenir un résultat souhaité.

**Structure d'un bon prompt** :

1. **Contexte** : Situation, rôle, objectif
2. **Tâche** : Ce que vous voulez obtenir
3. **Format** : Structure attendue du résultat
4. **Contraintes** : Limitations, exigences spécifiques

### 5.2 Techniques de prompt engineering

#### Technique 1 : Rôle et contexte

```
Mauvais : "Écris une user story"
Bon : "Tu es un Product Owner expérimenté. Écris une user story pour une fonctionnalité de connexion utilisateur dans une application e-commerce, en suivant le format INVEST."
```

#### Technique 2 : Exemples (Few-shot learning)

```
"Voici 3 exemples de user stories bien rédigées :
[exemples]
Maintenant, écris une user story similaire pour [nouvelle fonctionnalité]"
```

#### Technique 3 : Chaînage de pensée (Chain-of-Thought)

```
"Étape par étape :
1. Identifie les acteurs concernés
2. Définis le besoin métier
3. Formule la user story
4. Ajoute les critères d'acceptation"
```

#### Technique 4 : Itération et affinement

- Commencer large, puis préciser
- Demander des clarifications si nécessaire
- Itérer sur les résultats

### 5.3 Erreurs courantes à éviter

1. **Prompts trop vagues** : "Fais quelque chose de bien"
2. **Manque de contexte** : Ne pas préciser le domaine, le public, les contraintes
3. **Pas d'itération** : Accepter le premier résultat sans affinement
4. **Ignorer les limites** : Demander des choses impossibles ou hors contexte

---

## 6. Étude de cas : Adoption de l'IA dans une équipe produit

### Contexte

**Entreprise** : Scale-up française dans le secteur de la fintech
**Équipe** : 3 Product Owners, 2 Project Managers
**Défi** : Réduire le temps passé sur la documentation (40% du temps) pour se concentrer sur la valeur métier

### Solution mise en place

**Phase 1 - Pilote (Mois 1-2)** :

- Sélection de [ChatGPT](https://chat.openai.com) pour la génération de user stories
- Formation de 2 PO champions
- Test sur 20 user stories

**Résultats Phase 1** :

- Gain de temps : 50% sur la rédaction initiale
- Qualité : 80% des user stories utilisables directement après révision légère
- Satisfaction : 4.2/5

**Phase 2 - Déploiement (Mois 3-6)** :

- Extension à toute l'équipe
- Utiliser [MS Teams Facilitator](https://learn.microsoft.com/en-us/microsoftteams/facilitator-teams) pour les réunions
- Intégration de [Notion AI](https://www.notion.so/product/ai) pour la documentation

**Résultats Phase 2** :

- Gain de temps global : 6h/semaine par PO/PM
- ROI : 3x le coût des outils en 6 mois
- Amélioration de la qualité perçue par les développeurs

### Leçons apprises

✅ **Ce qui a fonctionné** :

- Approche progressive avec pilote
- Formation pratique et accompagnement
- Partage régulier de bonnes pratiques

❌ **Ce qui n'a pas fonctionné** :

- Tentative d'adoption trop rapide initialement
- Manque de vérification des résultats au début

### Recommandations

1. Commencer petit avec un cas d'usage clair
2. Former et accompagner activement
3. Mesurer l'impact régulièrement
4. Maintenir l'humain dans la boucle

---

## 7. Exercices pratiques

> [!NOTE]
> Ces exercices sont conçus pour une session d'1 heure (environ 20 minutes par exercice). Ils permettent de découvrir concrètement l'ingénierie de prompt dans un contexte PO/PM.

### Exercice 1 : De l'intention au prompt structuré (méthode ACTF)

**Objectif** : Apprendre à structurer un prompt efficace en utilisant la méthode ACTF (Acteur, Contexte, Tâche, Format)

**Durée** : 20 minutes

**Scénario** :
Vous êtes PO d'une application de gestion de tâches pour équipes distantes. Vous devez générer une user story pour la fonctionnalité "notification de rappel avant échéance".

**Étape 1 - Prompt basique (mauvais exemple)** :
```
Écris une user story pour les notifications
```

**Étape 2 - À vous de jouer !**

Transformez le prompt basique en utilisant la méthode ACTF :

1. **A - Acteur/Rôle** : Quel rôle doit jouer l'IA ?
   - _Exemple_ : "Tu es un Product Owner senior avec 8 ans d'expérience..."

2. **C - Contexte** : Quelle est la situation ?
   - _À compléter_ : Décrivez le produit, la fonctionnalité, les utilisateurs cibles

3. **T - Tâche** : Que doit faire précisément l'IA ?
   - _À compléter_ : Que voulez-vous obtenir exactement ?

4. **F - Format** : Quelle structure attendez-vous ?
   - _À compléter_ : Format INVEST ? Avec critères d'acceptation ? En Gherkin ?

**Étape 3 - Testez votre prompt**
- Copiez votre prompt complet dans [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)
- Observez la qualité du résultat

**Débrief en groupe (5 min)** :
- Comparez vos prompts avec votre voisin
- Quelle structure a donné le meilleur résultat ?

---

### Exercice 2 : L'art de l'itération - Affiner pour atteindre la perfection

**Objectif** : Maîtriser l'itération de prompts pour améliorer progressivement un résultat

**Durée** : 20 minutes

**Scénario** :
L'IA vous a généré cette user story, mais elle est incomplète :

```
En tant qu'utilisateur de l'application,
Je veux recevoir une notification avant l'échéance d'une tâche,
Afin de ne pas oublier de la compléter.

Critères d'acceptation :
- Une notification est envoyée
- L'utilisateur peut voir la tâche
- La notification apparaît au bon moment
```

**Problème** : Les critères d'acceptation sont trop vagues et non testables !

**À vous de jouer - Rédiger des prompts d'itération** :

**Itération 1** - Préciser les critères d'acceptation
```
Réécrire les critères d'acceptation en format Gherkin (Given/When/Then)
pour qu'ils soient testables par l'équipe QA.
```

**Itération 2** - Ajouter des contraintes techniques
```
Ajoute 3 notes techniques pour l'équipe de développement concernant :
- Le canal de notification (push, email, in-app)
- Le timing de déclenchement
- La customisation utilisateur
```

**Itération 3** - Compléter avec les métriques
```
Ajoute une section "Métriques de succès" avec 3 KPIs mesurables
pour valider que la fonctionnalité apporte de la valeur.
```

**Débrief** :
- Combien d'itérations avez-vous réellement faites ?
- Quand avez-vous estimé que le résultat était "production-ready" ?

---

### Exercice 3 : Le "Few-Shot Learning" - Standardiser via l'exemple

**Objectif** : Utiliser des exemples pour obtenir des résultats cohérents et conformes à vos standards

**Durée** : 20 minutes

**Scénario** :
Votre équipe a un format très précis pour les Release Notes. Vous voulez que l'IA génère les notes de version dans ce format exact.

**Voici 2 exemples de vos Release Notes** :

```
📦 Version 2.3.0 - 2024-10-15

✨ Nouvelles fonctionnalités
• [FEAT-245] Ajout du mode sombre pour réduire la fatigue oculaire
• [FEAT-251] Export des rapports en format PDF avec branding personnalisé

🔧 Améliorations
• [IMP-189] Temps de chargement du dashboard réduit de 40%

🐛 Corrections de bugs
• [FIX-312] Correction du crash lors de l'upload de fichiers >10MB
• [FIX-318] Correction de l'affichage des dates en format US

---

📦 Version 2.2.1 - 2024-09-28

🔧 Améliorations
• [IMP-176] Interface de recherche repensée pour une meilleure UX

🐛 Corrections de bugs
• [FIX-301] Résolution du problème de synchronisation sur Safari
```

**À vous de jouer** :

**Étape 1** - Construisez un prompt "Few-Shot"

```
Voici le format standard utilisé pour nos Release Notes :

[Insérer les 2 exemples ci-dessus]

En suivant EXACTEMENT ce format (structure, emojis, codes de tickets),
génère les Release Notes pour la version 2.4.0 qui inclut :

Nouvelles fonctionnalités :
- Intégration Slack pour notifications temps réel (FEAT-267)
- Mode collaboratif avec édition simultanée (FEAT-271)

Améliorations :
- Refonte du moteur de recherche avec filtres avancés (IMP-201)

Corrections :
- Problème de déconnexion automatique après 10min (FIX-334)
- Erreur d'affichage des graphiques sur mobile (FIX-340)
```

**Étape 2** - Testez et observez
- Le format est-il respecté ?
- Les emojis sont-ils corrects ?
- La structure est-elle identique ?

**Étape 3** - Cas d'usage réel
Pensez à un document que vous produisez régulièrement (compte-rendu de réunion, rapport de sprint, etc.). Comment pourriez-vous utiliser le Few-Shot Learning pour standardiser sa génération ?

**Débrief** :
- Quels types de documents de votre quotidien PO/PM pourraient bénéficier de cette approche ?
- Quels sont les risques de sur-standardisation ?

---

### Points clés à retenir des exercices

✅ **Exercice 1 - Structure** : Un bon prompt = Acteur + Contexte + Tâche + Format

✅ **Exercice 2 - Itération** : Le premier résultat n'est jamais le bon. L'itération est normale et souhaitable.

✅ **Exercice 3 - Exemples** : Fournir des exemples garantit cohérence et conformité aux standards.

### Aller plus loin

Pour approfondir ces techniques, testez-les cette semaine sur :
- La rédaction de vos user stories
- La préparation de vos réunions
- La génération de vos rapports

**Conseil** : Créez-vous une bibliothèque personnelle de prompts réutilisables pour vos tâches récurrentes !

---

## 8. Quiz d'évaluation

### Q1 : Qu'est-ce qu'un LLM ?

A) Un modèle de langage entraîné sur de grandes quantités de texte
B) Un outil de gestion de projet
C) Une méthode de machine learning
D) Un framework de développement

**Réponse** : A

### Q2 : Quelle est la principale limite à considérer lors de l'utilisation de l'IA générative ?

A) Le coût
B) Les hallucinations et la nécessité de vérification
C) La vitesse de génération
D) La compatibilité avec les outils existants

**Réponse** : B

### Q3 : Quel est le ratio recommandé théorie/pratique pour cette formation ?

A) 60% théorie / 40% pratique
B) 50% théorie / 50% pratique
C) 40% théorie / 60% pratique
D) 30% théorie / 70% pratique

**Réponse** : C

### Q4 : Parmi ces éléments, lequel n'est PAS essentiel dans un prompt efficace ?

A) Le contexte
B) La tâche à accomplir
C) Le format attendu
D) Le nombre exact de mots à générer

**Réponse** : D (le nombre exact de mots n'est pas essentiel, mais peut être utile)

### Q5 : Quelle est la première phase recommandée pour l'adoption de l'IA dans une organisation ?

A) Déploiement généralisé
B) Phase pilote avec un cas d'usage spécifique
C) Formation de toute l'équipe
D) Achat de licences pour tous

**Réponse** : B

### Q6 : Quel type d'IA est le plus adapté pour prédire les délais de livraison d'un projet ?

A) IA générative
B) IA analytique
C) IA prédictive
D) IA conversationnelle

**Réponse** : C

### Q7 : Quelle technique de prompt engineering consiste à fournir des exemples avant de demander la tâche ?

A) Chain-of-Thought
B) Few-shot learning
C) Role-playing
D) Iterative refinement

**Réponse** : B

### Q8 : Quel est un risque majeur à considérer lors de l'utilisation d'outils IA pour la documentation projet ?

A) La vitesse de génération trop rapide
B) La confidentialité des données
C) Le coût des outils
D) La nécessité de formation

**Réponse** : B

---

## 9. Ressources complémentaires

### Articles et études

- [McKinsey Global Institute (2023). &#34;The economic potential of generative AI&#34;](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)
- [Harvard Business Review (2024). &#34;How Product Managers Can Use AI to Build Better Products&#34;](https://hbr.org)
- [Product Management Today (2024). &#34;AI Tools for Product Managers: A Comprehensive Guide&#34;](https://www.productmanagementtoday.com)

### Outils à explorer

- **[ChatGPT](https://chat.openai.com)** : Génération de texte, analyse, synthèse
- **[Claude](https://claude.ai)** : Génération de texte, analyse, synthèse
- **[Perplexity](https://www.perplexity.ai)** : Recherche et synthèse d'informations
- **[Otter.ai](https://otter.ai)** : Transcription et synthèse de réunions
- **[Notion AI](https://www.notion.so/product/ai)** : Documentation et synthèse avec IA

### Formations complémentaires

- Cours en ligne : "Prompt Engineering for Business" (Coursera)
- Webinaires Astek sur l'IA appliquée au management de projet
- Communautés : Product Management AI Community (Slack)

### Glossaire des termes clés

Consultez le fichier `ANNEXES/glossaire.md` pour les définitions complètes des termes techniques utilisés dans ce module.

---

## 10. Conclusion et prochaines étapes

### Points clés à retenir

1. L'IA est un levier puissant pour améliorer la productivité et la qualité du travail des PO/PM
2. Il existe une grande variété d'outils IA adaptés aux différents besoins métier
3. L'adoption doit être progressive et accompagnée
4. L'ingénierie de prompt est une compétence clé à développer
5. La vérification et l'humain restent essentiels dans la boucle

### Prochaines étapes

- **Module 2** : Qualité, coûts et délais assistés par IA
- **Module 3** : Automatisation et structuration des projets avec l'IA
- **Module 4** : Prise de décisions assistée par IA
- **Module 5** : Réunions et documentation assistées par l'IA

### Action immédiate

Avant le prochain module, identifiez et testez un outil IA sur un cas d'usage concret de votre quotidien. Partagez votre expérience avec le groupe lors de la prochaine session.

---

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.
