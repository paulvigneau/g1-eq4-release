# Task 1

Il y a 3 Definition Of Done :
- GEN :
  - La tâche a été implémentée. `I`
  - La tâche a été revue par les pairs. `R`
  - L’ensemble des ajouts ont été push sur le dépôt de développement. `P`
- DEV :
  - L’ensemble des fonctionnalités a été implémenté. `I`
  - L’ensemble des fonctionnalités a été revu par les pairs. `R`
  - L’ensemble des tests a été implémenté pour vérifier les différents scénarios d’utilisation et sont passés. `T`
  - L’ensemble des fichiers de code a été push sur le dépôt de développement. `P`
- TEST :
  - Le scénario de test a été rédigé. `S`
  - Le scénario de test a été revu par les pairs. `SR`
  - Le test a été implémenté. `I`
  - Le test a été exécuté et est passé. `T`
  - Le test a été revu par les pairs. `TR`
  - Le test a été push sur le dépôt de développement. `P`
  - Le résultat du test a été archivé. `A`

Chaque tâche a une de ces trois DOD qui lui est attribuée. Pour suivre l'évolution d'une tâche, on écrit dans la colonne DOD le nom de la DOD ainsi que les lettres de la checklist qui ont été réalisées.

| ID | Description | Coût (durée/homme) | US liées | Dépendances | Phase d’avancement | DOD | Développeur |
|:-:|-|-|:-:|:-:|:-:|:-:|:-:|
| #1 | Créer une application NodeJS avec les modules express et ejs. | 30min | Toutes | Aucune | TODO | GEN | / |
| #2 | Ajouter docker au projet et y intégrer une base de données MongoDB. | 1h | Toutes | #1 | TODO | GEN | / |
| #3 | Ajouter le module eslint au projet et créer un fichier .eslintrc contenant les règles de codage. | 30min | Toutes | #1 | TODO | GEN | / |
| #4 | Configurer l’exécution automatique des tests sur GitHub grâce à GitHub Actions. | 30min | Toutes | #1 | TODO | GEN | / |
| #5 | Créer un fichier style.css regroupant les spécifications générales du site.  | 1h | Toutes | #1 | TODO | GEN | / |
| #6 | Créer un fichier not-found.ejs affichant le message “La page recherchée n’existe pas”. | 30min | Toutes | #1 | TODO | GEN | / |
| #7 | Créer une route GET /404 qui affiche le contenu de la page not-found.ejs. | 20min | Toutes | #1 | TODO | GEN | / |
| #8 | Créer un fichier projects.ejs qui va pour chaque projet récupéré afficher un bloc avec le nom du projet. | 30min | US1 | #1 | TODO | DEV | / |
| #9 | Créer le Gherkin displayProjects du scénario suivant : lors du chargement de la page /projects, on a bien des blocs qui s'affichent correspondant au nombre de projets récupérés. | 30min | US1 | #1 | TODO | GEN | / |
| #10 | Implémenter le test Selenium du Gherkin displayProjects dans le fichier projects.test.js. | 30min | US1 | #8, #9, #12 | TODO | TEST | / |
| #11 | Créer la fonction getAllProjects dans le fichier models/project.js qui récupère en base de données tous les projets (sauf la partie management) et retourne l’ensemble sous forme de tableau. | 20min | US1 | #2 | TODO | DEV | / |
| #12 | Créer une route GET /projects dans le fichier routes/projectsRoutes.js qui va appeler la fonction getAllProjects de models/project.js et qui affiche la page projects.ejs en lui passant les données.  | 20min | US1 | #11 | TODO | DEV | / |
| #13 | Implémenter un test qui envoie une requête GET sur /projects et qui vérifie que tous les projets stockés en base de données sont bien récupérés. | 30min | US1 | #12 | TODO | TEST | / |
| #14 | Créer un fichier newProject.ejs avec dedans un formulaire HTML demandant de rentrer un nom (string), description (string), date de début (date-format) et date de fin (date-format). Ce formulaire envoie une requête POST à l'URL /project quand on clique sur le bouton "Créer" et ferme la popup à condition que tous les champs soient correctement remplis, sinon un message d’erreur détaillé s’affiche. | 30min | US2 | #1 | TODO | DEV | / |
| #15 | Ajouter dans le fichier projects.ejs un bouton "Nouveau projet" qui quand on clique dessus ouvre une fenêtre popup avec le contenu du fichier newProject.ejs. | 20min | US2 | #8 | TODO | DEV | / |
| #16 | Créer le Gherkin createProject du scénario suivant : cliquer sur le bouton “Créer un nouveau projet” depuis la page /projects. Une popup s’ouvre, on entre les champs nom, description, date de début et date de fin puis on clique sur le bouton “Créer” et on vérifie qu’un nouveau bloc est ajouté avec le nom du nouveau projet. | 30min | US2 | #1 | TODO | GEN | / |
| #17 | Implémenter le test Selenium du Gherkin createProject dans le fichier projects.test.js. | 30min | US2 | #15, #16, #19 | TODO | TEST | / |
| #18 | Créer la fonction addProject dans le fichier models/project.js qui ajoute en base de données le projet passé en paramètre. | 30min | US2 | #2 | TODO | DEV | / |
| #19 | Créer une nouvelle route POST /project dans le fichier routes/projectsRoutes.js qui crée un objet avec les informations passées dans le corps de la requête : nom (string), description (string), date de début (date-format) et date de fin (date-format) et qui appelle la fonction addProject de models/project.js en le lui passant en paramètre. | 30min | US2 | #18 | TODO | DEV | / |
| #20 | Implémenter un test qui envoie une requête POST à l’URL /project avec dans le corps de la requête un nom (string), description (string), date de début (date-format) et date de fin (date-format) et vérifie en base de données qu’une nouvelle entrée à bien été ajoutée pour les projets avec les bonnes informations. | 30min | US2 | #19 | TODO | TEST | / |
| #21 | Créer la fonction findProjectById dans le fichier models/project.js qui récupère le projet dont l’id est passé en paramètre et le retourne (sans sa partie management). | 20min | US3 | #2 | TODO | DEV | / |
| #22 | Créer une route GET /projects/:id dans le fichier routes/projectsRoutes.js qui appelle la fonction findProjectById et qui affiche la page project.ejs en lui passant le projet récupéré. Si le projet n’existe pas, rediriger vers /404. | 20min | US3 | #21,  #7 | TODO | DEV | / |
| #23 | Implémenter un test pour la route GET /projects/:id en donnant un id existant et qui vérifie que les données du projet sont bien récupérées. | 20min | US3 | #22 | TODO | TEST | / |
| #24 | Créer un fichier project.ejs affichant les données d’un projet, à savoir son nom, sa description, les dates de début et de fin du projet, le numéro du sprint en cours, le pourcentage de tâches réalisées. | 30min | US3 | #1 | TODO | DEV | / |
| #25 | Créer le Gherkin displayProject du scénario suivant : Cliquer sur un projet déjà créé depuis l’URL /projects et vérifier que la page affiche bien les données d’un projet soit son nom, sa description, les dates de début et de fin du projet, le numéro du sprint en cours, le pourcentage de tâches réalisées ainsi que la liste de ses membres avec pour chacun la présence de son nom, son rôle, son email, sa couleur. | 20min | US3 | #1 | TODO | GEN | / |
| #26 | Implémenter le test Selenium du Gherkin displayProject dans le fichier project.test.js. | 30min | US3 | #22, #24, #25 | TODO | TEST | / |
| #27 | Créer le Gherkin displayNonexistentProject du scénario suivant : Envoyer une requête GET /projects/:id en donnant un id de projet qui n’existe pas et vérifier que l’on est bien redirigé vers la page /404. | 20min | US3 | #1 | TODO | GEN | / |
| #28 | Implémenter le test Selenium du Gherkin displayNonexistentProject dans le fichier project.test.js. | 20min | US3 | #22, #24, #27 | TODO | TEST | / |
| #29 | Ajouter dans la page projects.ejs le fait que les blocs des projets soient cliquables et que lors d’un clic sur un bloc, on soit redirigé vers l’URL /projects/:id avec l’id du projet en question. | 30min | US3 | #8 | TODO | DEV | / |
| #30 | Ajouter dans le fichier project.ejs le fait que la page affiche la liste des membres ainsi que leur détail sous forme de liste, à savoir le nom du membre (string), son rôle (string), son email (string), sa couleur (couleur hexadécimale). | 30min | US4 | #24 | TODO | DEV | / |
| #31 | Créer la page newMember.ejs qui affiche un formulaire HTML contenant les champs nom (string), rôle (liste déroulante proposant les rôles : Product Owner, Testeur, Développeur) et email (string au format mail). Le formulaire envoie une requête POST à l'URL /projects/:id/member quand on clique sur le bouton "Ajouter" et ferme la popup à condition que tous les champs soient correctement remplis, sinon un message d’erreur détaillé s’affiche. | 30min | US5 | #1 | TODO | DEV | / |
| #32 | Créer le Gherkin addMember dans le fichier project.feature du scénario suivant : Cliquer sur le bouton “Ajouter un membre” depuis la page /projects/:id puis remplir les champs suivants : nom du membre, rôle, email. Vérifier ensuite que la page /projects/:id contient les informations du nouveau membre : son nom, son rôle, son email, sa couleur hexadécimale.  | 20min | US5 | #1 | TODO | GEN | / |
| #33 | Implémenter le test Selenium du Gherkin addMember dans le fichier project.test.js. | 30min | US5 | #31, #32, #36 | TODO | TEST | / |
| #34 | Ajouter dans le fichier project.ejs un bouton “Nouveau membre” qui déclenche l’ouverture d’une fenêtre popup avec le contenu de la page newMember.ejs. | 20min | US5 | #30 | TODO | DEV | / |
| #35 | Créer la fonction addMember dans le fichier models/member.js qui ajoute au projet dont l’id est passé en paramètre un nouveau membre passé en paramètre aussi. | 20min | US5 | #2 | TODO | DEV | / |
| #36 | Créer une nouvelle route POST  /projects/:id/member dans le fichier routes/projectsRoutes.js qui appelle la fonction addMember de models/member.js avec en paramètre l’id du projet et un objet membre créé à partir des informations passées dans le corps de la requête : nom (string), rôle (string ayant pour valeur uniquement Product Owner, Testeur, Développeur) et email (string au format mail) ainsi qu’une couleur générée aléatoirement au format hexadécimal. | 30min | US5 | #35 | TODO | DEV | / |
| #37 | Implémenter un test qui envoie une requête POST à l’URL /projects/:id/member avec dans le corps de la requêtes un nom (string), rôle (string ayant pour valeur uniquement Product Owner, Testeur, Développeur) et email (string au format mail) et vérifie en base de données qu’une nouvelle entrée à bien été ajoutée pour la liste des membres du projet avec les bonnes informations ainsi qu’une couleur au format hexadécimal. | 30min | US5 | #36 | TODO | DEV | / |
| #38 | Ajouter dans la définition de la route POST  /projects/:id/member dans le fichier routes/projectsRoutes.js l’appel à la fonction sendEmailToNewMember du fichier /models/member.js au moment de l’ajout du membre en base de données. | 5min | US6 | #36 | TODO | DEV | / |
| #39 | Créer une fonction sendEmailToNewMember(project, member) dans le fichier /models/member.js qui envoie un email à l’adresse email (member.email) correspondant au membre passé. Il contient le nom du projet (project.name), la date d’ajout (date d’aujourd’hui), le nom que l’on m’a donné (member.name) ainsi que l’URL du projet. | 30min | US6 | #1 | TODO | DEV | / |
| #40 | Implémenter le test en Selenium de sendMailNewMember dans le fichier member.test.js. Appeler la fonction sendEmailToNewMember qui prend en paramètre un membre, l’id d’un projet et vérifier que l’adresse email du membre reçoit bien un mail contenant le nom du projet, la date d’ajout, le nom du membre ainsi que l’URL du projet. | 45min | US6 | #39 | TODO | TEST | / |
| #41 | Ajouter à la page project.ejs à côté de chaque membre un bouton “Supprimer” envoyant une requête de type DELETE /projects/:id/members/:memberId. Si le code status de la réponse est 404, afficher une pop-up avec pour message le contenu du body de la réponse. Dans le cas où le code status est 200, récupérer le contenu du body et l'afficher comme message dans une pop-up. La pop-up doit contenir un bouton “confirmer” et un bouton “annuler”. En cliquant sur “confirmer”, renvoyer une requête DELETE vers /projects/:id/members/:memberId avec le paramètre “force=true” dans le body. En cliquant sur “annuler”, fermer la pop-up. | 30min | US7 | #30 | TODO | DEV | / |
| #42 | Créer le Gherkin deleteMember dans le fichier member.feature du scénario suivant : Cliquer sur le bouton “Supprimer” à côté d’un membre depuis la page /projects/:id et vérifier que la page ne contient plus les informations du membre supprimé : son nom, son rôle, son email, sa couleur hexadécimale. | 20min | US7 | #1 | TODO | GEN | / |
| #43 | Implémenter le test Selenium du Gherkin deleteMember dans le fichier member.test.js. | 30min | US7 | #41, #42, #45 | TODO | TEST | / |
| #44 | Créer la fonction deleteMember dans le fichier models/member.js qui prend en paramètre l’id du projet et un membre, et qui le supprime de la base de données avec toutes ses données. | 20min | US7 | #2 | TODO | DEV | / |
| #45 | Créer une route DELETE /projects/:id/members/:memberId dans le fichier /routes/projectRoutes.js qui récupère un membre en fonction de son id et de celui de son projet. Si l’id est incorrect, retourner le code 404 avec un message d’erreur dans le body. Dans le cas contraire récupérer le paramètre “force” dans la requête. S’il a pour valeur “false”, dans le cas où le membre à supprimer n’est lié à aucune tâche dans la base de donnée, placer dans le body de la réponse un message demandant confirmation de la suppression du membre, et appelle ensuite la fonction deleteMember. Dans le cas où le membre est lié à une ou plusieurs tâche(s), le message à placer dans le body doit expliquer les conséquences de la suppression de ce membre et demander confirmation. Dans les deux cas renvoyer le code status 200. | 30min | US7 | #44 | TODO | DEV | / |
| #46 | Implémenter un test qui envoie une requête DELETE /projects/:id/members/:memberId avec l’id d’un projet et d’un membre et qui vérifie en base de données que ce membre est supprimé. Si un des deux id est incorrect, vérifier le code d’erreur 404. | 30min | US7 | #45 | TODO | TEST | / |
| #47 | Créer un fichier navigation.ejs correspondant à la barre de navigation de l’application ayant les champs suivant : “Gestion du projet”, “Backlog”, “Tâches”, “Tests”, “Documentation” et “Release” avec pour chacun un lien de redirection respectivement vers /projects/:id, /projects/:id/backlog, /projects/:id/tasks, /projects/:id/tests, /projects/:id/documentations et /projects/:id/releases. | 45min | US8 | #1 | TODO | DEV | / |
| #48 | Créer le Gherkin navigationBar dans le fichier project.feature du scénario suivant : Vérifier qu’à partir d’un URL du type /projects/:id donné, on puisse cliquer sur les différentes composantes de la page suivantes : Gestion du projet, Backlog, Tâches, Tests, Documentation, Release et qui vérifie qu’on est bien redirigé respectivement vers  /projects/:id, /projects/:id/backlog, /projects/:id/tasks, /projects/:id/tests, /projects/:id/documentations et /projects/:id/releases. | 25min | US8 | #1 | TODO | GEN | / |
| #49 | Implémenter le test Sélénium du Gherkin navigationBar dans le fichier project.test.js. | 30min | US8 | #47, #48 | TODO | TEST | / |
| #50 | Intégrer le template de la barre de navigation à toutes les pages HTML affichées ayant une route commençant par /projects/:id. | 10min | US8 | #47 | TODO | DEV | / |
| #51 | Créer le Gherkin allNavigationBar dans le fichier projects.feature du scénario suivant : Cliquer sur chaque bloc de projet affiché depuis l’URL /projects, et réaliser le même scénario Gherkin navigationBar pour chacun de ces projets. | 30min | US8 | #1 | TODO | GEN | / |
| #52 | Implémenter le test Sélénium du Gherkin allNavigationBar dans le fichier projects.test.js. | 30min | US8 | #50, #51 | TODO | TEST | / |
| #53 | Créer le fichier backlog.ejs qui affiche une section backlog ainsi qu’une section par sprint. Les sprints sont classés du dernier au premier par rapport aux dates de début et le backlog est en dessous des sprints. Les sections sont définies dans le template sprint.ejs à qui on passe la liste des US du sprint. | 45min | US9 | #1 | TODO | DEV | / |
| #54 | Créer le Gherkin sprintOrder dans le fichier sprint.feature du scénario suivant : Vérifier l’affichage dans la page /projects/:id/backlog de tous les sprints classés par date (du dernier au premier par rapport aux dates de début) ainsi que le backlog. | 30min | US9 | #1 | TODO | GEN | / |
| #55 | Implémenter le test Sélénium du Gherkin sprintOrder dans le fichier sprint.test.js. | 30min | US9 | #53, #54, #60 | TODO | TEST | / |
| #56 | Créer un fichier sprint.ejs qui affiche une liste d’US classées de la plus importante (en haut) à la moins importante. Pour chaque US, la page affiche son id, sa description, sa difficulté ainsi que son label si elle en a un. | 30min | US9, US16 | #1 | TODO | DEV | / |
| #57 | Créer le Gherkin displayUS dans le fichier userStory.feature du scénario suivant : Vérifier que pour chaque US affichée dans la page /projects/:id/backlog, il est possible de visualiser son ID, sa description, ainsi que sa difficulté. | 30min | US9 | #1 | TODO | GEN | / |
| #58 | Implémenter le test Sélénium du Gherkin displayUS dans le fichier userStory.test.js. | 30min | US9 | #53, #56, #57, #60 | TODO | TEST | / |
| #59 | Créer une fonction getAllSprints avec en paramètre l’ID du projet dans le fichier models/backlog.js qui récupère en base de données la liste des sprints et le backlog avec leurs US et retourne un tableau. | 20min | US9 | #2 | TODO | DEV | / |
| #60 | Créer la route GET /projects/:id/backlog dans un fichier routes/backlogRoutes.js qui appelle la fonction getAllSprints et affiche la page backlog.ejs en lui passant la liste des sprints et le backlog avec leurs US. | 30min | US9 | #59 | TODO | DEV | / |
| #61 | Créer la page newUserStory.ejs qui affiche un formulaire HTML contenant les champs description (string) et difficulté (liste déroulante avec les choix : 1, 2, 3 et 5). Le formulaire envoie une requête POST à l'URL /projects/:id/user-story quand on clique sur le bouton "Ajouter" et ferme la popup à condition que tous les champs soient correctement remplis, sinon un message d’erreur détaillé s’affiche. | 45min | US10 | #1 | TODO | DEV | / |
| #62 | Ajouter au fichier backlog.ejs un bouton “Ajouter une US” qui quand on clique dessus ouvre une popup avec le contenu de la page newUserStory.ejs. | 25min | US10 | #53 | TODO | DEV | / |
| #63 | Créer le Gherkin addUserStory dans le fichier userStory.feature du scénario suivant : Cliquer sur un bouton “Ajouter une US” depuis la page /projects/:id/backlog. Une popup s’ouvre. Cliquer sur le bouton “Ajouter”, un message d’erreur s’affiche. Renseigner les informations dans le formulaire : description (string) et difficulté (l’entier 1) puis cliquer à nouveau sur le bouton “Ajouter”. La popup se ferme et la nouvelle US doit être présente dans la liste des US du backlog. | 30min | US10 | #1 | TODO | GEN | / |
| #64 | Implémenter le test Sélénium du Gherkin addUserStory dans le fichier userStory.test.js. | 30min | US10 | #61, #62, #63, #66 | TODO | TEST | / |
| #65 | Créer une fonction addUserStory dans le fichier models/userStory.js qui ajoute une nouvelle US dans le backlog associé au projet en base de données avec en paramètres : l’ID du projet, la description de l’US et la difficulté de l’US. | 20min | US10 | #2 | TODO | DEV | / |
| #66 | Ajouter une route POST /projects/:id/user-story dans le fichier routes/backlogRoutes.js qui appelle la fonction addUserStory avec les informations passées dans le corps de la requête : description (string) et difficulté (entier ayant uniquement pour valeur 1, 2, 3 ou 5). Si tout se passe bien, la requête se termine normalement, sinon elle retourne le détail de l’erreur. | 30min | US10 | #65 | TODO | DEV | / |
| #67 | Implémenter un test qui envoie une requête POST /projects/:id/user-story avec une description (string) et une difficulté (entier ayant pour valeur 1, 2, 3 ou 5) et vérifier l’ajout en base de données de cette nouvelle US dans la partie backlog du projet. | 30min | US10 | #66 | TODO | TEST | / |
| #68 | Implémenter un test qui envoie une requête POST /projects/:id/user-story avec une description (string) et une difficulté (entier autre que 1, 2, 3 ou 5) et vérifier qu’un code d’erreur est bien renvoyé avec son détail. | 30min | US10 | #66 | TODO | TEST | / |
| #69 | Ajouter dans la page backlog.ejs un bouton “Ajouter un sprint”, si on clique dessus, une pop-up s’ouvre avec les informations contenues dans le fichier newSprint.ejs. | 20min | US11 | #53 | TODO | DEV | / |
| #70 | Créer un fichier newSprint.ejs contenant un formulaire HTML avec les champs suivants : date de début (date-format) et date de fin (date-format). En cliquant sur un bouton “Valider”, le formulaire envoie une requête POST à l’URL /projects/:id/backlog/sprint/ et ferme la pop-up à l’unique condition que l’ensemble des champs soient correctement remplis. Autrement, un message d’erreur s’affiche en indiquant le problème. | 45min | US11 | #1 | TODO | DEV | / |
| #71 | Créer le scénario Gherkin createSprint dans le fichier sprint.feature qui réalise une action de clic sur le bouton “Ajouter un sprint” depuis la page /projects/:id/backlog et requête GET s’affiche bien. Après avoir rempli les champs “date de début” et “date de fin” du formulaire, réaliser un clic sur le bouton “Valider” et vérifier par la suite qu’une pop-up d’erreur s’affiche.  | 30min | US11 | #1 | TODO | GEN | / |
| #72 | Implémenter le test sélénium du scénario createSprint dans le fichier sprint.test.js. | 30min | US11 | #69, #70, #71, #74 | TODO | TEST | / |
| #73 | Créer une fonction addSprint dans le fichier models/sprint.js qui prend en paramètres l’ID d’un projet, la date de début et la date de fin du sprint. La fonction vérifie que l’intervalle ne chevauche pas un autre sprint préalablement ajouté en base de données. Si ça se chevauche, retourner false, sinon true. | 40min | US11 | #2 | TODO | DEV | / |
| #74 | Créer une route POST  /projects/:id/backlog/sprint dans un fichier routes/backlogRoutes.js qui récupère les données d’un sprint passé dans le corps de la requête : une date de début (date-format) et une date de fin (date-format). Elle appelle la fonction addSprint avec ces informations. Si la fonction retourne false, la requête retourne une erreur 400 avec un détail de l’erreur dans le corps de la requête. | 30min | US11 | #73 | TODO | DEV | / |
| #75 | Implémenter un test qui envoie une requête POST à l’URL /projects/:id/backlog/sprint avec dans le corps de la requête une date de début (date format) et une date de fin (date format) avec un intervalle correct et vérifie en base de données qu’un nouveau sprint a bien été ajouté. Même principe avec un intervalle incorrect, en vérifiant bien que le sprint n’a pas été ajouté à la base de données et qu’une erreur est retournée. | 30min | US11 | #74 | TODO | TEST | / |
| #76 | Ajouter dans le fichier sprint.ejs le fait que chaque élément US dans la page ait un statut “draggable”.  | 10min | US12 | #56 | TODO | DEV | / |
| #77 | Ajouter des fonctions de drag et drop qui permettent respectivement de récupérer les données de l’US dragged et de drop l’US uniquement dans la zone définie en dessous d’un sprint ou de la catégorie par défaut “Backlog”. Le drop a pour effet d’envoyer une requête PUT /projects/:id/backlog/user-stories/:userStoryId avec dans le corps de la requête l’ancien sprint et le nouveau ainsi que la nouvelle position au sein du sprint. Si la requête ne retourne pas d’erreur, l’affichage des sprints et du backlog est mis à jour soit en faisant une requête GET /projects/:id/backlog/sprints/:sprintId pour un sprint, soit GET /projects/:id/backlog/backlog pour le backlog. S’il y a une erreur, on l’affiche.  | 45min | US12 | #1 | TODO | DEV | / |
| #78 | Créer un scénario Gherkin slideUS dans le fichier sprint.feature qui depuis la page /project/:id/backlog effectue un glisser-déposer d’une US depuis un sprint vers une autre le backlog et vérifier que l’US est bien là où on l’a déposée et qu’elle a disparue de sa précédente place.  | 30min | US12, US13 | #1 | TODO | GEN | / |
| #79 | Implémenter le test sélénium du scénario slideUS dans le fichier sprint.test.js. | 30min | US12, US13 | #76, #77, #78, #81, #84, #87 | TODO | TEST | / |
| #80 | Créer une fonction findSprintById qui récupère en base de données le sprint dont l’id est passé en paramètre et le retourne. L’id du projet est lui aussi dans les paramètres de la fonction. Si le projet ou le sprint n’existe pas, retourner un message d’erreur. | 20min | US13, US15 | #2 | TODO | DEV | / |
| #81 | Créer la route GET /projects/:id/backlog/sprints/:sprintId dans le fichier routes/backlogRoutes.js qui appelle la fonction findSprintById. Si un message d’erreur est retourné, retourner le code 404 avec le message d’erreur. Sinon retourner le tableau des US du sprint. | 30min | US13 | #80 | TODO | DEV | / |
| #82 | Implémenter un test qui envoie une requête GET /projects/:id/backlog/sprints/:sprintId avec l’id d’un sprint qui vérifie que le retour correspond bien à la liste des US du sprint visé. | 30min | US13 | #81 | TODO | TEST | / |
| #83 | Créer une fonction findBacklog qui récupère en base de données la section backlog et qui la retourne. L’id du projet est lui aussi dans les paramètres de la fonction. Si le projet n’existe pas, retourner un message d’erreur. | 20min | US13 | #2 | TODO | DEV | / |
| #84 | Créer la route GET /projects/:id/backlog/backlog dans le fichier routes/backlogRoutes.js qui appelle la fonction findBacklog et qui retourne la liste de ses US. Si la réponse de la fonction est une erreur, retourner cette erreur avec le code 404. | 30min | US12, US13 | #83 | TODO | DEV | / |
| #85 | Implémenter un test qui envoie une requête GET /projects/:id/backlog/backlog et qui vérifie que le retour correspond bien à la liste des US du backlog (US non assignées à un sprint). | 30min | US12, US13 | #84 | TODO | TEST | / |
| #86 | Créer une fonction deleteUserStory qui supprime en base de données une US à partir des IDs du projet et de l’US passés en paramètres. Si un des deux id n’est pas bon, retourner un message d’erreur. | 20min | US13 | #2 | TODO | DEV | / |
| #87 | Créer une route PUT /projects/:id/backlog/user-stories/:userStoryId dans le fichier routes/backlogRoutes.js qui récupère dans son corps l’ancien sprint ou backlog (string de l’id), le nouveau (string de l’id) ainsi que la position parmi les US déjà présentes (entier) et appelle les fonctions deleteUserStory et addUserStory (sans lui passer le label de l’US si elle en a un) depuis l’ancienne position et vers la nouvelle afin de modifier sa position. S’il y a une quelconque erreur, la requête retourne le code 404 avec le détail. | 30min | US13 | #86 | TODO | DEV | / |
| #88 | Implémenter un test qui envoie une requête PUT /projects/:id/backlog/user-stories/:userStoryId avec l’id d’une US et dans le corps de la requête l’ancien sprint ou backlog (string de l’id), le nouveau (string de l’id) et la position souhaitée parmi les US déjà présentes et vérifie que l’importance de l’US a bien été modifiée en base de données. | 30min | US13 | #87 | TODO | TEST | / |
| #89 | Créer une route DELETE /projects/:projectID/backlog/sprint/:sprintID dans le fichier routes/backlogRoutes.js qui appelle la fonction findSprintById et vérifie si le sprint est en cours ou qu’il est déjà achevé (référence à ses dates), si oui, renvoyer le code statut 403. Si la fonction retourne une erreur renvoyer le code status 404 avec l’erreur. Dans les autres cas, retourner le code 200.  | 30min | US15 | #80 | TODO | DEV | / |
| #90 | Créer une fonction sprintToBacklog dans le fichier models/sprint.js qui a pour paramètres l’ID du projet et un ID de sprint donné, et qui récupère en base de données toutes les US du sprint dont l’ID est passé en paramètres grâce à la fonction findSprintById afin de les déplacer dans la liste d’US de la section Backlog au sein de la base de données. La fonction ajoute aussi à chaque US déplacée un label donc le contenu est passé en paramètre (mais peut être optionnel). | 20min | US15, US16 | #80 | TODO | DEV | / |
| #91 | Créer une fonction deleteSprint dans le fichier models/sprint.js qui supprime en base de donnée un sprint dont l’id du projet et l’id du sprint sont passés en paramètre. S’il un des id n’existe pas, retourner un message d’erreur. | 20min | US15 | #2 | TODO | DEV | / |
| #92 | Ajouter dans la route DELETE /projects/:projectID/backlog/sprint/:sprintID du fichier routes/backlogRoutes.js la vérification suivante à la suite vérifications déjà présente dans la route : regarder dans le corps de la requête s’il y a un paramètre “force=true”, si oui appeler la fonction sprintToBacklog (avec le paramètre label qui vaut “sprint supprimé”) puis deleteSprint sur le sprint à supprimer. | 30min | US15, US16 | #89, #90, #91 | TODO | DEV | / |
| #93 | Implémenter un test qui vérifie que lorsque l’on effectue une requête DELETE vers l’URL /projects/:projectID/backlog/sprint/:sprintID pour un sprint qui n’existe pas, la réponse que l’on reçoit a pour code status 404.  | 30min | US15 | #89 | TODO | TEST | / |
| #94 | Implémenter un test qui vérifie que lorsque l’on effectue une requête DELETE vers l’URL /projects/:projectID/backlog/sprint/:sprintID pour un sprint qui en cours ou qui est déjà passé, la réponse que l’on reçoit a pour code status 403.  | 30min | US15 | #89 | TODO | TEST | / |
| #95 | Implémenter un test qui vérifie que lorsque l’on effectue une requête DELETE vers l’URL /projects/:projectID/backlog/sprint/:sprintID pour un sprint à venir, la réponse que l’on reçoit a pour code status 200.  | 30min | US15 | #89 | TODO | TEST | / |
| #96 | Implémenter un test qui vérifie que lorsque l’on effectue une requête DELETE vers l’URL /projects/:projectID/backlog/sprint/:sprintID pour un sprint à venir et que dans le corps de la requête se trouve un paramètre “force=true”, alors toutes les US contenues dans le sprint sont désormais dans la catégorie générique “backlog” et le sprint n’existe plus dans la base de données. | 30min | US15 | #92 | TODO | TEST | / |
| #97 | Ajouter dans le fichier backlog.ejs un bouton “Supprimer le sprint” à côté de chaque sprint. Quand on clique dessus, une requête DELETE est envoyée à l’URL /projects/:projectID/backlog/sprint/:sprintID. Si le code status de retour est 403, afficher une pop-up avertissant l’utilisateur que l’action n’a pu aboutir. Si le code status est 200, afficher une pop-up avec le contenu de la page deleteSprint.ejs a qui on passe le sprint. | 30min | US15 | #53 | TODO | DEV | / |
| #98 | Créer le fichier deleteSprint.ejs demandant une confirmation de suppression du sprint passé au fichier avec un bouton “Annuler” qui ferme la pop-up et un bouton “Confirmer” qui envoie une requête DELETE à l’URL /projects/:projectID/backlog/sprint/:sprintID avec dans le corps le paramètre “force=true”. Si le code de retour est 200 recharger la page backlog.ejs. | 30min | US15 | #1 | TODO | DEV | / |
| #99 | Créer le scénario gherkin deleteSprintSuccess  dans le fichier sprint.feature vérifie que depuis la page /project/:id/backlog/ lorsque l’on clique sur le bouton “Supprimer le sprint” à côté d’un sprint une pop-up de confirmation apparaît si le sprint est à venir et que si on clique sur le bouton confirmer de la pop-up, alors le sprint est supprimé de la page et les US qu’il contenait sont à présent dans la catégorie générique “backlog”. | 30min | US15 | #1 | TODO | GEN | / |
| #100 | Implémenter le test sélénium du scénario deleteSprintSuccess dans le fichier sprint.test.js. | 30min | US15 | #92, #97, #98, #99 | TODO | TEST | / |
| #101 | Créer le scénario gherkin deleteSprintFailure dans le fichier sprint.feature qui vérifie que lorsque l’on clique sur le bouton “Supprimer le sprint” à côté d’un sprint une pop-up de d’erreur apparaît si le sprint est déjà achevé ou qu’il est en cours. | 30min | US15 | #1 | TODO | GEN | / |
| #102 | Implémenter le test sélénium du scénario deleteSprintFailure dans le fichier sprint.test.js. | 30min | US15 | #92, #97, #101 | TODO | TEST | / |
| #103 | Créer le scénario gherkin labelAfterSprintDeletion dans le fichier backlog.feature qui vérifie que lorsque l’on supprime un sprint à venir sur la page /project/:id/backlog et que l’on confirme cette action, alors les US que contenait ce sprint ont un label “sprint supprimé” affiché. | 30min | US16 | #1 | TODO | GEN | / |
| #104 | Implémenter le test sélénium du scénario labelAfterSprintDeletion dans le fichier backlog.test.js. | 30min | US16 | #56, #92, #97, #98, #99, #103 | TODO | TEST | / |
| #105 | Créer le scénario gherkin deleteLabelWhenMovingUS qui vérifie que si on ajoute une US à un sprint alors que l’US avait un label, alors son champ label redevient vide. | 30min | US16 | #1 | TODO | GEN | / |
| #106 | Implémenter le test sélénium du scénario deleteLabelWhenMovingUS dans le fichier backlog.test.js. | 30min | US16 | #87, #105 | TODO | TEST | / |