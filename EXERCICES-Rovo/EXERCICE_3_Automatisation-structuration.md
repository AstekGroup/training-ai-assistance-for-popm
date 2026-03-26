# EXERCICES PRATIQUES - MODULE 3 : Automatisation & Structuration

**Durée estimée** : 60 minutes  
**Outils** : Rovo Agents (Rovo Studio)  
**Date** : 26 mars 2026

*Contexte : Le respect de la gouvernance Data et des règlements (AI Act, RGPD) est souvent perçu comme chronophage. Vous allez configurer des agents virtuels Rovo pour automatiser cette gouvernance de manière transparente.*

---

## Exercice 3.1 : Configuration d'un Agent Rovo "Backlog Groomer"

Rovo permet de créer des coéquipiers virtuels (Agents) spécialisés qui réalisent des tâches en arrière-plan.

**Scénario :**  
Votre backlog produit s'est alourdi de dizaines de tickets mal renseignés, sans Story Points, ou obsolètes (> 6 mois sans mise à jour). Vous manquez de temps pour le trier manuellement.

**Instructions étape par étape :**
1. Rendez-vous dans **Rovo Studio** pour créer un nouvel Agent custom.
2. **Nom de l'Agent** : "Scrum Master Virtuel (Gouvernance)"
3. **Paramétrage des Prompt instructions (Directives de l'agent)** :
   - *Rôle* : Tu es un gardien rigoureux du backlog Jira pour l'équipe mobile.
   - *Objectif* : Auditer chaque semaine les tickets du projet `[PROJET_ID]`. 
   - *Règles métier* : 
     1. Si un ticket n'a pas été modifié depuis +60 jours, ajoute-lui un tag `OBSOLETE_A_CONFIRMER`.
     2. Si un ticket est au statut 'To Do' mais ne contient pas de Story Points, ajoute un commentaire : *"@assignee, merci de procéder à l'estimation chiffrée lors du prochain refinement."*
4. **Déclenchement (Trigger)** : Configurez l'Agent pour qu'il s'exécute de manière planifiée tous les vendredis à 14h, ou sur requête manuelle via le Rovo Chat.
5. *Variante d'exercice* : Demandez à cet agent (depuis le Chat) de générer une vue consolidée de tous les tickets "obsolètes" pour faciliter la suppression en masse.

---

## Exercice 3.2 : Workflows de Conformité RGPD / AI Act

Les workflows agentiques peuvent détecter les risques légaux avant la mise en production.

**Scénario :**  
L'entreprise doit s'assurer qu'aucune nouvelle fonctionnalité collectant des données personnelles ne passe en Sprint Planning sans validation du DPO (Data Protection Officer).

**Instructions étape par étape (Simulé) :**
1. Sur une page Confluence (type Spécifications produit), rédigez le contenu d'une feature : *"Mise en place d'un formulaire de reconnaissance vocale et collecte de l'âge de l'utilisateur"*.
2. Ouvrez l'interface d'un Rovo Agent dédié à la conformité (ex: "Compliance Bot").
3. Demandez-lui : *"Audite cette page de spécification. En te basant sur le RGPD et l'AI Act européen, détecte les points sensibles de cette feature et génère des tâches Jira associées pour une revue par l'équipe juridique."*
4. Observez l'analyse de Rovo (qui va flaguer la reconnaissance vocale et la donnée d'âge) et sa capacité à proposer la création automatisée de "Compliance Tasks" (sous-tâches ou tickets liés) directement au sein du workflow Jira.
