/*
  Warnings:

  - You are about to drop the column `endsAt` on the `Screening` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "endsAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
