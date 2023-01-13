const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
	const createdCustomer = await prisma.customer.create({
		data: {
			name: "Alice",
		},
	});

	console.log("Customer created", createdCustomer);

	// Add your code here

	const createdContact = await prisma.contact.create({
		data: {
			phone: "07231234124",
			email: "Alice@email.com",
			customer: {
				connect: {
					id: createdCustomer.id,
				},
			},
		},
	});

	const createCustomerWithContact = await prisma.customer.create({
		data: {
			name: "Bob Tables",
			contact: {
				create: {
					phone: "07876543210",
					email: "bob@tables.com",
				},
			},
		},
	});

	// Don't edit any of the code below this line
	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
