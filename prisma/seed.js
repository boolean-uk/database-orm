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

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'something',
            runtimeMins: 120
        }
    });

    console.log('Movie created', createdMovie);

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date()
        }
    });

    console.log('Screening created', createdScreening);

    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
