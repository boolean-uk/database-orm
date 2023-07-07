/*
  Warnings:

  - Changed the type of `number` on the `Screen` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Screening_screenId_key";

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL;
