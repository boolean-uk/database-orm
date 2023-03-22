/*
  Warnings:

  - A unique constraint covering the columns `[screenId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `Screening` table without a default value. This is not possible if the table is not empty.
  - Added the required column `screenId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD COLUMN     "screenId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screening_screenId_key" ON "Screening"("screenId");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
