/*
  Warnings:

  - You are about to drop the column `movieId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_movieId_fkey";

-- DropIndex
DROP INDEX "Movie_movieId_key";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "movieId";

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
