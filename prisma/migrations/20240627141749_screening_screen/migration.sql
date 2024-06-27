/*
  Warnings:

  - A unique constraint covering the columns `[screenID]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screenID" INTEGER;

-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screening_screenID_key" ON "Screening"("screenID");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenID_fkey" FOREIGN KEY ("screenID") REFERENCES "Screen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
