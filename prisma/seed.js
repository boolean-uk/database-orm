const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });
  console.log("Customer created", createdCustomer);

  const createdNewContact = await prisma.contact.create({
    data: {
      email: "alice@wonderland.com",
      phone: "07766123456",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });
  // console.log("createdContact", createdNewContact);

  const creatCustomerWithContact = await prisma.customer.create({
    data: {
      name: "Rasheed",
      contact: {
        create: {
          phone: "2345123456",
          email: "rasheed@gmail.com",
        },
      },
    },
  });
  // console.log("Customer with contact created", creatCustomerWithContact);

  const createMovie = await prisma.movie.create({
    data: {
      title: "Any reasonable title",
      runtimeMins: 99,
    },
  });
  // console.log("createMovie", createMovie);

  const createScreen = await prisma.screen.create({
    data: {
      number: 9,
    },
  });
  console.log("createScreen", createScreen);

  const createScreening = await prisma.screening.create({
    data: {
      startAt: new Date().toISOString(),
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
  // console.log("createScreening", createScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
