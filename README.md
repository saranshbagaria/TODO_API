# TODO_API

![N|Solid](https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=node.js&logoColor=white?logoWidth=60?color=blue) ![N|Solid](https://img.shields.io/badge/Mongodb-001E2B?style=for-the-badge&logo=mongodb) ![N|Solid](https://img.shields.io/badge/typescript-fffff5?style=for-the-badge&logo=typescript&logoColor=white?logoWidth=60?color=blue)

![](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/npm-cc3534?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/swagger-000000?style=for-the-badge&logo=swagger&LogoColor=ffffff)

This is Todo api build with expressjs and nodejs most intresting part is i used
typescript for this project.

## Badges

A

## API Reference

#### Get all todos

```http
  GET /api/todos
```

#### Post new todo

```http
  GET /api/add-todo
```

- **Required**.body of todo to be send

#### Put new todo

```http
  PUT /api/edit-todo/{id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **required** id of todo to be checked |

- **Required**.body of todo to be send

```html
{ "done" : true }
```

#### Delete new todo

```http
  DELETE /api/delete-todo/{id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **required** id of todo to be checked |

## Installation

- Change MongoDb cluster url in config file
- Install Application Dependecy with npm

```html
npm update
```

##

## Deploy Locally

To deploy this project run

```bash
  npm start
```

## Documentation

To access the swagger documentation run following command

```http
  GET /api-docs
```

## Tech Stack

**Docs:** Swagger

**Server:** Node, Express
