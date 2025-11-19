# Exercice 2 : Construire une matrice RICE pour prioriser un backlog

## 🎯 Objectif de l'exercice

Apprendre à utiliser l'IA pour évaluer et prioriser des features selon la méthodologie RICE (Reach × Impact × Confidence / Effort).

## 📋 Contexte du projet

**Entreprise :** MediConnect
**Secteur :** HealthTech
**Produit :** Logiciel de gestion de cabinet médical (SaaS)

### Situation actuelle

Vous êtes Product Owner chez MediConnect. Votre produit équipe 180 cabinets médicaux en France (généralistes, spécialistes, dentistes).

Pour le Q1 2026, votre équipe a une capacité de **120 points** (vélocité moyenne). Vous avez 12 features candidates dans le backlog, toutes demandées par les clients, mais vous ne pouvez pas tout faire.

Votre CPO vous demande d'utiliser RICE pour prioriser objectivement et présenter vos choix au COMEX.

## 📊 Les 12 features candidates

### Feature 1 : Téléconsultation intégrée

**Description :** Module de visio intégré au logiciel pour téléconsultations (actuellement, les médecins utilisent Zoom/Teams en externe).

**Verbatims clients :**

- "Pratique, mais pas urgent, on a nos outils"
- "Ce serait bien pour tout centraliser"
- "Utile pour patients à mobilité réduite"

**Données :**

- 45% des cabinets font de la téléconsultation (mais avec outils externes)
- 15% des consultations sont des téléconsultations en moyenne
- Abonnement concurrent qui propose ça : +20€/mois

**Effort estimé :** 34 points

---

### Feature 2 : Envoi automatique SMS de rappel

**Description :** SMS automatiques J-1 pour rappeler les RDV aux patients (réduction no-show).

**Verbatims clients :**

- "On perd 25% de notre CA à cause des no-show !"
- "Absolument indispensable, tous nos concurrents l'ont"
- "Mes patients oublient tout le temps"

**Données :**

- 100% des cabinets sont intéressés
- Taux moyen de no-show actuel : 18%
- Estimation réduction no-show avec SMS : -60% (→ 7% de no-show)
- Coût SMS : 0,05€/SMS, moyenne 12 RDV/jour/cabinet

**Effort estimé :** 13 points

---

### Feature 3 : Dossier patient enrichi (antécédents familiaux)

**Description :** Section "antécédents familiaux" dans le dossier patient pour traçabilité (maladies héréditaires, allergies familiales).

**Verbatims clients :**

- "Important pour le suivi médical, surtout en pédiatrie"
- "On note ça dans les commentaires pour l'instant"
- "Pas urgent mais utile"

**Données :**

- 32% des cabinets (pédiatres, généralistes) très intéressés
- 50% peu intéressés (dentistes, dermatologues)
- Pas d'impact direct sur le revenu

**Effort estimé :** 8 points

---

### Feature 4 : Export comptable vers logiciels compta

**Description :** Export automatique des encaissements vers logiciels compta (Cegid, EBP, Sage).

**Verbatims clients :**

- "Je perds 3h par semaine à ressaisir dans mon compta !"
- "Mon comptable me harcèle, c'est urgent"
- "Tous les autres logiciels médicaux l'ont"

**Données :**

- 78% des cabinets intéressés (surtout libéraux)
- Temps économisé : 3h/semaine/cabinet
- Taux d'erreurs de saisie actuel : 12%

**Effort estimé :** 21 points

---

### Feature 5 : Prise de RDV en ligne (patients)

**Description :** Widget de prise de RDV en ligne sur le site du cabinet (patients prennent RDV 24/7 sans appeler).

**Verbatims clients :**

- "Mes patients veulent réserver en ligne comme chez le coiffeur"
- "Ma secrétaire passe sa vie au téléphone"
- "Ça fait moderne, c'est important pour l'image"

**Données :**

- 89% des cabinets intéressés
- Concurrent Doctolib facturation : 129€/mois
- Estimation : +15% de RDV bookés (patients hors horaires de secrétariat)
- Risque : complexité intégration agenda médecin

**Effort estimé :** 55 points

---

### Feature 6 : Gestion des stocks (pharmacie de cabinet)

**Description :** Module de gestion des stocks pour pharmacie interne du cabinet (suivi vaccins, matériel, péremptions).

**Verbatims clients :**

- "Indispensable pour nous !" (pédiatres, gynécos)
- "On ne gère pas de stock" (dentistes, psy)

**Données :**

- 28% des cabinets intéressés (pédiatres, gynécos, généralistes)
- Économie estimée : 500€/an/cabinet (éviter péremptions)

**Effort estimé :** 34 points

---

### Feature 7 : Historique des consultations en PDF

**Description :** Export de l'historique complet d'un patient en PDF (utile pour changement de médecin, déménagement).

**Verbatims clients :**

- "Les patients demandent souvent leur dossier"
- "Obligation légale de fournir, mais galère actuellement"
- "Je fais des copier-coller dans Word..."

**Données :**

- 100% des cabinets concernés (obligation RGPD)
- Fréquence : 2-3 demandes/mois/cabinet
- Temps manuel actuel : 30 min/export

**Effort estimé :** 5 points

---

### Feature 8 : Statistiques cabinet (dashboard)

**Description :** Dashboard analytics avec métriques cabinet (nb consultations, CA mensuel, top pathologies, taux no-show).

**Verbatims clients :**

- "Sympa mais pas urgent"
- "Pratique pour le bilan de fin d'année"
- "Mon comptable me demande ces chiffres"

**Données :**

- 54% des cabinets intéressés
- Usage estimé : 1x/mois
- Pas d'impact direct sur CA

**Effort estimé :** 13 points

---

### Feature 9 : Facturation SESAM-Vitale améliorée

**Description :** Refonte du module de facturation SESAM-Vitale (actuellement buggy, rejets fréquents).

**Verbatims clients :**

- "C'est INSUPPORTABLE, 30% de rejets !"
- "Je vais changer de logiciel si ce n'est pas réglé"
- "Urgent, ça nous fait perdre de l'argent"

**Données :**

- 100% des cabinets concernés (France uniquement)
- Taux de rejet actuel : 28% (vs 5% chez concurrents)
- Temps de resoumission : 10 min/rejet
- Risque de churn élevé

**Effort estimé :** 21 points

---

### Feature 10 : Intégration avec laboratoires d'analyses

**Description :** Réception automatique des résultats d'analyses médicales dans le dossier patient (actuellement : fax ou mail).

**Verbatims clients :**

- "Pratique mais mes labos ne sont pas équipés"
- "Top si ça marche avec les gros labos (Biogroup, Cerba)"

**Données :**

- 67% des cabinets intéressés
- Nécessite partenariats avec laboratoires (incertitude)
- Temps économisé : 15 min/jour/cabinet

**Effort estimé :** 55 points (dont négociations partenariats)

---

### Feature 11 : Mode hors-ligne (offline)

**Description :** Permettre l'utilisation du logiciel sans connexion Internet (actuellement : 100% cloud, inutilisable si coupure).

**Verbatims clients :**

- "Indispensable pour les cabinets en zone rurale"
- "La semaine dernière, panne Internet 4h, on ne pouvait rien faire"

**Données :**

- 22% des cabinets en zone rurale concernés
- Fréquence coupures : 2-3x/an, durée 2-5h
- Concurrent principal (Medistory) a le mode offline

**Effort estimé :** 89 points (refonte architecture)

---

### Feature 12 : Ordonnances pré-remplies (templates)

**Description :** Bibliothèque de templates d'ordonnances pour pathologies courantes (gain de temps de saisie).

**Verbatims clients :**

- "Je prescris toujours les mêmes traitements pour les mêmes pathologies"
- "Ça me ferait gagner 5 min par consultation"

**Données :**

- 83% des cabinets intéressés
- Temps économisé : 5 min/consultation (moyenne 20 consultations/jour)
- Réduction erreurs de dosage

**Effort estimé :** 8 points

---

## 🎯 Votre mission

Vous devez présenter au COMEX une matrice RICE complète avec les 12 features, et recommander le sprint planning Q1 2026.

### Livrables attendus

1. **Tableau RICE complet** avec pour chaque feature :

   - **Reach** (combien d'utilisateurs/cabinets touchés ?)
   - **Impact** (quel impact business : 0,25 / 0,5 / 1 / 2 / 3)
   - **Confidence** (niveau de certitude : 10% à 100%)
   - **Effort** (en points)
   - **Score RICE** = (R × I × C) / E
   - **Classement**
2. **Sprint planning Q1 2026** (capacité : 120 points)

   - Features retenues
   - Justification des choix
3. **Communication aux parties prenantes** (email/slide)

## 🤖 Méthodologie avec l'IA

### Étape 1 : Comprendre RICE et scorer une feature (exemple)

**Prompt suggéré :**

```
Je dois prioriser des features avec la méthodologie RICE.

Rappel RICE :
- Reach : nombre d'utilisateurs touchés sur une période
- Impact : 0,25 (minimal) / 0,5 (faible) / 1 (moyen) / 2 (fort) / 3 (massif)
- Confidence : 10% à 100%
- Effort : en points d'effort (ici, story points)
- Score RICE = (Reach × Impact × Confidence) / Effort

Contexte : MediConnect, logiciel médical SaaS, 180 cabinets clients.

Feature exemple : "Envoi automatique SMS de rappel RDV"
Données :
- 100% des cabinets intéressés (180 cabinets)
- Taux de no-show actuel : 18%, estimation réduction : -60% (→ 7%)
- Moyenne 12 RDV/jour/cabinet
- Effort : 13 points

Aide-moi à scorer cette feature :
1. Quel Reach choisir ? (combien de cabinets × fréquence d'usage)
2. Quel Impact (0,25 à 3) ? (réduction no-show = impact CA)
3. Quelle Confidence (10%-100%) ? (est-ce que -60% no-show est réaliste ?)
4. Calcule le score RICE final
```

### Étape 2 : Scorer toutes les features en batch

**Prompt suggéré :**

```
Maintenant, appliquons RICE aux 12 features.

Voici les 12 features :
[Copier-coller les 12 descriptions ci-dessus]

Pour chaque feature, détermine :
1. Reach (en cabinets touchés × fréquence usage sur 1 trimestre)
2. Impact (0,25 / 0,5 / 1 / 2 / 3) avec justification
3. Confidence (%) avec justification
4. Effort (déjà fourni)
5. Score RICE = (R × I × C) / E

Présente le résultat sous forme de tableau markdown classé par score RICE décroissant.
```

### Étape 3 : Construire le sprint planning

**Prompt suggéré :**

```
J'ai ma matrice RICE classée. Capacité Q1 2026 : 120 points.

Aide-moi à :
1. Sélectionner les features à inclure dans le sprint (sans dépasser 120 points)
2. Identifier les "no-brainer" (RICE élevé, effort faible)
3. Identifier les features à écarter (et pourquoi)
4. Vérifier la cohérence business (ex: pas que des quick wins, équilibre stratégie court/moyen terme)

Contraintes :
- Feature "Facturation SESAM-Vitale" est critique (risque churn)
- Privilégier un mix impact court terme (CA) et long terme (rétention)
```

### Étape 4 : Rédiger la communication COMEX

**Prompt suggéré :**

```
Rédige une communication COMEX (format slide ou email) pour présenter :

1. **Contexte** : 12 features candidates, 120 points de capacité
2. **Méthodologie** : RICE (brève explication)
3. **Résultats** : tableau top 6 features retenues avec scores RICE
4. **Justification** : pourquoi ces choix (impact CA, réduction churn, demandes clients)
5. **Features écartées** : lesquelles et pourquoi (mais on y reviendra Q2/Q3)
6. **Risques** : 2-3 risques identifiés

Ton : professionnel, data-driven, concis (1 page max).
```

## 📐 Template de livrable

### Tableau RICE complet

| # | Feature       | Reach    | Impact   | Confidence | Effort   | Score RICE | Décision               |
| - | ------------- | -------- | -------- | ---------- | -------- | ---------- | ----------------------- |
| 1 | [Nom feature] | [Nombre] | [0,25-3] | [%]        | [Points] | [Score]    | ✅ Retenu / ❌ Écarté |
| 2 | ...           |          |          |            |          |            |                         |

### Sprint Planning Q1 2026

**Capacité : 120 points**

| Feature         | Score RICE | Effort            | Justification                          |
| --------------- | ---------- | ----------------- | -------------------------------------- |
| Feature X       | 8,5        | 13 pts            | Impact CA direct, forte demande client |
| Feature Y       | 6,2        | 21 pts            | Réduction churn critique              |
| ...             |            |                   |                                        |
| **TOTAL** | -          | **118 pts** | *2 points de marge*                  |

### Communication COMEX (exemple structure)

```markdown
# Priorisation Roadmap Q1 2026 - MediConnect
*Product Owner : [Nom]*
*Date : [Date]*

## 🎯 Contexte
- 12 features candidates dans le backlog
- Capacité équipe : 120 points (vélocité moyenne)
- Objectif : maximiser impact business (CA, rétention, satisfaction)

## 📊 Méthodologie : RICE
**RICE = (Reach × Impact × Confidence) / Effort**

Permet de scorer objectivement les features selon :
- **Reach** : nb utilisateurs touchés
- **Impact** : impact business (0,25 à 3)
- **Confidence** : certitude de réussite (%)
- **Effort** : coût développement (points)

## ✅ Features retenues (118 points)

| Feature | RICE | Effort | Justification |
|---------|------|--------|---------------|
| [Feature 1] | 8,5 | 13 pts | [Raison] |
| [Feature 2] | 6,2 | 21 pts | [Raison] |
| ... | | | |

## ❌ Features écartées (report Q2/Q3)

| Feature | RICE | Raison |
|---------|------|--------|
| [Feature X] | 2,1 | Effort trop élevé pour impact faible |
| [Feature Y] | 3,4 | Dépendance externe (partenariats) |

## ⚠️ Risques identifiés

1. **[Risque 1]** : [Description + plan mitigation]
2. **[Risque 2]** : [Description + plan mitigation]

## 📅 Prochaines étapes
- Kick-off sprint : [Date]
- Revue RICE mensuelle : ajuster si nouvelles données
```
