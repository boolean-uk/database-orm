/*
  Warnings:

  - You are about to drop the column `customerId` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `screeningId` on the `Screening` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "screeningId";
