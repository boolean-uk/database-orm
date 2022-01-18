# Movie & Screening

![](../assets/MovieScreening_NoRelation.PNG)

## Instructions

- Add the `Movie` and `Screening` models without any relationship.

## Development Process

1. Work through the instructions of this requirement
2. Run `npx prisma generate` in your terminal to recompile the prisma client package.
    1. [What does this command do?](../resources/prisma-generate.md)
3. Edit the `seed` function in the `prisma/seed.js` file to create a record for the model / relation you added in the first step.
    1. [How to create records](https://www.prisma.io/docs/concepts/components/prisma-client/crud#create-a-single-record)
    2. [What is seeding?](../resources/db-seeding.md)
4. Run `npx prisma migrate reset` to apply your schema changes to the database and run your seed code.
    1. [What does this command do?](../resources/db-migrations.md)
5. Go to your database instance in ElephantSQL, open the `Browser` section, click the `Table queries` drop-down, select the model you've been working on and click `Execute` to check that your data is being inserted correctly.