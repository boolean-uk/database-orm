/*
  Warnings:

  - A unique constraint covering the columns `[movie_id]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movie_id` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movie_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Screening_movie_id_key" ON "Screening"("movie_id");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
