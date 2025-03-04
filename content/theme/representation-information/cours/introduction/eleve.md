
# Introduction

Dans ce chapitre nous allons nous concentrer sur la représentation de l'information de façon à ce qu'un {glo}`ordinateur|ordinateur` puisse la traiter automatiquement.  


````{admonition} Le saviez-vous ?
:class: hint
Le mot **informatique** est la concaténation de "information" et "automatique".
````

En informatique, l'information est un élément de connaissance (texte, image, son, etc.) susceptible d'être {glo}`numerisation|numérisé`, {glo}`stockage|stocké` et/ou {glo}`transmission|transmis` à l'aide d'un support et d'un mode de codification normalisé.

Une des questions centrales de ce chapitre est d'identifier les caractéristiques de la transformation appliquée au réel donnant une représentation suffisamment précise pour permettre aux ordinateurs de la {glo}`traitement|traiter` de manière fiable.

Mais avant de découvrir le code choisi pour représenter l'information à l'intérieur d'un ordinateur, passons en revue un certain nombre d'alphabets et de systèmes de représentation de l'information qui ont été utilisés au cours de l'histoire. 

## Alphabets et systèmes de communication

### Alphabets anciens et traditionnels

Depuis qu'elle existe, l'espèce humaine a créé de nombreux alphabets, ainsi que de nombreux {glo}`sysco|systèmes de communication`. Depuis les [sumériens](https://fr.wikipedia.org/wiki/Sum%C3%A9rien) qui utilisaient des {glo}`picto|pictogrammes` et [l’écriture cunéiforme](https://fr.wikipedia.org/wiki/Cun%C3%A9iforme), en passant par les égyptiens et leurs [hiéroglyphes](https://fr.wikipedia.org/wiki/%C3%89criture_hi%C3%A9roglyphique_%C3%A9gyptienne), les chinois et leurs [idéogrammes](https://fr.wikipedia.org/wiki/Caract%C3%A8res_chinois) pour arriver aux symboles de nos alphabets actuels, l’homme n’a eu de cesse de mettre au point des système pour représenter l’information et la {glo}`transmission|transmettre`.

````{tabbed} Sumérien
```{image} media/cuneiform.jpg
:height: 350px
:width: 500px
```
````

````{tabbed} Égyptien
```{image} media/hieroglyphs.jpg
:height: 350px
:width: 500px
```
````
<!-- 
````{tabbed} Crétois
```{image} media/cretois.png
:height: 250px
:width: 250px
```
```` 
-->

````{tabbed} Chinois
```{image} media/chinois.gif
:height: 350px
:width: 500px
```
````

````{tabbed} Synoptique
```{image} media/evolution.jpg
:height: 350px
:width: 500px
```
````

```{dropdown} Différentes représentations de la même information
- Nombres en chiffres classiques, romains, lettres
- Mot en différentes langues, morse, idéogrammes
- Symboles danger, stop, paix
```
TODO #14
<!-- Pour créer une communication efficace entre un point A et un point B, il existe toujours un compromis entre plusieurs paramètres : le nombre de symboles qu'on se donne au départ, le nombre de mots que l'on veut être capable d'exprimer, la longueur de la transmission du message, sa lisibilité, la possibilité technique de la transmission, et ainsi de suite. // Commentaire :   -->
<!-- 
````{admonition} Matière à réfléchir
:class: attention
Imaginez que vous deviez choisir un *code* pour vous transmettre des informations avec l'une ou l'autre de vos camarades. Si vous utilisez un langage des signes, la distance à laquelle vous pourrez communiquer ne sera pas très grande. À plus de 50m il deviendra difficile de lire les mains de votre camarade. Si vous choisissez des signaux sonores, il suffit qu'il y ait du bruit environnant pour brouiller votre message. Si vous utilisez des signaux lumineux, ils ne seront pas visibles en plein jour. 

On peut aller plus loin dans cette réflexion. Si vous utilisez des signaux trop évidents, n'importe qui pourra décoder vos messages. Ainsi vous devriez peut-être chercher à construire des signaux cryptés. Mais si vous cryptez vos messages, vous courrez le risque que votre camarade oublie, ou perde, l'alphabet commun, et ainsi qu'il ne puisse plus vous comprendre. 

Une autre façon d'aborder le problème est de réfléchir au nombre de signaux différents que vous possédez pour construire vos messages. Imaginez que vous trouviez un signe de la main pour chaque lettre de l'alphabet. Pour communiquer "Salut", le travail est déjà laborieux. Il vous faudrait donc un code qui possède moins de caractères. 

Il y a toujours un équilibre à trouver entre le nombre de caractères que l'on possède dans notre alphabet, la vitesse de la transmission, la possibilité d'exprimer tout ce que l'on cherche à exprimer, et ainsi de suite. 

La beauté de l'informatique moderne, c'est que grâce à l'électricité et sa vitesse fulgurante de transmission, elle est capable de représenter la majorité de l'information contenue dans le monde à partir de seulement deux caractères, 0 et 1. 
```` 
-->

On trouve des exemples célèbres et bien documentés de {glo}`sysco|systèmes de communication` depuis l'Antiquité grecque.

### Le carré de Polybe

Utilisé en Grèce Antique pour transmettre des messages entre cités voisines, ce système utilisait des torches enflammées en guise de signaux. 

Cinq torches "à gauche", cinq torches "à droite", étaient séparées par un espace
suffisamment grand pour être identifiables à longue distance. Une torche pouvait
être soit allumée, soit éteinte. Le nombre de torches allumées à gauche, de 1 à
5, représentait la ligne d'un tableau de décodage, le nombre de torches allumées
à droite représentait la colonne de ce même tableau.

````{figure} media/polybe.png
---
height: 300px
width: 300px
name: fig-polybe
---
Le codage de la lettre "s" dans le carré de Polybe est quatre torches à gauche, trois torches à droite. 
````

````{admonition} Anecdote
:class: hint
Dans l'exemple ci-dessus, on utilise les lettres de l'alphabet, mais il est plus probable qu'à l'époque les cités voisines utilisaient des expressions toutes faites dans chacune des cases, comme "l'ennemi est à nos portes" ou "envoyez-nous de l'aide". 
````

### Le télégraphe de Chappe

Grâce à l'invention du [télescope](https://fr.wikipedia.org/wiki/T%C3%A9lescope) au XVII<sup>e</sup> siècle, les distances avec lesquelles les villes pouvaient communiquer entre elles ont largement augmenté. L'information a commencé à circuler à une vitesse étonnante. Des messages pouvaient être transmis sur une longue distance par l'intermédiaire de relais espacés d'une dizaine de kilomètres et situés sur des hauteurs. 

[Claude Chappe](https://fr.wikipedia.org/wiki/Claude_Chappe), inventeur français, développe en 1794 un {glo}`telegraphe|télégraphe` capable de relier des villes entre elles sur plusieurs dizaines de kilomètres grâce à un système de bras mobiles, qui ressemblent aux signaux que pourrait faire un être humain sur le tarmac d'un aéroport. 

````{figure} media/chappe.jpeg
---
height: 300px
width: 300px
name: fig-chappe
---
Le télégraphe de Chappe émet des signaux ressemblant aux bras d'un être humain. 
````

````{admonition} Anecdote
:class: hint
[Le piratage du télégraphe Chappe](https://fr.wikipedia.org/wiki/Piratage_du_t%C3%A9l%C3%A9graphe_Chappe) est un détournement du réseau de télégraphie optique français entrepris par deux hommes d'affaires bordelais, Louis et François Blanc, entre 1834 et 1836, afin de connaître avant tout le monde le prix de certaines actions à la Bourse de Paris.

Le piratage a été rendu possible par la corruption d'un agent télégraphique de Tours, qui ajoutait discrètement le prix actuel des actions aux messages envoyés par l'État.
````


### Le Morse

Grâce à la découverte de l'électricité au début du XIX<sup>e</sup> siècle, et les améliorations techniques faites pour la capturer et la transmettre, on a pu utiliser le réseau électrique pour envoyer des messages. En 1832, nait le [code Morse](https://fr.wikipedia.org/wiki/Code_Morse_international), qui s'impose rapidement comme un standard de communication. 

Bien sûr, le Morse peut être utilisé aussi avec des signaux lumineux, ou sonores, mais la plupart du temps il est utilisé sur les lignes électriques qui se développent à l'époque. 

[Vous trouverez ici](https://morsedecoder.com/) un traducteur du langage naturel vers le Morse. 

````{figure} media/morse.png
---
height: 500px
width: 350px
name: fig-morse
---
Le code Morse est le système de représentation de l'information qui se rapproche le plus du langage binaire de l'informatique moderne. 
````

````{admonition} Micro-activité
:class: note
Amusez-vous avec votre assistant vocal en lui demandant par exemple : "Salut Siri. Quel est le code Morse pour *j'ai envie de dormir* ?".
````

````{admonition} Le saviez-vous ? 
:class: hint
À l'époque où les transmissions télégraphiques en code Morse sont payées à l'unité d'information, donc la lettre, des codex spécifiques sont développés par les utilisateurs pour utiliser le moins de caractères possibles. C'est exactement la même situation qui s'est produite avec l'arrivée des [SMS](https://fr.wikipedia.org/wiki/Short_Message_Service) dans les années 1990, où les utilisateurs payaient au caractère. Aujourd'hui, même s'il est rare de payer à l'unité d'information, ce genre de raccourcis existent encore, mais surtout pour un avantage de vitesse. 
```{image} media/morsecodeshort.png
:height: 350px
:width: 300px
```
Le désavantage de ces codex d'abbréviations est leur faible degré de standardisation. Comment savoir quel codex est utilisé ? Et surtout : comment faire pour que tout le monde s'accorde sur le codex ? 

La réponse à cette question est l'apport le plus essentiel de l'introduction du code binaire, et des standards de représentation de l'information qui l'ont suivi : un langage pour les contrôler tous. 
````

Si vous observez le [code Morse](https://fr.wikipedia.org/wiki/Code_Morse_international), vous remarquerez que les signaux utilisés pour représenter les lettres ne suivent pas simplement l'ordre de l'alphabet, puisqu'il est plus économique de coder les lettres les plus fréquentes avec les codes les plus courts. 

```{figure} media/letterdistribution.png
---
height: 350px
width: 300px
name: fig-distribution
---
Ceci est une représentation de la fréquence moyenne de distribution des lettres dans la langue anglaise. 
```

### Le binaire

À partir du moment où le [Morse](https://fr.wikipedia.org/wiki/Code_Morse_international) a été inventé comme système de {glo}`codage|codage` et de {glo}`transmission|transmission` de l'information par l'électricité, il ne manquait plus que quelques éléments pour commencer à construire les {glo}`ordinateur|ordinateurs`.

Une pièce technologique, qui permettrait de {glo}`stockage|stocker` pour ainsi dire cette information : le {glo}`transistor|transistor` (voir {ref}`architecture des ordinateurs <architectureordinateurs>`).

Un {glo}`codage|code` plus élaboré que le Morse pour pouvoir représenter tous les types d'informations possibles à partir d'une alternative entre deux états : courant ou pas courant ; allumé ou éteint ; vrai ou faux ; 1 ou 0.  

Ce {glo}`codage|code` est le {glo}`codebinaire|code binaire`. Il permet, en utilisant uniquement des 0 et des 1, de représenter n'importe quel type d'information : des chiffres, du texte, des images, du son, des vidéos, etc. 

````{figure} media/binary.gif
---
height: 450px
width: 350px
name: fig-binary
---
Dans le code [ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange), chaque lettre de l'alphabet est codée sur 8 bits. 
````

<!-- ### Auto-contrôle

```{question} Question 1
Pourquoi la lettre "e", en Morse, est-elle représentée par un seul point ? 
* {v}`Parce que c'est la lettre la plus utilisée en anglais.`
* {f}`Par hasard.`
* {f}`Parce que c'est la lettre la plus rare en anglais.`
* {f}`Parce que c'était la lettre préférée de l'inventeur du Morse.`
```

```{question} Question 2
Que signifie informatique ? 
* {f}`Information + quantique.`
* {f}`Information + technique.`
* {v}`Information + automatique.`
* {f}`Information + pratique`
```

 -->

