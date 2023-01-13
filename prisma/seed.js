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
	const createdContact = await prisma.contact.create({
		data: {
			customer: {
				connect: [{ id: 1 }],
			},
			phone: '0121456789',
			email: 'ahkibria@hotmail.co.uk',
		},
		include: {
			customer: true, // include all posts in the returned object
		},
	});
	console.log('Contact created', createdContact);

	// Don't edit any of the code below this line
	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
