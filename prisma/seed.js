const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdScreen = await prisma.screen.create({
    data: {
      number: 2,
    },
  });
  console.log("Screen created", createdScreen);

  // const createdTicketTwo = await prisma.ticket.create({
  //   data: {
  //     number: 2,
  //   },
  // });
  // console.log("Customer created", createdTicket);

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

  const createdTicket = await prisma.ticket.create({
    data: {
      customer: { connect: { id: 1 } },
      screening: { connect: { id: 2 } },
    },
  });
  console.log("Ticket created", createdTicket);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
