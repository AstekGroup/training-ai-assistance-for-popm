# Cahier des charges - Espace Client MyBank

**Projet** : Refonte de l'espace client en ligne
**Client** : MyBank (banque en ligne)
**Date** : Novembre 2025
**Contexte** : Amélioration de l'expérience utilisateur sur l'espace client web

---

## 1. Contexte du projet

MyBank est une banque en ligne comptant 250 000 clients actifs. L'espace client actuel date de 2019 et présente des limitations importantes en termes d'expérience utilisateur et de fonctionnalités.

### Problèmes identifiés
- Taux d'abandon de 35% lors de la consultation des comptes
- Temps moyen de 4 clics pour effectuer un virement
- Absence de notifications en temps réel
- Interface non responsive sur mobile (40% du trafic)
- Satisfaction client : 2.8/5 sur l'espace client

---

## 2. Objectifs métier

### Objectifs principaux
1. Réduire le taux d'abandon de 35% à 15%
2. Améliorer la satisfaction client de 2.8/5 à 4.2/5
3. Augmenter l'utilisation mobile de 40% à 65%
4. Réduire les appels au service client de 20%

### KPIs de succès
- Net Promoter Score (NPS) > 40
- Temps moyen de virement < 2 clics
- Taux de conversion vers produits d'épargne : +15%
- Taux d'utilisation des notifications : > 60%

---

## 3. Fonctionnalités demandées (besoins bruts)

### Module 1 : Consultation des comptes
> "Les clients doivent pouvoir voir leurs comptes rapidement et comprendre leur situation financière en un coup d'œil"

**Besoins exprimés** :
- Afficher le solde de tous les comptes (comptes courants, livrets, PEL)
- Montrer les dernières opérations (au moins les 10 dernières)
- Permettre de rechercher des opérations par date ou montant
- Afficher un graphique de l'évolution du solde sur 3 mois
- Catégoriser automatiquement les dépenses (loyer, courses, loisirs, etc.)

**Contraintes techniques** :
- Temps de chargement < 2 secondes
- Rafraîchissement des données toutes les 5 minutes
- Compatible navigateurs : Chrome, Firefox, Safari, Edge (2 dernières versions)

---

### Module 2 : Virements
> "Faire un virement doit être simple et rapide, même pour les personnes peu à l'aise avec le digital"

**Besoins exprimés** :
- Faire un virement vers un bénéficiaire enregistré
- Ajouter un nouveau bénéficiaire (français et international)
- Programmer des virements récurrents (mensuel, trimestriel, annuel)
- Modifier ou annuler un virement programmé
- Recevoir une confirmation par email et notification push
- Historique des virements des 12 derniers mois

**Contraintes** :
- Authentification forte obligatoire (DSP2)
- Limite de virement : 5 000€ sans validation supplémentaire
- Virements SEPA : exécution sous 24h ouvrées
- Virements instantanés : option payante (0,50€)

---

### Module 3 : Notifications et alertes
> "Je veux être prévenu en temps réel de ce qui se passe sur mes comptes, mais sans être submergé de notifications"

**Besoins exprimés** :
- Notification lors d'un débit > 100€
- Alerte si solde < seuil personnalisable
- Notification de réception de virement
- Alerte de découvert
- Récapitulatif hebdomadaire par email
- Possibilité de personnaliser les préférences de notifications

**Canaux** :
- Notifications push (mobile)
- Email
- SMS (pour les alertes critiques uniquement)

---

### Module 4 : Gestion des cartes bancaires
> "Les clients doivent pouvoir gérer leurs cartes facilement, notamment pour les bloquer en cas de perte"

**Besoins exprimés** :
- Visualiser toutes les cartes actives
- Bloquer/débloquer temporairement une carte
- Faire opposition en cas de perte/vol
- Modifier le plafond de paiement et de retrait
- Consulter l'historique des transactions par carte
- Activer/désactiver les paiements en ligne
- Activer/désactiver les paiements à l'étranger

**Contraintes de sécurité** :
- Authentification forte pour toute action critique
- Confirmation par SMS pour opposition
- Traçabilité complète des actions

---

### Module 5 : Produits d'épargne
> "Faciliter la souscription de produits d'épargne et le suivi de la performance"

**Besoins exprimés** :
- Consulter les produits d'épargne disponibles (Livret A, LDDS, PEL, Assurance-vie)
- Simuler le rendement d'un placement
- Souscrire à un nouveau produit d'épargne en ligne
- Effectuer un versement sur un produit existant
- Programmer des versements automatiques
- Visualiser la performance des placements (graphiques)

**Contraintes réglementaires** :
- Respect des plafonds légaux (Livret A : 22 950€)
- Documents d'information obligatoires avant souscription
- Délai de rétractation de 14 jours

---

## 4. Contraintes techniques générales

### Architecture
- API REST pour le backend
- Frontend : React ou Vue.js (à décider)
- Mobile : Progressive Web App (PWA)
- Hébergement : Cloud Azure (contrainte groupe)

### Sécurité
- Authentification forte DSP2 (SMS, biométrie)
- Chiffrement TLS 1.3 minimum
- Conformité RGPD
- Logs d'audit complets
- Session timeout : 10 minutes d'inactivité

### Performance
- Time to Interactive (TTI) < 3 secondes
- Disponibilité : 99.9% (SLA)
- Scalabilité : 10 000 utilisateurs simultanés

### Accessibilité
- Conformité WCAG 2.1 niveau AA minimum
- Support lecteurs d'écran
- Navigation au clavier

---

## 5. Utilisateurs cibles

### Profils types

**1. Marie, 28 ans - Urbaine connectée**
- Utilise principalement le mobile
- Fait 3-4 virements par semaine
- Veut tout contrôler en temps réel
- Attend une interface moderne et intuitive

**2. Jean, 52 ans - Profession libérale**
- Utilise desktop et mobile
- Gère plusieurs comptes (perso + pro)
- Besoin de virements programmés
- Sensible à la sécurité

**3. Sylvie, 67 ans - Retraitée**
- Utilise principalement desktop
- Opérations simples (consultation, virements occasionnels)
- Besoin d'une interface claire et guidée
- Peu à l'aise avec le digital

---

## 6. Planning et budget indicatifs

### Phases envisagées
- Phase 1 : Consultation comptes + Virements (3 mois)
- Phase 2 : Notifications + Cartes (2 mois)
- Phase 3 : Épargne (2 mois)

### Budget
- Budget global estimé : 450 000€
- Équipe : 1 PO, 1 Scrum Master, 4 développeurs, 1 QA, 1 UX Designer

---

## 7. Instructions pour les apprenants

### Pour l'exercice 1 : Génération de user stories

Vous devez :
1. Choisir **UN module** parmi les 5 proposés
2. Identifier les besoins bruts du module choisi
3. Utiliser l'IA (ChatGPT ou Claude) pour générer :
   - 3 user stories respectant les critères INVEST
   - 5 critères d'acceptation par user story
   - Notes techniques pour l'équipe de développement
4. Vérifier et affiner les résultats avec l'IA
5. Comparer avec vos user stories habituelles

### Critères d'évaluation INVEST à vérifier

- **Independent** : La user story peut être développée indépendamment
- **Negotiable** : Les détails peuvent être discutés
- **Valuable** : Apporte de la valeur à l'utilisateur
- **Estimable** : L'équipe peut estimer l'effort
- **Small** : Réalisable en un sprint
- **Testable** : On peut vérifier qu'elle est terminée

### Exemple de prompt pour démarrer

```
Tu es un Product Owner expérimenté travaillant sur la refonte de l'espace client d'une banque en ligne.

Contexte : [Coller le module choisi]

Génère 3 user stories complètes respectant les critères INVEST pour ce module.

Pour chaque user story :
1. Formule la user story au format "En tant que [rôle], je veux [action] afin de [bénéfice]"
2. Vérifie qu'elle respecte chaque critère INVEST
3. Génère 5 critères d'acceptation détaillés (scénario nominal, alternatifs, erreurs)
4. Ajoute des notes techniques pour l'équipe

Format attendu :
- User Story
- Vérification INVEST (Oui/Non pour chaque critère)
- Critères d'acceptation (numérotés)
- Notes techniques
```

---

**Note** : Ce cahier des charges est volontairement simplifié à des fins pédagogiques. Un véritable CDC bancaire serait beaucoup plus détaillé et inclurait des annexes réglementaires.
