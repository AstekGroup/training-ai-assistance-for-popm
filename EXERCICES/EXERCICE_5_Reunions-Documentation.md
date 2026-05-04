# Exercices complémentaires — Module 2 : Réunions et documentation assistées par l'IA

**Rattachement** : ce fichier prolonge le cours [`MODULE_2_Qualite-couts-delais-Reunions-documentation.md`](../COURS/MODULE_2_Qualite-couts-delais-Reunions-documentation.md) (volet réunions et documentation).

**Durée totale** : 40 minutes (2 x 20 minutes)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : 
- Microsoft Teams (avec compte professionnel)
- Compte Gladia.io (gratuit)
- Compte Notion (gratuit)
- Accès à [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)

---

## 🎯 Objectif pédagogique

Maîtriser **2 workflows d'IA** pour optimiser les réunions et la documentation :
- **Workflow 1** : Réunion → Transcription → Action items (MS Teams + Loop)
- **Workflow 2** : Vidéo → Transcription → Sous-titres → Communication (Gladia + ChatGPT)

**Principe** : Libérer du temps sur les tâches administratives pour se concentrer sur la valeur métier

---

## 📹 Exercice 1 : MS Teams - Transcription et exploitation avec Loop

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

| Action | Responsable | Échéance | Priorité | Contexte |
|--------|-------------|----------|----------|----------|
| Estimer la feature A (intégration Slack) | Dev 1 | Lundi prochain | Haute | Demandée par 5 clients, prioritaire |
| Commencer le développement feature A | Dev 1 | Lundi prochain | Haute | Suite à l'estimation |
| Livrer la feature B | Dev 2 | Vendredi | Haute | En cours cette semaine |

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

| Critère | Méthode manuelle | Avec MS Teams + Loop + IA | Gain |
|---------|------------------|---------------------------|------|
| **Temps compte-rendu** | 30-45 min | 5 min | **89%** |
| **Risque d'oubli** | ⚠️ Élevé (note manuelle) | ✅ Nul (transcription complète) | 100% |
| **Collaboration** | ❌ Email statique | ✅ Loop dynamique et synchronisé | 100% |
| **Traçabilité** | ⚠️ Moyenne | ✅ Élevée (transcription + actions) | 100% |

**💡 Leçon clé** : Teams transcription + ChatGPT + Loop = **workflow de réunion quasi-automatisé** sans outil externe

---

## 🎬 Exercice 2 : Gladia.io - De la vidéo à la communication multi-canal

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

| Critère | Méthode manuelle | Avec Gladia + IA | Gain |
|---------|------------------|------------------|------|
| **Transcription vidéo** | 2h (écoute + frappe) | 3 min (automatique) | **98%** |
| **Sous-titres SRT** | 1h (timing manuel) | 5 min | **92%** |
| **Post LinkedIn** | 30 min (rédaction) | 3 min | **90%** |
| **Post Viva Engage** | 20 min | 2 min | **90%** |
| **Article blog** | 2h (rédaction) | 5 min | **96%** |
| **TOTAL** | **5h 50min** | **18 min** | **95%** |

**💡 Leçon clé** : Une vidéo de 15 min génère **4 contenus différents** en moins de 20 minutes !

---



## 🎓 Synthèse : Les 2 workflows maîtrisés

| Workflow | Outil principal | Use case | Temps gagné |
|----------|----------------|----------|-------------|
| **1. Réunion → Action items** | MS Teams + Loop | Comptes-rendus automatisés | 89% (45min → 5min) |
| **2. Vidéo → Communication** | Gladia.io + ChatGPT | Contenu multi-canal depuis vidéo | 95% (5h50 → 18min) |

---

## 📋 Vos livrables de la session

À la fin de cette session, vous repartez avec :

✅ **1 workflow Teams + Loop** opérationnel pour vos réunions  
✅ **4 contenus générés** depuis 1 vidéo (transcription, sous-titres, posts LinkedIn + Viva Engage, article)  
✅ **3 prompts réutilisables** pour transcription, communication, documentation  

**ROI total estimé** : **~8 heures/semaine économisées** sur réunions et documentation ! 🚀

---

## 💬 Débrief collectif (facultatif, si temps)

### Questions à discuter en groupe :

1. **Quel workflow vous a le plus impressionné ?**
   - Teams + Loop ?
   - Gladia → 4 contenus ?

2. **Quelle est la première application que vous allez mettre en place lundi ?**
   - Activer transcription Teams pour vos réunions ?
   - Transcrire une vidéo de démo pour créer du contenu ?

3. **Difficultés rencontrées ?**
   - Problèmes d'accès aux outils ?
   - Prompts qui ne donnent pas de bons résultats ?

4. **ROI estimé pour votre contexte ?**
   - Combien de réunions/semaine ?
   - Combien de vidéos/mois ?

---

## 🎯 Challenge pour la semaine

**Mission** : Appliquez AU MOINS 1 workflow sur vos vrais projets

### Option 1 : Workflow Réunion
- [ ] Activer transcription Teams pour 1 réunion cette semaine
- [ ] Extraire les action items avec ChatGPT
- [ ] Créer un composant Loop partagé
- [ ] Mesurer le temps économisé vs méthode habituelle

### Option 2 : Workflow Vidéo → Communication
- [ ] Identifier 1 vidéo de démo/conférence à exploiter
- [ ] Transcrire avec Gladia.io
- [ ] Générer 2 contenus minimum (posts + article)
- [ ] Publier et mesurer l'engagement



---

## 📌 Rappels importants

> [!IMPORTANT]
> **Confidentialité des données** : Vérifiez les politiques de vos outils avant d'uploader des contenus sensibles. Pour Teams/Notion Microsoft 365, les données restent dans votre tenant. Pour Gladia.io, vérifiez les conditions.

> [!TIP]
> **Validez toujours les transcriptions** : Les outils de transcription ont 95%+ de précision, mais vérifiez les noms propres, acronymes, et chiffres importants avant de publier.

> [!WARNING]
> **Recherche sémantique ≠ magique** : Elle fonctionne bien si votre documentation est claire et structurée. Garbage in, garbage out.

> [!NOTE]
> **Itérez sur vos prompts** : Les prompts fournis sont des bases. Adaptez-les à votre contexte, style, et besoins spécifiques.

---

## 🔗 Ressources complémentaires

### Outils mentionnés

- **Microsoft Teams** : [teams.microsoft.com](https://teams.microsoft.com)
- **Microsoft Loop** : [loop.microsoft.com](https://loop.microsoft.com)
- **Gladia.io** : [gladia.io](https://gladia.io)
- **Notion** : [notion.so](https://www.notion.so)
- **Viva Engage** : [engage.cloud.microsoft](https://engage.cloud.microsoft)

### Templates de prompts

Créez votre fichier `Prompts_Reunions_Documentation.md` avec :
- ✅ Prompt extraction action items (fait aujourd'hui)
- ✅ Prompt génération sous-titres SRT (fait aujourd'hui)
- ✅ Prompt posts réseaux sociaux (fait aujourd'hui)
- ✅ Prompt recherche sémantique (fait aujourd'hui)
- 💡 Prompt compte-rendu exécutif
- 💡 Prompt documentation technique
- 💡 Prompt FAQ auto-générée

### Guides pratiques

- [Guide Microsoft Teams Transcription](https://support.microsoft.com/teams)
- [Guide Microsoft Loop Getting Started](https://support.microsoft.com/loop)
- [Gladia.io API Documentation](https://docs.gladia.io)
- [Notion AI Guide](https://www.notion.so/help/guides/using-notion-ai)