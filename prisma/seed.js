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

    async function seed() {
        const createContact = await prisma.contact.create({
            data: {
                email: 'jimbo123@gmail.com',
                phone: '123',
                customerId: createdCustomer.id
            }
        });
    
        console.log('Contact created', createContact);


        const createMovie = await prisma.movie.create({
            data: {
              title: 'Teeth',
              runtimeMins: 110
            }
          })
        
          console.log('New Movie created', createMovie)
        
          const startTime = new Date()
        
          const createScreen = await prisma.screen.create({
            data: {
              number: 1
            }
          })
        
          console.log('New screen created', createScreen)

          const createdScreening = await prisma.screening.create({
            data: {
              startsAt: new Date("2024-09-22 15:10:00"),
              movieId: createdMovie.id,
            },
          });
        
          console.log("Screening created", createdScreening);
        
          const createMovieWithScreenings = await prisma.movie.create({
            data: {
              title: "Another Movie",
              runtimeMins: 120,
              screenings: {
                create: [
                  {
                    startsAt: new Date("2025-11-12 21:15:00"),
                  },
                ],
              },
            },
          });







    // Don't edit any of the code below this line
    process.exit(0);
}}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
