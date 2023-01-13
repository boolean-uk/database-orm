const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
	const createdCustomer = await prisma.customer.create({
		data: {
			name: 'Alice',
		},
	});
	console.log('Customer created', createdCustomer);

	// Add your code here

	// Create Contact
	const createdContact = await prisma.contact.create({
		data: {
			customer: {
				connect: { id: createdCustomer.id },
			},
			phone: '0121456789',
			email: 'ahkibria@hotmail.co.uk',
		},
	});
	console.log('Contact created', createdContact);

	// Create Movie
	const createdMovie = await prisma.movie.create({
		// 1
		data: {
			title: 'Matrix 9',
			runtimeMins: 120,
		},
	});
	console.log('Movie created', createdMovie);

	// Ctreate Screen
	const createdScreen = await prisma.screen.create({
		data: {
			number: 1,
		},
	});
	console.log('Screen created', createdScreen);

	const createdScreening = await prisma.screening.create({
		data: {
			startsAt: new Date(2023, 01, 14, 20, 0, 0),
			movie: {
				connect: { id: 1 },
			},
			screen: {
				connect: { id: 1 },
			},
		},
	});
	console.log('Screening created', createdScreening);

	// Don't edit any of the code below this line
	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
