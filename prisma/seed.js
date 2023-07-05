const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdFirstContact = await prisma.contact.create({
    data: {
      phone: "074352634712",
      email: "Rahman@outlook.com",
      customer: {
        create: {
          name: "Rahman",
        },
      },
    },
  });

  const createdSecondContact = await prisma.contact.create({
    data: {
      phone: "07445736634712",
      email: "muhammad@gmail.com",
      customer: {
        create: {
          name: "Muhammad",
        },
      },
    },
  });

  const createdThirdContact = await prisma.contact.create({
    data: {
      phone: "98465736634712",
      email: "Samir@yahoo.com",
      customer: {
        create: {
          name: "Samir",
        },
      },
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Power",
      runtimeMins: 101,
    },
  });

  const createdScreen = await prisma.screen.create({
    data: {
      number: 9,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date().toLocaleString(),
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

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
