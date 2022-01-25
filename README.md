# Databases - ORM's using Prisma.js

> An object-relational mapper provides a layer between relational databases and programming languages without the need to write SQL. It standardizes interfaces, reducing boilerplate while speeding up development time. With the Prisma.js ORM, we can interact with our database by writing Javascript instead of executing SQL.

## Learning Objectives
- Use an ORM to implement a database design.
- Use an ORM to create data in a database.
- Follow an iterative development workflow style using documentation as a guide.

## Introduction

SQL is useful but it can be hard to debug and maintain, especially as an application grows in size. There are many ORM's out there for many languages; we'll be using [Prisma.js](https://www.prisma.io/docs/) during the Boolean course.

A vital piece of our skillset as software developers is our ability to use documentation to work with a tool we have little to no experience with. Prisma's documentation is comprehensive and easy to navigate, which is why we'll be using it to improve these skills during this module.

Though not required, you may find it useful to [read about Prisma's core concepts](https://www.prisma.io/docs/concepts/overview/what-is-prisma).

To work with Prisma in our development environments, we require two databases:
1. The *Primary* database - this is the one you have designed with your Entity Relationship Diagram and will contain all of your tables and data.
2. The [*Shadow* database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database) - this is a temporary database that Prisma uses to check that everything works properly before making any changes to the primary database. It's essentially a safety net to protect us from ourselves.

**Note: Shadow databases are a concept specific to Prisma, not ORM's in general. In most cases, an ORM will execute migrations as a transaction that can be reversed if anything goes wrong. If you're interested in this subject, [here's an example](./resources/db-transactions.md).**

## Setting up

There are a few steps to getting set up for this exercise due to having to configure the project to use a database in the cloud.

1. Rename the `.env.example` file to `.env`
2. Create a new database instance in [ElephantSQL](https://www.elephantsql.com/).
3. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
4. Create another new instance in ElephantSQL (this will be your [Shadow Database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database)).
5. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the shadow database you just created. Leave `?schema=shadow` at the end.
6. Back in your ElephantSQL shadow database instance, go to the `Browser` tab and enter `CREATE SCHEMA shadow` then press the `Execute` button. This creates a schema for Prisma to use for the shadow database.
7. Run `npm ci` to install the project dependencies.
8. Run `npx prisma migrate reset` to execute the existing migration & data seed. Press `y` when it asks if you're sure.

## Instructions

- Work through each file in the `requirements` directory in numerical order
- Follow the full Development Process in the requirement file before moving to the next requirement

## Collection of Useful Documentation

- [Defining models in the schema](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-models)
- [Defining fields (properties) on models](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-fields)
- [List of field types (e.g. String, Boolean)](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types)
- [Defining attributes on fields (e.g. @id, @default, @unique)](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-attributes)
- [List of attribute types](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attributes)
- [Attribute functions (e.g. autoincrement(), default())](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attribute-functions)
- [Defining one-to-one relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-one-relations)
- [Defining one-to-many relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-many-relations)