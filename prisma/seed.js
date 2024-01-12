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

  const createMovie = await prisma.movie.createMany({
    data:[ {
      title: "King Kong",
      runtimeMins: 190,
    },
    {
      title: "Inception",
      runtimeMins: 150,
    },
  ]
  });

  const movieCount = createMovie.length;

  const createScreen = await prisma.screening.createMany({
    data: Array.from({ length: movieCount }, (_, index) => ({
      startsAt: { select: { now: true } },
    })),
  });

  // const createScreen = await prisma.screening.create({
  //   data: {},
  // });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
