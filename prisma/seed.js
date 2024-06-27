const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
            contact: {
                create: {
                    phone: '003156879',
                    email: 'someemail'
                }
            }
        }
    });

    console.log('Customer created', createdCustomer);

    const createdScreen =  await prisma.screen.create({
        data: {
            number: 4
        }
    })

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'something',
            runtimeMins: 120
        }
    });

    console.log('Movie created', createdMovie);

    const createdScreening = await prisma.screening.create({
        data: {
            movie: {
                connect: createdMovie
            },
            startsAt: new Date(),
            screen: {
                connect: createdScreen
            }
        }
    })

    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: createdCustomer
            },
            screening: {
                connect: createdScreening
            }
        }
    })

    console.log('Ticket created', createdTicket);

    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
