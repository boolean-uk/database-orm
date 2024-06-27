const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
            contact: {
                create: {
                    email: 'alice@hotmail.com',
                    phone: '07526961405'
                }
            }
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here

    // const createdContact = await prisma.contact.create({
    //     data: {
    //         email: 'shane@charlesworth.com',
    //         phone: '07526396456',
    //     }
    // })


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
