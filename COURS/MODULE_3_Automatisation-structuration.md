# Module 3 : Automatisation et structuration des projets avec l'IA

**Version** : 2.0.2
**Date de dernière mise à jour** : 2026-05-26
**Auteur** : Bruno Celle [bruno.celle@astek.net](mailto:bruno.celle@astek.net)

---

## Objectifs d'apprentissage

À l'issue de ce module, les participants seront capables de :

1. **Créer templates de prompts réutilisables** pour standardiser la production de contenu.
2. **Concevoir des workflows automatisés** (Zapier, Make, N8N, Gumloop) pour connecter les outils.
3. **Industrialiser l'analyse de la User Research** pour traiter des volumes massifs de feedback.

---

## 1. Introduction : Du "Bricolage" au "Product Operating System"

Ne plus voir l'IA comme un gadget, mais comme le système d'exploitation de votre équipe produit.

### 1.1 Les 3 niveaux d'automatisation

1. **Niveau Personnel (IA Assistante)** : Custom GPTs, Prompts réutilisables.
  - *Gain* : Productivité individuelle (+30%).
2. **Niveau Équipe (Workflow Automation)** : Zapier, Make, Notifications.
  - *Gain* : Fluidité des processus, moins d'erreurs.
3. **Niveau Système (Product Intelligence)** : Analyse auto de feedback, génération de roadmap dynamique.
  - *Gain* : Capacité de scale, insights stratégiques.

![Timeline Agentique](../res/AgenticTimeLine.jpg)
*Figure 3.1 : La trajectoire d'adoption des agents IA au sein des équipes produit*


---

## 2. Niveau 1 : Prompts Réutilisables et Assistants (Custom GPTs)

Pourquoi réécrire le même contexte à chaque fois ? Créez des spécialistes.

### 2.1 Qu'est-ce qu'un Custom GPT / Mistral Agent ?

Une version de ChatGPT ou de Vibe de Mistral (notre préconisation par rapport à ChatGPT) pré-configurée avec :

- **Instructions spécifiques** (Persona, Ton, Format).
	  ASPeCCTf :Action, Steps, Persona,(Examples), Context, Constraints, Template, (Finally)
- **Connaissance** (Documents uploadés : PDF, Excel, Specs).
- **Actions** (Capacité à appeler des API externes - *Avancé*).


### 2.2 Cas d'usage pour PO/PM

#### A. Le "Tech Spec Writer"

- **Rôle** : Transforme une User Story fonctionnelle en spécifications techniques détaillées.
- **Knowledge** : Documentation d'architecture, API Swagger, Guidelines de code.
- **Instruction** : "Tu es Tech Lead. À partir de cette US, liste les endpoints à créer, le schéma de BDD et les cas d'erreurs."

#### B. Le "Guardian of the Backlog"

- **Rôle** : Vérifie la qualité des tickets avant le sprint planning.
- **Knowledge** : Definition of Ready (DoR), INVEST criteria.
- **Instruction** : "Analyse ce ticket. Est-il INVEST ? Manque-t-il des critères d'acceptation ? Note-le sur 10."

#### C. Le "User Voice Analyst"

- **Rôle** : Expert de vos personas.
- **Knowledge** : Interviews utilisateurs, Personas PDF, Résultats de sondages.
- **Instruction** : "Je suis PO. Comment notre persona 'Marie la comptable' réagirait à cette nouvelle feature ?"

----------------------- ✄ TP 1 (Release Notes) ✄ -----------------------

---

## 3. Niveau 2 : Automatisation de Workflows (Rovo, Zapier, Make, Gumloop & N8N)

Connecter les outils entre eux pour que l'information circule sans copier-coller.

### 3.1 Le paysage des outils

Il existe aujourd'hui plusieurs acteurs majeurs pour automatiser vos tâches, du plus simple au plus puissant :

| **Outil**       | **Description**                                                                                                                                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rovo**    | **"L'automatisation par l'IA"**. Une solution nouvelle génération pour la suite Atlassian (Jira, Confluence...) où l'IA est au cœur du flux.                                                                                                                                           |
| **Zapier**  | **"Si ceci, alors cela"**. Très linéaire et facile d'accès. Idéal pour débuter.                                                                                                                                                                                                        |
| **Make**    | **"Programmation visuelle"**. Permet des scénarios complexes avec des boucles et des conditions.                                                                                                                                                                                       |
| **Gumloop** | **"L'automatisation par l'IA"**. Une solution nouvelle génération orientée vers le traitement des données et des tâches complexes par LLM.                                                                                                                                             |
| **N8N**     | **L'automatisation souveraine avec IA native**. Permet de concevoir visuellement des agents IA complexes (avec mémoire, RAG et outils) et de les connecter à vos applications métiers. Idéal pour des flux sécurisés (RGPD) et extensibles grâce à son modèle low-code et open-source. |
| **Power Automate** | **L'automatisation Microsoft**. Idéal pour les environnements Microsoft 365. |

----------------------- ✄ TP 2 (Zapier / Gumloop) ✄ -----------------------

---


### 3.2 Le protocole MCP (Model Context Protocol)

**Qu'est-ce que le MCP ?**
Le **Model Context Protocol (MCP)** est un standard ouvert permettant aux modèles d'IA de se connecter de manière sécurisée et uniforme à des sources de données locales ou distantes, et à des outils externes.

Il est utilisé dans le monde du développement logiciel, mais il peut aussi être utilisé dans le monde du Product Management.

Il permet :
- l'accès à des données (comme une API)
- l'accès à des outils (calculateur d'itinéraire par exemple)
- l'accès à des prompts pré-définis

Bien utilisé, MCP facilite l'accès aux données et les opérations métiers usuelles (via les outils). 

Les prompts pré-définis permettent de mutualiser et harmoniser les meilleurs pratiques sur les tâches récurrentes. Par exemple la rédaction de Users Stories.

---

## 4. Niveau 3 : Industrialiser la User Research

Comment traiter 500 feedbacks par semaine ?

### 4.1 Le Pipeline de Feedback Automatisé

**Source** : Typeform, Intercom, App Store Reviews, Emails support.

**Workflow classique** :

1. **Trigger** : Nouveau feedback reçu.
2. **Analyse Sémantique (OpenAI)** :
  - *Sentiment* : Positif/Négatif/Neutre.
  - *Tagging* : Bug, Feature Request, UX, Pricing.
  - *Feature liée* : "Recherche", "Login", "Paiement".
3. **Routing** :
  - Si "Bug Critique" → Alerte Slack #Devs.
  - Si "Feature Request" → Ajout dans Airtable "Idées".
4. **Stockage** : Tout va dans une base de données "Insights" ou des outils dédiés comme [Productboard AI](https://www.productboard.com) ou [Dovetail AI](https://dovetail.com/ai/).

### 4.2 Interroger la base de connaissance

Une fois les données dans la base, utilisez l'IA pour demander :
*"Quels sont les 5 problèmes les plus fréquents sur le module Paiement le mois dernier ?"*

*(Note: Pour les documentations techniques complexes générées automatiquement, des outils comme [Kiro Code2Doc](https://kiro.dev) facilitent l'industrialisation).*

----------------------- ✄ TP 3 (N8N & Feedback) ✄ -----------------------

---

> [!CAUTION]
> **Rappel Gouvernance Astek** : Il ne faut jamais utiliser d'outils IA sans accord explicite et écrit des responsables du projet sur lequel vous travaillez.

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.
