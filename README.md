# BlogWS_-Beatini-Comba
Projet web blog javascript

Pré-requis : 

_ Télécharger netbeans version 8.x
_ Posséder Glassfish version 4.1 minimum

Marche à suivre pour utiliser notre projet : 

1. Créer un dossier portant comme nom : BlogWS2015
2. Cloner le contenu du dépôt git dans ce dossier
3. Importer le projet avec netbeans
4. Supprimet le fichier persistance.xml présent dans le dossier Configuration files
5. Supprimer le fichier sun-resources.xml présent dans le dossier Server Resources
6. Faites un clic droit sur le projet sous netbeans et faites New -> Persistence Unit
7. Créer votre nouvelle persistence avec votre base de données
8. Renommer glassfish-resources en sun-resources dans le dossier Server Resources
9. Aller dans le dossier Sources Packages et dans le package service et entrer dans le fichier JerseyFileUpload.java
10. Modifier l'url de la variable SERVER_UPLOAD_LOCATION_FOLDER et insérer le dossier qui contiendra les images 
qui seront uploader

ENJOY !


Notre projet permet d'écrire des articles accompagnés d'une ou plusieurs images.
Vous devez obligatoirement remplir les champs Titre et Contenu.
Vous pouvez insérer les images soit par clic sur le bouton "parcourir", soit en les glissants dans le canvas orange.
Cliquez sur Envoyer lorsque vous avez fini d'écrire votre article.




