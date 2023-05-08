* J'ai utilisé une base de données H2 (fonctionnement en "in memory")

* Une fois l'application démarrée, vous pouvez aller sur l’URL “http://localhost:9000/h2-console”. Une fenêtre de login s’ouvre, et il est nécessaire d’indiquer l’URL Jdbc (qui change à chaque démarrage de l’application). 

 Dans la console, vous aurez une ligne qui ressemble à la suivante : 
 H2 console available at '/h2-console'. Database available at 'jdbc:h2:mem:7b633a59-de3c-49c6-9d6e-4ff52afed4a6'.
 
 L'URL JDBC, c'est cette partie là : 'jdbc:h2:mem:7b633a59-de3c-49c6-9d6e-4ff52afed4a6'
 
* Une fois connecté, vous pouvez ajouter l'instruction INSERT du fichier src/main/java/ressources/data.sql pour avoir 4 enregistrements pour commencer.
