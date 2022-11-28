const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    // const createdCustomer = await prisma.customer.create({
    //     data: {
    //         name: 'Alice'
    //     }
    // });

    // console.log('Customer created', createdCustomer);

    // Add your code here

    // const createdContact = await prisma.contact.create({
    //     data: {
    //         phone: '9871234567',
    //         email: 'alice@won.com',
    //         customer: {
    //    //  If a customer cannot exist without a customer contact, then it makes sense to make them together.
    //    //  If they can exist without eachother though, then it makes sense to connect 
    //             connect: {
    //                 customerId: 1,
    //                 customerName: 'Alice',
    //             }
    //         }
    //     }
    // })

    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
            contact: {
                create: {
                    phone: '9871234567',
                    email: 'alice@won.com',
                }
            }
        }
    })

    console.log('Customer created', createdCustomer);

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Alice in Wonderland',
            runtimeMins: 75
        }
    })
    console.log('Movie created', createdMovie)

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1,
        },
    });
    console.log("Screen created", createdScreen)

    const createdScreening = await prisma.screening.create({
        data: {
            movie: {
                connect: { id: 1 },
            },
            screen: {
                connect: { id: 1 },
            },
        },
    });
    console.log("Screening created", createdScreening)

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
    console.log("Ticket created", createdTicket);

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
