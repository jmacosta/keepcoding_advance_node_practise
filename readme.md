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
```

## Start a MongoDB Server in MacOS or Linux

From the folder of the server:

```sh
./bin/mongod --dbpath ./data
```

## API Endpoints

### GET /products

```json
{
"products": [
    {
      "name": "Funda de Teléfono Estilo Moderno",
      "sellOrSearch": true,
      "price": 25.99,
      "image": "fundatelefono.jpg",
      "tags": ["lifestyle", "mobile"]
    },
    ...
    {
      "name": "Motor de Automóvil de Alto Rendimiento",
      "sellOrSearch": true,
      "price": 4999.99,
      "image": "motoralto.jpg",
      "tags": ["motor", "work"]
    },]
    }
```
### GET /products/tags
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
### POST /products/
```json
{
      "name": "funda nueva",
      "sellOrSearch": false,
      "price": 50.99,
      "image": "fundatelefono.jpg",
      "tags": ["lifestyle", "mobile"]
    }
```
## Example of filters

http://localhost:3000/products/?name=s

```json
[
  {
    "_id": "65230c42edaaa0cf928dc550",
    "name": "Sartén Antiadherente de Chef",
    "sellOrSearch": true,
    "price": 29.99,
    "image": "sartenantiadherente.jpg",
    "tags": [
      "lifestyle"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc53c",
    "name": "Scooter Eléctrico Plegable",
    "sellOrSearch": true,
    "price": 399.99,
    "image": "scooterplegable.jpg",
    "tags": [
      "lifestyle",
      "mobile"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc558",
    "name": "Set de Herramientas para Barbacoa",
    "sellOrSearch": true,
    "price": 29.99,
    "image": "herramientasbarbacoa.jpg",
    "tags": [
      "lifestyle"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc575",
    "name": "Silla de Camping Plegable y Portátil",
    "sellOrSearch": true,
    "price": 19.99,
    "image": "sillacamping.jpg",
    "tags": [
      "lifestyle"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc54b",
    "name": "Silla de Oficina Ergonómica",
    "sellOrSearch": true,
    "price": 149.99,
    "image": "sillaoficina.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc579",
    "name": "Sistema de Altavoces para Home Cinema",
    "sellOrSearch": true,
    "price": 399.99,
    "image": "altavoceshomecinema.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  }
]

```

http://localhost:3000/products/?tags=work
```json

[
  {
    "_id": "65230c42edaaa0cf928dc535",
    "name": "Motor de Automóvil de Alto Rendimiento",
    "sellOrSearch": true,
    "price": 4999.99,
    "image": "motoralto.jpg",
    "tags": [
      "motor",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc538",
    "name": "Portátil para Trabajo y Productividad",
    "sellOrSearch": true,
    "price": 899.99,
    "image": "portatilproductividad.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc53a",
    "name": "Herramientas de Jardín de Alta Calidad",
    "sellOrSearch": true,
    "price": 349.99,
    "image": "herramientasjardin.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc53d",
    "name": "Laptop para Diseño Gráfico",
    "sellOrSearch": false,
    "price": 1299.99,
    "image": "laptopdisenio.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc53f",
    "name": "Herramientas de Carpintería Profesional",
    "sellOrSearch": true,
    "price": 499.99,
    "image": "herramientascarpinteria.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc540",
    "name": "Tableta Digitalizadora para Artistas",
    "sellOrSearch": false,
    "price": 249.99,
    "image": "tabletaartista.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc544",
    "name": "Impresora 3D de Alta Precisión",
    "sellOrSearch": true,
    "price": 499.99,
    "image": "impresora3d.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc547",
    "name": "Herramientas de Electricista Profesional",
    "sellOrSearch": true,
    "price": 399.99,
    "image": "herramientaselectricista.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc549",
    "name": "Mesa de Escritorio Ergonómica",
    "sellOrSearch": false,
    "price": 129.99,
    "image": "mesaescritorio.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc54a",
    "name": "Máquina de Coser para Proyectos Creativos",
    "sellOrSearch": true,
    "price": 199.99,
    "image": "maquinacoser.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc54b",
    "name": "Silla de Oficina Ergonómica",
    "sellOrSearch": true,
    "price": 149.99,
    "image": "sillaoficina.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc54d",
    "name": "Disco Duro Externo de Gran Capacidad",
    "sellOrSearch": true,
    "price": 89.99,
    "image": "discoduroexterno.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc54e",
    "name": "Maletín para Portátil de Estilo Profesional",
    "sellOrSearch": true,
    "price": 39.99,
    "image": "maletinportatil.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc553",
    "name": "Micrófono USB para Grabaciones",
    "sellOrSearch": true,
    "price": 49.99,
    "image": "microfonousb.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc556",
    "name": "Robot Aspirador Inteligente",
    "sellOrSearch": false,
    "price": 199.99,
    "image": "robotaspirador.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc557",
    "name": "Monitor de Juegos de Alta Frecuencia",
    "sellOrSearch": true,
    "price": 399.99,
    "image": "monitorjuegos.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc560",
    "name": "Candado Inteligente con Huella Dactilar",
    "sellOrSearch": true,
    "price": 39.99,
    "image": "candadointeligente.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc561",
    "name": "Herramientas de Fontanería Profesional",
    "sellOrSearch": true,
    "price": 499.99,
    "image": "herramientasfontaneria.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc562",
    "name": "Auriculares con Cancelación de Ruido",
    "sellOrSearch": true,
    "price": 149.99,
    "image": "auricularescancelacionruido.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc565",
    "name": "Caja de Herramientas con Ruedas",
    "sellOrSearch": false,
    "price": 89.99,
    "image": "cajaherramientas.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc566",
    "name": "Aspiradora Robot con Programación",
    "sellOrSearch": false,
    "price": 249.99,
    "image": "aspiradorarobot.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc56a",
    "name": "Cámara de Seguridad para Exteriores",
    "sellOrSearch": false,
    "price": 79.99,
    "image": "camaraexterior.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc572",
    "name": "Herramientas de Electricista Profesional",
    "sellOrSearch": false,
    "price": 499.99,
    "image": "herramientaselectricista.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc574",
    "name": "Lámpara LED de Escritorio con Brazo Ajustable",
    "sellOrSearch": true,
    "price": 29.99,
    "image": "lamparaescritorio.jpg",
    "tags": [
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc578",
    "name": "Kit de Pintura al Óleo para Artistas",
    "sellOrSearch": true,
    "price": 39.99,
    "image": "kitpinturaoil.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc579",
    "name": "Sistema de Altavoces para Home Cinema",
    "sellOrSearch": true,
    "price": 399.99,
    "image": "altavoceshomecinema.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  }
]

```

http://localhost:3000/products/?start=1&limit=3&sort=name&tag=lifestyle

```json
[
  {
    "_id": "65230c42edaaa0cf928dc548",
    "name": "Altavoces Bluetooth Portátiles",
    "sellOrSearch": false,
    "price": 49.99,
    "image": "altavocesbluetooth.jpg",
    "tags": [
      "lifestyle",
      "mobile"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc570",
    "name": "Altavoz Inteligente con Asistente de Voz",
    "sellOrSearch": false,
    "price": 79.99,
    "image": "altavozinteligente.jpg",
    "tags": [
      "lifestyle",
      "mobile"
    ],
    "__v": 0
  },
  {
    "_id": "65230c42edaaa0cf928dc566",
    "name": "Aspiradora Robot con Programación",
    "sellOrSearch": false,
    "price": 249.99,
    "image": "aspiradorarobot.jpg",
    "tags": [
      "lifestyle",
      "work"
    ],
    "__v": 0
  }
]

```