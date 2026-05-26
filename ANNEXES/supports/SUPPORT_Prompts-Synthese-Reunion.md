# Prompts réutilisables : Synthèse de réunion

**Version** : 1.0.0  
**Date de dernière mise à jour** : 2026-05-26  
**Auteur** : Philippe Pary [philippe.pary@astek.net](mailto:philippe.pary@astek.net)

---

## 1. Synthèse courte (email / chat)

```
À partir de cette transcription de réunion :
[coller]

Produis un résumé en 5 bullet points maximum :
- Contexte en 1 phrase
- 3 points clés
- 1 prochaine action prioritaire avec responsable

Ton : direct, professionnel. Langue : français.
```

---

## 2. Extraction décisions et actions

```
Analyse cette transcription :
[coller]

Extrais uniquement :
1. Liste des décisions (formulation impérative, qui décide si mentionné)
2. Tableau action items : Action | Responsable | Échéance | Priorité (H/M/B)

Signale les sujets non tranchés ou ambigus.
```

---

## 3. Compte-rendu complet

Utiliser le prompt du fichier [`SUPPORT_Template-Compte-Rendu-Reunion.md`](SUPPORT_Template-Compte-Rendu-Reunion.md) (section « Prompt IA »).

---

## 4. Adaptation au public

### Direction (executive summary)

```
Reformate la synthèse suivante pour un comité de direction :
[coller CR ou transcription]

Max 200 mots. Focus : décisions, impacts business, risques, demandes de arbitrage.
Pas de détail technique.
```

### Équipe technique

```
Reformate pour l'équipe de développement :
[coller]

Inclus : décisions techniques, dépendances, action items, questions ouvertes, liens tickets si mentionnés.
```

### Stakeholders métier

```
Reformate pour des interlocuteurs métier non techniques :
[coller]

Focus : valeur utilisateur, calendrier, impacts processus, ce qu'on attend d'eux.
```

---

## 5. Suivi post-réunion

```
Voici les action items d'une réunion du [date] :
[coller tableau]

Pour chaque action en retard ou sans owner clair :
- Propose un message de relance court
- Suggère une escalade si échéance dépassée de plus de [X] jours
```

---

## Bonnes pratiques

- Anonymiser ou masquer les données personnelles sensibles avant envoi à un LLM public.
- Vérifier les noms des participants et l'orthographe des acronymes métier.
- Croiser avec l'enregistrement en cas de décision à fort enjeu.
- Publier le CR validé sur Confluence / Notion / Loop selon les rituels équipe.

---

**Voir aussi** : Module 4, §4.3–4.4 — Transcription et comptes-rendus
