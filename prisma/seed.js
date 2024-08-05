const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);
  const createdContact = await prisma.contact.create({
    data: {
      phone: "12345",
      email: "elizabeth@yahoo.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(createdContact);
  const createdMovie = await prisma.movie.create({
    data: {
      title: "beauty and the beast",
      runtimeMins: 2,
    },
  });
  console.log(createdMovie);
  const createdScreen = await prisma.screen.create({
    data: {
      number: 1,
    },
  });
  console.log(createdScreen);
  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: "2024-01-20T12:00:00Z",
      movie: {
        connect: {
          id: 1,
        },
      },
      screen: {
        connect: {
          id: createdScreen.id,
        },
      },
    },
  });
  console.log(createdScreening);

  const createdTicket = await prisma.ticket.create({
    data: {
      customer: {
        connect: {
          id: 1,
        },
      },
      screening: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(createdTicket);

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
