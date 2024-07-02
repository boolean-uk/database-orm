const { PrismaClient } = require('@prisma/client');
const { empty } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Farshad',
            contact: {
                create: {
                email: 'f.bagdeli',
                phone: '123456'
                }
            }
        },
        include : {
            contact : true
        } 
    })

    

    console.log('Customer created', createdCustomer);

    // Add your code here
    // const createdContact = await prisma.contact.create({
    //     data: {
    //         phone : '123456',
    //         email : 'fBagdeli@gmail.com'
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
