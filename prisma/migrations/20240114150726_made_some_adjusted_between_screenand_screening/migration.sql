/*
  Warnings:

  - You are about to drop the column `screeningId` on the `Screen` table. All the data in the column will be lost.
  - Added the required column `screenId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_screeningId_fkey";

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "screeningId";

-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screenId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
