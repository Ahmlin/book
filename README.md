# Informatique au Gymnase / Pilote

![chatbot](https://user-images.githubusercontent.com/73947555/117774857-301d3580-b23a-11eb-9657-2eeebb19fde3.png)


## Introduction

Des moyens d'enseignement pour l'informatique en discipline obligatoire au niveau Secondaire II ont été produits par un groupe de travail issu d'une collaboration entre la DGEP, l'EPFL, la HEP et l'UNIL. Dans le cadre de l’introduction de cette discipline, prévue à la rentrée 2022 dans le canton de Vaud, l'objectif de ces ressources est de proposer aux enseignant·e·s d'informatique des contenus théoriques, des séries d'exercices et des idées d'activités.

En accord avec la DGEP, une partie de ce matériel est déjà mise à disposition des enseignant·e·s vaudois·e·s pour une première phase pilote.

Les ressources sont accessibles via le [site web](https://edunumsec2.ch). Elles peuvent être utilisées telles quelles ou modifiées via un [dépôt GitHub](https://github.com/edunumsec2/book).

## Table des matières

---

- [Introduction](#introduction)
- [Utilisation](#utilisation)
- [Documents importants](#documents-importants)
- [Chapitrage](#chapitrage)
- [Licence du projet](#licence-du-projet)
- [Installation](#installation)
  - [Installation recommandée](#installation-recommandée)
  - [Installation Ubuntu 20.04 LTS](#installation-ubuntu-20.04-lts)
  - [Références](#références)
  - [Build](#build)
- [Exemples d'utilisation des ressources](#exemples-dutilisation-des-ressources)
  - [Utilisation en ligne](#utilisation-en-ligne)
  - [Modifications indépendantes](#modifications-indépendantes)
  - [Participation au développement](#participation-au-développement)


### Votre avis et ceux de vos élèves sont importants

En tant que membre du projet pilote, nous vous remercions par avance pour votre participation au processus d’enquête. Les données recueillies permettront d'évaluer la pertinence des contenus afin de réaliser les ajustements nécessaires. La démarche porte uniquement sur les ressources et les élèves, il ne s'agit en aucun cas d'évaluer la qualité de l'enseignement dispensé. Toutes les données seront traitées de façon confidentielle. En dernier lieu, ces données agrégées et anonymisées feront l'objet d'analyses statistiques à la fin de chaque semestre. 
  

## Utilisation

L'utilisation **standard** des ressources ne requiert pas d'installation particulière et peut-être effectuée immédiatement à l'adresse https://edunumsec2.ch. 

Dans le cadre du projet pilote, nous vous saurions gré de suivre le protocole minimal décrit ci-dessous :  

1. Participer aux sondages suivants (30 min) : 
    - questionnaires élève et enseignant de début d'année (en attente de formatage avec les données de classes et de gymnase pour la rentrée)
    - [Besoin en termes de formations](https://fr.surveymonkey.com/r/27QW723)

2. Ecrire à nathalie.farenc@epfl.ch pour la tenir informée du début et de la fin d'un cours donné sur l'un ou l'autre des sujets du Plan d'études.
3. Signaler tout défaut éventuel des ressources à nathalie.farenc@epfl.ch ou directement à la personne en charge de la thématique en question, dont vous trouverez l'adresse sous [comité de rédaction](#comité-de-rédaction).

L'utilisation **avancée** des ressources comprend, en outre, les étapes suivantes : 

4. Utiliser les fonctionnalités de GitHub telles que [issues](https://github.com/edunumsec2/book/issues) et [discussions](https://github.com/edunumsec2/book/discussions) pour signaler des améliorations potentielles. 

Après la phase **pilote**, les enseignant.es pourront en outre : 

6. Proposer et rédiger des modifications via la création d'une [branche](https://github.com/edunumsec2/book/branches). 
7. Forker le dépôt pour en faire un clône indépendant via le mécanisme de [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo). 
8. Utiliser l'environnement [Jupyter-book](#installation) pour tester ses améliorations en local sur sa propre machine. 

## Documents importants

* [Plan d'études](http://files.edunumsec2.ch/pe.pdf) pour l'informatique discipline obligatoire. 
* [Livret de cours](http://files.edunumsec2.ch/livret.pdf) décrivant le découpage du plan d'études dans le détail. 

## Chapitrage

Les ressources sont découpées selon un chapitrage qui correspond au plan d'études romand (ajouter réf). Elles sont divisées en quatre parties, dont nulle n'a de préseance sur les autres. Il appartient à l'enseignante ou l'enseignant de choisir l'ordre dans lequel les contenus sont abordés. Le fait que les chapitres soient successifs est le résultat des limitations de l'affichage. Pour atténuer quelque peu ce problème nous avons choisi de renoncer à une numérotation des chapitres. 

[Représentation de l'information](http://eleve.edunumsec2.ch/content/theme/representation-information/accueil/eleve.html)
: Où il est question du passage du système décimal au *système binaire*, ainsi que des problématiques de traitement des données telles que *l'encodage*, *la compression*, *l'échantillonnage*, *le cryptage*, et la *représentation des caractères, des images et des sons* sous forme de bits. 

[Algorithmique I](http://eleve.edunumsec2.ch/content/theme/introduction-algorithmique/accueil/eleve.html)
: Ce chapitre propose une *définition générale de l'algorithmique*, ainsi qu'une présentation de certains *algorithmes classiques*. 

[Programmation I](http://eleve.edunumsec2.ch/content/theme/programmation/accueil/eleve.html)
: Après avoir présenté un échantillon de langages de programmation et leurs différences respectives, ce chapitre *pose les bases du language Python*. 

[Architecture des ordinateurs](http://eleve.edunumsec2.ch/content/theme/architecture-ordinateurs/accueil/eleve.html)
: Il est question ici de notions telles que *les portes logiques*, *les transistors*, *l'architecture de Von Neumann*, et autres concepts essentiels à la compréhension de ce qui se passe au niveau physique et électronique dans un ordinateur.


## Licence du projet

Les ressources sont publiées sous licence Creatives Commons *Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions (CC BY-NC-SA)*. Cela signifie qu'elles peuvent être copiées, transformées, adaptées, et diffusées, hormis à des fins commerciales, tant qu'elles créditent le groupe de travail présenté ci-dessus, et qu'elles utilisent la même licence pour le partage futur. Les conditions sont disponibles [ici](https://creativecommons.org/licenses/?lang=fr). 

![](docs/media/by-nc-sa.png)

Toute personne qui réutilise les ressources est priée de le faire de la façon suivante : 

* 💰 Pas d'utilisation commerciale. 
* ♻️ Possibilité de modifier les ressources à souhait. 
* 📗 Crédit : "Par le groupe de travail DGEP, EPFL, HEP, UNIL". 
* 🤝 Partage selon les mêmes conditions. Donc en ajoutant simplement le logo ci-dessus pour toute publication éventuelle. 

## Installation 

⚠️ *Attention : l'installation qui suit N'EST PAS nécessaire dans le cadre du projet pilote. Elle figure ici à titre informatif pour celles et ceux qui souhaitent comprendre l'architecture globale du projet et veulent avoir une idée de l'intégralité des possibilités qu'offre un modèle de projet open-source. Après la première année de pilote, et compte tenu des retours qui auront été faits, le projet se déployera entièrement, et les enseignant.es d'informatique auront tout le loisir d'installer l'environnement ci-dessous et de s'amuser à leur guise avec la documentation open-source de ce dépôt GitHub.* 

Pour ceux et celles qui souhaitent utiliser l'environnement Jupyter Book pour tester des contenus et participer au développement, la marche à suivre est la suivante : 

### Installation recommandée

 1. Seulement si pas encore présent: [installer git](https://git-scm.com/downloads) sur votre machine
   * Sous Windows, il faut activer les symlinks de git. Après l'installation de git, éditer le fichier `C:\ProgramData\Git\config` et y insérer:

     ```
     [core]
         symlinks = true
     ```

     ([Plus d'info](https://www.joshkel.com/2018/01/18/symlinks-in-windows/) si ça ne marche pas sous Windows.)

 2. Cloner ce repository git
    * Soit depuis un terminal avec les commandes directes de `git`
    * Soit avec application [GitHub Desktop](https://desktop.github.com)

 3. Installer une version récente (3.x, x ≥ 8) de **Python**
    * [Téléchargement](https://www.python.org/downloads/)
      * Pour macOS, un excellent tuto si l'installation pose problème (mais il faut bien lire la deuxième partie): [Tuto](https://opensource.com/article/19/5/python-3-default-mac#what-to-do)<sup>1</sup>

 4. Installer [Jupyter Book](https://jupyterbook.org).  Ceci **met aussi à jour** Jupyter Book lorsqu'une nouvelle version est disponible. Si l'équipe de rédaction utilise de nouvelles fonctions de Jupyter Book, il faut faire retourner ceci pour l'obtenir.
    * Avec Python 3.9:
      ```bash
      pip3.9 install -U jupyter-book
      ```
      * [Instructions complètes](https://jupyterbook.org/intro.html#install-jupyter-book) si la version ci-dessus ne marche pas

 5. Installer [Visual Studio Code](https://code.visualstudio.com) 
    * Permer d'éditer le Markdown et le format Jupyter (et le format YAML pour la config, si nécessaire)
    * Fournit des boutons pour produire l'output sans passer par le terminal

 6. Ouvrir le fichier `workspace.code-workspace` dans VS Code
    * L'installation des extensions suivantes de VS Code sera proposée:
      * `ms-python.python` pour avoir un éditeur/linter Python
      * `ms-toolsai.jupyter` pour ouvrir et éditer des fichier Jupyter `*.ipynb`
      * `redhat.vscode-yaml` pour éditer des fichiers de configuration YAML
      * `executablebookproject.myst-highlight` pour utiliser la syntaxe Markdown étendue prise en charge par `jupyter-book`
      * `seunlanlege.action-buttons` pour avoir des boutons directement dans VS Code pour faire un build
      * `ban.spellright` pour une correction orthographique de base dans VS Code
      
      Accepter l'installation de ces recommandations à l'ouverture du workspace:
      
      ![](docs/media/extension_recommendations.png)

    * Si l'installation des extensions ne vous est pas proposée, le faire manuellement via l'interface graphique de VS Code ou via le terminal:
      ```bash
      code --install-extension <extension-id>
      ```
<sup>1</sup> *Note de Philippe: J'ai pris la version 3.9.0 et tout ce qui suit fonctionne parfaitement.*

### Installation Ubuntu 20.04 LTS

* Cloner le dépôt  dans un dossier de votre choix

```bash
# install git if needed
sudo apt install -y git

# clone in the directory of your choice
cd {BASE_FOLDER}
git clone https://github.com/edunum-sec2/ressources.git
cd ressources
```

* Lancer le script d'installation

```bash
./install_ubuntu.sh
```

### Références

* Syntaxe Mardown utilisée: [MyST](https://jupyterbook.org/reference/glossary.html#term-MyST)


### Build

**Pour produire l'output HTML statique depuis les fichiers source**

Avec VS Code si installé comme ci-dessous, cliquer sur un des boutons en bas de la fenêtre:

![](docs/media/build_screenshot.png)

Sinon, via le terminal. Pour la partie élèves:

```bash
cd <dossier-du-checkout>/edunum-sec2/config/eleve
jupyter-book build .
```

Pour la partie enseignant·e·s:

```bash
cd <dossier-du-checkout>/edunum-sec2/config/maitre
jupyter-book build .
```

Ouvrir ensuite le fichier `_build/html/index.html`, par exemple (macOS):

Si nécessaire (erreurs, vieux fichiers qui traînent dans `_build`):

```bash
cd <dossier-du-checkout>/edunum-sec2/config/eleve
# ou:
cd <dossier-du-checkout>/edunum-sec2/config/maitre

#puis:
jupyter-book clean .
```

## Exemples d'utilisation des ressources

### Utilisation en ligne

1. Je me rends sur https://edunumsec2.ch
2. Je navigue à travers les différents chapitres du cours. 
3. Si une information m'intéresse, par exemple une anecdote historique, un angle d'attaque pour une notion, un exemple particulier, voire même une séquence entière de cours théorique, je prends des notes et la réutilise à souhait dans mes leçons. 
4. Je parcours les idées d'activité et je choisis celles qui m'intéressent. 
5. J'utilise les séries d'exercices à disposition comme "devoirs" pour mes élèves. 
6. Je demande à mes élèves de lire certains chapitres en préparation des cours. Je reprends les notions essentielles en classe.  

### Modifications indépendantes

1. Si certains contenus m'intéressent mais que je considère qu'ils pourraient être transformés pour être plus efficaces, je peux à tout moment aller consulter les fichiers sources. 
2. Je reviens sur ce dépôt Github.
3. Je retrouve le chapitre qui m'intéresse. 
4. Je télécharge le fichier source. 
5. Je le retravaille pour en faire ma propre version. 

### Participation au développement

1. Je me réfère au chapitre [installation](#installation). 
2. Une fois que l'environnement est installé, plusieurs options s'offrent à moi. 
3. Je peux travailler à l'amélioration des ressources en tant que *correcteur*. Dans ce cas, j'utilise les fonctions [issues](https://github.com/edunumsec2/book/issues) et [discussions](https://github.com/edunumsec2/book/discussions) de Github et je propose des améliorations ou des modifications qui me paraissent importantes. 
4. Je peux travailler en tant que *rédacteur*. Dans ce cas je crée une branche, je propose des contenus originaux à l'intérieur d'un chapitre - séquences théoriques, activités, séries d'exercices, et je les soumets aux autres utilisateurs pour validation via un pull-request.

## Comité de rédaction

- Représentation de l'information : David Da Silva - Gymnase de Chamblandes & Javier Iglesias - Gymnase de Renens
- Algorithmique : Biljana Petreska - Gymnase d'Yverdon & Micha Hersch Gymnase de Renens / HEP
- Programmation : Raphaël Holzer - Gymnase du Bugnon & Gilles Racine - Gymnase de Sevelin
- Architecture des ordinateurs : Philippe Rochat - Gymnase de Morges & Jean-Philippe Pellet - HEP
- Enjeux sociaux : Virginia Haussauer - EPFL & Franck Dayen - Gymnase de Morges 
- Plateforme : Romain Edelmann - EPFL & Grégoire Gavin - EPFL
- Charte éditoriale, plateforme, rédaction : Elliot Vaucher - EPFL
- Coordination : Nathalie Farenc - EPFL


