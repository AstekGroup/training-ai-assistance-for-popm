# Template : Documentation projet

**Version** : 1.0.0  
**Date de dernière mise à jour** : 2026-05-26  
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## Métadonnées

| Champ | Valeur |
| ----- | ------ |
| **Produit / projet** | [Nom] |
| **Version doc** | [vX.Y] |
| **Auteur** | [Nom] |
| **Date** | [JJ/MM/AAAA] |
| **Public cible** | [Équipe / Métiers / Utilisateurs finaux] |
| **Statut** | [Brouillon / Revue / Validé] |

---

## 1. Vue d'ensemble

**Résumé** : [2–3 phrases]

**Objectifs** :

- [Objectif 1]
- [Objectif 2]

**Périmètre** : [Ce que couvre ce document]

---

## 2. Contexte produit

**Utilisateurs cibles** : […]

**Problème résolu** : […]

**Liens** : [Backlog / Roadmap / Architecture]

---

## 3. Cas d'usage principaux

| ID | Cas d'usage | Acteur | Priorité |
| -- | ----------- | ------ | -------- |
| UC-01 | […] | […] | [H/M/B] |

---

## 4. Fonctionnalités détaillées

### 4.1 [Feature / module]

**Description** : […]

**Règles métier** :

- [Règle 1]

**Critères d'acceptation** :

- [ ] [Critère 1]

---

## 5. Guide utilisateur (si applicable)

### [Tâche 1]

1. [Étape 1]
2. [Étape 2]

---

## 6. Documentation technique (référence)

| Document | Emplacement | Owner |
| -------- | ----------- | ----- |
| API | [lien] | […] |
| Architecture | [lien] | […] |

---

## 7. FAQ

| Question | Réponse |
| -------- | ------- |
| […] | […] |

---

## 8. Limitations connues

- [Limitation 1]
- [Limitation 2]

---

## 9. Historique des versions

| Version | Date | Auteur | Modifications |
| ------- | ---- | ------ | ------------- |
| 1.0 | […] | […] | Création |

---

## Prompt IA — génération

```
Génère une documentation fonctionnelle complète pour cette feature :

Feature : [description]
Contexte : [contexte produit, utilisateurs]
Spécifications techniques : [si disponibles]

Sections : vue d'ensemble, cas d'usage, fonctionnalités détaillées,
guide utilisateur, FAQ, limitations connues.

Format : Markdown, clair et structuré.
Public cible : […]
```

## Prompt IA — vérification complétude

```
Analyse cette documentation et identifie :
1. Sections manquantes (vs template standard projet)
2. Informations incomplètes ou ambiguës
3. Incohérences

Documentation :
[coller contenu]
```

---

**Note** : Maintenir la doc à jour à chaque release ; l'IA accélère la rédaction, pas la validation métier.
