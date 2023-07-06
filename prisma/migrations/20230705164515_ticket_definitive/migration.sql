/*
  Warnings:

  - You are about to drop the column `movie_id` on the `Screening` table. All the data in the column will be lost.
  - Added the required column `movieId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screening" DROP CONSTRAINT "Screening_movie_id_fkey";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "movie_id",
ADD COLUMN     "movieId" INTEGER NOT NULL,
ALTER COLUMN "startsAt" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
