# Exercice 1 : Transcription et synthèse de réunion avec l'IA

## 🎯 Objectif de l'exercice

Apprendre à utiliser l'IA pour transcrire et synthétiser une réunion, extraire les action items et créer un compte-rendu actionnable.

## 📋 Contexte de l'exercice

**Entreprise :** DataFlow
**Secteur :** SaaS Analytics
**Situation :** Réunion de sprint planning pour le Sprint 18

Vous êtes Product Owner chez DataFlow. Vous venez de participer à une réunion de sprint planning qui a duré 1h30. Vous avez une transcription de la réunion et vous devez produire un compte-rendu actionnable dans les 30 minutes qui suivent.

**Contrainte :** Vous n'avez pas le temps de tout réécouter et de tout re-synthétiser manuellement. Vous allez utiliser l'IA pour gagner du temps.

## 📝 Transcription de la réunion (Sprint Planning - Sprint 18)

```
[00:00] Marc (PO) : Bonjour à tous. On se retrouve pour le planning du Sprint 18 qui démarre lundi prochain. On a 3 semaines, capacité de 85 points comme d'habitude. Sarah, tu as la vélocité des 3 derniers sprints ?

[00:02] Sarah (Scrum Master) : Oui, on est stable : Sprint 15 → 82 points, Sprint 16 → 87 points, Sprint 17 → 84 points. Moyenne à 84,3 points. On peut viser 85 points confortablement.

[00:03] Marc : Parfait. Alors, les priorités business pour ce sprint. On a trois chantiers principaux :

1. Finir la refonte du dashboard analytics qu'on a commencée au sprint précédent
2. Intégrer l'export Excel que les clients réclament depuis 2 mois
3. Corriger les bugs critiques remontés en production

Julie, côté dashboard, où en est-on ?

[00:05] Julie (Dev lead) : On a fini 80% au sprint 17. Il reste 2 user stories : la personnalisation des widgets (estimée 13 points) et les filtres avancés (8 points). Donc 21 points au total pour finir.

[00:06] Marc : OK. Et niveau risques sur ces 2 stories ?

[00:07] Julie : Les filtres, c'est assez standard, je suis confiante. Par contre la personnalisation des widgets, il y a une complexité technique sur le drag & drop. Thomas a fait un POC la semaine dernière, ça a l'air jouable mais ça pourrait déborder si on rencontre des soucis cross-browser.

[00:08] Thomas (Dev) : Oui, le POC marche bien sur Chrome et Firefox, mais Safari a un comportement bizarre. J'ai besoin de 2-3 jours de plus pour investiguer Safari. Peut-être qu'on devrait découper la story en 2 : Chrome/Firefox d'abord (8 points), puis Safari (5 points) ?

[00:09] Marc : Bonne idée. On prend Chrome/Firefox en priorité P0 pour ce sprint, et Safari on verra si on a de la marge. Sarah, tu notes ?

[00:10] Sarah : Noté. Donc US-247 "Personnalisation widgets Chrome/Firefox" → 8 points, P0. US-248 "Personnalisation widgets Safari" → 5 points, P1.

[00:11] Marc : Exact. Passons à l'export Excel. C'est notre top demande client depuis 2 mois, on a 12 tickets Zendesk là-dessus. Julie, estimation ?

[00:12] Julie : On a fait le spike au sprint 17. C'est assez straightforward avec la librairie ExcelJS. J'estime :
- US-251 "Export Excel basique (données brutes)" → 5 points
- US-252 "Export Excel avec formatage (couleurs, graphiques)" → 13 points

Au total 18 points. Par contre, faut qu'on valide avec Sophie le format attendu par les clients.

[00:13] Sophie (UX) : J'ai fait 3 interviews clients la semaine dernière. Ils veulent surtout les données brutes pour les retraiter dans leur outil BI. Le formatage, c'est nice-to-have mais pas critique. Je recommande de faire juste l'export basique ce sprint.

[00:14] Marc : OK, on prend juste US-251 (5 points) en P0. Le formatage, on le fait au sprint 19 si besoin. Ça nous fait 8 + 8 + 5 = 21 points pour l'instant. Il nous reste 64 points. Sarah, côté bugs critiques, qu'est-ce qu'on a ?

[00:15] Sarah : J'ai extrait de Jira les bugs critiques en production :
- BUG-189 : Timeout sur requêtes API > 10 000 lignes (Sev 1, impacte 15% des clients)
- BUG-201 : Crash de l'app mobile sur iOS 17.2 (Sev 1, impacte tous les users iOS)
- BUG-215 : Données dashboard pas à jour en temps réel (Sev 2, impacte 30% des clients)
- BUG-223 : Export PDF planté sur gros rapports (Sev 2)

[00:17] Marc : OK, les 2 Sev 1 sont prioritaires. Julie, estimation ?

[00:18] Julie : BUG-189 (timeout API), c'est un problème de pagination. On doit refactoriser la requête backend + ajouter un système de streaming. J'estime 21 points, c'est gros.

BUG-201 (crash iOS), Léa a investigué hier, c'est lié à la nouvelle version de React Native. Il faut upgrade la lib et tester. Elle estime 8 points.

[00:20] Léa (Dev mobile) : Oui, 8 points c'est réaliste. J'ai déjà commencé à regarder la migration. Par contre, il faudra 2 jours de tests sur différents devices iOS. Je vais avoir besoin de Sophie pour valider les tests.

[00:21] Sophie : OK, je bloque 2 jours jeudi-vendredi semaine 2 pour ça.

[00:22] Marc : Parfait. Donc BUG-189 → 21 points, BUG-201 → 8 points. Ça nous fait 21 + 8 = 29 points de bugs. On est à 21 (features) + 29 (bugs) = 50 points. Il reste 35 points.

[00:23] Sarah : Et on n'a pas encore parlé du BUG-215 (dashboard pas à jour en temps réel). Ça, c'est remonté par 3 gros clients la semaine dernière.

[00:24] Julie : Ah oui, celui-là. C'est un problème de cache Redis qui expire pas correctement. Thomas a déjà trouvé la cause racine. Estimation : 5 points pour le fix + 3 points pour les tests.

[00:25] Marc : OK, on le prend aussi. BUG-215 → 8 points. On est à 58 points. Il reste 27 points.

[00:26] Sarah : On a aussi de la dette technique qui s'accumule. L'équipe dev demande depuis 2 sprints de pouvoir refactoriser le module de gestion des utilisateurs. C'est devenu un vrai spaghetti, ça ralentit toutes les nouvelles features autour de l'auth.

[00:27] Julie : Oui, merci Sarah. C'est critique pour nous. À chaque fois qu'on touche à l'auth, on passe 2x plus de temps que prévu à cause du code legacy. Si on refactorise maintenant, on gagne du temps sur les 3-4 prochains sprints. J'estime 21 points pour un refacto complet.

[00:28] Marc : Mmh, 21 points c'est beaucoup. On peut découper ? Faire un refacto incrémental ?

[00:29] Julie : On pourrait faire juste la partie "gestion des rôles" qui est la plus pourrie. Ça, c'est 13 points. Et on finit le reste au sprint 19.

[00:30] Marc : OK, on prend TECH-87 "Refacto module rôles" → 13 points. On est à 71 points. Il reste 14 points. On a autre chose de prioritaire ?

[00:31] Sophie : On a une demande de la direction commerciale : ils veulent un formulaire de demande de démo intégré dans l'app (pour les trials). C'est pour booster les conversions trial → payant. C'est assez simple côté UX, j'ai déjà fait les maquettes.

[00:32] Julie : J'ai vu tes maquettes. C'est clean. Estimation : 8 points (formulaire + intégration Salesforce pour envoyer les leads).

[00:33] Marc : OK, c'est stratégique pour le revenue. On prend. US-265 "Formulaire demande démo" → 8 points. On est à 79 points. Il reste 6 points.

[00:34] Sarah : On pourrait prendre quelques bugs Sev 3 de la backlog ? J'en ai 5-6 estimés à 1-2 points chacun.

[00:35] Marc : Oui, bonne idée. Julie, tu peux en choisir 3 qui te semblent rapides à fixer ?

[00:36] Julie : Oui, je prends :
- BUG-198 : Typo dans message d'erreur → 1 point
- BUG-207 : Bouton "Annuler" ne fonctionne pas sur modal → 2 points
- BUG-212 : Tooltip affiché au mauvais endroit → 2 points

Total : 5 points. On arrive à 84 points pile.

[00:37] Marc : Parfait. On a notre sprint. Récap :

**Features (26 points)** :
- US-247 : Personnalisation widgets Chrome/Firefox → 8 points (P0)
- US-249 : Filtres avancés dashboard → 8 points (P0)
- US-251 : Export Excel basique → 5 points (P0)
- US-265 : Formulaire demande démo → 8 points (P0)

**Bugs critiques (37 points)** :
- BUG-189 : Timeout API → 21 points (P0)
- BUG-201 : Crash iOS → 8 points (P0)
- BUG-215 : Dashboard temps réel → 8 points (P0)

**Dette technique (13 points)** :
- TECH-87 : Refacto module rôles → 13 points (P1)

**Bugs mineurs (5 points)** :
- BUG-198, BUG-207, BUG-212 → 5 points (P2)

**Backlog si marge** :
- US-248 : Personnalisation widgets Safari → 5 points (P1)

[00:40] Sarah : Parfait. Objectif sprint : finir le dashboard analytics, livrer l'export Excel, fixer les bugs critiques. Definition of Done : code reviewé, tests passés, déployé en staging, validé par Sophie.

[00:41] Marc : Oui. Et pour le BUG-189 (timeout API), c'est notre plus gros risque. Julie, tu as besoin de quoi pour réussir ?

[00:42] Julie : J'ai besoin de Thomas à temps plein pendant 1 semaine sur ce bug. Et on doit impliquer l'équipe infra pour valider la stratégie de pagination côté backend. Je vais organiser un design review avec eux lundi matin.

[00:43] Marc : OK, je valide. Thomas, tu te focus sur BUG-189 en priorité. Et design review lundi 10h avec l'équipe infra. Sarah, tu bloques la salle ?

[00:44] Sarah : C'est noté. Salle Apollo, lundi 10h, 1h. J'invite Thomas, Julie, et côté infra : Kevin et Malik.

[00:45] Marc : Super. Autre chose à ajouter avant de clore ?

[00:46] Léa : Oui, pour BUG-201 (crash iOS), j'ai besoin d'accès à 3 devices de test : iPhone 13 (iOS 17.2), iPhone 14 Pro, iPhone 15. On les a en stock ?

[00:47] Sarah : Je checke avec l'IT et je te confirme d'ici ce soir.

[00:48] Marc : Parfait. Dernier point : sprint review. On la fait quand ?

[00:49] Sarah : Vendredi 21 février, 14h-15h30. Format classique : démo des features + metrics. Marc, tu invites les stakeholders ?

[00:50] Marc : Oui, j'invite la direction produit, les sales, et les 3 clients beta-testeurs qu'on a sur le dashboard.

[00:51] Sarah : Super. On a tout couvert. Récap des action items :

1. Marc : Inviter stakeholders sprint review (deadline : lundi)
2. Julie : Organiser design review BUG-189 avec infra (lundi 10h)
3. Sarah : Bloquer salle Apollo lundi 10h + checker devices iPhone avec IT (deadline : ce soir)
4. Sophie : Bloquer 2 jours (jeudi-vendredi semaine 2) pour tests iOS
5. Thomas : Focus BUG-189 en priorité dès lundi

[00:53] Marc : Parfait. Merci à tous, bon sprint 18 ! On se retrouve lundi pour le daily.

[Fin de réunion]
```

## 🎯 Votre mission

Vous devez créer un compte-rendu professionnel et actionnable de cette réunion de sprint planning en utilisant l'IA.

### Livrables attendus

1. **Compte-rendu structuré** (1-2 pages max) avec :

   - En-tête (date, participants, durée, objectifs)
   - Résumé exécutif (3-4 phrases)
   - Sprint backlog (tableau des user stories/bugs avec estimations)
   - Décisions prises
   - Action items (tableau avec responsable, échéance, priorité)
   - Risques identifiés
   - Prochaines étapes
2. **Tableau des action items** exportable (format Jira/Trello/etc.)
3. **Analyse comparative** :

   - Temps passé avec méthode manuelle vs IA
   - Points positifs/négatifs de l'approche IA
   - Recommandations d'amélioration

## 🤖 Méthodologie avec l'IA

### Étape 1 : Synthèse globale de la réunion

**Prompt suggéré :**

```
Synthétise cette transcription de réunion de sprint planning en un résumé structuré :

Transcription :
[Copier-coller la transcription ci-dessus]

Format attendu :
1. Contexte et objectifs de la réunion (2-3 phrases)
2. Points clés discutés (5-7 bullet points principaux)
3. Décisions prises (liste claire)
4. Sprint backlog final (tableau : Item / Type / Estimation / Priorité)
5. Prochaines étapes

Ton : Professionnel, concis, actionnable
Longueur : 1 page maximum
```

### Étape 2 : Extraction des action items

**Prompt suggéré :**

```
Extrais tous les action items de cette réunion de sprint planning :

Transcription :
[Copier-coller la transcription]

Pour chaque action item, fournis :
- Action à réaliser (formulation claire et actionnable)
- Responsable (nom de la personne)
- Échéance (date précise ou relative comme "lundi", "ce soir")
- Priorité (P0/P1/P2 basée sur le contexte)
- Contexte (pourquoi cette action est nécessaire)

Format : Tableau markdown avec colonnes :
| Action | Responsable | Échéance | Priorité | Contexte |
```

### Étape 3 : Identification des risques

**Prompt suggéré :**

```
Analyse cette transcription et identifie tous les risques mentionnés ou implicites :

Transcription :
[Copier-coller la transcription]

Pour chaque risque :
- Description du risque
- Impact potentiel (élevé/moyen/faible)
- Probabilité (élevé/moyen/faible)
- Item(s) concerné(s) (US-XXX ou BUG-XXX)
- Plan de mitigation (si mentionné dans la réunion)

Format : Liste structurée
```

### Étape 4 : Génération du compte-rendu final

**Prompt suggéré :**

```
Crée un compte-rendu professionnel complet de cette réunion de sprint planning :

Transcription :
[Copier-coller la transcription]

Informations complémentaires :
- Date : Vendredi 7 février 2025
- Participants : Marc (PO), Sarah (SM), Julie (Dev lead), Thomas (Dev), Léa (Dev mobile), Sophie (UX)
- Durée : 53 minutes
- Sprint : Sprint 18 (3 semaines, capacité 85 points)

Structure du compte-rendu :

# Compte-rendu Sprint Planning - Sprint 18

## 📋 Informations générales
[Date, participants, durée, objectifs]

## 🎯 Résumé exécutif
[3-4 phrases résumant les décisions principales et objectifs du sprint]

## 📊 Sprint Backlog (84 points)

### Features (26 points)
[Tableau avec colonnes : ID | Description | Estimation | Priorité | Assigné]

### Bugs critiques (37 points)
[Tableau similaire]

### Dette technique (13 points)
[Tableau similaire]

### Bugs mineurs (5 points)
[Tableau similaire]

### Backlog de secours (si marge)
[Tableau similaire]

## ✅ Décisions prises
[Liste numérotée des décisions importantes]

## 📝 Action Items
[Tableau : Action | Responsable | Échéance | Priorité]

## ⚠️ Risques identifiés
[Liste des risques avec impact et mitigation]

## 🚀 Prochaines étapes
[Liste des prochaines actions/réunions]

## 📅 Sprint Review
[Date, format, participants]

---

Ton : Professionnel, concis, actionnable
Format : Markdown, facile à scanner rapidement
Longueur : 2 pages maximum
```

## 📐 Template de livrable

### Compte-rendu Sprint Planning - Sprint 18

```markdown
# Compte-rendu Sprint Planning - Sprint 18

## 📋 Informations générales

- **Date** : Vendredi 7 février 2025
- **Durée** : 53 minutes (9h00 - 9h53)
- **Participants** :
  - Marc (Product Owner)
  - Sarah (Scrum Master)
  - Julie (Dev Lead)
  - Thomas (Developer)
  - Léa (Mobile Developer)
  - Sophie (UX Designer)
- **Sprint** : Sprint 18 (3 semaines)
- **Capacité** : 85 points (vélocité moyenne : 84,3 points)

## 🎯 Résumé exécutif

[À compléter par l'IA]

## 📊 Sprint Backlog (84 points)

### Features (26 points)

| ID | Description | Estimation | Priorité | Assigné |
|----|-------------|-----------|----------|---------|
| [À compléter] | | | | |

### Bugs critiques (37 points)

[À compléter]

### Dette technique (13 points)

[À compléter]

### Bugs mineurs (5 points)

[À compléter]

### Backlog de secours

[À compléter]

## ✅ Décisions prises

1. [À compléter]

## 📝 Action Items

| # | Action | Responsable | Échéance | Priorité | Contexte |
|---|--------|------------|----------|----------|----------|
| 1 | [À compléter] | | | | |

## ⚠️ Risques identifiés

| Risque | Impact | Probabilité | Item concerné | Mitigation |
|--------|--------|-------------|---------------|------------|
| [À compléter] | | | | |

## 🚀 Prochaines étapes

- [À compléter]

## 📅 Sprint Review

- **Date** : Vendredi 21 février 2025, 14h00-15h30
- **Format** : Démo features + métriques
- **Participants** : Direction produit, Sales, 3 clients beta-testeurs

---

**Definition of Done** : Code reviewé, tests passés, déployé en staging, validé par Sophie (UX)
```

### Tableau action items (format Jira)

```csv
Summary,Assignee,Due Date,Priority,Labels
[À compléter avec extraction IA],,,,
```

### Analyse comparative

```markdown
## Analyse comparative : Méthode manuelle vs IA

### ⏱️ Temps passé

| Tâche | Temps manuel | Temps avec IA | Gain |
|-------|-------------|---------------|------|
| Réécoute réunion | 53 min | 0 min | -53 min |
| Prise de notes structurée | 30 min | 5 min | -25 min |
| Extraction action items | 15 min | 2 min | -13 min |
| Rédaction compte-rendu | 25 min | 8 min | -17 min |
| Relecture et corrections | 10 min | 5 min | -5 min |
| **TOTAL** | **133 min** | **20 min** | **-113 min (85% gain)** |

### ✅ Points positifs de l'approche IA

1. [À compléter après utilisation]

### ❌ Limites rencontrées

1. [À compléter après utilisation]

### 💡 Recommandations d'amélioration

1. [À compléter après utilisation]
```
