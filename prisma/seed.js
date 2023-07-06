const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('Customer created', createdCustomer);

    const createdContact = await prisma.contact.create({
        data: {
            phone: "+44 123123456",
            email: "dude@dude.com",
            customer_id: 1
        }
    })

    console.log('Contact created', createdContact)

    const createdCustomerWithContact = await prisma.customer.create({
        data: {
            name: "Bob",
            contact: {
                create: {
                    phone: "07777123234",
                    email: "bob@bob.com"
                }
            }
        }
    })

    console.log('Customer created with contact', createdCustomerWithContact)

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1
        }
    })

    const createdMovie = await prisma.movie.create({
        data: {
            title: "Your Name",
            runtimeMins: 107
        }
    })

    console.log('Movie created', createdMovie)

    const startTime = new Date("July 6 2023 12:30")
    const endTime = new Date("July 6 2023, 14:17")

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: startTime,
            movieId: 1,
            screenId: 1
        }
    })

    const createdMovieWithScreening = await prisma.movie.create({
        data: {
            title: "Mirai",
            runtimeMins: 98,
            screenings: {
                create: [
                    {startsAt: endTime,
                    screen: {
                        connect: {
                            id: 1
                    }}
            }]
            }
        }
    })

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

    




    // Add your code here




    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
