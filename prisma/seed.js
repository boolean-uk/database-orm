const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function seed() {
	const createdCustomer = await prisma.customer.create({
		data: {
			name: "Alice",
			contact: {
				create: {
					phone: "1234567",
					email: "alice@alice.al",
				},
			},
		},
		include: {
			contact: true,
		},
	})

	console.log("Customer created", createdCustomer)

	const createMovie = await prisma.movie.create({
		data: {
			title: "The sound of music",
			runtimeMins: 3456,
		},
	})

    console.log("Movie", createMovie)
	const createScreen = await prisma.screen.create({
		data: {
			number: 1,
		},
	})

	const createScreening = await prisma.screening.create({
		data: {
			startsAt: "2024-07-11T21:00:00.000Z",
			movie: {
				connect: createMovie
			},
			screen: {
				connect: {
					id: createScreen.id,
				},
			},
		},
	})

	const createTicket = await prisma.ticket.create({
		data: {
			customer: {
				connect: createdCustomer,
			},
			screening: {
				connect: createScreening,
			},
		},
    })
    
    console.log('Ticket', createTicket);
	// Add your code here


	// Don't edit any of the code below this line
	process.exit(0)
}

seed().catch(async (error) => {
	console.error(error)
	await prisma.$disconnect()
	process.exit(1)
})
