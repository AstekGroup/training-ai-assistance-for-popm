# Guide pratique : Mise en place de votre premier workflow - Exercice 3

**Objectif** : Implémenter un workflow automatisé simple et fonctionnel
**Durée** : 1-2 heures
**Niveau** : Débutant (aucune compétence technique requise)

---

## 1. Introduction

### Qu'allez-vous apprendre ?

Dans cet exercice pratique, vous allez **réellement créer** votre premier workflow automatisé en utilisant des outils no-code.

À la fin de l'exercice, vous aurez :
✅ Un compte sur une plateforme d'automatisation
✅ Un workflow fonctionnel qui tourne en production
✅ Une compréhension pratique des concepts (triggers, actions, conditions)
✅ De la confiance pour créer vos propres automatisations

### Pas de panique !

- ❌ **Pas besoin de savoir coder**
- ❌ **Pas besoin de compétences techniques**
- ✅ **Tout se fait en drag & drop et clics**
- ✅ **Instructions pas-à-pas détaillées**
- ✅ **Captures d'écran et explications**

---

## 2. Choix de votre workflow

### 3 workflows proposés (choisissez celui qui vous parle le plus)

#### Workflow A : Notification Slack pour nouvelles tâches Jira ⭐ RECOMMANDÉ pour débuter

**Problème** : Vous ratez souvent les nouvelles tâches qui vous sont assignées dans Jira

**Solution automatisée** :
- Déclencheur : Nouvelle issue Jira assignée à vous
- Action : Message dans votre canal Slack privé

**Outils nécessaires** :
- Compte Jira (gratuit)
- Compte Slack (gratuit)
- Compte Zapier (gratuit - 100 tâches/mois)

**Temps de mise en place** : 20 minutes

**Difficulté** : ⭐ Facile

---

#### Workflow B : Résumé quotidien de vos emails importants

**Problème** : Trop d'emails, vous perdez les messages importants

**Solution automatisée** :
- Déclencheur : Tous les jours à 9h
- Action 1 : Récupérer emails non lus marqués "important" (Gmail)
- Action 2 : Générer résumé avec ChatGPT
- Action 3 : Envoyer résumé dans Slack ou email

**Outils nécessaires** :
- Compte Gmail
- Compte Slack (ou autre pour recevoir résumé)
- Compte Zapier (gratuit)
- Compte OpenAI (5$ de crédits offerts)

**Temps de mise en place** : 45 minutes

**Difficulté** : ⭐⭐ Moyen

---

#### Workflow C : Sauvegarde automatique de vos notes dans Notion

**Problème** : Vous prenez des notes dispersées (Slack, emails, messages) et les perdez

**Solution automatisée** :
- Déclencheur : Message avec emoji 📝 dans Slack
- Action : Créer page Notion avec contenu du message

**Outils nécessaires** :
- Compte Slack
- Compte Notion (gratuit)
- Compte Zapier (gratuit)

**Temps de mise en place** : 30 minutes

**Difficulté** : ⭐⭐ Moyen

---

## 3. Tutoriel détaillé : Workflow A (Jira → Slack)

### Étape 1 : Créer les comptes nécessaires (15 min)

#### 1.1 Compte Zapier

1. Allez sur [https://zapier.com](https://zapier.com)
2. Cliquez sur "Sign up free"
3. Créez un compte avec votre email pro
4. Vérifiez votre email
5. Choisissez le plan gratuit (100 tasks/mois)

**💡 Astuce** : Utilisez votre email professionnel pour faciliter les connexions avec vos outils de travail.

#### 1.2 Vérifier accès Jira et Slack

- **Jira** : Vérifiez que vous avez accès à votre instance Jira d'entreprise (ou créez un compte gratuit sur [https://www.atlassian.com/software/jira/free](https://www.atlassian.com/software/jira/free))
- **Slack** : Vérifiez que vous êtes connecté à votre workspace Slack

---

### Étape 2 : Créer votre premier Zap (20 min)

#### 2.1 Créer un nouveau Zap

1. Dans Zapier, cliquez sur **"Create Zap"** (bouton orange en haut à droite)
2. Vous arrivez sur l'éditeur de Zap

**Vocabulaire Zapier** :
- **Zap** : Un workflow automatisé complet
- **Trigger** : L'événement qui déclenche le Zap
- **Action** : Ce qui se passe automatiquement

#### 2.2 Configurer le Trigger (Déclencheur Jira)

**Étape 2.2.1 : Choisir l'application**

1. Dans la section "Trigger", cliquez sur le champ de recherche
2. Tapez "Jira"
3. Sélectionnez "Jira Software Cloud"

**Étape 2.2.2 : Choisir l'événement**

1. Dans "Event", sélectionnez **"New Issue"** (nouvelle issue créée)
2. Cliquez sur "Continue"

**Étape 2.2.3 : Connecter votre compte Jira**

1. Cliquez sur "Sign in to Jira Software Cloud"
2. Connectez-vous avec vos identifiants Jira
3. Autorisez Zapier à accéder à Jira
4. Sélectionnez votre organisation/workspace Jira
5. Cliquez sur "Continue"

**Étape 2.2.4 : Configurer le trigger**

1. **Project** : Sélectionnez le projet Jira à surveiller (ex: "Marketing", "Product", etc.)
2. **Issue Type** : Laissez vide pour surveiller tous les types OU sélectionnez "Task", "Story", etc.
3. **JQL Filter** (optionnel) : Pour filtrer uniquement les issues qui vous sont assignées, ajoutez :
   ```
   assignee = currentUser()
   ```
4. Cliquez sur "Continue"

**Étape 2.2.5 : Tester le trigger**

1. Cliquez sur "Test trigger"
2. Zapier va récupérer une issue récente de votre Jira
3. Vous devriez voir apparaître les détails d'une issue (titre, description, assigné, etc.)
4. ✅ Si vous voyez les données → Parfait ! Cliquez sur "Continue"
5. ❌ Si erreur → Vérifiez vos permissions Jira et la connexion

---

#### 2.3 Configurer l'Action (Notification Slack)

**Étape 2.3.1 : Choisir l'application**

1. Cliquez sur le "+" pour ajouter une action
2. Tapez "Slack" dans la recherche
3. Sélectionnez "Slack"

**Étape 2.3.2 : Choisir l'événement**

1. Dans "Event", sélectionnez **"Send Channel Message"** ou **"Send Direct Message"**
   - "Send Channel Message" : Pour poster dans un canal (#product, #votre-nom)
   - "Send Direct Message" : Pour vous envoyer un message privé (recommandé)
2. Cliquez sur "Continue"

**Étape 2.3.3 : Connecter votre compte Slack**

1. Cliquez sur "Sign in to Slack"
2. Sélectionnez votre workspace Slack
3. Autorisez Zapier à accéder à Slack
4. Cliquez sur "Continue"

**Étape 2.3.4 : Configurer le message Slack**

1. **Channel** (si Send Channel Message) : Sélectionnez le canal (ex: #notifications)
   OU **To** (si Send Direct Message) : Sélectionnez votre nom
2. **Message Text** : Composez le message avec les données Jira

**Exemple de message** :

```
🆕 Nouvelle tâche Jira assignée !

📋 *Titre* : [Cliquez ici pour insérer le champ "Summary" de Jira]
🔑 *Clé* : [Insérer "Key"]
📅 *Créée le* : [Insérer "Created"]
👤 *Par* : [Insérer "Reporter Name"]

🔗 *Lien* : [Insérer "URL" ou construire avec https://votre-instance.atlassian.net/browse/[Key]]

💬 *Description* :
[Insérer "Description"]
```

**Comment insérer les champs Jira** :
1. Cliquez dans le champ "Message Text"
2. Vous voyez apparaître les champs de l'issue Jira récupérée au test
3. Cliquez sur les champs pour les insérer (ex: "Summary", "Key", "Description")

**💡 Astuce** : Utilisez les emojis et le formatage Slack (markdown) pour rendre le message lisible :
- `*texte*` pour **gras**
- `_texte_` pour _italique_
- ` ``` ` pour bloc de code

3. **Bot Name** (optionnel) : "Jira Notifier" (nom du bot qui postera le message)
4. **Bot Icon** (optionnel) : ":jira:" ou URL d'une image

5. Cliquez sur "Continue"

**Étape 2.3.5 : Tester l'action**

1. Cliquez sur "Test step"
2. Zapier va envoyer un vrai message dans votre Slack
3. Allez vérifier dans Slack → vous devriez recevoir le message !
4. ✅ Message reçu → Parfait ! Cliquez sur "Continue"
5. ❌ Pas de message → Vérifiez les permissions Slack et la configuration

---

### Étape 3 : Activer et nommer le Zap (5 min)

#### 3.1 Nommer le Zap

1. En haut de la page, cliquez sur "Untitled Zap"
2. Renommez en quelque chose de clair : **"Jira → Slack : Nouvelles tâches assignées"**

#### 3.2 Activer le Zap

1. En haut à droite, basculez le toggle de "OFF" à **"ON"**
2. Votre Zap est maintenant actif ! 🎉

**Que se passe-t-il maintenant ?**
- Toutes les 1-15 minutes (selon plan Zapier), Zapier vérifie s'il y a de nouvelles issues Jira
- Si oui → Message Slack automatiquement envoyé
- Si non → Rien ne se passe (pas de consommation de tasks)

---

### Étape 4 : Tester en conditions réelles (10 min)

#### 4.1 Créer une issue de test dans Jira

1. Allez dans votre Jira
2. Créez une nouvelle issue (Task, Story, etc.)
3. **Important** : Assignez-la à vous-même (si vous avez configuré le filtre JQL)
4. Enregistrez

#### 4.2 Attendre la synchronisation

- Zapier vérifie toutes les **15 minutes** sur le plan gratuit
- Patientez 15 minutes max
- Vérifiez votre Slack → vous devriez recevoir la notification !

#### 4.3 Vérifier l'historique du Zap

1. Dans Zapier, allez sur votre Zap
2. Cliquez sur l'onglet **"Zap History"**
3. Vous voyez toutes les exécutions :
   - ✅ Succès (en vert)
   - ❌ Erreurs (en rouge) avec détails

**💡 Astuce** : C'est ici que vous debuggez si quelque chose ne fonctionne pas !

---

### Étape 5 : Améliorations possibles (optionnel)

#### Amélioration 1 : Filtrer par priorité

**Objectif** : Ne recevoir que les tâches prioritaires (High, Highest)

**Comment faire** :
1. Éditez votre Zap
2. Entre le Trigger et l'Action, ajoutez un "Filter" :
   - Cliquez sur le "+" entre les deux
   - Sélectionnez "Filter by Zapier"
   - Condition : "Priority Name" - "contains" - "High"
3. Testez et activez

#### Amélioration 2 : Ajouter une Action conditionnelle

**Objectif** : Envoyer un SMS si la tâche est "Highest" priority

**Comment faire** :
1. Ajoutez une 2ème action après Slack
2. Mais avant, ajoutez un "Filter" :
   - Condition : "Priority Name" - "exactly matches" - "Highest"
3. Action : "SMS by Zapier" ou "Twilio"
4. Configurez avec votre numéro

#### Amélioration 3 : Ajouter au Google Calendar

**Objectif** : Créer un événement Google Calendar pour la deadline

**Comment faire** :
1. Ajoutez une action "Google Calendar - Create Event"
2. Mappez :
   - Title : [Jira Summary]
   - Start Date : [Due Date]
   - Description : Lien Jira

---

## 4. Tutoriels pour les autres workflows

### Workflow B : Résumé quotidien emails (Guide rapide)

**Setup** :
1. Trigger : "Schedule by Zapier" → Every day at 9:00 AM
2. Action 1 : "Gmail - Find Email" → Label = "Important", Status = "Unread"
3. Action 2 : "OpenAI (ChatGPT) - Conversation" → Prompt : "Résume ces emails en 3 bullets"
4. Action 3 : "Slack - Send Direct Message" → Avec le résumé

**Prompt ChatGPT recommandé** :

```
Tu es un assistant personnel.

Voici mes emails importants non lus ce matin :
[Insérer les emails trouvés par Gmail]

Crée un résumé concis avec :
1. Nombre total d'emails
2. Top 3 des emails par priorité (nom expéditeur + sujet)
3. Actions requises de ma part (si applicable)

Format en markdown pour Slack.
```

---

### Workflow C : Notes Slack → Notion (Guide rapide)

**Setup** :
1. Trigger : "Slack - New Reaction Added" → Emoji = ":memo:" ou "📝"
2. Action 1 : "Slack - Get Message" (récupère le message avec l'emoji)
3. Action 2 : "Notion - Create Page" :
   - Database : "Notes" (à créer dans Notion)
   - Title : Première ligne du message
   - Content : Message complet
   - Tags : "from-slack"
   - Created : Timestamp du message

---

## 5. Débogage et résolution de problèmes

### Problème 1 : "Trigger ne se déclenche pas"

**Symptômes** : Vous créez une issue Jira mais pas de notification Slack

**Solutions** :
1. Vérifiez que le Zap est bien "ON" (toggle activé)
2. Attendez 15 minutes (délai de polling sur plan gratuit)
3. Vérifiez le "Zap History" :
   - Si rien → Le trigger ne détecte pas l'event
   - Si erreur → Lire le message d'erreur
4. Vérifiez le filtre JQL (si configuré) : l'issue match-t-elle ?
5. Re-testez le trigger manuellement

### Problème 2 : "Action échoue"

**Symptômes** : Trigger fonctionne mais message Slack n'arrive pas

**Solutions** :
1. Zap History → Cliquez sur l'exécution en erreur
2. Lisez le message d'erreur (souvent explicite)
3. Causes fréquentes :
   - Permissions Slack insuffisantes → Reconnectez le compte
   - Canal Slack invalide → Vérifiez le nom
   - Message trop long → Réduisez le texte
4. Re-testez l'action manuellement

### Problème 3 : "Trop de notifications"

**Symptômes** : Spam de messages, vous êtes submergé

**Solutions** :
1. Ajoutez des Filters pour réduire le volume :
   - Filtrer par assignee, priority, issue type
   - Exemple : Seulement les "High" et "Highest"
2. Changez la fréquence (plan payant) ou regroupez :
   - Au lieu de "New Issue", utilisez "New Issue in Sprint"
   - Ou créez un digest quotidien (Schedule trigger)

### Problème 4 : "Consommation de tasks élevée"

**Symptômes** : Vous atteignez la limite 100 tasks/mois

**Solutions** :
1. Vérifiez le "Task Usage" dans Zapier
2. Identifiez les Zaps gourmands
3. Optimisez :
   - Ajoutez des filters pour réduire exécutions
   - Utilisez "Paths" pour éviter actions inutiles
   - Désactivez les Zaps non essentiels
4. Passez au plan payant si vraiment nécessaire ($20/mois = 750 tasks)

---

## 6. Checklist de validation

Avant de considérer l'exercice terminé, vérifiez :

✅ **Le Zap est créé et nommé**
✅ **Trigger configuré et testé avec succès**
✅ **Action configurée et testée avec succès**
✅ **Zap activé (toggle ON)**
✅ **Test en conditions réelles réussi** (vraie issue Jira → vraie notif Slack)
✅ **Zap History montre au moins 1 exécution réussie**
✅ **Documentation rédigée** (comment ça marche, comment modifier)

---

## 7. Documentation de votre workflow

### Template de documentation (à compléter)

```markdown
# Workflow Jira → Slack : Notifications nouvelles tâches

## Description
Ce workflow envoie automatiquement une notification Slack quand une nouvelle issue Jira m'est assignée.

## Déclencheur
- **Application** : Jira Software Cloud
- **Événement** : New Issue
- **Filtre** : Project = [Nom] ET assignee = moi
- **Fréquence** : Toutes les 15 minutes (plan gratuit Zapier)

## Actions
1. **Slack - Send Direct Message**
   - Destinataire : Moi
   - Message : Détails de l'issue (titre, lien, description)
   - Bot : "Jira Notifier"

## Configuration
- **Outil d'automatisation** : Zapier
- **Comptes connectés** : Jira (mon compte) + Slack (workspace Astek)
- **Plan** : Gratuit (100 tasks/mois)

## Métriques
- **Consommation estimée** : ~40 tasks/mois (10 nouvelles issues/semaine)
- **Temps gagné** : 30 min/semaine (vérification manuelle Jira)

## Maintenance
- **Vérification** : Hebdomadaire (Zap History)
- **Responsable** : Moi
- **Dernière mise à jour** : [Date]

## Évolutions possibles
- [ ] Filtrer par priorité (High/Highest uniquement)
- [ ] Ajouter au Google Calendar si deadline existe
- [ ] Résumé quotidien au lieu de notifications temps réel
```

---

## 8. Aller plus loin

### Prochaines étapes recommandées

1. **Créez 2-3 Zaps supplémentaires** pour d'autres processus répétitifs
2. **Explorez les templates Zapier** : [https://zapier.com/apps](https://zapier.com/apps) → Cherchez votre outil
3. **Expérimentez avec Make** (plus puissant) : [https://www.make.com](https://www.make.com)
4. **Apprenez Jira Automation** : Automatisations internes à Jira (gratuites)

### Ressources complémentaires

- **Zapier Learn** : [https://learn.zapier.com](https://learn.zapier.com) (tutoriels gratuits)
- **Zapier Community** : [https://community.zapier.com](https://community.zapier.com) (forum d'entraide)
- **YouTube Zapier** : Tutoriels vidéo officiels
- **Templates Zapier** : [https://zapier.com/app/zaps](https://zapier.com/app/zaps) (workflows prêts à l'emploi)

### Challenges bonus

**Challenge 1** : Notification de fin de sprint
- Trigger : Jira "Sprint Completed"
- Action : Slack message avec résumé (vélocité, stories complétées, etc.)

**Challenge 2** : Backup automatique de décisions
- Trigger : Message Slack avec emoji 📌 dans #product-decisions
- Action : Créer page Confluence avec le message

**Challenge 3** : Veille concurrentielle automatisée
- Trigger : RSS feed concurrent (Product Hunt, blog, etc.)
- Action 1 : Résumé ChatGPT
- Action 2 : Post dans Slack #veille

---

## 9. Livrable de l'exercice

### Ce que vous devez rendre

1. **Capture d'écran** : Votre Zap configuré (vue complète avec Trigger + Action)
2. **Capture d'écran** : Zap History avec au moins 1 exécution réussie
3. **Capture d'écran** : Message Slack reçu lors du test
4. **Documentation** : Template complété ci-dessus (markdown)
5. **Réflexion** (3-5 phrases) :
   - Qu'avez-vous appris ?
   - Difficultés rencontrées ?
   - Autres processus que vous pourriez automatiser ?

---

**Bravo ! Vous venez de créer votre premier workflow automatisé. Continuez à automatiser pour gagner du temps sur les tâches répétitives ! 🚀**
