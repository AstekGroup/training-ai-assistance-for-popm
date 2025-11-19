# Données historiques de projets - Exercice 2

**Entreprise** : TechCorp Solutions
**Période** : 2023-2025
**Contexte** : Historique de 15 projets de développement web/mobile pour l'exercice d'estimation

---

## Instructions pour l'exercice

### Objectif
Utiliser ces données historiques pour estimer un nouveau projet en appliquant l'analyse assistée par IA.

### Démarche
1. Analysez les données de ces 15 projets passés
2. Utilisez l'IA pour identifier des patterns et corrélations
3. Estimez le "Projet 16 - Nouveau projet" décrit en fin de document
4. Comparez avec une estimation "traditionnelle" (Planning Poker, avis d'expert)
5. Justifiez les différences

---

## Projets historiques (2023-2025)

### Projet 1 : Module de facturation SaaS

**Description** : Création d'un système de facturation automatique pour application SaaS
**Complexité initiale estimée** : Moyenne (5/10)
**Technologies** : Node.js, PostgreSQL, Stripe API
**Équipe** : 3 développeurs (2 seniors, 1 junior)
**Estimation initiale** : 8 semaines (320 heures)
**Temps réel passé** : 11 semaines (440 heures)
**Résultat** : ✅ Succès (livré avec retard mais qualité satisfaisante)
**Bugs post-production (3 mois)** : 12 bugs (3 critiques, 9 mineurs)

**Facteurs de complexité** :
- Intégration API Stripe : complexe
- Gestion des devises multiples : complexe
- Récurrence de paiement : moyen
- Reporting financier : moyen
- Export PDF factures : simple

**Leçons apprises** :
- Sous-estimation de la complexité de Stripe
- Tests d'intégration insuffisants
- Gestion des erreurs de paiement plus complexe que prévu

---

### Projet 2 : Tableau de bord analytique

**Description** : Dashboard de visualisation de métriques business en temps réel
**Complexité initiale estimée** : Élevée (7/10)
**Technologies** : React, D3.js, WebSocket, MongoDB
**Équipe** : 4 développeurs (3 seniors, 1 junior)
**Estimation initiale** : 10 semaines (400 heures)
**Temps réel passé** : 9 semaines (360 heures)
**Résultat** : ✅ Succès (livré en avance, qualité excellente)
**Bugs post-production (3 mois)** : 4 bugs (0 critiques, 4 mineurs)

**Facteurs de complexité** :
- Graphiques temps réel : complexe
- Agrégation de données : complexe
- Filtres dynamiques : moyen
- Export CSV/PDF : simple
- Responsive design : simple

**Leçons apprises** :
- Équipe expérimentée sur React
- Bonne architecture initiale
- Tests automatisés dès le début

---

### Projet 3 : Application mobile de livraison

**Description** : Application mobile (iOS/Android) pour service de livraison de repas
**Complexité initiale estimée** : Très élevée (9/10)
**Technologies** : React Native, Firebase, Google Maps API
**Équipe** : 5 développeurs (2 seniors, 3 juniors)
**Estimation initiale** : 16 semaines (640 heures)
**Temps réel passé** : 22 semaines (880 heures)
**Résultat** : ⚠️ Succès partiel (dépassement budget, fonctionnalités réduites)
**Bugs post-production (3 mois)** : 28 bugs (8 critiques, 20 mineurs)

**Facteurs de complexité** :
- Géolocalisation temps réel : très complexe
- Notifications push : moyen
- Paiement in-app : complexe
- Gestion de commandes : moyen
- Chat client-livreur : complexe
- Double plateforme iOS/Android : complexe

**Leçons apprises** :
- Équipe junior sous-performante sur React Native
- Problèmes de performance non anticipés
- Complexité de la géolocalisation sous-estimée
- Tests sur devices réels insuffisants

---

### Projet 4 : Refonte UI/UX site e-commerce

**Description** : Refonte complète de l'interface utilisateur d'un site e-commerce existant
**Complexité initiale estimée** : Moyenne (4/10)
**Technologies** : Vue.js, Nuxt.js, Tailwind CSS
**Équipe** : 2 développeurs frontend seniors + 1 UX designer
**Estimation initiale** : 6 semaines (240 heures)
**Temps réel passé** : 7 semaines (280 heures)
**Résultat** : ✅ Succès (livré avec léger retard, excellente qualité)
**Bugs post-production (3 mois)** : 3 bugs (0 critiques, 3 mineurs)

**Facteurs de complexité** :
- Migration de l'ancien code : moyen
- Nouvelles animations : simple
- Responsive design : simple
- Accessibilité WCAG : moyen
- Optimisation performance : moyen

**Leçons apprises** :
- Excellente collaboration dev/UX
- Tests utilisateurs très utiles
- Migration progressive efficace

---

### Projet 5 : API Gateway microservices

**Description** : Développement d'une API Gateway pour architecture microservices
**Complexité initiale estimée** : Très élevée (8/10)
**Technologies** : Go, Kong, Docker, Kubernetes
**Équipe** : 3 développeurs backend (tous seniors)
**Estimation initiale** : 12 semaines (480 heures)
**Temps réel passé** : 10 semaines (400 heures)
**Résultat** : ✅ Succès (livré en avance, excellente qualité)
**Bugs post-production (3 mois)** : 2 bugs (0 critiques, 2 mineurs)

**Facteurs de complexité** :
- Architecture distribuée : très complexe
- Rate limiting : complexe
- Authentication/Authorization : complexe
- Load balancing : complexe
- Monitoring : moyen

**Leçons apprises** :
- Équipe très expérimentée sur microservices
- Documentation technique excellente
- Tests de charge dès le début

---

### Projet 6 : Chatbot service client

**Description** : Chatbot IA pour automatisation du support client de premier niveau
**Complexité initiale estimée** : Moyenne (6/10)
**Technologies** : Python, OpenAI API, FastAPI, Redis
**Équipe** : 2 développeurs (1 senior, 1 junior) + 1 data scientist
**Estimation initiale** : 9 semaines (360 heures)
**Temps réel passé** : 14 semaines (560 heures)
**Résultat** : ⚠️ Succès partiel (dépassement délai, précision chatbot 75% vs 90% attendu)
**Bugs post-production (3 mois)** : 18 bugs (5 critiques, 13 mineurs)

**Facteurs de complexité** :
- Intégration OpenAI : complexe
- Training du modèle : très complexe
- Base de connaissances : moyen
- Escalade vers humain : moyen
- Analytics conversations : moyen

**Leçons apprises** :
- Sous-estimation de la complexité IA
- Dataset d'entraînement insuffisant
- Nécessité d'itérations multiples pour améliorer précision

---

### Projet 7 : Plateforme de réservation en ligne

**Description** : Système de réservation de créneaux horaires pour services professionnels
**Complexité initiale estimée** : Moyenne (5/10)
**Technologies** : PHP Laravel, MySQL, Stripe
**Équipe** : 3 développeurs fullstack (2 seniors, 1 junior)
**Estimation initiale** : 8 semaines (320 heures)
**Temps réel passé** : 8 semaines (320 heures)
**Résultat** : ✅ Succès (livré dans les temps, qualité bonne)
**Bugs post-production (3 mois)** : 7 bugs (1 critique, 6 mineurs)

**Facteurs de complexité** :
- Calendrier interactif : moyen
- Gestion conflits de réservation : complexe
- Notifications email/SMS : simple
- Paiement en ligne : moyen
- Multi-utilisateurs : moyen

**Leçons apprises** :
- Estimation précise grâce à expérience équipe sur Laravel
- Bonne gestion des cas limites (double réservation)

---

### Projet 8 : Migration base de données

**Description** : Migration d'une base MySQL vers PostgreSQL avec zero-downtime
**Complexité initiale estimée** : Très élevée (9/10)
**Technologies** : PostgreSQL, Python scripts, Docker
**Équipe** : 2 développeurs backend seniors + 1 DBA
**Estimation initiale** : 10 semaines (400 heures)
**Temps réel passé** : 15 semaines (600 heures)
**Résultat** : ✅ Succès (retard mais migration sans incident)
**Bugs post-production (3 mois)** : 5 bugs (2 critiques, 3 mineurs)

**Facteurs de complexité** :
- Volume de données (2TB) : très complexe
- Zero-downtime : très complexe
- Transformation schéma : complexe
- Validation data integrity : complexe
- Rollback plan : complexe

**Leçons apprises** :
- Tests sur environnement de staging essentiels
- Plan de rollback a sauvé le projet
- Complexité sous-estimée malgré expertise

---

### Projet 9 : Module de recommandations ML

**Description** : Système de recommandations produits basé sur machine learning
**Complexité initiale estimée** : Élevée (8/10)
**Technologies** : Python, TensorFlow, Kafka, Redis
**Équipe** : 1 data scientist senior + 2 développeurs backend (1 senior, 1 junior)
**Estimation initiale** : 14 semaines (560 heures)
**Temps réel passé** : 18 semaines (720 heures)
**Résultat** : ✅ Succès (retard acceptable, ROI positif)
**Bugs post-production (3 mois)** : 9 bugs (3 critiques, 6 mineurs)

**Facteurs de complexité** :
- Algorithmes ML : très complexe
- Temps réel : complexe
- A/B testing : moyen
- Feature engineering : complexe
- Pipeline de données : complexe

**Leçons apprises** :
- Expérimentation itérative nécessaire
- Infrastructure ML complexe
- Mesure d'impact difficile

---

### Projet 10 : Intégration SSO entreprise

**Description** : Intégration Single Sign-On avec Active Directory et SAML
**Complexité initiale estimée** : Moyenne (5/10)
**Technologies** : SAML, OAuth 2.0, Active Directory
**Équipe** : 2 développeurs backend (1 senior, 1 junior)
**Estimation initiale** : 6 semaines (240 heures)
**Temps réel passé** : 5 semaines (200 heures)
**Résultat** : ✅ Succès (livré en avance)
**Bugs post-production (3 mois)** : 2 bugs (0 critiques, 2 mineurs)

**Facteurs de complexité** :
- Configuration SAML : moyen
- Mapping des rôles : simple
- Tests multi-environnements : moyen
- Documentation : simple

**Leçons apprises** :
- Scope bien défini
- Expertise senior décisive
- Tests d'intégration critiques

---

### Projet 11 : Application gestion de stocks

**Description** : Application web de gestion de stocks et inventaire pour PME
**Complexité initiale estimée** : Faible (3/10)
**Technologies** : React, Node.js, MongoDB
**Équipe** : 2 développeurs fullstack juniors + 1 senior (50% du temps)
**Estimation initiale** : 7 semaines (280 heures)
**Temps réel passé** : 12 semaines (480 heures)
**Résultat** : ⚠️ Succès partiel (fort dépassement, qualité moyenne)
**Bugs post-production (3 mois)** : 24 bugs (6 critiques, 18 mineurs)

**Facteurs de complexité** :
- CRUD basique : simple
- Import/Export CSV : simple
- Alertes stock bas : simple
- Rapports statistiques : moyen
- Multi-utilisateurs : moyen

**Leçons apprises** :
- Équipe junior sous-performante
- Revues de code insuffisantes
- Architecture initiale mal conçue

---

### Projet 12 : Système de notifications push

**Description** : Service centralisé de notifications push multi-canaux (email, SMS, push mobile)
**Complexité initiale estimée** : Moyenne (6/10)
**Technologies** : Node.js, RabbitMQ, Firebase, SendGrid, Twilio
**Équipe** : 3 développeurs backend (2 seniors, 1 junior)
**Estimation initiale** : 8 semaines (320 heures)
**Temps réel passé** : 9 semaines (360 heures)
**Résultat** : ✅ Succès (léger retard, bonne qualité)
**Bugs post-production (3 mois)** : 6 bugs (1 critique, 5 mineurs)

**Facteurs de complexité** :
- Intégration multi-APIs : complexe
- File de messages : moyen
- Retry logic : moyen
- Templates notifications : simple
- Analytics : moyen

**Leçons apprises** :
- Gestion des échecs d'API critique
- Tests de charge importants
- Monitoring essentiel

---

### Projet 13 : Outil de reporting automatisé

**Description** : Génération automatique de rapports business hebdomadaires/mensuels
**Complexité initiale estimée** : Faible (4/10)
**Technologies** : Python, Pandas, Matplotlib, Celery, PostgreSQL
**Équipe** : 1 développeur backend senior + 1 data analyst
**Estimation initiale** : 5 semaines (200 heures)
**Temps réel passé** : 6 semaines (240 heures)
**Résultat** : ✅ Succès (livré avec léger retard, excellente qualité)
**Bugs post-production (3 mois)** : 3 bugs (0 critiques, 3 mineurs)

**Facteurs de complexité** :
- Requêtes SQL : moyen
- Génération graphiques : simple
- Planification jobs : simple
- Export PDF : simple
- Email automatique : simple

**Leçons apprises** :
- Scope simple bien maîtrisé
- Documentation utilisateur clé

---

### Projet 14 : Module de gestion des permissions

**Description** : Système RBAC (Role-Based Access Control) granulaire
**Complexité initiale estimée** : Élevée (7/10)
**Technologies** : Node.js, PostgreSQL, Redis (cache)
**Équipe** : 2 développeurs backend seniors
**Estimation initiale** : 9 semaines (360 heures)
**Temps réel passé** : 11 semaines (440 heures)
**Résultat** : ✅ Succès (retard acceptable, excellente qualité sécurité)
**Bugs post-production (3 mois)** : 4 bugs (1 critique, 3 mineurs)

**Facteurs de complexité** :
- Modèle de permissions : très complexe
- Héritage de rôles : complexe
- Cache invalidation : complexe
- Audit trail : moyen
- Interface admin : moyen

**Leçons apprises** :
- Complexité du modèle sous-estimée
- Tests de sécurité cruciaux
- Documentation essentielle

---

### Projet 15 : Refonte workflow d'approbation

**Description** : Système de workflow configurable pour processus d'approbation multi-niveaux
**Complexité initiale estimée** : Très élevée (8/10)
**Technologies** : Java Spring Boot, PostgreSQL, Activiti (workflow engine)
**Équipe** : 3 développeurs backend (2 seniors, 1 junior)
**Estimation initiale** : 13 semaines (520 heures)
**Temps réel passé** : 16 semaines (640 heures)
**Résultat** : ✅ Succès (retard mais fonctionnalités complètes)
**Bugs post-production (3 mois)** : 11 bugs (4 critiques, 7 mineurs)

**Facteurs de complexité** :
- Workflow engine : très complexe
- Conditions dynamiques : complexe
- Notifications multi-canaux : moyen
- Historique et audit : moyen
- Interface de configuration : complexe

**Leçons apprises** :
- Activiti plus complexe que prévu
- Tests de scénarios critiques
- Formation utilisateurs nécessaire

---

## Projet 16 - NOUVEAU PROJET À ESTIMER

### Description du nouveau projet

**Nom** : Plateforme de formation en ligne (LMS - Learning Management System)

**Description** : Développement d'une plateforme de formation en ligne pour entreprise avec gestion de cours, vidéos, quiz, certifications et suivi de progression.

**Technologies envisagées** : React, Node.js, PostgreSQL, AWS S3 (stockage vidéos), Stripe (paiements)

**Équipe pressentie** :
- 1 Product Owner
- 4 développeurs (2 seniors fullstack, 2 juniors frontend)
- 1 QA
- 1 UX Designer (50% du temps)

**Fonctionnalités principales** :

1. **Gestion des cours**
   - Création de cours (texte, vidéo, documents PDF)
   - Organisation en modules et chapitres
   - Quiz de validation
   - Exercices pratiques

2. **Espace apprenant**
   - Inscription et profil utilisateur
   - Navigation dans les cours
   - Player vidéo avec marqueurs de progression
   - Prise de notes personnelles
   - Téléchargement de ressources
   - Passage de quiz

3. **Suivi et analytics**
   - Tableau de bord apprenant (progression, temps passé)
   - Tableau de bord formateur (statistiques de complétion)
   - Génération de certificats de réussite
   - Export des données de progression

4. **Gestion administrative**
   - Interface d'administration
   - Gestion des utilisateurs et groupes
   - Assignation de formations
   - Reporting avancé

5. **Paiement et abonnements**
   - Vente de cours individuels
   - Abonnements mensuels/annuels
   - Codes promo
   - Facturation

**Contraintes** :
- Responsive (mobile + desktop)
- Support vidéo HD (streaming adaptatif)
- Accessibilité WCAG AA
- RGPD compliant
- Performance : temps de chargement < 3s

**Votre mission** :
1. Analyser les 15 projets historiques avec l'IA
2. Identifier les projets similaires et les patterns pertinents
3. Estimer la durée en semaines et en heures
4. Identifier les risques potentiels
5. Justifier votre estimation

---

## Template d'analyse pour l'IA

```markdown
# Analyse des données historiques pour estimation

## Projets similaires identifiés
[Lister les projets avec similarités : technologies, complexité, type de fonctionnalités]

## Patterns identifiés

### Pattern 1 : Impact de l'expérience de l'équipe
[Corrélation entre séniorité et écart estimation/réel]

### Pattern 2 : Complexité technique
[Corrélation entre score de complexité et dépassement]

### Pattern 3 : Technologies
[Performance par stack technique]

### Pattern 4 : Taille de l'équipe
[Impact de la taille d'équipe sur la vélocité]

## Facteurs de risque pour le nouveau projet
[Identifier les facteurs qui ont causé des dépassements dans le passé]

## Estimation proposée

**Durée estimée** : X semaines (Y heures)

**Justification** :
- Similarité avec projets : [liste]
- Facteurs d'ajustement : [liste]
- Complexité évaluée : X/10
- Niveau de confiance : X%

**Fourchette d'estimation** :
- Optimiste (P10) : X semaines
- Réaliste (P50) : Y semaines
- Pessimiste (P90) : Z semaines

**Principaux risques** :
1. [Risque 1]
2. [Risque 2]
3. [Risque 3]

**Recommandations** :
- [Recommandation 1]
- [Recommandation 2]
```

---

## Exemple de prompt pour l'exercice

```
Tu es un expert en estimation de projets logiciels avec 15 ans d'expérience.

Voici les données historiques de 15 projets passés :
[Copier-coller les projets 1 à 15]

Et voici le nouveau projet à estimer :
[Copier-coller le projet 16]

Mission :
1. Analyse ces 15 projets historiques et identifie des patterns significatifs
2. Identifie les projets les plus similaires au nouveau projet
3. Propose une estimation détaillée (durée en semaines et heures)
4. Justifie ton estimation en te basant sur les données historiques
5. Identifie les principaux risques
6. Propose une fourchette d'estimation (optimiste, réaliste, pessimiste)

Format de réponse structuré :
[Utiliser le template ci-dessus]
```

---

**Note** : Ces données sont fictives mais s'inspirent de vraies métriques de projets pour créer un exercice réaliste.
