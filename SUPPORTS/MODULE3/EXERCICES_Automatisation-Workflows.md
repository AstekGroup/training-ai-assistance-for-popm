# Exercices Module 3 : Automatiser vos tâches répétitives avec l'IA

**Durée totale** : 1 heure (2 exercices + débrief)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : 
- Compte Zapier gratuit (à créer avant la session)
- Compte Google (Gmail + Google Forms)
- Accès à [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)

---

## 🎯 Objectif pédagogique

Comprendre et expérimenter **2 niveaux d'automatisation** pour libérer du temps sur les tâches répétitives :
- **Niveau 1** : Automatisation "soft" avec prompts réutilisables
- **Niveau 2** : Automatisation "technique" avec workflows Zapier

**Principe** : Commencer simple, puis progresser vers des automatisations plus avancées

---

## 📝 Exercice 1 : Automatisation SIMPLE - Template de contenu réutilisable

**Durée** : 20 minutes  
**Niveau** : ⭐ Débutant  
**Objectif** : Créer un prompt template pour automatiser la génération de Release Notes

### Le problème

Chaque vendredi, vous devez rédiger les **Release Notes** de la semaine pour informer vos utilisateurs et stakeholders des nouveautés.

**Processus actuel (manuel)** :
1. Récupérer la liste des tickets complétés dans Jira/GitHub
2. Les catégoriser manuellement (Features / Améliorations / Bugs)
3. Rédiger des descriptions claires et orientées utilisateur
4. Structurer avec emojis et formatage
5. Relire et corriger
6. Publier

**⏱️ Temps nécessaire : 30 minutes**

**😰 Problèmes** :
- Chronophage et répétitif
- Risque d'oubli de tickets
- Formulation variable selon la fatigue
- Pas de standardisation

---

### ✅ Mission : Créer votre prompt template réutilisable

#### **Étape 1** : Analyser les données brutes (2 min)

Voici les tickets complétés cette semaine :

```
PROJ-245 : Ajout du mode sombre pour réduire fatigue oculaire
PROJ-251 : Export des rapports en format PDF avec branding personnalisé  
PROJ-189 : Temps de chargement du dashboard réduit de 40%
PROJ-312 : Correction du crash lors de l'upload de fichiers >10MB
PROJ-318 : Correction de l'affichage des dates en format US
PROJ-267 : Intégration Slack pour notifications temps réel
```

**Sans automatisation**, vous devriez :
- Identifier le type de chaque ticket (Feature/Amélioration/Bug)
- Reformuler pour l'utilisateur final
- Organiser par catégorie
- Ajouter les emojis appropriés

---

#### **Étape 2** : Construire votre prompt template (10 min)

Créez un prompt ChatGPT qui transforme **automatiquement** vos données brutes en Release Notes formatées :

```
Tu es un Product Owner qui rédige des Release Notes pour les utilisateurs.

FORMAT STANDARD DE SORTIE :
📦 Version [VERSION] - [DATE]

✨ Nouvelles fonctionnalités
• [CODE-XXX] Description courte orientée utilisateur (bénéfice clair)

🔧 Améliorations
• [CODE-XXX] Description avec métrique si applicable

🐛 Corrections de bugs
• [CODE-XXX] Description du problème résolu (sans jargon technique)

---

RÈGLES :
- Trier automatiquement les tickets par catégorie
- Utiliser un langage simple et orienté bénéfice utilisateur
- Inclure les métriques quand pertinent (ex: -40% temps de chargement)
- Éviter le jargon technique

TICKETS DE CETTE SEMAINE :
[INSÉRER ICI LA LISTE DE TICKETS]

Génère les Release Notes en suivant EXACTEMENT le format ci-dessus.
Version : [A REMPLIR]
Date : [A REMPLIR]
```

**💡 Astuce** : Sauvegardez ce prompt dans un fichier "Prompts_Réutilisables.md" pour le réutiliser chaque semaine !

---

#### **Étape 3** : Tester et itérer (5 min)

1. **Testez** votre prompt avec les données fournies
2. **Vérifiez** :
   - ✅ Les tickets sont bien catégorisés ?
   - ✅ Le langage est orienté utilisateur ?
   - ✅ Le format est respecté ?
3. **Ajustez** le prompt si nécessaire
4. **Re-testez** jusqu'à satisfaction

**Résultat attendu** :

```
📦 Version 2.4.0 - 2025-01-24

✨ Nouvelles fonctionnalités
• [PROJ-245] Mode sombre disponible pour réduire la fatigue oculaire
• [PROJ-267] Notifications Slack en temps réel pour ne rien manquer
• [PROJ-251] Exportez vos rapports en PDF avec votre branding

🔧 Améliorations
• [PROJ-189] Chargement du dashboard 40% plus rapide

🐛 Corrections de bugs
• [PROJ-312] Les fichiers de plus de 10MB s'uploadent désormais correctement
• [PROJ-318] Affichage des dates corrigé pour le format US
```

---

#### **Étape 4** : Mesurer le gain (3 min)

Complétez ce tableau comparatif :

| Critère | Avant (Manuel) | Après (Prompt IA) | Gain |
|---------|----------------|-------------------|------|
| **Temps de rédaction** | 30 min | 2-3 min | **90% ⚡** |
| **Catégorisation** | Manuelle (5 min) | Automatique | 100% |
| **Qualité langage** | Variable selon fatigue | Standardisée | +cohérence |
| **Risque d'oubli** | Moyen | Nul (si données complètes) | ✅ |

**ROI sur 1 an** :
```
50 semaines × 27 min économisées = 1350 min = 22,5 heures/an 🚀
```

---

### 💡 Aller plus loin - Créez votre bibliothèque de prompts

D'autres contenus à automatiser avec la même approche :

| Type de contenu | Fréquence | Temps manuel | Prompt template ? |
|-----------------|-----------|--------------|-------------------|
| Release Notes | Hebdo | 30 min | ✅ Fait ! |
| Rapport de sprint | Hebdo | 45 min | 💡 À créer |
| Email stakeholders | Mensuel | 20 min | 💡 À créer |
| User stories | Quotidien | 15 min/story | 💡 À créer |

**Challenge** : Créez 1 prompt template supplémentaire cette semaine !

---

## ⚙️ Exercice 2 : Automatisation INTERMÉDIAIRE - Workflow Zapier complet

**Durée** : 30 minutes  
**Niveau** : ⭐⭐ Intermédiaire  
**Objectif** : Créer votre premier workflow Zapier opérationnel

### Le problème

Votre équipe et vos stakeholders vous envoient des **demandes de features de manière dispersée** :
- 📧 Par email
- 💬 En réunion (oubliées ensuite)
- 🗣️ Dans les couloirs
- 💬 Dans Slack/Teams
- 📞 Par téléphone

**Conséquences** :
- ❌ Risque d'oubli élevé
- ❌ Pas de traçabilité
- ❌ Difficile à prioriser
- ❌ Temps perdu à chercher "qui a demandé quoi"

---

### ✅ Mission : Créer un système de collecte automatisé

**Workflow à construire** :

```
┌─────────────────────┐
│  Stakeholder        │
│  remplit formulaire │ 
└──────────┬──────────┘
           │
           │ Déclencheur automatique
           ▼
┌─────────────────────┐
│  Google Forms       │
│  (Centralisation)   │
└──────────┬──────────┘
           │
           │ Workflow Zapier
           ▼
┌─────────────────────┐
│  Email au PO        │
│  (Notification)     │
└─────────────────────┘
```

**Résultat attendu** : Dès qu'un besoin est soumis, vous recevez un email formaté automatiquement.

---

### Étape 1 : Créer le formulaire de collecte (7 min)

#### Créer un Google Form avec ces champs :

1. **Titre de la demande** (Texte court)
   - Description : "En une phrase, décrivez votre besoin"

2. **Description détaillée** (Paragraphe)
   - Description : "Expliquez le contexte et ce que vous souhaitez"

3. **Priorité** (Choix multiple)
   - Options : Basse / Moyenne / Haute / Critique

4. **Impact attendu** (Paragraphe)
   - Description : "Quel problème cela résout ? Pour qui ?"

5. **Demandeur** (Texte court)
   - Description : "Votre nom"

6. **Email du demandeur** (Email)
   - Description : "Votre email pour suivi"

#### Configuration du formulaire :

- **Titre du formulaire** : "Demande de nouvelle fonctionnalité produit"
- **Description** : "Soumettez vos idées et besoins produit via ce formulaire. Vous serez notifié de l'évaluation sous 48h."
- **Paramètres** : 
  - ✅ Limiter à 1 réponse (optionnel)
  - ✅ Collecter les adresses email

**💡 Astuce** : Utilisez un Google Form template pour aller plus vite !

---

### Étape 2 : Créer le compte Zapier (3 min)

Si ce n'est pas déjà fait :

1. Aller sur [https://zapier.com/sign-up](https://zapier.com/sign-up)
2. Créer un compte gratuit (avec votre email Google)
3. Vérifier votre email
4. Accéder au dashboard

**Plan gratuit Zapier** : 
- ✅ 100 tâches/mois (largement suffisant pour débuter)
- ✅ Workflows en 2 étapes
- ✅ Rafraichissement toutes les 15 min

---

### Étape 3 : Construire votre premier Zap (15 min)

#### **Action 1 : Créer un nouveau Zap**

1. Cliquer sur "**Create Zap**"
2. Nommer le Zap : "Collecte besoins produit → Email PO"

---

#### **Action 2 : Configurer le DÉCLENCHEUR**

**Étape 2.1** : Choisir l'app
- Rechercher : "**Google Forms**"
- Sélectionner : "**New Response in Spreadsheet**"

**Étape 2.2** : Connecter votre compte Google
- Cliquer sur "**Sign in to Google**"
- Autoriser Zapier à accéder à Google Forms

**Étape 2.3** : Configurer le déclencheur
- **Spreadsheet** : Sélectionner le formulaire créé
- **Worksheet** : "Form Responses 1" (par défaut)

**Étape 2.4** : Tester le déclencheur
- Cliquer sur "**Test trigger**"
- Si aucune donnée : soumettre un formulaire test
- Vérifier que les données apparaissent

---

#### **Action 3 : Configurer l'ACTION (Email)**

**Étape 3.1** : Choisir l'app
- Rechercher : "**Email by Zapier**"
- Sélectionner : "**Send Outbound Email**"

**Étape 3.2** : Configurer l'email

**To (Destinataire)** :
```
votre.email@example.com
```
*(Remplacez par votre vraie adresse email)*

**Subject (Sujet)** :
```
🆕 Nouvelle demande produit - Priorité {{Priorité}}
```
*(Utilisez le champ dynamique en cliquant sur le "+" à droite)*

**Body (Corps du message)** :
```
Bonjour,

Une nouvelle demande produit vient d'être soumise.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 TITRE
{{Titre de la demande}}

📝 DESCRIPTION DÉTAILLÉE
{{Description détaillée}}

⚡ PRIORITÉ
{{Priorité}}

🎯 IMPACT ATTENDU
{{Impact attendu}}

👤 DEMANDEUR
{{Demandeur}} 
📧 Email : {{Email du demandeur}}

⏰ REÇU LE
{{Timestamp}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ PROCHAINE ÉTAPE
Évaluer la demande et répondre au demandeur sous 48h.

---
Ce message est généré automatiquement par votre workflow Zapier.
```

**💡 Astuce** : Cliquez sur le **"+"** pour insérer les champs dynamiques du formulaire

---

#### **Action 4 : Tester le Zap**

1. Cliquer sur "**Test step**"
2. Vérifier que l'email de test est bien reçu
3. Vérifier le formatage et les données

---

#### **Action 5 : Activer le Zap**

1. Cliquer sur "**Publish**"
2. Votre workflow est maintenant **actif** ! 🎉

---

### Étape 4 : Tester en conditions réelles (3 min)

1. **Partagez** le lien de votre Google Form avec un collègue (ou remplissez-le vous-même)
2. **Soumettez** une demande de test
3. **Vérifiez** que vous recevez l'email automatiquement (délai max 15 min en plan gratuit)
4. **Ajustez** le formatage si nécessaire en modifiant le Zap

---

### Étape 5 : Mesurer l'impact et le ROI (2 min)

Complétez ce tableau de gains :

| Critère | Avant (Dispersé) | Après (Automatisé) | Amélioration |
|---------|------------------|-------------------|--------------|
| **Centralisation** | ❌ Emails, Slack, réunions | ✅ Formulaire unique | 100% |
| **Traçabilité** | ❌ Faible, manuellement | ✅ Automatique (Google Sheet) | 100% |
| **Risque d'oubli** | ⚠️ Élevé | ✅ Nul (email systématique) | 100% |
| **Temps de traitement** | 10 min/demande | 0 min (auto) | **100% ⚡** |
| **Visibilité** | ❌ Seul le PO sait | ✅ Notification immédiate | +100% |

**ROI calculé** :

```
Hypothèse : 20 demandes/mois

Avant : 20 × 10 min = 200 min/mois
Après : 0 min (automatique)

Économie mensuelle : 200 min = 3,3 heures
Économie annuelle : 40 heures 🚀

Temps de setup : 30 min
ROI atteint après : 3 demandes = 1,5 jour !
```

---

## 🚀 Bonus : Améliorations possibles du workflow

### Option 1 : Ajouter une copie au demandeur

Dans l'email Zapier, ajouter un champ **Cc** :
```
Cc: {{Email du demandeur}}
```

**Bénéfice** : Le demandeur reçoit une confirmation automatique de sa soumission.

---

### Option 2 : Tracker les demandes dans un Google Sheet

**Ajouter une action supplémentaire au Zap** :

1. Action : "**Google Sheets - Create Spreadsheet Row**"
2. Colonnes : 
   - Titre
   - Description
   - Priorité
   - Demandeur
   - Email
   - Date
   - Statut (par défaut : "À évaluer")

**Bénéfice** : Vous avez un tableau de suivi automatique de toutes les demandes.

---

### Option 3 : Notification différenciée selon priorité

**Ajouter une condition au Zap** (nécessite plan payant) :

```
IF Priorité = "Critique"
  THEN Email avec 🚨 dans sujet + CC au manager
ELSE
  THEN Email normal
```

**Bénéfice** : Les demandes critiques sont escaladées automatiquement.

---

## 🎓 Synthèse : Les 2 niveaux d'automatisation que vous maîtrisez maintenant

| Niveau | Technique | Exemple | Temps setup | Gain temps | ROI | Quand utiliser |
|--------|-----------|---------|-------------|------------|-----|----------------|
| **⭐ Simple** | Prompt template | Release Notes | 10 min | 27 min/semaine | Immédiat | Génération de contenu répétitif |
| **⭐⭐ Intermédiaire** | Workflow Zapier | Form → Email | 30 min | 3,3h/mois | 1,5 jour | Collecte, notification, traçabilité |

---

## 📋 Vos livrables de la session

À la fin de cette session, vous repartez avec :

✅ **1 prompt template réutilisable** pour vos Release Notes  
✅ **1 workflow Zapier fonctionnel** de collecte et notification  
✅ **Calcul de ROI** pour chaque automatisation  
✅ **Compétence** : Identifier et automatiser des tâches répétitives

---

## 💬 Débrief collectif (10 min)

### Questions à discuter en groupe :

1. **Quelle automatisation vous a le plus impressionné ?** (Exercice 1 ou 2)

2. **Quel gain de temps avez-vous calculé ?**
   - Exercice 1 : ___ heures/an
   - Exercice 2 : ___ heures/an
   - **Total : ___ heures/an économisées** 🚀

3. **Quelle tâche de VOTRE quotidien allez-vous automatiser en premier ?**
   - Reporting ?
   - User stories ?
   - Collecte de besoins ?
   - Autre : ___________

4. **Difficultés rencontrées ?**
   - Problèmes techniques avec Zapier ?
   - Prompt qui ne donne pas le bon résultat ?
   - Ajustements nécessaires ?

5. **Idées d'améliorations ?**
   - Quelles autres étapes automatiser ?
   - Quels autres workflows utiles pour votre équipe ?

---

## 🎯 Challenge pour la semaine

**Mission** : Automatisez AU MOINS 1 tâche répétitive de votre quotidien

### Étape 1 : Identifier votre tâche cible

Listez 3 tâches répétitives de votre semaine :

| Tâche | Fréquence | Temps actuel | Automatisable ? | Impact si automatisé |
|-------|-----------|--------------|-----------------|----------------------|
| Ex: Rapport sprint | Hebdo | 45 min | ✅ Oui | 39h/an économisées |
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

### Étape 2 : Choisir votre approche

- [ ] **Approche 1** : Créer un prompt template (si génération de contenu)
- [ ] **Approche 2** : Créer un workflow Zapier (si collecte/notification)
- [ ] **Approche 3** : Combiner les deux !

### Étape 3 : Mettre en place

- [ ] Setup de l'automatisation (prompt ou Zap)
- [ ] Test avec données réelles
- [ ] Ajustements si nécessaire
- [ ] Activation et mise en production

### Étape 4 : Mesurer et partager

- [ ] Mesurer le temps économisé après 1 semaine
- [ ] Calculer le ROI réel
- [ ] Partager votre retour d'expérience au groupe (prochaine session)

---

## 📌 Rappels importants

> [!TIP]
> **Commencez simple** : Il vaut mieux une petite automatisation qui fonctionne bien qu'une grosse automatisation complexe qui ne fonctionne pas.

> [!WARNING]
> **Gardez l'humain dans la boucle** : L'automatisation aide, mais ne remplace pas votre jugement. Vérifiez toujours les résultats générés par l'IA.

> [!NOTE]
> **Plan gratuit Zapier** : 100 tâches/mois = largement suffisant pour commencer. Surveillez votre consommation pour ne pas dépasser.

> [!IMPORTANT]
> **Documentez vos workflows** : Notez comment fonctionne votre Zap et votre prompt template. Vous (ou vos collègues) vous remercierez dans 6 mois !

---

## 🔗 Ressources complémentaires

### Templates Zapier prêts à l'emploi

- [Zapier Templates - Project Management](https://zapier.com/apps/categories/project-management)
- [Zapier Templates - Productivity](https://zapier.com/apps/categories/productivity)

### Tutoriels vidéo

- [Zapier 101: Getting Started](https://zapier.com/learn/getting-started-guide/)
- [Google Forms + Zapier Tutorial](https://zapier.com/apps/google-forms/integrations)

### Bibliothèque de prompts

Créez votre propre fichier `Prompts_Réutilisables.md` avec :
- Prompt Release Notes (fait aujourd'hui ✅)
- Prompt Rapport de Sprint
- Prompt Email Stakeholders
- Prompt User Stories
- Prompt Synthèse de Réunion

---

**💬 Questions ? Besoin d'aide pour automatiser une tâche spécifique ? Partagez avec le groupe !**
