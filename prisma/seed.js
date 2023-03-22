const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Jack",
      contact: {
        create: {
          email: "jack@jack.com",
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
      title: "Pirates of the Carribean",
      runtimeMins: 126,
    },
  });
  console.log("Movie created", createdMovie);

  const createdScreening = await prisma.screening.create({ data: {} });
  console.log("Screening created", createdScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
