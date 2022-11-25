const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
    include: {
      contact: true,
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  const createdContact = await prisma.contact.create({
    data: {
      phone: "12345678",
      email: "foo@bar.com",
      customer: {
        connect: { id: createdCustomer.id },
      },
    },
  });

  console.log("Contact created", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Good Movie Title",
      runtimeMins: 96,
    },
  });

  console.log("Movie created", createdMovie);

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date(628021800000),
      movie: {
        connect: { id: createdMovie.id },
      },
    },
  });

  console.log("Screening created", createdScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
