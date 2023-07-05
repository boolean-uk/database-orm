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
            phone: "07766123456",
            email: "alice@wonderland.com",
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

    const createScreen = await prisma.screen.create({
        data: {
            number: 3
        }
    })
    console.log("createScreen", createScreen)

    const createScreening = await prisma.screening.createMany({
        data: [
            {
                movieId: 1,
                screenId: 1
            }, {
                movieId: 1,
                screenId: 1
            }]
    })
    console.log("createScreening", createScreening)

    const createTicket = await prisma.ticket.createMany({
        data: [
            {
                customerId: 1,
                screeningId: 1
            },
            {
                customerId: 1,
                screeningId: 1
            },
            {
                customerId: 1,
                screeningId: 1
            }
        ]
    })

    console.log('createTicket', createTicket)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
