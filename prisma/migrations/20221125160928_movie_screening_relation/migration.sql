-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movieId" INTEGER;

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
