# Changelog — Formation Outils IA pour PO/PM

Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).

## [Unreleased]

### Ajouté

- Skill agent `pdf-generator` (`.agent/skills/pdf-generator/`) repris de `training-kit` pour exporter modules, syllabus et supports en PDF Astek.

### Supprimé

- Dossier `EXERCICES-Rovo/` (variante Atlassian retirée du dépôt ; Rovo reste documenté dans les cours et l'annexe).

### Modifié

- `AGENTS.md` : structure du dépôt à jour, documentation du skill PDF, chemins `ANNEXES/supports/`.
- README FR/EN et glossaire : retraits des renvois à `EXERCICES-Rovo/`.
- Déplacement des supports pédagogiques : `SUPPORTS/` → `ANNEXES/supports/` ; index global dans `ANNEXES/README.md` ; liens mis à jour dans les modules et la documentation du dépôt.
- Mise à jour des ressources externes (modules 2 et 4, annexe `ANNEXES/ressources-externes.md`) : liens 404 corrigés (HBR réunions, Jira/Rovo, Dovetail), entrées FR (CNIL, PMI France, Le Monde Informatique, FUN-MOOC), alignement des listes courtes sur l'annexe, révision mai 2026.
- Ressources et statistiques : études 2024 remplacées ou complétées par des sources 2025–2026 (McKinsey State of AI 2025, Gartner trends 2026, Capgemini 2025, PMI hub IA, article FR GDL T&C 2025).
- Réorganisation pédagogique : transcription, synthèse de réunions et comptes-rendus déplacés du module 2 vers le module 4 (cours et exercices `EXERCICES/`).
- Module 2 recentré sur qualité / coûts / délais et documentation projet ; fichier renommé en `MODULE_2_Qualite-couts-delais.md`.
- `EXERCICE_4_Frameworks-Decision.md` enrichi (RICE, SWOT + TP réunions Teams / Gladia).

## [2.1.0] — 2026-05-19

### Modifié

- Relecture catalogue : outils alignés avec le plan formation 2026 (Microsoft Copilot, Atlassian Intelligence, Miro AI, etc.).
- README FR/EN : date de mise à jour, correspondance module ↔ exercice, structure du dépôt clarifiée (4 modules).
- Syllabus FR/EN, glossaire et ressources externes : actualisation des dates et liens (`chatgpt.com`, `cursor.com`).
- Supports (`SUPPORTS/`) : dates de révision.
- `generate_cours_viewers.py` (workspace parent Formations) : 4 fichiers MODULE conformes au dépôt.

### Ajouté

- `EXERCICES-Rovo/README.md` : documentation de la variante client Atlassian.
- Issue de suivi : [#2 — Relecture et mise à jour des contenus (2026)](https://github.com/AstekGroup/training-ai-assistance-for-popm/issues/2).

## [2.0.0] — 2025-11-25

### Modifié

- Fusion du contenu réunions/documentation dans le module 2.
- Contenus modules et exercices initiaux.
