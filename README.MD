## Instalación

### `express`

```bash
npm install express
```

### `typescript`

```bash
npm install --save-dev typescript @types/node @types/express ts-node
```

### `jsonfile`

```bash
npm install --save jsonfile
```

### `express-validator`

```bash
npm install express-validator
```

## Configuración

### `tsconfig.json`

Crea un archivo `tsconfig.json` en el directorio raíz de tu proyecto con la siguiente configuración inicial:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### `package.json`

Abre tu archivo `package.json` y define los siguientes scripts en la sección "scripts":

```json
"scripts": {
    "start": "nodemon index.ts",
    "build": "tsc",
    "watch:ts": "tsc --watch"
}
```

## Modelo E-R

| sport | N:M | character | N:1 | country |
| ----- | --- | --------- | --- | ------- |
| id    |     | id        |     | id      |
| name  |     | name      |     | name    |
| icon  |     | gender    |     | flag    |
|       |     | age       |     | code    |
|       |     | height    |     |         |
|       |     | image     |     |         |

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
