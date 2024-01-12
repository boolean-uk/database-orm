const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Barry Scott'
        }
    });

    // Add your code here
    const createdContact = await prisma.contact.create({
        data: {
            phone: '0123445592789',
            email: 'bang@thedirtisgone.com',
            customer: {
                connect: {
                    id: 1
                }
            }
        }
    })

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Cillit Bang',
            runtimeMins: 399
        }
    })

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date(),
            movie: {
                connect: {
                    id: 1
                }
            }
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
