# Exercices Module 2 : Maîtriser le triptyque Qualité / Coûts / Délais avec l'IA (Cas d'étude TaskFlow)

**Durée totale** : 1 h (3 × 20 min)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : [Vibe de Mistral](https://chat.mistral.ai) (recommandé et préconisé par rapport à ChatGPT), [Claude](https://claude.ai) ou [ChatGPT](https://chat.openai.com)

---

## 🎯 Objectif pédagogique

Comprendre concrètement comment l'IA peut vous aider à piloter et équilibrer les **trois dimensions clés de vos projets** sur la base des données réelles du projet **TaskFlow** :

- **Qualité** → Analyser les bugs et dettes techniques complexes du backlog pour en tirer des critères d'acceptation testables et éviter les régressions.
- **Coûts** → Analyser l'historique d'estimations des sprints passés pour calibrer l'effort des futures fonctionnalités et évaluer l'impact budgétaire.
- **Délais** → Évaluer la vélocité historique réelle de l'équipe pour projeter la faisabilité d'un sprint et alerter en amont les parties prenantes.

---

## 📐 Exercice 1 : QUALITÉ - Transformer un bug de performance flou en spécification testable

**Durée** : 20 minutes  
**Objectif** : Utiliser l'IA pour décortiquer une anomalie technique du backlog, lever les ambiguïtés et générer des critères de validation de non-régression.

### Le problème

Dans le cadre de l'intégration Slack de TaskFlow, vous recevez ce rapport d'anomalie de l'équipe QA (`BUG-564` du backlog) :

```text
Le serveur freeze lors de la création d'une tâche quand Slack est connecté. Ça rame grave pendant 2 à 3 secondes lors de la sauvegarde. Il faut rendre l'envoi asynchrone et s'assurer que ça ne bloque pas l'enregistrement en base de données. Si Slack est en panne, la tâche doit quand même être créée.
```

**🚨 Problèmes identifiés** :
- Expressions trop subjectives ("ça rame grave", "freeze").
- Pas de critères d'acceptation ni de seuil de performance clair.
- Pas de définition des cas d'erreur réseau Slack.

### ✅ Mission : Spécifier la résolution de l'anomalie avec l'IA

#### **Étape 1** : Analyse d'impact et questions de clarification (5 min)

Utilisez ce prompt :

```text
Tu es un expert QA et Business Analyst sur le projet TaskFlow. Analyse ce rapport d'anomalie brut et identifie les ambiguïtés et les informations manquantes nécessaires pour les développeurs :

Rapport d'anomalie :
"Le serveur freeze lors de la création d'une tâche quand Slack est connecté. Ça rame grave pendant 2 à 3 secondes lors de la sauvegarde. Il faut rendre l'envoi asynchrone et s'assurer que ça ne bloque pas l'enregistrement en base de données. Si Slack est en panne, la tâche doit quand même être créée."

Pour chaque point flou, propose une question de clarification précise à poser au PO ou à l'architecte technique.
```

**Attendu** : Une liste structurée des questions (ex: Quel est le temps de réponse acceptable maximum ? Que fait-on de la notification si Slack est injoignable : abandon ou file d'attente ?).

---

#### **Étape 2** : Générer des critères d'acceptation Gherkin testables (10 min)

Soumettez ce prompt dans la même discussion :

```text
À partir de l'anomalie précédente et en fixant des seuils raisonnables (temps de réponse < 150ms pour la création de tâche en base de données, envoi Slack asynchrone en tâche de fond), génère 5 critères d'acceptation en format Gherkin (Given/When/Then).

Couvre les cas suivants :
1. Cas nominal : Création de tâche avec envoi Slack réussi (mesure du temps de réponse client).
2. Cas de résilience : Slack est hors-ligne (l'API Slack renvoie une erreur 500 ou timeout) -> la tâche TaskFlow doit quand même être créée avec succès.
3. Cas de charge : Créations simultanées de tâches par plusieurs utilisateurs.
4. Cas de sécurité : Signature du webhook Slack valide.
```

**Attendu** : 5 scénarios Gherkin précis et mesurables pour les développeurs et la QA.

---

#### **Étape 3** : Comparer le gain en qualité (5 min)

Complétez mentalement ou sur vos notes le tableau comparatif :
* La spécification initiale permettait-elle de coder et de tester sans erreur ?
* Quel est le gain estimé en évitant des allers-retours de dev (redéveloppement) ?

---

## 💰 Exercice 2 : COÛTS - Estimer l'effort grâce à l'analyse de données historiques

**Durée** : 20 minutes  
**Objectif** : Utiliser l'IA pour analyser les statistiques réelles des sprints passés de TaskFlow afin d'estimer et de budgétiser une nouvelle fonctionnalité.

### Le scénario

L'équipe TaskFlow s'apprête à développer la **Feature F - Gestion de ressources (Resources)**. Cinq tickets sont prévus pour le prochain sprint, mais certains n'ont pas encore été estimés par l'équipe :

1. `US-635` (Visualiser le plan de charge - Gantt) : Estimé par l'équipe à **40h**
2. `US-636` (Assigner un collaborateur avec taux spécifique) : **Non estimé** (User Story moyenne)
3. `US-637` (Détecter et afficher les sur-allocations) : Estimé par l'équipe à **32h**
4. `BUG-638` (Mauvaise gestion des jours fériés dans la capacité) : **Non estimé** (Bug fonctionnel complexe)
5. `BUG-644` (Lenteur extrême du Gantt si > 50 ressources) : **Non estimé** (Bug de performance critique)

### Données historiques de l'équipe (Sprints 1 à 6)

Voici le bilan réel des sprints passés de l'équipe (5 développeurs à 600 € / jour de TJM) :

* **Sprint 1** : 6 tickets fermés. Estimé : 124h | Réalisé : 106h (-14%)
* **Sprint 2** : 9 tickets fermés. Estimé : 200h | Réalisé : 250h (+25%)
* **Sprint 3** : 13 tickets fermés. Estimé : 192h | Réalisé : 227h (+18%)
* **Sprint 4** : 7 tickets fermés. Estimé : 204h | Réalisé : 176h (-14%)
* **Sprint 5** : 17 tickets fermés. Estimé : 304h | Réalisé : 328h (+8%)
* **Sprint 6** : 32 tickets fermés. Estimé : 580h | Réalisé : 645h (+11%)

**Déviation d'estimation par Type de ticket (Historique global Sprints 1-6)** :
* **Spikes (Recherches)** : Estimé : 200h | Réalisé : 202h (+1%)
* **User Stories (Développements)** : Estimé : 744h | Réalisé : 880h (+18,3% de dérive)
* **Dette Technique** : Estimé : 100h | Réalisé : 92h (-8%)
* **Bugs** : Estimé : 560h | Réalisé : 558h (0% de dérive)

---

### ✅ Mission : Estimer et budgétiser la nouvelle Feature avec l'IA

Utilisez ce prompt :

```text
Tu es un expert en estimation de projets IT pour l'application TaskFlow.
Voici l'historique d'estimation et de temps réel de notre équipe de 5 développeurs (TJM moyen : 600 € / jour, 7h de travail par jour) :
- Sprints 1 à 6 : Total estimé = 1604h | Réalisé = 1732h.
- Dérive par type de ticket : User Stories (+18,3% de temps réel par rapport à l'estimé), Bugs (0% de dérive), Spikes (+1% de dérive), Dette technique (-8% de dérive).

Nous devons estimer la Feature "Gestion de ressources" pour le Sprint 7 comprenant :
1. US-635 (Visualiser le plan de charge - Gantt) : Estimé à 40h.
2. US-636 (Assigner un collaborateur avec taux spécifique) : Non estimé. À évaluer (considère que c'est une User Story de complexité moyenne, comparable aux autres US du backlog).
3. US-637 (Détecter et afficher les sur-allocations) : Estimé à 32h.
4. BUG-638 (Mauvaise gestion des jours fériés dans la capacité) : Non estimé. À évaluer (considère que c'est un bug fonctionnel complexe).
5. BUG-644 (Lenteur extrême du Gantt si > 50 ressources) : Non estimé. À évaluer (considère que c'est un bug de performance, similaire au BUG-564 qui avait nécessité 34h de développement).

Étape par étape :
1. Estime en heures les 3 tickets non chiffrés (US-636, BUG-638, BUG-644) en te basant sur les éléments de contexte fournis.
2. Calcule l'effort total brut estimé pour cette Feature (somme des 5 tickets).
3. Applique les coefficients de dérive historiques par type (User Story vs Bug) pour obtenir une estimation de temps réel "réaliste".
4. Calcule le budget prévisionnel (en euros) en mode "Brut" vs "Réaliste" (sur la base d'une journée de 7h à 600€ par développeur).
5. Fournis un niveau de confiance (en %) pour cette estimation et justifie-le.
```

**Attendu** :
- Estimations cohérentes des tickets non chiffrés.
- Calcul de la dérive budgétaire historique.
- Budget global estimé réaliste en euros (évitant des mauvaises surprises au sponsor).

---

## ⏰ Exercice 3 : DÉLAIS - Détecter les risques de retard dans la livraison d'un Sprint

**Durée** : 20 minutes  
**Objectif** : Utiliser l'IA comme outil d'analyse prédictive pour anticiper les retards sur le Sprint 7 de TaskFlow et proposer un plan d'action d'arbitrage.

### Le scénario

Vous démarrez le **Sprint 7** (durée : 2 semaines, soit 10 jours ouvrés).
L'équipe est composée de **5 développeurs** à temps plein (capacité théorique nominale : 5 devs × 10 jours × 7h/jour = 350h de capacité brute).

**Situation actuelle de la planification du Sprint 7** :
- Le Sprint 7 contient **27 tickets ouverts** (tous estimés ou réévalués lors de l'exercice précédent), représentant une charge de travail estimée "réaliste" totale de **280 heures**.
- **Contraintes & Risques signalés** :
  1. Le développeur senior de l'équipe (Sarah) a posé 5 jours de congés en deuxième semaine du sprint (perte de 35h de capacité).
  2. 3 tickets du sprint précédent (Sprint 6), représentant 24h d'effort estimé, sont bloqués en attente de la validation client (QA) et risquent de glisser sur ce sprint si le client demande des ajustements.
  3. L'équipe a dû planifier un correctif urgent non estimé (BUG-567 : crash avec plus de 1000 canaux Slack) qui vient d'apparaître en production.

---

### ✅ Mission : Prédire l'atterrissage du Sprint et mitiger les risques avec l'IA

Utilisez ce prompt :

```text
Tu es Scrum Master / Project Manager sur le projet TaskFlow.
Voici le contexte du Sprint 7 (durée 10 jours) :
- Équipe : 5 développeurs (capacité théorique standard : 350h).
- Contenu planifié : 27 tickets ouverts représentant 280h d'effort estimé.
- Perte de capacité : 1 développeur senior absent 5 jours (-35h de capacité).
- Encours bloqué : 3 tickets (24h) en attente QA client pouvant nécessiter du rework sur ce sprint.
- Imprévu : 1 bug critique de production (BUG-567) à traiter d'urgence (effort estimé à 16h).

Fais une analyse prédictive d'atterrissage du sprint :
1. Calcule la capacité réelle disponible de l'équipe pour ce sprint en prenant en compte l'absence et une marge de sécurité de 10% pour les réunions et imprévus.
2. Compare cette capacité réelle à la charge totale (charge planifiée + bug de prod urgent + rework potentiel des tickets bloqués).
3. Détermine s'il y a un risque de retard et de combien d'heures l'équipe est surchargée.
4. Identifie les 3 risques majeurs pesant sur la date de livraison finale du sprint.
5. Propose une stratégie d'arbitrage (quels types de tickets repousser au Sprint 8 en priorité, en te basant sur la valeur et la priorité pour le produit).
```

**Attendu** :
- Diagnostic de surcharge chiffré (ex: Capacité réelle ~280h vs Charge totale ~320h).
- Plan de délestage intelligent (déplacer des US de faible priorité ou des tâches de refonte non bloquantes vers le Sprint 8).
- Communication proactive à envoyer aux parties prenantes (stakeholders) pour les informer d'un arbitrage de scope avant la fin du sprint.

---

## 🎓 Synthèse pédagogique

| Exercice | Dimension du Triptyque | Rôle de l'IA | Valeur ajoutée PO/PM |
| :--- | :--- | :--- | :--- |
| **1. Spécification QA** | **Qualité** | Analyse d'ambiguïté & Génération Gherkin | Zéro bug de spécification, QA alignée |
| **2. Estimation historique** | **Coûts** | Modélisation des dérives passées | Budgets réalistes basés sur les faits |
| **3. Analyse prédictive** | **Délais** | Calcul d'atterrissage capacitaire | Pilotage proactif du scope et des risques |

---

## 📌 Rappels importants

> [!IMPORTANT]
> **Le triptyque n'est pas négociable** : Si la qualité baisse, les coûts de maintenance explosent et les délais s'allongent. L'IA apporte la rigueur de la donnée pour défendre vos estimations et vos arbitrages auprès du management.

> [!WARNING]
> **Ajustement de capacité** : Ne planifiez jamais un sprint à 100% de la capacité brute théorique. L'historique de TaskFlow prouve que les imprévus (bugs de production, rework QA) consomment en moyenne 15 à 20% du temps de l'équipe.

> [!TIP]
> **La donnée est reine** : Plus vous alimentez l'IA avec des données historiques précises, plus ses prédictions seront fiables. Documentez vos projets !

> [!CAUTION]
> **Gouvernance et Sécurité (Accord Projet)** : L'utilisation de données de backlog et d'historiques d'équipe avec des IA génératives doit respecter les règles de confidentialité de votre entreprise. Ne chargez jamais de données contenant des noms réels de clients ou de collaborateurs sans accord écrit.
