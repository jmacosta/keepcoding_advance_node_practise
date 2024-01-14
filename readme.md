# Nodepop

Website and API application.

## Install

Install dependencies:

```sh
$ npm install
```

Review database connection on /db/connectMongoose.js (see "Start a MongoDB Server in MacOS or Linux")

Load initial data:

```sh
# this command deletes all the data in the database and create default data
$ npm run initdb
# this command start the microservice for create thumbnails
npm run thumbnail
# this command create the thumbs for the examples images of the default data, please verify that the service for thumnails is running before use this command
$ npm run create-first-thumbs


```

## Start

In production:

```sh
npm start
# this command start the microservice for create thumbnails
npm run thumbnail
```

In development:

```sh
npm run dev
# this command start the microservice for create thumbnails
npm run thumbnail
# this command start tailwind preprocessor for apply changes in styles
npm run tailwind
```

## Start a MongoDB Server in MacOS or Linux

From the folder of the server:

```sh
./bin/mongod --dbpath ./data
```

## API Endpoints

### GET /api/authenticate


#### Description
This endpoint allows authenticating a user using a email and password.

#### URL

http://localhost:3000/api/authenticate


#### Request Parameters
- `email` (string): User's email.
- `password` (string): User's password.

#### Request Example
```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "1234"}' 
http://localhost:3000/api/authenticate
```

#### Successful Response
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
#### Error Response 

_Request with no data for credentials or data not valid_

```json
{
    "error": "Invalid credentials"
}
```

### GET /api/

_You need a JWT Token to use_

#### Description
This endpoint get a complete list of products un database

#### URL

http://localhost:3000/api/

#### Successful Response
```json
{

[
    {
        "_id": "65a2f1619f54dbbd427efa92",
        "name": "Funda de Teléfono Estilo Moderno",
        "sellOrSearch": true,
        "description": "Funda de teléfono con un diseño moderno y elegante.",
        "price": 25.99,
        "image": "public/assets/fundatelefono.jpg",
        "tags": [
            "lifestyle",
            "mobile"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-fundatelefono.jpg"
    },
    ...
    {
        "_id": "65a2f1619f54dbbd427efa93",
        "name": "Motor de Automóvil de Alto Rendimiento",
        "sellOrSearch": true,
        "description": "Motor potente diseñado para un rendimiento óptimo.",
        "price": 4999.99,
        "image": "public/assets/motoralto.jpg",
        "tags": [
            "motor",
            "work"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-motoralto.jpg"    
    },
]

}
```
#### Error Response 

_Request without token_

```json
{
    "error": {
        "message": "no token provided",
        "code": 401
    }
}
```

_Request with expired token or not valid token_
```json
{
    "error": {
        "message": "Unauthorized",
        "code": 401
    }
}
``` 
## Example of filters

http://localhost:3000/api/?name=s

```json
[
    {
        "_id": "65a2f1619f54dbbd427efaae",
        "name": "Sartén Antiadherente de Chef",
        "sellOrSearch": true,
        "description": "Sartén antiadherente diseñada para chefs y amantes de la cocina.",
        "price": 29.99,
        "image": "public/assets/sartenantiadherente.jpg",
        "tags": [
            "lifestyle"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-sartenantiadherente.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efa9a",
        "name": "Scooter Eléctrico Plegable",
        "sellOrSearch": true,
        "description": "Scooter eléctrico plegable para desplazamientos urbanos rápidos y cómodos.",
        "price": 399.99,
        "image": "public/assets/scooterplegable.jpg",
        "tags": [
            "lifestyle",
            "mobile"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-scooterplegable.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efab6",
        "name": "Set de Herramientas para Barbacoa",
        "sellOrSearch": true,
        "description": "Set completo de herramientas para una exitosa sesión de barbacoa al aire libre.",
        "price": 29.99,
        "image": "public/assets/herramientasbarbacoa.jpg",
        "tags": [
            "lifestyle"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-herramientasbarbacoa.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efaa9",
        "name": "Silla de Oficina Ergonómica",
        "sellOrSearch": true,
        "description": "Silla de oficina ergonómica para proporcionar comodidad y apoyo durante largas horas de trabajo.",
        "price": 149.99,
        "image": "public/assets/sillaoficina.jpg",
        "tags": [
            "work"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-sillaoficina.jpg"
    }
]

```

http://localhost:3000/api/?tags=motor
```json

[
    {
        "_id": "65a2f1619f54dbbd427efa93",
        "name": "Motor de Automóvil de Alto Rendimiento",
        "sellOrSearch": true,
        "description": "Motor potente diseñado para un rendimiento óptimo.",
        "price": 4999.99,
        "image": "public/assets/motoralto.jpg",
        "tags": [
            "motor",
            "work"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-motoralto.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efa95",
        "name": "Casco de Motocicleta de Carrera",
        "sellOrSearch": true,
        "description": "Casco diseñado para la máxima seguridad y estilo en carreras de motocicletas.",
        "price": 129.99,
        "image": "public/assets/cascocarrera.jpg",
        "tags": [
            "motor"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-cascocarrera.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efab0",
        "name": "Kit de Reparación de Bicicletas",
        "sellOrSearch": true,
        "description": "Kit de reparación esencial para mantener tu bicicleta en óptimas condiciones.",
        "price": 39.99,
        "image": "public/assets/kitbicicleta.jpg",
        "tags": [
            "motor",
            "lifestyle"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-kitbicicleta.jpg"
    }
]

```

http://localhost:3000/api/?start=1&limit=3&sort=name&tag=lifestyle

```json
[
    {
        "_id": "65a2f1619f54dbbd427efaa6",
        "name": "Altavoces Bluetooth Portátiles",
        "sellOrSearch": false,
        "description": "Altavoces portátiles con tecnología Bluetooth para disfrutar de tu música en cualquier lugar.",
        "price": 49.99,
        "image": "public/assets/altavocesbluetooth.jpg",
        "tags": [
            "lifestyle",
            "mobile"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-altavocesbluetooth.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efaad",
        "name": "Auriculares Inalámbricos de Alta Calidad",
        "sellOrSearch": true,
        "description": "Auriculares inalámbricos de alta calidad para una experiencia auditiva excepcional.",
        "price": 79.99,
        "image": "public/assets/auricularesinalambricos.jpg",
        "tags": [
            "lifestyle",
            "mobile"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-auricularesinalambricos.jpg"
    },
    {
        "_id": "65a2f1619f54dbbd427efaa0",
        "name": "Bicicleta de Montaña Todo Terreno",
        "sellOrSearch": true,
        "description": "Bicicleta de montaña diseñada para terrenos variados y aventuras al aire libre.",
        "price": 499.99,
        "image": "public/assets/bicicletamontana.jpg",
        "tags": [
            "lifestyle"
        ],
        "owner": "65a2f1619f54dbbd427efa8e",
        "thumb": "public/thumbs/thumbnail-bicicletamontana.jpg"
    }
]

```

### GET /api/tags
_You need a JWT Token to use_

#### Description
This endpoint get a list of product's categories

#### URL

http://localhost:3000/api/tags

#### Successful Response
```json
{
"tags": [
"work",
"lifestyle",
"mobile",
"motor"
]
}
```

#### Error Response 

_Request without token_

```json
{
    "error": {
        "message": "no token provided",
        "code": 401
    }
}
```

_Request with expired token or not valid token_
```json
{
    "error": {
        "message": "Unauthorized",
        "code": 401
    }
}
```

### POST /products/

_You need a JWT Token to use_ 
#### Description
This endpoint allows submit a new ad with information and a image file 

#### URL

http://localhost:3000/api/


#### Request Parameters
- `name` (string): Product name.
- `sellOrSearch` (bolean): `true` is for sale `false` is for search
- `description` (string): :A little plastic figure of baby Yoda 
- `price` (number): Price for the product
- `tags` ([string]): Product's categories
- `image`: An image file

#### Request Example
```bash
curl --location 'http://localhost:3000/api' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWExYjZhM2VjYjUyYjAwNzM1Y2ZhNGMiLCJpYXQiOjE3MDUwOTcxMzYsImV4cCI6MTcwNTEwNDMzNn0.lDSULl0N2b8fvUK7scLkdcFV_oH1oajiw6yNd-J7dkk' \
--form 'name="Baby Yoda Figure"' \
--form 'sellOrSearch="true"' \
--form 'description="A little plastic figure of baby Yoda "' \
--form 'price="45"' \
--form 'tags="work"' \
--form 'image=@"/C:/Users/user/Desktop/yoda.jpg"'
```

#### Successful Response
```json
{
    "name": "Baby Yoda Figure",
    "sellOrSearch": true,
    "description": "A little plastic figure of baby Yoda ",
    "price": 45,
    "image": "1705240851923-yoda.jpg",
    "tags": [
        "work"
    ],
    "owner": "65a2f1619f54dbbd427efa8e",
    "_id": "65a3e913034cd10ea34dafc9",
    "__v": 0
}
```
#### Error Response 

_Request without token_

```json
{
    "error": {
        "message": "no token provided",
        "code": 401
    }
}
```

_Request with expired token or not valid token_
```json
{
    "error": {
        "message": "Unauthorized",
        "code": 401
    }
}
```