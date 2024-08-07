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
            phone: '07384120031',
            email: 'usamaibrahimusman@gmail.com',
            customer: {
                connect: {
                    id: createdCustomer.id
                }
            }
        }
    })
    console.log('contact created', createdContact)


    const createdMovie = await prisma.movie.create({
        data: {
            title: 'the forbidden kingdom!',
            runtimeMins: 120
        }
    })
    console.log('Movie created', createdMovie)


    const createdScreen = await prisma.screen.create({
        data: {
            number: 33
        }
    })
    console.log('screen created', createdScreen)


    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '2024-01-14T11:19:59Z',
            movie: {
                connect: {
                    id: createdMovie.id
                }
            }, 
            screen: {
                connect: {
                    id:createdScreen.id
                }
            }
        }
    })
    console.log('screening created', createdScreening)



    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: {
                    id: createdCustomer.id
                }
            },
            screening: {
                connect: {
                    id: createdScreening.id
                }
            }
        }
    })
    console.log('ticket bought', createdTicket)


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
