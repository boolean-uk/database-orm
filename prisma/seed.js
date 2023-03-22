const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
        },
    });

    console.log('Customer created', createdCustomer);

    // Add your code here
    const createdContact = await prisma.contact.create({
        data: {
            email: 'test@test.com',
            phone: '+447123123123',
            customer: {
                connect: { id: 1 },
            },
        },
    });

    console.log('Contact created', createdContact);

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1,
        },
    });

    console.log('Screen created', createdScreen);

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Movie Title',
            runtimeMins: 130,
        },
    });

    console.log('Movie created', createdMovie);

    const createdScreening = await prisma.screening.create({
        data: {
            movie: {
                connect: { id: 1 },
            },
            screen: {
                connect: { id: 1 },
            },
            startsAt: new Date('2023-11-06 13:45:00'),
        },
    });

    console.log('Screening created', createdScreening);

    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: { id: 1 },
            },
            screening: {
                connect: { id: 1 },
            },
        },
    });

    console.log('Ticket created', createdTicket);

    // Don't edit any of the code below this line
    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
