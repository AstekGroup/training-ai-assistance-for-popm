# Glossaire - Terminologie IA pour PO/PM

**Version** : 1.0.0
**Date de dernière mise à jour** : 2025-11-12
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Types d'intelligence artificielle

### IA générative

**Définition** : Type d'intelligence artificielle capable de générer du contenu nouveau (texte, images, code) à partir de données d'entraînement.
**Cas d'usage PO/PM** : Rédaction de user stories, génération de documentation projet, création de présentations et rapports.
**Exemples d'outils** : ChatGPT, Claude, Gemini, Mistral.

### IA analytique

**Définition** : Type d'intelligence artificielle qui analyse des données existantes pour identifier des patterns et tendances.
**Cas d'usage PO/PM** : Analyse de vélocité d'équipe, identification de risques projet, optimisation de la roadmap produit.
**Exemples d'outils** : Tableau avec IA, Power BI, Looker.

### IA prédictive

**Définition** : Type d'intelligence artificielle qui prédit des événements futurs basés sur des données historiques.
**Cas d'usage PO/PM** : Estimation de délais de livraison, prédiction de risques projet, optimisation de la planification.
**Exemples d'outils** : Forecast, Jira Advanced Roadmaps avec IA.

---

## Concepts fondamentaux de l'IA

### Machine Learning (Apprentissage automatique)

**Définition** : Système qui apprend à partir de données sans être explicitement programmé.
**Exemple** : Recommandation de priorités de backlog basée sur l'historique.

### Deep Learning (Apprentissage profond)

**Définition** : Sous-ensemble du Machine Learning utilisant des réseaux de neurones complexes pour apprendre des représentations hiérarchiques des données.
**Exemple** : Analyse de sentiment dans les retours utilisateurs.

### LLM (Large Language Models / Modèles de langage à grande échelle)

**Définition** : Modèles de langage entraînés sur d'énormes volumes de texte pour comprendre et générer du langage naturel.

**Caractéristiques importantes** :

- **Contexte limité** : Attention aux limites de tokens (ex: ChatGPT ~128k tokens)
- **Hallucinations** : Peuvent générer des informations incorrectes
- **Biais** : Reflètent les biais présents dans les données d'entraînement

### Tokens

**Définition** : Unités de traitement utilisées par les modèles de langage pour analyser et générer du texte. Un token peut correspondre à un mot, une partie de mot, ou un caractère selon le modèle.
**Contexte** : Les LLM ont des limites de contexte exprimées en nombre de tokens (ex: 128k tokens pour ChatGPT).

### Hallucinations

**Définition** : Phénomène où un modèle IA génère des informations incorrectes, inventées ou non fondées, souvent de manière convaincante.
**Bonnes pratiques** : Toujours vérifier les faits générés par l'IA, utiliser des prompts précis et contextuels, itérer et affiner les résultats.

### Biais (dans l'IA)

**Définition** : Distorsions ou préjugés présents dans les résultats de l'IA, généralement hérités des données d'entraînement ou des algorithmes utilisés.
**Considérations** : Être conscient des biais potentiels dans les résultats IA, vérifier la diversité des perspectives, maintenir l'humain dans la boucle de décision.

---

## Ingénierie de prompt

### Prompt

**Définition** : Instruction donnée à un modèle IA pour obtenir un résultat souhaité.

**Structure d'un bon prompt** :

1. **Contexte** : Situation, rôle, objectif
2. **Tâche** : Ce que vous voulez obtenir
3. **Format** : Structure attendue du résultat
4. **Contraintes** : Limitations, exigences spécifiques

### Ingénierie de prompt (Prompt Engineering)

**Définition** : Technique et art de créer des instructions efficaces pour obtenir les meilleurs résultats d'un modèle IA.
**Compétence clé** : Devenue essentielle pour les PO/PM utilisant l'IA.

### Few-shot learning

**Définition** : Technique de prompt engineering consistant à fournir des exemples avant de demander la tâche à accomplir.
**Exemple** : "Voici 3 exemples de user stories bien rédigées : [exemples]. Maintenant, écris une user story similaire pour [nouvelle fonctionnalité]".

### Chain-of-Thought (Chaînage de pensée)

**Définition** : Technique de prompt engineering qui consiste à demander au modèle de raisonner étape par étape avant de donner la réponse finale.
**Exemple** : "Étape par étape : 1. Identifie les acteurs concernés 2. Définis le besoin métier 3. Formule la user story 4. Ajoute les critères d'acceptation".

---

## Recherche et structuration

### Recherche sémantique

**Définition** : Type de recherche qui comprend le sens et le contexte des requêtes, pas seulement les mots-clés exacts.
**Avantage** : Permet de trouver des informations pertinentes même si les termes exacts ne sont pas présents dans le document.
**Exemple** : "Quelles sont les décisions d'architecture prises pour le module paiement ?" trouve les ADRs pertinents même sans le terme exact.

---

## Notes

- Ce glossaire est régulièrement mis à jour pour refléter l'évolution du domaine de l'IA.
- Les définitions sont adaptées au contexte des Product Owners et Project Managers.
- Pour des définitions plus techniques, consulter les ressources complémentaires dans les modules de formation.

---

**Note** : Ce contenu est développé par [Astek](https://www.astek.net) et sera régulièrement mis à jour pour refléter l'évolution des outils et pratiques IA.
