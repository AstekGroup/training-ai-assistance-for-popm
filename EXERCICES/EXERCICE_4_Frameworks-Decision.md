# Exercices Module 4 : Prendre de meilleures décisions avec l'IA

**Durée totale** : 40 minutes (2x20 minutes)
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

## 🎓 Synthèse : Les 2 frameworks de décision maîtrisés

| Framework | Quand l'utiliser | Ce qu'il apporte | Temps gagné |
|-----------|------------------|------------------|-------------|
| **🎯 RICE** | Priorisation de features/initiatives | Classement objectif data-driven | 90% (3h → 15min) |
| **🔍 SWOT** | Décisions stratégiques complexes | Analyse 360° (forces/faiblesses/opportunités/menaces) | 95% (2j → 15min) |

---

## 📋 Vos livrables de la session

À la fin de cette session, vous repartez avec :

✅ **1 tableau RICE** pour 6 features avec scores et classement  
✅ **1 analyse SWOT complète** avec recommandation et alternatives  
  
✅ **Compétence** : Structurer vos décisions avec des frameworks éprouvés  



---

## 💬 Débrief collectif (10 min)

### Questions à discuter en groupe :

1. **Quel framework vous a le plus convaincu ?** (RICE ou SWOT)

2. **Avez-vous été surpris par les résultats de l'IA ?**
   - Le classement RICE était-il attendu ?
   - La recommandation SWOT vous a-t-elle fait changer d'avis ?

3. **Quelle décision en cours dans vos projets pourrait bénéficier de ces frameworks ?**
   - Priorisation backlog → RICE
   - Choix techno/stratégique → SWOT

4. **Difficultés rencontrées ?**
   - Prompts qui ne donnent pas de bons résultats ?
   - Manque de données pour nourrir l'analyse ?

---

## 📌 Rappels importants

> [!IMPORTANT]
> **L'IA aide à décider, ne décide pas à votre place** : Validez toujours les estimations et recommandations avec votre expertise métier et vos données réelles.

> [!TIP]
> **Itérez sur les prompts** : Si les résultats ne sont pas satisfaisants, ajoutez plus de contexte, précisez les critères, ou demandez des justifications plus détaillées.

> [!WARNING]
> **Garbage In, Garbage Out** : La qualité de l'analyse dépend de la qualité des données et du contexte fournis. Soyez précis dans vos prompts.

> [!NOTE]
> **Documentez vos décisions** : Sauvegardez les analyses RICE/SWOT pour justifier vos choix et apprendre de vos décisions passées.

---

## 🔗 Ressources complémentaires

### Templates de prompts

Créez votre fichier `Prompts_Decision.md` avec :
- ✅ Prompt RICE (fait aujourd'hui)
- ✅ Prompt SWOT (fait aujourd'hui)
- 💡 Prompt Analyse multi-critères
- 💡 Prompt Matrice Eisenhower (Urgent/Important)

### Lectures recommandées

- [RICE Framework by Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)
- [SWOT Analysis Guide](https://www.mindtools.com/pages/article/newTMC_05.htm)