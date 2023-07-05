const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here

    const createContact = await prisma.contact.create({
        data: {
            email: "alice@wonderland.com",
            phone: "07766123456",
            customer: {
                connect: {
                    id: 1
                }
            }
        }
    })
    console.log('createdContect', createContact)

    const createMovie = await prisma.movie.create({
        data: {
            title: "Superman",
            runtimeMins: 120
        }
    })
    console.log("createmovie", createMovie)

    const createScreening = await prisma.screening.createMany({
        data: [
            {
                movie_id: 1
            }, {
                movie_id: 1
            }]
    })
    console.log("createScreening", createScreening)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
