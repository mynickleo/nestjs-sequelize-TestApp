## Nest JS Тестовое

## Описание

Тестовое задание - Nest Js + Sequelize + PostgreSQL

Есть функционал создания, поиска по id, поиска по имени, удаления

> Создать users можно по адресу /users, books - /books, authors - /authors

Пример создания для users:
```
{
  id: 1,
  surname: "John",
  bookId?: 1
}
```

Пример создания для books:
```
{
  id: 1,
  name: "Book",
  price: 1000,
  authorId?: 1
}
```

Пример создания для authors:
```
{
  id: 1,
  authorName: "Johnny",
  bookId?: 1
}
```

> Более подробно можно посмотреть по коду в моделях + dto + репозитории базы данных


P.S. Сделал бы еще тестирование и все CRUD операции, но времени уже нет. Постарался сделать грамотную архитектуру DDD

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```