/*
  Warnings:

  - A unique constraint covering the columns `[customerId,customerName]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "customerName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_customerId_customerName_key" ON "Contact"("customerId", "customerName");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_id_name_key" ON "Customer"("id", "name");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customerId_customerName_fkey" FOREIGN KEY ("customerId", "customerName") REFERENCES "Customer"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
