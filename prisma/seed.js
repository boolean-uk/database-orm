const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Blue",
      contact: {
        create: {
          email: "blue@jack.com",
          phone: "+44123123123",
        },
      },
    },
    include: {
      contact: true,
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Baymax",
      runtimeMins: 135,
      screening: {
        create: {},
      },
    },
    include: {
      screening: true,
    },
  });
  console.log("Movie created", createdMovie);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
