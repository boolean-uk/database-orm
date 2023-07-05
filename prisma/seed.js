const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('createdCustomer', createdCustomer);

    // Add your code here

    const createdContact = await prisma.contact.create({
        data: {
            phone: '07777777777',
            email: 'email@email.com',
            customer: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log('createdContact', createdContact)

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Movie Title 1',
            runtimeMins: 95
        }
    })

    console.log('createdMovie', createdMovie)

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1,
        }
    })

    console.log('createdScreen', createdScreen)

    const createdScreening = await prisma.screening.create({
        data: {
            movie: {
                connect: {
                    id: 1
                }
            },
            screen: {
                connect: {
                    id: 1
                }
            },
            startsAt: new Date('2023-07-05T16:15:00Z')
        }
    })

    console.log('createdScreening', createdScreening)

    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: {
                    id: 1
                }
            },
            screening: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log('createdTicket', createdTicket)


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
