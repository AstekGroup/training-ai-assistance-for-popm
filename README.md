# Formation : Outils IA pour Product Owners et Project Managers

> Cette formation est conçue pour permettre aux Product Owners et Project Managers de maîtriser les outils d'intelligence artificielle pertinents pour leurs missions quotidiennes.

---


| ℹ️ Informations    | Détails                                                                   |
| ------------------ | ------------------------------------------------------------------------- |
| **📅 Durée**       | 2 jours                                                                   |
| **👥 Public**      | Product Owners, Project Managers, Chefs de projet produit                 |
| **💪 Pré-requis**  | Aucun pré-requis technique spécifique                                     |
| **👤 Contact**     | Philippe Pary ([philippe.pary@astek.net](mailto:philippe.pary@astek.net)) |
| **🔄 Mise à jour** | 26 mai 2026                                                               |


---

## 🎯 Objectifs pédagogiques

À l'issue de cette formation, les participants seront capables de :

1. ✅ Appliquer les concepts fondamentaux de l'IA  au métier de PO/PM
2. ✅ Utiliser l'IA pour améliorer la qualité des livrables (user stories, spécifications, documentation)
3. ✅ Estimer les coûts et délais grâce à l'analyse de données historiques
4. ✅ Automatiser les processus répétitifs pour gagner du temps
5. ✅ Prendre des décisions éclairées assistées par l'IA
6. ✅ Optimiser les réunions et la documentation avec des outils IA

---

## 🛠️ Outils couverts

**Assistants conversationnels** : [ChatGPT](https://chatgpt.com), [Claude](https://claude.ai), [Gemini](https://gemini.google.com), [Perplexity](https://perplexity.ai)

**Suite bureautique et collaboration** : [Microsoft Copilot](https://www.microsoft.com/microsoft-copilot) (M365), [Notion AI](https://www.notion.so/product/ai)

**Gestion de projet et produit** : [Atlassian Intelligence](https://www.atlassian.com/intelligence) (Jira, Confluence), [Monday.com](https://monday.com), [Miro AI](https://miro.com/ai)

**Automatisation** : [Zapier](https://zapier.com), [Make](https://www.make.com), [Power Automate](https://powerautomate.microsoft.com)

**Réunions et documentation** : [Otter.ai](https://otter.ai), [Fireflies](https://fireflies.ai), [Microsoft Teams](https://www.microsoft.com/microsoft-teams) (transcription Copilot)

**Analyse et reporting** : [Power BI](https://powerbi.microsoft.com), [Tableau](https://www.tableau.com)

**Optionnel (contexte technique léger)** : [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.com)

---

## 📚 Structure de la formation

### Module 1 : Acculturation à l'IA pour PO/PM

**Contenu** :

- Concepts fondamentaux de l'IA (générative, analytique, prédictive)
- Panorama des outils IA pour PO/PM
- Impact organisationnel de l'intégration de l'IA
- Principes de base de l'ingénierie de prompt

**Livrables** :

- Identification de cas d'usage IA pertinents
- Maîtrise des techniques de prompt engineering de base

### Module 2 : Qualité, coûts et délais assistés par l'IA

**Contenu** :

- Amélioration de la qualité des user stories, spécifications et documentation
- Optimisation des estimations avec analyse de données historiques
- Prédiction de délais avec IA prédictive, vélocité et risques
- Business cases assistés par IA
- Documentation projet assistée par IA

**Livrables** :

- User stories de qualité générées avec IA
- Estimations assistées par IA et analyse de risques
- Documentation projet structurée avec assistance IA

### Module 3 : Automatisation et structuration des projets avec l'IA

**Contenu** :

- Cartographie des processus automatisables
- Outils d'automatisation (Zapier, Make, Power Automate)
- Conception de workflows automatisés
- Structuration de l'information avec l'IA
- Automatisation de reporting et tableaux de bord

**Livrables** :

- Workflow automatisé fonctionnel
- Processus documenté et optimisé

### Module 4 : Prise de décisions, réunions et communication assistées par IA

**Contenu** :

- Analyse de données et identification d'insights
- Frameworks de décision assistés par IA (RICE, SWOT)
- Transcription et synthèse de réunions, extraction d'action items
- Comptes-rendus efficaces et optimisation du temps de réunion
- Communication de décisions complexes

**Livrables** :

- Analyse de décision stratégique complète (RICE / SWOT)
- Compte-rendu de réunion ou flux transcription → action items

---

## 🔗 Correspondance module ↔ exercice

| Module | Fichier cours | Exercice associé |
| :--- | :--- | :--- |
| 1 — Acculturation | `COURS/MODULE_1_Acculturation.md` | `EXERCICES/EXERCICE_1_Prompt-Engineering.md` |
| 2 — Qualité, coûts, délais | `COURS/MODULE_2_Qualite-couts-delais.md` | `EXERCICES/EXERCICE_2_Triptyque-Qualite-Couts-Delais.md` |
| 3 — Automatisation | `COURS/MODULE_3_Automatisation-structuration.md` | `EXERCICES/EXERCICE_3_Automatisation-Workflows.md` |
| 4 — Décisions et réunions | `COURS/MODULE_4_Prise-de-decisions.md` | `EXERCICES/EXERCICE_4_Frameworks-Decision.md` |

---

## 📎 Annexes

Ressources complémentaires dans [`ANNEXES/`](ANNEXES/) :

- **Référence** : [glossaire](ANNEXES/glossaire.md), [ressources externes](ANNEXES/ressources-externes.md), [syllabus](ANNEXES/syllabus-training-ai-assistance-for-popm.md)
- **Supports** : [templates, checklists et fiches](ANNEXES/supports/) (user stories, estimation, RICE, comptes-rendus, etc.) — index dans [ANNEXES/README.md](ANNEXES/README.md)

---

## 📁 Structure du dépôt

```
training-ai-assistance-for-popm/
├── COURS/                          # 4 modules (2 jours)
├── EXERCICES/                      # TP génériques (ChatGPT, Claude, etc.)
├── ANNEXES/                        # Glossaire, ressources, syllabus, supports/
│   ├── README.md
│   ├── glossaire.md
│   ├── ressources-externes.md
│   ├── syllabus-training-ai-assistance-for-popm.md (+ .en.md)
│   └── supports/                   # Templates, checklists, fiches
├── .agent/skills/pdf-generator/    # Export Markdown → PDF (charte Astek)
├── cours-viewer.html               # Navigation modules (généré)
├── AGENTS.md
├── CHANGELOG.md
└── README.md
```

---

## 📝 Licence et utilisation

Ce contenu de formation est destiné à un usage interne et pour les clients d'Astek.