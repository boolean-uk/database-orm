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
      phone: "+4407123456789",
      email: "alice@email.com",
      customer: {
        connect: {
          id: 1,
        },
      },
    },
  });

  console.log("Contact created", createdContact);

  const createdCustomerWithContact = await prisma.customer.create({
    data: {
      name: "John",
      contact: {
        create: {
          phone: "+4407987654321",
          email: "johndoeisking@email.com",
        },
      },
    },
  });

  console.log("Customer with contact created", createdCustomerWithContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "The awakening",
      runtimeMins: 173,
    },
  });

  console.log("Movie created", createdMovie);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
