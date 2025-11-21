# Exercices Module 4 : Prendre de meilleures décisions avec l'IA

**Durée totale** : 1 heure (3 × 20 minutes)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : Accès à [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)

---

## 🎯 Objectif pédagogique

Maîtriser **3 frameworks de décision** assistés par IA pour prendre des décisions stratégiques mieux informées et plus rapides :
- **Framework RICE** : Prioriser les features/initiatives
- **Framework SWOT** : Analyser les décisions stratégiques
- **Analyse de scénarios** : Anticiper les conséquences

**Principe** : L'IA ne décide pas à votre place, elle vous aide à analyser objectivement et structurer votre réflexion.

---

## 🎯 Exercice 1 : Priorisation RICE automatisée

**Durée** : 20 minutes  
**Framework** : RICE (Reach × Impact × Confidence / Effort)  
**Objectif** : Utiliser l'IA pour calculer les scores RICE et prioriser des features

### Le problème

Vous êtes PO d'une **plateforme SaaS de gestion de projet**. Vous avez **6 features candidates** pour le prochain trimestre, mais **vous ne pouvez en développer que 3** (contrainte de capacité).

**Processus manuel classique** :
- Réunion d'équipe de 2-3 heures
- Débats subjectifs sans données
- Décisions basées sur "intuition" ou "celui qui parle le plus fort"
- Frustrations et manque de clarté

**⏱️ Temps nécessaire** : 2-3 heures + frustrations

---

### ✅ Mission : Utiliser le framework RICE avec l'IA

#### **Étape 1** : Comprendre le framework RICE (3 min)

**Formule** : `Score RICE = (Reach × Impact × Confidence) / Effort`

**Composantes** :
- **Reach** : Nombre d'utilisateurs/clients touchés par trimestre
- **Impact** : Impact par utilisateur (échelle : 0.25 = Minimal, 0.5 = Faible, 1 = Moyen, 2 = Élevé, 3 = Massif)
- **Confidence** : Niveau de confiance dans vos estimations (en %, ex: 80% = 0.8)
- **Effort** : Personnes-mois nécessaires (ex: 2 devs × 1 mois = 2)

**Plus le score RICE est élevé, plus la feature est prioritaire.**

---

#### **Étape 2** : Analyser les 6 features candidates (2 min)

Voici vos 6 features candidates :

**Feature A - Intégration Slack**  
Permettre aux utilisateurs de recevoir des notifications Slack pour les tâches importantes.

**Feature B - Mode hors-ligne**  
Permettre de consulter et éditer les tâches sans connexion internet.

**Feature C - Templates de projets**  
Bibliothèque de 20+ templates prêts à l'emploi (Agile, Waterfall, Marketing, etc.).

**Feature D - Dashboard exécutif**  
Vue consolidée pour les dirigeants avec KPIs et reporting avancé.

**Feature E - Intégration Jira (bidirectionnelle)**  
Synchronisation complète avec Jira pour les équipes hybrides.

**Feature F - Gestion de ressources**  
Module de planification et allocation des ressources (personnes, matériel).

**Contexte produit** :
- 5000 utilisateurs actifs mensuels
- Clients principaux : PMEs tech (50-200 employés)
- Équipe dev : 4 développeurs full-stack

---

#### **Étape 3** : Utiliser l'IA pour calculer le score RICE (12 min)

**Prompt à utiliser** :

```
Tu es un expert en priorisation produit utilisant le framework RICE.

Contexte du produit :
- Plateforme SaaS de gestion de projet
- 5000 utilisateurs actifs mensuels
- Clients cibles : PMEs tech (50-200 employés)
- Équipe dev : 4 développeurs full-stack

Voici 6 features candidates pour le prochain trimestre :

Feature A - Intégration Slack
Permettre aux utilisateurs de recevoir des notifications Slack pour les tâches importantes.

Feature B - Mode hors-ligne
Permettre de consulter et éditer les tâches sans connexion internet.

Feature C - Templates de projets
Bibliothèque de 20+ templates prêts à l'emploi (Agile, Waterfall, Marketing, etc.).

Feature D - Dashboard exécutif
Vue consolidée pour les dirigeants avec KPIs et reporting avancé.

Feature E - Intégration Jira (bidirectionnelle)
Synchronisation complète avec Jira pour les équipes hybrides.

Feature F - Gestion de ressources
Module de planification et allocation des ressources (personnes, matériel).

Pour CHAQUE feature, estime :

1. REACH (nombre d'utilisateurs touchés / trimestre)
   - Justifie ton estimation

2. IMPACT (échelle : 0.25 = Minimal, 0.5 = Faible, 1 = Moyen, 2 = Élevé, 3 = Massif)
   - Justifie ton choix

3. CONFIDENCE (0.5 = 50%, 0.8 = 80%, 1.0 = 100%)
   - Justifie ton niveau de confiance

4. EFFORT (personnes-mois)
   - Décompose l'estimation (backend, frontend, QA, etc.)

5. SCORE RICE = (Reach × Impact × Confidence) / Effort

Fournis le résultat sous forme de TABLEAU avec le classement final.
Recommande les 3 features à développer en priorité.
```

---

#### **Étape 4** : Analyser les résultats (3 min)

**Résultat attendu** (exemple) :

| Feature | Reach | Impact | Confidence | Effort | **Score RICE** | Rang |
|---------|-------|--------|------------|--------|----------------|------|
| **C - Templates** | 4000 | 2.0 | 0.8 | 1.5 | **4267** | 🥇 1 |
| **A - Slack** | 3500 | 1.0 | 0.9 | 0.5 | **6300** | 🥇 1 |
| **D - Dashboard** | 1500 | 2.0 | 0.7 | 2.0 | **1050** | 🥈 3 |
| **E - Jira** | 1000 | 1.0 | 0.6 | 3.0 | **200** | 4 |
| **B - Hors-ligne** | 2000 | 0.5 | 0.5 | 4.0 | **125** | 5 |
| **F - Ressources** | 800 | 2.0 | 0.4 | 6.0 | **107** | 6 |

**Recommandation IA** : Développer les features **A (Slack), C (Templates), D (Dashboard)** en priorité.

**Questions de validation** :
- ✅ Les estimations sont-elles cohérentes avec votre contexte ?
- ✅ Les justifications sont-elles pertinentes ?
- ✅ Y a-t-il des surprises dans le classement ?

---

#### **Étape 5** : Mesurer le gain (2 min)

| Critère | Sans IA (débat) | Avec IA (RICE) | Gain |
|---------|-----------------|----------------|------|
| **Temps de décision** | 2-3 heures | 15 min | **90%** |
| **Objectivité** | ⚠️ Subjective | ✅ Data-driven | 100% |
| **Consensus équipe** | 6/10 (débats) | 9/10 (chiffres clairs) | +50% |
| **Traçabilité** | ❌ "On a décidé" | ✅ Scores documentés | 100% |
| **Biais réduits** | ⚠️ Biais forts | ✅ Analyse objective | 80% |

**💡 Leçon clé** : Le framework RICE + IA transforme un débat subjectif en décision **data-driven et traçable**.

---

### 🚀 Aller plus loin

**Variantes du framework RICE** :

- **ICE** (Impact × Confidence × Ease) : Plus simple, pour des décisions rapides
- **WSJF** (Weighted Shortest Job First) : Pour Agile/SAFe
- **Value vs Effort** : Matrice 2×2 simplifiée

**Créez votre bibliothèque de prompts** pour vos priorisations récurrentes (backlog, roadmap, initiatives).

---

## 🔍 Exercice 2 : Analyse SWOT enrichie par IA

**Durée** : 20 minutes  
**Framework** : SWOT (Strengths, Weaknesses, Opportunities, Threats)  
**Objectif** : Analyser une décision stratégique de manière structurée

### Le problème

Vous êtes PO d'une **application web de gestion de tâches**. Vos stakeholders vous demandent d'évaluer l'opportunité de **lancer une application mobile native** (iOS + Android).

**Décision stratégique** : Faut-il investir dans le développement d'apps mobiles natives ?

**Enjeux** :
- 💰 Budget estimé : 150k€
- ⏱️ Délai estimé : 6-9 mois
- 👥 Ressources : Nécessite 2 devs mobiles (recrutement ou formation)
- 📊 30% des utilisateurs demandent une app mobile

**Sans analyse structurée**, vous pourriez :
- Vous lancer par effet de mode (biais de disponibilité)
- Ignorer des risques critiques
- Ne pas considérer toutes les alternatives

---

### ✅ Mission : Générer une analyse SWOT complète avec l'IA

#### **Étape 1** : Comprendre le framework SWOT (2 min)

Le SWOT analyse **4 dimensions** :

```
┌─────────────────┬─────────────────┐
│   STRENGTHS     │   WEAKNESSES    │
│   (Forces)      │   (Faiblesses)  │
│                 │                 │
│ Facteurs        │ Facteurs        │
│ INTERNES        │ INTERNES        │
│ POSITIFS        │ NÉGATIFS        │
├─────────────────┼─────────────────┤
│  OPPORTUNITIES  │    THREATS      │
│  (Opportunités) │   (Menaces)     │
│                 │                 │
│ Facteurs        │ Facteurs        │
│ EXTERNES        │ EXTERNES        │
│ POSITIFS        │ NÉGATIFS        │
└─────────────────┴─────────────────┘
```

**Interne** = Sous votre contrôle (équipe, produit, tech)  
**Externe** = Hors de votre contrôle (marché, concurrence, tendances)

---

#### **Étape 2** : Utiliser l'IA pour générer l'analyse SWOT (13 min)

**Prompt à utiliser** :

```
Tu es un expert en stratégie produit.

Décision à analyser :
Lancer une application mobile native (iOS + Android) pour notre produit de gestion de tâches, actuellement disponible uniquement en web.

Contexte du produit :
- Application web de gestion de tâches (type Todoist/Asana)
- 8000 utilisateurs actifs mensuels (principalement desktop/web)
- Budget estimé app mobile : 150k€
- Délai estimé : 6-9 mois
- Nécessite recrutement de 2 devs mobiles
- 30% des users demandent une app mobile
- Concurrents directs ont déjà des apps natives performantes

Marché :
- Marché saturé (Todoist, Asana, Monday, Notion, etc.)
- Tendance forte au mobile-first
- Utilisateurs habitués à des apps natives polies

Équipe :
- 6 développeurs web (React)
- Aucune expertise mobile native actuelle
- Bonne culture produit et UX

Génère une analyse SWOT COMPLÈTE et détaillée :

Pour chaque quadrant (STRENGTHS, WEAKNESSES, OPPORTUNITIES, THREATS), fournis :
- 5 à 7 éléments pertinents
- Justification de chaque élément
- Impact potentiel (Faible/Moyen/Élevé)

Ensuite, fournis :
1. SYNTHÈSE : Recommandation claire (GO / NO-GO / GO avec conditions)
2. ACTIONS PRIORITAIRES pour maximiser forces et opportunités
3. PLAN DE MITIGATION pour faiblesses et menaces
4. ALTERNATIVES à considérer (ex: PWA, React Native, etc.)
```

---

#### **Étape 3** : Analyser les résultats et prendre une décision (4 min)

**Résultat attendu** (exemple partiel) :

**📊 STRENGTHS (Forces internes)** :
- ✅ Base utilisateurs existante engagée (8000 MAU)
- ✅ Forte demande client (30% = 2400 users)
- ✅ Équipe produit expérimentée
- ✅ Budget disponible (150k€)
- ...

**⚠️ WEAKNESSES (Faiblesses internes)** :
- ❌ Aucune expertise mobile native (risque qualité)
- ❌ Recrutement de devs mobiles difficile/coûteux
- ❌ Rallongement du time-to-market (6-9 mois)
- ❌ Coût de maintenance double (web + mobile)
- ...

**🚀 OPPORTUNITIES (Opportunités externes)** :
- 💡 Marché mobile en croissance
- 💡 Différenciation vs concurrents PWA
- 💡 Nouveaux segments clients (mobile-only users)
- ...

**⚡ THREATS (Menaces externes)** :
- 🚨 Concurrents déjà bien établis sur mobile
- 🚨 Évolution rapide des plateformes (iOS/Android)
- 🚨 Coûts récurrents App Store/Play Store
- ...

**SYNTHÈSE IA** :  
> "Recommandation : **GO avec conditions**. L'opportunité est réelle (30% de demande) mais les risques techniques sont élevés. Privilégier une approche **React Native** pour capitaliser sur l'expertise web existante, réduire le time-to-market, et limiter les coûts de maintenance. Prévoir un MVP en 3-4 mois avec 2-3 features clés."

**ALTERNATIVES** :
1. **React Native** : Réutiliser compétences React (recommandé)
2. **PWA** : App web progressive (moindre coût, mais UX mobile limitée)
3. **No-code** : FlutterFlow / Bubble (prototype rapide)

---

#### **Étape 4** : Mesurer le gain (1 min)

| Critère | Sans SWOT (intuition) | Avec SWOT IA | Gain |
|---------|----------------------|--------------|------|
| **Couverture analyse** | 40% (on oublie des risques) | 95% | +137% |
| **Temps d'analyse** | 1-2 jours | 15 min | **95%** |
| **Alternatives considérées** | 1 (native) | 3+ (native, RN, PWA) | +200% |
| **Confiance décision** | 5/10 | 8/10 | +60% |

---

### 💡 Leçon clé

Le **SWOT + IA** force une **analyse structurée 360°** (interne/externe, positif/négatif) qui évite les angle morts et les biais de confirmation.

**Appliquez le SWOT pour** :
- Décisions stratégiques (pivot, lancement produit)
- Choix technologiques (architecture, stack)
- Partenariats et acquisitions
- Gestion de crise

---

## 🔮 Exercice 3 : Modélisation de scénarios "What-If"

**Durée** : 20 minutes  
**Framework** : Analyse de scénarios (Optimiste / Réaliste / Pessimiste)  
**Objectif** : Anticiper les conséquences d'une décision en modélisant plusieurs futurs possibles

### Le problème

Vous êtes PM d'une **startup SaaS B2B**. Vous devez choisir entre **2 stratégies de growth** pour les 12 prochains mois :

**Stratégie A : Focus ACQUISITION**  
- Investir massivement en marketing (200k€) pour acquérir de nouveaux clients
- Objectif : +300% de nouveaux clients
- Réduire le budget R&D produit de 30%

**Stratégie B : Focus RÉTENTION**  
- Investir en amélioration produit pour réduire le churn
- Objectif : Réduire le churn de 8% à 3%
- Budget marketing réduit à 50k€

**Données actuelles** :
- 500 clients (MRR moyen : 200€/client = 100k€ MRR total)
- Churn : 8% mensuel
- Coût d'acquisition client (CAC) : 800€
- Lifetime Value (LTV) : 2400€ (12 mois en moyenne)

**Sans modélisation** : Vous choisissez "au feeling" et découvrez 6 mois plus tard que c'était la mauvaise décision.

---

### ✅ Mission : Modéliser 3 scénarios pour CHAQUE stratégie

#### **Étape 1** : Comprendre l'analyse de scénarios (2 min)

Pour chaque décision stratégique, on modélise **3 scénarios** :

1. **Scénario OPTIMISTE** : Tout se passe bien (probabilité ~20%)
2. **Scénario RÉALISTE** : Résultats attendus (probabilité ~60%)
3. **Scénario PESSIMISTE** : Tout va mal (probabilité ~20%)

**Objectif** : Comparer la **valeur attendue** de chaque stratégie et identifier les **signaux à surveiller**.

---

#### **Étape 2** : Utiliser l'IA pour modéliser les scénarios (15 min)

**Prompt à utiliser** :

```
Tu es un expert en stratégie SaaS B2B.

Contexte du produit :
- Startup SaaS B2B
- 500 clients actuels
- MRR moyen : 200€/client = 100k€ MRR total
- Churn actuel : 8% mensuel
- CAC : 800€
- LTV : 2400€ (12 mois en moyenne)

Décision à modéliser sur 12 mois :

STRATÉGIE A : Focus ACQUISITION
- Budget marketing : 200k€
- Objectif : +300% nouveaux clients (1500 nouveaux clients)
- Budget R&D produit : -30% (risque dégradation produit)

STRATÉGIE B : Focus RÉTENTION
- Budget amélioration produit : 150k€
- Objectif : Réduire churn de 8% à 3% mensuel
- Budget marketing : 50k€

Pour CHACUNE des 2 stratégies, modélise 3 SCÉNARIOS (Optimiste, Réaliste, Pessimiste) :

Pour chaque scénario, calcule sur 12 mois :
1. Nombre de clients finaux
2. MRR final
3. Croissance MRR (%)
4. Churn moyen sur la période
5. CAC / LTV ratio
6. Rentabilité estimée

Ensuite :
- Calcule la VALEUR ATTENDUE de chaque stratégie
  (Valeur attendue = 0.2 × Optimiste + 0.6 × Réaliste + 0.2 × Pessimiste)
- Fournis une RECOMMANDATION avec justification
- Liste les SIGNAUX À SURVEILLER pour détecter si on dévie du scénario réaliste
- Identifie les HYPOTHÈSES CRITIQUES pour chaque stratégie

Présente sous forme de TABLEAUX clairs et comparatifs.
```

---

#### **Étape 3** : Analyser les résultats (2 min)

**Résultat attendu** (exemple simplifié) :

### STRATÉGIE A : Focus ACQUISITION

| Scénario | Probabilité | Clients finaux | MRR final | Croissance MRR | Churn | Résultat |
|----------|-------------|----------------|-----------|----------------|-------|----------|
| **Optimiste** | 20% | 1800 | 360k€ | +260% | 6% | 🔥 Excellent |
| **Réaliste** | 60% | 1200 | 180k€ | +80% | 9% | ✅ Bon |
| **Pessimiste** | 20% | 600 | 90k€ | -10% | 12% | ❌ Échec |

**Valeur attendue** : `0.2×360k + 0.6×180k + 0.2×90k = 198k€ MRR`

---

### STRATÉGIE B : Focus RÉTENTION

| Scénario | Probabilité | Clients finaux | MRR final | Croissance MRR | Churn | Résultat |
|----------|-------------|----------------|-----------|----------------|-------|----------|
| **Optimiste** | 20% | 650 | 140k€ | +40% | 2% | ✅ Très stable |
| **Réaliste** | 60% | 580 | 120k€ | +20% | 4% | ✅ Stable |
| **Pessimiste** | 20% | 480 | 95k€ | -5% | 6% | ⚠️ Stagnation |

**Valeur attendue** : `0.2×140k + 0.6×120k + 0.2×95k = 119k€ MRR`

---

### COMPARAISON

| Critère | Stratégie A (Acquisition) | Stratégie B (Rétention) | Gagnant |
|---------|---------------------------|-------------------------|---------|
| **Valeur attendue** | 198k€ | 119k€ | 🏆 **A** |
| **Risque échec** | ⚠️ Élevé (scénario pessimiste = -10%) | ✅ Faible | B |
| **Scalabilité** | 🚀 Forte | ⚠️ Limitée | A |
| **Stabilité** | ❌ Variable | ✅ Stable | B |

**RECOMMANDATION IA** :  
> "**Stratégie A recommandée** si vous acceptez le risque. Valeur attendue supérieure (+79k€ MRR), mais risque d'échec réel. **Plan de mitigation** : Surveiller le churn mensuellement. Si churn > 10% après 3 mois, pivoter vers stratégie B hybride."

**SIGNAUX À SURVEILLER** :
- 📊 Churn mensuel (alerte si > 10%)
- 💰 CAC réel vs estimé (alerte si > 1000€)
- 📈 Taux de conversion marketing (alerte si < 2%)
- 😊 NPS clients (alerte si < 30)

---

#### **Étape 4** : Mesurer le gain (1 min)

| Critère | Sans scénarios | Avec scénarios IA | Gain |
|---------|----------------|-------------------|------|
| **Risques identifiés** | ❌ "On verra bien" | ✅ 3 scénarios chiffrés | 100% |
| **Hypothèses testées** | 1 (optimiste) | 3 (optimiste/réaliste/pessimiste) | +200% |
| **Signaux d'alerte** | ❌ Aucun | ✅ 4 métriques claires | 100% |
| **Confiance décision** | 4/10 | 8/10 | +100% |
| **Plan B** | ❌ Pas prévu | ✅ Pivot documenté | 100% |

---

### 💡 Leçon clé

L'**analyse de scénarios + IA** transforme une décision **binaire** (A ou B) en décision **éclairée** avec :
- Compréhension des risques (best case / worst case)
- Valeur attendue calculée objectivement
- Signaux d'alerte pour pivoter rapidement si nécessaire

**Appliquez les scénarios pour** :
- Choix stratégiques (growth, pricing, marché)
- Décisions budgétaires (investissement, recrutement)
- Planification produit (roadmap, pivots)

---

## 🎓 Synthèse : Les 3 frameworks de décision maîtrisés

| Framework | Quand l'utiliser | Ce qu'il apporte | Temps gagné |
|-----------|------------------|------------------|-------------|
| **🎯 RICE** | Priorisation de features/initiatives | Classement objectif data-driven | 90% (3h → 15min) |
| **🔍 SWOT** | Décisions stratégiques complexes | Analyse 360° (forces/faiblesses/opportunités/menaces) | 95% (2j → 15min) |
| **🔮 Scénarios** | Anticiper conséquences d'une décision | Modélisation de futurs possibles + plan B | 100% (impossible manuellement) |

---

## 📋 Vos livrables de la session

À la fin de cette session, vous repartez avec :

✅ **1 tableau RICE** pour 6 features avec scores et classement  
✅ **1 analyse SWOT complète** avec recommandation et alternatives  
✅ **6 scénarios modélisés** (3 par stratégie) avec valeur attendue  
✅ **3 prompts réutilisables** pour vos décisions futures  
✅ **Compétence** : Structurer vos décisions avec des frameworks éprouvés  

**ROI total** : **~50 heures/an économisées** sur les décisions stratégiques

---

## 💬 Débrief collectif (facultatif, si temps)

### Questions à discuter en groupe :

1. **Quel framework vous a le plus convaincu ?** (RICE / SWOT / Scénarios)

2. **Avez-vous été surpris par les résultats de l'IA ?**
   - Le classement RICE était-il attendu ?
   - La recommandation SWOT vous a-t-elle fait changer d'avis ?
   - Les scénarios pessimistes étaient-ils réalistes ?

3. **Quelle décision en cours dans vos projets pourrait bénéficier de ces frameworks ?**
   - Priorisation backlog → RICE
   - Choix techno/stratégique → SWOT
   - Choix entre 2 stratégies → Scénarios

4. **Difficultés rencontrées ?**
   - Prompts qui ne donnent pas de bons résultats ?
   - Manque de données pour nourrir l'analyse ?

---

## 🎯 Challenge pour la semaine

**Mission** : Appliquez AU MOINS 1 framework sur une vraie décision en cours

### Option 1 : Priorisation RICE
- [ ] Lister 5-10 items à prioriser (features, initiatives, bugs)
- [ ] Utiliser le prompt RICE adapté à votre contexte
- [ ] Partager le classement avec votre équipe
- [ ] Mesurer l'adhésion vs une priorisation classique

### Option 2 : Analyse SWOT
- [ ] Identifier une décision stratégique en cours
- [ ] Générer l'analyse SWOT complète
- [ ] Présenter à votre manager ou équipe
- [ ] Documenter la décision prise

### Option 3 : Scénarios What-If
- [ ] Choisir une décision avec 2 options
- [ ] Modéliser 3 scénarios par option (6 total)
- [ ] Calculer la valeur attendue
- [ ] Définir les signaux d'alerte à surveiller

---

## 📌 Rappels importants

> [!IMPORTANT]
> **L'IA aide à décider, ne décide pas à votre place** : Validez toujours les estimations et recommandations avec votre expertise métier et vos données réelles.

> [!TIP]
> **Itérez sur les prompts** : Si les résultats ne sont pas satisfaisants, ajoutez plus de contexte, précisez les critères, ou demandez des justifications plus détaillées.

> [!WARNING]
> **Garbage In, Garbage Out** : La qualité de l'analyse dépend de la qualité des données et du contexte fournis. Soyez précis dans vos prompts.

> [!NOTE]
> **Documentez vos décisions** : Sauvegardez les analyses RICE/SWOT/Scénarios pour justifier vos choix et apprendre de vos décisions passées.

---

## 🔗 Ressources complémentaires

### Templates de prompts

Créez votre fichier `Prompts_Decision.md` avec :
- ✅ Prompt RICE (fait aujourd'hui)
- ✅ Prompt SWOT (fait aujourd'hui)
- ✅ Prompt Scénarios (fait aujourd'hui)
- 💡 Prompt Analyse multi-critères
- 💡 Prompt Arbre de décision
- 💡 Prompt Matrice Eisenhower (Urgent/Important)

### Lectures recommandées

- [RICE Framework by Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)
- [SWOT Analysis Guide](https://www.mindtools.com/pages/article/newTMC_05.htm)
- [Scenario Planning for Product Managers](https://www.productplan.com/learn/scenario-planning/)

---

**💬 Questions ? Partagez vos décisions assistées par IA avec le groupe !**
