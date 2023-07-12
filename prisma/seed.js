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

  const createdMovie = await prisma.movie.create({
    data: {
      runtimeMins: 125,
      title: "movie"
    }
  })

  console.log("Created movie", createdMovie);

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: "2023-09-12T18:30:00.000Z"
    }
  })

  console.log("Created screening", createdScreening);

  const createdContact = await prisma.contact.create({
    data: {
      phone: "0123456789",
      email: "abc@mail.co",
      customer: {
        connect: {
          id: 1
        }
      }
    },
  });

  console.log("Contact created", createdContact);

  const createdScreenings = await prisma.screenings.createMany({
    data: [{
      startsAt: "2023-09-12T15:30:00.000Z",
      movie: {
        connect: 1
      }
    },
    {
      startsAt: "2023-09-12T20:15:00.000Z",
      movie: {
        connect: 1
      }
    }
  ]
  })

  console.log("Screenings created", createdScreenings);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
