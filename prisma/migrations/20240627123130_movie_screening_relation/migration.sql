/*
  Warnings:

  - A unique constraint covering the columns `[movieID]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieID` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movieID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Screening_movieID_key" ON "Screening"("movieID");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieID_fkey" FOREIGN KEY ("movieID") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
