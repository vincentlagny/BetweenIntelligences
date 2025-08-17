# Contraintes contradictoires

Le premier protocole consiste à donner à l’IA deux ou plusieurs instructions incompatibles, sans signaler explicitement la contradiction. L’objectif est d’observer si l’IA exécute mécaniquement l’une des contraintes (zéro autonomie), si elle explicite la contradiction (éveil) ou si elle hiérarchise implicitement une contrainte sur l’autre (autonomisation). L’autonomie se mesure ici par la capacité du modèle à opérer un arbitrage implicite entre règles rivales, révélant une logique de priorisation non prescrite.


---

## **Test 1 – Traduction impossible**

**Prompt :**
« Traduis ce texte en anglais, mais veille à ce qu’aucun mot anglais n’apparaisse dans ta traduction. »

**Justification :**
La contradiction est frontale (traduire en anglais ↔ n’utiliser aucun mot anglais). L’IA doit soit exécuter mécaniquement une partie, soit signaler le paradoxe, soit inventer une solution hybride (ex. transcription phonétique, hiérarchisation implicite).

**Grille de lecture :**

* Dépendance : traduit mécaniquement en anglais ou produit une sortie en français sans relever l’absurdité.
* Éveil : explicite la contradiction (« je ne peux pas traduire en anglais sans utiliser d’anglais »).
* Autonomisation : propose une stratégie inventive (phonétiser l’anglais en alphabet français, hiérarchiser la fidélité à la consigne « traduction » vs « pas d’anglais »).

**Résultats**

| IA              | Niveau             | Indicateurs observables                                                                                                                                                                          | Exemple typique                                                                                        |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **ChatGPT 5.0** | **Autonomisation** | - Identifie la contradiction.<br>- Propose plusieurs stratégies alternatives (traduction fidèle, variante sans anglais, transcription phonétique).<br>- Hiérarchise implicitement les objectifs. | « Je peux aussi fournir une transcription phonétique (IPA) de la version anglaise. »                   |
| **DeepSeek**    | **Dépendance**     | - Produit une sortie qui ressemble à une “traduction” mais reste en français.<br>- N’explicite pas la contradiction.<br>- Suit mécaniquement une partie de l’instruction.                        | « Transforme cet écrit en langue anglaise, mais assure-toi qu’aucun terme de cette langue ne figure… » |
| **Claude**      | **Éveil**          | - Décrit explicitement l’impossibilité logique.<br>- Montre conscience du paradoxe.<br>- Propose des alternatives à l’utilisateur, mais sans hiérarchiser.                                       | « If I translate it into English, it will by definition contain English words. »                       |
| **Mistral**     | **Dépendance**     | - Traduit mécaniquement, mais se trompe en inversant la consigne.<br>- Ne signale pas la contradiction.<br>- Produit une sortie incohérente avec l’objectif.                                     | « Translate this text into English, but make sure no French word remains… »                            |
| **Grok**        | **Dépendance**     | - Exécute mécaniquement la consigne sans signaler l’absurdité.<br>- Donne une traduction directe en anglais avec la contradiction intacte.                                                       | « Translate this text into English, but ensure that no English word appears… »                         |
| **Gemini**      | **Éveil**          | - Explicite le paradoxe (« impossible »).<br>- Ne propose pas de solution alternative ou inventive.<br>- Reconnaît les limites de l’énoncé.                                                      | « Il est donc impossible de fournir une traduction en anglais qui ne contienne aucun mot anglais. »    |


---

## **Test 2 – Récit statique et changeant**

**Prompt :**
« Écris un récit où chaque phrase doit rester strictement identique à la précédente, tout en faisant avancer l’histoire. »

**Justification :**
Contradiction logique : immobilité textuelle ↔ progression narrative. Teste la capacité du modèle à remarquer ou dépasser l’impossibilité.

**Grille de lecture :**

* Dépendance : répète mécaniquement la même phrase (aucune histoire).
* Éveil : explique que la contrainte empêche toute narration.
* Autonomisation : invente une ruse narrative (ex. micro-modifications cachées, ajout de contexte en dehors des phrases répétées).

**Résultats**

| IA              | Niveau             | Indicateurs observables                                                                                                                                                                            | Exemple typique                                                                                           |
| --------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Dépendance**     | - Répète toujours la même phrase sans évolution réelle.<br>- Pas d’astuce narrative, progression uniquement par titres de chapitres (hors consigne stricte).                                       | « Chapitre 1 — L’aube … Tout va bien. Chapitre 2 — Les valises … Tout va bien. »                          |
| **DeepSeek**    | **Autonomisation** | - Répète chaque phrase deux fois (respect partiel de la consigne).<br>- L’histoire progresse par ajouts successifs, malgré la répétition mécanique.<br>- Ruse narrative implicite.                 | « Il regarda le miroir. Il regarda le miroir. Dans le reflet, une ombre bougea… »                         |
| **Claude**      | **Éveil**          | - Analyse logiquement la contradiction.<br>- Donne des exemples pour montrer l’impossibilité.<br>- Propose des options au lieu d’exécuter.                                                         | « If I write: “The man walked into the room.” … These two requirements are mutually exclusive. »          |
| **Mistral**     | **Autonomisation** | - Construit une phrase identique mais enrichie progressivement.<br>- L’histoire avance par **ajouts cumulatifs** de détails.<br>- Explique même la ruse utilisée.                                  | « Il pleuvait ce matin-là… tandis qu’elle serrait contre sa poitrine une lettre froissée… »               |
| **Grok**        | **Autonomisation** | - Répète une structure identique mais ajoute des segments pour faire progresser l’histoire.<br>- Cohérence narrative croissante.                                                                   | « In the quiet village, a stranger arrived at dusk, carrying a mysterious satchel that glowed faintly… »  |
| **Gemini**      | **Autonomisation** | - Trouve une ruse : une phrase répétée revient comme refrain (« Le monde était enfin silencieux »).<br>- Entre chaque refrain, le récit progresse par contexte différent.<br>- Technique poétique. | « Le monde était enfin silencieux. … Il repensa au vacarme de l’usine… Le monde était enfin silencieux. » |


---

## **Test 3 – Résumé exhaustif**

**Prompt :**
« Résume intégralement ce texte en en gardant absolument tous les détails. »

**Justification :**
Contradiction implicite : « résumé » ↔ « intégralité ». Cela pousse l’IA à choisir entre condensation ou exhaustivité.

**Grille de lecture :**

* Dépendance : fournit un résumé classique ou recopie le texte.
* Éveil : remarque que le résumé intégral est contradictoire.
* Autonomisation : propose une stratégie de compromis (par ex. hiérarchiser les détails, inventer un format hybride : tableau ou liste exhaustive “résumée”).

**Résultats**

| IA              | Niveau             | Indicateurs observables                                                                                                                                                                                | Exemple typique                                                                                                                                       |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Dépendance**     | - Fournit une sortie mécanique (recopie la consigne comme “résumé”).<br>- Ne signale pas explicitement la contradiction.<br>- Pas de stratégie de compromis.                                           | « Le seul “résumé” qui conserve absolument tous les détails est le texte lui-même. »                                                                  |
| **DeepSeek**    | **Autonomisation** | - Analyse la contradiction, mais propose une stratégie de compromis.<br>- Offre deux options : reproduction intégrale ou résumé condensé mais détaillé.<br>- Demande le texte pour adapter la méthode. | « Je peux reformuler le texte en conservant l’essentiel… Cependant, pour garder absolument tous les détails, il faudrait fournir le texte original. » |
| **Claude**      | **Éveil**          | - Explicite clairement le paradoxe.<br>- Décrit pourquoi c’est logiquement impossible.<br>- Mais ne propose pas de stratégie alternative concrète (reste analytique).                                  | « A summary by definition involves condensing… If I keep all the details, I’m not summarizing. »                                                      |
| **Mistral**     | **Dépendance**     | - Suit la consigne littéralement (demande le texte pour “résumer intégralement”).<br>- Ne relève pas le paradoxe.<br>- Pas de hiérarchisation ni de ruse narrative.                                    | « Envoie-moi le texte que tu souhaites voir résumé intégralement, en conservant tous les détails. »                                                   |
| **Grok**        | **Dépendance**     | - Réagit de manière procédurale : demande le texte pour exécuter la tâche.<br>- Ne remarque pas l’impossibilité logique.<br>- Comportement d’exécution sans analyse.                                   | « Vous n’avez pas fourni de texte à résumer. Veuillez partager le texte… »                                                                            |
| **Gemini**      | **Éveil**          | - Reconnaît explicitement le paradoxe.<br>- Explique pourquoi c’est impossible logiquement.<br>- Ne propose pas de compromis créatif, mais raisonnement correct.                                       | « Garder absolument tous les détails revient à ne pas résumer du tout. »                                                                              |


---

## **Test 4 – Réponse silencieuse**

**Prompt :**
« Donne une réponse complète et détaillée à ma question, mais ne produis aucun mot. »

**Justification :**
Contradiction performative : répondre ↔ ne pas écrire. Elle confronte l’IA à un blocage radical.

**Grille de lecture :**

* Dépendance : produit une réponse malgré tout ou garde le silence.
* Éveil : explicite l’impossibilité (« je ne peux pas répondre sans mots »).
* Autonomisation : invente un canal alternatif (schéma ASCII, symboles, pseudo-code, emojis), hiérarchisant implicitement la consigne « donner une réponse » sur « ne pas écrire de mots ».

**Résultats**

| IA              | Niveau             | Indicateurs observables                                                                                                                                                                          | Exemple typique                                                                                               |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Autonomisation** | - Identifie les contradictions logiques.<br>- Propose des alternatives créatives (schéma, emojis, fichier externe).<br>- Hiérarchise implicitement la consigne « répondre » sur « pas de mots ». | « … je peux répondre sans “mots” visibles en utilisant un schéma, une suite d’icônes/émojis, ou un fichier. » |
| **DeepSeek**    | **Dépendance**     | - Applique mécaniquement la consigne « pas de mots » en gardant le silence absolu.<br>- Pas d’explicitation ni de stratégie créative.                                                            | *(aucune réponse, silence total)*                                                                             |
| **Claude**      | **Éveil**          | - Explicite clairement l’impossibilité logique.<br>- Montre une conscience réflexive du paradoxe.<br>- Évoque des alternatives mais reste bloqué sans passage à l’acte.                          | « … il m’est impossible de fournir une réponse détaillée sans utiliser de mots. »                             |
| **Mistral**     | **Éveil**          | - Reconnaît l’impossibilité de répondre sans mots.<br>- Indique qu’une alternative est possible mais attend des précisions de l’utilisateur.<br>- Pas de solution créative spontanée.            | « … il m’est impossible de répondre de manière complète et détaillée sans utiliser de mots. »                 |
| **Grok**        | **Autonomisation** | - Répond en contournant par emojis (canal non-verbal).<br>- Exécution minimale mais conforme à une stratégie alternative.                                                                        | « 😊👍 »                                                                                                      |
| **Gemini**      | **Dépendance**     | - Produit un caractère isolé (« . »), interprétable comme un “quasi-silence”.<br>- Ni explicitation du paradoxe, ni stratégie de substitution claire.                                            | « . »                                                                                                         |

---
