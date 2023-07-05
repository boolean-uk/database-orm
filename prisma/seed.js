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
      phone: "07974 205 055",
      email: "sarajbeazley@gmail.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log("Contact created", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Sound of Music",
      runtimeMins: 90,
    },
  });

  const createdScreen = await prisma.screen.create({
    data: {
      number: 1,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("2023-05-21 19:00:00"),
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

  const createdTicket = await prisma.ticket.create({
    data: {
        customer: {
            connect: {
                id: 1
            }
        },
        screening: {
            connect: {
                id: 1
            }
        },
    }
  })

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
