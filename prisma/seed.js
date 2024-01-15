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
    const createContact = await prisma.contact.create({
        data: {
            phone :'+393939393939',
            email : 'snoopdog@rocket.com',
            customer: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log('new contact',createContact)

    const createMovie = await prisma.movie.create({
        data:{
            title:'One piece',
            runtimeMins:150
        }
    })

    const createScreening = await prisma.screening.create({
        data:{
            startsAt:new Date('2024-01-16 00:45:00.000') 
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
