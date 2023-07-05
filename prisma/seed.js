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
  const createContact = await prisma.contact.create({
    data: {
      phone: "123456789",
      email: "myemail@myemail.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });

  console.log("Contact created", createContact);

  const createMovie = await prisma.movie.create({
    data: {
      title: "Movie",
      runtimeMins: 90,
    },
  });

  console.log("Movie created", createMovie);

  const createScreen = await prisma.screen.create({
    data: {
      number: 9,
    },
  });

  console.log("Screen created", createScreen);

  const createScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("2023-07-05 01:00:00"),
      movie: {
        connect: {
          id: 1,
        },
      },
      screen: {
        connect: {
          id: 1,
        },
      },
    },
  });

  console.log("Screening created", createScreening);

  const createTicket = await prisma.ticket.create({
    data: {
      customer: { connect: { id: 1 } },
      screening: { connect: { id: 1 } },
    },
  });

  console.log("Ticket created", createTicket);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
