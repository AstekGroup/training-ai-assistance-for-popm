# Module 4 : Prise de décisions assistée par IA

**Version** : 3.0.0
**Date de dernière mise à jour** : 2026-05-26
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Objectifs d'apprentissage

À l'issue de ce module, les participants seront capables de :

1. Utiliser l'IA pour interroger des données produit en langage naturel
2. Prioriser efficacement avec le framework RICE assisté par IA
3. Analyser des décisions stratégiques avec un SWOT généré par IA
4. Communiquer des décisions complexes de manière claire et structurée
5. Utiliser des outils IA pour transcrire et synthétiser les réunions automatiquement
6. Extraire les action items et décisions importantes des réunions avec l'IA
7. Créer des comptes-rendus efficaces et actionnables
8. Optimiser le temps passé en réunion grâce à l'IA
9. Utiliser des outils IA pour transcrire et synthétiser les réunions automatiquement
10. Extraire les action items et décisions importantes des réunions avec l'IA
11. Créer des comptes-rendus efficaces et actionnables
12. Optimiser le temps passé en réunion grâce à l'IA

---

## 1. Introduction : Décider mieux et plus vite

### 1.1 Le défi de la décision PO/PM

**Le problème** : Trop d'informations, trop de choix, pas assez de temps.
**La solution IA** : Un assistant qui pré-mâche l'analyse et structure la réflexion.

**Ce que l'IA change** :

- **Vitesse** : Analyse de données en secondes vs heures.
- **Objectivité** : Réduction des biais émotionnels.
- **Clarté** : Structuration automatique des arguments.

---

## 2. Interroger ses données en langage naturel

Plus besoin d'être expert SQL ou Excel. L'IA permet de "discuter" avec ses données.

### 2.1 Analyse exploratoire simple

**Technique** : Copier/coller un jeu de données (CSV, Excel) et poser des questions.

**Exemple de prompt** :

```
Agis comme un Data Analyst Senior.
Voici les données d'utilisation de notre feature "Export PDF" sur les 3 derniers mois :
[COLLER DONNÉES]

Identifie :
1. La tendance globale (hausse/baisse)
2. Les jours de pic d'utilisation
3. Les anomalies éventuelles
```

### 2.2 Synthèse de feedback qualitatif

**Technique** : Analyser des centaines de verbatims utilisateurs en un clic.

**Exemple de prompt** :

```
Agis comme un User Researcher Senior. Analyse ces 50 retours qualitatifs :
[COLLER COMMENTAIRES]

1. Extrais les 3 pain points principaux et classe-les par ordre de sévérité (Critique, Majeur, Mineur), en indiquant la fréquence.
2. Identifie les 2 "Aha! moments" ou fonctionnalités les plus plébiscitées.
3. Formate le résultat dans un tableau Markdown clair.
4. Donne un score de sentiment global sur 10.
```

---

## 3. Priorisation et Stratégie : Les Frameworks Essentiels

Ne nous dispersons pas. Voici les deux seuls outils dont vous avez besoin pour 80% des décisions.

### 3.1 Priorisation RICE assistée par IA

**RICE** = Reach × Impact × Confidence / Effort.

**L'apport de l'IA** : Estimer les valeurs (surtout Impact et Effort) pour vous donner une base de travail objective.

**Prompt Template** :

```
Tu es CPO (Chief Product Officer). Aide-moi à prioriser ces 3 features avec la méthode RICE.

Features :
1. [Feature A]
2. [Feature B]
3. [Feature C]

Contexte : [Votre contexte produit/équipe]

Pour chaque feature, estime :
- Reach (Portée)
- Impact (0.25 à 3)
- Confidence (Confiance)
- Effort (Jours/Homme)

Calcule le score final et propose un classement.
```

----------------------- ✄ TP 1 (RICE) ✄ -----------------------

### 3.2 Analyse SWOT Stratégique

Pour les grandes décisions (ex: Lancer un nouveau produit, changer de marché).

**Prompt Template** :

```
Génère une matrice SWOT pour la décision suivante : [DÉCISION]

Contexte :
- Forces actuelles : [Vos forces]
- Marché : [Votre marché]

Pour chaque quadrant (Forces, Faiblesses, Opportunités, Menaces), donne 3 points clés très spécifiques.
Conclus avec une recommandation : GO ou NO-GO ?
```

----------------------- ✄ TP 2 (SWOT) ✄ -----------------------

---

## 4. Communiquer : décisions, réunions et comptes-rendus

Documenter les rituels projet, tracer les décisions prises en réunion et annoncer clairement les arbitrages aux parties prenantes.

### 4.1 Introduction : Réunions, levier de productivité

#### 4.1.1 Le coût des réunions

**Statistiques** :

- Les cadres passent en moyenne 23 heures/semaine en réunion ([Harvard Business Review, 2017 — Stop the Meeting Madness](https://hbr.org/2017/07/stop-the-meeting-madness))
- 67% des managers déclarent que trop de réunions les empêchent de faire leur travail
- 30% du temps de réunion est considéré comme improductif

**Coûts cachés** :

- Temps de préparation
- Temps de suivi (comptes-rendus, action items)
- Documentation dispersée et difficile à retrouver
- Perte d'information entre réunions

#### 4.1.2 Impact de l'IA sur les réunions et la documentation

**Bénéfices mesurables** :

- Réduction de 50% du temps passé sur comptes-rendus
- Amélioration de 40% de la traçabilité des décisions
- Gain de 3-4 heures/semaine sur tâches de documentation
- Meilleure qualité et complétude de la documentation

---

### 4.2 Transcription et synthèse de réunions avec l'IA

#### 4.2.1 Outils de transcription automatique

**[Otter.ai](https://otter.ai)** :

- Transcription en temps réel
- Identification automatique des intervenants
- Génération de résumés
- Extraction d'action items
- Intégrations ([Zoom](https://zoom.us), [Teams](https://www.microsoft.com/microsoft-teams), Google Meet)

**[Fireflies.ai](https://fireflies.ai)** :

- Enregistrement et transcription automatiques
- Recherche dans toutes les réunions
- Intégrations nombreuses
- Analytics de réunions

**[Microsoft 365 Copilot dans Teams](https://www.microsoft.com/microsoft-teams)** :

- Assistant IA pour animer et documenter les réunions
- Suggestions de questions et points à aborder
- Gestion du timing et de l'agenda
- Détection de sujets hors agenda
- Facilitation de la participation équitable

**[Microsoft Loop](https://loop.microsoft.com)** :

- Espaces de travail collaboratifs en temps réel
- Composants partagés (listes, tableaux, notes)
- Synchronisation automatique entre applications
- Idéal pour documentation collaborative et action items
- Intégration native avec Teams

**[Gladia.io](https://gladia.io)** :

- API de transcription audio/vidéo haute précision
- Support de multiples langues et formats
- Transcription en temps réel ou différée
- Intégration facile via API
- Idéal pour automatisation et workflows personnalisés

#### 4.2.2 Synthèse intelligente de réunions

#### 4.2.2.1 Génération de résumés

**Technique** : Utiliser l'IA pour créer des résumés structurés

**Exemple de prompt** :

```
Synthétise cette transcription de réunion en un résumé structuré :

Transcription :
[coller transcription]

Format :
1. Contexte et objectifs de la réunion
2. Points clés discutés (3-5 points principaux)
3. Décisions prises
4. Action items (qui fait quoi, quand)
5. Prochaines étapes
6. Questions ouvertes

Ton : Professionnel, concis, actionnable
Longueur : 1 page maximum
```

#### 4.2.2.2 Extraction de décisions

**Technique** : Identifier automatiquement les décisions prises

**Exemple de prompt** :

```
Extrais toutes les décisions prises lors de cette réunion :

Transcription :
[coller transcription]

Pour chaque décision :
- Décision prise (formulation claire)
- Contexte et justification
- Responsable de la mise en œuvre
- Délai si mentionné
- Impact attendu si mentionné

Format : Liste numérotée, une décision par item.
```

#### 4.2.2.3 Identification de points d'attention

**Technique** : Détecter les sujets nécessitant suivi

**Cas d'usage** :

- Risques mentionnés
- Blocages identifiés
- Désaccords à résoudre
- Opportunités à explorer

#### 4.2.3 Extraction d'action items

#### 4.2.3.1 Génération automatique d'action items

**Technique** : Extraire et structurer les actions à faire

**Exemple de prompt** :

```
Extrais tous les action items de cette réunion et structure-les :

Transcription :
[coller transcription]

Pour chaque action item :
- Action à réaliser (formulation claire et actionnable)
- Responsable (nom ou équipe)
- Échéance (si mentionnée)
- Priorité (Haute/Moyenne/Basse, basée sur contexte)
- Dépendances (si mentionnées)
- Contexte (pourquoi cette action)

Format : Tableau ou liste structurée
```

#### 4.2.3.2 Suivi et mise à jour

**Intégration** : Synchroniser avec outils de gestion de tâches

**Workflows possibles** :

- Action items → Création automatique tickets [Jira](https://www.atlassian.com/software/jira)
- Action items → Ajout à liste de tâches
- Action items → Composants [Microsoft Loop](https://loop.microsoft.com) partagés pour suivi collaboratif
- Rappels automatiques avant échéance

---

### 4.3 Optimisation du temps de réunion

#### 4.3.1 Préparation assistée par IA

#### 4.3.1.1 Génération d'ordres du jour

**Technique** : Créer des ordres du jour pertinents

**Exemple de prompt** :

```
Crée un ordre du jour pour cette réunion :

Type de réunion : [daily standup / sprint planning / rétrospective / etc.]
Participants : [liste]
Objectifs : [objectifs de la réunion]
Contexte : [contexte projet, points à aborder]

Format :
- Ordre du jour structuré
- Temps alloué par point
- Préparation requise pour chaque participant
- Résultats attendus

Durée totale : [durée souhaitée]
```

#### 4.3.1.2 Préparation de présentations

**Technique** : Générer des slides ou documents de présentation

**Outils** : [ChatGPT](https://chatgpt.com) avec plugins, [Gamma](https://gamma.app), [Beautiful.ai](https://www.beautiful.ai), [Canva Docs/Presentations avec IA](https://www.canva.com)

**Cas d'usage** :

- Présentations récurrentes (rapports sprint, roadmaps)
- Documents de préparation pour stakeholders
- Supports visuels pour réunions

#### 4.3.2 Animation assistée par IA

#### 4.3.2.1 Suggestions en temps réel

**Fonctionnalités** (outils avancés) :

- Détection de sujets hors agenda
- Suggestions de questions à poser
- Rappels de points à couvrir
- Alertes sur timing

**Outils** : [Microsoft 365 Copilot dans Teams](https://www.microsoft.com/microsoft-teams), outils de réunion avec IA intégrée

#### 4.3.2.2 Facilitation de réunions

**Technique** : Utiliser l'IA pour préparer des techniques de facilitation

**Exemples** :

- Génération de questions pour rétrospectives
- Structures de brainstorming
- Formats de décision (voting, consensus)

#### 4.3.3 Suivi post-réunion

#### 4.3.3.1 Génération automatique de comptes-rendus

**Workflow automatisé** :

1. Transcription automatique
2. Synthèse avec IA
3. Extraction action items
4. Génération compte-rendu
5. Distribution automatique

**Gain de temps** : 1-2 heures par réunion

#### 4.3.3.2 Rappels et suivi

**Automatisations** :

- Rappels avant échéance d'action items
- Suivi de complétion
- Alertes sur actions en retard
- Préparation réunion de suivi

---

### 4.4 Comptes-rendus efficaces et actionnables

#### 4.4.1 Structure d'un compte-rendu efficace

#### 4.4.1.1 Éléments essentiels

**Structure recommandée** :

1. **En-tête** : Date, participants, objectifs
2. **Résumé exécutif** : 2-3 phrases clés
3. **Points discutés** : Principaux sujets abordés
4. **Décisions prises** : Liste claire des décisions
5. **Action items** : Qui fait quoi, quand
6. **Prochaines étapes** : Ce qui vient ensuite
7. **Questions ouvertes** : Sujets à suivre

#### 4.4.1.2 Génération avec IA

**Exemple de prompt** :

```
Crée un compte-rendu professionnel et actionnable à partir de cette transcription :

Transcription :
[coller transcription]

Informations complémentaires :
- Date : [date]
- Participants : [liste]
- Objectifs initiaux : [objectifs]

Format :
1. En-tête (date, participants, durée)
2. Résumé exécutif (3-4 phrases)
3. Points clés discutés (avec contexte)
4. Décisions prises (formulation claire, avec niveau de certitude)
5. Action items (tableau : Action / Responsable / Échéance / Priorité)
6. Sujets reportés / Désaccords (ce qui n'a pas été tranché)
7. Prochaines étapes
8. Questions ouvertes / Points à suivre

Ton : Professionnel, concis, actionnable
Style : Facile à scanner rapidement
Longueur : 1-2 pages maximum
```

#### 4.4.2 Personnalisation selon le public

#### 4.4.2.1 Adaptation du niveau de détail

**Stratégies** :

- Direction : Focus décisions et impacts
- Équipe technique : Détails d'implémentation
- Stakeholders métier : Focus valeur et utilisateurs

**Technique** : Utiliser l'IA pour adapter le contenu

#### 4.4.2.2 Formats variés

**Formats possibles** :

- Compte-rendu complet (détaillé)
- Résumé exécutif (1 page)
- Email de synthèse (courte)
- Présentation (slides)

**Technique** : Générer différents formats avec IA selon besoin

#### 4.4.3 Distribution et suivi

#### 4.4.3.1 Distribution automatique

**Workflows** :

- Génération compte-rendu → Email automatique
- Publication sur [Confluence](https://www.atlassian.com/software/confluence)/[Notion](https://www.notion.so)
- Post sur Slack/[Teams](https://www.microsoft.com/microsoft-teams)
- Ajout à calendrier pour suivi

#### 4.4.3.2 Suivi d'action items

**Fonctionnalités** :

- Création automatique de tickets/tâches
- Rappels avant échéance
- Suivi de complétion
- Escalade si retard

---

### 4.5 Structurer les annonces de décisions

**Technique** : Transformer une décision complexe en un message clair pour les stakeholders.

**Exemple de prompt** :

```
J'ai décidé de [DÉCISION] pour les raisons suivantes : [RAISONS].
Cependant, cela va impacter [ÉQUIPE/PROJET].

Rédige un email pour les stakeholders qui :
1. Annonce la décision clairement
2. Explique le "Pourquoi" (données à l'appui)
3. Rassure sur les impacts négatifs
4. Donne les prochaines étapes

Ton : Professionnel mais empathique.
```

---

## 5. Ressources complémentaires

### Articles et études

- [Harvard Business Review. "Stop the Meeting Madness"](https://hbr.org/2017/07/stop-the-meeting-madness) (2017 — charge des réunions)
- [MIT Sloan Management Review. "The Surprising Impact of Meeting-Free Days"](https://sloanreview.mit.edu/article/the-surprising-impact-of-meeting-free-days/) (2022)
- [McKinsey. "When can AI make good decisions?"](https://www.mckinsey.com/capabilities/operations/our-insights/when-can-ai-make-good-decisions-the-rise-of-ai-corporate-citizens) (2025)
- [McKinsey. "The change agent: decisions in the agentic age"](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-change-agent-goals-decisions-and-implications-for-ceos-in-the-agentic-age) (2025–2026)
- [McKinsey. "The state of AI in 2025"](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) (2025)
- [CNIL. "Intelligence artificielle — guides et recommandations" (FR)](https://www.cnil.fr/fr/intelligence-artificielle)

Voir aussi le détail dans `[ANNEXES/ressources-externes.md](../ANNEXES/ressources-externes.md)`.

### Outils recommandés

- **[Tableau](https://www.tableau.com/products/ai-ml)** : Analyse de données avec IA
- **[ChatGPT](https://chatgpt.com) / [Claude](https://claude.ai) / [Mistral AI**](https://mistral.ai) : Analyse qualitative et génération d'insights
- **[Perplexity](https://www.perplexity.ai) / [Elicit**](https://elicit.com) : Recherche et synthèse web
- **[Productboard](https://www.productboard.com) / [Dovetail**](https://dovetail.com) : Tri et catégorisation des feedbacks
- **[Otter.ai](https://otter.ai)** : Transcription et synthèse de réunions
- **[Fireflies.ai](https://fireflies.ai)** : Enregistrement et transcription
- **[Microsoft Teams Copilot](https://www.microsoft.com/microsoft-teams)** / **[Zoom AI Companion](https://www.zoom.com/en/ai-assistant/)** : Transcription et facilitation intégrées
- **[Microsoft Loop](https://loop.microsoft.com)** : Collaboration et suivi d'action items
- **[Gladia.io](https://gladia.io)** : API de transcription audio/vidéo

### Formations complémentaires

- [Work Smarter, Not Harder — Coursera](https://www.coursera.org/learn/work-smarter-not-harder) (réunions et productivité)
- [Strategic Decision Making — Harvard Business School Online](https://online.hbs.edu/courses/strategic-decision-making/)
- [FUN-MOOC — catalogue IA](https://www.fun-mooc.fr/fr/cours/?search=intelligence+artificielle) (FR)
- [PMI France — formations et événements](https://www.pmi-france.org) (FR)

### Templates et frameworks

Consultez [`ANNEXES/supports/`](../ANNEXES/supports/) (voir aussi [`ANNEXES/README.md`](../ANNEXES/README.md)) :

- [Template de matrice de priorisation (RICE)](../ANNEXES/supports/SUPPORT_Template-Matrice-Priorisation-RICE.md)
- [Template d'analyse de scénarios](../ANNEXES/supports/SUPPORT_Template-Analyse-Scenarios.md)
- [Template de communication de décision](../ANNEXES/supports/SUPPORT_Template-Communication-Decision.md)
- [Checklist de prise de décision assistée](../ANNEXES/supports/SUPPORT_Checklist-Prise-Decision-Assistee.md)
- [Template de compte-rendu de réunion](../ANNEXES/supports/SUPPORT_Template-Compte-Rendu-Reunion.md)
- [Prompts réutilisables pour synthèse de réunion](../ANNEXES/supports/SUPPORT_Prompts-Synthese-Reunion.md)

---

## 6. Conclusion et prochaines étapes

### Points clés à retenir

1. L'IA réduit les biais et améliore l'objectivité des décisions
2. Les frameworks structurés (RICE, SWOT) sont plus efficaces avec l'IA
3. La transcription et la synthèse automatiques des réunions libèrent du temps pour la valeur ajoutée
4. L'extraction structurée des décisions et des action items améliore la traçabilité et l'exécution
5. Des comptes-rendus standardisés et adaptés au public accélèrent l'alignement des parties prenantes
6. La communication claire (décisions et réunions) est essentielle pour l'acceptation des arbitrages
7. L'humain reste essentiel pour validation et jugement final

---

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.