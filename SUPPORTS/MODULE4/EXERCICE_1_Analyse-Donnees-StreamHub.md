# Exercice 1 : Analyser les données d'usage pour en tirer des insights actionnables

## 🎯 Objectif de l'exercice

Apprendre à utiliser l'IA pour analyser des données produit complexes et identifier des insights stratégiques exploitables.

## 📋 Contexte du projet

**Entreprise :** StreamHub
**Secteur :** EdTech (plateforme de streaming éducatif)
**Produit :** Application mobile et web pour cours en vidéo à la demande

### Situation actuelle

Vous êtes Product Manager chez StreamHub. Votre CPO vous a envoyé les métriques du Q4 2025 avec un message inquiet : "Les chiffres semblent bons en surface, mais j'ai un mauvais pressentiment. Peux-tu creuser ?"

Vous avez accès aux données brutes mais peu de temps pour les analyser. Vous décidez d'utiliser Claude ou ChatGPT pour accélérer l'analyse et identifier les signaux faibles.

## 📊 Données à disposition

### Métriques globales Q4 2025 (vs Q3 2025)

| Métrique                               | Q3 2025 | Q4 2025 | Évolution              |
| --------------------------------------- | ------- | ------- | ----------------------- |
| **MAU** (Monthly Active Users)    | 245 000 | 263 000 | **+7,3%** ✅      |
| **DAU** (Daily Active Users)      | 89 000  | 87 000  | **-2,2%** ⚠️    |
| **DAU/MAU ratio**                 | 36,3%   | 33,1%   | **-3,2 pts** ⚠️ |
| **Sessions par utilisateur/mois** | 12,4    | 10,1    | **-18,5%** 🚨     |
| **Durée moyenne session**        | 28 min  | 26 min  | **-7,1%** ⚠️    |
| **Taux de complétion vidéo**    | 68%     | 61%     | **-7 pts** 🚨     |
| **NPS**                           | 52      | 47      | **-5 pts** 🚨     |
| **Churn mensuel**                 | 4,2%    | 6,3%    | **+50%** 🚨       |
| **Revenus MRR**                   | 1,24M€ | 1,31M€ | **+5,6%** ✅      |

### Données par segment utilisateur

| Segment                  | % utilisateurs | Sessions/mois (Q3→Q4) | Complétion vidéo (Q3→Q4) | Churn (Q3→Q4) |
| ------------------------ | -------------- | ---------------------- | --------------------------- | -------------- |
| **Lycéens**       | 28%            | 15,2 → 13,8           | 72% → 68%                  | 3,1% → 4,5%   |
| **Étudiants**     | 35%            | 14,1 → 11,2           | 71% → 62%                  | 3,8% → 7,2%   |
| **Professionnels** | 22%            | 10,3 → 7,4            | 65% → 54%                  | 5,2% → 8,9%   |
| **Passionnés**    | 15%            | 8,7 → 7,1             | 60% → 52%                  | 6,1% → 7,8%   |

### Données par plateforme

| Plateforme        | % MAU | Temps moyen/session (Q3→Q4) | Crashs/1000 sessions |
| ----------------- | ----- | ---------------------------- | -------------------- |
| **iOS**     | 42%   | 32 min → 31 min             | 2,1 → 2,3           |
| **Android** | 38%   | 28 min → 24 min             | 4,7 → 8,2 🚨        |
| **Web**     | 20%   | 22 min → 21 min             | 0,3 → 0,4           |

### Top 10 catégories de cours (Q4 2025)

| Catégorie           | Vues Q4 | Évolution vs Q3 | Taux complétion | NPS catégorie |
| -------------------- | ------- | ---------------- | ---------------- | -------------- |
| Développement web   | 142 000 | +12%             | 58%              | 51             |
| Data Science         | 98 000  | +8%              | 64%              | 56             |
| Marketing digital    | 87 000  | +15%             | 67%              | 49             |
| Design UI/UX         | 76 000  | +5%              | 71%              | 58             |
| Langues étrangères | 68 000  | -8%              | 52%              | 42             |
| Photographie         | 61 000  | -3%              | 69%              | 54             |
| Finance perso        | 53 000  | +22%             | 63%              | 48             |
| Entrepreneuriat      | 47 000  | -12%             | 48%              | 39             |
| Développement perso | 41 000  | -18%             | 44%              | 37             |
| Bureautique          | 38 000  | -25%             | 39%              | 33             |

### Feedback utilisateurs (échantillon de 150 verbatims analysés)

**Thématiques récurrentes :**

| Thème                        | Occurrences | Sentiment   | Exemples de verbatims                                                         |
| ----------------------------- | ----------- | ----------- | ----------------------------------------------------------------------------- |
| **Qualité vidéo/son** | 43          | 😡 Négatif | "Le son est horrible sur certains cours", "Qualité vidéo très inégale"    |
| **Nouveaux cours**      | 38          | 😐 Neutre   | "Peu de nouveautés ce trimestre", "J'attends toujours le cours sur React 19" |
| **Prix**                | 31          | 😡 Négatif | "Trop cher pour le contenu proposé", "Rapport qualité/prix en baisse"       |
| **Interface mobile**    | 27          | 😡 Négatif | "Bugs sur Android", "L'app plante souvent depuis la dernière MAJ"            |
| **Exercices pratiques** | 22          | 😐 Neutre   | "Manque de hands-on", "Trop de théorie, pas assez de pratique"               |
| **Certificats**         | 18          | 😊 Positif  | "Super d'avoir les certifs", "Valorisant sur LinkedIn"                        |

### Événements produit Q4 2025

| Date                   | Événement                                    | Impact |
| ---------------------- | ---------------------------------------------- | ------ |
| **1er octobre**  | Hausse tarifaire (+15% sur abonnement mensuel) | 🔴     |
| **15 octobre**   | Sortie nouvelle version Android (v3.2)         | 🔴     |
| **1er novembre** | Lancement catégorie "Finance personnelle"     | 🟢     |
| **20 novembre**  | Mise à jour algorithme recommandation         | 🟡     |
| **10 décembre** | Campagne acquisition Black Friday              | 🟢     |

## 🎯 Votre mission

Vous devez préparer une présentation pour le COMEX avec **5 insights actionnables** issus de cette analyse de données.

### Livrables attendus

1. **5 insights stratégiques** avec pour chacun :

   - **Constat chiffré** (quoi ?)
   - **Analyse causale** (pourquoi ?)
   - **Impact business** (conséquences ?)
   - **Recommandations** (que faire ?)
   - **Priorité** (P0/P1/P2)
2. **1 dashboard de synthèse** (format au choix) avec les 3-4 métriques clés à suivre

## 🤖 Méthodologie avec l'IA

### Étape 1 : Structuration des données

**Prompt suggéré :**

```
Je suis Product Manager chez StreamHub, plateforme EdTech de streaming vidéo.
J'ai les métriques Q4 2025 et je dois identifier les signaux faibles et insights actionnables.

Voici mes données :
[Copier-coller les tableaux de métriques]

Peux-tu :
1. Identifier les 3 signaux les plus préoccupants
2. Croiser les données pour détecter les corrélations importantes
3. Formuler 3 hypothèses explicatives pour chaque signal
```

### Étape 2 : Analyse causale approfondie

**Prompt suggéré :**

```
En te basant sur les signaux identifiés, creusons l'hypothèse X.

Données complémentaires :
[Ajouter les données par segment, plateforme, etc.]

Questions :
- Quel segment est le plus impacté ?
- Quelle plateforme présente les anomalies ?
- Quel événement produit pourrait expliquer cela ?
- Quelles métriques secondaires confirment cette hypothèse ?
```

### Étape 3 : Formulation des insights

**Prompt suggéré :**

```
À partir de l'analyse, aide-moi à rédiger 5 insights actionnables au format :

**Insight #X : [Titre court et percutant]**

📊 Constat chiffré :
[Données clés en 2-3 phrases]

🔍 Analyse causale :
[Explication du "pourquoi" en 3-4 phrases]

💰 Impact business :
[Conséquences en € ou % si possible]

✅ Recommandations :
- Action 1 (effort/impact)
- Action 2 (effort/impact)
- Action 3 (effort/impact)

🎯 Priorité : P0/P1/P2

Rédige le premier insight sur [thème choisi].
```

### Étape 4 : Validation et visualisation

**Prompt suggéré :**

```
J'ai mes 5 insights. Aide-moi à :

1. Créer un dashboard de synthèse avec 4 métriques clés à tracker
2. Identifier les "quick wins" (impact rapide, effort faible)
3. Proposer un plan d'action sur 30-60-90 jours
```

## 📐 Template de livrable

```markdown
# Analyse des données Q4 2025 - StreamHub
*Préparé par : [Votre nom]*
*Date : [Date]*

## 🎯 Résumé exécutif
[2-3 phrases sur la situation globale]

## 📊 Insights stratégiques

### Insight #1 : [Titre]
📊 **Constat chiffré :**
[Données clés]

🔍 **Analyse causale :**
[Explication]

💰 **Impact business :**
[Chiffrage]

✅ **Recommandations :**
- Action 1 (Effort: ⚡/⚡⚡/⚡⚡⚡ | Impact: 📈/📈📈/📈📈📈)
- Action 2
- Action 3

🎯 **Priorité :** P0/P1/P2

---

[Répéter pour insights #2 à #5]

## 📊 Dashboard de synthèse

| Métrique | Objectif Q1 2026 | Fréquence tracking |
|----------|-----------------|-------------------|
| [Métrique 1] | [Valeur cible] | Hebdomadaire |
| [Métrique 2] | [Valeur cible] | Hebdomadaire |
| [Métrique 3] | [Valeur cible] | Mensuel |
| [Métrique 4] | [Valeur cible] | Mensuel |

## 🚀 Plan d'action 30-60-90 jours

**30 jours (Quick wins) :**
- Action 1
- Action 2

**60 jours (Optimisations) :**
- Action 3
- Action 4

**90 jours (Initiatives structurantes) :**
- Action 5
- Action 6
```
