## Rest API Menu

This is the repository for service menu API. In this project we can buy some food on the menu. The project uses express js and uses sequelize as an ORM with a postresql database. The default port in this server will be `5432` and the host is `localhost`.

To start the server please run:
```bash
npm install
npm run dev
```

Before starting the project, first run migrate and seed:
```bash
npx sequelize db:migrate
npx sequelize db:seed:all
```

#### Docker Image : 
#### Documentation API : https://www.postman.com/belegasquad/workspace/api-menu-food