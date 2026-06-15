# Exercices Module 4 : Décisions, réunions et comptes-rendus avec l'IA (Cas d'étude TaskFlow)

**Durée totale** : 1 h 45 (2 × 20 min frameworks + 2 × 20 min réunions ; exercice Gladia ~25 min)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : [Vibe de Mistral](https://chat.mistral.ai) (recommandé et préconisé par rapport à ChatGPT), [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai) ; pour les exercices 3 et 4 : Microsoft Teams, [Gladia.io](https://gladia.io), [Microsoft Loop](https://loop.microsoft.com)

---

## 🎯 Objectif pédagogique

Maîtriser les **frameworks de décision** et les **workflows de réunion** assistés par IA, appliqués aux problématiques réelles de la roadmap de l'application **TaskFlow** :

- **Framework RICE** : Prioriser objectivement les grandes fonctionnalités de la roadmap en s'appuyant sur les estimations d'effort tirées du backlog CSV.
- **Framework SWOT** : Évaluer la faisabilité et les risques stratégiques d'une fonctionnalité complexe et structurante (ex: le Mode Hors-ligne).
- **Compte-rendu & Tâches collaboratives** : Exploiter la transcription d'une réunion de planification (Teams/Loop) pour extraire des actions claires et assignées.
- **Communication multi-canal** : Transformer la transcription d'une démo produit (Gladia.io) en outils de communication interne (Viva Engage) et externe (LinkedIn, Blog).

---

## Partie A : Frameworks de décision

## 🎯 Exercice 1 : Priorisation RICE basée sur les données du backlog

**Framework** : RICE (Reach × Impact × Confidence / Effort)  
**Objectif** : Utiliser l'IA pour calculer les scores RICE et prioriser les 6 fonctionnalités (Features) majeures de la roadmap TaskFlow.

### Le scénario

Vous devez arbitrer la roadmap du prochain trimestre pour **TaskFlow**. Vous disposez d'une capacité limitée et devez sélectionner les 3 fonctionnalités prioritaires parmi les 6 qui composent votre backlog actuel.

Pour évaluer la variable **Effort**, vous allez vous baser sur les données d'estimations réelles agrégées dans votre backlog CSV :

* **Feature A - Intégration Slack** : 17 tickets | Effort estimé : **256h** (~1,8 personne-mois)
* **Feature B - Mode hors-ligne** : 26 tickets | Effort estimé : **380h** (~2,7 personne-mois)
* **Feature C - Templates de projets** : 20 tickets | Effort estimé : **348h** (~2,5 personne-mois)
* **Feature D - Dashboard exécutif** : 23 tickets | Effort estimé : **332h** (~2,4 personne-mois)
* **Feature E - Intégration Jira** : 20 tickets | Effort estimé : **276h** (~2,0 personne-mois)
* **Feature F - Gestion de ressources** : 15 tickets | Effort estimé : **152h** (~1,1 personne-mois)

*Hypothèse : 1 personne-mois = 140 heures de développement.*

### Contexte produit pour l'évaluation (Reach / Impact / Confidence) :
- TaskFlow compte **5 000 utilisateurs actifs mensuels** (principalement des PMEs technologiques).
- Les clients demandent massivement le mode hors-ligne pour leurs équipes nomades (30% de demande directe).
- L'intégration Slack est très populaire sur le marché pour réduire le temps passé sur l'outil.
- L'équipe de développement maîtrise très bien React (confortable pour les templates et Slack), mais n'a aucune expertise en base de données locale mobile (IndexedDB pour le mode hors-ligne -> niveau de confiance plus faible).

---

### ✅ Mission : Prioriser les features avec l'IA

Rédigez et soumettez le prompt suivant :

```text
Tu es un expert en stratégie produit (Product Manager) sur l'application TaskFlow.
Nous devons prioriser les 6 fonctionnalités candidates suivantes pour notre prochaine roadmap en utilisant le framework RICE :
Score RICE = (Reach * Impact * Confidence) / Effort (en personne-mois)

Voici les données d'Effort issues de notre backlog :
- Feature A (Intégration Slack) : Effort = 1.8 personne-mois (256h)
- Feature B (Mode hors-ligne) : Effort = 2.7 personne-mois (380h)
- Feature C (Templates de projets) : Effort = 2.5 personne-mois (348h)
- Feature D (Dashboard exécutif) : Effort = 2.4 personne-mois (332h)
- Feature E (Intégration Jira) : Effort = 2.0 personne-mois (276h)
- Feature F (Gestion de ressources) : Effort = 1.1 personne-mois (152h)

Contexte produit :
- 5 000 utilisateurs actifs par mois.
- 30% des utilisateurs demandent le mode hors-ligne.
- 60% utilisent Slack au quotidien.
- 15% utilisent Jira en parallèle (équipes hybrides).

Pour CHAQUE fonctionnalité, estime et justifie :
1. Le REACH (nombre d'utilisateurs touchés par trimestre).
2. L'IMPACT (0.25 = Minimal, 0.5 = Faible, 1 = Moyen, 2 = Élevé, 3 = Massif).
3. Le niveau de CONFIDENCE (0.5 = Faible, 0.8 = Moyen, 1.0 = Élevé) basé sur la maturité technique de l'équipe.
4. Calcule le score RICE final.

Présente les résultats sous forme de tableau comparatif trié par score RICE décroissant et recommande les 3 fonctionnalités à intégrer en priorité dans notre roadmap.
```

**Attendu** :
- Un tableau comparatif complet et structuré.
- Une justification logique des variables Reach, Impact et Confidence pour chaque Feature.
- Le top 3 des fonctionnalités recommandées.

---

## 🔍 Exercice 2 : Analyse SWOT sur le Mode Hors-ligne (Feature B)

**Durée** : 20 minutes  
**Framework** : SWOT (Strengths, Weaknesses, Opportunities, Threats)  
**Objectif** : Évaluer la viabilité stratégique et les risques de développement de la fonctionnalité la plus lourde du backlog.

### Le scénario

La **Feature B - Mode hors-ligne** obtient un score RICE élevé en raison de son impact potentiel, mais c'est également la fonctionnalité qui comporte le plus grand effort (380h) et le plus de risques techniques (Spikes de synchronisation, base de données locale IndexedDB). Avant de lancer les développements au Sprint 7, le directeur produit vous demande une analyse SWOT.

---

### ✅ Mission : Réaliser l'analyse SWOT avec l'IA

Soumettez ce prompt à l'IA :

```text
Tu es un Product Owner sénior sur l'application TaskFlow.
Nous devons analyser l'opportunité et les risques de développer la "Feature B - Mode hors-ligne" (permettant aux utilisateurs de consulter et modifier leurs tâches dans le train ou l'avion, puis de synchroniser au retour du réseau).

Données clés :
- Charge de travail estimée : 380h (26 tickets dans le backlog, dont 4 spikes techniques et 5 bugs complexes identifiés en phase de POC).
- Équipe : 5 développeurs web avec une excellente maîtrise de React, mais aucune expertise préalable sur les bases de données embarquées (IndexedDB / Dexie.js) ni sur la gestion de conflits de synchronisation (Sync Queue).
- Marché : Les concurrents directs proposent tous un mode hors-ligne natif très fluide.

Rédige une analyse SWOT structurée (Forces, Faiblesses, Opportunités, Menaces) pour cette prise de décision :
1. Liste 4 à 5 éléments précis par quadrant avec justifications.
2. Formule une recommandation finale (GO / NO-GO / GO sous conditions).
3. Suggère 2 alternatives de développement (ex : PWA, MVP simplifié en lecture seule) pour mitiger les risques de dérive de délais.
```

**Attendu** :
- Une analyse 360° du Mode Hors-ligne.
- Une proposition de plan de mitigation (ex: commencer par une version lecture seule).

---

## Partie B : Réunions et comptes-rendus

## 📹 Exercice 3 : MS Teams - Transcription et exploitation d'un Sprint Planning

**Durée** : 20 minutes  
**Objectif** : Exploiter la transcription textuelle d'une réunion de planification de sprint pour générer des action items collaboratifs dans Microsoft Loop.

### Le scénario

Vous venez de terminer la réunion de planification du Sprint 7 avec l'équipe de développement de TaskFlow. Vous devez rapidement documenter les décisions prises et assigner les tâches de démarrage.

Voici la transcription textuelle brute de la fin de la réunion :

```text
[10:42] PO (Alex) : OK, pour résumer sur ce Sprint 7. On a validé qu'on se concentrait sur le lancement de la Feature F - Gestion de ressources. Thomas, tu confirmes que tu démarres sur la US-635 pour la visualisation du diagramme de Gantt ?
[10:43] Dev 1 (Thomas) : Oui, je commence par concevoir le composant d'affichage du Gantt lundi matin. Ça devrait me prendre environ 5 jours. Je te fais une démo vendredi.
[10:43] PO (Alex) : Parfait. Julie, concernant la US-637 sur la détection des sur-allocations, tu penses pouvoir commencer en parallèle ?
[10:44] Dev 2 (Julie) : Oui, mais j'ai besoin que Thomas ait défini la structure de données des allocations. Je vais travailler sur l'algorithme de calcul des surcharges en début de semaine, et j'intégrerai l'interface graphique à partir de mercredi quand Thomas aura fini sa maquette.
[10:44] PO (Alex) : Très bien, notez bien cette dépendance. De mon côté, je dois contacter le client historique avant mercredi soir pour valider les 3 tickets du Sprint 6 qui sont toujours en attente de validation QA. Si on a des retours, ça risque de surcharger notre sprint.
[10:45] Scrum Master (Sarah) : N'oubliez pas que je suis absente la semaine prochaine à partir de lundi pour 5 jours. Julie, tu prendras le relais sur l'animation du Daily Standup en mon absence ?
[10:45] Dev 2 (Julie) : Pas de problème, je m'en occupe tous les matins à 9h.
[10:46] PO (Alex) : Super. Bon sprint à tous, on se retrouve lundi.
```

---

### ✅ Mission : Générer les action items et le composant Loop

1. Soumettez cette transcription à l'IA avec le prompt suivant :

```text
Tu es un assistant de gestion de projet agile pour TaskFlow. Analyse cette transcription brute de réunion de planification du Sprint 7 et extrais la liste des actions décidées.

Pour chaque action identifiée, fournis :
1. L'intitulé de l'action de manière claire et verbe à l'infinitif.
2. Le responsable identifié dans le dialogue.
3. L'échéance ou le timing mentionné.
4. Les dépendances éventuelles avec d'autres tâches.

Présente le résultat sous forme de tableau Markdown adapté à une importation dans un composant Microsoft Loop de suivi d'équipe.
```

2. Créez virtuellement votre liste de tâches Microsoft Loop à partir du tableau généré pour la partager dans le canal Teams du projet.

---

## 🎬 Exercice 4 : Gladia.io - De la démo produit à la communication multi-canal

**Durée** : 25 minutes  
**Objectif** : Transcrire la démonstration d'une fonctionnalité livrée et générer les supports de communication interne et externe associés.

### Le scénario

L'équipe vient de livrer avec succès la version stable de la **Feature A - Intégration Slack** (Sprint 6). Vous avez enregistré une vidéo de démonstration de 3 minutes montrant comment connecter son canal Slack et recevoir les alertes. Vous devez maintenant en assurer la promotion.

---

### ✅ Mission : Créer la communication multi-canal avec l'IA

Soumettez la transcription de la démo (simulée ci-dessous) à votre IA :

```text
"Bonjour à tous ! Aujourd'hui, je suis ravi de vous présenter la toute nouvelle intégration Slack de TaskFlow, issue de notre sprint 6. C'était une fonctionnalité extrêmement demandée par nos équipes partenaires pour arrêter de perdre du temps à ouvrir l'application toutes les cinq minutes. Alors, comment ça marche ? C'est très simple. Dans les paramètres de votre projet, vous avez désormais un bouton 'Connecter Slack'. Une fois que vous avez cliqué et validé l'authentification sécurisée, un menu déroulant vous permet de choisir le canal Slack sur lequel vous souhaitez envoyer vos notifications. Par exemple, ici, je choisis le canal 'backlog-alertes'. Et regardez : dès que Julie crée une tâche sur le tableau Kanban de TaskFlow, hop, une notification stylisée apparaît instantanément sur Slack avec le titre, la description et un lien direct pour y accéder. Et ce n'est pas tout ! Si vous passez une tâche en statut 'À valider' ou 'Terminé', le bot Slack met à jour le message en temps réel. Nous avons également corrigé le bug de doublons qui envoyait plusieurs alertes lors d'éditions rapides. Cette intégration est disponible dès aujourd'hui pour tous nos clients Premium. Merci à toute l'équipe de dev pour ce superbe travail, et n'hésitez pas à nous faire vos retours !"
```

#### Prompt à exécuter :

```text
Tu es Responsable Communication Produit pour l'application TaskFlow.
À partir de la transcription de notre vidéo de démonstration de l'intégration Slack ci-dessus, génère les 3 livrables suivants :

1. POST LINKEDIN (externe) : Un post engageant, orienté bénéfice client (gain de temps, réduction du bruit de notifications, automatisation), avec une accroche percutante, 3 puces descriptives avec emojis, et un appel à l'action invitant à essayer la fonctionnalité Premium. (Longueur max : 150 mots).
2. ANNONCE VIVA ENGAGE (interne entreprise Astek) : Un message collaboratif et chaleureux destiné aux collaborateurs internes pour annoncer le succès de la livraison du Sprint 6, féliciter chaleureusement l'équipe de développement, et inviter à tester la fonctionnalité en interne. (Longueur max : 100 mots).
3. ARTICLE DE BLOG DE SYNTHÈSE : Un article structuré au format Markdown avec des titres (H2, H3), une introduction posant le problème de la dispersion de l'attention en équipe, un développement sur la simplicité de configuration de l'intégration Slack, et une conclusion sur l'engagement de TaskFlow à améliorer l'efficacité des équipes.
```

**Attendu** : Les 3 textes rédigés dans un français impeccable, respectant la ligne éditoriale spécifique de chaque canal de communication.

---

## 📌 Rappels importants

> [!IMPORTANT]
> **Aide à la décision** : Les frameworks (RICE, SWOT) et les comptes-rendus automatisés par l'IA ne remplacent pas la validation du PO/PM. Ils préparent le travail pour vous permettre de vous concentrer sur la négociation avec les clients et l'alignement de l'équipe.

> [!WARNING]
> **Respect des formats** : Lors de la génération de fichiers de sous-titres (SRT) ou de résumés de réunions, vérifiez toujours les dates et les orthographes des noms de collaborateurs.

> [!CAUTION]
> **Gouvernance et Sécurité (Accord Projet)** : Les transcriptions de réunions internes de l'entreprise ou de discussions avec des clients contiennent des informations hautement confidentielles. Assurez-vous d'utiliser une instance d'IA d'entreprise sécurisée (ex: Copilot M365 ou instance d'entreprise dédiée) et d'avoir l'accord explicite de l'organisation pour traiter ces fichiers.