# Template : Estimation assistée par IA

**Version** : 1.0.0  
**Date de dernière mise à jour** : 2026-05-26  
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Contexte

| Champ | Valeur |
| ----- | ------ |
| **Projet / initiative** | [Nom] |
| **PO/PM** | [Nom] |
| **Date** | [JJ/MM/AAAA] |
| **Périmètre estimé** | [Feature / release / projet] |

---

## Données historiques (entrée)

**Vélocité récente (sprints)** :

| Sprint | Points livrés | Capacité planifiée | Écart |
| ------ | ------------- | ------------------ | ----- |
| [S-1]  | [X]           | [Y]                | [Z]   |

**Projets ou stories similaires** :

| Référence | Description | Estimation initiale | Durée réelle | Écart |
| --------- | ----------- | ------------------- | ------------ | ----- |
| [REF-1]   | […]         | […]                 | […]          | […]   |

---

## Estimation cible

**Description** :

[Description du périmètre à estimer]

**Hypothèses** :

- [Hypothèse 1]
- [Hypothèse 2]

**Contraintes** :

- [Contrainte technique / calendrier / ressources]

---

## Grille d'estimation

### Par similarité

| Critère | Projet similaire | Nouveau périmètre | Ajustement |
| ------- | ---------------- | ----------------- | ---------- |
| Complexité technique | [1–5] | [1–5] | [+/- jours] |
| Dépendances | [Faible/Moyen/Fort] | […] | […] |
| Incertitude métier | [Faible/Moyen/Fort] | […] | […] |

**Estimation par similarité** : [X jours / points]  
**Niveau de confiance** : [Haute / Moyenne / Basse]

### Points de story (si applicable)

| User story | Estimation suggérée | Justification IA | Validation équipe |
| ---------- | ------------------- | ---------------- | ----------------- |
| [US-XXX]   | [points]            | […]              | [ ]               |

---

## Synthèse

| Scénario | Durée / effort | Conditions |
| -------- | -------------- | ---------- |
| Optimiste | […] | […] |
| Réaliste | […] | […] |
| Pessimiste | […] | […] |

**Estimation retenue** : [valeur]  
**Validé par** : [équipe / date]

---

## Prompt IA (estimation par similarité)

```
Basé sur ces projets similaires passés :
[coller tableau historique]

Estime la durée de ce nouveau projet :
[description]

Justifie en indiquant :
- Les similarités et différences
- Le niveau de confiance
- Un scénario optimiste, réaliste et pessimiste
```

---

**Note** : L'estimation IA reste indicative ; la validation humaine en planning poker ou revue d'équipe est obligatoire.
