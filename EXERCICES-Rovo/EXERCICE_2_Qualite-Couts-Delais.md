# EXERCICES PRATIQUES - MODULE 2 : Qualité, Coûts & Délais

**Durée estimée** : 45 minutes  
**Outils** : Atlassian Rovo Analytics & Rovo Chat  
**Date** : 26 mars 2026

*Contexte : Vous êtes responsable de piloter une release majeure. Vous devez utiliser l'IA pour évaluer la qualité des livrables (User Stories), identifier les goulots d'étranglement (Délais) et optimiser la charge (Coûts).*

---

## Exercice 2.1 : Évaluation de la Qualité et Framework INVEST

La rédaction de User Stories de qualité est critique. L'IA peut agir en tant que "Pair PM" pour valider leur conformité.

**Scénario :**  
Vous avez récupéré une User Story rédigée rapidement : *"En tant que client, je veux payer par carte pour acheter mes articles"*. Cette US manque de contexte, de critères d'acceptation et de tests aux limites.

**Instructions étape par étape :**
1. Ouvrez l'interface de création d'un ticket Jira.
2. Collez la phrase ci-dessus dans la description, puis ouvrez l'assistant Rovo intégré (ou Rovo Chat).
3. **Rédigez le prompt suivant** :  
   *"Agis comme un Coach Agile. Évalue cette User Story selon les critères INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable). Indique quelles lettres échouent et propose une version améliorée incluant 3 critères d'acceptation (Gherkin format Given/When/Then) et les cas d'erreur associés (ex: carte refusée)."*
4. Analysez la réponse de Rovo. Mettez à jour le ticket Jira avec la proposition retenue.

---

## Exercice 2.2 : Rovo Analytics pour le pilotage des Délais

L'évaluation manuelle d'un Sprint en cours peut masquer des dysfonctionnements subtils nécessitant de croiser plusieurs données.

**Scénario :**  
À l'approche de la fin de sprint, votre tableau Kanban montre un nombre anormal de tickets coincés en "Code Review". Vous avez besoin d'un rapport de diagnostic à insérer dans votre compte-rendu hebdomadaire Confluence.

**Instructions étape par étape :**
1. Créez une nouvelle page Confluence vierge intitulée "Rapport d'Itération - Sprint 42".
2. Invoquez Rovo au sein de la page (via l'éditeur "Ask Rovo" ou slash command `/rovo`).
3. **Rédigez le prompt suivant** :  
   *"Génère un rapport analytique du Sprint 42 du projet [PROJET_ID]. Identifie les tickets actuellement en statut 'Code Review' ayant une durée (Time in Status) supérieure à la moyenne. Propose 2 hypothèses de goulots d'étranglement basées sur la complexité (Story points) et les dépendances des tickets bloqués."*
4. Rovo va requêter nativement le Jira Cloud pour vous compiler ce rapport directement sous forme de tableau ou de liste markdown.
5. Intégrez ce tableau dans votre compte-rendu.
