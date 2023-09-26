# Test Technique - Front

## Contexte

L'entreprise souhaite mettre en place un blog permettant d'échanger sur des astuces et des informations avec
le monde extérieur. Pour ça l'api a déjà été développée et vous devez fait l'application front.

## Déroulé du projet (suggestion)

1. Faire le frontoffice de consultation des posts non connecté (une page qui liste les posts, et une page de
   consultation). (GET /api/posts et GET /api/posts/{id})
2. Mettre en place tous tests qui vous semble important (unitaire, e2e, etc...)
3. Gérer l'authentification grâce au jwt token (POST /api/token)
4. Faire le backoffice, crud administateur permettant de gérer les posts. (.... /api/posts...) et également leurs
   transitions : (... /api/posts/../transition)
5. Faire le backoffice, crud administateur permettant de gérer les users. (.... /api/users...)

## Utilisation de l'api

- Toutes les informations du projet sont accessibles
  ici : [https://tt-front.duplessy.eu/](https://tt-front.duplessy.eu/)
- La documentation de l'api est accessible
  ici : [https://tt-front.duplessy.eu/api/docs](https://tt-front.duplessy.eu/api/docs)
  , également disponible au format json openapi
  ici : [https://tt-front.duplessy.eu/api/docs.json](https://tt-front.duplessy.eu/api/docs.json)
  et au format
  redoc : [https://tt-front.duplessy.eu/api/docs?ui=re_doc](https://tt-front.duplessy.eu/api/docs?ui=re_doc)
- Des fixtures peuvent êtres remises à zéro
  ici : [https://tt-front.duplessy.eu/reset](https://tt-front.duplessy.eu/reset)
- Dans les fixtures de bases ce trouvent deux utilisateurs qui seront toujours présent (le reste étant aléatoire) :
  - email: admin@findly.co password: password
  - email: user@findly.co password: password
- Seul la récupération des posts et d'un post n'est accessible or connection. Pour les autres vous devrez inclure dans
  votre requête un token jwt (Autorization: Bearer YOUR_TOKEN)

## Technologies autorisés

Tout langage, librairies sont autorisées, mais attention d'avoir des choix cohérents. La seule obligation est
l'utilisation de Git pour le versionning.

## Points importants:

- Il n'est pas obligatoire de finir à 100% le projet
- Ne pas hésiter à documenter son travail, pour que l'on puisse comprendre les intentions.
- L'UX et l'UI du site sont en bonus
