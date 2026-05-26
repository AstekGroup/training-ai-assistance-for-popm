# Template : Analyse de scénarios (décision / financier)

**Version** : 1.0.0  
**Date de dernière mise à jour** : 2026-05-26  
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Décision analysée

| Champ | Valeur |
| ----- | ------ |
| **Décision** | [Formulation claire] |
| **PO/PM** | [Nom] |
| **Date** | [JJ/MM/AAAA] |
| **Échéance de décision** | [date] |

**Contexte** : […]

**Options** : [Option A] · [Option B] · [Status quo]

---

## Variables clés

| Variable | Unité | Source / hypothèse |
| -------- | ----- | ------------------ |
| [Coût dev] | [€ / j.h] | […] |
| [Revenus / gains] | [€] | […] |
| [Délai] | [mois] | […] |
| [Risque] | [qualitatif] | […] |

---

## Scénarios

### Scénario optimiste

| Hypothèse | Valeur |
| --------- | ------ |
| [Hypothèse 1] | […] |

**Résultats attendus** : [coûts, bénéfices, délai, risques]

**Probabilité estimée** : [Faible / Moyenne]

---

### Scénario réaliste

| Hypothèse | Valeur |
| --------- | ------ |
| [Hypothèse 1] | […] |

**Résultats attendus** : […]

**Probabilité estimée** : [Moyenne / Élevée]

---

### Scénario pessimiste

| Hypothèse | Valeur |
| --------- | ------ |
| [Hypothèse 1] | […] |

**Résultats attendus** : […]

**Probabilité estimée** : [Faible / Moyenne]

---

## Comparaison synthétique

| Critère | Optimiste | Réaliste | Pessimiste |
| ------- | --------- | -------- | ---------- |
| Coût total | […] | […] | […] |
| Bénéfice / valeur | […] | […] | […] |
| Délai | […] | […] | […] |
| Risque résiduel | […] | […] | […] |

---

## Recommandation

**Scénario de référence pour la décision** : [Réaliste / autre]

**Décision** : [ ] Go · [ ] Go conditionnel · [ ] No-go · [ ] Reporter

**Conditions de succès** : […]

**Revue prévue** : [date / jalon]

---

## Prompt IA

```
Pour la décision : [DÉCISION]
Options : [A, B, status quo]
Variables : [liste]

Génère trois scénarios (optimiste, réaliste, pessimiste) avec hypothèses,
impacts sur coûts/délais/risques, et une recommandation argumentée.
Format : Markdown, tableaux comparatifs.
```

---

**Note** : Utilisable pour arbitrages produit (module 4) ou scénarios financiers (business case, module 2).
