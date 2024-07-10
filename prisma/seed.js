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
    const profile = await prisma.contact.create({
        data: {
            customerId: createdCustomer.id,
            phone: 'their phone',
            email: 'their email',
        }
    })

    console.log('customer profile created', profile)

    const cinemaScreen = await prisma.screen.create({
        data: {
            number: 12
        },
        data: {
            number: 2
        }
    })

    const movieBooked = await prisma.movie.create({
        data: {
            title: 'The Revenant',
            runtimeMins: 235,
            screenings: {
                create: {
                    startsAt: new Date('2024-07-10 04:29:34'),
                    screen: {
                        create: {
                            number: 12
                        }
                    }
                }
            }
        }
    })

    const customerTicket = await prisma.ticket.create({
        data: {
            customerId: createdCustomer.id,
            screeningId: movieBooked.id
        }
    })





    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
