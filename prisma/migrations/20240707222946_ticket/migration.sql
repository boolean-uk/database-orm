/*
  Warnings:

  - You are about to drop the column `movieId` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_movieId_fkey";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "movieId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
