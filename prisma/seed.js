const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      contact: {
        create: {
          phone: "34568976253",
          email: "test@test.com",
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
      number: 3,
      screenings: {
        create: {
          startsAt: new Date("2023-03-22T11:31:40.075Z"),
          movie: {
            create: {
              title: "John Woke",
              runtimeMins: 115,
            },
          },
        },
      },
    },
    include: {
      screenings: {
        include: {
          movie: true,
        },
      },
    },
  });

  console.log("Screen created", createdScreen);

  const createdTicket = await prisma.ticket.create({
    data: {
      customer: {
        connect: { id: 1 },
      },
      screening: {
        connect: { id: 1 },
      },
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
