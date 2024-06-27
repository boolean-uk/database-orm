/*
  Warnings:

  - A unique constraint covering the columns `[customerID]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerID` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "customerID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_customerID_key" ON "Contact"("customerID");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
