# Exercices Module 2 : Maîtriser le triptyque Qualité / Coûts / Délais avec l'IA

**Durée totale** : 1 h 40 (3 × 20 min triptyque + 2 × 20 min réunions et documentation)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai) ; pour les exercices 4 et 5 : Microsoft Teams (compte professionnel), [Gladia.io](https://gladia.io), [Microsoft Loop](https://loop.microsoft.com) (optionnel : Notion)

---

## 🎯 Objectif pédagogique

Comprendre concrètement comment l'IA peut agir sur **chacune des 3 dimensions d'un projet** :
- **Qualité** → Améliorer les spécifications pour réduire les défauts
- **Coûts** → Estimer avec précision pour éviter les dépassements
- **Délais** → Détecter les risques pour livrer à temps

**Principe** : 1 exercice = 1 dimension du triangle pour les exercices 1 à 3 ; les exercices 4 et 5 ajoutent un volet **réunions et documentation** (transcription, action items, contenus à partir d'une vidéo).

---

## 📐 Exercice 1 : QUALITÉ - Transformer une spec floue en spec testable

**Durée** : 20 minutes  
**Objectif** : Mesurer l'impact de l'IA sur la qualité des livrables

### Le problème

Vous recevez cette spécification d'un stakeholder :

```
L'utilisateur doit pouvoir se connecter facilement à l'application.
Si le mot de passe est incorrect, on affiche un message d'erreur.
Il faut que ce soit sécurisé et rapide.
```

**🚨 Problèmes identifiés** :
- Trop vague ("facilement", "rapide" = non mesurable)
- Critères d'acceptation absents
- Scénarios d'erreur incomplets
- Exigences de sécurité floues

### ✅ Mission : Améliorer la qualité avec l'IA

#### **Étape 1** : Identifier les ambiguïtés (5 min)

Utilisez ce prompt :

```
Tu es un expert QA. Analyse cette spécification et liste toutes les ambiguïtés,
informations manquantes et risques de mauvaise interprétation :

[Insérer la spec ci-dessus]

Pour chaque problème identifié, pose une question précise au PO.
```

**Attendu** :
- Liste des ambiguïtés (ex: "Qu'est-ce que 'facilement' ?")
- Questions clarifiantes
- Risques de mauvaise implémentation

---

#### **Étape 2** : Générer des critères d'acceptation TESTABLES (10 min)

```
À partir de cette spécification floue : [spec]

Génère 7 critères d'acceptation détaillés en format Gherkin (Given/When/Then)
couvrant :
1. Scénario nominal (connexion réussie)
2. Scénario échec (mot de passe invalide)
3. Scénario échec (compte bloqué après 3 tentatives)
4. Scénario sécurité (timeout de session)
5. Scénario UX (temps de réponse < 2s)
6. Scénario accessibilité (lecteur d'écran)
7. Scénario technique (chiffrement des données)

Chaque critère DOIT être mesurable et testable par l'équipe QA.
```

**Attendu** :
- Critères précis et testables
- Format : `Given [état initial], When [action], Then [résultat attendu]`
- Métriques chiffrées quand applicable

---

#### **Étape 3** : Comparer avant/après (5 min)

Créez un tableau comparatif :

| Critère | Spec initiale | Spec améliorée | Gain qualité |
|---------|---------------|----------------|--------------|
| **Clarté** | ⭐ (très floue) | ⭐⭐⭐⭐⭐ | Mesurable |
| **Testabilité** | ❌ Non testable | ✅ 7 critères testables | +700% |
| **Complétude** | 30% couvert | 100% couvert | +70% |
| **Risque défauts** | Élevé | Faible | -60% défauts estimés |

---

### 💬 Débrief (collectif)

**Questions à discuter** :
1. Combien d'ambiguïtés avez-vous identifié ? (comparez avec vos voisins)
2. Quel critère d'acceptation était le plus difficile à rendre testable ?
3. **Estimation** : Combien de bugs en moins grâce à la spec améliorée ?

**💡 Leçon clé** : Une spec de meilleure QUALITÉ = moins de défauts = moins de coûts de correction

---

## 💰 Exercice 2 : COÛTS - Estimer avec précision grâce aux données

**Durée** : 20 minutes  
**Objectif** : Comprendre comment l'IA réduit les erreurs d'estimation et les dépassements de budget

### Le scénario

Votre équipe doit développer une **fonctionnalité de paiement multi-devises**. Le sponsor demande une estimation.

**Données historiques de votre équipe** :

| Projet passé | Complexité estimée | Temps estimé | Temps réel | Écart |
|--------------|-------------------|--------------|------------|-------|
| Projet A - Paiement CB simple | Moyenne | 3 semaines | 5 semaines | +67% |
| Projet B - Intégration Stripe | Moyenne | 4 semaines | 4,5 semaines | +12% |
| Projet C - Wallet interne | Élevée | 8 semaines | 12 semaines | +50% |
| Projet D - Export factures | Faible | 1 semaine | 1,5 semaine | +50% |

### ✅ Mission : Estimer le nouveau projet avec l'IA

#### **Étape 1** : Estimation "à l'instinct" (2 min)

**Sans utiliser l'IA**, estimez combien de semaines nécessaires pour le paiement multi-devises.

Votre estimation instinctive : **_____ semaines**

---

#### **Étape 2** : Estimation assistée par IA (10 min)

Utilisez ce prompt :

```
Tu es un expert en estimation de projets IT.

Voici l'historique de notre équipe :
[Copier le tableau ci-dessus]

Nouveau projet à estimer : Développement d'une fonctionnalité de paiement multi-devises
comprenant :
- Support de 15 devises (EUR, USD, GBP, JPY, etc.)
- Conversion en temps réel via API externe
- Gestion des commissions par devise
- Affichage des prix dans la devise de l'utilisateur
- Historique des transactions en multi-devises

Étape par étape :
1. Analyse les patterns dans les données historiques (écarts récurrents ?)
2. Identifie le projet passé le plus similaire
3. Ajuste l'estimation en fonction des différences
4. Fournis 3 estimations : optimiste, réaliste, pessimiste
5. Calcule le niveau de confiance (en %)
6. Liste les risques qui pourraient impacter l'estimation
```

**Attendu** :
- Analyse des patterns d'écart (ex: "L'équipe sous-estime de 40% en moyenne")
- 3 scénarios chiffrés
- Niveau de confiance
- Facteurs de risque

---

#### **Étape 3** : Calculer l'impact coût (5 min)

Complétez ce tableau :

| Méthode | Estimation | Si équipe = 3 dev à 600€/jour | Budget projet |
|---------|------------|-------------------------------|---------------|
| **Instinct** | ___ semaines | ___ jours × 3 × 600€ | **___€** |
| **IA (réaliste)** | ___ semaines | ___ jours × 3 × 600€ | **___€** |
| **Écart** | ___ semaines | | **± ___€** |

**Risque de dépassement** :
- Avec estimation instinct : ___%
- Avec estimation IA : ___%

---

#### **Étape 4** : Identifier les économies (3 min)

**Si l'estimation IA est plus réaliste**, calculez :

```
Économies évitées = |Estimation instinct - Estimation IA réaliste| × Coût jour × Équipe

Exemple : |4 semaines - 6 semaines| × 5 jours × 3 dev × 600€ = 18 000€ économisés
(en évitant un dépassement budgétaire non provisionné)
```

---

### 💬 Débrief (collectif)

**Questions à discuter** :
1. Quelle était l'écart entre votre estimation instinct et celle de l'IA ?
2. Quel pattern l'IA a-t-elle identifié dans vos données historiques ?
3. **Estimation** : Combien d'euros économisés sur 10 projets/an avec cette méthode ?

**💡 Leçon clé** : Une estimation basée sur DONNÉES réelles = moins de dépassements de COÛTS

---

## ⏰ Exercice 3 : DÉLAIS - Détecter les risques de retard avant qu'il soit trop tard

**Durée** : 20 minutes  
**Objectif** : Utiliser l'IA pour anticiper les retards et prendre des actions correctives à temps

### Le scénario

Vous êtes au **Sprint 3 d'un projet de 6 sprints** (livraison prévue dans 6 semaines).

**Situation actuelle** :

```
Sprint 1 : 21 points complétés / 25 points planifiés (84%)
Sprint 2 : 18 points complétés / 25 points planifiés (72%)
Sprint 3 : En cours - 15 points complétés à J+8 / 25 points planifiés

Backlog restant : 115 points
Équipe : 5 développeurs
Objectif : Livrer 100% des fonctionnalités critiques (100 points) dans 6 semaines
```

**📊 Données complémentaires** :
- 3 stories bloquées en attente de validation client (8 points)
- 1 développeur senior en congés Sprint 5 (2 semaines)
- 12 bugs découverts en Sprint 2 (non estimés initialement)

### ✅ Mission : Détecter les risques de retard avec l'IA

#### **Étape 1** : Votre intuition (2 min)

**Sans IA**, répondez :
- Allez-vous livrer à temps ? **OUI / NON**
- Probabilité de livraison complète : **___%**
- Votre plus grande inquiétude : **_________________**

---

#### **Étape 2** : Analyse prédictive par IA (12 min)

Utilisez ce prompt :

```
Tu es un expert en gestion de projet Agile.

Contexte du projet :
[Copier les données ci-dessus]

Mission :
1. Calcule la vélocité moyenne et la tendance (amélioration/dégradation ?)
2. Projette le nombre de points réalisables dans les 3 sprints restants
3. Identifie les 5 risques majeurs qui menacent les délais
4. Pour chaque risque :
   - Probabilité d'occurrence (Faible/Moyenne/Élevée)
   - Impact sur les délais (en semaines)
   - Signal d'alerte à surveiller
   - Action corrective recommandée
5. Fournis 3 scénarios de livraison :
   - Optimiste (tout se passe bien)
   - Réaliste (tendance actuelle continue)
   - Pessimiste (risques se réalisent)
```

**Attendu** :
- Calcul de vélocité (moyenne, tendance)
- Projection réaliste des points livrables
- 5 risques détaillés
- 3 scénarios avec dates de livraison

---

#### **Étape 3** : Créer un plan d'action (5 min)

Remplissez ce tableau pour les **2 risques les plus critiques** :

| Risque | Impact délais | Action corrective | Responsable | Délai | Coût |
|--------|---------------|-------------------|-------------|-------|------|
| **Exemple** : Vélocité en baisse | +2 semaines | Réduire le scope de 15% (15 points non-critiques) | PO | Immédiat | 0€ |
| **Risque 1** : | | | | | |
| **Risque 2** : | | | | | |

**Décision finale** :
- [ ] Maintenir le scope et négocier un délai supplémentaire
- [ ] Réduire le scope pour tenir le délai
- [ ] Ajouter des ressources (coût : ___€)
- [ ] Autre : __________

---

#### **Étape 4** : Mesurer l'impact de la détection précoce (1 min)

**Sans IA** : Quand auriez-vous détecté le risque ?
- ❌ Sprint 5 (trop tard, retard inévitable)

**Avec IA** : Détection au Sprint 3
- ✅ **Gain de temps** : 4 semaines d'avance pour agir
- ✅ **Actions possibles** : Réduire scope, ajouter ressources, négocier délai
- ✅ **Coût évité** : Pas de pénalités de retard, stakeholders prévenus à temps

---

### 💬 Débrief (collectif)

**Questions à discuter** :
1. Votre intuition était-elle alignée avec l'analyse IA ?
2. Quel risque vous aviez complètement oublié ?
3. Quelle action corrective auriez-vous prise ?
4. **Estimation** : Combien de semaines de retard évitées grâce à la détection précoce ?

**💡 Leçon clé** : Détecter les risques de DÉLAIS tôt = possibilité d'agir avant la catastrophe

---

## Volet complémentaire : réunions et documentation

Les exercices suivants prolongent le cours sur la transcription, les action items et la communication à partir d'une vidéo (**2 × 20 minutes**).

## 📹 Exercice 4 : MS Teams - Transcription et exploitation avec Loop

**Durée** : 20 minutes  
**Objectif** : Enregistrer une réunion avec MS Teams et exploiter la transcription pour générer des action items collaboratifs

### Le problème

Après chaque réunion, vous passez **30-45 minutes** à :

- Réécouter l'enregistrement pour ne rien oublier
- Rédiger le compte-rendu
- Identifier et lister les action items
- Envoyer par email à l'équipe
- Risque d'oubli ou de perte d'information

**⏱️ Temps total : 30-45 min par réunion**

---

### ✅ Mission : Automatiser avec MS Teams + Loop

#### **Démo live (5 min) - À suivre en groupe**

**Le formateur démontre :**

1. **Organiser une réunion Teams test**
  - Créer une réunion rapide Teams
  - Inviter 2-3 participants
  - Démarrer la réunion
2. **Activer l'enregistrement + transcription**
  - Cliquer sur "⋯ Plus" → "Enregistrer et transcrire"
  - ✅ Activer la transcription en direct
  - Observer la transcription en temps réel dans le panneau latéral
3. **Simuler une mini-réunion** (2-3 min de discussion)
  ```
   Exemple de discussion simulée :

   - PO : "On doit décider de la priorité pour les 3 features du backlog"
   - Dev 1 : "La feature A (intégration Slack) est demandée par 5 clients"
   - PM : "OK, je propose qu'on priorise A. Dev 1, tu peux estimer ça ?"
   - Dev 1 : "Je dirais 2 sprints. Je commence lundi prochain"
   - PO : "Parfait. Dev 2, tu continues sur la feature B cette semaine ?"
   - Dev 2 : "Oui, je livre vendredi"
  ```
4. **Terminer la réunion et accéder à la transcription**
  - Arrêter l'enregistrement
  - Montrer où retrouver la transcription (Chat de la réunion → Transcription)

---

#### **Étape 1 : Télécharger la transcription** (2 min)

**Instructions pour les apprenants :**

1. Accéder à la réunion Teams enregistrée
2. Ouvrir le chat de la réunion
3. Cliquer sur l'onglet "📝 Transcription"
4. Cliquer sur "⋯ Plus d'options" → "Télécharger la transcription"
5. Sauvegarder le fichier `.vtt` ou `.docx`

---

#### **Étape 2 : Extraire les action items avec ChatGPT** (8 min)

**Copier la transcription** et utiliser ce prompt :

```
Tu es un assistant de réunion. Analyse cette transcription et extrais les action items.

Transcription MS Teams :
[COLLER ICI LA TRANSCRIPTION]

Pour CHAQUE action item, fournis :
1. 🎯 ACTION : Description claire et actionnable de la tâche
2. 👤 RESPONSABLE : Nom de la personne assignée
3. 📅 ÉCHÉANCE : Date ou délai mentionné (si précisé)
4. ⚡ PRIORITÉ : Haute / Moyenne / Basse (basé sur le contexte)
5. 📌 CONTEXTE : Pourquoi cette action (1 phrase)

Format de sortie :
Utilise un tableau Markdown avec ces colonnes :
| Action | Responsable | Échéance | Priorité | Contexte |

Si aucune action n'est identifiée, indique "Aucun action item détecté".
```

**Résultat attendu** :


| Action                                   | Responsable | Échéance       | Priorité | Contexte                            |
| ---------------------------------------- | ----------- | -------------- | -------- | ----------------------------------- |
| Estimer la feature A (intégration Slack) | Dev 1       | Lundi prochain | Haute    | Demandée par 5 clients, prioritaire |
| Commencer le développement feature A     | Dev 1       | Lundi prochain | Haute    | Suite à l'estimation                |
| Livrer la feature B                      | Dev 2       | Vendredi       | Haute    | En cours cette semaine              |


---

#### **Étape 3 : Créer un composant Microsoft Loop partagé** (5 min)

**Créer un espace de suivi collaboratif :**

1. **Ouvrir Microsoft Loop** (loop.microsoft.com ou depuis Teams)
  - Créer un nouveau composant "Liste de tâches"
  - Titre : "Action Items - [Nom de la réunion] - [Date]"
2. **Copier les action items depuis ChatGPT**
  - Transformer chaque ligne du tableau en tâche Loop
  - Assigner les responsables (@mentionner les personnes)
  - Ajouter les échéances
3. **Partager le composant Loop**
  - Dans le chat Teams de la réunion
  - Tous les participants peuvent voir et cocher les tâches en temps réel
  - Les mises à jour sont synchronisées automatiquement

**Exemple de composant Loop** :

```
Action Items - Sprint Planning - 19/11/2025

☐ Estimer la feature A (intégration Slack)
  👤 @Dev1 | 📅 Lundi 25/11 | ⚡ Haute
  📌 Demandée par 5 clients, à prioriser

☐ Commencer développement feature A
  👤 @Dev1 | 📅 Lundi 25/11 | ⚡ Haute
  📌 Suite à l'estimation validée

☐ Livrer la feature B
  👤 @Dev2 | 📅 Vendredi 22/11 | ⚡ Haute
  📌 En cours cette semaine
```

---

#### **Étape 4 : Mesurer le gain** (facultatif, si temps)


| Critère                | Méthode manuelle         | Avec MS Teams + Loop + IA          | Gain    |
| ---------------------- | ------------------------ | ---------------------------------- | ------- |
| **Temps compte-rendu** | 30-45 min                | 5 min                              | **89%** |
| **Risque d'oubli**     | ⚠️ Élevé (note manuelle) | ✅ Nul (transcription complète)     | 100%    |
| **Collaboration**      | ❌ Email statique         | ✅ Loop dynamique et synchronisé    | 100%    |
| **Traçabilité**        | ⚠️ Moyenne               | ✅ Élevée (transcription + actions) | 100%    |


**💡 Leçon clé** : Teams transcription + ChatGPT + Loop = **workflow de réunion quasi-automatisé** sans outil externe

---

## 🎬 Exercice 5 : Gladia.io - De la vidéo à la communication multi-canal

**Durée** : 25 minutes  
**Objectif** : Transcrire une vidéo, générer des sous-titres et créer du contenu pour communication externe

### Le problème

Vous avez enregistré une **conférence ou démo produit** de 10-15 minutes. Vous devez :

- Transcrire la vidéo pour référence
- Ajouter des sous-titres pour accessibilité
- Créer des posts réseaux sociaux pour promouvoir la vidéo
- Rédiger un article de blog résumant le contenu

**⏱️ Temps manuel : 3-4 heures** (transcription manuelle, rédaction, sous-titres)

---

### ✅ Mission : Automatiser avec Gladia.io + ChatGPT

#### **Étape 1 : Upload vidéo sur Gladia.io** (5 min)

**Instructions** :

1. **Créer un compte Gladia.io**
  - Aller sur [https://gladia.io](https://gladia.io)
  - S'inscrire (gratuit pour débuter, 1h de transcription/mois)
  - Vérifier l'email
2. **Upload d'une vidéo de démonstration**
  - Utiliser une vidéo fournie OU une vidéo de votre projet
  - Formats acceptés : MP4, MOV, AVI, etc.
  - Taille max : 2GB (plan gratuit)
3. **Lancer la transcription**
  - Sélectionner la langue (Français)
  - Options : Timestamps ✅ ON (nécessaire pour sous-titres)
  - Cliquer sur "Transcribe"
  - ⏱️ Attendre 2-5 min selon longueur vidéo
4. **Télécharger la transcription**
  - Format : JSON ou TXT avec timestamps
  - Sauvegarder localement

**💡 Astuce** : Si pas de vidéo perso, utiliser une vidéo YouTube de démo produit (télécharger avec un outil comme y2mate.com)

---

#### **Étape 2 : Générer les sous-titres SRT** (5 min)

**Copier la transcription Gladia** et utiliser ce prompt :

```
Transforme cette transcription avec timestamps en fichier SRT de sous-titres professionnels.

Transcription Gladia.io :
[COLLER ICI LA TRANSCRIPTION AVEC TIMESTAMPS]

Règles de formatage SRT :
- Max 2 lignes par sous-titre
- Max 42 caractères par ligne
- Découpage naturel (ne pas couper au milieu d'une phrase)
- Timestamps format : HH:MM:SS,MS --> HH:MM:SS,MS
- Numérotation séquentielle

Format de sortie :
1
00:00:00,000 --> 00:00:03,500
[Texte du sous-titre]

2
00:00:03,500 --> 00:00:07,000
[Texte du sous-titre]

Génère le fichier SRT complet.
```

**Résultat attendu** : Fichier SRT prêt à uploader sur YouTube, Vimeo, etc.

---

#### **Étape 3 : Générer un post LinkedIn** (7 min)

**Prompt** :

```
Tu es un community manager expert en création de contenu LinkedIn.

À partir de cette transcription de conférence/démo produit, rédige un POST LINKEDIN engageant.

Transcription :
[COLLER LA TRANSCRIPTION]

Structure du post :
1. 🎯 ACCROCHE (1-2 phrases)
   - Question provocante OU statistique marquante OU témoignage
   - Doit donner envie de lire la suite

2. 📝 CORPS (150-180 mots)
   - Résumé du contexte
   - 3 insights clés de la vidéo (avec émojis)
   - Valeur ajoutée pour le lecteur

3. 🚀 CALL TO ACTION
   - Invitation à regarder la vidéo
   - Question pour engager la discussion

4. 🏷️ HASHTAGS
   - 3 à 5 hashtags pertinents et populaires

Ton : Professionnel mais accessible et engageant
Format : Markdown avec émojis
Longueur : 150-200 mots
```

**Résultat attendu** : Post LinkedIn prêt à publier avec accroche, insights et CTA

---

#### **Étape 4 : Générer un post Viva Engage** (3 min)

**Prompt** :

```
Adapte ce contenu pour un post Viva Engage (réseau social interne d'entreprise).

Transcription de la vidéo :
[COLLER LA TRANSCRIPTION]

Structure du post Viva Engage :
1. 📢 ANNONCE (1 phrase accrocheuse)
   - Annonce la nouvelle vidéo/démo disponible

2. 💡 POINTS CLÉS (3-4 bullets)
   - Résumé ultra-synthétique des éléments importants
   - Orienté "ce que ça change pour vous"

3. 🎬 APPEL À L'ACTION
   - Inviter à regarder la vidéo
   - Encourager feedback et questions dans les commentaires

4. 🔗 LIEN (placeholder)
   - [Insérer lien vidéo ici]

Ton : Collaboratif, interne, moins formel que LinkedIn
Format : Court et scannable (max 100 mots)
Émojis : OK mais modération
```

**Résultat attendu** : Post Viva Engage court et orienté équipe interne

---

#### **Étape 5 : Générer un article de blog résumé** (5 min)

**Prompt** :

```
Rédige un article de blog structuré (800-1000 mots) résumant cette conférence/démo.

Transcription :
[COLLER LA TRANSCRIPTION]

Structure de l'article :

## Introduction (100-150 mots)
- Contexte et enjeu du sujet
- Annonce de ce qui sera abordé

## [Section 1 - Point clé 1] (200-250 mots)
- Développement du premier point important
- Exemple concret ou chiffre clé

## [Section 2 - Point clé 2] (200-250 mots)
- Développement du deuxième point
- Cas d'usage pratique

## [Section 3 - Point clé 3] (200-250 mots)
- Développement du troisième point
- Impact et bénéfices

## Citations marquantes
- 2-3 citations clés de la vidéo (en bloc quote)

## Conclusion (100-150 mots)
- Récap des enseignements principaux
- Appel à l'action (voir la vidéo complète, essayer le produit, etc.)

Format : Markdown
Ton : Éducatif, accessible, avec exemples concrets
Style : Sous-titres clairs, paragraphes courts, facile à scanner
```

**Résultat attendu** : Article de blog complet prêt à publier

---

#### **Étape 6 : Mesurer l'impact** (facultatif)


| Critère                 | Méthode manuelle     | Avec Gladia + IA    | Gain    |
| ----------------------- | -------------------- | ------------------- | ------- |
| **Transcription vidéo** | 2h (écoute + frappe) | 3 min (automatique) | **98%** |
| **Sous-titres SRT**     | 1h (timing manuel)   | 5 min               | **92%** |
| **Post LinkedIn**       | 30 min (rédaction)   | 3 min               | **90%** |
| **Post Viva Engage**    | 20 min               | 2 min               | **90%** |
| **Article blog**        | 2h (rédaction)       | 5 min               | **96%** |
| **TOTAL**               | **5h 50min**         | **18 min**          | **95%** |


**💡 Leçon clé** : Une vidéo de 15 min génère **4 contenus différents** en moins de 20 minutes !

---

## 🎓 Synthèse : Le triptyque en action

| Dimension | Problème classique | Solution IA | Gain mesurable |
|-----------|-------------------|-------------|----------------|
| **📐 QUALITÉ** | Specs floues → défauts → corrections coûteuses | Génération de critères testables | -60% défauts |
| **💰 COÛTS** | Estimations à l'instinct → dépassements budgets | Estimation basée sur données historiques | ±20-30% précision |
| **⏰ DÉLAIS** | Détection tardive des retards → actions impossibles | Analyse prédictive continue | +4 semaines d'anticipation |

### 🔗 Les 3 dimensions sont liées !

```
Meilleure QUALITÉ (specs claires)
         ↓
Moins de défauts = Moins de COÛTS de correction
         ↓
Moins de retravail = DÉLAIS respectés
```

---

## 🚀 À appliquer cette semaine

**Challenge** : Identifiez dans vos projets actuels :

1. **1 spec floue** → Appliquez l'exercice 1 (génération de critères testables)
2. **1 estimation à faire** → Appliquez l'exercice 2 (exploration de données historiques)
3. **1 indicateur de risque** → Appliquez l'exercice 3 (analyse prédictive)
4. **1 réunion** → Appliquez l'exercice 4 (Teams + transcription + action items + Loop)
5. **1 vidéo ou démo** → Appliquez l'exercice 5 (Gladia + contenus multi-canal)

**Mesurez** :
- Temps gagné
- Qualité améliorée
- Précision d'estimation
- Risques détectés à l'avance

---

## 📌 Rappels importants

> [!IMPORTANT]
> **Le triptyque n'est pas négociable** : Qualité + Coûts + Délais doivent TOUS être maîtrisés. L'IA ne vous dispense pas de décisions stratégiques, elle vous donne les données pour décider.

> [!WARNING]
> **L'IA n'est pas magique** : Elle analyse des patterns, mais ne connaît pas votre contexte spécifique. Validez toujours ses recommandations avec votre expertise métier.

> [!TIP]
> **La donnée est reine** : Plus vous alimentez l'IA avec des données historiques précises, plus ses prédictions seront fiables. Documentez vos projets !