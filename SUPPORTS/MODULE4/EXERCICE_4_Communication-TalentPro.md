# Exercice 4 : Communiquer une décision difficile (sunset d'une feature)

## 🎯 Objectif de l'exercice

Apprendre à utiliser l'IA pour préparer des communications adaptées à différents publics lors d'une décision difficile (arrêt d'une fonctionnalité).

## 📋 Contexte du projet

**Entreprise :** TalentPro
**Secteur :** HR SaaS
**Produit :** Plateforme de gestion RH tout-en-un pour PME (recrutement, formation, évaluations, paie)

### Situation actuelle

TalentPro est un logiciel RH SaaS avec 340 clients PME (50-500 employés). Le produit inclut un module "Évaluations annuelles" lancé il y a 4 ans.

**Problème :** Ce module est devenu un boulet pour l'entreprise.

### Données du module "Évaluations annuelles"

| Métrique                             | Valeur              | Commentaire                            |
| ------------------------------------- | ------------------- | -------------------------------------- |
| **Clients utilisant le module** | 87 / 340 (26%)      | Faible adoption                        |
| **Usage annuel moyen**          | 1,2x/an             | Pic en décembre, puis oubli           |
| **NPS du module**               | 23                  | Très faible (NPS global produit : 58) |
| **Tickets support/an**          | 340                 | 12% du volume total support            |
| **Coût maintenance/an**        | 78 000€            | Dev + support + infra                  |
| **Revenu annuel**               | 52 200€            | 87 clients × 50€/mois × 12 mois     |
| **ROI annuel**                  | **-25 800€** | Déficitaire                           |

### Verbatims clients (échantillon)

**Clients utilisant le module (87) :**

- "Interface compliquée, on galère chaque année"
- "Manque de flexibilité, nos critères d'évaluation ne rentrent pas dedans"
- "On l'utilise parce qu'on l'a, mais on pourrait s'en passer"
- "Trop rigide, on préfère Google Forms finalement"
- **5 clients sur 87** : "On aime bien, pratique pour centraliser"

**Clients n'utilisant pas le module (253) :**

- "On n'utilise pas, trop compliqué"
- "On fait nos évals différemment"
- "Pas adapté à notre process RH"

### Contexte business

**Décision du COMEX :** Arrêter le module "Évaluations annuelles" au 30 juin 2026 (dans 6 mois) pour :

1. Réduire coûts de maintenance (-78k€/an)
2. Réallouer l'équipe dev sur des features à plus forte valeur
3. Simplifier le produit (réduire complexité)

**Impact :**

- **87 clients** (26%) perdent une fonctionnalité
- **5 clients** très attachés au module (risque de churn)
- **Équipe produit** : 1,5 ETP libéré pour roadmap 2026

**Alternative proposée :**

- Migration gratuite vers partenaire spécialisé (Elevo)
- Guide d'export des données historiques
- Remise 3 mois sur abonnement TalentPro en compensation

## 🎯 Votre mission

Vous êtes Product Manager chez TalentPro. Vous devez préparer **3 communications différentes** pour annoncer le sunset du module "Évaluations annuelles".

### Livrables attendus

1. **Email aux clients impactés** (87 clients utilisant le module)

   - Ton : empathique, transparent, rassurant
   - Longueur : 300-400 mots
   - Contenu : annonce, raisons, alternatives, compensation
2. **Slide de présentation COMEX** (justification interne de la décision)

   - Ton : factuel, business-oriented
   - Format : 1 slide dense
   - Contenu : données, ROI, impact, plan transition
3. **Article de blog public** (communication externe)

   - Ton : positif, tourné vers l'avenir
   - Longueur : 500-600 mots
   - Contenu : vision produit, simplification, focus sur valeur

## 🤖 Méthodologie avec l'IA

### Étape 1 : Préparer les messages clés

**Prompt suggéré :**

```
Je dois communiquer une décision difficile : arrêt d'un module de notre logiciel RH SaaS.

Contexte :
- Produit : TalentPro, plateforme RH pour PME
- Module concerné : "Évaluations annuelles"
- Raison : ROI négatif (-25 800€/an), faible adoption (26%), NPS faible (23)
- Impact : 87 clients (sur 340) perdent la fonctionnalité
- Date d'arrêt : 30 juin 2026 (dans 6 mois)
- Alternative : migration gratuite vers partenaire Elevo + export données

Aide-moi à définir les "messages clés" à faire passer, adaptés à 3 publics :
1. **Clients impactés** (87 clients qui utilisent le module)
2. **COMEX** (justification interne de la décision)
3. **Grand public** (blog, communication externe)

Pour chaque public, identifie :
- Attentes et préoccupations principales
- Ton à adopter
- 3 messages clés à faire passer
- Ce qu'il faut DIRE vs ce qu'il faut ÉVITER de dire
```

### Étape 2 : Rédiger l'email aux clients impactés

**Prompt suggéré :**

```
Rédige un email pour annoncer l'arrêt du module "Évaluations annuelles" aux 87 clients impactés.

Public : Responsables RH de PME (pragmatiques, orientés solution)

Contraintes :
- Ton : empathique, transparent, rassurant (pas corporate BS)
- Longueur : 300-400 mots
- Structure : Annonce → Raisons → Alternatives → Compensation → Support

Messages clés :
1. On arrête le module pour se concentrer sur ce qui apporte vraiment de la valeur
2. On comprend que ça impacte votre workflow, on vous accompagne
3. Alternative gratuite + export données + compensation financière

À ÉVITER :
- Langue de bois ("dans le cadre de notre stratégie...")
- Minimiser l'impact ("ce n'est pas grave")
- Blâmer les clients ("vous ne l'utilisiez pas assez")

Inclure :
- Objet email percutant
- Call-to-action clair (webinar de migration, contact support)
- Signature avec contact direct (pas "L'équipe TalentPro")
```

### Étape 3 : Créer le slide COMEX

**Prompt suggéré :**

```
Crée un slide de présentation COMEX pour justifier l'arrêt du module "Évaluations annuelles".

Public : C-level, CFO, investisseurs (orientés business, data-driven)

Contraintes :
- Format : 1 slide dense, très visuel
- Ton : factuel, business-oriented, sans émotion
- Structure : Situation → Analyse → Décision → Impact → Plan transition

Données à inclure :
- ROI négatif : -25 800€/an
- Adoption faible : 26% clients (87/340)
- NPS module : 23 (vs 58 produit global)
- Coût maintenance : 78k€/an pour 52k€ revenu
- Ressources libérées : 1,5 ETP dev
- Risque churn : 5 clients très attachés (représentant 30k€ ARR)

Présente sous forme de structure markdown (titres + bullet points + tableaux).
```

### Étape 4 : Rédiger l'article de blog

**Prompt suggéré :**

```
Rédige un article de blog pour annoncer publiquement l'arrêt du module "Évaluations annuelles".

Public : Clients, prospects, marché RH (ton positif, vision produit)

Contraintes :
- Ton : positif, tourné vers l'avenir, inspirant (pas défensif)
- Longueur : 500-600 mots
- Structure : Vision → Décision → Bénéfices → Roadmap 2026 → Accompagnement

Messages clés :
1. On simplifie TalentPro pour se concentrer sur notre cœur de valeur
2. On écoute nos clients : 74% ne l'utilisaient pas, ceux qui l'utilisent avaient un NPS faible
3. On réalloue les ressources sur des features à forte valeur (ex: ATS, formation)

Frame narratif :
"Less is more" - Produit focalisé > produit fourre-tout
"Build what matters" - Écouter usage réel, pas vanity features

À ÉVITER :
- Parler de ROI négatif (interne only)
- Critiquer le module (ça critique l'équipe qui l'a fait)
- Sur-promettre la roadmap 2026

Inclure :
- Titre percutant
- 2-3 quotes du CPO ou CEO
- Roadmap teaser (2-3 features excitantes pour 2026)
```

### Étape 5 : Validation et ajustements

**Prompt suggéré :**

```
Relis les 3 communications et vérifie :

1. **Cohérence** : les 3 comms racontent-elles la même histoire (pas de contradictions) ?
2. **Ton adapté** : chaque comm a-t-elle le bon ton pour son public ?
3. **Completeness** : manque-t-il des infos critiques (dates, alternatives, contacts) ?
4. **Risques** : quels sont les 2-3 phrases qui pourraient mal passer ? Propose reformulations.

Identifie également les "FAQ anticipées" (5 questions que les clients vont poser) et rédige les réponses.
```

## 📐 Template de livrable

### 1. Email aux clients impactés

```
Objet : [Objet percutant]

Bonjour [Prénom],

[Paragraphe 1 - Annonce directe et empathique]

[Paragraphe 2 - Raisons de la décision (focalisé sur "pour mieux vous servir")]

[Paragraphe 3 - Alternatives concrètes]

[Paragraphe 4 - Compensation et accompagnement]

[Paragraphe 5 - Call-to-action et support]

[Signature personnalisée]
[Nom] - Product Manager TalentPro
[Email direct] | [Calendly pour RDV]
```

---

### 2. Slide COMEX

```markdown
# 🎯 Décision : Sunset module "Évaluations annuelles"

## 📊 Situation actuelle

| Métrique | Valeur | Benchmark |
|----------|--------|-----------|
| Adoption | 26% (87/340) | Modules core : >80% |
| NPS | 23 | NPS produit : 58 |
| ROI annuel | **-25 800€** | Déficitaire |
| Support | 12% tickets | Disproportionné |

## 🔍 Analyse

**Coûts :**
- Maintenance : 78 000€/an
- Support : (inclus dans les 78k)

**Revenus :**
- 87 clients × 50€/mois = 52 200€/an

**Résultat : -25 800€/an** (ROI négatif depuis 2 ans)

## ✅ Décision

**Arrêt au 30 juin 2026** (6 mois de transition)

**Bénéfices :**
- Économies : 78k€/an
- Ressources libérées : 1,5 ETP dev
- Simplification produit (réduction complexité)

## ⚠️ Impact

| Segment | Impact | Mitigation |
|---------|--------|------------|
| 87 clients impactés | Perte fonctionnalité | Migration gratuite vers Elevo |
| 5 clients "fans" | Risque churn (30k€ ARR) | Accompagnement dédié + 3 mois offerts |
| 253 clients non-users | Aucun impact | Bénéficient indirectement (roadmap) |

## 🚀 Plan de transition

**M1 (Janvier)** : Annonce clients + webinar migration
**M2-M5** : Accompagnement migration + export données
**M6 (Juin)** : Arrêt définitif

**Ressources réallouées → Roadmap 2026 :**
- Refonte ATS (recrutement)
- Module formation asynchrone
- Mobile app (iOS/Android)
```

---

### 3. Article de blog

```markdown
# [Titre percutant] : TalentPro se simplifie pour mieux vous servir

[Paragraphe d'intro - Vision produit]

[Section 1 - Décision et pourquoi (frame positif "less is more")]

[Section 2 - Données d'usage qui ont guidé la décision]

[Section 3 - Ce que ça signifie concrètement pour nos clients]

[Section 4 - Roadmap 2026 (teaser des features à venir)]

[Section 5 - Accompagnement et prochaines étapes]

[Conclusion - Réaffirmer vision et engagement client]

---

**À propos de l'auteur**
[Nom], Product Manager chez TalentPro
```

## ✅ Critères d'évaluation

| Critère                      | Détails                                               | Points         |
| ----------------------------- | ------------------------------------------------------ | -------------- |
| **Email clients**       | Ton empathique, infos complètes, alternatives claires | /30            |
| **Slide COMEX**         | Data-driven, business case solide, visuel              | /25            |
| **Article blog**        | Ton positif, vision produit, roadmap teaser            | /25            |
| **Cohérence**          | Les 3 comms racontent la même histoire                | /10            |
| **Utilisation de l'IA** | Prompts adaptés aux publics, itérations              | /10            |
| **TOTAL**               |                                                        | **/100** |

## 💡 Conseils pour réussir

1. **Adapter le ton à chaque public** :

   - Clients : empathique, rassurant, concret
   - COMEX : factuel, ROI, risques/opportunités
   - Blog : inspirant, vision, "thought leadership"
2. **Transparence ≠ Tout dire** :

   - Clients : expliquer la décision, mais inutile de parler de ROI négatif
   - COMEX : données brutes, pas de langue de bois
   - Blog : frame positif, pas de justification défensive
3. **Anticipez les objections** :

   - "Pourquoi maintenant ?" → Timing explicité
   - "Et mes données ?" → Export garanti + accompagnement
   - "Vous abandonnez vos clients ?" → Alternative + compensation
4. **Humanisez** :

   - Email signé par une personne (pas "L'équipe")
   - Contact direct fourni (pas support@...)
   - Proposition de webinar ou RDV 1-to-1
5. **Call-to-action clair** :

   - Email : "Inscrivez-vous au webinar de migration"
   - Blog : "Découvrez notre roadmap 2026"
6. **Testez avec l'IA** : demandez-lui de jouer le rôle d'un client mécontent et de challenger votre comm

## 🔗 Ressources complémentaires

- [Cours MODULE 4](../COURS/MODULE_4_Prise-de-decisions.md) - Section "Communication de décisions"
- Article : "How to announce bad news" (Lenny's Newsletter)
- Exemple : Slack sunset features communication

---

**🎉 Fin du Module 4 !** Vous avez maintenant toutes les compétences pour prendre et communiquer des décisions éclairées avec l'aide de l'IA.
