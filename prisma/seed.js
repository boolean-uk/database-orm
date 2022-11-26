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

  const contact = await prisma.contact.create({
    data: {
      phone: "12345",
      email: "bcdkj@k.com",
      customerId: 1,
    },
  });

  const movie = await prisma.movie.create({
    data: {
      title: "terminator 2",
      runtimeMins: 90,
    },
  });

  const screening = await prisma.screening.create({
    data: {
      startsAt: new Date(),
      movieId: 1,
    },
  });

  const screen = await prisma.screen.create({
    data: {
      number: 2,
    },
  });

  const ticket = await prisma.ticket.create({
    data: {},
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
