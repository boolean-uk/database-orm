const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log(createdCustomer)

    // Add your code here
    const createdContact = await prisma.contact.create({
        data: {
            phone: '0123445592789',
            email: 'test@email.com',
            customer: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log(createdCustomer)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
