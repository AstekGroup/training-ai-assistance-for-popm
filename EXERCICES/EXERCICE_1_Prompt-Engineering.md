# Exercices Module 1 : Découverte du Prompt Engineering pour PO/PM

**Durée totale** : 1 heure (3 × 20 minutes)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : Accès à [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)

---

## 🎯 Exercice 1 : Structurer un prompt avec la méthode ACTF

**Durée** : 20 minutes  
**Objectif** : Apprendre à transformer un prompt vague en prompt structuré et efficace

### Le scénario

Vous êtes PO d'une **application de gestion de tâches pour équipes distantes**. Vous devez générer une user story pour la fonctionnalité **"notification de rappel avant échéance"**.

### ❌ Ce qu'il ne faut PAS faire

```
Écris une user story pour les notifications
```

**Problème** : Trop vague. L'IA ne sait pas quel contexte, quel format, quel niveau de détail.

### ✅ À vous de jouer !

Transformez le prompt basique en utilisant la **méthode ACTF** :

#### **A - Acteur** : Quel rôle doit jouer l'IA ?

```
Tu es un Product Owner senior avec 8 ans d'expérience...
```

💡 **Réfléchissez** : Précisez le niveau d'expertise, le domaine métier

---

#### **C - Contexte** : Quelle est la situation ?

```
Nous développons une application SaaS de gestion de tâches...
```

💡 **Réfléchissez** : Décrivez le produit, les utilisateurs cibles, la fonctionnalité concernée

---

#### **T - Tâche** : Que doit faire précisément l'IA ?

```
Rédige une user story complète incluant...
```

💡 **Réfléchissez** : Soyez précis sur ce que vous attendez (format, sections, longueur)

---

#### **F - Format** : Quelle structure attendez-vous ?

```
Format INVEST avec :
- Description (En tant que... Je veux... Afin de...)
- 5 critères d'acceptation en format Gherkin
- Notes techniques
```

💡 **Réfléchissez** : Spécifiez le format exact, les sections, les conventions

---

### 🧪 Testez votre prompt

1. Assemblez vos 4 composantes (A + C + T + F)
2. Copiez votre prompt dans ChatGPT ou Claude
3. Notez la qualité du résultat (1 à 5 ⭐)

### 💬 Débrief (5 min)

- Comparez votre prompt avec votre voisin
- Quelle partie a le plus amélioré le résultat ? (A, C, T ou F)
- Quel élément avez-vous oublié ?

---

## 🔄 Exercice 2 : Maîtriser l'itération pour affiner un résultat

**Durée** : 20 minutes  
**Objectif** : Comprendre que le premier résultat n'est jamais le bon et apprendre à itérer

### Le scénario

L'IA vous a généré cette user story, mais **elle est incomplète** :

```markdown
En tant qu'utilisateur de l'application,
Je veux recevoir une notification avant l'échéance d'une tâche,
Afin de ne pas oublier de la compléter.

Critères d'acceptation :
- Une notification est envoyée
- L'utilisateur peut voir la tâche
- La notification apparaît au bon moment
```

### 🚨 Problème identifié

Les critères d'acceptation sont **trop vagues et non testables** par l'équipe QA !

### ✅ À vous de jouer - Rédiger 3 prompts d'itération

#### **Itération 1** : Rendre les critères testables

```
Réécrire les 3 critères d'acceptation en format Gherkin (Given/When/Then)
pour qu'ils soient testables par l'équipe QA.
```

**Attendu** :
- Critères précis avec états initiaux, actions et résultats attendus
- Format : `Given [contexte], When [action], Then [résultat]`

---

#### **Itération 2** : Ajouter des contraintes techniques

```
Ajoute 3 notes techniques pour l'équipe de développement :
1. Quel canal de notification ? (push mobile, email, in-app)
2. Quel timing de déclenchement ?
3. Quelles options de customisation pour l'utilisateur ?
```

**Attendu** :
- Section "Notes techniques" ajoutée
- Précisions pour guider les développeurs

---

#### **Itération 3** : Définir les métriques de succès

```
Ajoute une section "Métriques de succès" avec 3 KPIs mesurables
pour valider que la fonctionnalité apporte de la valeur aux utilisateurs.
```

**Attendu** :
- 3 indicateurs chiffrés (ex: taux d'ouverture, réduction des tâches en retard)
- Méthode de mesure pour chaque KPI

---

### 🧪 Testez vos itérations

1. Partez de la user story incomplète fournie
2. Appliquez vos 3 prompts d'itération successivement
3. Observez comment le résultat s'améliore à chaque étape

### 💬 Débrief (5 min)

- Combien d'itérations réelles avez-vous faites au total ?
- À quel moment avez-vous jugé le résultat "production-ready" ?
- Quelle itération a apporté le plus de valeur ?

---

## 📚 Exercice 3 : Standardiser avec le "Few-Shot Learning"

**Durée** : 20 minutes  
**Objectif** : Utiliser des exemples concrets pour imposer un format et garantir la cohérence

### Le scénario

Votre équipe utilise un **format très précis pour les Release Notes**. Vous voulez que l'IA génère les notes de version 2.4.0 dans ce format exact.

### 📋 Exemples de vos Release Notes (à fournir à l'IA)

```markdown
📦 Version 2.3.0 - 2024-10-15

✨ Nouvelles fonctionnalités
• [FEAT-245] Ajout du mode sombre pour réduire la fatigue oculaire
• [FEAT-251] Export des rapports en format PDF avec branding personnalisé

🔧 Améliorations
• [IMP-189] Temps de chargement du dashboard réduit de 40%

🐛 Corrections de bugs
• [FIX-312] Correction du crash lors de l'upload de fichiers >10MB
• [FIX-318] Correction de l'affichage des dates en format US
```

```markdown
📦 Version 2.2.1 - 2024-09-28

🔧 Améliorations
• [IMP-176] Interface de recherche repensée pour une meilleure UX

🐛 Corrections de bugs
• [FIX-301] Résolution du problème de synchronisation sur Safari
```

### ✅ À vous de jouer - Construire un prompt "Few-Shot"

#### Structure du prompt à créer :

```
Voici le format standard utilisé pour nos Release Notes :

[Insérer les 2 exemples ci-dessus]

En suivant EXACTEMENT ce format (structure, emojis, codes de tickets),
génère les Release Notes pour la version 2.4.0 qui inclut :

Nouvelles fonctionnalités :
- Intégration Slack pour notifications temps réel (FEAT-267)
- Mode collaboratif avec édition simultanée (FEAT-271)

Améliorations :
- Refonte du moteur de recherche avec filtres avancés (IMP-201)

Corrections :
- Problème de déconnexion automatique après 10min (FIX-334)
- Erreur d'affichage des graphiques sur mobile (FIX-340)
```

### 🧪 Testez et validez

Vérifiez que le résultat respecte :
- ✅ La structure exacte (sections dans le bon ordre)
- ✅ Les emojis corrects (📦 ✨ 🔧 🐛)
- ✅ Le format des codes tickets ([FEAT-XXX], [IMP-XXX], [FIX-XXX])
- ✅ Le style de rédaction cohérent

### 🎯 Cas d'usage réel - Votre tour !

**Réfléchissez** : Quel document produisez-vous régulièrement qui pourrait bénéficier de cette approche ?

Exemples :
- Compte-rendu de réunion
- Rapport de sprint
- Email de communication stakeholders
- Notes de démo
- Brief pour designers/développeurs

**Mini-exercice** : Prenez 5 minutes pour créer un prompt "Few-Shot" avec 1-2 exemples pour l'un de vos documents récurrents.

### 💬 Débrief (5 min)

- Le format a-t-il été respecté à 100% ?
- Quels types de documents de votre quotidien PO/PM gagneraient à être standardisés ?
- Quels sont les risques de la sur-standardisation ?

---

## 🎓 Points clés à retenir

| Exercice | Technique apprise | Quand l'utiliser |
|----------|-------------------|-----------------|
| **1. Structure ACTF** | Acteur + Contexte + Tâche + Format | Pour tout nouveau prompt, toujours commencer par structurer |
| **2. Itération** | Affiner progressivement par prompts successifs | Quand le premier résultat est insuffisant (c'est normal !) |
| **3. Few-Shot** | Fournir des exemples concrets | Pour imposer un format précis et garantir la cohérence |

---

## 🚀 Aller plus loin - Devoirs pour la semaine

1. **Créer votre bibliothèque de prompts**
   - Documentez 3 prompts réutilisables pour vos tâches récurrentes
   - Utilisez la méthode ACTF systématiquement

2. **Pratiquer l'itération**
   - Testez les 3 exercices sur vos vrais user stories
   - Notez les prompts d'itération qui fonctionnent le mieux

3. **Constituer votre banque d'exemples**
   - Rassemblez 2-3 exemples de vos meilleurs documents (user stories, comptes-rendus, etc.)
   - Préparez-les pour du Few-Shot Learning

---

## 📌 Rappels importants

> [!WARNING]
> **Toujours vérifier** les résultats générés par l'IA. Elle peut "halluciner" (inventer des faits).

> [!TIP]
> **Le secret** : Itérer, itérer, itérer ! Les meilleurs résultats viennent après 2-3 itérations minimum.

> [!NOTE]
> **Confidentialité** : Ne partagez jamais de données sensibles (clients, stratégie) avec les IA publiques. Utilisez des versions entreprise si nécessaire.