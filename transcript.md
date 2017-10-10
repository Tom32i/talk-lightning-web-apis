# Web APIs Insoupçonnées

- Quelques APIs web que vous ne connaissieez peut-être pas

## Présentation

## Sous titre

- Sous-Titre : API HTML5 vidéo fournit une gestion des sous-titre. Elle permet plus que de simplement charger un fichier de sous-titre. 
- On peut gérer tout un tas de propriétés. Alignement, position dans l'écran, ...
- Construire le sous-titres de toutes pièce : timecode d'entrée, sortie, feuille de style. 
- Aucun interêt à part si vous faite un éditeur de sous-titre

## Battery

- Viens dans une promise (!?)
- Booléan "en charge" + time to charge (uniquement dans chrome)

## Gamepad

- Support des manette de Xbox
- evenement à la connexion
- Booléen sur tout les boutons
- Valeur float pour les bouton analogiques (pad, gachette)
- 4 manettes max

## Visibilité de l'onglet

- couper la pub ? #dontBeEvil

## Notifications

- Les seuls l'utiliser sont les site de news (pourquoi ?!)
- demande l'autorisation:`=== "granted"`
- option logo, ect

## Synthèse vocale

- Changement de voie
- Pitch
- Seule des API sonore qui fait du son même si le son de l'onglet est coupé "c'est cadeau"

##  Java?

- Très utile si vous êtes coincé en 1993

## UserMedia

- capture son et vidéo
- necessite l'autorisation de l'utilisateur
- flux à afficher dans une video HTML / ou retransmettre sur websocket

##  Nombre de coeur

- nombre de coeur sur la machine
- le tunning facon JS
- Service worker / multi-threading
- à mettre à coté du compteur de visiteur 

## Drag and drop

- Text, Image, Spotify
- Event drop
- Object `datatransfer` qui précise son mime-type (ex de spotify)
- A toi de jouer!

##  Géolocalisation

- Livraison de bouffe
- Demande l'autorisation de l'utilisateur
- un `get` et un `watch`

## Device orientation

- demo ("ne refaite pas ça à la maison")
- necessite un gyroscope (mobile)
- ne demande pas l'authorisation
- anecdote: macbook pro HDD 
- event `deviceOrientation` + tois angle `alpha`, `beta`,`gama`