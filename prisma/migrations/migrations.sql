// this DB created on elephantsql instance successfully 
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

--alter table added 
ALTER TABLE "Contact" ADD COLUMN "customerId" INTEGER NOT NULL;

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- creating unique index on contact using customenr id 
CREATE UNIQUE INDEX "Contact_customerId_key" ON "Contact"("customerId");

-- Alter table 
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;