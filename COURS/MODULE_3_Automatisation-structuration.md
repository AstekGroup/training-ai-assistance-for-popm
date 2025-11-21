# Module 3 : Automatisation et structuration des projets avec l'IA

**Version** : 2.0.0
**Date de dernière mise à jour** : 2025-11-21
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Objectifs d'apprentissage

À l'issue de ce module, les participants seront capables de :

1.  **Créer des templates de prompts réutilisables** pour standardiser la production de contenu.
2.  **Concevoir des workflows automatisés** (Zapier, GumLoop) pour connecter les outils.
3.  **Industrialiser l'analyse de la User Research** pour traiter des volumes massifs de feedback.

---

## 1. Introduction : Du "Bricolage" au "Product Operating System"

Ne plus voir l'IA comme un gadget, mais comme le système d'exploitation de votre équipe produit.

### 1.1 Les 3 niveaux d'automatisation

1.  **Niveau Personnel (IA Assistante)** : Custom GPTs, Prompts réutilisables.
    *   *Gain* : Productivité individuelle (+30%).
2.  **Niveau Équipe (Workflow Automation)** : Zapier, Make, Notifications.
    *   *Gain* : Fluidité des processus, moins d'erreurs.
3.  **Niveau Système (Product Intelligence)** : Analyse auto de feedback, génération de roadmap dynamique.
    *   *Gain* : Capacité de scale, insights stratégiques.

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
*   **Rôle** : Transforme une User Story fonctionnelle en spécifications techniques détaillées.
*   **Knowledge** : Documentation d'architecture, API Swagger, Guidelines de code.
*   **Instruction** : "Tu es Tech Lead. À partir de cette US, liste les endpoints à créer, le schéma de BDD et les cas d'erreurs."

#### B. Le "Guardian of the Backlog"
*   **Rôle** : Vérifie la qualité des tickets avant le sprint planning.
*   **Knowledge** : Definition of Ready (DoR), INVEST criteria.
*   **Instruction** : "Analyse ce ticket. Est-il INVEST ? Manque-t-il des critères d'acceptation ? Note-le sur 10."

#### C. Le "User Voice Analyst"
*   **Rôle** : Expert de vos personas.
*   **Knowledge** : Interviews utilisateurs, Personas PDF, Résultats de sondages.
*   **Instruction** : "Je suis PO. Comment notre persona 'Marie la comptable' réagirait à cette nouvelle feature ?"

---

## 3. Niveau 2 : Automatisation de Workflows (Zapier, Make & GumLoop)

Connecter les outils entre eux pour que l'information circule sans copier-coller.

### 3.1 Le paysage des outils

Il existe aujourd'hui 3 acteurs majeurs pour automatiser vos tâches, du plus simple au plus puissant :

| Outil | Description |
| :--- | :--- |
| **Zapier** | **"Si ceci, alors cela"**. Très linéaire et facile d'accès. Idéal pour débuter. |
| **Make** | **"Programmation visuelle"**. Permet des scénarios complexes avec des boucles et des conditions. |
| **GumLoop** | **"L'automatisation par l'IA"**. Une solution nouvelle génération où l'IA est au cœur du flux. |

---

## 4. Niveau 3 : Industrialiser la User Research

Comment traiter 500 feedbacks par semaine ?

### 4.1 Le Pipeline de Feedback Automatisé

**Source** : Typeform, Intercom, App Store Reviews, Emails support.

**Workflow (Zapier)** :
1.  **Trigger** : Nouveau feedback reçu.
2.  **Analyse Sémantique (OpenAI)** :
    *   *Sentiment* : Positif/Négatif/Neutre.
    *   *Tagging* : Bug, Feature Request, UX, Pricing.
    *   *Feature liée* : "Recherche", "Login", "Paiement".
3.  **Routing** :
    *   Si "Bug Critique" → Alerte Slack #Devs.
    *   Si "Feature Request" → Ajout dans Airtable "Idées".
4.  **Stockage** : Tout va dans une base de données "Insights" (Airtable/Notion).

### 4.2 Interroger la base de connaissance

Une fois les données dans Airtable/Notion, utilisez l'IA pour demander :
*"Quels sont les 5 problèmes les plus fréquents sur le module Paiement le mois dernier ?"*
