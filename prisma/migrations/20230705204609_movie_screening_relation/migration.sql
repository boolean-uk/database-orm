/*
  Warnings:

  - You are about to drop the column `startAt` on the `Screening` table. All the data in the column will be lost.
  - Added the required column `startsAt` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "startAt",
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
