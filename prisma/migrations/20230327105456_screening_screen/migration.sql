/*
  Warnings:

  - A unique constraint covering the columns `[screenId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Screening_screenId_key" ON "Screening"("screenId");
