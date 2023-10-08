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
```

## Start

In production:

```sh
npm start
```

In development:

```sh
npm run dev
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

```html

<!DOCTYPE html>
<html>
  <head>
    <title>Productos Nodepop</title>
    <link rel="stylesheet" href="/stylesheets/style.css" />
  </head>
  <body>
    <header>
      <h1>Listado de productos de Nodepop</h1>
    </header>
    <main>

      <div class="card">
        <div class="title"><h2>Sartén Antiadherente de Chef</h2></div>
        <div class="content">
          <img src="/assets/sartenantiadherente.jpg"
            alt="sartenantiadherente.jpg" />
          <div class="description">
            <ul>
              <li>

                <h3 class="sell">SE VENDE</h3>

              </li>
              <li class="price">Precio 29.99 €</li>
              <li>
                <ul>

                  <li class="tag">lifestyle</li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="title"><h2>Scooter Eléctrico Plegable</h2></div>
        <div class="content">
          <img src="/assets/scooterplegable.jpg" alt="scooterplegable.jpg" />
          <div class="description">
            <ul>
              <li>

                <h3 class="sell">SE VENDE</h3>

              </li>
              <li class="price">Precio 399.99 €</li>
              <li>
                <ul>

                  <li class="tag">lifestyle</li>

                  <li class="tag">mobile</li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="title"><h2>Set de Herramientas para Barbacoa</h2></div>
        <div class="content">
          <img src="/assets/herramientasbarbacoa.jpg"
            alt="herramientasbarbacoa.jpg" />
          <div class="description">
            <ul>
              <li>

                <h3 class="sell">SE VENDE</h3>

              </li>
              <li class="price">Precio 29.99 €</li>
              <li>
                <ul>

                  <li class="tag">lifestyle</li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="title"><h2>Silla de Camping Plegable y Portátil</h2></div>
        <div class="content">
          <img src="/assets/sillacamping.jpg" alt="sillacamping.jpg" />
          <div class="description">
            <ul>
              <li>

                <h3 class="sell">SE VENDE</h3>

              </li>
              <li class="price">Precio 19.99 €</li>
              <li>
                <ul>

                  <li class="tag">lifestyle</li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="title"><h2>Silla de Oficina Ergonómica</h2></div>
        <div class="content">
          <img src="/assets/sillaoficina.jpg" alt="sillaoficina.jpg" />
          <div class="description">
            <ul>
              <li>

                <h3 class="sell">SE VENDE</h3>

              </li>
              <li class="price">Precio 149.99 €</li>
              <li>
                <ul>

                  <li class="tag">work</li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="title"><h2>Sistema de Altavoces para Home Cinema</h2></div>
        <div class="content">
          <img src="/assets/altavoceshomecinema.jpg"
            alt="altavoceshomecinema.jpg" />
          <div class="description">
            <ul>
              <li>

                <h3 class="sell">SE VENDE</h3>

              </li>
              <li class="price">Precio 399.99 €</li>
              <li>
                <ul>

                  <li class="tag">lifestyle</li>

                  <li class="tag">work</li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </main>
    <footer>
      <p>&copy; 2023 Keppcoding Nodepop</p>
    </footer>
  </body>
</html>

```
