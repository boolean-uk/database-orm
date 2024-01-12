const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  // Add your code here
  const createdContact = await prisma.contact.create({
    data: {
      phone: "+447745757561",
      email: "example@gmail.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
