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
            email: 'example@email.com',
            phone: '123456789',
            customerId: 1
        }
    });

    console.log('Contact created', createdContact);

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'new movie',
            runtimeMins: 90
        }
    })

    console.log('Movie created', createdMovie)

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '2024-06-27T16:58:05.495Z'
        }
    })

    console.log('Screening created', createdScreening)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
