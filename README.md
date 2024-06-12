## Rest API Menu

This is the repository for service menu API. In this project we can buy some food on the menu. The project uses express js and uses sequelize as an ORM with a postresql database. The default port in this server will be `3456` and the host is `localhost`. 

To use the environment variable, copy the `.env.example` like below :
```bash
cp .env.example .env
```

This project uses environment variables to configure the application. Below is a description of each variable:
* `PORT`: The port number where the server will listen for requests. Default is 3456.

* `DB_NAME`: The name of the database that the application will connect to.

* `DB_USER`: The username used to authenticate with the database.

* `DB_PASSWORD`: The password used to authenticate with the database.

* `DB_HOST`: The host of the database. If you're running the database locally, this will be localhost. If you're running the database in a Docker container, this will be the IP address of the Docker container.

* `DB_PORT`: The port number where the database is listening for connections. Default is 5432 for PostgreSQL.

* `DB_DIALECT`: The dialect/engine of the database. This application is configured to use postgres.

* `MENU_ONE`, `MENU_TWO`, `MENU_THREE`: These are the default menu items that the application will use.

To start the server please run :
```bash
npm install
npm run dev
```

Before starting the project, first run migrate and seed :
```bash
npx sequelize db:migrate
npx sequelize db:seed:all
```

### Docker
```bash
docker build . -t <image-name:tag>
docker push <image-name:tag>
docker pull <image-name:tag>
```

This application is configured to be run using Docker Compose. This makes it easy to manage the application and its dependencies with just a few commands.

To start the application with Docker Compose, make sure you have Docker installed on your machine, then run:

```bash
docker-compose --env-file .env up -d
```
#### Documentation API : https://www.postman.com/belegasquad/workspace/api-menu-food