# Exercice 3 : Concevoir un workflow automatisé pour les réunions

## 🎯 Objectif de l'exercice

Apprendre à concevoir et documenter un workflow automatisé complet pour optimiser la gestion des réunions récurrentes avec l'IA.

## 📋 Contexte de l'exercice

**Entreprise :** TechVision
**Secteur :** SaaS B2B
**Équipe :** Product team (12 personnes)

Vous êtes Product Owner chez TechVision. Votre équipe organise **3 types de réunions récurrentes** qui consomment beaucoup de temps :

### Type 1 : Daily Standup (quotidien)

- **Fréquence** : Tous les jours à 9h30
- **Durée** : 15 minutes
- **Participants** : 8 personnes (équipe dev + PO + SM)
- **Problème actuel** :
  - Pas de trace écrite systématique
  - Blocages mentionnés mais pas toujours suivis
  - Difficile de retrouver "qui a dit quoi" 2 jours plus tard

### Type 2 : Sprint Planning (toutes les 2 semaines)

- **Fréquence** : Tous les 15 jours
- **Durée** : 2 heures
- **Participants** : Équipe complète (12 personnes)
- **Problème actuel** :
  - Compte-rendu fait manuellement → 45 minutes après la réunion
  - Action items dispersés entre Jira, Notion et emails
  - Pas de visibilité sur les décisions prises sprint par sprint

### Type 3 : Sprint Review (toutes les 2 semaines)

- **Fréquence** : Tous les 15 jours
- **Durée** : 1h30
- **Participants** : Équipe + stakeholders (20 personnes)
- **Problème actuel** :
  - Stakeholders absents ne reçoivent qu'un email résumé (incomplet)
  - Pas de centralisation des feedbacks
  - Difficile de retrouver les démos passées

## 🎯 Votre mission

Vous devez concevoir un workflow automatisé pour **1 de ces 3 types de réunions** (au choix) qui va :

1. Réduire le temps de préparation
2. Automatiser la prise de notes et synthèse
3. Extraire et tracer les action items
4. Centraliser la documentation
5. Améliorer la distribution de l'information

### Livrables attendus

1. **Schéma du workflow automatisé**

   - Diagramme avec étapes (avant/pendant/après réunion)
   - Outils utilisés à chaque étape
   - Points d'automatisation vs points manuels
2. **Documentation technique du workflow**

   - Description détaillée de chaque étape
   - Configuration des outils
   - Intégrations nécessaires
   - Scripts/prompts à réutiliser
3. **Estimation ROI**

   - Temps gagné par réunion
   - Temps gagné par mois/an
   - Coût des outils
   - ROI chiffré
4. **Plan de mise en œuvre**

   - Phases d'implémentation (progressive)
   - Prérequis et dépendances
   - Risques et points d'attention
   - Critères de succès

## 🤖 Méthodologie avec l'IA

### Étape 1 : Analyse du workflow actuel et des pain points

**Prompt suggéré :**

```
Aide-moi à analyser le workflow actuel d'une réunion récurrente et identifier les opportunités d'automatisation.

Type de réunion : [Daily Standup / Sprint Planning / Sprint Review]

Workflow actuel :

**Avant la réunion :**
- [Décrire les actions manuelles : créer event, préparer agenda, etc.]

**Pendant la réunion :**
- [Décrire : prise de notes manuelle, discussion, décisions]

**Après la réunion :**
- [Décrire : rédaction compte-rendu, envoi email, création tickets Jira, etc.]

Participants : [nombre]
Durée : [durée]
Fréquence : [fréquence]

Pain points identifiés :
1. [Pain point 1]
2. [Pain point 2]
3. [Pain point 3]

Questions :
1. Identifie toutes les tâches manuelles répétitives (avant/pendant/après)
2. Lesquelles sont automatisables avec l'IA ?
3. Lesquelles nécessitent intervention humaine ?
4. Quel est le temps estimé gagnable par réunion ?

Présente l'analyse sous forme de tableau :
| Tâche | Temps actuel | Automatisable ? | Outil suggéré | Temps après auto |
```

### Étape 2 : Conception du workflow automatisé

**Prompt suggéré :**

```
Conçois un workflow automatisé optimisé pour ce type de réunion :

Type : [Daily Standup / Sprint Planning / Sprint Review]
Analyse actuelle : [Résumé de l'étape 1]

Contraintes :
- Budget outils : [ex: 50€/mois max]
- Stack existant : Zoom, Jira, Notion, Slack
- Compétences équipe : Moyenne (pas de devs dédiés automation)

Workflow à concevoir :

**AVANT la réunion** (automatisations de préparation)
- Quelles automatisations pour préparer la réunion ?
- Quels rappels automatiques ?
- Quelle préparation de contenu (agenda, contexte) ?

**PENDANT la réunion** (automatisations temps réel)
- Transcription automatique : quel outil ?
- Prise de notes collaborative : quel outil ?
- Captation des décisions : comment ?

**APRÈS la réunion** (automatisations de suivi)
- Synthèse automatique : quel prompt IA ?
- Extraction action items : vers où (Jira, Notion, etc.) ?
- Distribution : qui reçoit quoi, sous quel format ?
- Archivage : où et comment ?

Pour chaque étape, fournis :
1. L'outil recommandé (et pourquoi)
2. La configuration nécessaire
3. Le prompt IA à utiliser (si applicable)
4. Le temps d'exécution

Présente sous forme de diagramme texte (workflow visuel).
```

### Étape 3 : Documentation technique détaillée

**Prompt suggéré :**

```
Rédige une documentation technique complète pour implémenter ce workflow automatisé :

Workflow conçu : [Résumé de l'étape 2]

Sections de la documentation :

## 1. Vue d'ensemble
- Objectif du workflow
- Bénéfices attendus
- Prérequis

## 2. Outils nécessaires
- Liste des outils avec rôle de chacun
- Coût mensuel total
- Liens vers documentation officielle

## 3. Configuration initiale

### Outil 1 : [Nom]
- Étapes de setup (step-by-step)
- Paramètres à configurer
- Intégrations à activer

[Répéter pour chaque outil]

## 4. Workflows automatisés

### Workflow 1 : [Nom]
- Trigger (déclencheur)
- Actions automatiques
- Configuration détaillée
- Exemple d'exécution

[Répéter pour chaque workflow]

## 5. Prompts IA réutilisables

### Prompt 1 : Synthèse de réunion
```

[Prompt complet prêt à copier-coller]

```

### Prompt 2 : Extraction action items
```

[Prompt complet]

```

[Répéter pour chaque prompt]

## 6. Processus manuels restants
- Actions qui nécessitent intervention humaine
- Responsabilités
- Timing

## 7. Troubleshooting
- Problèmes courants et solutions
- Que faire si un outil est en panne ?
- Plan B

Ton : Technique mais clair, opérationnel
Format : Markdown avec code blocks pour configs
```

### Étape 4 : Calcul du ROI

**Prompt suggéré :**

```
Calcule le ROI de ce workflow automatisé :

Données actuelles :
- Type réunion : [type]
- Fréquence : [fréquence]
- Participants : [nombre]
- Temps de préparation actuel : [minutes]
- Temps de réunion : [minutes]
- Temps de suivi actuel (compte-rendu, etc.) : [minutes]

Workflow automatisé :
- Temps de préparation après auto : [minutes]
- Temps de réunion inchangé : [minutes]
- Temps de suivi après auto : [minutes]

Coûts :
- Outils (mensuel) : [montant €]
- Temps de setup initial : [heures]

Hypothèses :
- Taux horaire moyen équipe : 50€/h
- Nombre de réunions par an : [calculer selon fréquence]

Calcule :

1. **Gain de temps par réunion**
   - Avant : X minutes
   - Après : Y minutes
   - Gain : Z minutes

2. **Gain de temps annuel**
   - Par personne
   - Pour l'équipe complète
   - En heures et en € (× taux horaire)

3. **Coût annuel des outils**

4. **Investissement initial**
   - Temps de setup (heures)
   - Coût équivalent (€)

5. **ROI**
   - ROI année 1 (avec investissement initial)
   - ROI année 2+ (maintenance seule)
   - Break-even point (en mois)

Présente sous forme de tableau et graphique textuel.
```

### Étape 5 : Plan de mise en œuvre

**Prompt suggéré :**

```
Crée un plan de mise en œuvre progressif et réaliste pour ce workflow automatisé :

Contexte :
- Équipe de 12 personnes
- Pas d'équipe dédiée automation
- Résistance au changement possible
- Besoin de prouver la valeur rapidement

Plan de mise en œuvre à créer :

## Phase 0 : Préparation (Semaine 1)
- Validation budget et outils
- Création des comptes
- Communication à l'équipe

## Phase 1 : Quick Win (Semaines 2-3)
- Quelle feature automatiser en premier pour impact rapide ?
- Objectif : Prouver la valeur
- Critère de succès

## Phase 2 : Extension (Semaines 4-6)
- Automatisations complémentaires
- Intégrations entre outils
- Formation équipe

## Phase 3 : Optimisation (Semaines 7-8)
- Ajustements basés sur retours
- Standardisation des processus
- Documentation finale

Pour chaque phase :
- Actions concrètes (checklist)
- Responsable
- Durée estimée
- Livrables
- Critères de succès
- Risques potentiels et mitigation

Ajoute également :
- Points de validation (Go/No-Go)
- Plan de rollback si échec
- Mesures de succès à tracker
```

## 📐 Template de livrable

### 1. Schéma du workflow

```markdown
# Workflow automatisé : [Type de réunion]

## Vue d'ensemble

```

┌─────────────────────────────────────────────────────────────┐
│                    AVANT LA RÉUNION                          │
├─────────────────────────────────────────────────────────────┤
│ 1. [Action auto] → [Outil] → [Output]                       │
│ 2. [Action auto] → [Outil] → [Output]                       │
│ 3. [Action manuelle] → [Qui] → [Output]                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   PENDANT LA RÉUNION                         │
├─────────────────────────────────────────────────────────────┤
│ 1. [Action auto] → [Outil] → [Output]                       │
│ 2. [Action collaborative] → [Outil] → [Output]              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    APRÈS LA RÉUNION                          │
├─────────────────────────────────────────────────────────────┤
│ 1. [Action auto] → [Outil] → [Output]                       │
│ 2. [Action auto] → [Outil] → [Output]                       │
│ 3. [Distribution auto] → [Canaux] → [Destinataires]         │
└─────────────────────────────────────────────────────────────┘

```

[À compléter avec l'IA]

## Légende
- 🤖 = Automatique (0 intervention humaine)
- 👤 = Semi-automatique (validation humaine requise)
- ✋ = Manuel
```

### 2. Documentation technique

```markdown
# Documentation technique - Workflow [Type réunion]

## 1. Vue d'ensemble

[À compléter]

## 2. Outils nécessaires

| Outil | Rôle | Coût/mois | Lien |
|-------|------|-----------|------|
| [Outil 1] | [Rôle] | [€] | [URL] |

## 3. Configuration initiale

### Outil 1 : [Nom]

**Setup :**
1. [Étape 1]
2. [Étape 2]

**Intégrations :**
- [Intégration 1]

## 4. Prompts IA réutilisables

### Prompt 1 : Synthèse réunion

```

[Prompt complet]

```

## 5. Troubleshooting

[À compléter]
```

### 3. Estimation ROI

```markdown
# ROI - Workflow automatisé [Type réunion]

## Situation actuelle vs Automatisée

| Étape | Temps actuel | Temps après auto | Gain |
|-------|-------------|------------------|------|
| Préparation | [X min] | [Y min] | [Z min] |
| Réunion | [X min] | [X min] | 0 min |
| Suivi | [X min] | [Y min] | [Z min] |
| **TOTAL** | **[X min]** | **[Y min]** | **[Z min]** |

## Gain annuel

- **Réunions par an** : [nombre]
- **Gain temps/réunion** : [minutes]
- **Gain total** : [heures/an]
- **Gain financier** : [€/an] (à 50€/h)

## Coûts

- **Outils** : [€/mois] × 12 = [€/an]
- **Setup initial** : [heures] × 50€/h = [€]

## ROI

- **ROI Année 1** : [Gain €] - [Coût outils €] - [Setup €] = **[€]**
- **ROI Année 2+** : [Gain €] - [Coût outils €] = **[€]**
- **Break-even** : [X] mois
```

### 4. Plan de mise en œuvre

```markdown
# Plan de mise en œuvre - Workflow automatisé

## Phase 0 : Préparation (Semaine 1)

**Actions :**
- [ ] [Action 1]
- [ ] [Action 2]

**Responsable :** [Nom]
**Critère de succès :** [Critère]

## Phase 1 : Quick Win (Semaines 2-3)

[À compléter]

## Phase 2 : Extension (Semaines 4-6)

[À compléter]

## Phase 3 : Optimisation (Semaines 7-8)

[À compléter]

## Risques et mitigation

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| [Risque 1] | [Élevé/Moyen/Faible] | [%] | [Action] |
```
