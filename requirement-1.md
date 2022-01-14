# Customer & Contact

![](./assets/CustomerContact_NoRelation.PNG)

The `Customer` model has already been created for you in the `prisma/schema.prisma` file to give you a working example of how to define models with properties & attributes.

## Instructions
- Create the `Contact` model based on the diagram above. Don't add any relationships yet.
- Use the existing `Customer` model as a reference to help you extract the useful information from [this documentation](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-models).

## An explanation of `@id @default(autoincrement())`

Each of your models will have some properties & attributes that look the same. These are `id`, `createdAt` and `updatedAt` - let's understand what these are.

`id` is the identity number of the record that gets created - we never need to give this information to Prisma, the database will take care of it automatically. This is thanks to the `@id` and `@default(autoincrement())` attributes.

- `@id` tells Prisma that this property is the primary key of the model.
- `@default()` tells Prisma that we want to provide a default value for this property when a record gets created. The value we provide it is `autoincrement()`
- `autoincrement()` is a function that Prisma uses to automatically assign the next available integer as the value to the ID property.

If we want to provide a hard default value to something, we would pass it in to `@default`. For example, to make every created record have an id of 7, our model might look like this:

```js
model MyModel {
    id  Int     @id @default(7)
}
```

This won't work in practice because identities need to be unique, but in theory it would ensure that every `MyModel` record that was created would have an id of 7. Let's change it to use autoincrement below:

```js
model MyModel {
    id  Int     @id @default(autoincrement())
}
```

This will now make sure that the first `MyModel` that gets created will have an id of 1, the second will have an id of 2, etc.