const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdContact2 = await prisma.contact.create({
        data: {
            phone: "14188909011",
            email: "alice@email.com",
            customer: {
                create: {
                    name: "Alice"
                }
            }
        }
    })


    // Add your code here

    const createdContact = await prisma.contact.create({
        data: {
            phone: "07123456789",
            email: "test@email.com",
            customer: {
                create: {
                    name: "George"
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
