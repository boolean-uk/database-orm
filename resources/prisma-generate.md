# Prisma Client Generation

With Prisma, we define our database structure in the schema file. Prisma uses this file to create a Javascript object, the *"Prisma Client"*, that we can use in our code to access the entities in our database.

Whenever we make a change to our schema file, we must tell Prisma to update the Client with our changes. This is why we run `npx prisma generate`.

The Client Generator looks at our schema and creates a set of Javascript objects that we can then use to access the data for us.

Let's imagine our schema file contains the following:

```js
model Customer {
    id      Int     @id @default(autoincrement())
    name    String
}
```

When the Prisma client generates, it will allow you to access that `Customer` model on the Prisma client object:

```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

await prisma.customer.findMany();
```

Now we'll change our schema file to add a new model:

```js
model Customer {
    id      Int     @id @default(autoincrement())
    name    String
}

model Contact {
    ...
}
```

If we don't run the generator after adding this model, we won't be able to use it:

```js
// Won't work because Prisma client doesn't know about contact yet
await prisma.contact.findMany();
```

To ensure the client knows about our new model, we need to run `npx prisma generate`. Once done, the code above will work because we've told Prisma to scan the schema file and generate a new client with our new model.