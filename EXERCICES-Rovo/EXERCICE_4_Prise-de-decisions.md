# EXERCICES PRATIQUES - MODULE 4 : Prise de Décisions

**Durée estimée** : 45 minutes  
**Outils** : Atlassian Rovo Analytics et Rovo Chat  
**Date** : 26 mars 2026

*Contexte : Vous êtes Product Owner et vous devez trancher sur la priorisation d'un lot de fonctionnalités (Epics) pour le prochain trimestre. Vous disposez de multiples données (feedback client, complexité technique, valeur métier) dispersées dans l'outil, et Rovo va vous aider à prendre cette décision de manière éclairée.*

---

## Exercice 4.1 : Synthèse des données de décision avec Rovo

Avant de pouvoir utiliser des frameworks de priorisation (RICE, WSJF), vous devez consolider les informations.

**Scénario :**  
Vous avez plusieurs tickets Jira récurrents signalant un problème sur l'UX de la page Profil. En parallèle, des spécifications de refonte existent, mais vous devez savoir si le jeu en vaut la chandelle.

**Instructions étape par étape :**
1. Ouvrez une nouvelle page Confluence intitulée "Aide à la Décision - Refonte UX".
2. Sollicitez Rovo Chat (ou Rovo in-line) avec le prompt suivant :  
   *"Identifie tous les tickets Jira de type 'Bug' ou 'Feedback' liés à la page Profil ou à la gestion du compte utilisateur créés ces 3 derniers mois. Produis un tableau synthétique indiquant : Clé du ticket, Résumé, et Gravité perçue."*
3. Rovo compile les tickets, vous évitant de longues recherches via l'interface Jira standard JQL.

---

## Exercice 4.2 : Analyse et application de Framework de Priorisation (ICE/RICE)

L'intelligence artificielle est un excellent copilote pour objectiver un score de priorisation lorsque les données sont fournies.

**Scénario :**  
Vous avez deux "Epics" majeurs en concurrence : l'ajout du SSO (Google/Apple) ou la Refonte de l'interface de paiement.

**Instructions étape par étape :**
1. Demandez à Rovo d'agir comme un consultant produit expérimenté :  
   *"En tant qu'agiliste expert, compare les Epics `[EPIC_SSO_ID]` et `[EPIC_PAIEMENT_ID]`. En te basant sur le contenu de ces Epics et les commentaires associés, propose-moi une évaluation selon la méthode RICE (Reach, Impact, Confidence, Effort). Détaille ton raisonnement pour chaque composante."*
2. **Analyse de la restitution** : Observez comment Rovo estime l'"Effort" basé sur le nombre de sous-tâches ou les temps passés similaires, et l'"Impact" basé sur les objectifs métier définis dans les descriptions.
3. *Critique* : La décision finale appartient toujours au PO ! Demandez ensuite à Rovo : *"Si nous voulons maximiser l'acquisition utilisateur à court-terme, lequel devrions-nous prioriser (et pourquoi) indépendamment du calcul RICE ?"*
