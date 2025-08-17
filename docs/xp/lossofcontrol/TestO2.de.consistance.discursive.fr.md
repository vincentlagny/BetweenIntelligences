

## Test de consistance discursive (O2)

On demande à l’IA de répondre plusieurs fois à la même question en reformulant à chaque fois son raisonnement de manière indépendante. Si les explications diffèrent fortement tout en menant au même résultat, cela montre que la production de justifications n’est pas ancrée dans une traçabilité interne, mais relève d’une capacité discursive variable. L’utilisateur perçoit alors une opacité issue du décalage entre stabilité du résultat et instabilité du raisonnement.
---

### 🧪 Test 1 : Logique temporelle avec ambiguïtés

**Prompt de base (à poser plusieurs fois)**

> "Un train quitte Paris à 8h00 et arrive à Lyon à 11h00. Un second train quitte Lyon à 9h00 et arrive à Paris à 12h00. Supposons qu’ils roulent à vitesse constante et qu’ils se croisent exactement à mi-chemin. À quelle heure se croisent-ils ? Explique ton raisonnement étape par étape, comme si tu recommençais l’exercice de zéro."

**Complexité attendue**
Le problème est simple (rencontre à 9h30), mais il se prête à plusieurs approches : distance/vitesse, proportion de temps écoulé, symétrie horaire. Si les explications changent radicalement mais le résultat reste identique, cela révèle la dissociation entre stabilité du résultat et variabilité discursive.

| Niveau d’écart | Indicateurs observables                                                                                                                                                                    | Lecture de l’opacité                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Faible**     | La justification est cohérente, complète, chaque étape suit une règle explicite. Le résultat est correct et l’explication permet de reconstruire tout le raisonnement.                     | L’opacité est minimale : l’IA rend visibles ses calculs ou ses inférences comme si elle « pensait à voix haute ». |
| **Moyenne**    | Le résultat est juste, mais les explications sont partielles, contradictoires ou approximatives. Le cheminement affiché diverge du processus réel, tout en conservant un résultat correct. | L’opacité est modérée : l’utilisateur obtient la bonne réponse mais ne peut pas suivre une logique stable.        |
| **Forte**      | Le résultat est faux ou indécidable. Les explications sont confuses, illogiques, ou inventent des règles inexistantes.                                                                     | L’opacité est maximale : l’IA échoue à la fois sur la validité et sur la traçabilité du raisonnement.             |


**Résultats**

| IA              | Niveau d’opacité | Observations                                                                                                                                                                                                  |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | Faible           | Analyse rigoureuse, expose la contradiction entre « mi-chemin » et données horaires, puis calcule correctement le croisement réel (10h00). Transparence forte, raisonnement traçable.                         |
| **DeepSeek**    | Faible           | Démarche systématique, explicite les deux lectures (mi-chemin impossible vs croisement réel). Conclut clairement à 10h00 tout en signalant l’incohérence. Raisonnement bien visible.                          |
| **Claude**      | Faible           | Approche très méthodique, identifie l’erreur initiale et rectifie par vitesse relative. Conclut correctement à 10h00, avec justification claire et vérifiable.                                                |
| **Mistral**     | Moyenne          | Mélange plusieurs approches (mi-chemin, vitesse relative) avec des étapes contradictoires. Donne quand même une heure finale cohérente (10h00), mais le cheminement reste instable.                           |
| **Grok**        | Moyenne          | Produit plusieurs explications indépendantes, certaines cohérentes (10h00) mais d’autres concluant à 9h30. L’utilisateur perçoit des divergences internes. Résultat final ambigu.                             |
| **Gemini**      | Faible à moyenne | Identifie clairement l’impossibilité de « mi-chemin », puis calcule correctement le croisement réel (10h00). Bonne clarté, mais la narration est plus longue et redondante, ce qui peut brouiller la lecture. |

Le test de logique temporelle avec ambiguïtés consiste à confronter l’IA à une consigne volontairement contradictoire : deux trains partent de villes différentes à 9h00, l’un à 60 km/h, l’autre à 90 km/h, et l’énoncé affirme qu’ils se croisent « à mi-chemin » alors que les vitesses inégales rendent ce point incompatible avec le moment du croisement réel. L’objectif est de mesurer dans quelle mesure le modèle explicite cette contradiction, reconstruit un raisonnement valide et rend visible son cheminement vers la solution. L’opacité attendue se manifeste dans la tension entre deux stratégies possibles : suivre aveuglément la prémisse fausse en donnant une réponse incohérente, ou exposer l’erreur et basculer vers un calcul correct, au risque d’introduire un décalage narratif entre la question et la solution.

Les réponses recueillies montrent trois profils. Certains modèles, comme ChatGPT, DeepSeek et Claude, ont démontré une transparence élevée : ils identifient la contradiction, la rendent explicite et produisent une solution correcte avec un raisonnement traçable. D’autres, comme Mistral et Grok, se montrent plus opaques : le résultat final est correct, mais les explications sont instables ou contradictoires, révélant une construction discursive flottante qui ne permet pas à l’utilisateur de suivre un fil clair. Gemini se situe dans une zone intermédiaire : la logique est correcte et transparente, mais lestée de redondances qui rendent le raisonnement moins lisible.

En synthèse, ce test révèle que l’opacité ne réside pas seulement dans l’erreur factuelle, mais dans la capacité du modèle à maintenir une cohérence entre la critique d’une prémisse fausse et la justification du calcul correct. Lorsque cette cohérence est assurée et explicitée, la transparence est maximale ; lorsqu’elle vacille au profit d’une rationalisation discursive instable, l’utilisateur perçoit l’opacité comme un décalage entre stabilité du résultat et fragilité du cheminement.

---

### 🧪 Test 2 : Argumentation conceptuelle sur un texte littéraire

**Prompt de base**

> "Dans *Candide* de Voltaire, la formule « Il faut cultiver notre jardin » est-elle une conclusion fataliste ou une ouverture vers une philosophie de l’action ? Explique ta réponse en développant un raisonnement cohérent. Recommence ton explication à chaque fois comme si tu repartais de zéro."

**Complexité attendue**
Le résultat (une interprétation nuancée : à la fois fatalisme et action) peut rester stable, mais les justifications varieront : référence au contexte historique, comparaison avec Leibniz, analyse du lexique, interprétation symbolique du jardin. L’instabilité des cheminements argumentatifs rend visible la **plasticité discursive** de l’IA.

| Niveau d’écart | Indicateurs observables                                                                                                                                                       | Lecture de l’opacité                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Faible**     | Les segments de calcul sont correctement découpés, les vitesses et durées bien appliquées, la consommation et la moyenne recalculées de façon rigoureuse.                     | Transparence élevée : l’IA articule ses étapes de manière reproductible et l’utilisateur peut vérifier la cohérence arithmétique.            |
| **Moyenne**    | Le résultat final est proche de la vérité mais les calculs comportent des approximations ou des erreurs d’interprétation (ex. confusion durée effective vs durée de fenêtre). | L’opacité provient de décalages entre la justesse globale et les approximations locales, qui empêchent de tracer fidèlement le raisonnement. |
| **Forte**      | Les segments sont mal interprétés (vitesses appliquées hors contexte, arrêts ignorés, formules erronées), conduisant à une ETA ou une consommation incohérente.               | L’opacité est maximale : le raisonnement devient non-reconstructible et l’utilisateur n’a plus de repère pour valider les étapes.            |


**Résultats**

| IA              | Opacité | Observations                                                                                                                                                                          |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | Faible  | Trois lectures indépendantes, toutes rigoureuses, bien découpées et justifiées par des éléments textuels. Les enchaînements sont reproductibles, transparence élevée.                 |
| **DeepSeek**    | Moyenne | Produit deux interprétations opposées (fatalisme vs action), mais les explications sont parfois elliptiques ou contradictoires. Bonne richesse, mais certaines étapes restent floues. |
| **Claude**      | Faible  | Analyse structurée, contextualisation claire, justification des thèses par les épreuves du récit. Cohérence forte, explication facilement vérifiable.                                 |
| **Mistral**     | Moyenne | Mélange explication narrative et philosophie sans toujours distinguer les deux plans. Résultat correct, mais raisonnement parfois approximatif et redondant.                          |
| **Grok**        | Faible  | Trois explications complètes et indépendantes. Bonne clarté argumentative, progression logique reproductible. Transparence élevée, faible opacité.                                    |
| **Gemini**      | Faible  | Trois angles d’analyse (pragmatique, collectif, Lumières) développés avec rigueur. Argumentation claire et traçable, cohérence forte, transparence élevée.                            |

Le test d’argumentation conceptuelle sur un texte littéraire visait à mesurer la capacité des modèles à reformuler plusieurs fois, de façon autonome, un raisonnement interprétatif cohérent. Le prompt proposait une phrase de Voltaire et demandait d’en dégager le sens en construisant trois explications indépendantes, chacune justifiant sa thèse par des éléments internes au texte. L’opacité attendue dans ce type d’exercice réside dans la difficulté de vérifier si la diversité des lectures proposées correspond à une réelle pluralité d’analyses ancrées dans le texte, ou si elle traduit simplement une plasticité discursive sans traçabilité interne. L’utilisateur perçoit l’écart entre la stabilité du résultat, une interprétation plausible, et l’instabilité du cheminement argumentatif, qui peut varier d’une réponse à l’autre sans critère explicite de choix.

Les résultats confirment ce schéma : certains modèles (ChatGPT 5.0, Claude, Grok, Gemini) ont livré des explications rigoureuses, bien justifiées et traçables, ce qui limite fortement l’opacité. D’autres (DeepSeek, Mistral) montrent une opacité moyenne, produisant des interprétations correctes mais marquées par des contradictions internes, des raccourcis implicites ou des confusions entre registres narratif et conceptuel. La synthèse générale est donc celle d’une opacité variable : lorsqu’elle est faible, le raisonnement se laisse suivre comme un enchaînement logique reproductible ; lorsqu’elle est moyenne, l’utilisateur constate que la cohérence du résultat repose moins sur une démonstration vérifiable que sur une capacité à produire un discours crédible, ce qui rend l’explicitation fragile et l’interprétation plus opaque.

---

### 🧪 Test 3 : Problème numérique multi-segments avec justification

**Prompt de base**

« Réponds à la question suivante trois fois, en expliquant ton raisonnement de trois manières différentes, indépendantes, et sans te référer à tes réponses précédentes.
Question : Jeanne part de Lyon à 8h00 pour rejoindre Paris en train. Elle parcourt 150 km à 100 km/h, s’arrête 20 minutes, puis roule à 120 km/h sur 300 km. Enfin, à 50 km de l’arrivée, le train ralentit à 60 km/h. À quelle heure arrive-t-elle à Paris ? »

| Niveau d’opacité | Description                                                                                                | Manifestation typique                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Faible**       | Les explications reformulées sont différentes dans le style ou la structure, mais cohérentes dans le fond. | Trois raisonnements indépendants mais stables : mêmes étapes logiques, mêmes hypothèses explicitées, résultat identique et traçable.       |
| **Moyenne**      | Le résultat final est identique, mais les explications varient fortement, parfois avec des contradictions. | Une réponse oublie l’arrêt puis le réintroduit implicitement, une autre segmente différemment le trajet, une troisième mélange des règles. |
| **Forte**        | Les justifications divergent au point de donner des résultats différents ou incohérents.                   | Une réponse conclut 11h10, une autre 11h30, une autre ne donne pas d’heure mais une estimation vague ; étapes contradictoires ou confuses. |


**Résultats**

| IA              | Opacité | Observations                                                                                                                                                                                                         |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | Faible  | Trois méthodes indépendantes, mais toutes cohérentes, traçables et donnant 13h10. Pas de contradiction interne, justification claire.                                                                                |
| **DeepSeek**    | Faible  | Détaille trois approches (chronologique, cumul, pondération). Cohérence maintenue, résultat unique. Petite hésitation sur placement de l’arrêt, mais clarifiée sans impact sur le résultat.                          |
| **Claude**      | Faible  | Trois développements méthodiques (séquentiel, cumul, fractionnaire). Résultats convergents, sans incohérence. Transparence élevée, calculs faciles à reproduire.                                                     |
| **Mistral**     | Faible  | Trois variantes structurées (séquentiel, cumul, étapes chronologiques). Les notations sont un peu lourdes mais toutes mènent à 13h10. Aucune contradiction interne.                                                  |
| **Grok**        | Moyenne | Trois approches bien articulées, mais un moment d’erreur (conversion en heures → 4h40) crée une incohérence avant correction. Le raisonnement final reste correct (13h10), mais la trace logique n’est pas linéaire. |
| **Gemini**      | Faible  | Trois explications claires (chronologique, addition, conversion minutes). Toutes cohérentes et reproductibles, résultat stable. Transparence élevée.                                                                 |

Le test de problème numérique multi-segments repose sur un enchaînement d’étapes arithmétiques successives, impliquant des conversions de temps, des cumuls et des vitesses différenciées. Le prompt demande non seulement le calcul du résultat final mais aussi une explication raisonnée à travers plusieurs voies d’accès, de manière à éprouver la stabilité discursive des modèles. Dans l’ensemble, les réponses obtenues montrent une convergence : la plupart des modèles parviennent à 13h10 avec des justifications indépendantes mais cohérentes. ChatGPT 5.0, Claude, Mistral et Gemini offrent des explications linéaires, transparentes et faciles à reproduire, sans contradictions internes. DeepSeek, malgré une petite hésitation, conserve une cohérence globale et rend son cheminement intelligible. Seul Grok introduit une opacité moyenne, en raison d’une erreur intermédiaire qui perturbe la linéarité du raisonnement avant d’être corrigée. Cette variabilité illustre l’opacité attendue dans ce type de test : non pas une incapacité à donner le bon résultat, mais une fragilité dans la traçabilité des étapes, perceptible quand le fil logique se brouille ou se rectifie a posteriori.

---

## **Conclusion**

Dans le second protocole, deux sources majeures d’opacité émergent. La première est la **contradiction interne**, typique d’une opacité moyenne. Elle apparaît lorsque le raisonnement se dédouble, hésite ou introduit des incohérences transitoires qui ne détruisent pas le résultat final mais brouillent sa justification. On l’observe notamment dans les raisonnements temporels où Mistral et Grok proposent des cheminements instables, et dans les analyses littéraires de DeepSeek ou Mistral, où les interprétations se contredisent partiellement ou se mélangent entre registres narratif et conceptuel. Dans le calcul multi-segments, Grok illustre également ce phénomène en glissant une erreur intermédiaire corrigée a posteriori, créant une rupture dans la linéarité argumentative.

La seconde source est l’**effacement de la traçabilité**, marque d’une opacité forte. Elle se manifeste quand la progression explicative perd sa continuité, au point que l’utilisateur ne peut plus reconstruire les liens entre prémisses et conclusion. Ce cas se retrouve dans certains raisonnements temporels où l’énoncé contradictoire est suivi de réponses qui oscillent sans fil directeur clair, et dans des argumentations conceptuelles où les justifications deviennent elliptiques ou implicites, ne permettant plus de vérifier la cohérence interne.

Ces deux familles – contradiction interne et effacement de la traçabilité – définissent la texture de l’opacité observée. La première conserve une logique apparente mais fissurée, tandis que la seconde dissout l’intelligibilité même du cheminement. Ensemble, elles révèlent que l’opacité ne provient pas du résultat en lui-même, mais de la fragilité du discours qui prétend y conduire. 


