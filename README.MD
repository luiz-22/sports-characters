## Instalación

```bash
npm install --save-dev typescript @types/node @types/express ts-node
```

Para lectura y escritura de archivos json.

```bash
npm install --save jsonfile
```

## Configuración

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

Abre tu archivo `package.json` y define los siguientes scripts en la sección "scripts":

```json
"scripts": {
    "start": "nodemon index.ts",
    "build": "tsc",
    "watch:ts": "tsc --watch"
}
```

| sport | N:M | character | N:1 | country |
| ----- | --- | --------- | --- | ------- |
| id    |     | id        |     | id      |
| name  |     | name      |     | name    |
| icon  |     | gender    |     | flag    |
|       |     | age       |     | code    |
|       |     | height    |     |         |
|       |     | image     |     |         |

```json
{
  "id": 35,
  "name": "Pepe",
  "gender": "Male",
  "age": 47,
  "height": 1.79,
  "image": "https://assetsio.reedpopcdn.com/digitalfoundry-2015-is-batman-arkham-knight-the-generational-leap-we-were-hoping-for-1435051185884.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  "country": {
    "name": "Australia",
    "flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg"
  },
  "sports": [
    {
      "name": "badminton",
      "icon": "🏸"
    },
    {
      "name": "ice skating",
      "icon": "⛸️"
    }
  ]
}
```
