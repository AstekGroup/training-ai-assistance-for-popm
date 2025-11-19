# Contexte Projet - Marketplace B2B - Exercice 3

**Projet** : Développement d'une marketplace B2B pour fournitures industrielles
**Client** : IndustrialHub
**Date de début** : Janvier 2026
**Durée prévisionnelle** : 9 mois
**Budget** : 850 000€

---

## 1. Contexte général

### Présentation de l'entreprise

**IndustrialHub** est un distributeur de fournitures industrielles (équipements, outillage, EPI, consommables) créé en 2010. L'entreprise compte :
- 150 employés
- 8 000 clients professionnels actifs
- Catalogue de 45 000 références produits
- CA 2024 : 32M€ (croissance +8% par an)
- Marge brute moyenne : 22%

### Modèle actuel

Aujourd'hui, IndustrialHub fonctionne avec :
- **Vente traditionnelle** : Commerciaux terrain + appels téléphoniques (65% du CA)
- **Site web vitrine** : Catalogue en ligne non transactionnel (35% génère des demandes de devis)
- **ERP legacy** : SAP installé en 2012, non connecté au web
- **Processus manuel** : Devis par email, commandes par téléphone/fax, facturation manuelle

### Problématiques identifiées

1. **Coûts opérationnels élevés**
   - Traitement manuel des commandes : 45 min/commande en moyenne
   - 12 commerciaux sédentaires dédiés à la prise de commande téléphonique
   - Taux d'erreur : 8% sur les commandes manuelles
   - Coût de traitement : 28€ par commande

2. **Expérience client dégradée**
   - Délai de réponse devis : 24-48h
   - Pas de visibilité stock en temps réel
   - Impossibilité de commander en dehors des horaires de bureau
   - Satisfaction client : 6.8/10

3. **Perte de compétitivité**
   - Concurrents digitalisés gagnent des parts de marché
   - Clients (notamment PME) demandent du self-service
   - Génération Y/Z préfère commander en ligne

---

## 2. Solution proposée : Marketplace B2B

### Vision produit

Créer une marketplace B2B moderne permettant :
- **Achat en ligne 24/7** avec paiement sécurisé
- **Gestion de comptes clients** avec multiples utilisateurs
- **Synchronisation temps réel** avec l'ERP SAP
- **Expérience personnalisée** (catalogue client, prix négociés, conditions spéciales)
- **Automatisation** de bout en bout (commande → facturation → livraison)

### Objectifs business

**Court terme (6 mois post-lancement)** :
- 30% des clients actifs utilisent la plateforme
- 40% des commandes passent par le digital
- Réduction de 50% du temps de traitement de commande

**Moyen terme (18 mois)** :
- 60% des commandes en ligne
- Réduction de 35% des coûts opérationnels
- NPS > 50
- Panier moyen en ligne +15% vs traditionnel

**Long terme (3 ans)** :
- 80% des transactions digitalisées
- Ouverture à des vendeurs tiers (vrai modèle marketplace)
- Expansion internationale (3 pays)

---

## 3. Périmètre fonctionnel du projet

### Phase 1 - MVP (Mois 1-6) - Budget : 450k€

**Catalogue et recherche**
- Affichage de 45 000 produits avec fiches détaillées
- Recherche avancée (filtres, catégories, recherche textuelle)
- Suggestions et produits similaires
- Gestion des variantes produits (tailles, couleurs, modèles)

**Gestion de compte client**
- Authentification (email/mot de passe)
- Multi-utilisateurs par entreprise (4 rôles : admin, acheteur, valideur, lecteur)
- Profil entreprise (coordonnées, SIRET, conditions commerciales)
- Catalogue personnalisé (prix négociés, produits spécifiques)

**Commande et panier**
- Ajout au panier
- Gestion de panier sauvegardé
- Workflow de validation interne (selon montant)
- Checkout avec choix adresse de livraison
- Paiement (carte bancaire, virement, compte client à 30j)

**Intégration ERP SAP**
- Synchronisation produits (stock, prix, descriptions)
- Création commande dans SAP
- Mise à jour statuts de commande
- Synchronisation clients et conditions commerciales

**Suivi et support**
- Tableau de bord commandes (historique, statuts, factures)
- Téléchargement factures/BL
- Chat support (heures de bureau)

### Phase 2 - Améliorations (Mois 7-9) - Budget : 250k€

- Module de devis en ligne
- Recommandations produits basées sur l'historique
- Module de réclamations
- API pour intégration avec systèmes clients
- Application mobile (iOS/Android)

### Hors scope Phase 1

❌ Gestion des retours produits
❌ Programme de fidélité
❌ Vendeurs tiers (vrai modèle marketplace)
❌ Internationalisation

---

## 4. Contraintes du projet

### Contraintes techniques

**Intégration ERP SAP** :
- SAP version 2012 (SAP ECC 6.0)
- API SOAP existantes (mais documentation limitée)
- Batch de synchronisation quotidien (stock et prix)
- Pas de modification autorisée du core SAP
- Équipe SAP interne : 2 consultants (disponibilité limitée : 20% de leur temps)

**Infrastructure** :
- Hébergement : Cloud AWS (contrainte groupe)
- Certification ISO 27001 requise (données sensibles clients)
- Disponibilité cible : 99.5% (24/7)
- Performance : temps de chargement pages < 2s
- Scalabilité : supporter 500 commandes/jour (pic à 1000)

**Sécurité** :
- Conformité RGPD
- PCI-DSS pour le paiement
- Authentification forte (2FA pour admins)
- Chiffrement des données sensibles
- Audit trail complet

**Technologies imposées** :
- Frontend : React (compétences équipe interne)
- Backend : Node.js ou Java Spring Boot
- Base de données : PostgreSQL (standard groupe)
- Paiement : Stripe ou PayPlug (conformité PCI-DSS)

### Contraintes organisationnelles

**Équipe projet** :
- 1 Product Owner (vous) - 100%
- 1 Scrum Master - 100%
- 4 développeurs fullstack (2 seniors, 2 mid-level) - 100%
- 1 développeur spécialisé SAP - 50% (partagé avec autres projets)
- 1 QA - 100%
- 1 UX/UI Designer - 60%
- 1 Chef de projet infrastructure - 30%

**Disponibilité parties prenantes** :
- Direction commerciale : 10% (validations stratégiques)
- Équipe SAP : 20% (support intégration)
- Utilisateurs pilotes (5 clients) : Tests UAT mois 5-6

**Sprints** :
- Sprints de 2 semaines
- Cérémonies agiles standard
- Démo à la direction tous les mois

### Contraintes calendaires

**Jalons imposés** :
- **Fin Mars 2026** : Démo technique direction
- **Fin Juin 2026** : Version beta pour 5 clients pilotes (UAT)
- **Fin Août 2026** : Go-live production (période creuse avant rentrée)
- **Mi-Septembre 2026** : Formation commerciaux et support client

**Périodes bloquées** :
- Août 2026 : 50% de l'équipe en congés (pas de développement majeur)
- Décembre 2025 : Freeze IT groupe (maintenance uniquement)

**Dépendances externes** :
- Audit de sécurité externe (mois 5) - délai de 3 semaines
- Certification PCI-DSS (mois 6) - délai de 4 semaines
- Migration infrastructure cloud (mois 4) - géré par équipe infra

---

## 5. Parties prenantes

### Sponsors et décideurs

**Jean Dupuis - CEO** (Sponsor exécutif)
- Niveau d'engagement : Élevé
- Attentes : ROI, modernisation, compétitivité
- Disponibilité : 1h/mois (comité de pilotage)

**Marie Laurent - Directrice Commerciale** (Sponsor métier)
- Niveau d'engagement : Très élevé
- Attentes : Adoption clients, facilité d'usage, maintien du lien commercial
- Disponibilité : 2h/semaine
- Risque : Résistance commerciaux terrain (peur de perdre leur valeur ajoutée)

**Pierre Martin - DSI** (Sponsor technique)
- Niveau d'engagement : Moyen
- Attentes : Stabilité, sécurité, maintenabilité
- Disponibilité : 1h/semaine
- Risque : Priorisation d'autres projets IT en parallèle

### Utilisateurs clés

**Acheteurs professionnels** (8 000 entreprises)
- Profils variés : grands comptes (50 utilisateurs), PME (1-3 utilisateurs), TPE (1 utilisateur)
- Niveau digital : Variable (de très à l'aise à réticent)
- Attente : Simplicité, rapidité, visibilité

**Équipe commerciale sédentaire** (12 personnes)
- Rôle actuel : Prise de commande téléphonique
- Rôle futur : Support clients, vente conseil
- Risque : Résistance au changement, peur de l'obsolescence

**Service client** (8 personnes)
- Utiliseront l'interface admin pour gérer réclamations
- Formation nécessaire

---

## 6. Contexte concurrentiel et marché

### Concurrence

**MarketplacePro** (leader français)
- 15 ans d'existence
- 120 000 références
- Interface moderne, UX excellente
- Prix compétitifs
- Faiblesse : Service client médiocre, manque de personnalisation

**IndustrialDirect** (concurrent régional)
- 8 ans d'existence
- Catalogue moins large (20 000 réf.)
- Forte relation client
- Marketplace lancée en 2023
- Faiblesse : Moins de références, prix plus élevés

**ToolsOnline** (pure player digital)
- 5 ans d'existence
- Croissance fulgurante (+40%/an)
- Prix agressifs
- Faiblesse : Pas de service conseil, stock parfois insuffisant

### Avantages compétitifs d'IndustrialHub

✅ Relation client établie (15 ans d'ancienneté moyenne)
✅ Expertise métier et conseil
✅ Stock local (livraison rapide)
✅ Prix négociés individuellement (clients grands comptes)
✅ Service après-vente réactif

### Risques concurrentiels

⚠️ Retard technologique de 3-5 ans vs concurrents digitalisés
⚠️ Si échec projet → perte de clients vers concurrence
⚠️ Fenêtre d'opportunité limitée (18-24 mois max)

---

## 7. Risques identifiés à date (avant analyse IA)

### Risques techniques (identifiés par la DSI)

1. **Intégration SAP complexe**
   - Probabilité : Élevée
   - Impact : Critique
   - Raison : Documentation limitée, API SOAP legacy, disponibilité équipe SAP

2. **Performance sous charge**
   - Probabilité : Moyenne
   - Impact : Élevé
   - Raison : 45 000 produits, recherche temps réel, pics de charge

3. **Migration de données**
   - Probabilité : Moyenne
   - Impact : Élevé
   - Raison : Qualité des données SAP variable, 15 ans d'historique

### Risques organisationnels (identifiés par RH)

4. **Résistance au changement**
   - Probabilité : Élevée
   - Impact : Moyen
   - Raison : Équipe commerciale craint la digitalisation

5. **Disponibilité équipe SAP**
   - Probabilité : Élevée
   - Impact : Élevé
   - Raison : Équipe SAP surchargée, seulement 20% dispo

### Risques projet (identifiés par PMO)

6. **Dérive du scope**
   - Probabilité : Moyenne
   - Impact : Élevé
   - Raison : Stakeholders nombreux, attentes élevées

7. **Dépassement délais certification**
   - Probabilité : Moyenne
   - Impact : Critique
   - Raison : Première certification PCI-DSS pour l'entreprise

---

## 8. Mission pour l'exercice 3

### Objectif

Utiliser l'IA pour réaliser une analyse de risques exhaustive du projet et générer des plans de mitigation.

### Livrables attendus

1. **Tableau de risques complet** (minimum 10 risques)
   - Nom du risque
   - Catégorie (technique, organisationnel, externe, financier)
   - Probabilité (Faible/Moyenne/Élevée)
   - Impact (Faible/Moyen/Élevé/Critique)
   - Score de risque (Probabilité × Impact)
   - Signaux d'alerte précoces
   - Actions préventives
   - Plan de contingence

2. **Cartographie des dépendances critiques**
   - Identifier les dépendances entre composants/équipes
   - Points de blocage potentiels

3. **Top 5 des risques critiques** avec plans d'action détaillés
   - Actions préventives (avant que le risque se réalise)
   - Actions correctives (si le risque se réalise)
   - Indicateurs de déclenchement
   - Responsables et délais
   - Coûts estimés

### Exemple de prompt pour l'exercice

```
Tu es un expert en gestion de risques pour projets IT complexes, avec 20 ans d'expérience en Product Management.

Contexte du projet :
[Copier-coller les sections 1 à 7 de ce document]

Mission :
1. Analyse ce projet et identifie TOUS les risques potentiels (au-delà des 7 déjà listés)
2. Catégorise les risques par type
3. Évalue la probabilité et l'impact de chaque risque
4. Identifie les signaux d'alerte précoces pour chaque risque
5. Propose des actions préventives
6. Pour les 5 risques les plus critiques, génère un plan de contingence détaillé

Format de sortie :
# Analyse de risques - Marketplace B2B IndustrialHub

## Vue d'ensemble
- Nombre total de risques identifiés : X
- Risques critiques (P×I > 15) : X
- Risques élevés (P×I 10-15) : X
- Risques moyens (P×I 5-9) : X
- Risques faibles (P×I < 5) : X

## Tableau complet des risques
[Tableau avec colonnes : ID, Nom, Catégorie, Probabilité (1-5), Impact (1-5), Score, Signaux d'alerte, Actions préventives]

## Cartographie des dépendances
[Identifier les dépendances critiques entre fonctionnalités/équipes/systèmes]

## Top 5 des risques critiques - Plans d'action détaillés

### Risque #1 : [Nom]
**Description** : [Description détaillée]
**Probabilité** : X/5 | **Impact** : X/5 | **Score** : X

**Signaux d'alerte** :
- [Signal 1]
- [Signal 2]

**Actions préventives** :
1. [Action 1] - Responsable : [Qui] - Délai : [Quand] - Coût : [€]
2. [Action 2] - ...

**Plan de contingence (si le risque se réalise)** :
1. [Action corrective 1]
2. [Action corrective 2]

**Indicateurs de déclenchement du plan de contingence** :
- [Indicateur 1]
- [Indicateur 2]

[Répéter pour les 5 risques critiques]

## Recommandations stratégiques
[3-5 recommandations de haut niveau pour minimiser les risques globaux du projet]
```

---

## 9. Annexes

### Budget détaillé Phase 1 (450k€)

- Développement : 280k€ (4 dev × 6 mois)
- Product Owner : 60k€
- Scrum Master : 50k€
- QA : 40k€
- UX/UI Design : 30k€
- Infrastructure cloud : 25k€
- Licences et outils : 15k€
- Audit sécurité : 20k€
- Certification PCI-DSS : 18k€
- Contingence (10%) : 45k€

### Indicateurs de succès du projet

**Adoption** :
- 30% des clients actifs après 6 mois
- 50% après 12 mois

**Volumétrie** :
- 40% des commandes en ligne après 6 mois
- 200 commandes/jour en moyenne

**Satisfaction** :
- NPS > 50
- Taux d'abandon panier < 30%

**Opérationnel** :
- Réduction de 50% du temps de traitement commande
- Taux d'erreur < 2%

**Financier** :
- ROI positif à 18 mois
- Réduction coûts opérationnels : 35% à 2 ans

---

**Bonne chance pour votre analyse de risques ! Pensez à tous les aspects : technique, organisationnel, humain, externe, financier, juridique, sécurité, qualité, délais.**
