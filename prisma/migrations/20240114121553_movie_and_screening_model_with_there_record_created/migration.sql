/*
  Warnings:

  - You are about to drop the column `startaAt` on the `Screening` table. All the data in the column will be lost.
  - Added the required column `startsAt` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "startaAt",
ADD COLUMN     "startsAt" TEXT NOT NULL;
