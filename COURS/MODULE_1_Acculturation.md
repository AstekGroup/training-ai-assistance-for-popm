# Module 1 : Acculturation à l'IA pour PO/PM

**Version** : 1.0.0
**Date de dernière mise à jour** : 2025-11-09
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)
**Date de dernière mise à jour** : 2024-12-19
**Auteur** : Astek

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
- Ajout d'[Otter.ai](https://otter.ai) pour les réunions
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

### Exercice 1 : Identification de cas d'usage IA

**Objectif** : Identifier 3 cas d'usage IA pertinents pour votre contexte

**Instructions** :

1. Listez vos 5 tâches les plus chronophages en tant que PO/PM
2. Pour chaque tâche, identifiez si l'IA pourrait aider
3. Sélectionnez les 3 cas d'usage les plus prometteurs
4. Pour chaque cas d'usage, précisez :
   - L'outil IA envisagé
   - Le gain attendu (temps, qualité)
   - Les risques potentiels

**Corrigé type** :

- Cas d'usage 1 : Génération de user stories avec [ChatGPT](https://chat.openai.com)
  - Gain : 2h/semaine, amélioration de la cohérence
  - Risque : Perte de réflexion métier si mal utilisé
- Cas d'usage 2 : Synthèse de réunions avec [Otter.ai](https://otter.ai)
  - Gain : 1h/semaine, meilleure traçabilité
  - Risque : Confidentialité des données
- Cas d'usage 3 : Analyse de vélocité avec [Jira AI](https://www.atlassian.com/software/jira/features/ai)
  - Gain : Meilleure planification, détection précoce de risques
  - Risque : Sur-confiance dans les prédictions

### Exercice 2 : Rédaction de prompts efficaces

**Objectif** : Rédiger un prompt efficace pour générer une user story

**Instructions** :

1. Choisissez une fonctionnalité de votre produit actuel ou imaginaire
2. Rédigez un prompt pour générer une user story complète
3. Testez votre prompt avec [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)
4. Itérez pour améliorer le résultat

**Critères d'évaluation** :

- Présence de contexte et rôle
- Clarté de la tâche
- Format spécifié
- Résultat utilisable directement

**Exemple de prompt efficace** :

```
Tu es un Product Owner expérimenté travaillant sur une application e-commerce.

Contexte : Nous développons une nouvelle fonctionnalité permettant aux clients de sauvegarder leurs articles favoris dans une liste de souhaits.

Tâche : Rédige une user story complète en suivant le format INVEST et incluant :
- Description de la user story (format : En tant que..., je veux..., afin de...)
- 5 critères d'acceptation détaillés
- Notes techniques pour l'équipe de développement
- Métriques de succès

Format : Utilise des puces et une structure claire.
```

### Exercice 3 : Analyse d'impact organisationnel

**Objectif** : Évaluer l'impact de l'adoption d'un outil IA dans votre organisation

**Instructions** :

1. Sélectionnez un outil IA que vous souhaiteriez adopter
2. Identifiez les parties prenantes concernées
3. Analysez les impacts (positifs et négatifs) pour chaque partie prenante
4. Proposez un plan d'adoption en 3 phases

**Template d'analyse** :

- Outil sélectionné : [nom]
- Parties prenantes : [liste]
- Impacts positifs : [par partie prenante]
- Impacts négatifs / risques : [par partie prenante]
- Plan d'adoption :
  - Phase 1 (Mois 1-2) : [actions]
  - Phase 2 (Mois 3-6) : [actions]
  - Phase 3 (Mois 6-12) : [actions]

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
