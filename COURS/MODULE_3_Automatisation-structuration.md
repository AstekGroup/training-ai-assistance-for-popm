# Module 3 : Automatisation et structuration des projets avec l'IA

**Version** : 2.0.1
**Date de dernière mise à jour** : 2026-05-26
**Auteur** : Bruno Celle [bruno.celle@astek.net](mailto:bruno.celle@astek.net)

---

## Objectifs d'apprentissage

À l'issue de ce module, les participants seront capables de :

1. **Créer des templates de prompts réutilisables** pour standardiser la production de contenu.
2. **Concevoir des workflows automatisés** (Zapier, GumLoop) pour connecter les outils.
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

---

## 2. Niveau 1 : Prompts Réutilisables et Assistants (Custom GPTs)

Pourquoi réécrire le même contexte à chaque fois ? Créez des spécialistes.

### 2.1 Qu'est-ce qu'un Custom GPT ?

Une version de ChatGPT pré-configurée avec :

- **Instructions spécifiques** (Persona, Ton, Format).
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

---

## 3. Niveau 2 : Automatisation de Workflows (Rovo, Zapier, Make, GumLoop & N8N)

Connecter les outils entre eux pour que l'information circule sans copier-coller.

### 3.1 Le paysage des outils

Il existe aujourd'hui 3 acteurs majeurs pour automatiser vos tâches, du plus simple au plus puissant :


| Outil       | Description                                                                                                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rovo**    | **"L'automatisation par l'IA"**. Une solution nouvelle génération pour la suite Atlassian où l'IA est au cœur du flux.                                                                                                                                                                                                      |
| **Zapier**  | **"Si ceci, alors cela"**. Très linéaire et facile d'accès. Idéal pour débuter.                                                                                                                                                                                                                                             |
| **Make**    | **"Programmation visuelle"**. Permet des scénarios complexes avec des boucles et des conditions.                                                                                                                                                                                                                            |
| **GumLoop** | **"L'automatisation par l'IA"**. Une solution nouvelle génération où l'IA est au cœur du flux.                                                                                                                                                                                                                              |
| **N8N**     | **plateforme d’automatisation low-code** permettant de connecter des outils, APIs et services pour créer des workflows métier sans développer une application complète.  <br>Un levier rapide pour prototyper, automatiser des processus, orchestrer des données et réduire les tâches manuelles entre équipes et systèmes. |


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

---

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.