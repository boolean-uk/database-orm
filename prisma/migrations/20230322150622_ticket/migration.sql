/*
  Warnings:

  - Added the required column `screeningId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "screeningId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_screeningId_fkey" FOREIGN KEY ("screeningId") REFERENCES "Screening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
