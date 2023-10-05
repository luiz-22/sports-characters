# 🏅 Sports Characters

Sports Characters es una `API` que trae una de lista países, una lista de deportes y personajes que tienen un país y practican algunos deportes.

Esta desarrollada con `NodeJS`, `Express` y `TypeScript`.

En la capa de servicios primero usamos `jsonfile` para persistir los datos en archivos `json`, luego usamos `Sequelize` con `Postgres` y por último lo dejamos con `Mongoose` y `MongoDB`.

## Rutas

https://sports-characters.onrender.com/characters

https://sports-characters.onrender.com/countries

https://sports-characters.onrender.com/sports

También se puede buscar un personaje por género, país y deporte. Además, se puede crear, modificar y eliminar un personaje.

## Dependencias

**`express`**

```bash
npm install express
```

**`typescript`**

```bash
npm install --save-dev typescript @types/node @types/express ts-node
```

**`jsonfile`**

```bash
npm install --save jsonfile
```

**`express-validator`**

```bash
npm install express-validator
```

**`sequelize`**

```bash
npm install --save sequelize
```

```bash
npm install --save pg pg-hstore # Postgres
```

**`dotenv`**

```bash
npm install dotenv
```

**`mongoose`**

```bash
npm install mongoose --save
```

**`jest y supertest`**

```bash
npm install --save-dev jest @types/jest ts-jest supertest
```

## Ejemplo de un post

```json
{
  "name": "Pocoyo",
  "gender": "Male",
  "age": 4,
  "height": 0.57,
  "image": "https://yt3.googleusercontent.com/ytc/AOPolaRbXJfMKdTTy2A4IJwAtZUku7Ze8f96A_Qf1ByM1kw=s900-c-k-c0x00ffffff-no-rj",
  "country": "Bulgaria",
  "sports": ["curling", "frisbee", "yoyo"]
}
```
