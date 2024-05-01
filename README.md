<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Ejecutar en desarrollo

1. Clonar el repositiorio.
2. Ejecutar.

```bash
$ npm install
```

3. Tener Nest CLI instalado.

```bash
$ npm i -g @nestjs/cli
```

4. Clonar el archivo `.env.template ` y renombrar la copia a `.env`.

5. Llenar las variables de entorno definidas en el `.env`.

6. Levantar la aplicacion en modo desarrollo:

```bash
 $ npm run start:dev
```

7. Levantar la base de datos.

```bash
$ docker-compose up -d
```

8. Reconstruir la base de datos con la semilla

```bash
$ /api/v2/seed
```

## Stack usado

- NestJS
- Mongo DB
- Docker
