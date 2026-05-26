# Template : Matrice de priorisation RICE

**Version** : 1.0.0  
**Date de dernière mise à jour** : 2026-05-26  
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Contexte

| Champ | Valeur |
| ----- | ------ |
| **Produit / équipe** | [Nom] |
| **PO/PM** | [Nom] |
| **Date** | [JJ/MM/AAAA] |
| **Horizon** | [Trimestre / release] |

**Contexte produit** : [Marché, objectifs, contraintes]

---

## Rappel formule

**RICE** = (Reach × Impact × Confidence) / Effort

| Dimension | Échelle | Description |
| --------- | ------- | ----------- |
| **Reach** | Nombre | Utilisateurs / événements impactés sur la période |
| **Impact** | 0,25 · 0,5 · 1 · 2 · 3 | Impact par utilisateur atteint |
| **Confidence** | 0–100 % | Certitude des estimations |
| **Effort** | Personne-mois (ou jours) | Coût de réalisation |

---

## Matrice

| # | Feature / initiative | Reach | Impact | Confidence | Effort | Score RICE | Rang |
| - | -------------------- | ----- | ------ | ---------- | ------ | ---------- | ---- |
| 1 | [Feature A] | […] | […] | […] % | […] | [calcul] | […] |
| 2 | [Feature B] | […] | […] | […] % | […] | [calcul] | […] |
| 3 | [Feature C] | […] | […] | […] % | […] | [calcul] | […] |

**Formule cellule** : `(Reach × Impact × (Confidence/100)) / Effort`

---

## Détail par feature (optionnel)

### [Feature A]

**Description** : […]

**Justification Reach** : […]  
**Justification Impact** : […]  
**Justification Confidence** : […]  
**Justification Effort** : […]

**Décision** : [ ] Prioriser · [ ] Backlog · [ ] Rejeter

---

## Synthèse et arbitrage

**Top 3 retenu** :

1. […]
2. […]
3. […]

**Arbitrages manuels** (au-delà du score) : [dépendances, stratégie, dette technique]

**Validé en comité** : [ ] Oui — Date : […]

---

## Prompt IA

```
Tu es CPO. Aide-moi à prioriser ces features avec la méthode RICE.

Features :
1. [Feature A]
2. [Feature B]
3. [Feature C]

Contexte : [contexte produit]

Pour chaque feature, estime Reach, Impact (0,25 à 3), Confidence (%),
Effort (jours/homme). Calcule le score RICE et propose un classement.
Présente en tableau Markdown avec justifications courtes.
```

---

**Note** : Le score RICE oriente la discussion ; la décision finale reste humaine.
