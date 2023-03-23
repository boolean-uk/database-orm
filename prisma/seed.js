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
            email: 'test@test.com',
            phone: '07448919191',
            customer: {
                connect: {id: 1}
            }
        }
    });

    console.log('Contact created', createdContact);

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'the big balloon',
            runtimeMins: 200
        }
    });

    console.log('movie created', createdMovie);
    const createdScreen = await prisma.screen.create({
        data: {
           number: 1
        }
    })

    const createdScreening = await prisma.screening.create({
        data: {
            movie: {
                connect: {id: 1}
            },
            screen: {
                connect: {id:1}
            },
            startsAt: new Date('2023-12-09 14:00:00')
        }
    })

    console.log('Screening created', createdScreening);

    console.log('screen created', createdScreen);

    const createdTicket = await prisma.ticket.create({
        data: {
            screening: {
                connect: {id: 1}
            },
            customer: {
                connect: {id: 1}
            }
        }
    })

    console.log('ticket Created', createdTicket);
    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
