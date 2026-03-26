# EXERCICES PRATIQUES - MODULE 5 : Réunions & Documentation (Kiro)

**Durée estimée** : 60 minutes  
**Outils** : Kiro (AWS Agentic IDE)  
**Date** : 26 mars 2026

*Contexte : Vous êtes Product Owner d'une équipe technique développant une nouvelle "Payment Gateway". Vous devez vous assurer que la documentation technique (Architecture, APIs) soit toujours à jour. Vous allez utiliser Kiro pour piloter la génération documentaire à partir du code (Approche Code2Doc).*

> **Note Pédagogique** : Bien que Kiro soit un IDE (Integrated Development Environment) conçu pour les développeurs, le rôle du PO/PM y est crucial : c'est vous qui rédigez les documents de cadrage ("Specs" et "Steering files") qui brident et guident l'IA dans la production de code et de documentation.

---

## Exercice 4.1 : Rédaction d'un "Spec" Kiro (Contrat de Contexte)

Un "Spec" dans Kiro correspond exactement à la notion de **Contrat de Contexte**. Il s'agit d'un fichier (souvent en format Markdown) définissant le comportement attendu de l'IA Agentique.

**Scénario :**  
Vous dictez à Kiro la manière dont il doit documenter l'architecture de la fonctionnalité de paiement.

**Instructions étape par étape :**
1. Créez un nouveau fichier nommé `payment-doc.spec.md` (qui servira de fichier de contrôle/Steering file pour Kiro).
2. En vous basant sur les **6 Piliers du Context Engineering** vus en cours, rédigez ce "Spec" pour l'Agent Kiro :
   - **Rôle** : "Tu es l'architecte Cloud documentant la plateforme de paiement."
   - **Objectif** : "Générer et maintenir le fichier `ARCHITECTURE.md` du dépôt."
   - **Contraintes** : "Le vocabulaire doit être accessible au métier. Inclure un diagramme Mermaid.js."
   - **Contexte** : "La Payment Gateway utilise Stripe et PayPal via des microservices Node.js."
   - **Format** : Markdown standard.
   - **Validation** : "L'architecture doit lister l'ensemble des endpoints API disponibles."
3. *Réflexion* : Discutez en groupe des limites d'un tel "Contrat". Que se passe-t-il si un développeur modifie l'API sans que le Rôle de Kiro ne prenne en compte cette modification ?

---

## Exercice 4.2 : Les Agent Hooks pour le Code2Doc continu

Le cas d'usage "Code2Doc" prend tout son sens lorsqu'il est automatisé. Les "Agent Hooks" de Kiro s'exécutent automatiquement en réaction à des événements (ex: un développeur sauvegarde un fichier).

**Scénario :**  
Configurer (théoriquement) un Hook pour que la documentation se mette à jour sans effort manuel de votre part.

**Instructions étape par étape :**
1. Identifiez le déclencheur ("Trigger") : Définissez que l'événement "Commit Git" sur le dossier `src/payment/` sera le déclencheur de la documentation.
2. Formalisez l'instruction du Hook (Destinée à Kiro) :  
   *"À chaque modification du code source dans `src/payment/`, exécute le Spec `payment-doc.spec.md` pour lire les nouveaux changements, comprendre l'impact métier, et générer la mise à jour du fichier `ARCHITECTURE.md`."*
3. **Analyse de l'impact métier pour le PO** :  
   - Observez comment ce mécanisme supprime la "dette documentaire" (la doc qui n'est jamais à jour par rapport au code).
   - En tant que PO, vous n'aurez plus besoin de faire la police sur la "Definition of Done (DoD : Documentation à jour)" car l'agent Kiro rédigera le premier brouillon de la doc via ce Hook automatisé.
4. *Conclusion critique* : Comment valider (Human-in-the-loop) que la documentation générée par Kiro correspond toujours à l'intention produit initiale ? (Réponse attendue : via des processus de Pull Requests où le PO valide les modifications documentaires générées).
