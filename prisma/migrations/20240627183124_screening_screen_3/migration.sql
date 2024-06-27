/*
  Warnings:

  - A unique constraint covering the columns `[id,screenId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `screenId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_number_fkey";

-- DropIndex
DROP INDEX "Screen_number_key";

-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screenId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Screening_id_screenId_key" ON "Screening"("id", "screenId");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
