const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      contact: {
        create: {
          phone: "123-456-789-101",
          email: "new-email@gmail.com",
        },
      },
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  // const createdContact = await prisma.contact.create({
  //   data: {
  //     phone: '000-111-222-333',
  //     email: 'alice123@gmail.com',
  //   },
  // });

  // console.log("Contact created", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: 'Shrek',
      runtimeMins: 90,
    },
  });

  console.log("Movie created", createdMovie);

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: '2024-07-07T11:30:00Z'
    },
  });

  console.log("Screening created", createdScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
