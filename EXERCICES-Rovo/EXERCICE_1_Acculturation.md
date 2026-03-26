# EXERCICES PRATIQUES - MODULE 1 : Acculturation IA

**Durée estimée** : 45 minutes  
**Outils** : Atlassian Rovo (Jira, Confluence)  
**Date** : 26 mars 2026

*Contexte : Vous êtes PO sur un nouveau produit. Votre organisation vient d'activer Atlassian Rovo pour accélérer la recherche d'informations et faciliter l'onboarding.*

---

## Exercice 1.1 : La recherche unifiée (Rovo Unified Search)

L'un des plus grands défis d'un PO/PM est de retrouver de l'information dispersée entre les spécifications Confluence, les tickets Jira et les dépôts de code tiers (GitHub, Bitbucket).

**Scénario :**  
Vous devez préparer une présentation sur la fonctionnalité "Payment Gateway" mais vous ignorez l'état d'avancement exact et où se trouve la dernière documentation à jour.

**Instructions étape par étape :**
1. Connectez-vous à votre espace Confluence.
2. Utilisez la barre de recherche globale optimisée par Rovo.
3. Tapez en langage naturel : *"Où en est le développement de la Payment Gateway et quelle est la page Confluence principale ?"*
4. **Observez les résultats** : Rovo va synthétiser une réponse en sourçant à la fois les derniers tickets Jira (statut 'In Progress' ou 'Done') et les pages Confluence associées.
5. **Filtrage avancé** : Demandez à Rovo d'affiner : *"Quels sont les tickets bloqués (Blocked) relatifs à ce sujet depuis 2 semaines ?"*

---

## Exercice 1.2 : Synthèse et idéation (Rovo Chat)

Les concepts d'IA agentiques peuvent être complexes. Le Chat IA de Rovo est intégré nativement dans votre espace de travail pour vous aider à synthétiser et générer du contenu sans quitter votre environnement.

**Scénario :**  
Vous avez trouvé une très longue documentation technique sur la future architecture "Agent-to-Agent" de votre entreprise. Vous n'avez pas le temps de tout lire avant votre réunion.

**Instructions étape par étape :**
1. Ouvrez une page Confluence contenant un document technique dense ou une longue note de réunion.
2. Cliquez sur l'icône Rovo Chat (ou utilisez le raccourci navigateur si l'extension est installée).
3. **Prompt 1 (Synthèse)** : *"Résume cette page en 3 points de discussion clés (bullet points) destinés à un comité de direction non-technique."*
4. **Prompt 2 (Croisement de données)** : *"Existe-t-il actuellement des Epics Jira créées par [Nom du Lead Dev] qui correspondent à l'implémentation de ces agents ?"*
5. **Prompt 3 (Création de contenu)** : *"Génère l'ébauche d'une nouvelle page Confluence qui explique simplement les risques liés à cette architecture, en te basant sur nos historiques de discussion."*
