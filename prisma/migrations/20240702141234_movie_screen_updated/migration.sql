-- DropIndex
DROP INDEX "Screening_movieId_key";

-- DropIndex
DROP INDEX "Screening_screenId_key";

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
