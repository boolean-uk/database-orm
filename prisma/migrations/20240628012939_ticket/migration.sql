/*
  Warnings:

  - You are about to drop the column `number` on the `Ticket` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Ticket_number_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "number";
