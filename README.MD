## Instalación

```bash
npm install --save-dev typescript @types/node @types/express ts-node
```

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
|       |     | age       |     |         |
|       |     | height    |     |         |
