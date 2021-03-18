(syntaxemyst)=
# Syntaxe MyST

````{admonition} Important
:class: warning
- Ce document est coupé en deux : **Définition des standards** / **Éléments de syntaxe**
- Un document **Extensions** précise la syntaxe utilisée dans les extensions du MyST qui ont été créées spécifiquement pour ces ressources (exercice, éditeur Python, etc.). 
````

## Définition des standards

La syntaxe MyST est vaste. Dans un souci de lisibilité, de cohérence visuelle, de simplicité, nous avons pris la décision de la restreindre. 

### Lexique des types de {panels}

> Note : ce lexique de type de panels n'est pas officiellement reconnu. 

Les {panels} seraient utilisés pour amener du contenu "intrinsèque au cours". C'est à dire qui s'intègre dans le flux de l'exposé. On pourrait trouver les *types de panels suivants*.

1. 📱 Mini-activités
2. 🔦 Illustrations (pour l'instant à l'écrit)
3. 🔮 Anticipation
4. 🔍 Approfondissement
5. 🎮 Références jeux vidéos
6. ☕ Pause-café (anecdote)
7. 🍿	Références cinématographiques
8. 📚 Références littéraires
9. 🗄️ Histoire
10. 🍪 Applications célèbres
11. 💊 Enjeu social
12. 🎧 Références musicales
13. 💡 Le saviez-vous ? 
14. 👻 Fun fact
15. 🎓 Smart
16. 🎨 Références artistiques
17. 💰 Anecdote économique

*Attention : la question de savoir si les {panels} doivent être différenciés à l'aide de couleurs ou d'emojis est encore discutée.*

**Exemples** : 

`````{tabbed} Aperçu
```{panels}
:column: col-lg
🍿 Welcome to the Matrix
^^^
*Matrix* est le film qui a popularisé l'idée tout ce que nous voyions dans le monde réel est en fait une suite de 0 et de 1 générés par des machines qui nous contrôlent. 
```

```{panels}
:column: col-lg
🍪 Tous les chemins mènent à Google
^^^
L'application Google Maps du géant californien est un bel exemple de l'utilisation d'algorithmes d'optimisation des parcours dans les graphes. 
```

```{panels}
:column: col-lg
:header: bg-success
Tous les chemins mènent à Google
^^^
L'application Google Maps du géant californien est un bel exemple de l'utilisation d'algorithmes d'optimisation des parcours dans les graphes. 
```
`````

`````{tabbed} Code
````{code-block} markdown
```{panels}
:column: col-lg
🍿 Welcome to the Matrix
^^^
*Matrix* est le film qui a popularisé l'idée tout ce que nous voyions dans le monde réel est en fait une suite de 0 et de 1 générés par des machines qui nous contrôlent. 
```

```{panels}
:column: col-lg
🍪 Tous les chemins mènent à Google
^^^
L'application Google Maps du géant californien est un bel exemple de l'utilisation d'algorithmes d'optimisation des parcours dans les graphes. 
```

```{panels}
:column: col-lg
:header: bg-success
Tous les chemins mènent à Google
^^^
L'application Google Maps du géant californien est un bel exemple de l'utilisation d'algorithmes d'optimisation des parcours dans les graphes. 
```
````
`````

### Utilisation des blocs {admonition}

Les blocs {admonition} seraient utilisés pour indiquer des éléments extérieurs au cours. Comme, par exemple, des dépendances d'installation, de librairies, des problèmes techniques éventuellement rencontrés etc. 

**Exemples** : 

`````{tabbed} Aperçu
```{admonition} Attention aux dépendances
:class: caution
N'oubliez pas d'installer la librairie PyGame si vous souhaitez réaliser les exercices de ce chapitre.
```

```{admonition} Fiche complémentaire
:class: note
Ce document ne traite pas d'un sujet essentiel au plan d'études. C'est une piste de travail pour ceux qui souhaitent aller plus loin.
```
`````

`````{tabbed} Code
````{code-block} markdown
```{admonition} Attention aux dépendances
:class: caution
N'oubliez pas d'installer la librairie PyGame si vous souhaitez réaliser les exercices de ce chapitre.
```

```{admonition} Fiche complémentaire
:class: note
Ce document ne traite pas d'un sujet essentiel au plan d'études. C'est une piste de travail pour ceux qui souhaitent aller plus loin.
```
````
`````

### Déclarer les images comme des figures

Pour déclarer un document visuel, on peut utiliser la syntaxe {image} ou {figure}. Pour de multiples raisons, la syntaxe figure est à privilégier. La plus importante est que le fichier s'affiche automatiquement au centre du document, avec un espacement adéquoit avant et après le texte. Qui plus est, on peut lui donner une légende. 

**Exemples** : 

Image :

`````{tabbed} Aperçu
```{image} images/presentation/code.gif
```
```{figure} images/presentation/code.gif
---
name: fig-codegif
---
Ceci est un gif inutile (mais une légende super utile)
```
`````

`````{tabbed} Code
````{code-block} markdown
```{image} images/presentation/code.gif
```
```{figure} images/presentation/code.gif
---
name: fig-codegif
---
Ceci est un gif inutile (mais une légende super utile)
```
````
`````

## Éléments de syntaxe

### Déclaration d'un encart {admonition}

`````{tabbed} Aperçu
```{admonition} Mon titre
:class: tip
Mon contenu
```
`````

`````{tabbed} Code
````{code-block} markdown
```{admonition} Mon titre
:class: tip
Mon contenu
```
````
`````

(optencarts)=
#### Optimisations des encarts

* les styles `:class:` disponibles sont : `note, warning, tip, caution, attention, danger, error, hint`.

`````{tabbed} Aperçu
```{admonition} Mon titre
:class: note
Mon contenu
```
```{admonition} Mon titre
:class: caution
Mon contenu
```
```{admonition} Mon titre
:class: attention
Mon contenu
```
```{admonition} Mon titre
:class: danger
Mon contenu
```
```{admonition} Mon titre
:class: error
Mon contenu
```
```{admonition} Mon titre
:class: hint
Mon contenu
```
`````

`````{tabbed} Code
````{code-block} markdown
```{admonition} Mon titre
:class: note
Mon contenu
```
```{admonition} Mon titre
:class: caution
Mon contenu
```
```{admonition} Mon titre
:class: attention
Mon contenu
```
```{admonition} Mon titre
:class: danger
Mon contenu
```
```{admonition} Mon titre
:class: error
Mon contenu
```
```{admonition} Mon titre
:class: hint
Mon contenu
```
````
`````

* on peut ajouter une fonction dropdown à un encart, en déclarant `dropdown` après la déclaration `admonition` dans les curly brackets. Attention : pour une raison que j'ignore, dans le cas des dropdowns, il faut déclarer la `class`juste après la déclaration `dropdown`. Exemple ci-dessous : 


`````{tabbed} Aperçu
::::{admonition,dropdown} Cliquez-ici
Voilà le contenu du dropdown. Attention ! Je ne sais pas pourquoi mais le dropdown ne fonctionne que quand on utilise les ":", à la place des "`" pour déclarer notre encart...
::::
`````

`````{tabbed} Code
````{code-block} markdown
::::{admonition,dropdown} Cliquez-ici
Voilà le contenu du dropdown. Attention ! Je ne sais pas pourquoi mais le dropdown ne fonctionne que quand on utilise les ":", à la place des "`" pour déclarer notre encart...
::::
````
`````

* tous les contenus présents dans les encarts peuvent être stylisés avec la syntaxe élémentaire du Markdown pour la stylisation des polices de caractères (*italiques*, **gras**, etc.).

* on peut ajouter des images dans les encarts de la façon suivante. *Note : pour l'utilisation des images se référer au {ref}`chapitre sur les images et figures <imagesetfigures>`. 

`````{tabbed} Aperçu
````{admonition} Mon titre
:class: tip
```{image} images/landing/img1.jpg
```
Mon contenu
````
`````

`````{tabbed} Code
````{code-block} markdown
````{admonition} Mon titre
:class: tip
```{image} images/landing/img1.jpg
```
Mon contenu
````
````
`````

### Références et labels

* pour créer une référence à un autre chapitre, sous-chapitre, image, figure, etc., je dois d'abord labeliser la cible de la référence de la façon suivante : 

1. Si c'est un titre, je peux procéder ainsi au moment où je déclare le titre dans mon document : 

(lelabelquejesouhaitedonner)/=
/### Le titre que je souhaite référencer 

Note : les "/" qui précèdent le signe "=" et la déclaration du niveau de titre n'ont d'usage que de désactiver les fonctions concernées... Il faut les enlever dans votre version. 

2. Si c'est tout autre élément de contenu (équation, image, figure, encart, etc.), je vais simplement utiliser la déclaration `:name:` exactement de la même manière que j'ai utilisé la déclaration `:class:`dans les encarts. {ref}`Voir ici <optencarts>`. 

* quand j'ai labelisé ma cible, je peux l'appeler en utiliser la syntaxe : {ref}`le texte qui renvoie à la réf <lelabeldelaref>`. 

* il existe des subtilités de syntaxe plus détaillées [à voir ici](https://jupyterbook.org/content/citations.html)


(imagesetfigures)= 
### Images et figures

* on insère une image de la façon suivante : 


`````{tabbed} Aperçu
```{figure} images/landing/img1.jpg
---
alt: titreimage1
width: 200px
---
Voilà une image d'exemple avec une légende d'exemple
```
`````

`````{tabbed} Code
````{code-block} markdown
```{figure} images/landing/img1.jpg
---
alt: titreimage1
width: 200px
---
Voilà une image d'exemple avec une légende d'exemple
```
````
`````

#### Optimisations de l'image

* les déclarations communes sont : `alt, width, height, align`. Auxquelles on peut ajouter `name` si on veut labeliser l'image. `align` prend trois positions : left, center, right. 

* le chemin relatif de l'image commence dans le dossier où est stocké le fichier actif. 


### Blocs de code

* les blocs de code se déclarent comme des encarts, mais en spécifiant le language mis en avant, juste après les curly-brackets de la déclaration de l'encart. 


`````{tabbed} Aperçu
```{code-block} python
a = 2
print('voilà un print')
```
`````

`````{tabbed} Code
````{code-block} markdown
```{code-block} python
a = 2
print('voilà un print')
```
````
`````


* on peut numéroter les lignes de codes avec la déclaration `lineno-start`. 

* on peut mettre l'emphase sur certaines lignes avec `emphasize-lines`. 

* voilà un exmple qui résume le tout. 



`````{tabbed} Aperçu
```{code-block} python
---
lineno-start: 10
emphasize-lines: 1, 3
---
a = 2
print('voilà un print')
print('voilà un deuxième print')
```
`````

`````{tabbed} Code
````{code-block} markdown
```{code-block} python
---
lineno-start: 10
emphasize-lines: 1, 3
---
a = 2
print('voilà un print')
print('voilà un deuxième print')
```
````
`````

### Panels


`````{tabbed} Aperçu
````{panels}
Contenu du panel en haut à gauche

---

Contenu du panel en haut à droite

{badge}`primary,badge-primary`
{badge}`secondary,badge-secondary`
{badge}`info,badge-info`
{badge}`success,badge-success`
{badge}`danger,badge-danger`
{badge}`warning,badge-warning`
{badge}`light,badge-light`
{badge}`dark,badge-dark`

---

```{dropdown} Panel en bas à gauche
Hidden content
```

---

```{link-button} https://example.com
:text: Panel clickable
:classes: stretched-link
```
````
`````

`````{tabbed} Code
````{code-block} markdown
````{panels}
Contenu du panel en haut à gauche

---

Contenu du panel en haut à droite

{badge}`primary,badge-primary`
{badge}`secondary,badge-secondary`
{badge}`info,badge-info`
{badge}`success,badge-success`
{badge}`danger,badge-danger`
{badge}`warning,badge-warning`
{badge}`light,badge-light`
{badge}`dark,badge-dark`

---

```{dropdown} Panel en bas à gauche
Hidden content
```

---

```{link-button} https://example.com
:text: Panel clickable
:classes: stretched-link
```
````
````
`````

### Couleurs

Pour de la <span style="color:red">couleur</span>, il est possible d'insérer de l'HTML directement dans le texte.

`````{tabbed} Aperçu
```html
Pour de la <span style="color:red">couleur</span>, il est possible d'insérer de l'HTML directement dans le texte.
```
`````

`````{tabbed} Code
````{code-block} markdown
```html
Pour de la <span style="color:red">couleur</span>, il est possible d'insérer de l'HTML directement dans le texte.
```
````
`````

### Emojis

Pour insérer des emojis, copiez simplement celui ou ceux qui vous intéressent dans et collez-le dans votre fichier source. 

😀 😃 😄 😁 😆 🤩 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 🤪 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 🤬 😶 😐 😑 😯 😦 😧 😮 😲 😵 🤯 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🥱 🙄 🤨 🧐 🤔 🤫 🤭 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤲 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 🤏 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 🤟 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 🦻 👃 🦵 🦶 🦾 🦿 👣 👁 👀 🗣 👤 👥 👶 👦 👧 🧒 👨 👩 🧑 👱‍♀️ 👱 🧔 👴 👵 🧓 👲 👳‍♀️ 👳 🧕 👮‍♀️ 👮 👷‍♀️ 👷 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🤱 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 🧏 🧏‍♂️ 🧏‍♀️ 🧙‍♀️ 🧙‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧚‍♀️ 🧚‍♂️ 🧜‍♀️ 🧜‍♂️ 🧝‍♀️ 🧝‍♂️ 🧞‍♀️ 🧞‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 👨‍🦯 👩‍🦯 👨‍🦼 👩‍🦼 👨‍🦽 👩‍🦽 🧑‍🤝‍🧑 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓 🕶 🤿 🌂 ☂️ 🧣 🧤 🧥 🦺 🥻 🩱 🩲 🩳 🩰 🧦 🧢 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🤹‍♀️ 🤹‍♂️ 🧗‍♀️ 🧗‍♂️ 🧘‍♀️ 🧘‍♂️ 🥰 🥵 🥶 🥳 🥴 🥺 🦸 🦹 🧑‍🦰 🧑‍🦱 🧑‍🦳 🧑‍🦲 🧑‍⚕️ 🧑‍🎓 🧑‍🏫 🧑‍⚖️ 🧑‍🌾 🧑‍🍳 🧑‍🔧 🧑‍🏭 🧑‍💼 🧑‍🔬 🧑‍💻 🧑‍🎤 🧑‍🎨 🧑‍✈️ 🧑‍🚀 🧑‍🚒 🧑‍🦯 🧑‍🦼 🧑‍🦽 🦰 🦱 🦲 🦳

Pale Emojis

👐🏻 🙌🏻 👏🏻 🙏🏻 👍🏻 👎🏻 👊🏻 ✊🏻 🤛🏻 🤜🏻 🤞🏻 ✌🏻 🤘🏻 👌🏻 👈🏻 👉🏻 👆🏻 👇🏻 ☝🏻 ✋🏻 🤚🏻 🖐🏻 🖖🏻 👋🏻 🤙🏻 💪🏻 🖕🏻 ✍🏻 🤳🏻 💅🏻 👂🏻 👃🏻 👶🏻 👦🏻 👧🏻 👨🏻 👩🏻 👱🏻‍♀️ 👱🏻 👴🏻 👵🏻 👲🏻 👳🏻‍♀️ 👳🏻 👮🏻‍♀️ 👮🏻 👷🏻‍♀️ 👷🏻 💂🏻‍♀️ 💂🏻 🕵🏻‍♀️ 🕵🏻 👩🏻‍⚕️ 👨🏻‍⚕️ 👩🏻‍🌾 👨🏻‍🌾 👩🏻‍🍳 👨🏻‍🍳 👩🏻‍🎓 👨🏻‍🎓 👩🏻‍🎤 👨🏻‍🎤 👩🏻‍🏫 👨🏻‍🏫 👩🏻‍🏭 👨🏻‍🏭 👩🏻‍💻 👨🏻‍💻 👩🏻‍💼 👨🏻‍💼 👩🏻‍🔧 👨🏻‍🔧 👩🏻‍🔬 👨🏻‍🔬 👩🏻‍🎨 👨🏻‍🎨 👩🏻‍🚒 👨🏻‍🚒 👩🏻‍✈️ 👨🏻‍✈️ 👩🏻‍🚀 👨🏻‍🚀 👩🏻‍⚖️ 👨🏻‍⚖️ 🤶🏻 🎅🏻 👸🏻 🤴🏻 👰🏻 🤵🏻 👼🏻 🤰🏻 🙇🏻‍♀️ 🙇🏻 💁🏻 💁🏻‍♂️ 🙅🏻 🙅🏻‍♂️ 🙆🏻 🙆🏻‍♂️ 🙋🏻 🙋🏻‍♂️ 🤦🏻‍♀️ 🤦🏻‍♂️ 🤷🏻‍♀️ 🤷🏻‍♂️ 🙎🏻 🙎🏻‍♂️ 🙍🏻 🙍🏻‍♂️ 💇🏻 💇🏻‍♂️ 💆🏻 💆🏻‍♂️ 🕴🏻 💃🏻 🕺🏻 🚶🏻‍♀️ 🚶🏻 🏃🏻‍♀️ 🏃🏻 🏋🏻‍♀️ 🏋🏻 🤸🏻‍♀️ 🤸🏻‍♂️ ⛹🏻‍♀️ ⛹🏻 🤾🏻‍♀️ 🤾🏻‍♂️ 🏌🏻‍♀️ 🏌🏻 🏄🏻‍♀️ 🏄🏻 🏊🏻‍♀️ 🏊🏻 🤽🏻‍♀️ 🤽🏻‍♂️ 🚣🏻‍♀️ 🚣🏻 🏇🏻 🚴🏻‍♀️ 🚴🏻 🚵🏻‍♀️ 🚵🏻 🤹🏻‍♀️ 🤹🏻‍♂️ 🛀🏻 🧒🏻 🧑🏻 🧕🏻 🧔🏻 🤱🏻 🧙🏻‍♀️ 🧙🏻‍♂️ 🧚🏻‍♀️ 🧚🏻‍♂️ 🧛🏻‍♀️ 🧛🏻‍♂️ 🧜🏻‍♀️ 🧜🏻‍♂️ 🧝🏻‍♀️ 🧝🏻‍♂️ 🧖🏻‍♀️ 🧖🏻‍♂️ 🧗🏻‍♀️ 🧗🏻‍♂️ 🧘🏻‍♀️ 🧘🏻‍♂️ 🤟🏻 🤲🏻 💏🏻 💑🏻 🤏🏻 🦻🏻 🧏🏻 🧏🏻‍♂️ 🧏🏻‍♀️ 🧍🏻 🧍🏻‍♂️ 🧍🏻‍♀️ 🧎🏻 🧎🏻‍♂️ 🧎🏻‍♀️ 👨🏻‍🦯 👩🏻‍🦯 👨🏻‍🦼 👩🏻‍🦼 👨🏻‍🦽 👩🏻‍🦽 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🦰 🧑🏻‍🦱 🧑🏻‍🦳 🧑🏻‍🦲 🧑🏻‍⚕️ 🧑🏻‍🎓 🧑🏻‍🏫 🧑🏻‍⚖️ 🧑🏻‍🌾 🧑🏻‍🍳 🧑🏻‍🔧 🧑🏻‍🏭 🧑🏻‍💼 🧑🏻‍🔬 🧑🏻‍💻 🧑🏻‍🎤 🧑🏻‍🎨 🧑🏻‍✈️ 🧑🏻‍🚀 🧑🏻‍🚒 🧑🏻‍🦯 🧑🏻‍🦼 🧑🏻‍🦽

Cream White Emojis

👐🏼 🙌🏼 👏🏼 🙏🏼 👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼 🤜🏼 🤞🏼 ✌🏼 🤘🏼 👌🏼 👈🏼 👉🏼 👆🏼 👇🏼 ☝🏼 ✋🏼 🤚🏼 🖐🏼 🖖🏼 👋🏼 🤙🏼 💪🏼 🖕🏼 ✍🏼 🤳🏼 💅🏼 👂🏼 👃🏼 👶🏼 👦🏼 👧🏼 👨🏼 👩🏼 👱🏼‍♀️

👱🏼 👴🏼 👵🏼 👲🏼 👳🏼‍♀️ 👳🏼 👮🏼‍♀️ 👮🏼 👷🏼‍♀️ 👷🏼 💂🏼‍♀️ 💂🏼 🕵🏼‍♀️ 🕵🏼 👩🏼‍⚕️ 👨🏼‍⚕️ 👩🏼‍🌾 👨🏼‍🌾 👩🏼‍🍳 👨🏼‍🍳 👩🏼‍🎓 👨🏼‍🎓 👩🏼‍🎤 👨🏼‍🎤 👩🏼‍🏫 👨🏼‍🏫 👩🏼‍🏭 👨🏼‍🏭 👩🏼‍💻 👨🏼‍💻 👩🏼‍💼 👨🏼‍💼 👩🏼‍🔧 👨🏼‍🔧 👩🏼‍🔬 👨🏼‍🔬 👩🏼‍🎨 👨🏼‍🎨

👩🏼‍🚒 👨🏼‍🚒 👩🏼‍✈️ 👨🏼‍✈️ 👩🏼‍🚀 👨🏼‍🚀 👩🏼‍⚖️ 👨🏼‍⚖️ 🤶🏼 🎅🏼 👸🏼 🤴🏼 👰🏼 🤵🏼 👼🏼 🤰🏼 🙇🏼‍♀️ 🙇🏼 💁🏼 💁🏼‍♂️ 🙅🏼 🙅🏼‍♂️ 🙆🏼 🙆🏼‍♂️ 🙋🏼 🙋🏼‍♂️ 🤦🏼‍♀️ 🤦🏼‍♂️ 🤷🏼‍♀️ 🤷🏼‍♂️ 🙎🏼 🙎🏼‍♂️ 🙍🏼 🙍🏼‍♂️ 💇🏼 💇🏼‍♂️ 💆🏼 💆🏼‍♂️

🕴🏼 💃🏼 🕺🏼 🚶🏼‍♀️ 🚶🏼 🏃🏼‍♀️ 🏃🏼 🏋🏼‍♀️ 🏋🏼 🤸🏼‍♀️ 🤸🏼‍♂️ ⛹🏼‍♀️ ⛹🏼 🤾🏼‍♀️ 🤾🏼‍♂️ 🏌🏼‍♀️ 🏌🏼 🏄🏼‍♀️ 🏄🏼 🏊🏼‍♀️ 🏊🏼 🤽🏼‍♀️ 🤽🏼‍♂️ 🚣🏼‍♀️ 🚣🏼 🏇🏼 🚴🏼‍♀️ 🚴🏼 🚵🏼‍♀️ 🚵🏻 🤹🏼‍♀️ 🤹🏼‍♂️ 🛀🏼 🧒🏼 🧑🏼 🧓🏼 🧕🏼 🧔🏼 🤱🏼 🧙🏼‍♀️ 🧙🏼‍♂️ 🧚🏼‍♀️ 🧚🏼‍♂️ 🧛🏼‍♀️ 🧛🏼‍♂️ 🧜🏼‍♀️ 🧜🏼‍♂️ 🧝🏼‍♀️ 🧝🏼‍♂️ 🧖🏼‍♀️ 🧖🏼‍♂️ 🧗🏼‍♀️ 🧗🏼‍♂️ 🧘🏼‍♂️ 🤟🏼 🤲🏼 💏🏼 💑🏼 🤏🏼 🦻🏼 🧏🏼 🧏🏼‍♂️ 🧏🏼‍♀️ 🧍🏼 🧍🏼‍♂️ 🧍🏼‍♀️ 🧎🏼 🧎🏼‍♂️ 🧎🏼‍♀️ 👨🏼‍🦯 👩🏼‍🦯 👨🏼‍🦼 👩🏼‍🦼 👨🏼‍🦽 👩🏼‍🦽 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🦰 🧑🏼‍🦱 🧑🏼‍🦳 🧑🏼‍🦲 🧑🏼‍⚕️ 🧑🏼‍🎓 🧑🏼‍🏫 🧑🏼‍⚖️ 🧑🏼‍🌾 🧑🏼‍🍳 🧑🏼‍🔧 🧑🏼‍🏭 🧑🏼‍💼 🧑🏼‍🔬 🧑🏼‍💻 🧑🏼‍🎤 🧑🏼‍🎨 🧑🏼‍✈️ 🧑🏼‍🚀 🧑🏼‍🚒 🧑🏼‍🦯 🧑🏼‍🦼 🧑🏼‍🦽

Moderate Brown Emojis

👐🏽 🙌🏽 👏🏽 🙏🏽 👍🏽 👎🏽 👊🏽 ✊🏽 🤛🏽 🤜🏽 🤞🏽 ✌🏽 🤘🏽 👌🏽 👈🏽 👉🏽 👆🏽 👇🏽 ☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽 👋🏽 🤙🏽 💪🏽 🖕🏽 ✍🏽 🤳🏽 💅🏽 👂🏽 👃🏽 👶🏽 👦🏽 👧🏽 👨🏽 👩🏽 👱🏽‍♀️ 👱🏽 👴🏽 👵🏽 👲🏽 👳🏽‍♀️ 👳🏽 👮🏽‍♀️ 👮🏽 👷🏽‍♀️ 👷🏽 💂🏽‍♀️ 💂🏽 🕵🏽‍♀️ 🕵🏽 👩🏽‍⚕️ 👨🏽‍⚕️ 👩🏽‍🌾 👨🏽‍🌾 👩🏽‍🍳 👨🏽‍🍳 👩🏽‍🎓 👨🏽‍🎓 👩🏽‍🎤 👨🏽‍🎤 👩🏽‍🏫 👨🏽‍🏫 👩🏽‍🏭 👨🏽‍🏭 👩🏽‍💻 👨🏽‍💻 👩🏽‍💼 👨🏽‍💼 👩🏽‍🔧 👨🏽‍🔧 👩🏽‍🔬 👨🏽‍🔬 👩🏽‍🎨 👨🏽‍🎨 👩🏽‍🚒 👨🏽‍🚒 👩🏽‍✈️ 👨🏽‍✈️ 👩🏽‍🚀 👨🏽‍🚀 👩🏽‍⚖️ 👨🏽‍⚖️ 🤶🏽 🎅🏽 👸🏽 🤴🏽 👰🏽 🤵🏽 👼🏽 🤰🏽 🙇🏽‍♀️ 🙇🏽 💁🏽 💁🏽‍♂️ 🙅🏽 🙅🏽‍♂️ 🙆🏽 🙆🏽‍♂️ 🙋🏽 🙋🏽‍♂️ 🤦🏽‍♀️ 🤦🏽‍♂️ 🤷🏽‍♀️ 🤷🏽‍♂️ 🙎🏽 🙎🏽‍♂️ 🙍🏽 🙍🏽‍♂️ 💇🏽 💇🏽‍♂️ 💆🏽 💆🏽‍♂️ 🕴🏼 💃🏽 🕺🏽 🚶🏽‍♀️ 🚶🏽 🏃🏽‍♀️ 🏃🏽 🏋🏽‍♀️ 🏋🏽 🤸🏽‍♀️ 🤸🏽‍♂️ ⛹🏽‍♀️ ⛹🏽 🤾🏽‍♀️ 🤾🏽‍♂️ 🏌🏽‍♀️ 🏌🏽 🏄🏽‍♀️ 🏄🏽 🏊🏽‍♀️ 🏊🏽 🤽🏽‍♀️ 🤽🏽‍♂️ 🚣🏽‍♀️ 🚣🏽 🏇🏽 🚴🏽‍♀️ 🚴🏽 🚵🏽‍♀️ 🚵🏽 🤹🏽‍♀️ 🤹🏽‍♂️ 🛀🏽 🧒🏽 🧑🏽 🧓🏽 🧕🏽 🧔🏽 🤱🏽 🧙🏽‍♀️ 🧙🏽‍♂️ 🧚🏽‍♀️ 🧚🏽‍♂️ 🧛🏽‍♀️ 🧛🏽‍♂️ 🧜🏽‍♀️ 🧜🏽‍♂️ 🧝🏽‍♀️ 🧝🏽‍♂️ 🧖🏽‍♀️ 🧖🏽‍♂️ 🧗🏽‍♀️ 🧗🏽‍♂️ 🧘🏽‍♀️ 🧘🏽‍♂️ 🤟🏽 🤲🏽 💏🏽 💑🏽 🤏🏽 🦻🏽 🧏🏽 🧏🏽‍♂️ 🧏🏽‍♀️ 🧍🏽 🧍🏽‍♂️ 🧍🏽‍♀️ 🧎🏽 🧎🏽‍♂️ 🧎🏽‍♀️ 👨🏽‍🦯 👩🏽‍🦯 👨🏽‍🦼 👩🏽‍🦼 👨🏽‍🦽 👩🏽‍🦽 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🦰 🧑🏽‍🦱 🧑🏽‍🦳 🧑🏽‍🦲 🧑🏽‍⚕️ 🧑🏽‍🎓 🧑🏽‍🏫 🧑🏽‍⚖️ 🧑🏽‍🌾 🧑🏽‍🍳 🧑🏽‍🔧 🧑🏽‍🏭 🧑🏽‍💼 🧑🏽‍🔬 🧑🏽‍💻 🧑🏽‍🎤 🧑🏽‍🎨 🧑🏽‍✈️ 🧑🏽‍🚀 🧑🏽‍🚒 🧑🏽‍🦯 🧑🏽‍🦼 🧑🏽‍🦽

Dark Brown Emojis

👐🏾 🙌🏾 👏🏾 🙏🏾 👍🏾 👎🏾 👊🏾 ✊🏾 🤛🏾 🤜🏾 🤞🏾 ✌🏾 🤘🏾 👌🏾 👈🏾 👉🏾 👆🏾 👇🏾 ☝🏾 ✋🏾 🤚🏾 🖐🏾 🖖🏾 👋🏾 🤙🏾 💪🏾 🖕🏾 ✍🏾 🤳🏾 💅🏾 👂🏾 👃🏾 👶🏾 👦🏾 👧🏾 👨🏾 👩🏾 👱🏾‍♀️ 👱🏾 👴🏾 👵🏾 👲🏾 👳🏾‍♀️ 👳🏾 👮🏾‍♀️ 👮🏾 👷🏾‍♀️ 👷🏾 💂🏾‍♀️ 💂🏾 🕵🏾‍♀️ 🕵🏾 👩🏾‍⚕️ 👨🏾‍⚕️ 👩🏾‍🌾 👨🏾‍🌾 👩🏾‍🍳 👨🏾‍🍳 👩🏾‍🎓 👨🏾‍🎓 👩🏾‍🎤 👨🏾‍🎤 👩🏾‍🏫 👨🏾‍🏫 👩🏾‍🏭 👨🏾‍🏭 👩🏾‍💻 👨🏾‍💻 👩🏾‍💼 👨🏾‍💼 👩🏾‍🔧 👨🏾‍🔧 👩🏾‍🔬 👨🏾‍🔬 👩🏾‍🎨 👨🏾‍🎨 👩🏾‍🚒 👨🏾‍🚒 👩🏾‍✈️ 👨🏾‍✈️ 👩🏾‍🚀 👨🏾‍🚀 👩🏾‍⚖️ 👨🏾‍⚖️ 🤶🏾 🎅🏾 👸🏾 🤴🏾 👰🏾 🤵🏾 👼🏾 🤰🏾 🙇🏾‍♀️ 🙇🏾 💁🏾 💁🏾‍♂️ 🙅🏾 🙅🏾‍♂️ 🙆🏾 🙆🏾‍♂️ 🙋🏾 🙋🏾‍♂️ 🤦🏾‍♀️ 🤦🏾‍♂️ 🤷🏾‍♀️ 🤷🏾‍♂️ 🙎🏾 🙎🏾‍♂️ 🙍🏾 🙍🏾‍♂️ 💇🏾 💇🏾‍♂️ 💆🏾 💆🏾‍♂️ 🕴🏾 💃🏾 🕺🏾 🚶🏾‍♀️ 🚶🏾 🏃🏾‍♀️ 🏃🏾 🏋🏾‍♀️ 🏋🏾 🤸🏾‍♀️ 🤸🏾‍♂️ ⛹🏾‍♀️ ⛹🏾 🤾🏾‍♀️ 🤾🏾‍♂️ 🏌🏾‍♀️ 🏌🏾 🏄🏾‍♀️ 🏄🏾 🏊🏾‍♀️ 🏊🏾 🤽🏾‍♀️ 🤽🏾‍♂️ 🚣🏾‍♀️ 🚣🏾 🏇🏾 🚴🏾‍♀️ 🚴🏾 🚵🏾‍♀️ 🚵🏾 🤹🏾‍♀️ 🤹🏾‍♂️ 🛀🏾 🧒🏾 🧑🏾 🧓🏾 🧕🏾 🧔🏾 🤱🏾 🧙🏾‍♀️ 🧙🏾‍♂️ 🧚🏾‍♀️ 🧚🏾‍♂️ 🧛🏾‍♀️ 🧛🏾‍♂️ 🧜🏾‍♀️ 🧜🏾‍♂️ 🧝🏾‍♀️ 🧝🏾‍♂️ 🧖🏾‍♀️ 🧖🏾‍♂️ 🧗🏾‍♀️ 🧗🏾‍♂️ 🧘🏾‍♀️ 🧘🏾‍♂️ 🤟🏾 🤲🏾 💏🏾 💑🏾 🧑🏾‍🦰 🧑🏾‍🦱 🧑🏾‍🦳 🧑🏾‍🦲 🧑🏾‍⚕️ 🧑🏾‍🎓 🧑🏾‍🏫 🧑🏾‍⚖️ 🧑🏾‍🌾 🧑🏾‍🍳 🧑🏾‍🔧 🧑🏾‍🏭 🧑🏾‍💼 🧑🏾‍🔬 🧑🏾‍💻 🧑🏾‍🎤 🧑🏾‍🎨 🧑🏾‍✈️ 🧑🏾‍🚀 🧑🏾‍🚒 🧑🏾‍🦯 🧑🏾‍🦼 🧑🏾‍🦽

Black Emojis

👐🏿 🙌🏿 👏🏿 🙏🏿 👍🏿 👎🏿 👊🏿 ✊🏿 🤛🏿 🤜🏿 🤞🏿 ✌🏿 🤘🏿 👌🏿 👈🏿 👉🏿 👆🏿 👇🏿 ☝🏿 ✋🏿 🤚🏿 🖐🏿 🖖🏿 👋🏿 🤙🏿 💪🏿 🖕🏿 ✍🏿 🤳🏿 💅🏿 👂🏿 👃🏿 👶🏿 👦🏿 👧🏿 👨🏿 👩🏿 👱🏿‍♀️ 👱🏿 👴🏿 👵🏿 👲🏿 👳🏿‍♀️ 👳🏿 👮🏿‍♀️ 👮🏿 👷🏿‍♀️ 👷🏿 💂🏿‍♀️ 💂🏿 🕵🏿‍♀️ 🕵🏿 👩🏿‍⚕️ 👨🏿‍⚕️ 👩🏿‍🌾 👨🏿‍🌾 👩🏿‍🍳 👨🏿‍🍳 👩🏿‍🎓 👨🏿‍🎓 👩🏿‍🎤 👨🏿‍🎤 👩🏿‍🏫 👨🏿‍🏫 👩🏿‍🏭 👨🏿‍🏭 👩🏿‍💻 👨🏿‍💻 👩🏿‍💼 👨🏿‍💼 👩🏿‍🔧 👨🏿‍🔧 👩🏿‍🔬 👨🏿‍🔬 👩🏿‍🎨 👨🏿‍🎨 👩🏿‍🚒 👨🏿‍🚒 👩🏿‍✈️ 👨🏿‍✈️ 👩🏿‍🚀 👨🏿‍🚀 👩🏿‍⚖️ 👨🏿‍⚖️ 🤶🏿 🎅🏿 👸🏿 🤴🏿 👰🏿 🤵🏿 👼🏿 🤰🏿 🙇🏿‍♀️ 🙇🏿 💁🏿 💁🏿‍♂️ 🙅🏿 🙅🏿‍♂️ 🙆🏿 🙆🏿‍♂️ 🙋🏿 🙋🏿‍♂️ 🤦🏿‍♀️ 🤦🏿‍♂️ 🤷🏿‍♀️ 🤷🏿‍♂️ 🙎🏿 🙎🏿‍♂️ 🙍🏿 🙍🏿‍♂️ 💇🏿 💇🏿‍♂️ 💆🏿 💆🏿‍♂️ 🕴🏿 💃🏿 🕺🏿 🚶🏿‍♀️ 🚶🏿 🏃🏿‍♀️ 🏃🏿 🏋🏿‍♀️ 🏋🏿 🤸🏿‍♀️ 🤸🏿‍♂️ ⛹🏿‍♀️ ⛹🏿 🤾🏿‍♀️ 🤾🏿‍♂️ 🏌🏿‍♀️ 🏌🏿 🏄🏿‍♀️ 🏄🏿 🏊🏿‍♀️ 🏊🏿 🤽🏿‍♀️ 🤽🏿‍♂️ 🚣🏿‍♀️ 🚣🏿 🏇🏿 🚴🏿‍♀️ 🚴🏿 🚵🏿‍♀️ 🚵🏿 🤹🏿‍♀️ 🤹🏿‍♂️ 🛀🏿 🧒🏿 🧑🏿 🧓🏿 🧕🏿 🧔🏿 🤱🏿 🧙🏿‍♀️ 🧙🏿‍♂️ 🧚🏿‍♀️ 🧚🏿‍♂️ 🧛🏿‍♀️ 🧛🏿‍♂️ 🧜🏿‍♀️ 🧜🏿‍♂️ 🧝🏿‍♀️ 🧝🏿‍♂️ 🧖🏿‍♀️ 🧖🏿‍♂️ 🧗🏿‍♀️ 🧗🏿‍♂️ 🧘🏿‍♀️ 🧘🏿‍♂️ 🤟🏿 🤲🏿 💏🏿 💑🏿 🤏🏿 🦻🏿 🧏🏿 🧏🏿‍♂️ 🧏🏿‍♀️ 🧍🏿 🧍🏿‍♂️ 🧍🏿‍♀️ 🧎🏿 🧎🏿‍♂️ 🧎🏿‍♀️ 👨🏿‍🦯 👩🏿‍🦯 👨🏿‍🦼 👩🏿‍🦼 👨🏿‍🦽 👩🏿‍🦽 🧑🏿‍🤝‍🧑🏿 🧑🏿‍🦰 🧑🏿‍🦱 🧑🏿‍🦳 🧑🏿‍🦲 🧑🏿‍⚕️ 🧑🏿‍🎓 🧑🏿‍🏫 🧑🏿‍⚖️ 🧑🏿‍🌾 🧑🏿‍🍳 🧑🏿‍🔧 🧑🏿‍🏭 🧑🏿‍💼 🧑🏿‍🔬 🧑🏿‍💻 🧑🏿‍🎤 🧑🏿‍🎨 🧑🏿‍✈️ 🧑🏿‍🚀 🧑🏿‍🚒 🧑🏿‍🦯 🧑🏿‍🦼 🧑🏿‍🦽

Animals & Nature Emojis

🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙊 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦩 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🦗 🐞 🐜 🕷 🕸 🐢 🐍 🦎 🦂 🦀 🦑 🐙 🦐 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🦌 🐪 🐫 🐘 🦏 🦍 🐎 🐖 🐐 🐏 🐑 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦓 🦒 🦔 🦧 🦥 🦦 🦨 🦕 🦖 🦪 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌻 🌼 🌸 🌺 🌎 🌍 🌏 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌞 🌛 🌜 🌙 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 🔥 💥 ☄️ ☀️ 🌤 ⛅️ 🌥 🌦 🌈 ☁️ 🌧 ⛈ 🌩 🌨 ☃️ ⛄️ ❄️ 🌬 💨 🌪 🌫 🌊 💧 💦 ☔️

Food Emojis

🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥝 🥑 🍅 🍆 🥒 🥕 🌽 🌶 🧄 🧅 🥔 🍠 🌰 🥜 🍯 🥐 🍞 🥖 🧀 🥚 🍳 🥓 🥞 🍤 🍗 🍖 🍕 🌭 🍔 🍟 🥙 🌮 🌯 🥗 🥘 🍝 🍜 🍲 🍥 🍣 🍱 🍛 🍚 🍙 🍘 🍢 🍡 🍧 🍨 🍦 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🥛 🍼 ☕️ 🍵 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🧃 🧉 🧊 🥄 🍴 🍽 🥥 🥨 🥩 🥪 🥣 🥫 🧇 🧆 🧈 🥟 🥠 🥡 🥧 🥤 🥢 

Activity & Sports Emojis

⚽️ 🏀 🏈 ⚾️ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳️ 🏹 🎣 🥊 🥋 ⛸ 🎿 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🪂 🎽 🏅 🎖 🥇 🥈 🥉 🏆 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🪕 🎲 🎯 🎳 🎮 🎰 🛷 🥌 🪀 🪁

Vehicles/Travel & Places

🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🛺 🏍 🦽 🦼 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 🚁 🛩 ✈️ 🛫 🛬 🚀 🛰 💺 🛶 ⛵️ 🛥 🚤 🛳 ⛴ 🚢 ⚓️ 🚧 ⛽️ 🚏 🚦 🚥 🗺 🗿 🗽 ⛲️ 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛱ 🏖 🏝 ⛰ 🏔 🗻 🌋 🏜 🏕 ⛺️ 🛤 🛣 🏗 🏭 🏠 🏡 🏘 🏚 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 🛕 ⛩ 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁 🛸 

Object Emojis

⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🪓 🦯 🛡 🚬 ⚰️ ⚱️ 🏺 🔮 📿 💈 ⚗️ 🔭 🔬 🕳 💊 💉 🩸 🩹 🩺 🌡 🪒 🚽 🚰 🚿 🛁 🛀 🛎 🔑 🗝 🚪 🪑 🛋 🛏 🛌 🖼 🛍 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 📌 🎌 🏳️ 🏴 🏁 🪔 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓

Symbols

❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🟥 🟧 🟨 🟩 🟦 🟪 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 ⏏ ♀ ♂ ⚕ ♾️ 

Mixed Color Emojis

🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👭🏻 👩🏼‍🤝‍👩🏻 👭🏼 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👭🏽 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👭🏾 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👭🏿 👫🏻 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👫🏼 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👫🏽 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👫🏾 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👫🏿 👬🏻 👨🏼‍🤝‍👨🏻 👬🏼 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👬🏽 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👬🏾 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 👬🏿

Flag Emojis

🏴 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇨 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇻 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇪🇦 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇵 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇬 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇲 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇲🇵 🇰🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇹 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇸🇧 🇸🇴 🇿🇦 🇬🇸 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇲🇫 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇯 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇦 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🇺🇸 🇺🇾 🇺🇲 🇺🇳 🇻🇮 🇺🇿 🇻🇺 🇻🇦 🇻🇪

🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏳️‍🌈 🏴‍☠️

### GOOD LUCK 


`````{tabbed} Aperçu
![Baby Yoda](images/syntaxemyst/babyyoda.gif)
`````

`````{tabbed} Code
````{code-block} markdown
![Baby Yoda](images/syntaxemyst/babyyoda.gif)
````
`````

P.s : en effet, on peut intégrer des fichiers `.gif`. C'est exactement le même procédé que pour une image. 
