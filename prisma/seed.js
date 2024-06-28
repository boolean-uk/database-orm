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

    const createdContact = await prisma.contact.create({
        data: {
            phone: "07777777777",
            email: "mail@email.com",
            customerId: 1
        }
    })

    console.log('Contact created', createdContact);

    const createdMovie = await prisma.movie.create({
        data: {
            title: "Crazy Movie",
            runtimeMins: 121,
        }
    })

    console.log('Movie created', createdMovie);

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1,
        }
    })

    console.log('Screen created', createdScreen);

    const createdScreening = await prisma.screening.create({
        data: {
            movieId: 1,
            screenId: 1,
            startsAt: new Date(2024,10,12,8,34,52)
        }
    })

    console.log('Screening created', createdScreening);

    const createdTicket = await prisma.ticket.create({
        data: {
            customerId: 1,
            screeningId: 1,
        }
    })

    console.log('Ticket created', createdTicket);


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
