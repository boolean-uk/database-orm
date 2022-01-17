# Databases - ORM's using Prisma.js

> An object-relational mapper provides a layer between relational databases and programming languages without the need to write SQL. It standardizes interfaces, reducing boilerplate while speeding up development time. With the Prisma.js ORM, we can interact with our database by writing Javascript instead of executing SQL.

## Learning Objectives
- Use an ORM to implement a database design.
- Use an ORM to create data in a database.
- Follow an iterative development workflow style.

## Introduction

SQL is useful but it can be hard to debug and maintain, especially as an application grows in size. There are many ORM's out there for many languages, but we'll only be using [Prisma.js](https://www.prisma.io/docs/) during the Boolean course.

A vital piece of our skillset as software developers is our ability to use documentation to work with a tool we have little to no experience with. Prisma's documentation is comprehensive and easy to navigate, which is why we'll be using it to improve these skills during this module.

Though not required, you may find it useful to [read about Prisma's core concepts](https://www.prisma.io/docs/concepts/overview/what-is-prisma).

To work with Prisma in our development environments, we require two databases:
1. The *Primary* database - this is the one you have designed with your Entity Relationship Diagram and will contain all of your tables and data.
2. The [*Shadow* database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database) - this is a temporary database that Prisma uses to check that everything works properly before making any changes to the primary database. It's essentially a safety net to protect us from ourselves.

**Note: Shadow databases are a concept specific to Prisma, not ORM's in general. In most cases, an ORM will execute migrations as a transaction that can be reversed if anything goes wrong. If you're interested in this subject, [here's an example](./db-transactions.md).**

## Setting up

1. Create a new database instance in [ElephantSQL](https://www.elephantsql.com/).
2. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
3. Create another new instance in ElephantSQL (this will be your [Shadow Database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database)).
4. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the shadow database you just created. Leave `?schema=public` at the end.
5. Run `npm ci` to install the project dependencies.
6. Run `npx prisma migrate reset` to execute the existing migration & data seed. Press `y` when it asks if you're sure.

## Instructions

- Work through each `requirement-x.md` file in this repository
- Follow the full [Development Process](#development-process) below after completing a requirement before moving on to the next one
- If you want to make any changes to an existing entity, follow the development process for each change you want to make.

## Development Process

1. Work through the instructions of a requirement
2. Run `npx prisma generate` in your terminal to recompile the prisma client package.
3. Edit the `seed` function in the `prisma/seed.js` file to create a record for the model / relation you added in the first step.
    1. [How to create records](https://www.prisma.io/docs/concepts/components/prisma-client/crud#create-a-single-record)
4. Run `npx prisma migrate reset` to apply your schema changes to the database and run your seed code.
5. Go to your database instance in ElephantSQL, open the `Browser` section, click the `Table queries` drop-down, select the model you've been working on and click `Execute` to check that your data is being inserted correctly.

## Collection of Useful Documentation

- [Defining models in the schema](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-models)
- [Defining fields (properties) on models](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-fields)
- [List of field types (e.g. String, Boolean)](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types)
- [Defining attributes on fields (e.g. @id, @default, @unique)](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-attributes)
- [List of attribute types](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attributes)
- [Attribute functions (e.g. autoincrement(), default())](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attribute-functions)
- [Defining one-to-one relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-one-relations)
- [Defining one-to-many relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-many-relations)