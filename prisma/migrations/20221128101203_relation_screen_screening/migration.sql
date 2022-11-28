/*
  Warnings:

  - A unique constraint covering the columns `[screenId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `screenId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screenId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Screening_screenId_key" ON "Screening"("screenId");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
