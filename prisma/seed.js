const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      customerId: 1,
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  const createdContact = await prisma.contact.create({
    data: {
      phone: "12345678911",
      email: "averyrealemail@gmail.com",
      customerId: 1,
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Spider-man",
      runtimeMins: 120,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date(2024, 10, 12, 8, 34, 52),
      movieId: 2,
    },
  });

  const createdScreen = await prisma.screen.create({
    data: {
      number: 23,
    },
  });

  const createdTicket = await prisma.ticket.create({
    data: {
      customerId: 1,
      screeningId: 1,
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
