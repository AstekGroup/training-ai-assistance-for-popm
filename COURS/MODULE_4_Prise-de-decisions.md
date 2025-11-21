# Module 4 : Prise de décisions assistée par IA

**Version** : 2.0.0
**Date de dernière mise à jour** : 2025-11-21
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Objectifs d'apprentissage

À l'issue de ce module, les participants seront capables de :

1. Utiliser l'IA pour interroger des données produit en langage naturel
2. Prioriser efficacement avec le framework RICE assisté par IA
3. Analyser des décisions stratégiques avec un SWOT généré par IA
4. Communiquer des décisions complexes de manière claire et structurée

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
Voici 50 commentaires clients sur notre nouvelle interface :
[COLLER COMMENTAIRES]

Synthétise les 3 principaux points de friction et les 3 points les plus appréciés.
Donne un score de sentiment global sur 10.
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

---

## 4. Communiquer la décision

Une bonne décision mal communiquée est une décision inutile.

### 4.1 Structurer l'annonce

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

## 5. Exercice Pratique : Le "Sprint Decision" (20 min)

**Objectif** : Prioriser un backlog de crise en 15 minutes chrono.

**Scénario** :
Vous êtes PO. Il reste 2 sprints avant la fin de l'année.
Votre backlog contient 10 features, mais la capacité de l'équipe ne permet d'en faire que 3.
La direction met la pression pour la feature "Dashboard", les commerciaux veulent "Export Excel", et le support supplie pour "Fix Login Bug".

**Mission** :
1.  Prendre la liste des 10 features (fournie par le formateur).
2.  Utiliser ChatGPT pour faire une analyse RICE rapide.
3.  Générer un email de justification pour dire "Non" aux commerciaux (ou à la direction !).

**Livrable** : Le classement RICE et l'email de communication.

| Temps | 1-2 jours | 15 min | **95%** |
| Alternatives | 1 | 3+ | +200% |

---

### Synthèse : Les 3 frameworks maîtrisés

| Framework | Quand l'utiliser | Temps gagné | ROI |
|-----------|------------------|-------------|-----|
| **RICE** | Priorisation features | 90% (3h → 15min) | Immédiat |
| **SWOT** | Décisions stratégiques | 95% (2j → 15min) | Élevé |

**ROI total** : **~50 heures/an économisées** sur décisions stratégiques

---

## 10. Ressources complémentaires

### Articles et études

- [Harvard Business Review (2024). &#34;AI-Assisted Decision Making: A Framework for Leaders&#34;](https://hbr.org/topic/subject/artificial-intelligence)
- [MIT Sloan Review (2023). &#34;How AI Can Improve Strategic Decision Making&#34;](https://mitsloan.mit.edu/ideas-made-to-matter/how-ai-can-improve-strategic-decision-making)
- [McKinsey (2024). &#34;The Future of Decision Making: Human-AI Collaboration&#34;](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-future-of-decision-making)

### Outils recommandés

- **[Tableau](https://www.tableau.com/products/ai-ml) / [Power BI](https://powerbi.microsoft.com/fr-fr/ai/)** : Analyse de données avec IA
- **[ChatGPT](https://chat.openai.com) / [Claude](https://claude.ai)** : Analyse et génération d'insights
- **[Perplexity](https://www.perplexity.ai)** : Recherche et synthèse d'informations
- **Decision-making frameworks** : Templates et outils

### Templates et frameworks

Consultez le dossier `SUPPORTS/` pour :

- Template de matrice de priorisation
- Template d'analyse de scénarios
- Template de communication de décision
- Checklist de prise de décision assistée

### Formations complémentaires

- "Data-Driven Decision Making" (Coursera)
- "Strategic Decision Making" (Harvard Business School Online)
- Webinaires Astek sur la prise de décision assistée par IA

---

## 11. Conclusion et prochaines étapes

### Points clés à retenir

1. L'IA réduit les biais et améliore l'objectivité des décisions
2. Les frameworks structurés (RICE, SWOT, multi-critères) sont plus efficaces avec l'IA
3. La modélisation de scénarios aide à anticiper les conséquences
4. La communication claire est essentielle pour l'acceptation des décisions
5. L'humain reste essentiel pour validation et jugement final

### Prochaines étapes

- **Module 5** : Réunions et documentation assistées par l'IA

---

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.
