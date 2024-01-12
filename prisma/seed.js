const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  const createdContact = await prisma.contact.create({
    data: {
      phone: "0736509060",
      email: "alice.sth@gmail.com",
    },
  });

  console.log("Created contact:", createdContact);

  const createdContactWithCustomerRelation = await prisma.customer.create({
    data: {
        phone: "0798769032",
        email: "bob.sth@gmail.com",
        customer: {
            create: {
                name: "John"
            }
        }
    },
  });

  console.log("Created contact with customer:", createdContactWithCustomerRelation);


  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
