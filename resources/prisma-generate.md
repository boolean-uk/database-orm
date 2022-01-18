# Prisma Client Generation

When you first install Prisma into your project, it'll run a generator to create a Prisma client for you to use based on your schema file.

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