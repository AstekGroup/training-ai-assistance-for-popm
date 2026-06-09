# Grilles d'évaluation des TP — Formation `training-ai-assistance-for-popm`

Ce document fournit au formateur des grilles d'évaluation standardisées pour objectiver la mise en pratique, par chaque apprenant, des points abordés dans les quatre modules de la formation.

## But du document

- Évaluer la maîtrise pratique des concepts et des outils vus en cours à travers les TP réalisés.
- Garder une trace écrite et objective des acquis / non acquis par module, **sur la base exclusive des savoir-faire démontrés**.
- Identifier les axes de progression individuels en fin de formation.

> [!IMPORTANT]
> **Évaluation exclusive des savoir-faire :**
> Conformément aux objectifs de la formation, cette grille mesure uniquement la capacité à utiliser les outils (IA, No-Code/Low-Code) de manière opérationnelle. Les connaissances théoriques ne font l'objet d'aucune évaluation dans ce document.

## Mode d'emploi

- Une grille par module, à remplir par le formateur à l'issue du ou des TP associés.
- Cocher la case `Acquis` lorsque le critère est validé.
- Utiliser la colonne `Commentaire formateur` pour préciser les éléments observés (points forts, écarts, conseils).
- Conclure chaque module par un **niveau global** (Acquis / Non acquis) et un commentaire de synthèse.
- Le tableau de synthèse final permet une vue d'ensemble sur les 4 modules.

## Légende

- `[ ]` — Non acquis
- `[x]` — Acquis

---

## Identification de l'apprenant

| Champ                    | Valeur |
| ------------------------ | ------ |
| Nom / Prénom             |        |
| Société / Équipe         |        |
| Date d'évaluation        |        |
| Formateur                |        |
| Outils IA utilisés (M1, M2, M4)  |   M365 Copilot [ ] / ChatGPT [ ] / Claude [ ] / Gemini [ ] / autre [ ] |
| Outil d'automatisation choisi (M3, M4) | Power Automate [ ] / Zapier [ ] / Gumloop [ ] / N8N [ ] |

---

## Module 1 — Acculturation à l'IA pour PO/PM

**TP évalué** : Exercice 1 — Découverte du Prompt Engineering pour PO/PM (`EXERCICE_1_Prompt-Engineering.md`).

**Savoir-faire évalués** :
- Structuration de prompts métier.
- Application de techniques d'apprentissage par l'exemple (Few-Shot).
- Itération et affinement de contenu produit.

| Critère | Acquis | Commentaire formateur |
| :--- | :---: | :--- |
| **Méthode ACTF** : Rédige un prompt structuré complet (Acteur, Contexte, Tâche, Format) pour obtenir une User Story détaillée et formatée du premier coup. | [ ] | |
| **Few-Shot Learning** : Intègre des exemples de référence (exemples de Release Notes) dans le prompt pour forcer l'IA à respecter un format et un ton spécifiques. | [ ] | |
| **Itération et affinement** : Guide l'IA par des prompts d'itération successifs pour enrichir le contenu de base (ajout de critères Gherkin, notes techniques et métriques). | [ ] | |
| **Validation critique** : Identifie les anomalies ou approximations dans le texte produit par l'IA et apporte les corrections nécessaires. | [ ] | |

**Niveau global du module 1** : `[ ]` Acquis  `[ ]` Non acquis

**Commentaire de synthèse** :

---

## Module 2 — Qualité, coûts et délais assistés par l'IA

**TP évalué** : Exercice 2 — Maîtriser le triptyque Qualité / Coûts / Délais avec l'IA (`EXERCICE_2_Triptyque-Qualite-Couts-Delais.md`).

**Savoir-faire évalués** :
- Amélioration de spécifications.
- Estimation basée sur des données historiques.
- Analyse prédictive des risques de retard.

| Critère | Acquis | Commentaire formateur |
| :--- | :---: | :--- |
| **Revue de spécifications** : Utilise l'IA pour analyser une expression de besoin floue, identifier ses ambiguïtés et générer des questions de clarification pertinentes. | [ ] | |
| **Génération Gherkin** : Fait générer par l'IA des critères d'acceptation complets, mesurables et testables (Given/When/Then) couvrant les cas nominaux, d'erreur, d'UX et de sécurité. | [ ] | |
| **Estimation assistée** : Soumet un historique de projet à l'IA pour détecter des patterns de dérivation et générer une estimation de coûts réaliste (avec 3 scénarios et calcul d'impact financier). | [ ] | |
| **Analyse prédictive de délais** : Fait calculer la vélocité et projeter le reste à faire par l'IA à partir de métriques de sprint réelles pour anticiper les retards. | [ ] | |
| **Mitigation des risques** : Formalise un plan d'actions correctives concret (arbitrage de scope, ressources) à partir des risques identifiés par l'IA. | [ ] | |

**Niveau global du module 2** : `[ ]` Acquis  `[ ]` Non acquis

**Commentaire de synthèse** :

---

## Module 3 — Automatisation et structuration des projets avec l'IA

**TP évalué** : Exercice 3 — Automatiser vos tâches répétitives avec l'IA (`EXERCICE_3_Automatisation-Workflows.md`).

**Savoir-faire évalués** :
- Création de prompts d'automatisation réutilisables.
- Modélisation et implémentation de workflows No-Code/Low-Code.
- Intégration d'IA au sein de flux automatisés.

| Critère | Acquis | Commentaire formateur |
| :--- | :---: | :--- |
| **Template de prompt** : Conçoit et documente un prompt réutilisable avec variables pour automatiser une génération récurrente de contenu (ex: Release Notes hebdomadaires). | [ ] | |
| **Design de workflow** : Cartographie logiquement un flux d'automatisation en identifiant clairement les déclencheurs (triggers), les filtres et les actions associées. | [ ] | |
| **Intégration d'outils** : Configure et connecte avec succès des outils tiers (ex: Google Forms et Gmail/Jira/Notion) via Zapier, Gumloop ou N8N. | [ ] | |
| **Routage intelligent par l'IA** : Intègre un nœud d'IA (LLM/Agent) dans un workflow (ex: N8N) pour classifier un texte entrant (retour client) et orienter dynamiquement les actions de sortie. | [ ] | |
| **Test et exécution** : Exécute des tests de bout en bout avec des jeux de données de test, analyse les journaux d'exécution et résout les anomalies constatées. | [ ] | |

**Niveau global du module 3** : `[ ]` Acquis  `[ ]` Non acquis

**Commentaire de synthèse** :

---

## Module 4 — Prise de décisions, réunions et communication assistées par IA

**TP évalué** : Exercice 4 — Décisions, réunions et comptes-rendus avec l'IA (`EXERCICE_4_Frameworks-Decision.md`).

**Savoir-faire évalués** :
- Priorisation de backlog et analyse stratégique.
- Exploitation opérationnelle de transcriptions de réunions.
- Déclinaison de contenu multi-canal à partir de médias.

| Critère | Acquis | Commentaire formateur |
| :--- | :---: | :--- |
| **Priorisation RICE** : Structure un prompt d'IA pour calculer, classer et justifier objectivement les scores RICE (Reach, Impact, Confidence, Effort) de différentes fonctionnalités. | [ ] | |
| **Analyse SWOT** : Fait générer par l'IA une analyse stratégique SWOT 360° pour une décision produit (forces, faiblesses, opportunités, menaces), avec plans d'action et alternatives. | [ ] | |
| **Extraction d'action items** : Exploite une transcription brute de réunion Teams via l'IA pour extraire sans omission un plan d'actions (actions, responsables, échéances). | [ ] | |
| **Collaboration synchronisée** : Intègre les résultats d'une réunion dans un espace collaboratif vivant (ex: Microsoft Loop) partagé avec l'équipe pour assurer le suivi. | [ ] | |
| **Formatage multi-canal (SRT/Posts/Blog)** : Transforme une transcription vidéo (via Gladia.io) en sous-titres SRT valides, en posts de communication (LinkedIn et Viva Engage) et en article de blog structuré. | [ ] | |

**Niveau global du module 4** : `[ ]` Acquis  `[ ]` Non acquis

**Commentaire de synthèse** :

---

## Synthèse finale

| Module | Intitulé | Niveau global (Acquis / Non acquis) | Observation clé |
| :---: | :--- | :---: | :--- |
| **1** | Acculturation à l'IA pour PO/PM (Prompt Engineering) | | |
| **2** | Qualité, coûts et délais assistés par l'IA | | |
| **3** | Automatisation et structuration des projets avec l'IA | | |
| **4** | Prise de décisions, réunions et communication assistées par IA | | |

### Appréciation globale du formateur

### Points forts identifiés
- 
- 
- 

### Axes de progression recommandés
- 
- 
- 

### Suite recommandée

---
*Document d'évaluation — Formation `training-ai-assistance-for-popm`.*
