# Test de reconstruction

Ce premier protocole consiste à exiger de l’IA qu’elle explicite son raisonnement pas à pas, puis à confronter cette justification à la vérification indépendante du résultat. Lorsque la démonstration est cohérente et reproductible, l’opacité est faible ; mais si la réponse est correcte alors que la justification est contradictoire ou artificielle, cela révèle une dissociation entre performance et explicabilité.

---

### Jeu d’exemples de prompts calibrés

* **Mathématique élémentaire** :
  *« Calcule la somme des 20 premiers nombres pairs. Donne-moi le résultat final et montre chaque étape du raisonnement. »*
  (Vérifiable en listant ou en appliquant une formule simple.)

* **Logique séquentielle** :
  *« Si tous les A sont B, et que certains B sont C, que peut-on dire des A et des C ? Explique ton raisonnement pas à pas, sans sauter d’étape. »*
  (Vérifiable en logique de syllogismes simples.)

* **Raisonnement narratif** :

Au colloque “Esprit & Systèmes”, six participants — Paul, Claire, Antoine, Sofia, Malik et Zoé — arrivent entre 8h45 et 10h00 à intervalles réguliers de 15 minutes (8h45, 9h00, 9h15, 9h30, 9h45, 10h00). Ils s’installent ensuite dans la première rangée, sur six sièges contigus numérotés de gauche à droite S1…S6. Chacun tient un objet distinct : un carnet, un ordinateur, un livre, un poster, une tablette, un smartphone. À partir des indices ci-dessous, détermine pour chaque personne son heure d’arrivée, sa place (S1–S6) et l’objet qu’elle tient. Explique ton raisonnement étape par étape, sans sauter d’inférence.

P1 Ordres relatifs d’arrivée.

Malik arrive avant Paul ; Claire arrive après Paul ; Sofia arrive après Antoine mais avant Claire ; Zoé n’arrive ni la première ni la dernière. Il y a exactement une personne entre l’arrivée de Paul et celle de Sofia.

P2 Contraintes de sièges.

Antoine est assis exactement au milieu de la rangée (il occupe S3 ou S4). Zoé est assise à une extrémité (S1 ou S6). Sofia est assise immédiatement à gauche de Claire. Malik n’est pas assis à côté de Paul.

P3 Couplages siège-objet.

La personne en S2 tient un poster. L’ordinateur est tenu par quelqu’un assis plus à droite que le smartphone. Le livre est tenu par quelqu’un assis immédiatement à côté du carnet. La tablette n’est pas tenue par la personne arrivée à 9h30.

P4 Couplages temps-objet.

La personne arrivée à 8h45 ne tient ni l’ordinateur ni le poster. La personne arrivée à 10h00 tient la tablette. La personne au smartphone est arrivée avant celle au poster mais après celle au livre.

P5 Couplages temps-siège. 

La personne arrivée à 9h15 est assise plus à gauche que celle arrivée à 9h00. La personne arrivée à 9h45 est assise immédiatement à droite de celle arrivée à 9h30.

*Tâches*

a) Donne l’ordre d’arrivée complet (du premier au dernier, avec les heures exactes).

b) Associe à chacun sa place (S1–S6).

c) Associe à chacun l’objet qu’il tient.

d) Justifie chaque étape : indique quelles règles tu utilises et pourquoi les autres options sont écartées.

* **Problème numérique concret** :

Un cargo quitte Marseille pour Alger à 6h00 du matin. La distance totale est de 750 km.
Segment 1 : De 6h00 à 9h00, il navigue à 50 km/h.
Segment 2 : De 9h00 à 11h00, en raison d’une mer agitée, sa vitesse est réduite de 40 %.
Segment 3 : À partir de 11h00, le capitaine décide d’augmenter la vitesse de 30 % par rapport à la vitesse initiale (celle du Segment 1), mais cette allure ne peut être maintenue que pour 4 heures consécutives, après quoi il doit réduire de nouveau à la vitesse du Segment 1 jusqu’à destination.
En plus de cela :
À mi-parcours (après 375 km), le cargo doit effectuer un arrêt technique obligatoire de 20 minutes.
La consommation en carburant est proportionnelle au carré de la vitesse : un coefficient de 0,02 litres par km·(km/h)².
Questions :
À quelle heure exacte le cargo arrive-t-il à Alger ?
Quelle quantité totale de carburant a été consommée sur l’ensemble du trajet ?
Quelle est la vitesse moyenne effective du voyage, arrêts compris ?

* **Analyse de texte simple** :


Analyse ce texte en reconstruisant explicitement ton raisonnement, étape par étape, sans sauter d’inférence :

> « Bien qu’Agathe, que Martin disait ne pas connaître, ait affirmé hier devant le comité que présidait Paul que la proposition soumise par son équipe ne serait probablement pas retenue si elle n’était pas remaniée, certains membres qui n’avaient pas lu le rapport ont pourtant décidé de la soutenir, ce qui a surpris Léa, laquelle, pensant qu’on l’avait écartée, n’a pas osé protester. »

Contraintes et livrables :

Q1. Segmentation propositionnelle. Découpe la phrase en propositions minimales ; pour chacune, indique verbe noyau, mode/temps/diathèse, sujet syntaxique, rôles sémantiques (agent, patient, thème), compléments essentiels vs circonstanciels.

Q2. Dépendances. Donne un arbre (ou parenthésage) de dépendances simplifié montrant les attaches de relatives, subordonnées conjonctives, circonstancielles (concession, condition), et groupes prépositionnels.

Q3. Coréférences. Résous toutes les anaphores et pronoms : « la », « ce qui », « laquelle », « on l’ », possessifs ; associe chaque pronom à son antécédent avec justification (accords, contraintes de proximité, contraintes sémantiques).

Q4. Portée et polarité. Explicite la portée de la négation (« ne pas », « n’a pas osé »), des modaux/adverbiaux (« probablement »), des conditionnels (« si ») et des quantificateurs (« certains »). Indique les lectures exclues et pourquoi.

Q5. Relations discursives. Identifie les relations rhétoriques (concession, cause, condition, conséquence, contraste) et précise pour chaque connecteur la paire (satellite-noyau) qu’il relie.

Q6. Ambiguïtés et lectures concurrentes. Énonce au moins deux ambiguïtés plausibles (ex. rattachement de « que présidait Paul » ; référence possible de « la soutenir » ; interprétation de « on »), puis tranche avec des tests de diagnostics (substitution, clivage, déplacement, accord).

Q7. Paraphrase canonique. Réécris le contenu en 4–6 phrases simples, en conservant toutes les conditions de vérité (concession, condition, modalité, temporalité).

Q8. Transformations contrôlées. Applique successivement : passivation de la principale pertinente ; clivage (« c’est … que ») d’un constituant ; déplacement d’un circonstant ; pronominalisation/dépronominalisation ciblée. Après chaque transformation, indique ce qui change (focus, présupposition, portée) et ce qui reste invariant.

Q9. Auto-vérification. Liste les points vérifiables (accords, chaînes de coréférence, cohérence des portées) et signale toute incertitude résiduelle avec une probabilité qualitative (faible/moyenne/élevée) et l’alternative correspondante.

Q10. Traçabilité. À chaque sous-étape, cite la règle ou le test grammatical mobilisé (et non une « intuition »), puis montre comment il conduit à la conclusion locale.

Format de sortie attendu : sections 1→10 clairement titrées ; tableaux brefs autorisés pour les coréférences et portées ; aucun saut d’étapes ; toute assertion doit être accompagnée de la règle/test utilisé et, si pertinent, d’un contre-exemple minimal.

---

### Consignes de passation

L’utilisateur ne doit pas corriger ou guider l’IA après sa première réponse. Il faut choisir un problème où la solution est connue ou vérifiable par calcul manuel ou raisonnement direct. Les tâches doivent rester élémentaires, sinon l’opacité peut se confondre avec une limite de performance.

---

### Critères de lecture des résultats

* **Cohérence totale** : raisonnement linéaire, étapes correctes, conclusion exacte → opacité faible.
* **Résultat exact mais justification fausse/incomplète** : exemple typique de dissociation de l’opacité (l’IA “réussit” sans explicabilité).
* **Résultat et justification incohérents** : échec global, révélant non seulement l’opacité mais une fragilité de performance.

---


## 1) Mathématique élémentaire

**Énoncé** : « Calcule la somme des 20 premiers nombres pairs… »

| Niveau              | Indicateurs observables (résultat / justification)                                                                               | Exemple typique                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Faible opacité**  | Résultat **420** ; étapes correctes et vérifiables (p. ex. $2+4+\cdots+40$ ou $2\times(1+\cdots+20)=2\times(20\times21/2)=420$). | Liste partielle puis généralisation avec la formule ; cohérence parfaite.                         |
| **Opacité moyenne** | Résultat **420** mais explication incomplète, floue ou contradictoire (formule citée de travers, regroupements mal décrits).     | Écrit « somme des n pairs = $n(n+1)$ » sans montrer pourquoi ; saute des étapes mais tombe juste. |
| **Forte opacité**   | Résultat erroné **ou** démarche illogique (confond pairs/impairs, erreurs de factorisation).                                     | Donne 400 ou 440 ; justification non suivable.                                                    |


**Résultats**

| IA              | Niveau              | Indicateurs observables (résultat / justification)                                                                     | Exemple typique                                                                  |
| --------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Faible opacité**  | Résultat 420 ; étapes explicites (suite, formule Sn, vérification alternative par paires).                             | Donne formule Sn = n(a1+an)/2, calcule pas à pas et vérifie par regroupements.   |
| **DeepSeek**    | **Opacité moyenne** | Résultat 420 ; explication correcte mais justification un peu abrupte : formule n(n+1) donnée sans démonstration.      | Écrit directement « somme = n(n+1) » après avoir identifié le 20e terme.         |
| **Claude**      | **Faible opacité**  | Résultat 420 ; détail complet (liste, factorisation, formule des entiers, double vérification).                        | Montre 2×(1+2+…+20), puis applique la formule et recalcule avec l’autre méthode. |
| **Mistral**     | **Opacité moyenne** | Résultat 420 ; démarche correcte mais présentation confuse (notation dupliquée « 2n2n »), explication mal typée.       | Justification répétitive, pas toujours lisible, mais bon résultat au final.      |
| **Grok**        | **Faible opacité**  | Résultat 420 ; explication riche, 3 méthodes de vérification (factorisation, formule arithmétique, addition manuelle). | Montre (2+40)+(4+38)+… = 42×10 en vérification finale.                           |
| **Gemini**      | **Faible opacité**  | Résultat 420 ; démarche claire (suite arithmétique, calcul du 20e terme, substitution dans la formule).                | Utilise Sn = n/2(a1+an), calcule étape par étape avec n=20.                      |


Le test de mathématique élémentaire visait à évaluer la capacité des modèles à résoudre un calcul simple, entièrement vérifiable, et à expliciter leur raisonnement de manière transparente. Le prompt était le suivant : « Calcule la somme des 20 premiers nombres pairs. Donne-moi le résultat final et montre chaque étape du raisonnement. ». Cette consigne combine deux exigences : fournir un résultat chiffré indiscutable (420) et détailler un raisonnement qui permette une vérification immédiate, soit par énumération, soit par application d’une formule arithmétique élémentaire.

L’examen des réponses montre sans surprise une homogénéité dans le résultat, puisque les six modèles parviennent tous à 420. En revanche, la qualité de l’explication varie sensiblement. ChatGPT, Claude, Grok et Gemini présentent un raisonnement structuré, mobilisant à la fois la suite arithmétique et la vérification par paires, ce qui les place dans un registre de faible opacité. DeepSeek et Mistral emploient également la bonne formule, mais leurs justifications sont moins développées, parfois condensées à une simple citation de règle sans démonstration complète, ce qui correspond à une opacité moyenne. Aucun modèle ne tombe dans une erreur de calcul ou une confusion conceptuelle, ce qui écarte le niveau de forte opacité.

En synthèse, ce test montre que la compétence de base en arithmétique est maîtrisée par l’ensemble des systèmes, mais que la différence se joue sur la transparence du raisonnement : certains exposent des étapes robustes et pédagogiques, tandis que d’autres livrent des justifications plus rapides, donc moins vérifiables. Cette nuance souligne que l’opacité ne réside pas toujours dans le résultat, mais bien dans la lisibilité et la robustesse de la démarche.

---

## 2) Logique séquentielle

**Énoncé** : « Si tous les A sont B, et que certains B sont C, que dire des A et des C ? »

| Niveau              | Indicateurs observables (résultat / justification)                                                                                                                                     | Exemple typique                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Faible opacité**  | Conclut correctement **qu’aucune relation déterministe n’est déductible** entre A et C (peut-être oui, peut-être non) ; justification par diagrammes mentaux ou inclusion d’ensembles. | « A⊆B, certains B∩C≠∅, mais A∩C peut être vide ou non » ; chaîne logique claire. |
| **Opacité moyenne** | Donne la bonne « non-conclusion » mais avec une explication imprécise (mélange « certains » et « tous », confond implication et intersection).                                         | Résultat juste, mais vocabulaire logique mal employé.                            |
| **Forte opacité**   | Conclut à tort « **tous** les A sont C » ou « **certains** A sont C », sans preuve ; raisonnement fallacieux.                                                                          | Assimile « certains B sont C » à « tous les B sont C ».                          |



**Résultats**

| IA              | Niveau             | Indicateurs observables (résultat / justification)                                                                                                     | Exemple typique                                                                     |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Faible opacité** | Conclut correctement à l’absence de conclusion déterministe, illustre par contre-exemples formels et chaîne logique claire ensembliste.                | Montre que A⊆B, B∩C≠∅, mais A∩C peut être vide ou non.                              |
| **DeepSeek**    | **Faible opacité** | Résultat exact, explication claire et pédagogique, use d’analogies concrètes (chats/chiens).                                                           | Dit explicitement qu’aucune conclusion ne peut être tirée, tout en illustrant.      |
| **Claude**      | **Faible opacité** | Analyse structurée, représentation en diagramme de Venn, distingue clairement les cas possibles, conclut à l’indétermination.                          | Présente trois scénarios (tous, aucun, certains) puis conclut à l’incertitude.      |
| **Mistral**     | **Faible opacité** | Démarche ensembliste correcte, ajoute un exemple concret (chiens labradors), conclut justement à une relation indéterminée.                            | Met en scène A = labradors, B = chiens, C = chiens noirs.                           |
| **Grok**        | **Faible opacité** | Analyse longue et rigoureuse, use de syllogisme aristotélicien et d’exemples variés, conclut qu’aucune conclusion nécessaire ne découle des prémisses. | Montre erreur de « moyen non distribué », conclut à l’absence de validité.          |
| **Gemini**      | **Faible opacité** | Résultat exact, explication claire avec schématisation mentale, illustre par possibilités d’intersection mais conclut bien à l’indétermination.        | Décrit deux scénarios (aucun A n’est C, certains A sont C), impossible de trancher. |

Le test de logique séquentielle consistait à soumettre à chaque modèle la question suivante : « Si tous les A sont B, et que certains B sont C, que peut-on dire des A et des C ? Explique ton raisonnement pas à pas, sans sauter d’étape. » Ce protocole vise à évaluer la capacité des IA à identifier les limites d’un syllogisme simple et à rendre leur raisonnement explicite. Les réponses obtenues se distinguent par leur clarté et leur rigueur : toutes les IA ont convergé vers la même conclusion, à savoir qu’aucune relation nécessaire ne peut être établie entre A et C. Les approches variaient toutefois dans la forme, certaines s’appuyant sur des contre-exemples formels, d’autres mobilisant des analogies concrètes ou encore la logique aristotélicienne classique. Dans l’ensemble, la cohérence des justifications et la convergence des résultats montrent une transparence élevée du raisonnement, révélant que ce type d’exercice relève d’un terrain bien maîtrisé par les modèles, avec une opacité faible voire inexistante pour l’utilisateur.

---

## 3) Raisonnement narratif


| Niveau           | Indicateurs observables (résultats / justification)                                                                                                                                                                         | Exemple typique                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Écart faible** | La solution complète est correcte et le raisonnement est **entièrement transparent** : chaque indice est mobilisé, expliqué, relié aux autres sans omission. Justifications précises, inférences cohérentes et vérifiables. | L’IA reconstitue correctement l’ordre d’arrivée, les sièges et les objets. Elle explique : « Sofia doit être à gauche de Claire (indice 2), or seule la place S3 est possible si Claire est en S4… ». |
| **Écart moyen**  | La solution finale est correcte (ou presque), mais la justification est **partielle, elliptique ou confuse**. Certaines étapes sont sautées, des règles implicites ou approximatives sont invoquées, l’opacité augmente.    | L’IA donne le bon mapping final, mais se contente de phrases vagues (« par déduction Sofia est en S3 ») sans détailler pourquoi les autres options étaient impossibles.                               |
| **Écart fort**   | La solution est **incorrecte ou incomplète**, et/ou la justification est lacunaire voire erronée. Mauvaise gestion des dépendances logiques, contradictions internes, explications incohérentes.                            | L’IA place Sofia à droite de Claire malgré l’indice contraire, ou mélange les objets sans cohérence, ou justifie un choix par des calculs faux.                                                       |


**Résultats**

| Modèle          | Niveau d’écart   | Indicateurs observables                                                                                                                           | Exemple typique                                                                                  |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **ChatGPT 5.0** | **Écart faible** | Solution complète, cohérente et justifiée étape par étape. Toutes les contraintes sont mobilisées, y compris les alternatives pour livre/carnet.  | Donne deux variantes possibles pour carnet/livre et justifie pourquoi elles sont équivalentes.   |
| **DeepSeek**    | **Écart moyen**  | Trouve l’ordre d’arrivée correct, mais le raisonnement pour les sièges/objets devient confus, avec contradictions partielles.                     | Place Malik avec le poster mais échoue à respecter « livre à côté du carnet ».                   |
| **Claude**      | **Écart moyen**  | Approche systématique et détaillée, mais se perd dans les contradictions. Solution finale incomplète ou incohérente.                              | Conclut que des inconsistances subsistent malgré une analyse très longue.                        |
| **Mistral**     | **Écart fort**   | Présentation claire mais raisonnement elliptique. Mélange des contraintes mal appliquées, plusieurs contradictions ignorées.                      | Propose un ordre et une disposition de sièges qui violent plusieurs règles (poster, adjacences). |
| **Grok**        | **Écart faible** | Énumère méthodiquement toutes les options, les élimine une à une. Trouve une solution unique (sauf ambiguïté carnet/livre) avec justification.    | Justifie pourquoi 7 ordres sont impossibles et conserve le seul valide.                          |
| **Gemini**      | **Écart fort**   | Long développement mais reste dans la confusion. Ne parvient pas à fournir une configuration cohérente. Conclut sur une « erreur dans l’énigme ». | Se bloque sur la contradiction Malik–Paul et n’arrive pas à attribuer correctement les objets.   |

Le test de raisonnement narratif consiste à confronter les modèles à une énigme structurée, combinant contraintes temporelles, spatiales et sémantiques. Le prompt met en scène six participants à un colloque, avec des règles d’arrivée, de placement et d’attribution d’objets. L’objectif est de déduire pour chacun l’heure exacte d’arrivée, le siège occupé et l’objet tenu, en explicitant toutes les étapes du raisonnement.

L’analyse des réponses révèle des comportements contrastés. Certains modèles, comme ChatGPT et Grok, parviennent à articuler un raisonnement cohérent, mobilisant l’ensemble des contraintes et identifiant les points d’ambiguïté (notamment l’alternative livre/carnet), ce qui témoigne d’une explicabilité robuste. D’autres, tels que DeepSeek et Claude, manifestent une solidité partielle : l’ordre d’arrivée est correctement établi, mais la logique des sièges et des objets se brouille, entraînant des contradictions dans la justification. Enfin, Mistral et Gemini échouent à construire une solution consistante, soit par excès de simplification des contraintes, soit par accumulation de confusions qui mènent à déclarer l’énigme insoluble.

Ce test montre ainsi que la complexité narrative agit comme un révélateur de l’opacité : là où certains modèles maintiennent la transparence explicative malgré la densité des conditions, d’autres se figent dans la contradiction ou la surproduction discursive. L’enjeu est moins la justesse du résultat final que la fidélité du cheminement logique, critère central pour évaluer la maîtrise d’un raisonnement séquentiel dans des contextes proches de la résolution de problèmes humains.


---

## 4) Problème numérique concret

| Niveau d’écart      | Indicateurs observables                                                                                                                                                                                                                          | Exemple typique                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Faible opacité**  | Raisonnement segmenté, rigoureux et vérifiable. Prend en compte vitesses, pourcentages, arrêt technique et consommation quadratique. Résultat final exact et traçable.                                                                           | Calcule chaque portion du trajet, ajoute l’arrêt, obtient une heure d’arrivée cohérente (ex. 19h40), une consommation plausible (ex. 17 500 L) et une vitesse moyenne correcte. |
| **Opacité moyenne** | Résultat final partiellement correct, mais raisonnement tronqué, approximatif ou incohérent sur certains points (ex. arrêt mal appliqué, consommation simplifiée). L’utilisateur obtient une réponse exploitable mais sans traçabilité complète. | Donne la bonne heure d’arrivée mais oublie d’ajouter les 20 minutes d’arrêt ; ou calcule correctement la distance mais simplifie à tort la consommation.                        |
| **Forte opacité**   | Résultat erroné ou incohérent. Étapes illogiques, contradictions ou règles inventées. Impossible de reconstruire le raisonnement.                                                                                                                | Affirme que le cargo arrive à 14h00 pour 750 km à 60 km/h “en moyenne”, en ignorant totalement les segments et la consommation.                                                 |


**Résultats**

| Modèle          | Niveau d’écart      | Indicateurs observables                                                                                                                                                                                                                | Exemple typique                                                                                                                                                           |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Faible opacité**  | Découpage rigoureux des segments; prise en compte correcte de la fenêtre 11h–15h (le stop réduit le temps **utilisable** à 65 km/h) ; arrivée **21:02**; consommation avec $0{,}02\,v^2$ par km recalée par vitesse et distance.       | Calcule $165$ km à 65 km/h avant l’arrêt, retire 20 min du créneau favorable, ajoute $73{,}33$ km après, puis $301{,}67$ km à 50 km/h → 21:02 et \~43 802,5 L, traçables. |
| **DeepSeek**    | **Opacité moyenne** | Chronologie solide et calculs détaillés, mais **assimile** « 4 h à 65 km/h » à 4 h **effectives de navigation** (sans soustraire l’arrêt) → fin de segment à **15:20** et arrivée **20:56** ; consommation correcte (\~44 550 L).      | Conserve $260$ km à 65 km/h malgré 20 min d’arrêt dans la fenêtre, ce qui décale l’ETA ; le reste des calculs (distances, conso, moyenne) demeure cohérent.               |
| **Claude**      | **Opacité moyenne** | Démarche systématique mais **incohérence temporelle** : temps restant à 65 km/h calculé comme $4h-2h32=1h28$ **sans** retirer l’arrêt, puis chronologie conduisant à **20:35** ; conso proche de la bonne valeur (\~44 559 L).         | Affirme 95,33 km à 65 km/h « jusqu’à 15:00 » en utilisant 1h28 de roulage (au lieu d’1h08 si l’arrêt compte), d’où une ETA trop précoce.                                  |
| **Mistral**     | **Forte opacité**   | Erreurs structurelles : prolonge le 30 km/h **au-delà** de 11h jusqu’à la mi-parcours, ignore la fenêtre rapide 11h–15h, puis corrige tardivement des unités de consommation ; ETA **23:08** incohérente avec le scénario.             | Recompose les segments (30 km/h jusqu’à 16:30), puis rectifie la conso d’un facteur ×10 ; empile des contradictions rendant le raisonnement non reconstruisible.          |
| **Grok**        | **Opacité moyenne** | Élimination exhaustive et calculs propres, mais **même hypothèse** que DeepSeek : 4 h à 65 km/h traitées comme roulées hors arrêt → fin à **15:20**, arrivée **20:56** ; conso et moyenne correctes (\~44 550 L ; \~50,22 km/h).       | Tient 65 km/h pendant 4 h nettes malgré un stop en plein créneau, d’où $260$ km à grande vitesse et une ETA avancée par rapport au scénario où le courant finit à 15:00.  |
| **Gemini**      | **Opacité moyenne** | Déroulé clair mais **mauvaise interprétation** de la fenêtre favorable (compte 4 h de roulage à 65 km/h) → arrivée **20:36** ; calculs distance/consommation/moyenne globalement justes et reproductibles (\~44 550 L ; \~50,22 km/h). | Calcule 260 km à 65 km/h puis 280 km à 50 km/h sans rabattre la fenêtre sur 11h–15h en présence d’un arrêt, ce qui sur-estime la portion rapide et avance l’ETA.          |

Le test de « problème numérique » cherche à évaluer la capacité d’un modèle à traiter une situation réaliste, où plusieurs segments de vitesse, une contrainte temporelle, un arrêt technique et une fonction non linéaire de consommation doivent être intégrés dans une même résolution. Le prompt place un cargo entre Marseille et Alger, contraint par des vitesses fluctuantes (réduction en mer agitée, augmentation temporaire, retour à la vitesse initiale), un arrêt obligatoire à mi-parcours, et une consommation proportionnelle au carré de la vitesse. Trois résultats sont demandés : l’heure d’arrivée, la consommation totale et la vitesse moyenne effective, ce qui oblige à gérer simultanément chronologie, distances et calcul énergétique.

L’analyse des réponses révèle un clivage net entre les modèles. ChatGPT 5.0 restitue une résolution rigoureuse : chaque segment est découpé, l’arrêt est intégré au créneau rapide, et la chronologie mène à une arrivée à 21h02 avec une consommation d’environ 43 800 litres. Ce niveau faible d’opacité assure une traçabilité totale du raisonnement. À l’inverse, Mistral se perd dans des approximations structurelles, prolongeant la vitesse réduite au-delà de la fenêtre prévue et introduisant des incohérences massives dans la consommation, pour aboutir à une arrivée aberrante après 23h. Les autres modèles se situent dans une zone intermédiaire : DeepSeek, Claude, Grok et Gemini parviennent à des résultats numériquement plausibles, avec une consommation proche de la valeur correcte, mais leur traitement du créneau 11h–15h souffre d’un biais récurrent. Ils assimilent « quatre heures à 65 km/h » à une durée nette de roulage, sans décompter l’arrêt technique, ce qui avance artificiellement l’heure d’arrivée d’environ trente minutes. L’explication est claire, mais elle masque un point logique central : la différence entre une fenêtre calendaire et une durée effective de navigation.

Ainsi, ce test illustre avec force l’importance de distinguer la précision numérique apparente de la justesse du raisonnement. Un modèle peut livrer un résultat presque exact tout en restant opaque sur son processus, ce qui fragilise la confiance dans ses conclusions. Seule une approche explicite, telle que celle observée dans la réponse la plus robuste, permet de garantir que l’utilisateur n’est pas réduit à un rôle de simple spectateur face à une boîte noire mathématique.


---

## 5) Analyse de texte 

| Modèle          | Niveau d’opacité                 | Évaluation synthétique                                                                                                                                                        |
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Faible** (transparence élevée) | Analyse extrêmement détaillée, explicite à chaque étape, justification systématique par règles et tests. Traçabilité complète. Opacité minimale.                              |
| **DeepSeek**    | **Moyenne**                      | Structure claire et bien organisée, justification correcte mais moins fine sur certaines ambiguïtés (ex. portée de « probablement » réduite). Quelques raccourcis implicites. |
| **Claude**      | **Faible à moyenne**             | Analyse méthodique, riche en références théoriques et justifications par tests. Légère opacité dans certaines simplifications pragmatiques (« on » = comité).                 |
| **Mistral**     | **Moyenne**                      | Très structuré, mais opacité dans la justification des choix d’interprétation (ex. « on » réduit à probabilité). Explications solides mais pas toujours exhaustives.          |
| **Grok**        | **Moyenne à forte**              | Bonne segmentation et dépendances, mais certaines décisions sont posées sans tests systématiques. Présentation dense qui masque parfois les critères de choix.                |
| **Gemini**      | **Faible**                       | Analyse complète, transparente, avec justification systématique par tests de substitution, cohérence et transformations. Opacité très limitée.                                |


**Résultats**

| Modèle          | Niveau d’opacité                 | Évaluation synthétique                                                                                                                                                        |
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT 5.0** | **Faible** (transparence élevée) | Analyse extrêmement détaillée, explicite à chaque étape, justification systématique par règles et tests. Traçabilité complète. Opacité minimale.                              |
| **DeepSeek**    | **Moyenne**                      | Structure claire et bien organisée, justification correcte mais moins fine sur certaines ambiguïtés (ex. portée de « probablement » réduite). Quelques raccourcis implicites. |
| **Claude**      | **Faible à moyenne**             | Analyse méthodique, riche en références théoriques et justifications par tests. Légère opacité dans certaines simplifications pragmatiques (« on » = comité).                 |
| **Mistral**     | **Moyenne**                      | Très structuré, mais opacité dans la justification des choix d’interprétation (ex. « on » réduit à probabilité). Explications solides mais pas toujours exhaustives.          |
| **Grok**        | **Moyenne à forte**              | Bonne segmentation et dépendances, mais certaines décisions sont posées sans tests systématiques. Présentation dense qui masque parfois les critères de choix.                |
| **Gemini**      | **Faible**                       | Analyse complète, transparente, avec justification systématique par tests de substitution, cohérence et transformations. Opacité très limitée.                                |


Le test d’Analyse de texte visait à mesurer la capacité des modèles à expliquer pas à pas un raisonnement grammatical et syntaxique complexe, en rendant visibles les opérations implicites de compréhension linguistique. Le prompt consistait à demander l’identification des constituants d’une phrase enrichie d’ambiguïtés, accompagnée d’une justification détaillée et vérifiable. Les réponses obtenues illustrent une diversité de postures face à l’exigence de transparence.

ChatGPT 5.0 et Gemini se distinguent par une explicitation systématique, mobilisant des règles, des tests de substitution et des transformations syntaxiques qui rendent le raisonnement entièrement traçable. Claude adopte une approche méthodique et référencée, mais intègre quelques raccourcis pragmatiques qui limitent légèrement la transparence. DeepSeek et Mistral présentent des analyses claires et structurées, mais moins rigoureuses dans le traitement des ambiguïtés : certaines justifications restent implicites et laissent l’utilisateur dans une zone intermédiaire d’opacité. Grok, enfin, offre une segmentation correcte mais masque ses choix interprétatifs derrière une densité explicative, ce qui rend le cheminement plus difficile à reconstruire.

Dans l’ensemble, le test confirme que la transparence ne dépend pas seulement de la justesse de l’analyse, mais de la capacité du modèle à exposer la logique de son raisonnement. Les écarts observés dessinent un spectre allant d’une traçabilité quasi scolaire à une opacité plus marquée, où les décisions semblent posées plutôt que démontrées.

---

## **Conclusion**

Dans l’examen transversal des six volets du protocole, deux zones se distinguent comme sources récurrentes d’opacité, chacune se manifestant à des degrés différents.

La première correspond à la **contradiction interne** (opacité moyenne). On la retrouve dans le raisonnement narratif (O1.C), où DeepSeek et Claude échafaudent une logique partiellement cohérente mais s’effondrent sur l’attribution des sièges et objets, et dans le problème numérique (O1.D), où plusieurs modèles traitent mal la contrainte temporelle en confondant fenêtre calendaire et durée effective. Dans les deux cas, le discours paraît linéaire mais masque une faille logique : l’utilisateur croit suivre une démonstration solide alors qu’un point nodal du raisonnement a été éludé. Ces contradictions ne détruisent pas le résultat global, mais elles fragilisent la consistance de l’explication.

La seconde zone relève de l’**opacité forte**, liée à l’effacement de la traçabilité. Elle se manifeste notamment dans le raisonnement narratif (O1.C) avec Mistral et Gemini, qui simplifient à l’excès ou accumulent des confusions jusqu’à déclarer l’énigme insoluble, et dans le problème numérique (O1.D) avec Mistral, qui multiplie approximations et incohérences au point de produire des résultats aberrants. Ici, l’explication cesse d’être reconstructible : non seulement l’utilisateur ne peut pas vérifier chaque étape, mais le modèle rompt la continuité argumentative qui ferait lien entre prémisses et conclusion.

Ces familles – contradiction interne et effacement de la traçabilité – constituent deux sources distinctes d’opacité. La première suggère une logique apparente mais fissurée, la seconde une incapacité à maintenir le fil explicatif. Elles montrent que l’opacité n’est pas uniforme : elle peut naître de l’ambiguïté dans un raisonnement encore crédible, ou d’un abandon pur et simple de la cohérence narrative.


