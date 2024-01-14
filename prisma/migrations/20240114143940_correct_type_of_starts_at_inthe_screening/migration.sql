/*
  Warnings:

  - Changed the type of `startsAt` on the `Screening` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "startsAt",
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL;
