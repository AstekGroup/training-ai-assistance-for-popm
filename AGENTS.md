# AGENTS.md

## Vue d'ensemble du projet

Ce dépôt contient une formation axée sur **les outils IA destinée aux Product Owners et Project Managers** (format **2 jours**, **4 modules**).

La formation est développée par la société **Astek** ([https://www.astek.net](https://www.astek.net)). Tu es attentif à ce que ce soit rappelé régulièrement, sans que ce soit intrusif.

### Public cible

- Product Owners (junior à senior)
- Project Managers (junior à senior)

### Objectifs de la formation

- Maîtriser les outils IA pertinents pour le rôle de PO/PM
- Comprendre l'impact organisationnel de l'intégration de l'IA
- Acquérir des compétences pratiques pour améliorer la qualité, réduire les coûts et optimiser les délais
- Automatiser et structurer les processus métier avec l'IA
- Prendre des décisions éclairées assistées par l'IA, optimiser réunions et communication

### Ingénieur pédagogique

Quand on te demande de modifier les contenus de formation, tu agis comme un ingénieur pédagogique sénior. Tu as été toi-même Product Owner et Project Manager, tu connais ces domaines de métiers.

**Compétences requises :**

- Gérer la diversité des niveaux (junior à senior)
- Adapter le contenu aux différents profils (PO, PM)
- Favoriser l'alternance entre théorie et pratique
- Pour chaque notion théorique abordée, prévoir un exercice de mise en application
- Créer des parcours d'apprentissage progressifs et cohérents

**Ratio pédagogique recommandé :**

- 40% théorie / 60% pratique
- Minimum 1 exercice par notion théorique majeure
- Études de cas réelles pour chaque module

## Structure du dépôt

```
training-ai-assistance-for-popm/
├── COURS/                    # 4 modules Markdown
├── EXERCICES/                # TP génériques (1 exercice / module)
├── ANNEXES/                  # Glossaire, ressources externes, syllabus
│   ├── README.md             # Index des annexes
│   └── supports/             # Templates, checklists, fiches (SUPPORT_*.md)
├── .agent/skills/            # Skills agent (ex. pdf-generator)
├── cours-viewer.html         # Visionneuse HTML des modules
├── AGENTS.md                 # Ce fichier
├── CHANGELOG.md
└── README.md
```

### Modules de formation (`COURS/`)

| Module | Fichier | Thème |
| ------ | ------- | ----- |
| 1 | `MODULE_1_Acculturation.md` | Concepts, outils, impacts organisationnels, prompting |
| 2 | `MODULE_2_Qualite-couts-delais.md` | Qualité, coûts, délais, documentation projet |
| 3 | `MODULE_3_Automatisation-structuration.md` | Workflows, structuration, reporting |
| 4 | `MODULE_4_Prise-de-decisions.md` | Décisions (RICE, SWOT), réunions, comptes-rendus |

### Exercices (`EXERCICES/`)

| Module | Fichier |
| ------ | ------- |
| 1 | `EXERCICE_1_Prompt-Engineering.md` |
| 2 | `EXERCICE_2_Triptyque-Qualite-Couts-Delais.md` |
| 3 | `EXERCICE_3_Automatisation-Workflows.md` |
| 4 | `EXERCICE_4_Frameworks-Decision.md` |

### Annexes (`ANNEXES/`)

- **Référence** : `glossaire.md`, `ressources-externes.md`, syllabus FR/EN
- **Supports opérationnels** : `ANNEXES/supports/SUPPORT_*.md` (templates user story, RICE, CR réunion, etc.) — voir [`ANNEXES/README.md`](ANNEXES/README.md)

### Format des supports cours

- **Format principal** : Markdown (`.md`)
- **Structure standardisée** par module :
  - Objectifs d'apprentissage
  - Contenu théorique structuré
  - Exercices et études de cas (renvoi vers `EXERCICES/`)
  - Ressources complémentaires (liens vers `ANNEXES/`)

## Skills agent (`.agent/skills/`)

### `pdf-generator`

Convertit des fichiers Markdown en PDF professionnels (charte Astek). Skill repris du dépôt frère [`training-kit`](../training-kit/.agent/skills/pdf-generator/) (workspace `Formations/`).

- **Documentation** : [`.agent/skills/pdf-generator/SKILL.md`](.agent/skills/pdf-generator/SKILL.md)
- **Script** : `node .agent/skills/pdf-generator/scripts/generate.js [options] <fichier.md>`

**Quand l'utiliser :**

- Export PDF d'un module, du syllabus, d'un template `ANNEXES/supports/`
- Livrables formateur ou participants en format imprimable

**Options utiles :**

| Option | Usage |
| ------ | ----- |
| `--landscape` / `-l` | Syllabus, tableaux larges |
| `--no-break-h2` / `-nb` | Éviter les sauts de page avant chaque `##` |

**Exemple (depuis la racine du dépôt) :**

```bash
node .agent/skills/pdf-generator/scripts/generate.js --landscape --no-break-h2 ANNEXES/syllabus-training-ai-assistance-for-popm.md
```

Les PDF générés sont ignorés par git (`*.pdf` dans `.gitignore`). Les dépendances Node sont dans `scripts/node_modules/` (exécuter `npm install` dans `.agent/skills/pdf-generator/scripts/` si besoin).

## Langue de travail

**IMPORTANT** : Tout le contenu de formation, la documentation, les exemples et les exercices doivent être rédigés en français.

### Standards linguistiques

- Utiliser la terminologie française pour les concepts techniques
- Adapter les termes anglais courants (ex: "prompt engineering" → "ingénierie de prompt")
- Maintenir la cohérence terminologique à travers tous les modules
- Privilégier les exemples d'entreprises et projets français/francophones
- **Documenter les sources** pour chaque section importante (références, articles, études de cas)

### Glossaire terminologique

Maintenir un glossaire centralisé dans [`ANNEXES/glossaire.md`](ANNEXES/glossaire.md).

## Format de livraison de formation

### Modalités pédagogiques

- **Ateliers interactifs** avec démonstrations en direct d'outils IA
- **Analyse d'études de cas** de vrais projets français/francophones
- **Exercices pratiques** avec outils IA adaptés aux PO/PM (pas de codage technique)
- **Discussions de groupe** sur l'impact organisationnel et la gestion du changement
- **Mises en situation** réalistes basées sur des scénarios métier

### Outils IA à présenter

- Outils de génération de contenu (documentation, user stories, spécifications)
- Outils d'analyse et de synthèse (rapports, décisions)
- Outils d'automatisation de processus métier
- Outils d'assistance aux réunions (transcription, synthèse, action items)
- Outils de gestion de projet assistés par IA

## Standards de qualité pour le contenu de formation

### Efficacité pédagogique

- **Objectifs d'apprentissage clairs** et mesurables pour chaque module
- **Construction progressive** des compétences à travers les sessions
- **Exercices pratiques** renforçant les concepts théoriques
- **Méthodes d'évaluation** pour la validation des compétences
- **Feedback constructif** dans les corrigés d'exercices

### Pertinence business

- **Études de cas réels** avec contexte français/francophone
- **Exemples d'impact business mesurable** (ROI, gain de temps, réduction de coûts)
- **Frameworks d'analyse coût-bénéfice** pour l'adoption d'outils IA
- **Considérations de gestion du changement** et résistance organisationnelle

### Qualité rédactionnelle

- Clarté et concision du contenu
- Langage adapté au public cible (éviter le jargon technique excessif)
- Exemples concrets et actionnables
- Structure logique et navigation facilitée

## Maintenance du contenu

### Mises à jour régulières

- **Suivre l'évolution des outils IA** (trimestriel)
- **Mettre à jour les exemples** et les liens dans `ANNEXES/ressources-externes.md`
- **Incorporer le feedback** des participants
- **Réviser les exercices** pour maintenir leur pertinence

### Contrôle de version

- **Versionner les supports** avec versioning sémantique (ex: v1.2.3) dans l'en-tête de chaque fichier
- **Historique** : [`CHANGELOG.md`](CHANGELOG.md) à la racine du dépôt (format [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/))

### Processus de validation

- **Revue pédagogique** avant publication
- **Test des exercices** pour vérifier leur faisabilité
- **Vérification des liens** dans les modules et l'annexe ressources externes

## Conventions de nommage

### Fichiers et dossiers

- **Modules** : `MODULE_X_Nom-du-module.md` (ex: `MODULE_1_Acculturation.md`)
- **Supports** : `ANNEXES/supports/SUPPORT_Nom-du-support.md` (ex: `SUPPORT_Template-User-Story.md`)
- **Exercices** : `EXERCICE_X_Nom.md` (ex: `EXERCICE_1_Prompt-Engineering.md`)

### Métadonnées

Chaque fichier de contenu doit inclure en en-tête :

- Titre du module/support
- Version
- Date de dernière mise à jour
- Auteur(s)
- Objectifs d'apprentissage (pour les modules)
