const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdContact1 = await prisma.contact.create({
    data: {
      phone: "12334",
      email: "alice@email.com",
      customer: {
        create: {
          name: "Alice",
        },
      },
    },
  });

  console.log("Contact 1 created", createdContact1);

  const createdContact2 = await prisma.contact.create({
    data: {
      phone: "0118 999 881 999 119 725 3",
      email: "moss@reynholm.co.uk",
      customer: {
        create: {
          name: "Moss",
        },
      },
    },
  });

  console.log("Contact 2 created", createdContact2);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
