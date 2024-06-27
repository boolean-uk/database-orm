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
            phone: '+496897768690',
            email: 'hello@hellou.org',
            customer_id: createdCustomer.id
        }

    })

    const createMovie = await prisma.movie.create({
        data: {
            title: 'Something something',
            runtimeMins: 200
        }
    })

    console.log("movie created", createMovie)

    const createScreen = await prisma.screen.create({
        data: {
            number: 235
        }
    })

    console.log("created screen", createScreen)

    const createScreening = await prisma.screening.create({
        data: {
            startsAt: new Date().toISOString(),
            movie_id: createMovie.id,
            screen_id: createScreen.id
        }
    })

    console.log("screening created", createScreening)

    const createTicket = await prisma.ticket.create({
        data: {
            customer_id: createdCustomer.id,
            screening_id: createScreening.id
        }
    })

    console.log("ticket created", createTicket)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
