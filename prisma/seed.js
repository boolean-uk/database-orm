const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      contact: {
        create: {
          phone: "+672338056682",
          email: "alice-butler@aliceinwonderland.com",
        },
      },
    },
  });
  console.log("Customer created", createdCustomer);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Alice in Wonderland",
      runtimeMins: 108,
    },
  });
  console.log("Movie created", createdMovie);

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("2023-12-31 13:00:00"),
    },
  });
  console.log("Screening created", createdScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
