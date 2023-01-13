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
            phone: '037541545',
            email: 'alice@gmail.com',
            customer: {
                connect: {
                    id: createdCustomer.id
                }
            }
        }
    });

    console.log('Contact created', createdContact);

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'new title',
            runtimeMins: 15
        }
    });

    console.log('Movie created', createdMovie);

    const createdScreen = await prisma.screen.create({
        data: {
            number: 10    
        }
    });
    
    console.log('Screen created', createdScreen);

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date(2023, 01, 10),
            movie: {
                connect:{
                    id: createdMovie.id
                }
            },
            screen: {
                connect:{
                    id: createdScreen.id
                }
            }
             
        }
    });
    
    console.log('Screening created', createdScreening);


    const createdTicket = await prisma.ticket.create({
        data: {
            screening: {
                connect:{
                    id: createdScreening.id
                }
            },
            customer: {
                connect:{
                    id: createdCustomer.id
                }
            }
             
        }
    });
    
    console.log('Screening created', createdScreening);
    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
