const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: 'Alice'
    }
  })

  console.log('Customer created', createdCustomer)

  // Add your code here

  const createContact = await prisma.contact.create({
    data: {
      phone: '07712452671',
      email: 'email@gmail.com'
    }
  })

  console.log('Contact created', createContact)

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
