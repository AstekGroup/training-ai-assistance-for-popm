# Template : User Story avec vérification INVEST

**Version** : 1.0.0
**Date de dernière mise à jour** : 2025-11-09
**Auteur** : Philippe Pary [philippe.pary@astek.net
](mailto:philippe.pary@astek.net)

---

## Structure du template

### En-tête

**ID** : [US-XXX]
**Titre** : [Titre court et descriptif]
**Date de création** : [JJ/MM/AAAA]
**Auteur** : [Nom]
**Statut** : [À faire / En cours / Terminé / Annulé]
**Sprint** : [Sprint X]
**Priorité** : [Haute / Moyenne / Basse]

---

## User Story

**Format standard** :

```
En tant que [type d'utilisateur],
Je veux [action/fonctionnalité],
Afin de [bénéfice/valeur].
```

**Exemple** :

```
En tant qu'utilisateur connecté,
Je veux pouvoir réinitialiser mon mot de passe,
Afin de retrouver l'accès à mon compte en cas d'oubli.
```

---

## Description détaillée

**Contexte** :
[Contexte métier, problème à résoudre, opportunité]

**Objectifs** :

- [Objectif 1]
- [Objectif 2]
- [Objectif 3]

**Portée** :
[Ce qui est inclus dans cette user story]

**Hors portée** :
[Ce qui n'est PAS inclus (pour éviter le scope creep)]

---

## Critères d'acceptation

### Scénario nominal (Happy Path)

**Étant donné que** [condition initiale]
**Quand** [action utilisateur]
**Alors** [résultat attendu]

**Exemple** :

```
Étant donné que je suis un utilisateur avec un compte actif
Quand je clique sur "Mot de passe oublié" et saisis mon email
Alors je reçois un email avec un lien de réinitialisation valide 24h
```

### Scénarios alternatifs

**Scénario alternatif 1** : [Description]

- **Étant donné que** [condition]
- **Quand** [action]
- **Alors** [résultat]

**Scénario alternatif 2** : [Description]

- [Détails]

### Scénarios d'erreur

**Scénario d'erreur 1** : [Description]

- **Étant donné que** [condition]
- **Quand** [action]
- **Alors** [message d'erreur ou comportement]

**Scénario d'erreur 2** : [Description]

- [Détails]

---

## Notes techniques

**Stack technique** :

- [Technologies utilisées]

**Contraintes techniques** :

- [Contraintes à respecter]

**Dépendances** :

- [Autres user stories ou composants nécessaires]

**API / Intégrations** :

- [APIs ou services externes utilisés]

**Performance** :

- [Exigences de performance si applicables]

---

## Design et UX

**Maquettes / Wireframes** :

- [Lien vers maquettes]

**Comportements spécifiques** :

- [Comportements UX particuliers]

**Accessibilité** :

- [Exigences d'accessibilité]

---

## Métriques de succès

**KPIs à mesurer** :

- [Métrique 1] : [Objectif]
- [Métrique 2] : [Objectif]

**Comment mesurer** :

- [Méthode de mesure]

---

## Estimation

**Points de story** : [X]
**Complexité** : [S / M / L / XL]
**Effort estimé** : [X jours/personnes]
**Confiance** : [Haute / Moyenne / Basse]

**Justification** :
[Pourquoi cette estimation ?]

---

## Vérification INVEST

### ✅ Independent (Indépendante)

- [ ] La user story peut être développée indépendamment
- [ ] Pas de dépendances bloquantes avec d'autres stories
- [ ] Peut être livrée de manière isolée

**Commentaire** : [Notes]

### ✅ Negotiable (Négociable)

- [ ] Les détails peuvent être affinés avec l'équipe
- [ ] Pas de spécifications trop rigides
- [ ] Espace pour discussion et amélioration

**Commentaire** : [Notes]

### ✅ Valuable (Valuable)

- [ ] Apporte de la valeur aux utilisateurs
- [ ] Contribue aux objectifs produit
- [ ] Valeur mesurable ou observable

**Commentaire** : [Notes]

### ✅ Estimable (Estimable)

- [ ] L'équipe peut estimer l'effort
- [ ] Assez de détails pour estimation
- [ ] Complexité compréhensible

**Commentaire** : [Notes]

### ✅ Small (Petite)

- [ ] Peut être complétée en 1 sprint
- [ ] Taille raisonnable pour l'équipe
- [ ] Pas trop complexe

**Commentaire** : [Notes]

### ✅ Testable (Testable)

- [ ] Critères d'acceptation clairs et testables
- [ ] Résultats observables
- [ ] Tests automatisables ou manuels possibles

**Commentaire** : [Notes]

**Score INVEST** : [X/6] - [Commentaire global]

---

## Définition of Done (DoD)

- [ ] Code développé et revu
- [ ] Tests unitaires écrits et passants
- [ ] Tests d'intégration passants
- [ ] Code déployé en environnement de test
- [ ] Tests manuels effectués et validés
- [ ] Documentation technique mise à jour
- [ ] Documentation utilisateur mise à jour (si applicable)
- [ ] Critères d'acceptation validés par le PO
- [ ] Accessibilité vérifiée (si applicable)
- [ ] Performance validée (si applicable)
- [ ] Sécurité vérifiée (si applicable)

---

## Historique

| Date   | Auteur | Action       | Commentaire   |
| ------ | ------ | ------------ | ------------- |
| [Date] | [Nom]  | Création    | [Commentaire] |
| [Date] | [Nom]  | Modification | [Commentaire] |
| [Date] | [Nom]  | Validation   | [Commentaire] |

---

## Liens et références

**Épique** : [Lien vers épique]
**Features liées** : [Liste]
**User stories dépendantes** : [Liste]
**Tickets techniques** : [Liste]
**Documents connexes** : [Liens]

---

## Notes additionnelles

[Espace pour notes libres, questions, remarques]

---

## Prompt IA pour génération

**Prompt réutilisable pour générer une user story avec ce template** :

```
Tu es un Product Owner expérimenté.

Génère une user story complète en utilisant ce template :

[Coller ce template]

Fonctionnalité à documenter : [Description de la fonctionnalité]
Contexte produit : [Contexte]
Utilisateurs cibles : [Description]
Stack technique : [Technologies]
Contraintes : [Contraintes spécifiques]

Remplis tous les champs du template de manière détaillée et professionnelle.
Assure-toi que la user story respecte tous les critères INVEST.
```

---

**Note** : Ce template est développé par Astek (https://www.astek.net). Adaptez-le selon vos besoins et standards d'équipe.
