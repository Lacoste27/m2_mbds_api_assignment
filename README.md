# M2 Assignment Api

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Une api pour l'application de remise de devoir 

- L'url de l'api en ligne `https://m2-mbds-api-assignment.onrender.com/`

# Contributeurs
- 55: ROBSONA Tsiory Andriantsoa @Lacoste27
- 58: ZAFITSIARENDRIKA Tommy

# Prérequis

- NodeJS
- MongoDB

# Technologie

- Express
- MongoDB
- Mongoose
- JWT

# Déploiement
L'api est déployé sur render


# Installation

```bash 
git clone https://github.com/Lacoste27/m2_mbds_api_assignment.git
```

```bash 
cd m2_mbds_api_assignment
```

```bash 
npm install
```

# Structure du projet
```bash
├── app
│   ├── controllers
│   │   ├── assignment.controller.js
│   │   ├── authentification.controller.js
│   │   ├── matiere.controller.js
│   │   └── user.controller.js
│   ├── middleware
│   │   ├── admin.middleware.js
│   │   └── authentification.middleware.js
│   ├── models
│   │   ├── assignment.model.js
│   │   ├── matiere.model.js
│   │   └── user.model.js
│   ├── routes
│   │   ├── assignment.route.js
│   │   ├── authentification.route.js
│   │   ├── matiere.route.js
│   │   └── user.route.js
│   ├── services
│   │   ├── assignment.service.js
│   │   ├── authentfication.service.js
│   │   ├── matiere.service.js
│   │   └── user.service.js
│   └── utils
│       └── utils.js
├── index.js
├── package.json
├── package-lock.json
└── README.md

```

# Environnement
```
ENVIRONMENT=dev
SECRET_KEY=secret_key
```

# Démarrage

```bash
nodemon run dev
```

# Fonctionnallité 
- Système authentification
- L'ajout d'un nouveau devoir
- Liste de tous les devoirs
- Détails d'un dévoir
- La liste des matières
- Modifiation d'un utilisateurs
- Modification d'un dévoir
- Rendre un devoir 

# Routes
## Authentification
### /api/authentification/signin
- `POST` : se connecter dans l'application

## Users
### /api/users/
- `GET` : récupère la liste de tous les utilisateurs

### /api/users/students
- `GET` : récupère la liste de tous les étudiants

### /api/users/:id/profile 
- `GET` : récupère le profile d'un utilisateur

### /api/users/:id/assignments
- `GET` : récupère l'assignment de l'utilisateur

## Assignments
### /api/assignments
- `GET` :  récupère la liste de tous les devoirs

### /api/assignments/:id
- `GET` :  récupère un devoir par l'id
- `DELETE` : la suppression d'un devoir
- `PUT` : la modification d'un devoir

### /api/assignments/add
- `POST` : l'ajout d'un nouveau devoir

## Subjects
### /api/matieres/
- `GET` : la récupéation de tous les matières

# Contributions
## Communes 
- Conception des modèles
- Enregistrement du vidéo de présentation

## Robsona Tsiory Andriantsoa
- Création de la base dans mongo atlas
- Génération des données pour chaque collections
- Création des api :
    - authentifications avec token jwt
    - liste des assignments 
    - ajout des assignments
    - details d'un assignment
    - la modification d'un assignment
    - rendre un assignment
    - liste des utilisateurs
    - profile d'un utilisateur
- Configuration du déploiement de l'api sur [Render](https://render.com 'Render')

## Zafitsiarendrika Tommy
- La création des model pour mongoose
- La configuration de CORS
- Création api : 
    - la liste de tous les matières
    - la liste de tous les étudiants
    - la liste de tous les matières
- Montage de la video de presentation