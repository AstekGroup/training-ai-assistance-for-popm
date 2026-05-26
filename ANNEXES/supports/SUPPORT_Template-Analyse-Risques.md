# Template : Analyse de risques projet

**Version** : 1.0.0  
**Date de dernière mise à jour** : 2026-05-26  
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Contexte

| Champ | Valeur |
| ----- | ------ |
| **Projet** | [Nom] |
| **PO/PM** | [Nom] |
| **Date** | [JJ/MM/AAAA] |
| **Version registre** | [v1.0] |

**Description du projet** :

[Contexte, objectifs, contraintes]

---

## Registre des risques

| ID | Risque | Catégorie | Probabilité | Impact | Score | Signaux d'alerte | Owner |
| -- | ------ | --------- | ----------- | ------ | ----- | ---------------- | ----- |
| R01 | […] | [Tech/Métier/Org/Externe] | [F/M/E] | [F/M/E] | [P×I] | […] | […] |

**Légende score** : Faible 1–2 · Moyen 3–4 · Élevé 5–9

---

## Détail par risque (répéter pour chaque risque prioritaire)

### R[XX] — [Nom du risque]

**Description** : […]

**Probabilité** : [Faible / Moyenne / Élevée] — **Impact** : [Faible / Moyen / Élevé]

**Signaux d'alerte** :

- [Signal 1]
- [Signal 2]

**Actions préventives** :

1. [Action] — Responsable : […] — Échéance : […]

**Actions correctives (si réalisation)** :

1. [Action] — Responsable : […] — Échéance : […]

**Plan de contingence** :

| Indicateur de déclenchement | Action | Coût estimé |
| --------------------------- | ------ | ----------- |
| […] | […] | […] |

---

## Dépendances critiques

| Dépendance | Élément bloquant | Impact si retard | Mitigation |
| ---------- | ---------------- | ---------------- | ---------- |
| […] | […] | […] | […] |

---

## Suivi

| Date | Risque | Évolution | Action |
| ---- | ------ | --------- | ------ |
| […] | R[XX] | [Ouvert / Atténué / Clôturé] | […] |

---

## Prompt IA — identification

```
Pour ce projet :
[description]

Identifie les 10 risques les plus probables.
Pour chaque risque : nom, probabilité, impact, signaux d'alerte,
actions préventives recommandées.
Format : tableau Markdown.
```

## Prompt IA — plan de contingence

```
Pour ce risque : "[description]"

Génère un plan de contingence incluant :
actions préventives, actions correctives, indicateurs de déclenchement,
responsables, délais, coûts estimés.
```

---

**Note** : Réviser le registre à chaque comité de pilotage ou changement majeur de périmètre.
