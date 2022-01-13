# Databases - ORM's using Prisma.js

## Learning Objectives
- Use an ORM to implement a database design
- Use an ORM to create data records in a database

## Setting up

1. Create a new instance in [ElephantSQL](https://www.elephantsql.com/).
2. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
3. Create another new instance in ElephantSQL (this will be your [Shadow Database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database)).
4. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the shadow database you just created. Leave `?schema=public` at the end.
5. Run `npm ci` to install the project dependencies.
6. Run `npx prisma migrate reset -f` to execute the existing migration & data seed.

## Instructions

- Follow the "Development Process" below for each individual entity, and each individual relationship.

## Development Process

1. Create one entity *or* relationship in the `prisma/schema.prisma` file
2. Run `npx prisma generate` in your terminal to recompile the prisma client package
3. Edit the `seed` function in the `prisma/seed.js` file to create a record for the model / relation you added in step 1
4. Run `npx prisma migrate reset -f` to apply your schema changes to the database and run your seed code
5. Go to your database instance in ElephantSQL, open the `Browser` section, click the `Table queries` drop-down, select the model you've been working on and click `Execute` to check that your data is being inserted correctly