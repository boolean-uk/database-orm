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
      phone: "+49124746564",
      email: "my@gmail.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });

  console.log("Contact created", createdContact);

  const createdMovie = await prisma.movie.createMany({
    data: [
      {
        title: "The Lion King",
        runtimeMins: 225,
      },
      {
        title: "The Passion",
        runtimeMins: 300,
      },
    ],
  });

  const countOfMovie = createdMovie.length;

  const createdScreen = await prisma.screening.createMany({
    data: Array.from({ length: countOfMovie }, (_, index) => ({
      startsAt: { select: { now: true } },
    })),
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
