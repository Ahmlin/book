
 <!DOCTYPE html>
<html>
<head>
<style>
.button {
  background-color: white;
  border: 1px solid;
  border-color: black;
  font-family:"Lato",sans-serif;
  font-weight:350;
  color: black!important;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button:hover {
  text-decoration:none;
  background-color: black; 
  color: white!important;
}
.round-button {
    display:block;
    width:100px;
    height:100px;
    line-height:17px;
    border:0px ;
    border-radius: 50%;
    color:#6069db;
    text-align:center;
    text-decoration:none;
    display: table-cell;
    vertical-align: middle;
    background: #6069db;
    box-shadow: 0 0 0px gray;
    font-size:14px;
    font-weight:bold;
    }

</style>
</head>
</html>

<div align="right"> 
    <a href="http://files.edunumsec2.ch/enjeux-sociaux/economie-numerique.pdf" class="round-button">
         <font color=white id="demo">Voir <br>dossier</font>
    </a>
</div>

# IA et enjeux de l'automatisation

<br>

Ce chapitre aborde le vaste sujet que forment l’intelligence artificielle (IA) et l’automatisation. Qu’est-ce que l’IA, d’où vient-elle et quelle place occupe-t-elle dans la société ? Quelles sont les opportunités, les craintes et les problèmes propres aux applications de l’IA ? Comment réguler les usages de ces nouvelles technologies ?

## Objectifs

* Comprendre le contexte d’émergence de l’intelligence artificielle
* Différencier l’IA symbolique et connexionniste
* Connaître les forces et les faiblesses de l’IA
* Comprendre les enjeux relatifs à la délégation des prises de décisions 
* Prendre conscience des différentes manières de réguler les pratiques liées à l’IA


## Introduction

<br>
Depuis les années 2010, on observe un retour en force de l’intelligence artificielle. La puissance des ordinateurs combinée à l’important volume de données disponible (big data) permet d’envisager de nouvelle approche notamment dans le domaine de l’apprentissage profond (deep learning). Entre 2015 et 2020, les investissements privés dans le domaine de l’IA ont quadruplé.  Dans le secteur des véhicules dits « autonomes », l’IA est considérée comme la solution aux erreurs humaines. Plus généralement, nos pratiques numériques sont, elles aussi, guidées par des algorithmes qui organisent automatiquement les contenus visibles en fonction des données connues sur l’utilisateur. Difficile d’échapper à une forme automatisée du traitement de l’information, alors que 92% des adultes vivant en Suisse utilisent quotidiennement un smartphone.  

L’intelligence artificielle et ses technologies sont à la fois porteuses d’espoir et de craintes. D’un côté, l’IA fait miroiter la possibilité de résoudre des problèmes extrêmement complexes. De l’autre, les bouleversements potentiels amené par l’automatisation de certaines tâches et prises de décision inquiète, tant dans le secteur public que privé. Afin de faire la lumière sur les impacts, les forces et les faiblesses de l’intelligence artificielle, ce dossier propose un retour sur son histoire. Les principaux enjeux contemporains sont identifiés et présentés dans la deuxième partie du cours. 


<div align="left"; style="font-size:20px ;color:rgb(0, 0, 0); font-family:helvetica">
  <b>L'IA, un ensemble de technologies</b>
</div>

<br>

Trouver une définition universelle de l’IA est un exercice difficile car il s’agit en fait d’un ensemble de technologies distinctes. Dans le domaine scientifique, on distingue principalement deux approches historiques avec d’un côté l’IA symbolique qui vise à reproduire le raisonnement humain et l’intégrer à des machines. C’est sur ce principe que sont basés les **systèmes experts**. De l’autre, l’IA connexionniste est capable d’apprendre à partir de grands volumes de données et de déduire ses propres règles. Cette technique est plus communément appelée **apprentissage profond** ou *deep learning*. Elle se base sur des modèles de réseaux de neurones, superposés en plusieurs couches pour permettre l’établissement de règles complexes. 

<div align="left"; style="font-size:20px ;color:rgb(0, 0, 0); font-family:helvetica">
  <b>Entre science et fiction</b>
</div>

<br>

Historiquement, les premières formes d’intelligence artificielle apparaissent dans la littérature. L’un des premiers exemples est le roman « Frankenstein » de Mary Shelley (1818). Plus tard, la science-fiction en fera un thème central et récurrent, des premiers robots rebelles de la pièce R.U.R. (Čapek, 1920) à la voix de *Her* du film homonyme (Spike Jonze, 2013). L’impact des histoires et des images issus de la science-fiction sont perceptibles dans certaines représentations, fantasmes et inquiétudes suscitées par l’IA. Mais les récits fictifs qui mobilisent diverses formes d’IA n’ont pas la prétention de prédire l’avenir. Au contraire, ils doivent être interprétés dans leur contexte respectif afin de comprendre leurs significations propres. Pour rassurer les plus inquiets, les technologies actuelles ne laissent pas entrevoir une autonomisation des robots et autres logiciels intelligents pour tout de suite. 
Reste que les avancées techniques et technologiques laissent entrevoir de nouveaux possibles dans le domaine de l’IA et posent aussi de nouvelles questions. Dans quelle situation fait-on appel à ces nouvelles technologies ? Quelles tâches et prises de décision peuvent être déléguées aux machines et en quelles proportions ? Qui est responsable en cas de problème ?

<br>

**Héritage de la cybernétique**

Les pionniers de l’intelligence artificielle sont influencés par le courant de pensée de la cybernétique, fondé par le mathématicien Norbert Wiener. Ce mouvement interdisciplinaire popularisé à la fin des années 1940 aux États-Unis considère que tous les systèmes vivants, (humains et animaux) et matériels (machines) sont régulés par une loi générale basée sur des boucles de rétroaction ou feedbacks. Cette hypothèse théorique place les humains et les machines sur un pied d’égalité, d'un point de vue fonctionnel. Elle promeut une vision formaliste et donc simplificatrice du fonctionnement du vivant. Bien que réductrice, cette approche permettra notamment d’envisager les premières théories concernant l’intelligence artificielle basée sur le raisonnement humain. 

L’engouement autour de la cybernétique s’essouffle à la moitié des années 1960, mais son influence reste aujourd’hui encore perceptible dans de nombreux domaines scientifiques tels que les sciences cognitives, l’informatique et bien sur les recherches en IA. 



**« Les machines peuvent-elles penser ? »**

Dans une approche symbolique de l’intelligence artificielle le mathématicien britannique Alan Turing pose cette question dans un célèbre article publié en 1950.  Pour y répondre, il propose le « jeu de l’imitation », également connu sous le nom de « Test de Turing ». L’expérience se résume comme suit : Un être humain (A) est mis en communication via un clavier et un écran, avec deux entités qu’il ne voit pas et dont il ignore la nature ; d’un côté, se trouve un ordinateur (B), de l’autre, un humain (C). Si, au bout de 5 minutes de conversation, l’être humain (A) n’est pas capable de savoir qui de (B) et (C) est l’ordinateur, ce dernier passe le test. 

Le jeu de l’imitation est avant tout un exemple théorique. La puissance des machines des années 1950 ne permet pas d’envisager l’assimilation des questions et encore moins la formulation de réponses adaptées. Aujourd’hui, les agents conversationnels ou ***chat bots*** sont ce qui se rapprochent le plus de l’ordinateur du jeu de l’imitation. Leurs performances actuelles demeurent relativement faibles et sont encore loin de créer la confusion pour les utilisateurs. 

Au-delà de la pertinence du jeu de l’imitation, sa conceptualisation permet de comprendre comment Turing concevait la pensée. Pour lui, elle est faite de capacités cognitives, c’est-à-dire d'un ensemble de facultés qui permettent d’apprendre, d’organiser et d’utiliser les connaissances. En considérant que la pensée peut être réduite à un ensemble de facultés définies (entre autres la perception, la mémoire et le langage), il devient également possible d’envisager de les reproduire de manière artificielle. C’est sur ce principe, inspiré de la cybernétique, que se baseront les premières recherches dans le domaine, quelques années plus tard. Cette approche très rationnelle de la pensée permet de placer l’intelligence humaine et l’intelligence artificielle au même niveau afin de les mettre en opposition. Le rapport de force entre l'être humain et la machine instauré par Turing aura une influence certaine dans l'histoire. Cette opposition servira de point de repère pour évaluer l'efficacité des systèmes d'IA face à l'intelligence humaine. 

**Création d’un domaine scientifique**

Les termes intelligence artificielle ou plutôt artificial intelligence en anglais, apparaissent pour la première fois en 1955, aux États-Unis. Quatre scientifiques formés en mathématique et en neurologie organisent une conférence d’été au Dartmouth College, afin de discuter et de réfléchir aux questions de programmation et de langage des ordinateurs, de réseaux de neurones, de puissance de calcul et d’auto-apprentissage. Mises ensemble, ces thématiques forment un nouveau domaine appelé intelligence artificielle. 

Dans leur proposition de projet, les auteurs expliquent leur approche de la manière suivante : 
« L’étude devra se dérouler sur la base de la conjecture que chaque aspect de l’apprentissage ou tout autre caractéristique de l’intelligence peut, en principe, être décrit avec une telle précision qu’une machine peut être conçue pour la simuler » 

L’un des but motivant les premières recherches en IA est explicitement de reproduire l’intelligence humaine. 
Comme Turing avant eux, les pionniers de l’IA partent du principe que le fonctionnement du raisonnement humain est suffisamment compris pour être modélisé. Certes, cette approche permet d’ouvrir la voie dans certains domaines bien précis. Cependant, l’intelligence humaine ne se limitent pas à un processus logique et individuel contrairement aux idées des pionniers de l’IA. Cette conception est en fait porteuse d’un paradoxe : pour pouvoir modéliser et reproduire artificiellement l’intelligence, elle est réduite à des fonctions définies. Or, les notions d’intelligence sociale, émotionnelle ou créative sont exclues du problème. La notion du corps est également totalement absente de ces considérations.  



<br>


<br>
<br>

<div align="left"; style="font-size:20px ;color:rgb(0, 0, 0); font-family:helvetica">
  <b>🌀 Les dynamiques des plateformes</b>
</div>

<br>

Si l’exploitation massive des données ne concerne pas l’ensemble des entreprises du numérique, toutes ont cependant compris la valeur des traces pour développer leurs activités et pour proposer aux utilisateurs des produits ou services personnalisés. Ces recommandations «sur-mesure», rendues possibles grâce au traitement algorithmique des données, sont particulièrement utiles dans un contexte où les plateformes concentrent un nombre toujours plus important d’informations. Elles s’affirment comme le principal intermédiaire permettant à l’utilisateur de s’orienter parmi une offre pléthorique. Les plateformes ont tout intérêt à effectuer un tri pertinent, afin de proposer un contenu susceptible de satisfaire l’usager et ainsi gagner son adhésion à long terme.


Par ailleurs, attirer et garder l'utilisateur captif est d'autant plus important pour les plateformes qu'elles bénéficient des "**effets de réseau**" :  plus une plateforme compte de membres, plus elle en attire de nouveaux. Son attractivité et sa valeur grandissent à mesure que son nombre d'utilisateurs croît. Si tous nos amis sont actifs sur Instagram, il semble difficile d’opter pour un autre réseau social. Cet effet de réseau est particulièrement puissant dans le cas des services numériques car, contrairement à une entreprise classique, les coûts de transaction (comme la recherche d'informations ou la mise en relation entre services, clients et prestataires) sont fortement réduits.

Un autre effet important est celui des **«économies d’échelle»**. Ce principe veut que le coût unitaire de production d’un bien baisse à mesure que les quantités produites augmentent. Ces logiques, déjà présentes dans de nombreux secteurs économiques, sont considérablement augmentées grâce aux possibilités offertes par le numérique. Si la reproduction et la distribution d’un livre, d’un journal ou d’un CD implique un coût (certes, toujours dégressif), la duplication et le partage de leur version numérique n’engage que des frais négligeables. Il en va de même pour tous les biens immatériels. 

Dans un contexte où les effets de réseaux  sont cruciaux et les économies d’échelle considérables, la **gratuité** joue un rôle central. Celle-ci permet notamment de constituer rapidement une base d’utilisateurs. Mais elle a également ses revers : des services en apparence gratuits se paient par la collecte de données personnelles, tandis que les producteurs de contenus voient leurs créations exploitées sans parvenir à obtenir une (juste) rémunération.

La combinaison de ces différents facteurs (effets de réseau, économies d’échelle, gratuité) favorise des situations de monopoles, telles que nous les voyons se déployer aujourd’hui. L’expansion de Google est l’illustration emblématique de ce mécanisme. L’entreprise propose des services gratuits et personnalisés qui deviennent à la fois plus performants et attractifs (aussi bien pour les internautes que pour les annonceurs) à mesure que le nombre d’interactions croît. Les données collectées nourrissent toute l’offre de services, tandis que le coût par utilisateur supplémentaire est quasi nul. Il s’agit d’un cercle vertueux dans lequel l’attractivité et la valeur de l’entreprise augmentent simultanément.

Une fois ce processus engagé, il devient difficile pour des offres concurrentes d’émerger. Ainsi, selon le principe du *winner takes all*, chaque secteur tend à être dominé par une seule entreprise qui rachète ses concurrents à mesure de son expansion. Ces entreprises deviennent incontournables, tant pour les clients que les prestataires. Par exemple, il est presque impossible pour un hôtel de se passer d’un référencement sur Booking.com, tout comme un petit vendeur indépendant peut difficilement éviter de proposer ses produits sur Amazon.


```{admonition} Ubérisation
:class: hint
L’ubérisation, dont le nom provient de l’entreprise Uber, est un processus économique qui vise à contourner le fonctionnement classique d’un secteur en créant un nouvel intermédiaire via une plateforme numérique. Celle-ci met en relation clients et prestataires tout en prélevant une commission sur les transactions. Si les services «ubérisés» offrent des prestations flexibles à moindre coût, ce changement de modèle passe par une stratégie de développement agressive  dans un cadre légal peu clair. Dans le cas d’Uber, le modèle implique la participation de travailleurs au statut précaire, considérés comme «indépendants» et pourtant soumis aux exigences de la plateforme. Le statut légal de ces pratiques est aujourd’hui remis en cause dans plusieurs villes, [dont Genève](https://www.letemps.ch/economie/geneve-uber-eats-desormais-recourir-employes), qui a imposé en 2020 à Uber Eats de salarier ses travailleurs.
```
Face à ces pratiques, les États peinent à s’accorder et les régulations demeurent peu contraignantes. Ce cadre juridique flou témoigne également d’une forme de fatalisme face au numérique. En effet, la précarité, la financiarisation ou la captation des données sont souvent pensés comme inhérentes au développement des technologies. Il apparaît donc nécessaire de souligner que la technique ne contient pas en elle-même un modèle organisationnel ou économique particulier. Pour des plateformes comme Google ou Facebook, ces outils technologiques constituent des moyens d’atteindre des objectifs commerciaux. Mais ce n’est pas la seule voie possible. Il existe en effet des services numériques dont les motivations se situent en dehors de ces logiques financières

Ainsi, il faut rappeler que le Web n'a pas toujours été régi par des principes marchands (👉*voir dossier "Histoire d'Internet et du web"* ) et l'esprit de collaboration et de partage qui caractérisait les premières communautés en ligne n'a pas disparu. Comme le défendent les tenants du mouvement du logiciel libre, la mise en réseau des individus peut également mener à la création de **biens communs**. En ce sens, le succès de Wikipédia est la démonstration qu'une alternative au modèle des plateformes est possible (👉 *voir fiche "Wikipédia"*). 

Toutefois, la frontière entre ces deux logiques est parfois difficile à tracer, comme en témoigne l’utilisation souvent peu claire du terme «économie du partage». Désignant à l’origine des initiatives citoyennes et collaboratives tournées vers la création de biens communs, la notion est désormais réinvestie par des services commerciaux, tels que Uber, dont le mode de fonctionnement et les objectifs n’ont plus rien à voir avec ces principes. Le concept collaboratif et gratuit de *couchsurfing*, par la suite repris par Airbnb, illustre également ce processus.


<br>
<div align="left"; style="font-size:20px ;color:rgb(0, 0, 0); font-family:helvetica">
  <b>👁️ Une économie de l'attention?</b>
</div>

<br>

Dans ce marché mondial des données, l’attention est un bien rare et convoité. Ainsi, chacun des grands acteurs du numérique tente d’amener l’internaute sur ses plateformes et le rendre captif de ses services. La notion de rareté de l'attention n'est cependant pas nouvelle. Traditionnellement, c'est la publicité qui tentait d'attirer l'attention du public vers un produit ou service. Avec le numérique, cette quête du "temps de cerveau disponible"<a href="#footnote-1">[1]</a> est amplifiée car il est désormais possible de capter, calculer et monétiser les "traces d'attention".

Les applications sont alors pensées dans le but de retenir l'utilisateur le plus longtemps possible. Les pastilles rouges des notifications, les *likes*, les systèmes *auto-play* de YouTube ou Netflix (qui relancent une vidéo sans notre consentement), ou encore le *scroll* infini sont autant d'incitations à maximiser le temps passé en ligne. Ces astuces de conception jouent sur des ressorts émotionnels : besoin de récompense immédiate, quête de reconnaissance, attraction pour la nouveauté, peur de passer à côté de quelque chose... Ces tactiques semblent d’autant plus efficaces qu’elles peuvent être finement ciblées et personnalisées.

Mais ces leviers psycho-cognitifs suffisent-ils à expliquer le succès des plateformes? Bien que ces mécanismes contribuent à orienter les comportements, l’attraction des services numériques ne saurait être uniquement le résultat de stratégies de captation de l’attention. Si les plateformes parviennent à attirer un nombre important d’utilisateurs, c’est avant tout grâce à leur position centrale et à leur capacité à réunir une multitude d’usages (communiquer, s’informer, se divertir, jouer, etc.).

En ce sens, il apparaît nécessaire de questionner certains discours médiatiques autour de la question des pratiques numériques - en particulier chez les jeunes - qui se résument souvent à un message alarmiste centré sur la notion de «temps d’écran». Ce point de vue ne permet pas de considérer le rapport à la technologie autrement qu’au travers du prisme de l’addiction.

Pourtant, les activités en ligne ne sont pas nécessairement synonymes de temps perdu et il est important de comprendre de quelle façon elles s’inscrivent dans des pratiques sociales. Jouer en ligne, échanger des informations via les réseaux sociaux ou créer une vidéo ne peut être assimilé à du temps perdu. L’idée qu’il existerait une distinction et, par extension, une hiérarchie, entre «vie réelle» et «vie virtuelle» est largement remise en question par les travaux récents en sciences sociales. Toutes ces pratiques numériques font partie intégrante de la vie en société.


<p id="footnote-1">[1] Déclaration par Patrick Le Lay (ex-PDG du groupe TF1) en 2004  : « Ce que nous vendons à Coca-Cola, c’est du temps de cerveau humain disponible »</p>


### Ressources 

* [Un article](https://www.numerama.com/tech/227930-si-vous-souhaitez-etre-credibles-arretez-de-dire-les-gafa.html) qui discute la pertinence de l’acronyme «GAFA» (Numérama))
* [Le livre](https://www.cairn.info/culture-numerique--9782724623659.html) *Culture numérique*(2019) de Dominique Cardon – chapitre 5, "L'économie des plateformes"
* [Le livre](https://www.beaude.net/ie/) *Les fins d'Internet* (2014) de Boris Beaude – chapitre 4, "De la gratuité à la propriété"
* [Le livre](https://www.seuil.com/ouvrage/pour-une-ecologie-de-l-attention-yves-citton/9782021181425) *Pour une écologie de l'attention* de Yves Citton (2014)
* [Le livre](https://www.boullier.bzh/livres/comment-sortir-de-lemprise-des-reseaux-sociaux/) *Comment sortir de l'emprise des réseaux sociaux* (2020) de Dominique Boullier 
* [La mini-série documentaire](https://www.youtube.com/playlist?list=PLUDzuI7to_hD6PswmzU0r9oSq048EDoY8) «Les invisibles" (France TV), qui fait met en lumière les travailleurs des plateformes (livreurs Uber Eats, «travailleurs du clic», modérateurs)
* [Un reportage radio](https://www.rts.ch/play/radio/vacarme/audio/societe-numerique-35-hep-uber?id=11541585) (RTS) sur les conditions de travail des chauffeurs Uber
* [Un podcast](https://www.franceinter.fr/emissions/le-code-a-change/sommes-nous-vraiment-en-train-de-fabriquer-des-cretins-digitaux) qui déconstruit les discours alarmistes autour des écrans chez les jeunes ("Sommes-nous vraiment en train de fabriquer des “crétins digitaux" ?", Le Code a changé, France Inter)

### Glossaire

* Algorithme
* Plateforme
* Économie d’échelle
* Effet de réseau
* Ubérisation
* Biens communs
* Économie de l’attention

### Fiches complémentaires

<div class="w3-container">

  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <a href="#" class="button"> Digital labour</a>
    <a href="#" class="button"> Wikipédia</a>
  </div>
  </div>
</div>

<br>

___________

<br>

## Pistes pédagogiques 

<br>

<div align="left"; style="font-size:20px ;color:rgb(0, 0, 0); font-family:helvetica">
  <b>1. Au-delà des GAFAM</b>
</div>

Objectif : Prendre conscience de la diversité des modèles économiques du numérique

<br>

**A.  Que cache la notion de «GAFAM»?** 

🕑 30 min | 👩‍💻 branché


Proposer aux élèves de faire une recherche en ligne du terme «GAFAM» (ou «GAFA»). En petits groupes, ils et elles prennent des notes afin de pouvoir répondre aux questions suivantes : Qui sont les «GAFAM»?  Que leur reproche-t-on? En quoi se différencient-elles?


   ```{admonition} Note
   :class: tip
   Pour guider leur recherche, on peut suggérer aux élèves les articles suivants:
   * [La page Wikipédia](https://fr.wikipedia.org/wiki/GAFAM) consacrée au terme "GAFAM"
   * [Un article](https://www.numerama.com/tech/227930-si-vous-souhaitez-etre-credibles-arretez-de-dire-les-gafa.html) qui discute la pertinence de l’acronyme «GAFA» (Numérama)
   ```

Par oral, mettre en commun les réponses des différents groupes et apporter des précisions:
  <br>
  
   a) Qui sont les "GAFAM"?

   ````{dropdown} Réponse
   Google, Amazon, Facebook, Apple, Microsoft 
   ````


   b) Que leur reproche-t-on?

   ````{dropdown} Réponse

   * une position dominante dans l'industrie du numérique
   * des pratiques anticoncurrentielles
   * des tactiques visant à "enfermer" l'utilisateur dans un environnement
   * une collecte massive de données (concerne surtout Google et Facebook)
   * des pratiques d'optimisation fiscale à large échelle
   
   Préciser que la plupart de ces caractéristiques ne sont pas exclusivement propres au numérique.
   ````



  c) En quelques mots, quel est le modèle économique de chacune de ces entreprises?

   ````{dropdown} Réponse
  Voir paragraphe "au-delà des GAFAM".
   ````

  d) A votre avis, est-il pertinent de réunir ces cinq entreprises sous un même terme? 

   ````{dropdown} Réponse
  Si le terme «GAFAM» peut être utile pour comprendre certains points communs à ces entreprises (cf. question b), il pose également problème, car il efface les logiques spécifiques à chacune de ces entreprises. En effet, celles-ci ont une histoire, un modèle économique, une culture et des enjeux propres. Par exemple, la question de la captation des données concerne avant tout Google et Facebook. Apple, qui vend avant tout du matériel informatique et ne commercialise pas les données des utilisateurs, se positionne ainsi comme [défenseur de la vie privée](https://www.letemps.ch/economie/protection-vie-privee-fer-lance-marketing-dapple). Ainsi, les enjeux politiques et les problématiques que pose leur régulation ne sont pas les mêmes pour chacune de ces entreprises. Connaître leurs spécificités permet de proposer une politique adaptée.
   ````

**Activité complémentaire** 

Demander aux élèves de lister 3 applications ou services en ligne qu’ils utilisent/connaissent, puis d’identifier leurs principales sources de revenus. Compléter les réponses des élèves en présentant les modèles économiques de quelques applications les plus populaires.


  ````{dropdown} **Quelques éléments de réponse**

  * **Facebook / Instagram / Snapchat / Twitter / Pinterest** : La majorité des réseaux sociaux ont adopté un modèle économique qui repose sur la vente d'espaces publicitaires. En apparence gratuits, ces services sont néanmoins "payés" par leurs utilisateurs, qui transmettent de nombreuses données qui permettent aux plateformes de vendre à des annonceurs des audiences ciblées.
  * **YouTube** : A l’origine entièrement gratuite, la plateforme de vidéos propose désormais une double offre : gratuite ou payante. YouTube se situe donc à l’intermédiaire entre les réseaux sociaux gratuits et les offres de divertissement basées sur un principe d’abonnement. 
  * **WhatsApp** : L’entreprise, qui appartient à Facebook depuis 2016, n’est pas monétisée. Auparavant facturée 1 dollar par année, l’application est maintenant gratuite et sans publicité. Mais, début 2021, WhatsApp a annoncé de nouvelles conditions d’utilisation qui vont permettre à Facebook d’utiliser les données issues de l’application. Son modèle économique pourrait donc évoluer.
  * **TikTok** : En 2020, TikTok possède 2 sources de revenus : la publicité et surtout, les [achats intégrés à l'application](https://www.numerama.com/business/535666-comment-tiktok-fait-il-pour-gagner-tellement-dargent.html). Ces derniers s'effectuent au travers d'une monnaie virtuelle, les "*Coins*" (pièces). Les utilisateurs peuvent acheter des crédits (100 pièces pour env. 1 Euro) et les utiliser pour différents services supplémentaires ou pour des "cadeaux" offerts aux influenceurs. Tiktok prélève une commission sur ces transactions (le pourcentage exact n'est pas connu).
  *  **Signal** : Pour l'instant, le service de messagerie est financé par une fondation à but non lucratif. Il est axé sur la confidentialité et les données des utilisateurs ne sont pas commercialisées.
  * **Telegram** : D’abord entièrement gratuit et sans publicité, le service de messagerie a annoncé en 2021 développer une offre payante pour les entreprises et ainsi qu’une plateforme publicitaire.
  *  **Spotify / Netflix** : Les plateformes liées à l'industrie du divertissement fonctionnent le plus souvent sur un principe d'abonnement. La stratégie consiste à offrir un premier mois gratuit ou un service réduit (avec publicités, par exemple) afin de convertir les utilisateurs à une version payante.
  *  **Uber, AirBnB** : Ces plateformes se positionnent comme des intermédiaires entre le client et le prestataire de service. Elles prennent une commission sur les transactions qui s'effectuent entre les deux parties
  ````

<br>



**B. Comprendre le modèle de Google** 

🕑 30 min | 👩‍💻 branché

En guise d’introduction, demander aux élèves :

a) Qu’est-ce qu’un moteur de recherche?

````{dropdown} **Réponse**
Un moteur de recherche est une application web qui permet de trouver des ressources en ligne (pages web, images, vidéos, articles, logiciels, etc.) au travers d’une recherche par mots-clés et selon différents paramètres déterminés.
Il tente de fournir à l’utilisateur la réponse la plus pertinente à sa requête. Sans moteur de recherche, il faudrait connaître l’adresse précise d’un site pour y accéder.
````

b) Quel moteur de recherche utilisez-vous ?

Il est très probable que la majorité des élèves réponde «Google». Dès lors, on peut suggérer les questions suivantes :

c) Quel est le modèle économique de Google?

````{dropdown} **Réponse**
Lorsque l’on fait une recherche en ligne, deux grandes catégories de résultats sont proposées : 

a. Les résultats dits [«naturels»](https://support.google.com/google-ads/answer/6054492?hl=fr) qui apparaissent avant tout grâce à la pertinence entre leur contenu et le mot-clé introduit. 

b. Les résultats issus du «référencement payant», soit des annonces mises en avant car un annonceur a payé pour que, lorsqu'un certain mot-clé est inséré, son lien apparaisse en haut des résultats. La place effective des annonces repose sur un système d’enchères en temps réel qui détermine quelle annonce est affichée selon de multiples paramètres (pertinence avec le mot-clé, montant investi, zone géographique, heure, etc.), afin de proposer à l’internaute les liens commerciaux sur lesquels il est le plus susceptible de cliquer.

Le ciblage publicitaire s’effectue également au travers des très nombreux sites web qui affichent des annonces gérées par Google en échange d’une rémunération (via la régie publicitaire Adsense). Google se positionne donc comme un intermédiaire qui fait se rencontrer la demande de mots-clés et l’offre d’espace publicitaires.
````

d) Comment Google est-elle devenue une des entreprises les plus riches au monde, alors que ses services sont gratuits?

````{dropdown} **Réponse**
L’objectif de Google n’est pas de vendre des produits ou services aux internautes mais de recueillir le plus grand nombre de traces concernant leur profil et leur comportement (notamment au travers de sa régie Doubleclick) afin de proposer à des annonceurs des espaces publicitaires ciblés, L’entreprise a donc intérêt à offrir des services gratuits afin de maximiser le nombre d’utilisateurs et d’interactions sur toutes ses plateformes (Gmail, Chrome, Google Maps, YouTube, etc.). Par ailleurs, plus ces services comptent d’usagers, plus ils deviennent attractifs et performants, à la fois pour les utilisateurs et les annonceurs. C’est ce cercle vertueux qui a permis à Google d’occuper une position dominante. Une fois cette place acquise, il devient difficile pour un concurrent d’émerger.

A noter toutefois que les recettes de Google proviennent avant tout de la vente de mots-clés associés à des profils. Ce sont ces mots-cles qui permettent de déterminer au mieux l’intention de l’internaute et de proposer un espace publicitaire pertinent. Le profilage de l’utilisateur est donc moins nécessaire pour Google que pour d’autres plateformes, telles que Facebook. Le profilage de l’utilisateur est donc moins nécessaire pour Google que pour d’autres plateformes, telles que Facebook. C’est également la raison pour laquelle Google peut envisager [certaines mesures en faveur de la protection de la vie privée](https://siecledigital.fr/2021/03/04/fin-des-cookies-tiers-google-abandonne-entierement-le-ciblage-individuel/).
````

e) Si Google représente plus de 90% des parts de marché dans le domaine des moteurs de recherche, des services concurrents existent. Proposer aux élèves, en petits groupes, de rechercher des alternatives à Google et déterminer quels sont leurs modèles économiques et leurs spécificités.

````{dropdown} **Réponse**
**Bing** : Élaboré par Microsoft, il est le deuxième moteur de recherche après Google (environ 2-3% de part de marché). Bing vend des espaces publicitaires ciblés et collecte donc les données de ses utilisateurs. La portée de ce traçage est toutefois moins importante que celle de Google, qui dispose d’une infrastructure plus importante. Bing fournit aussi ses services de recherche et publicité à d’autres sites et applications partenaires.

**Qwant** : Moteur de recherche français axé sur le respect de la vie privée, Qwant affirme ne pas pister ses utilisateurs et proposer des résultats de recherche non personnalisés. Si le moteur est financé par la publicité, celle-ci serait basée uniquement sur le mot-clé recherché par l’internaute et non sur des informations liées à son profil. Qwant est cependant régulièrement pointé du doigt pour son partenariat avec Microsoft et son moteur de recherche Bing, dont sont issus une large part des résultats. Malgré un important soutien politique de l’État français et un chiffre d’affaires en progression, Qwant était encore déficitaire en 2020.

**DuckDuckGo** : Meta-moteur qui agrège les résultats de nombreux moteurs de recherche. Comme Qwant, DuckDuckGo ne propose pas de résultats personnalisés selon le profil des utilisateurs et se positionne comme défenseur de la vie privée. Son financement repose également sur la publicité non-ciblée. Selon DuckDuckGo, il n’est pas nécessaire de [«pister» les internautes pour leur proposer des résultats pertinents](https://spreadprivacy.com/duckduckgo-revenue-model/). 

**Ecosia** : Moteur de recherche allemand qui investit 80% de ses bénéfices dans des projets de reforestation, principalement en Amérique du sud et en Afrique. Les résultats du moteur de recherche et les annonces sont générés par Bing. Ecosia reverse un pourcentage de ses gains publicitaires à Microsoft.
````

**Activité complémentaire** (🕑 20 min)

Le chercheur de l’EPFL Frédéric Kaplan parle de [«capitalisme linguistique»](https://fkaplan.wordpress.com/2011/09/07/google-et-le-capitalisme-linguistique/) pour décrire ce système d’enchères. Selon vous, que signifie cette notion?

````{dropdown} **Réponse**
Google a créé un véritable système de monétisation du langage. Si chaque requête sur le moteur de recherche génère une enchère, on peut imaginer l’ampleur des gains obtenus. Le prix des mots peut varier selon différents facteurs, tout comme le cours d’une action en bourse. Il s’agit d’une forme de spéculation sur le langage dont Google contrôle l’ensemble des paramètres.
````

Lors de sa campagne pour l’élection présidentielle américaine 2020, le candidat démocrate et milliardaire Michael Bloomberg a dépensé des millions de dollars pour acheter aux enchères de Google le mot «climat» et de nombreux autres termes relatifs au réchauffement climatique.

Quel était l’objectif du candidat?

````{dropdown} **Réponse**
Michael Bloomberg souhaite investir le créneau écologique et ne laisser, sur cette question, aucune visibilité en ligne à d’autres candidats.
````

Cette stratégie permet-elle réellement à Michael Bloomberg de rediriger tous les résultats de recherche sur la question climatique vers son site?

````{dropdown} **Réponse**
La stratégie de Michael Bloomberg ne lui permet en réalité qu’une visibilité partielle, car elle ne concerne que les résultats payants. L’achat de mot-clé n’a pas d’influence sur le référencement naturel, davantage basé sur des critères de pertinence. On peut ainsi estimer que l’achat de mots-clés est nécessaire lorsque le site en question n’est pas suffisamment pertinent pour apparaître naturellement dans les résultats de recherche.

On peut ainsi estimer que l’achat de mots-clés est nécessaire lorsque le site en question n’est pas suffisamment pertinent pour apparaître naturellement dans les résultats de recherche.
````

Quel bilan peut-on tirer de cette stratégie?
````{dropdown} **Réponse**
Malgré le déploiement de moyens considérables, cette stratégie n’a pas permis à Michael Bloomberg d’être élu à la primaire démocrate. Si son échec est certainement dû à de multiples facteurs, l’achat massif d’espaces de publicité en ligne n’aura pas permis d’inverser la tendance. L’efficacité de ce type campagnes en ligne doit donc être relativisée.
````

</div

<br>
<br>


<div align="left"; style="font-size:20px ;color:rgb(0, 0, 0); font-family:helvetica">
  <b>2. Le travail ubérisé</b>
</div>

<br>

**A. Travailler pour une application** 

🕑 30 min | ✍️ débranché

Faire visionner [l'épisode 1 "Roulez jeunesse"](https://www.youtube.com/watch?v=ST_KVB6bEdw) (0’00’’- 8’20’’) de la série *Invisibles. Les travailleurs du clic* consacré aux livreurs Uber Eats (France TV).

Poser les questions suivantes :

a) Présentez en quelques mots le modèle économique de Uber Eats.

````{dropdown} Réponse
Uber Eats est une plateforme en ligne qui propose des livraisons de repas. L’application met en relation livreurs, clients et restaurants partenaires. L’entreprise prend une commission sur chaque commande, à la fois auprès du restaurant (env. 30%) et du client. Sur le modèle de la maison mère Uber, les livreurs de Uber Eats ne sont pas des salariés, mais des indépendants payés à la course. Ce système permet à Uber Eats de disposer d’une base importante de livreurs tout en ne rémunérant que les commandes passées.
````

b) En quoi le modèle économique de Uber Eats n’est-il pas soutenable pour les livreurs?

````{dropdown} Réponse
Les sommes versées aux livreurs pour leurs courses ne permettent pas d’obtenir un salaire décent. L’un des coursiers parle d’environ 400 Euros pour 60 heures de disponibilité par semaine, avant déductions (le salaire minimum en France est d’environ 1500 Euros). Les livreurs n’étant payés que lorsqu’ils effectuent une course, le temps d’attente n’est pas comptabilisé. Tous les frais (moyen de transport, dépôt de caution pour l’achat du sac et des vêtements «Uber Eats», réparation des pneus, abonnement de téléphone) sont à leur charge et ils ne disposent d’aucune prestation sociale (assurance accident, cotisations retraite, etc.). Par ailleurs, les exigences de la plateforme sont de plus en plus difficiles à remplir, comme le témoigne un livreur, qui a troqué son vélo contre un scooter plus rapide.
````

c) Quelles sont les données produites par les livreurs et en quoi sont-elles utiles à Uber?

````{dropdown} Réponse
Les livreurs produisent des données dès qu’ils sont connectés à l’application. Il peut s’agir de données relatives à leurs trajets  (géolocalisation), à leur productivité (nombre de commandes prises en charge) à leur profil (notes des clients et restaurateurs). Uber collecte aussi des informations sur les clients (profil, horaires de commandes, etc.). Toutes ces données permettent d’analyser finement les comportements de chacun pour ensuite adapter les prix en temps réel, proposer des «bonus» aux travailleurs lorsque la demande est importante, ou encore sanctionner les livreurs les moins performants. Par ailleurs, les conditions et la finalité de ce traçage demeurent largement opaques.
````

d) Livreurs, restaurants et particuliers sont notés  : quel est l’objectif de ces évaluations? 

````{dropdown} Réponse
Les livreurs sont notés par les restaurateurs et par les clients, qui sont, eux, notés par les livreurs.Toutes ces données nourrissent les algorithmes d’Uber et lui permettent de rationaliser ses coûts, d’anticiper les flux et d’optimiser sa gestion. 

La notation agit comme moyen de pression sur les livreurs et les restaurateurs, qui sont incités à fournir une prestation rapide et conforme aux attentes du client. Les évaluations donnent une impression d’objectivité mais elles dépendent souvent des émotions et du contexte. Et parfois, elles n’évaluent pas ce qu’elles sont supposées évaluer. Par exemple, un livreur qui apporte un repas mal emballé par un restaurant pourra être sanctionné par le client.

Pour aller plus loin  : 

 * L’épisode «Chute libre» de la série [Black Mirror (saison 3)](https://www.netflix.com/at-en/title/70264888), qui imagine une société où tout le monde note tout le monde.
 
 * Le livre [La nouvelle guerre des étoiles] (https://www.internetactu.net/2020/09/23/peut-on-limiter-lextension-de-la-societe-de-la-notation/) des journalistes Vincent Coquaz et Ismaël Halissat qui enquête sur la «société de la notation»*
````

e) Peut-on dire qu’Uber propose une technologie «innovante»?

````{dropdown} Réponse
L’innovation d’Uber se situe davantage au niveau stratégique que technique. En effet, Uber ne propose pas de réelle innovation technologique. L’entreprise s’appuie sur toute une série de dispositifs qui pré-existaient : cartographie, GPS, téléphone mobile, Internet, paiement en ligne. Par ailleurs, des applications mobiles permettant de commander un taxi étaient déjà disponibles. La force de la plateforme a été de proposer au moment opportun un service qui mobilise des technologies pertinentes, qui corresponde à une certaine demande et qui trouve un contexte politique favorable à son développement.

````

<br>

**B. Réglementer le travail "ubérisé"** 


🕑 30 min | ✍️ débranché

Faire lire [un article](https://www.letemps.ch/economie/geneve-uber-eats-desormais-recourir-employes) du journal Le Temps consacré à la décision du Canton de Genève d'imposer à Uber Eats de salarier ses livreurs. Poser les questions suivantes:

a) Résumez l’article en une phrase.

 ````{dropdown} Réponse
Uber est sommé d’appliquer une décision de justice cantonale en changeant le statut de ses livreurs, d’indépendants à salariés. 
````

b) Expliquez l’importance de cette nouvelle.

```` {dropdown} Réponse
Les livreurs seront désormais – et jusqu’à confirmation par la justice – des employés. C’est-à-dire qu’ils recevront un salaire, seront soumis à des cotisations (AVS, AI, APG…) et auront droit au chômage. Cette décision est importante car elle remet en question le modèle économique sur lequel repose Uber et de nombreuses autres plateformes.
````

c) Quelles peuvent-être les conséquences de ce changement de politique?

```` {dropdown} Réponse
* D’autres cantons – ou pays - peuvent être tentés d’exiger d’Uber Eats le même revirement.

* Les autorités pourraient demander à ce que ce changement s’applique à tous les services Uber, voire à d’autres plateformes.

* Si Uber Eats doit s’ajuster au salaire horaire minimal et assumer les charges sociales de ses travailleurs, comment va-t-elle répercuter ces coûts? La plateforme étant peu rentable avec son modèle actuel, elle risque d’augmenter ses tarifs.
````

c) Quel sens donner au mot «flexibilité» du porte-parole d’Uber ?

```` {dropdown} Réponse
La flexibilité est souvent présentée par ces  entreprises comme une opportunité pour les les livreurs de travailler de façon autonome et sans contrainte horaire. Pourtant, cette flexibilité cache une grande précarité. Aucun revenu n’est garanti aux livreurs et leur indisponibilité (notamment lors des heures creuses) est sanctionnée. La flexibilité semble donc avant tout profiter à l’employeur, qui bénéficie d’une base de livreurs «ajustable» selon le flux des commandes. Le statut d’indépendant de ses travailleurs lui permet de se désengager des responsabilités qui incombent à tout employeur (paiement des prestations sociales, congés payés, majoration des revenus en cas de travail de nuit, etc.). De la même façon, tous les risques normalement assumés par l’entreprise (baisse des commandes, accidents, maladies, etc.) sont reportés sur les livreurs.

Si Uber se présente comme une entreprise «mondiale» et sans territoire, elle se déploie pourtant dans des espaces culturels particuliers. Sa vision libérale de la flexibilité se heurte donc nécessairement à des environnements politiques divers, qui ne partagent pas toujours cette perspective.
````
