const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Dragon",
      contact: {
        create: {
          email: "dragon@jack.com",
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
  const createdScreen = await prisma.screen.create({
    data: {
      number: 16,
    },
  });

  console.log("Movie created", createdScreen);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Moana",
      runtimeMins: 125,
      screening: {
        create: [
          {
            startsAt: new Date("2023-03-24 09:00:00"),
            screen: { connect: { id: createdScreen.id } },
          },
        ],
      },
    },
    include: {
      screening: true,
    },
  });
  console.log("Movie created", createdMovie);

  const createdTicket = await prisma.ticket.create({
    data: {
      customer: { connect: { id: 1 } },
      screening: { connect: { id: 1 } },
    },
  });
  console.log("Movie created", createdTicket);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
