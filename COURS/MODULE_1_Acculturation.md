# Module 1 : Acculturation à l'IA pour PO/PM

**Version** : 2.0.0
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

### 2.4 Comment fonctionnent réellement les IA génératives ?

#### 2.4.1 Le principe de base : prédiction de mots

Les IA génératives comme [ChatGPT](https://chat.openai.com), [Claude](https://claude.ai) ou [Gemini](https://gemini.google.com) fonctionnent sur un principe fondamental : **la prédiction du mot suivant le plus probable**.

**Analogie simple** : Imaginez que vous lisez "Il fait beau, je vais sortir mon..." - votre cerveau anticipe naturellement "parapluie" (s'il pleut) ou "chapeau" (s'il fait soleil). Les LLM font exactement cela, mais à une échelle massive.

**Processus en 3 étapes** :

1. **Tokenisation** : Le texte est découpé en "tokens" (morceaux de mots)
   - Exemple : "Product Owner" → ["Product", " Owner"] (2 tokens)
   - Un token ≈ 4 caractères en français, ≈ 0.75 mots

2. **Analyse du contexte** : Le modèle analyse tous les tokens précédents pour comprendre le contexte

3. **Prédiction** : Le modèle calcule les probabilités pour chaque mot possible et choisit le plus probable

**Exemple concret** :

```
Prompt : "En tant que Product Owner, je dois rédiger une..."
→ L'IA calcule : "user story" (85%), "documentation" (10%), "présentation" (3%)...
→ L'IA choisit : "user story"
```

#### 2.4.2 Pourquoi les IA sont mauvaises en calculs ?

**Raison fondamentale** : Les LLM ne calculent pas, ils **prédisent ce qui ressemble à un calcul**.

**Exemple révélateur** :

```
Question : "Combien font 127 × 83 ?"
Ce que fait l'IA :
1. Reconnaît le pattern "X × Y ?"
2. Cherche dans sa mémoire des exemples similaires
3. Prédit un nombre qui "semble correct"
4. Ne fait PAS réellement la multiplication
```

**Pourquoi cette limitation ?**

1. **Architecture non adaptée** :
   - Les LLM sont optimisés pour le langage, pas pour l'arithmétique
   - Ils n'ont pas de "calculatrice interne"
   - Chaque chiffre est traité comme un token de texte, pas comme un nombre

2. **Apprentissage par patterns** :
   - L'IA a vu "2 + 2 = 4" des milliers de fois → elle le "sait"
   - Elle n'a jamais vu "8347 × 9281 = ?" → elle devine

3. **Pas de vérification** :
   - Un humain peut vérifier son calcul
   - L'IA ne "sait" pas si sa réponse est mathématiquement correcte

**Implications pratiques pour les PO/PM** :

- ❌ Ne jamais faire confiance aux calculs directs (budgets, vélocité, ROI)
- ✅ Utiliser l'IA pour structurer les formules, puis calculer avec Excel/Google Sheets
- ✅ Demander à l'IA d'expliquer la méthode de calcul, pas de faire le calcul

**Exemple d'usage correct** :

```
❌ Mauvais : "Calcule le ROI de ce projet : investissement 150 000€, 
             gains annuels 45 000€ sur 5 ans"

✅ Bon : "Explique-moi la formule pour calculer le ROI d'un projet, 
         puis crée un tableau Excel avec les formules appropriées"
```

#### 2.4.3 Pourquoi les IA ne savent pas mesurer le temps ?

**Raison fondamentale** : Les LLM n'ont **pas de notion du temps présent** ni d'horloge interne.

**Ce que "sait" une IA** :

- Sa date de coupure d'entraînement (ex: "mes données vont jusqu'à avril 2024")
- Les dates mentionnées dans la conversation en cours
- Les patterns temporels dans son entraînement

**Ce qu'elle ne sait PAS** :

- Quelle heure il est maintenant
- Quel jour nous sommes
- Combien de temps s'est écoulé depuis le début de la conversation

**Exemple révélateur** :

```
Vous : "Quelle heure est-il ?"
IA : "Je n'ai pas accès à l'heure actuelle..."

Vous : "Nous sommes le 21 novembre 2025 à 14h30. 
       Dans combien de temps sera-t-il 16h ?"
IA : "Dans 1 heure et 30 minutes" ✓ (calcul basé sur l'info fournie)

[10 minutes plus tard]
Vous : "Quelle heure est-il maintenant ?"
IA : "Je ne peux pas savoir..." ✗ (pas d'horloge interne)
```

**Pourquoi cette limitation ?**

1. **Pas de capteur temporel** :
   - L'IA n'a pas accès à une horloge système
   - Elle ne "vit" pas dans le temps réel
   - Chaque réponse est indépendante temporellement

2. **Entraînement statique** :
   - Les données d'entraînement sont figées à une date précise
   - L'IA ne "sait" rien des événements postérieurs

3. **Pas de mémoire du temps écoulé** :
   - L'IA ne compte pas les secondes entre vos messages
   - Elle ne peut pas mesurer la durée d'une conversation

**Implications pratiques pour les PO/PM** :

- ❌ Ne pas demander "Combien de temps ai-je passé sur cette tâche ?"
- ❌ Ne pas demander "Quelle est la date limite dans 3 semaines ?"
- ✅ Fournir explicitement les dates et heures dans vos prompts
- ✅ Utiliser des outils dédiés (calendriers, time trackers) pour la gestion du temps

**Exemple d'usage correct** :

```
❌ Mauvais : "J'ai commencé ce projet il y a 2 semaines, 
             combien de temps reste-t-il si la deadline est dans 1 mois ?"

✅ Bon : "Le projet a démarré le 1er novembre 2025, 
         la deadline est le 1er décembre 2025. 
         Aujourd'hui nous sommes le 15 novembre. 
         Aide-moi à planifier les 16 jours restants."
```

#### 2.4.4 Solutions et outils complémentaires

**Pour les calculs** :

- **[Wolfram Alpha](https://www.wolframalpha.com)** : Moteur de calcul computationnel
- **Plugins ChatGPT** : Code Interpreter, Wolfram
- **Intégrations** : Connecter l'IA à des calculatrices via API

**Pour la gestion du temps** :

- **Outils avec accès temps réel** : Certaines IA peuvent maintenant accéder à l'heure via plugins
- **Intégrations calendrier** : [Zapier](https://zapier.com), [Make](https://www.make.com) pour connecter IA et calendriers
- **Assistants spécialisés** : [Motion](https://www.usemotion.com), [Reclaim](https://reclaim.ai) pour la planification temporelle

**Règle d'or** : Utilisez l'IA pour ce qu'elle fait bien (langage, structure, créativité) et des outils spécialisés pour le reste (calculs, temps, données en temps réel).

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

#### [Google Antigravity](https://antigravity.google), [GitHub Copilot](https://github.com/features/copilot) / [Cursor](https://cursor.sh)

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



---

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.
