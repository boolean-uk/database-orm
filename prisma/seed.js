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
    include: {
      contact: true,
    },
  });
  console.log("Customer created", createdCustomer);

  const createdScreen = await prisma.screen.create({
    data: {
      number: 1,
    },
  });
  console.log("Customer created", createdScreen);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Alice in Wonderland",
      runtimeMins: 108,
      screenings: {
        create: [
          {
            startsAt: new Date("2023-12-31 13:00:00"),
            screen: { connect: { id: createdScreen.id } },
          },
          {
            startsAt: new Date("2023-12-31 13:30:00"),
            screen: { connect: { id: createdScreen.id } },
          },
          {
            startsAt: new Date("2023-12-31 14:55:00"),
            screen: { connect: { id: createdScreen.id } },
          },
        ],
      },
    },
    include: {
      screenings: true,
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
