# Movie & Screening relationship

![](../assets/MovieScreening_Relation.PNG)

## Instructions

- Add the relevant relationship between `Movie` and `Screening`.
- Use [this documentation](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-many-relations) as a guide.

## Development Process

1. Work through the instructions of this requirement
2. Run `npx prisma generate` in your terminal to recompile the prisma client package.
    1. [What does this command do?](../resources/prisma-generate.md)
3. Edit the `seed` function in the `prisma/seed.js` file to create a record for the model / relation you added in the first step.
    1. [How to create records](https://www.prisma.io/docs/concepts/components/prisma-client/crud#create-a-single-record)
    2. [What is seeding?](../resources/db-seeding.md)
4. Run `npx prisma migrate dev --create-only --skip-seed --name movie_screening_relation` to create a new migration file.
    1. [What does this command do?](../resources/db-migrations.md)
5. Run `npx prisma migrate reset` to apply your migration files to the database and run the seed function.
6. Go to your database instance in ElephantSQL, open the `Browser` section, click the `Table queries` drop-down, select the model you've been working on and click `Execute` to check that your data is being inserted correctly.

## An explanation of the `@relation` attribute

When defining a relationship where multiple records are involved (one movie can have many screenings), we begin to see a new attribute in our schema: `@relation`.

This is the function Prisma uses to create the right relationship based on two parameters that you provide: the ID foreign key property on the *current* model, and the ID primary key on the target model that it's related to. Let's use Prisma's own example:

```js
model User {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  user      User    @relation(fields: [userId], references: [id])
  userId    Int
}
```

This example shows that **one** `User` can have **many** `Posts`. On the `User` model, there is a property called `posts` which has a type of `Post[]` - the `[]` means an array of `Post` models.

To complete the relation, we need to provide the appropriate ID on the `Post` model. `Post` has a property named `userId` with a type of `Int`, this is what will store the related user's ID. It also has a property of `user` with a type of `User`, this is where we define the actual relation.

The `@relation()` attribute here has two named parameters - `fields` and `references`. `fields` refers to which property on the `Post` model stores the user's ID, and `references` refers to that same property but on the `User` model itself.

```js
// The Post.userId field references the User.id field
@relation(fields: [userId], references: [id])
```