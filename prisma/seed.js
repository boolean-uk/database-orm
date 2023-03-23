const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
            contact: {
                create: {
                    email: 'alice@test.com',
                    phone: '+441231231234'
                },
            },
        },
        include: {
            contact: true
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here
    const createdMovie = await prisma.movie.create({
        data: {
            title: 'The Old Guard',
            runtimeMins: 128
        }
    })
    console.log("created movie", createdMovie);


    const createdScreen = await prisma.screen.create({
        data: {
            number: 6,
            screenings: {
                create: {
                    startsAt: new Date('2023-03-22 15:51:56Z'),
                    movie: {
                        connect: {
                            id: createdMovie.id
                        },
                    },
                },
            },
        },
        include: {
            screenings: {
                include: {
                    movie: true
                }
            }
        }
    })
    console.log(" screen created", createdScreen);


    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: {
                    id: createdCustomer.id
                }
            },
            screenings: {
                connect: {
                    id: createdScreen.screenings[0].id
                },
            },
        },
        include: {
            customer: true,

            screenings:{
                include: {
                    movie: true
                }
            }   

        }

    })
    console.log('created ticket', createdTicket);






    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
