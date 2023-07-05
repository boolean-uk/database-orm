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

    const createMovie = await prisma.movie.create({
        data: {
            title: "Happy Gilmore",
            runtimeMins: 100
        }
    })
    console.log("createmovie", createMovie)

    const createScreen = await prisma.screen.create({
        data: {
            number: 5
        }
    })
    console.log("createScreen", createScreen)

    const createScreening = await prisma.screening.createMany({
        data: [
            {
            movieId: 1,
            screenId: 1
        },
        {
            movieId: 1,
            screenId: 1
        }
    ]
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
            }, 
        ]
    })
    console.log('createTicket', createTicket)
    // Don't edit any of the code below this lingit ade
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
