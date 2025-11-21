# Exercices Module 2 : Maîtriser le triptyque Qualité / Coûts / Délais avec l'IA

**Durée totale** : 1 heure (3 × 20 minutes)  
**Format** : Travail individuel avec débrief collectif  
**Outils nécessaires** : Accès à [ChatGPT](https://chat.openai.com) ou [Claude](https://claude.ai)

---

## 🎯 Objectif pédagogique

Comprendre concrètement comment l'IA peut agir sur **chacune des 3 dimensions d'un projet** :
- **Qualité** → Améliorer les spécifications pour réduire les défauts
- **Coûts** → Estimer avec précision pour éviter les dépassements
- **Délais** → Détecter les risques pour livrer à temps

**Principe** : 1 exercice = 1 dimension du triangle

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