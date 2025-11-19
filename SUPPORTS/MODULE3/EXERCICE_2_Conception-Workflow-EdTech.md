# Conception de workflow automatisé - Exercice 2

**Entreprise** : LearnHub (Plateforme EdTech)
**Votre rôle** : Product Manager
**Mission** : Concevoir un workflow automatisé complet pour résoudre un problème opérationnel

---

## 1. Contexte de l'entreprise

### Présentation de LearnHub

**LearnHub** est une plateforme EdTech française qui propose des formations en ligne pour professionnels (upskilling digital).

**Chiffres clés** :
- 120 employés
- 15 000 apprenants actifs
- 250 formations disponibles
- 45 formateurs partenaires
- Équipe produit : 3 PO, 2 PM, 12 développeurs, 3 QA, 2 UX designers

**Produit** : Plateforme SaaS B2B2C
- Interface apprenants (vidéos, quiz, projets)
- Interface formateurs (création contenu)
- Interface entreprise (suivi RH)
- Système de certification

---

## 2. Le problème à résoudre

### Situation actuelle : Gestion chaotique des bugs signalés

**Contexte** :

LearnHub reçoit en moyenne **80 bugs signalés par semaine** via différents canaux :
- Support client (Zendesk) : 40 bugs/semaine
- Retours formateurs (email direct) : 15 bugs/semaine
- Équipe interne (Slack #bugs) : 20 bugs/semaine
- Twitter/LinkedIn : 5 bugs/semaine

**Processus actuel (manuel et problématique)** :

1. **Réception dispersée**
   - Bugs arrivent dans 4 endroits différents
   - Pas de centralisation
   - Risque d'oubli

2. **Tri manuel par le PM** (10h/semaine)
   - Lecture de tous les signalements
   - Vérification si déjà connu
   - Évaluation de la sévérité (Critical/High/Medium/Low)
   - Reformulation technique

3. **Création ticket Jira** (5h/semaine)
   - Copier-coller informations
   - Remplissage manuel de tous les champs
   - Recherche de duplicata
   - Assignation initiale

4. **Priorisation** (3h/semaine)
   - Classification par sévérité et impact
   - Ajout aux sprints selon urgence
   - Communication avec équipe dev

5. **Communication** (2h/semaine)
   - Notification développeur assigné
   - Réponse à l'utilisateur qui a signalé
   - Update Slack pour bugs critiques
   - Email hebdo de synthèse

**Temps total actuel** : **20h/semaine** pour le PM

### Problèmes majeurs identifiés

❌ **Perte de temps énorme** : 50% du temps du PM sur gestion administrative
❌ **Délai de traitement** : 48-72h entre signalement et prise en compte
❌ **Bugs critiques noyés** : Pas de détection automatique de l'urgence
❌ **Doublons fréquents** : 25% des bugs sont des duplicata
❌ **Manque de visibilité** : Pas de metrics sur les sources de bugs
❌ **Communication incohérente** : Certains utilisateurs n'ont jamais de retour

### Impact business

- **Satisfaction client** : NPS en baisse (-12 points en 6 mois)
- **Churn** : +5% de résiliations liées à "bugs non résolus"
- **Productivité PM** : Pas de temps pour roadmap et stratégie
- **Vélocité dev** : Bugs mal priorisés ralentissent les sprints

---

## 3. Mission : Concevoir un workflow automatisé

### Objectif de l'exercice

Vous devez concevoir un **workflow automatisé complet** qui :

1. ✅ Centralise tous les signalements de bugs
2. ✅ Détecte automatiquement les duplicata
3. ✅ Évalue la sévérité avec l'IA
4. ✅ Crée automatiquement les tickets Jira
5. ✅ Notifie les bonnes personnes
6. ✅ Assure un suivi transparent

**Objectif de gain** : Réduire le temps PM de 20h/semaine à 5h/semaine (réduction de 75%)

---

## 4. Contraintes et ressources disponibles

### Outils actuels de LearnHub

**Outils de communication** :
- Zendesk (support client)
- Slack (communication interne)
- Gmail (emails)
- Twitter/LinkedIn (réseaux sociaux)

**Outils de développement** :
- Jira (gestion de projet)
- GitHub (code)
- Confluence (documentation)

**Outils d'automatisation disponibles** :
- Zapier (compte Business : 100 000 tâches/mois)
- Jira Automation (inclus dans licence Jira)
- API OpenAI (budget : 200€/mois)
- Webhooks disponibles sur tous les outils

### Contraintes techniques

✅ **Intégrations disponibles** : Zendesk, Slack, Jira, GitHub, Gmail
✅ **APIs disponibles** : Toutes les APIs des outils ci-dessus
✅ **Budget** : 300€/mois max pour outils d'automatisation
✅ **Compétences équipe** : Pas de développeur dédié, tout doit être no-code/low-code

### Règles métier à respecter

**Sévérité des bugs** (à automatiser) :

- **Critical** : Fonctionnalité core cassée, impact > 1000 utilisateurs, perte de données
- **High** : Fonctionnalité importante cassée, impact 100-1000 users, workaround difficile
- **Medium** : Bug gênant, impact < 100 users, workaround existe
- **Low** : Bug cosmétique, faible impact

**Règles de priorisation** :

- Critical → Sprint actuel, notification immédiate CTO + PM
- High → Sprint actuel ou suivant, notification PM
- Medium → Backlog, notification hebdo
- Low → Backlog, pas de notification urgente

**Règles de détection de duplicata** :

- Si bug similaire dans les 30 derniers jours → Duplicata probable
- Similarité basée sur : titre, description, composant affecté

---

## 5. Livrable attendu : Conception complète du workflow

### Template de conception (à compléter)

```markdown
# Workflow automatisé - Gestion intelligente des bugs LearnHub

## 1. Vue d'ensemble

**Problème résolu** : [Résumé en 2-3 phrases]
**Gain attendu** : [Temps gagné + bénéfices]
**Outils utilisés** : [Liste]

## 2. Architecture du workflow

### Schéma visuel

[Créer un diagramme de flux avec :
- Déclencheurs (sources de bugs)
- Étapes d'automatisation
- Conditions/décisions
- Actions automatiques
- Points de validation humaine
- Notifications]

### Description narrative

[Expliquer le flux de bout en bout en quelques paragraphes]

## 3. Détail des déclencheurs

### Déclencheur 1 : Nouveau ticket Zendesk avec tag "bug"
- Événement : Création ticket
- Filtre : Tag contient "bug" OU catégorie = "Dysfonctionnement"
- Fréquence : Temps réel
- Données récupérées : Titre, description, user, urgence client, screenshots

### Déclencheur 2 : Message Slack dans #bugs
- Événement : Nouveau message dans channel
- Filtre : Doit contenir emoji 🐛 ou mot-clé "bug"
- Fréquence : Temps réel
- Données récupérées : Message, auteur, liens, screenshots

### Déclencheur 3 : Email reçu sur bugs@learnhub.fr
- Événement : Nouveau email
- Filtre : Adresse destinataire = bugs@learnhub.fr
- Fréquence : Temps réel (webhook)
- Données récupérées : Sujet, corps, expéditeur, pièces jointes

### Déclencheur 4 : Mention sociale Twitter/LinkedIn
[À compléter]

## 4. Étapes du workflow

### Étape 1 : Centralisation et normalisation
**Action** : [Décrire l'action]
**Outil** : [Zapier / Make / Autre]
**Input** : [Données d'entrée]
**Output** : [Données de sortie normalisées]

**Exemple de normalisation** :
```json
{
  "id": "unique-id",
  "source": "zendesk|slack|email|social",
  "titre": "...",
  "description": "...",
  "reportedBy": "nom + email",
  "timestamp": "2025-01-15T14:30:00Z",
  "urgence_initiale": "critique|haute|moyenne|basse",
  "screenshots": ["url1", "url2"],
  "context": {
    "browser": "...",
    "device": "...",
    "user_type": "apprenant|formateur|admin"
  }
}
```

### Étape 2 : Détection de duplicata (IA)
**Action** : Analyse sémantique pour détecter bugs similaires
**Outil** : OpenAI API (embeddings + similarité)
**Input** : Titre + description du nouveau bug + base des bugs des 30 derniers jours
**Logic** :
```
1. Générer embedding du nouveau bug
2. Comparer avec embeddings des bugs existants (30 jours)
3. Si similarité > 85% → Duplicata probable
4. Sinon → Bug unique
```
**Output** : duplicata = true/false + bug_original_id (si duplicata)

**Gestion si duplicata** :
- Ajouter commentaire au bug original avec nouvelle source
- Notifier PM avec info "3ème signalement de ce bug"
- Incrémenter compteur d'impact
- NE PAS créer nouveau ticket Jira

### Étape 3 : Évaluation automatique de la sévérité (IA)
**Action** : Analyser le bug et déterminer sévérité
**Outil** : OpenAI API (GPT-4)
**Input** : Bug normalisé + règles métier de sévérité
**Prompt** :
```
Tu es un Product Manager expert en évaluation de bugs.

Voici un bug signalé :
Titre : [titre]
Description : [description]
Source : [source]
Urgence initiale utilisateur : [urgence]
Contexte : [context]

Règles de sévérité :
- Critical : Fonctionnalité core cassée, impact > 1000 users, perte de données
- High : Fonctionnalité importante cassée, impact 100-1000 users, workaround difficile
- Medium : Bug gênant, impact < 100 users, workaround existe
- Low : Bug cosmétique, faible impact

Analyse ce bug et détermine :
1. Sévérité (Critical/High/Medium/Low)
2. Composant affecté (Video Player/Quiz Engine/Dashboard/Auth/Payment/Other)
3. Impact estimé nombre d'utilisateurs
4. Justification de la sévérité

Format de réponse JSON :
{
  "severite": "...",
  "composant": "...",
  "impact_users": number,
  "justification": "...",
  "confidence": 0-100
}
```
**Output** : Sévérité évaluée + métadonnées

**Gestion si confiance < 70%** :
- Marquer pour review manuelle PM
- Notification PM avec demande de validation
- Sévérité temporaire = Medium (par défaut)

### Étape 4 : Enrichissement automatique
**Action** : Ajouter contexte et métadonnées
**Logic** :
- Rechercher dans Confluence si documentation existe sur composant
- Vérifier dans GitHub si issue similaire ouverte
- Récupérer historique bugs du même composant (fréquence)
- Ajouter tags automatiques

**Output** : Bug enrichi avec contexte complet

### Étape 5 : Création ticket Jira
**Action** : Créer ticket Jira automatiquement
**Outil** : Jira API
**Mapping des champs** :
- Titre → Summary
- Description → Description (formatée)
- Sévérité → Priority (Critical→Highest, High→High, etc.)
- Composant → Component
- Source → Label "source-zendesk", "source-slack", etc.
- Reporter → Custom field "Reported by"
- Impact users → Custom field "Impact users"

**Template de description Jira** :
```markdown
## Bug signalé le [date] via [source]

**Signalé par** : [nom] ([email])

### Description
[description originale]

### Sévérité évaluée par IA
[sévérité] - [justification]

### Impact estimé
[nombre] utilisateurs affectés

### Contexte technique
- Navigateur : [browser]
- Device : [device]
- User type : [type]

### Screenshots
[liens]

### Informations complémentaires
- Fréquence sur ce composant : [X bugs/30 jours]
- Documentation : [lien Confluence si existe]
- Issues GitHub similaires : [liens si existent]

---
🤖 Ticket créé automatiquement par WorkflowBot
```

**Assignation automatique** :
```
Si composant = "Video Player" → Assigner à @paul-video-lead
Si composant = "Quiz Engine" → Assigner à @marie-quiz-lead
Si composant = "Payment" → Assigner à @CTO (sensible)
Sinon → Assigner à @PM pour triage
```

### Étape 6 : Priorisation et planification
**Action** : Ajouter au sprint ou backlog selon sévérité
**Outil** : Jira Automation
**Logic** :
```
Si sévérité = "Critical" :
  → Ajouter au sprint actif (top priorité)
  → Label "URGENT"

Si sévérité = "High" :
  → Ajouter au sprint actif si capacité existe
  → Sinon → sprint suivant

Si sévérité = "Medium" ou "Low" :
  → Ajouter au backlog
  → Label "backlog-bug"
```

### Étape 7 : Notifications contextuelles
**Action** : Notifier les bonnes personnes au bon moment
**Outil** : Slack + Email (via Zapier)

**Règles de notification** :

**Si Critical** :
- Slack : Message @channel dans #urgent-bugs avec @CTO @PM
- Email : CTO + PM immédiatement
- SMS : CTO (si hors heures de bureau)

**Si High** :
- Slack : Message dans #bugs avec @PM + @dev-assigné
- Email : PM + dev assigné

**Si Medium** :
- Slack : Message simple dans #bugs (pas de @)
- Email : Résumé hebdomadaire uniquement

**Si Low** :
- Pas de notification immédiate
- Résumé hebdomadaire uniquement

**Notification à l'utilisateur qui a signalé** :
```
Email automatique :

Bonjour [nom],

Merci d'avoir signalé ce bug concernant [composant].

Nous l'avons bien pris en compte :
- Référence : [JIRA-XXX]
- Sévérité évaluée : [sévérité]
- Prise en charge estimée : [délai selon sévérité]

Vous serez notifié(e) dès que ce bug sera résolu.

Merci de contribuer à améliorer LearnHub !

L'équipe Produit
```

### Étape 8 : Suivi et métriques
**Action** : Logger et tracker les métriques
**Outil** : Google Sheets (via Zapier) ou Dashboard Jira
**Métriques trackées** :
- Nombre de bugs par source
- Distribution par sévérité
- Temps de traitement moyen
- Taux de duplicata
- Précision de l'évaluation IA (vs évaluation PM)

## 5. Gestion des exceptions

### Exception 1 : Confiance IA < 70%
**Situation** : L'IA n'est pas sûre de son évaluation
**Action** :
1. Créer ticket Jira avec label "needs-review"
2. Sévérité temporaire = Medium
3. Notification PM pour validation manuelle
4. PM a 4h pour valider ou modifier

### Exception 2 : Bug signalé par utilisateur VIP
**Situation** : Bug signalé par client premium ou partenaire stratégique
**Détection** : Email dans liste "VIP" ou tag Zendesk "VIP"
**Action** :
1. Forcer sévérité minimum à "High"
2. Notification immédiate PM + CTO
3. Traitement prioritaire même si sévérité technique basse

### Exception 3 : Détection de duplicata incertaine
**Situation** : Similarité entre 70% et 85%
**Action** :
1. Créer ticket mais ajouter commentaire "Possiblement lié à [JIRA-XXX]"
2. Notification PM pour vérification
3. PM décide si merge ou garder séparé

### Exception 4 : Bug critique hors heures de bureau
**Situation** : Bug Critical détecté samedi/dimanche/nuit
**Action** :
1. Toutes notifications standard
2. + SMS au CTO d'astreinte
3. + Alerte PagerDuty si existe

### Exception 5 : Volume anormal de bugs
**Situation** : >20 bugs signalés en 1 heure (incident majeur probable)
**Détection** : Counter Zapier
**Action** :
1. Alerte spéciale #incidents dans Slack
2. Notification CTO + PM + Head of Support
3. Création automatique "Incident ticket" dans Jira
4. Possibilité de suspendre workflow pour éviter spam

## 6. Configuration des outils

### Zapier - Zaps à créer

**Zap 1 : Zendesk → Normalisation**
- Trigger : New ticket in Zendesk with tag "bug"
- Action 1 : Format data (Formatter)
- Action 2 : Send to webhook (centralisation)

**Zap 2 : Slack → Normalisation**
- Trigger : New message in #bugs channel
- Filter : Message contains 🐛 or "bug"
- Action 1 : Format data
- Action 2 : Send to webhook

**Zap 3 : Email → Normalisation**
[À compléter]

**Zap 4 : Workflow central**
- Trigger : Webhook (reçoit bugs normalisés)
- Action 1 : Check duplicates (OpenAI API)
- Action 2 : Evaluate severity (OpenAI API)
- Action 3 : Enrich data (Confluence API + GitHub API)
- Action 4 : Create Jira ticket (Jira API)
- Action 5 : Send notifications (Slack + Email)
- Action 6 : Log metrics (Google Sheets)

### Jira Automation - Règles à créer

**Règle 1 : Auto-assignation selon composant**
- Trigger : Issue created with label "bug"
- Condition : Component = X
- Action : Assign to [dev-lead-composant]

**Règle 2 : Ajout au sprint si Critical**
- Trigger : Issue created with Priority = Highest
- Action : Add to active sprint (top of backlog)

**Règle 3 : Transition automatique si duplicata**
- Trigger : Comment added with "duplicata"
- Action : Transition to "Closed - Duplicate"

### OpenAI API - Prompts configurés

[Détailler les prompts pour duplicata detection et severity evaluation]

## 7. Plan de mise en œuvre

### Phase 1 : Setup infrastructure (Semaine 1)
- Jour 1-2 : Configuration Zapier (création compte, connexion outils)
- Jour 3-4 : Configuration OpenAI API (clés, limites, prompts)
- Jour 5 : Tests unitaires de chaque intégration

### Phase 2 : Développement workflow (Semaine 2)
- Jour 1-2 : Zaps de normalisation (Zendesk, Slack, Email)
- Jour 3-4 : Workflow central (duplicata, sévérité, enrichissement)
- Jour 5 : Création Jira + notifications

### Phase 3 : Tests (Semaine 3)
- Jour 1-2 : Tests avec bugs fictifs
- Jour 3-4 : Tests avec bugs réels (mode pilote)
- Jour 5 : Ajustements post-tests

### Phase 4 : Déploiement (Semaine 4)
- Jour 1 : Formation équipe (PM, devs, support)
- Jour 2-5 : Déploiement progressif (20% → 100% du trafic)
- Monitoring intensif

### Phase 5 : Optimisation (Semaine 5-6)
- Analyse des métriques
- Amélioration des prompts IA
- Ajustements règles métier
- Documentation finale

## 8. Métriques de succès

### KPIs opérationnels

| Métrique | Avant | Cible après | Mesure |
|----------|-------|-------------|---------|
| Temps PM sur gestion bugs | 20h/sem | 5h/sem | Time tracking |
| Délai prise en compte bug | 48-72h | 5 min | Timestamp |
| Taux de duplicata | 25% | 5% | Analytics |
| Bugs Critical détectés | 60% | 95% | Comparaison IA vs réel |
| Satisfaction support | 3.2/5 | 4.5/5 | NPS |

### KPIs techniques

- Taux de succès création Jira : >99%
- Précision évaluation sévérité IA : >85%
- Uptime du workflow : >99.5%
- Latence bout-en-bout : <2 minutes

### KPIs business

- Réduction churn lié aux bugs : -3%
- Amélioration NPS : +10 points
- Vélocité dev : +15% (meilleure priorisation)

## 9. Coûts et ROI

### Coûts

**Setup (one-time)** :
- Temps PM configuration : 40h × 50€/h = 2 000€

**Récurrent (mensuel)** :
- Zapier Business : 100€/mois
- OpenAI API : 150€/mois (estimé)
- Maintenance : 5h/mois × 50€ = 250€/mois
- **Total** : 500€/mois

### Gains

**Temps gagné** :
- PM : 15h/semaine × 4 semaines × 50€/h = 3 000€/mois
- Support : 5h/semaine × 4 semaines × 30€/h = 600€/mois
- **Total** : 3 600€/mois

**ROI** :
- Gain net : 3 600€ - 500€ = 3 100€/mois
- Payback du setup : 2 000€ / 3 100€ = 0.6 mois
- ROI annuel : 37 200€ gain - 6 000€ coûts = 31 200€

## 10. Risques et mitigation

### Risque 1 : Mauvaise évaluation IA de sévérité
**Impact** : Moyen
**Probabilité** : Moyenne
**Mitigation** :
- Review humaine si confiance < 70%
- Feedback loop pour améliorer prompts
- Possibilité PM d'override à tout moment

### Risque 2 : Dépendance à Zapier/OpenAI
**Impact** : Élevé
**Probabilité** : Faible
**Mitigation** :
- Plan de fallback : retour processus manuel temporaire
- SLA garantis par fournisseurs
- Monitoring uptime

### Risque 3 : Sur-automatisation
**Impact** : Moyen
**Probabilité** : Faible
**Mitigation** :
- Toujours garder human-in-the-loop pour décisions critiques
- Exceptions bien gérées
- Feedback utilisateurs intégré

[Ajouter d'autres risques identifiés]

## 11. Évolutions futures possibles

**V2 (après 3 mois)** :
- Prédiction du temps de résolution
- Auto-assignation intelligente basée sur expertise devs
- Chatbot pour triage initial avec utilisateurs

**V3 (après 6 mois)** :
- Analyse de tendances (bugs récurrents)
- Suggestions de fixes automatiques (code)
- Intégration avec outils de monitoring (Sentry, DataDog)
```

---

## 6. Critères d'évaluation

Votre conception sera évaluée sur :

✅ **Complétude** : Tous les éléments du template sont présents et détaillés
✅ **Faisabilité technique** : Le workflow peut réellement être implémenté avec les outils disponibles
✅ **Pertinence** : Les automatisations résolvent bien le problème initial
✅ **Gestion des exceptions** : Les cas limites sont identifiés et gérés
✅ **Réalisme** : Estimations (temps, coûts, gains) sont crédibles
✅ **Clarté** : Workflow est facile à comprendre et documenter
✅ **Innovation** : Utilisation intelligente de l'IA et des outils

---

## 7. Prompts utiles pour l'exercice

### Prompt 1 : Aide à la conception générale

```
Tu es un expert en automatisation de workflows et Product Management.

Contexte :
[Copier le problème à résoudre]

Contraintes :
[Copier les outils disponibles et contraintes]

Mission :
Conçois un workflow automatisé complet qui résout ce problème.

Pour chaque étape du workflow, détaille :
1. Déclencheur ou input
2. Action à réaliser
3. Outil recommandé (Zapier, Make, Jira Automation, API)
4. Logic détaillée (conditions, transformations)
5. Output
6. Gestion d'erreur

Fournis aussi :
- Schéma visuel du workflow (en texte avec flèches)
- Gestion des exceptions
- Estimations (temps setup, coûts)
- Métriques de succès
```

### Prompt 2 : Conception de prompts IA

```
Tu es un expert en prompt engineering pour automatisation.

Contexte : Je dois évaluer automatiquement la sévérité de bugs avec GPT-4.

Règles métier de sévérité :
[Copier les règles]

Crée un prompt optimal pour GPT-4 qui :
1. Analyse un bug (titre + description + contexte)
2. Détermine la sévérité (Critical/High/Medium/Low)
3. Identifie le composant affecté
4. Estime l'impact utilisateurs
5. Justifie l'évaluation
6. Donne un score de confiance

Le prompt doit être :
- Précis et non-ambigu
- Robuste (gérer tous cas de figure)
- Avec output JSON structuré
```

### Prompt 3 : Détection de doublons

```
Tu es un expert en NLP et détection de similarité.

Mission : Concevoir un système de détection de bugs duplicata.

Contraintes :
- Comparer nouveau bug avec bugs des 30 derniers jours (~2400 bugs)
- Budget API : 200€/mois
- Latence acceptable : <30 secondes

Propose :
1. Approche technique (embeddings ? comparaison sémantique ?)
2. Seuil de similarité recommandé
3. Optimisations (pour rester dans budget et latence)
4. Gestion des faux positifs/négatifs
5. Code ou pseudo-code de l'implémentation
```

---

## 8. Conseils pour réussir

### Approche recommandée

1. **Commencez par le schéma** : Visualisez le flux avant de détailler
2. **Pensez utilisateur** : Mettez-vous à la place du PM qui utilisera ce workflow
3. **Soyez pragmatique** : Privilégiez la simplicité et la robustesse
4. **Documentez bien** : Quelqu'un doit pouvoir implémenter votre conception
5. **Testez mentalement** : Passez en revue tous les scénarios possibles

### Erreurs à éviter

❌ Sur-compliquer le workflow (trop d'étapes)
❌ Ignorer les cas d'erreur et exceptions
❌ Sous-estimer les coûts (API calls, temps)
❌ Oublier la maintenance et l'évolution
❌ Négliger l'expérience utilisateur (notifications trop fréquentes, etc.)

---

## 9. Variantes de l'exercice

### Variante 1 : Simplifiée (Niveau débutant)
- Focus uniquement sur centralisation + création Jira
- Pas d'IA (classification manuelle)
- 1 source de bugs (Zendesk)

### Variante 2 : Standard
- Celle décrite ci-dessus
- Toutes les sources, IA pour sévérité et duplicata

### Variante 3 : Avancée
- Ajouter prédiction temps de résolution
- Ajouter auto-assignation intelligente (ML sur historique)
- Ajouter analyse de tendances
- Budget technique illimité

### Variante 4 : Appliquer à votre contexte
- Remplacer "bugs" par un processus de votre quotidien
- Adapter les sources et outils à votre stack
- Conception applicable immédiatement

---

**Bon courage pour la conception ! Pensez à l'expérience utilisateur et à la robustesse du workflow.**
