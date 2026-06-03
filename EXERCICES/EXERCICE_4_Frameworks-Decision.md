# Exercices Module 4 : Décisions, réunions et comptes-rendus avec l'IA

**Durée totale** : 1 h 45 (2 × 20 min frameworks + 2 × 20 min réunions ; exercice Gladia ~25 min)
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : [Vibe de Mistral](https://chat.mistral.ai) (anciennement Le Chat - recommandé et préconisé par rapport à ChatGPT), [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai) ; pour les exercices 3 et 4 : Microsoft Teams (compte professionnel), [Gladia.io](https://gladia.io), [Microsoft Loop](https://loop.microsoft.com)

---

## 🎯 Objectif pédagogique

Maîtriser les **frameworks de décision** et les **workflows de réunion** assistés par IA :
- **Framework RICE** : Prioriser les features/initiatives
- **Framework SWOT** : Analyser les décisions stratégiques
- **Transcription et comptes-rendus** : Teams, Loop, Gladia

**Principe** : L'IA ne décide pas à votre place ; elle structure l'analyse et accélère la documentation des réunions.

---

## Partie A : Frameworks de décision

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


---

## Partie B : Réunions et comptes-rendus

Prolonge le module 4 (transcription, action items, communication à partir d'une vidéo) — **2 × 20 minutes**.

## 📹 Exercice 3 : MS Teams - Transcription et exploitation avec Loop

**Durée** : 20 minutes  
**Objectif** : Enregistrer une réunion avec MS Teams et exploiter la transcription pour générer des action items collaboratifs

### Le problème

Après chaque réunion, vous passez **30-45 minutes** à :

- Réécouter l'enregistrement pour ne rien oublier
- Rédiger le compte-rendu
- Identifier et lister les action items
- Envoyer par email à l'équipe
- Risque d'oubli ou de perte d'information

**⏱️ Temps total : 30-45 min par réunion**

---

### ✅ Mission : Automatiser avec MS Teams + Loop

#### **Démo live (5 min) - À suivre en groupe**

**Le formateur démontre :**

1. **Organiser une réunion Teams test**
  - Créer une réunion rapide Teams
  - Inviter 2-3 participants
  - Démarrer la réunion
2. **Activer l'enregistrement + transcription**
  - Cliquer sur "⋯ Plus" → "Enregistrer et transcrire"
  - ✅ Activer la transcription en direct
  - Observer la transcription en temps réel dans le panneau latéral
3. **Simuler une mini-réunion** (2-3 min de discussion)
  ```
   Exemple de discussion simulée :

   - PO : "On doit décider de la priorité pour les 3 features du backlog"
   - Dev 1 : "La feature A (intégration Slack) est demandée par 5 clients"
   - PM : "OK, je propose qu'on priorise A. Dev 1, tu peux estimer ça ?"
   - Dev 1 : "Je dirais 2 sprints. Je commence lundi prochain"
   - PO : "Parfait. Dev 2, tu continues sur la feature B cette semaine ?"
   - Dev 2 : "Oui, je livre vendredi"
  ```
4. **Terminer la réunion et accéder à la transcription**
  - Arrêter l'enregistrement
  - Montrer où retrouver la transcription (Chat de la réunion → Transcription)

---

#### **Étape 1 : Télécharger la transcription** (2 min)

**Instructions pour les apprenants :**

1. Accéder à la réunion Teams enregistrée
2. Ouvrir le chat de la réunion
3. Cliquer sur l'onglet "📝 Transcription"
4. Cliquer sur "⋯ Plus d'options" → "Télécharger la transcription"
5. Sauvegarder le fichier `.vtt` ou `.docx`

---

#### **Étape 2 : Extraire les action items avec Vibe de Mistral (ou ChatGPT)** (8 min)

**Copier la transcription** et utiliser ce prompt :

```
Tu es un assistant de réunion. Analyse cette transcription et extrais les action items.

Transcription MS Teams :
[COLLER ICI LA TRANSCRIPTION]

Pour CHAQUE action item, fournis :
1. 🎯 ACTION : Description claire et actionnable de la tâche
2. 👤 RESPONSABLE : Nom de la personne assignée
3. 📅 ÉCHÉANCE : Date ou délai mentionné (si précisé)
4. ⚡ PRIORITÉ : Haute / Moyenne / Basse (basé sur le contexte)
5. 📌 CONTEXTE : Pourquoi cette action (1 phrase)

Format de sortie :
Utilise un tableau Markdown avec ces colonnes :
| Action | Responsable | Échéance | Priorité | Contexte |

Si aucune action n'est identifiée, indique "Aucun action item détecté".
```

**Résultat attendu** :


| Action                                   | Responsable | Échéance       | Priorité | Contexte                            |
| ---------------------------------------- | ----------- | -------------- | -------- | ----------------------------------- |
| Estimer la feature A (intégration Slack) | Dev 1       | Lundi prochain | Haute    | Demandée par 5 clients, prioritaire |
| Commencer le développement feature A     | Dev 1       | Lundi prochain | Haute    | Suite à l'estimation                |
| Livrer la feature B                      | Dev 2       | Vendredi       | Haute    | En cours cette semaine              |


---

#### **Étape 3 : Créer un composant Microsoft Loop partagé** (5 min)

**Créer un espace de suivi collaboratif :**

1. **Ouvrir Microsoft Loop** (loop.microsoft.com ou depuis Teams)
  - Créer un nouveau composant "Liste de tâches"
  - Titre : "Action Items - [Nom de la réunion] - [Date]"
2. **Copier les action items depuis Vibe de Mistral (ou ChatGPT)**
  - Transformer chaque ligne du tableau en tâche Loop
  - Assigner les responsables (@mentionner les personnes)
  - Ajouter les échéances
3. **Partager le composant Loop**
  - Dans le chat Teams de la réunion
  - Tous les participants peuvent voir et cocher les tâches en temps réel
  - Les mises à jour sont synchronisées automatiquement

**Exemple de composant Loop** :

```
Action Items - Sprint Planning - 19/11/2025

☐ Estimer la feature A (intégration Slack)
  👤 @Dev1 | 📅 Lundi 25/11 | ⚡ Haute
  📌 Demandée par 5 clients, à prioriser

☐ Commencer développement feature A
  👤 @Dev1 | 📅 Lundi 25/11 | ⚡ Haute
  📌 Suite à l'estimation validée

☐ Livrer la feature B
  👤 @Dev2 | 📅 Vendredi 22/11 | ⚡ Haute
  📌 En cours cette semaine
```

---

#### **Étape 4 : Mesurer le gain** (facultatif, si temps)


| Critère                | Méthode manuelle         | Avec MS Teams + Loop + IA          | Gain    |
| ---------------------- | ------------------------ | ---------------------------------- | ------- |
| **Temps compte-rendu** | 30-45 min                | 5 min                              | **89%** |
| **Risque d'oubli**     | ⚠️ Élevé (note manuelle) | ✅ Nul (transcription complète)     | 100%    |
| **Collaboration**      | ❌ Email statique         | ✅ Loop dynamique et synchronisé    | 100%    |
| **Traçabilité**        | ⚠️ Moyenne               | ✅ Élevée (transcription + actions) | 100%    |


**💡 Leçon clé** : Teams transcription + Vibe / ChatGPT + Loop = **workflow de réunion quasi-automatisé** sans outil externe (Vibe étant préconisé par rapport à ChatGPT)

---

## 🎬 Exercice 4 : Gladia.io - De la vidéo à la communication multi-canal

**Durée** : 25 minutes  
**Objectif** : Transcrire une vidéo, générer des sous-titres et créer du contenu pour communication externe

### Le problème

Vous avez enregistré une **conférence ou démo produit** de 10-15 minutes. Vous devez :

- Transcrire la vidéo pour référence
- Ajouter des sous-titres pour accessibilité
- Créer des posts réseaux sociaux pour promouvoir la vidéo
- Rédiger un article de blog résumant le contenu

**⏱️ Temps manuel : 3-4 heures** (transcription manuelle, rédaction, sous-titres)

---

### ✅ Mission : Automatiser avec Gladia.io + Vibe de Mistral (ou ChatGPT)

#### **Étape 1 : Upload vidéo sur Gladia.io** (5 min)

**Instructions** :

1. **Créer un compte Gladia.io**
  - Aller sur [https://gladia.io](https://gladia.io)
  - S'inscrire (gratuit pour débuter, 1h de transcription/mois)
  - Vérifier l'email
2. **Upload d'une vidéo de démonstration**
  - Utiliser une vidéo fournie OU une vidéo de votre projet
  - Formats acceptés : MP4, MOV, AVI, etc.
  - Taille max : 2GB (plan gratuit)
3. **Lancer la transcription**
  - Sélectionner la langue (Français)
  - Options : Timestamps ✅ ON (nécessaire pour sous-titres)
  - Cliquer sur "Transcribe"
  - ⏱️ Attendre 2-5 min selon longueur vidéo
4. **Télécharger la transcription**
  - Format : JSON ou TXT avec timestamps
  - Sauvegarder localement

**💡 Astuce** : Si pas de vidéo perso, utiliser une vidéo YouTube de démo produit (télécharger avec un outil comme y2mate.com)

---

#### **Étape 2 : Générer les sous-titres SRT** (5 min)

**Copier la transcription Gladia** et utiliser ce prompt :

```
Transforme cette transcription avec timestamps en fichier SRT de sous-titres professionnels.

Transcription Gladia.io :
[COLLER ICI LA TRANSCRIPTION AVEC TIMESTAMPS]

Règles de formatage SRT :
- Max 2 lignes par sous-titre
- Max 42 caractères par ligne
- Découpage naturel (ne pas couper au milieu d'une phrase)
- Timestamps format : HH:MM:SS,MS --> HH:MM:SS,MS
- Numérotation séquentielle

Format de sortie :
1
00:00:00,000 --> 00:00:03,500
[Texte du sous-titre]

2
00:00:03,500 --> 00:00:07,000
[Texte du sous-titre]

Génère le fichier SRT complet.
```

**Résultat attendu** : Fichier SRT prêt à uploader sur YouTube, Vimeo, etc.

---

#### **Étape 3 : Générer un post LinkedIn** (7 min)

**Prompt** :

```
Tu es un community manager expert en création de contenu LinkedIn.

À partir de cette transcription de conférence/démo produit, rédige un POST LINKEDIN engageant.

Transcription :
[COLLER LA TRANSCRIPTION]

Structure du post :
1. 🎯 ACCROCHE (1-2 phrases)
   - Question provocante OU statistique marquante OU témoignage
   - Doit donner envie de lire la suite

2. 📝 CORPS (150-180 mots)
   - Résumé du contexte
   - 3 insights clés de la vidéo (avec émojis)
   - Valeur ajoutée pour le lecteur

3. 🚀 CALL TO ACTION
   - Invitation à regarder la vidéo
   - Question pour engager la discussion

4. 🏷️ HASHTAGS
   - 3 à 5 hashtags pertinents et populaires

Ton : Professionnel mais accessible et engageant
Format : Markdown avec émojis
Longueur : 150-200 mots
```

**Résultat attendu** : Post LinkedIn prêt à publier avec accroche, insights et CTA

---

#### **Étape 4 : Générer un post Viva Engage** (3 min)

**Prompt** :

```
Adapte ce contenu pour un post Viva Engage (réseau social interne d'entreprise).

Transcription de la vidéo :
[COLLER LA TRANSCRIPTION]

Structure du post Viva Engage :
1. 📢 ANNONCE (1 phrase accrocheuse)
   - Annonce la nouvelle vidéo/démo disponible

2. 💡 POINTS CLÉS (3-4 bullets)
   - Résumé ultra-synthétique des éléments importants
   - Orienté "ce que ça change pour vous"

3. 🎬 APPEL À L'ACTION
   - Inviter à regarder la vidéo
   - Encourager feedback et questions dans les commentaires

4. 🔗 LIEN (placeholder)
   - [Insérer lien vidéo ici]

Ton : Collaboratif, interne, moins formel que LinkedIn
Format : Court et scannable (max 100 mots)
Émojis : OK mais modération
```

**Résultat attendu** : Post Viva Engage court et orienté équipe interne

---

#### **Étape 5 : Générer un article de blog résumé** (5 min)

**Prompt** :

```
Rédige un article de blog structuré (800-1000 mots) résumant cette conférence/démo.

Transcription :
[COLLER LA TRANSCRIPTION]

Structure de l'article :

## Introduction (100-150 mots)
- Contexte et enjeu du sujet
- Annonce de ce qui sera abordé

## [Section 1 - Point clé 1] (200-250 mots)
- Développement du premier point important
- Exemple concret ou chiffre clé

## [Section 2 - Point clé 2] (200-250 mots)
- Développement du deuxième point
- Cas d'usage pratique

## [Section 3 - Point clé 3] (200-250 mots)
- Développement du troisième point
- Impact et bénéfices

## Citations marquantes
- 2-3 citations clés de la vidéo (en bloc quote)

## Conclusion (100-150 mots)
- Récap des enseignements principaux
- Appel à l'action (voir la vidéo complète, essayer le produit, etc.)

Format : Markdown
Ton : Éducatif, accessible, avec exemples concrets
Style : Sous-titres clairs, paragraphes courts, facile à scanner
```

**Résultat attendu** : Article de blog complet prêt à publier

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

> [!CAUTION]
> **Accord Projet** : Il ne faut jamais utiliser d'outils IA sans accord explicite et écrit des responsables du projet travaillé.

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