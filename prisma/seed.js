const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
	const createdCustomer = await prisma.customer.create({
		data: {
			name: 'Alice',
		},
	})

	console.log('Customer created', createdCustomer)

	// Add your code here

	const createContact = await prisma.contact.create({
		data: {
			email: 'test@test.com',
			phone: '07766123456',
			customer: {
				connect: {
					id: 1,
				},
			},
		},
	})

	console.log('Contact created', createContact)

	const createdMovie = await prisma.movie.create({
		data: {
			id: 1,
			title: 'Movie',
			runtimeMins: 118,
		},
	})

	console.log('Movie Created', createdMovie)

	const createScreen = await prisma.screen.create({
		data: {
			number: 1,
		},
	})

	console.log('Screen created', createScreen)

	const createScreening = await prisma.screening.create({
		data: {
			startsAt: new Date(),
			movie: {
				connect: {
					id: 1,
				},
			},
			screen: {
				connect: {
					id: 1,
				},
			},
		},
	})
	console.log('Screening created', createScreening)

	const createTicket = await prisma.ticket.create({
		data: {
			customer: {
				connect: {
					id: 1,
				},
			},
			screening: {
				connect: {
					id: 1,
				},
			},
		},
	})
	console.log('Ticket created', createTicket)
	// Don't edit any of the code below this line
	process.exit(0)
}

seed().catch(async (error) => {
	console.error(error)
	await prisma.$disconnect()
	process.exit(1)
})
