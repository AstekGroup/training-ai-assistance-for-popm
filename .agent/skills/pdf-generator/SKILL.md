---
name: pdf-generator
description: Convertit des fichiers Markdown en PDF professionnels aux couleurs d'Astek.
---

# 🎓 Skill : PDF Generator

Ce skill permet de transformer des documents Markdown (attestations de formation, syllabus, plans de cours) en fichiers PDF élégants et professionnels, en respectant la charte graphique Astek.

## 🛠️ Outils internes

Le skill est autonome et contient ses propres scripts et ressources :
- **Script principal** : `.agent/skills/pdf-generator/scripts/generate.js`
- **Configuration** : `.agent/skills/pdf-generator/scripts/md-to-pdf.config.js`
- **Ressources** : `.agent/skills/pdf-generator/assets/` (logo, CSS, polices)

## 🚀 Capacités

- **Branding automatique** : Intègre le logo Astek et la feuille de style `astek-theme.css`.
- **Mise en page flexible** : Supporte le format portrait (par défaut) ou paysage.
- **Gestion des coupures** : Option pour désactiver les sauts de page automatiques avant les titres H2.
- **Fidélité au texte** : Préserve les retours à la ligne simples du Markdown.

## 📖 Utilisation par l'Agent

L'agent peut invoquer ce skill en utilisant Node.js.

```bash
node .agent/skills/pdf-generator/scripts/generate.js [options] <chemin_du_fichier.md>
```

### Options disponibles

| Option | Description |
| :--- | :--- |
| `-l`, `--landscape` | Définit l'orientation de la page en paysage. |
| `-nb`, `--no-break-h2` | Désactive les sauts de page automatiques avant les titres de niveau 2 (`h2`). |
| `--no-breaks` | Désactive la conservation des retours à la ligne simples du Markdown. |

### Exemples d'invocation

Depuis la racine du dépôt `training-ai-assistance-for-popm/` :

**Générer le syllabus en paysage :**
```bash
node .agent/skills/pdf-generator/scripts/generate.js --landscape --no-break-h2 ANNEXES/syllabus-training-ai-assistance-for-popm.md
```

**Générer un module de cours :**
```bash
node .agent/skills/pdf-generator/scripts/generate.js COURS/MODULE_1_Acculturation.md
```

**Générer un template ou support :**
```bash
node .agent/skills/pdf-generator/scripts/generate.js ANNEXES/supports/SUPPORT_Template-User-Story.md
```

> Provenance : copie du skill homonyme dans le dépôt frère `training-kit` (`Formations/training-kit/.agent/skills/pdf-generator/`).

## 📋 Pré-requis (déjà configurés)

- Dépendances installées dans le dossier `scripts/`.
- Ressources présentes dans le dossier `assets/`.
