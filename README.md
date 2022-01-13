# Databases - ORM's using Prisma.js

## Quick start

1. Create a new instance in ElephantSQL
2. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
3. Create another new instance in ElephantSQL (this will be your shadow database)
4. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the shadow database you just created. Leave `?schema=public` at the end.
5. Run `npm ci` to install the project dependencies
6. Run `npx prisma migrate reset -f` to execute the existing migration & data seed


