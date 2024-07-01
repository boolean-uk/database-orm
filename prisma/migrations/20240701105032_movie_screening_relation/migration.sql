/*
  Warnings:

  - A unique constraint covering the columns `[movieId]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movieId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "movieId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movieId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Movie_movieId_key" ON "Movie"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Screening_movieId_key" ON "Screening"("movieId");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Screening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
