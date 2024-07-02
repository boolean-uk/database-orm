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

    const createMovie = await prisma.movie.create({
        data :{
            title : 'The Matrix',
            runtimeMins : 120,
            screenings : {
                create : {
                    startsAt : new Date (),
                    screen : {
                        create : {
                            number : 1
                        }
                    }
                }
            }
        },
        include : {
            screenings : true
        }
    })

    
                    // customerTicket : {
                    //     connect : {
                    //         id : createdCustomer.id
                    //     }
                    // }

    
    

    console.log('Customer created', createdCustomer)
    console.log('movie created', createMovie)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
