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
        phone: "0736509060",
        email: "alice.sth@gmail.com",
        customer: {
            connect: {
                id:1
            }
        }
      },
  });

  console.log("Created contact with customer:", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "The Fellowship of The Ring",
      runtimeMins: 178
    }
  })

  console.log(createdMovie)


  const createdShowing = await prisma.screening.create({
    data: {
      startsAt: '2001-12-10 20:00:00 +0000'
    }
  })

  console.log(createdShowing)



  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
