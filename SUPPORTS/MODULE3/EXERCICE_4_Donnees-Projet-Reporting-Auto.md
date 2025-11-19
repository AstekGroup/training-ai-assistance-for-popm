# Génération automatique de rapport - Exercice 4

**Entreprise** : GreenTech (Startup CleanTech)
**Votre rôle** : Product Manager
**Mission** : Automatiser la génération du rapport hebdomadaire de sprint avec l'IA

---

## 1. Contexte de l'entreprise

### Présentation de GreenTech

**GreenTech** est une startup française créée en 2022, développant une plateforme SaaS pour optimiser la consommation énergétique des bâtiments tertiaires.

**Chiffres clés** :
- 35 employés
- Série A levée : 5M€
- 120 clients (bureaux, hôtels, centres commerciaux)
- Équipe produit : 2 PO, 1 PM (vous), 6 développeurs, 2 QA

**Produit** : Plateforme IoT + IA
- Capteurs énergétiques (électricité, chauffage, climatisation)
- Dashboard temps réel
- Recommandations IA pour économies d'énergie
- Alertes et automatisations

---

## 2. Le problème : Reporting manuel chronophage

### Situation actuelle

Tous les **vendredis après-midi**, vous (PM) devez produire un **rapport de sprint hebdomadaire** pour :
- Le COMEX (CEO + CTO + Head of Product)
- Les investisseurs (mensuel, basé sur les rapports hebdos)
- L'équipe produit (transparence)

**Processus manuel actuel** :

1. **Collecte de données** (Vendredi 14h-15h30) ⏱️ 1h30
   - Jira : Export manuel vélocité, stories complétées, bugs
   - GitHub : Stats commits, PR mergées, code review
   - Sentry : Nombre d'erreurs production, bugs critiques
   - Google Analytics : Métriques produit (DAU, MAU, temps session)
   - Firebase : Crash reports mobile
   - Intercom : Satisfaction client (NPS, tickets support)

2. **Calcul et analyse** (Vendredi 15h30-17h) ⏱️ 1h30
   - Vélocité sprint : Calcul points complétés vs planifiés
   - Burndown chart : Création manuelle dans Excel
   - Comparaison avec objectifs du trimestre
   - Identification des écarts et tendances
   - Analyse des bloqueurs et risques

3. **Rédaction narrative** (Vendredi 17h-18h30) ⏱️ 1h30
   - Résumé exécutif (3-4 paragraphes)
   - Highlights de la semaine
   - Problèmes rencontrés
   - Actions à venir
   - Recommandations
   - Ton adapté au COMEX (professionnel, synthétique)

4. **Création des slides** (Vendredi 18h30-19h30) ⏱️ 1h
   - PowerPoint : 5-7 slides
   - Graphiques (vélocité, burndown, métriques produit)
   - Mise en page
   - Screenshots si nécessaire

5. **Relecture et envoi** (Vendredi 19h30-20h) ⏱️ 0h30
   - Relecture PO + CTO
   - Corrections
   - Envoi par email + upload Confluence

**Temps total actuel** : **6 heures tous les vendredis** 😰

### Impact

❌ **Stress du vendredi** : Pression pour finir avant le weekend
❌ **Heures supplémentaires** : Régulièrement jusqu'à 20h le vendredi
❌ **Qualité variable** : Quand pressé, analyse moins poussée
❌ **Pas de temps pour rétrospective** : Le vendredi devrait être dédié à la rétro sprint

---

## 3. Les données du Sprint 24 (à utiliser pour l'exercice)

### Données Jira - Sprint 24 (02/01/2026 - 16/01/2026)

**Vue d'ensemble** :
- **Équipe** : 6 développeurs (4 backend, 2 frontend)
- **Durée sprint** : 2 semaines (10 jours ouvrés)
- **Vélocité planifiée** : 55 points
- **Vélocité réalisée** : 48 points (87% de l'objectif)

**Stories complétées** (8 stories) :

| Clé | Titre | Points | Status | Assigné | Notes |
|-----|-------|--------|--------|---------|-------|
| PROD-234 | Ajout filtre date sur dashboard conso | 8 | ✅ Done | Alexandre | Livré J8, specs claires |
| PROD-235 | API v2 pour capteurs température | 13 | ✅ Done | Sophie | Livré J10, complexité sous-estimée |
| PROD-236 | Refonte UI mobile - page alertes | 5 | ✅ Done | Marie | Livré J6, design approuvé rapidement |
| PROD-237 | Optimisation requêtes DB dashboard | 8 | ✅ Done | Alexandre | Livré J9, gain perf +40% |
| PROD-238 | Export CSV données capteurs | 5 | ✅ Done | Thomas | Livré J7, feature demandée par 5 clients |
| PROD-239 | Fix bug calcul économies d'énergie | 3 | ✅ Done | Sophie | Livré J3, bug critique résolu rapidement |
| PROD-240 | Tests E2E page dashboard | 3 | ✅ Done | Lucas (QA) | Livré J10, couverture 85% |
| PROD-241 | Documentation API v2 | 3 | ✅ Done | Sophie | Livré J10, doc complète OpenAPI |

**Stories non complétées** (3 stories reportées au Sprint 25) :

| Clé | Titre | Points | Status | Raison |
|-----|-------|--------|--------|--------|
| PROD-242 | Intégration Stripe webhooks | 8 | 🔄 In Progress | Bloqué par validation Stripe (délai 3 jours) |
| PROD-243 | Notifications push mobile | 5 | 🔄 In Progress | Dépendance avec PROD-235, démarré tard |
| PROD-244 | A/B test page pricing | 3 | ⏸️ To Do | Déprioritisé pour bugs critiques |

**Bugs traités** :
- 12 bugs fermés (dont 3 critiques, 9 mineurs)
- 2 bugs critiques ouverts en fin de sprint (seront dans Sprint 25)

**Vélocité historique** (6 derniers sprints) :
- Sprint 18 : 42 points
- Sprint 19 : 45 points
- Sprint 20 : 52 points
- Sprint 21 : 50 points
- Sprint 22 : 48 points
- Sprint 23 : 51 points
- Sprint 24 : 48 points (actuel)
- **Moyenne** : 48 points
- **Tendance** : Stable

---

### Données GitHub - Sprint 24

**Activité code** :
- **Commits** : 127 commits (6 devs)
- **Pull Requests** :
  - Créées : 23 PR
  - Mergées : 21 PR
  - Fermées sans merge : 2 PR (obsolètes)
  - En attente : 0 PR (bonne hygiène !)
- **Code review** :
  - Temps moyen de review : 4 heures (objectif : <6h) ✅
  - 100% des PR reviewées par au moins 2 personnes ✅
- **Tests** :
  - Couverture de tests : 78% (+2% vs Sprint 23) ✅
  - Tests unitaires : 1 234 tests (100% pass)
  - Tests E2E : 87 tests (2 flaky tests identifiés)

**Hotfixes en production** :
- 1 hotfix déployé (bug critique PROD-239 résolu en 3h)

---

### Données Sentry - Erreurs production (Sprint 24)

**Erreurs totales** : 1 247 erreurs (vs 1 856 Sprint 23 → -33% ✅)

**Top 3 des erreurs** :

1. **TypeError: Cannot read property 'temperature' of undefined** (Dashboard)
   - Occurrences : 456
   - Utilisateurs impactés : 23
   - Résolu : ✅ Oui (PROD-239)

2. **API timeout - GET /api/sensors** (Backend)
   - Occurrences : 302
   - Utilisateurs impactés : 45
   - Résolu : ✅ Oui (PROD-237 - optimisation DB)

3. **ChunkLoadError: Loading chunk failed** (Mobile App)
   - Occurrences : 189
   - Utilisateurs impactés : 12
   - Résolu : ❌ Non (investigué, pas encore fixé)

**Erreurs critiques** : 2 nouvelles erreurs critiques détectées fin de sprint :
- Crash au paiement (2 occurrences, 2 utilisateurs) → Priorité Sprint 25
- Export CSV vide si >10 000 lignes (1 occurrence, 1 utilisateur) → Priorité Sprint 25

---

### Données Google Analytics - Métriques produit (Sprint 24)

**Utilisateurs** :
- **DAU (Daily Active Users)** : Moyenne 2 340 users/jour (+8% vs Sprint 23) 🔥
- **MAU (Monthly Active Users)** : 8 920 users (+5% vs mois précédent)
- **Nouveaux utilisateurs** : 287 (+12%)

**Engagement** :
- **Temps de session moyen** : 12 min 34s (-2% vs Sprint 23)
- **Pages par session** : 5.2 pages (+5%)
- **Taux de rebond** : 18% (stable)

**Fonctionnalités les plus utilisées** :
1. Dashboard temps réel : 78% des sessions
2. Historique consommation : 45% des sessions
3. Alertes personnalisées : 32% des sessions
4. Rapports économies : 28% des sessions

**Conversion** :
- **Trial → Payant** : 23% (objectif : 25%, -2 points 😐)
- **Churn** : 3.2% (objectif : <5%) ✅

---

### Données Intercom - Support client (Sprint 24)

**Tickets** :
- **Total tickets** : 78 tickets (vs 92 Sprint 23 → -15% ✅)
- **Temps de réponse moyen** : 2h15 (objectif : <3h) ✅
- **Temps de résolution moyen** : 8h30 (objectif : <12h) ✅
- **Satisfaction (CSAT)** : 4.6/5 (+0.2 vs Sprint 23) 🔥

**Top 3 des demandes** :
1. "Comment configurer les alertes de surconsommation ?" (18 tickets) → Besoin de doc
2. "Bug export CSV" (12 tickets) → Résolu par PROD-238 ✅
3. "Demande de nouvelles fonctionnalités IA" (8 tickets) → Backlog produit

**NPS (Net Promoter Score)** : 48 (+3 vs Sprint 23) 🔥
- Promoteurs (9-10) : 58%
- Passifs (7-8) : 32%
- Détracteurs (0-6) : 10%

---

### Données Firebase - Mobile App (Sprint 24)

**Crashes** :
- **Crash-free users** : 99.1% (objectif : >99%) ✅
- **Total crashes** : 23 crashes (vs 34 Sprint 23 → -32%) ✅

**Performance** :
- **App startup time** : 1.8s (objectif : <2s) ✅
- **Screen rendering time** : 16ms (60 FPS) ✅

---

### Contexte additionnel - Sprint 24

**Événements marquants** :

✅ **Succès** :
- Résolution rapide du bug critique PROD-239 (3h seulement)
- Optimisation DB a amélioré perf de 40% (PROD-237)
- Feature export CSV très attendue par clients livrée (PROD-238)
- 3 nouveaux clients signés pendant le sprint (retour commercial positif)

⚠️ **Challenges** :
- Bloqueur externe Stripe a retardé PROD-242 (hors de notre contrôle)
- Dépendances entre stories mal anticipées (PROD-243 dépendait de PROD-235)
- 2 devs en formation 2 jours (impact sur vélocité)

🔴 **Risques identifiés pour Sprint 25** :
- 2 bugs critiques en production (paiement + export CSV)
- Dépendance Stripe toujours en validation
- Vacances prévues : 1 dev absent la semaine 2 (capacité -15%)

**Roadmap Q1 2026** :
- Sprint 25-26 : Finir intégration paiements + notifications push
- Sprint 27-28 : Lancement module IA prédictive (objectif fin Q1)
- Objectif Q1 : 150 clients (+25%)

---

## 4. Mission : Automatiser la génération du rapport

### Objectif de l'exercice

Vous devez utiliser **ChatGPT ou Claude** pour générer automatiquement un rapport de sprint complet et professionnel à partir des données ci-dessus.

**Livrables attendus** :

1. **Prompt optimisé** : Un prompt réutilisable pour tous les sprints
2. **Rapport généré** : Le rapport complet pour Sprint 24 (format markdown ou texte)
3. **Slides de présentation** (optionnel) : 5-7 slides PowerPoint/Google Slides

**Gain attendu** : Réduire de 6h à 1h (réduction de 83%) ⚡

---

## 5. Template de prompt à créer

### Structure recommandée du prompt

Votre prompt doit contenir :

1. **Rôle et contexte** : Qui est l'IA, pour qui écrit-elle
2. **Données d'entrée** : Toutes les métriques du sprint
3. **Format attendu** : Structure du rapport
4. **Ton et style** : Professionnel, adapté au COMEX
5. **Instructions spécifiques** : Ce qu'il faut analyser et mettre en avant

### Exemple de structure de prompt (à compléter et adapter)

```
Tu es un Product Manager expert en reporting de sprint agile.

Contexte :
- Entreprise : GreenTech (startup CleanTech, plateforme SaaS optimisation énergétique)
- Public : COMEX (CEO, CTO, Head of Product)
- Sprint : Sprint 24 (02/01/2026 - 16/01/2026)
- Équipe : 6 développeurs

Données du sprint :

[JIRA]
Vélocité planifiée : 55 points
Vélocité réalisée : 48 points (87%)
Stories complétées : 8/11
Stories reportées : 3
Bugs fermés : 12 (dont 3 critiques)
[Détailler toutes les données Jira, GitHub, Sentry, Analytics, etc.]

[GITHUB]
[...]

[SENTRY]
[...]

[GOOGLE ANALYTICS]
[...]

[INTERCOM]
[...]

[FIREBASE]
[...]

Événements marquants :
- [Succès]
- [Challenges]
- [Risques Sprint 25]

Mission :
Génère un rapport de sprint hebdomadaire professionnel avec cette structure :

# Rapport de Sprint 24 - GreenTech
**Période** : 02/01/2026 - 16/01/2026
**Rédigé par** : [Votre nom], Product Manager
**Date** : 16/01/2026

## 1. Executive Summary
[Résumé en 3-4 paragraphes maximum : performance globale, highlights, challenges, next steps]

## 2. Métriques Clés

### 2.1 Vélocité et Livraison
[Tableau récapitulatif : planifié vs réalisé, taux de complétion, vélocité historique]
[Analyse : tendances, écarts, explications]

### 2.2 Qualité Produit
[Bugs, erreurs production, couverture tests, crash-free rate]
[Analyse : évolution, actions correctives]

### 2.3 Métriques Utilisateurs
[DAU, MAU, engagement, conversion, NPS]
[Analyse : croissance, tendances, insights]

## 3. Stories Livrées (Highlights)
[Top 3-5 stories avec impact business]

## 4. Challenges et Bloqueurs
[Problèmes rencontrés, impact, actions prises ou à prendre]

## 5. Risques et Actions Sprint 25
[Risques identifiés, priorités, plan d'action]

## 6. Roadmap Q1 2026
[Avancement vs objectifs trimestriels]

## 7. Recommandations
[2-3 recommandations stratégiques pour le COMEX]

---

Instructions spécifiques :
- Ton professionnel et synthétique (adapté à un COMEX)
- Mettre en avant les succès ET les challenges (transparence)
- Analyser les tendances (pas juste lister les chiffres)
- Fournir du contexte et des explications pour les écarts
- Recommandations actionnables et prioritaires
- Utiliser des indicateurs visuels : ✅ ⚠️ 🔥 📈 📉 (avec modération)
- Longueur : 2-3 pages (lisible en 5-10 minutes)
```

---

## 6. Instructions détaillées

### Étape 1 : Collecter et organiser les données (5 min)

1. Copiez toutes les données du Sprint 24 ci-dessus
2. Organisez-les par catégorie (Jira, GitHub, Sentry, etc.)
3. Identifiez les données clés à mettre en avant

### Étape 2 : Rédiger le prompt (15 min)

1. Commencez par le rôle et le contexte
2. Copiez-collez toutes les données du sprint
3. Spécifiez le format attendu (structure du rapport)
4. Ajoutez des instructions sur le ton et le style
5. Précisez ce que vous voulez voir analysé

**💡 Astuce** : Plus le prompt est détaillé, meilleur sera le rapport !

### Étape 3 : Générer le rapport avec l'IA (2 min)

1. Ouvrez ChatGPT (GPT-4 recommandé) ou Claude
2. Collez votre prompt
3. Lancez la génération
4. Attendez le rapport complet

### Étape 4 : Affiner et itérer (15 min)

1. Lisez le rapport généré
2. Identifiez ce qui manque ou ce qui est trop verbeux
3. Affinez le prompt et re-générez

**Exemples d'affinements** :

```
Le rapport est trop long, réduis à 2 pages maximum.
```

```
Ajoute un tableau comparatif des 6 derniers sprints pour la vélocité.
```

```
Mets plus l'accent sur les métriques utilisateurs (DAU, NPS).
```

```
Le ton est trop technique, adapte pour un public business (CEO).
```

### Étape 5 : Générer les slides (optionnel - 10 min)

**Option A : Demander à l'IA de générer le contenu des slides**

```
Maintenant, crée le contenu de 6 slides PowerPoint basées sur ce rapport :

Slide 1 : Titre + Executive Summary (3 bullets max)
Slide 2 : Vélocité et Livraison (graphique + 2 insights)
Slide 3 : Qualité Produit (métriques bugs, tests, production)
Slide 4 : Croissance Utilisateurs (DAU, MAU, NPS, conversion)
Slide 5 : Challenges et Risques Sprint 25
Slide 6 : Recommandations et Next Steps

Pour chaque slide :
- Titre clair
- Contenu concis (bullets)
- Suggestion de visuel (graphique, tableau, icône)
- Messages clés à retenir
```

**Option B : Utiliser un outil IA de génération de slides**

- [Gamma](https://gamma.app) : Génération automatique de slides à partir de texte
- [Beautiful.ai](https://www.beautiful.ai) : Templates IA
- [Tome](https://tome.app) : Storytelling IA

---

## 7. Critères d'évaluation

Votre livrable sera évalué sur :

✅ **Qualité du prompt** (précis, complet, réutilisable)
✅ **Qualité du rapport généré** (professionnel, synthétique, pertinent)
✅ **Pertinence de l'analyse** (pas juste des chiffres, mais des insights)
✅ **Ton adapté** (COMEX, pas trop technique)
✅ **Complétude** (toutes les sections présentes)
✅ **Réutilisabilité** (prompt fonctionne pour Sprint 25, 26, etc. avec nouvelles données)

---

## 8. Exemple de rapport attendu (extrait)

```markdown
# Rapport de Sprint 24 - GreenTech
**Période** : 02/01/2026 - 16/01/2026
**Rédigé par** : [Votre nom], Product Manager
**Date** : 16/01/2026

---

## 1. Executive Summary

Le Sprint 24 affiche une **performance solide** avec **87% de vélocité** (48 points réalisés sur 55 planifiés).
Malgré 3 stories reportées, l'équipe a livré **8 fonctionnalités** dont plusieurs à **fort impact business** :
optimisation DB (+40% de performance), export CSV très demandé par les clients, et résolution rapide
d'un bug critique en 3h.

**Côté utilisateurs**, la **croissance s'accélère** : **+8% de DAU**, **NPS à 48** (+3 points), et
**3 nouveaux clients signés**. La qualité produit s'améliore également avec **-33% d'erreurs en production**
et un **crash-free rate de 99.1%**.

Deux **bloqueurs externes** ont impacté le sprint : validation Stripe (hors de notre contrôle) et
dépendances entre stories mal anticipées. **2 bugs critiques** identifiés en fin de sprint nécessitent
une attention immédiate au Sprint 25.

Le Sprint 25 sera **légèrement plus contraint** (-15% de capacité avec 1 dev en vacances) mais nous
maintenons le cap vers l'objectif Q1 : **lancement du module IA prédictive** et **150 clients**.

---

## 2. Métriques Clés

### 2.1 Vélocité et Livraison

| Métrique | Sprint 24 | Objectif | Écart | Tendance |
|----------|-----------|----------|-------|----------|
| Vélocité réalisée | 48 points | 55 points | -7 (-13%) | 📉 Stable (moyenne : 48) |
| Stories complétées | 8/11 | 11/11 | -3 stories | ⚠️ |
| Taux de complétion | 87% | 100% | -13% | ⚠️ |
| Bugs fermés | 12 | N/A | - | ✅ Dont 3 critiques |

**Analyse** :
- Vélocité conforme à la moyenne historique (48 points)
- Écart de 13% principalement dû à 2 facteurs :
  1. **Bloqueur externe Stripe** : PROD-242 (8 points) en attente de validation (hors de notre contrôle)
  2. **Dépendances mal anticipées** : PROD-243 (5 points) dépendait de PROD-235, démarré tard
- **Actions** : Améliorer l'identification des dépendances au planning poker ✅

[...]

## 3. Stories Livrées (Highlights)

### 🔥 PROD-237 : Optimisation requêtes DB dashboard
**Impact** : +40% de performance sur le dashboard (chargement de 4s → 2.4s)
**Business** : Améliore l'expérience utilisateur, réduit le taux de rebond
**Feedback clients** : 5 clients ont spontanément signalé l'amélioration ✅

### 🔥 PROD-238 : Export CSV données capteurs
**Impact** : Feature demandée par 5 clients
**Business** : Permet aux clients d'analyser leurs données dans Excel/outils BI
**Adoption** : 23 exports réalisés dans les 3 premiers jours post-déploiement 📈

### ✅ PROD-239 : Fix bug critique calcul économies d'énergie
**Impact** : Résolu en 3h (excellent temps de réaction !)
**Business** : Bug affectait 23 utilisateurs, calcul d'économies incorrect
**Qualité** : Hotfix déployé sans régression ✅

[...]
```

---

## 9. Astuces pour optimiser le prompt

### Astuce 1 : Structurer les données en JSON ou tableau

Au lieu de :
```
Vélocité planifiée 55 points, réalisée 48 points
```

Préférez :
```json
{
  "velocite": {
    "planifiee": 55,
    "realisee": 48,
    "taux_completion": 0.87
  }
}
```

→ L'IA analyse mieux les données structurées !

### Astuce 2 : Donner des exemples de style

Ajoutez au prompt :
```
Exemple de phrase que j'attends :
"Le Sprint 24 affiche une performance solide avec 87% de vélocité (48 points réalisés sur 55 planifiés)."

Exemple de phrase à ÉVITER :
"L'équipe a fait un super travail et tout le monde était content."
```

### Astuce 3 : Demander une validation intermédiaire

```
Avant de rédiger le rapport complet, génère d'abord un plan avec :
1. Les 3 messages clés à faire passer au COMEX
2. Les métriques à mettre en avant
3. Les risques critiques à signaler

Attends ma validation avant de continuer.
```

### Astuce 4 : Itérer avec des feedbacks

Après la première génération :
```
Le rapport est bon, mais améliore ces points :
- Réduis l'Executive Summary à 3 paragraphes (actuellement 5)
- Ajoute un graphique de vélocité sur 6 sprints
- Insiste plus sur les risques Sprint 25 (c'est critique)
```

---

## 10. Aller plus loin : Automatisation complète

### Niveau avancé : Workflow end-to-end

**Étape 1 : Collecte automatique** (Zapier/Make)
- API calls vers Jira, GitHub, Sentry, Analytics (toutes les nuits du vendredi)
- Consolidation dans Google Sheets

**Étape 2 : Génération automatique** (OpenAI API)
- Script Python lit Google Sheets
- Génère prompt dynamique avec les données
- Appelle OpenAI API
- Récupère le rapport généré

**Étape 3 : Distribution** (Zapier/Make)
- Génère PDF du rapport
- Upload sur Confluence
- Envoi email au COMEX
- Post dans Slack #product-updates

**Résultat** : **0 minute de travail manuel** le vendredi ! 🚀

---

## 11. Livrable de l'exercice

### Ce que vous devez rendre

1. **Prompt optimisé** (markdown) : Votre prompt final réutilisable
2. **Rapport généré** (markdown ou PDF) : Le rapport complet du Sprint 24
3. **Slides** (optionnel - PowerPoint/PDF) : 5-7 slides de présentation
4. **Réflexion** (5-10 phrases) :
   - Combien de temps avez-vous gagné ?
   - Qualité du rapport IA vs ce que vous auriez fait manuellement ?
   - Ajustements nécessaires après génération ?
   - Autres rapports que vous pourriez automatiser ?

---

**Bon courage ! L'automatisation du reporting va vous libérer tous vos vendredis après-midi ! 🎉**
