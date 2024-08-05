/*
  Warnings:

  - You are about to drop the column `screening_id` on the `Screen` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[screen_id]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `screen_id` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_screening_id_fkey";

-- DropIndex
DROP INDEX "Screen_screening_id_key";

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "screening_id";

-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screen_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "screening_id" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_customer_id_key" ON "Ticket"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Screening_screen_id_key" ON "Screening"("screen_id");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screen_id_fkey" FOREIGN KEY ("screen_id") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_screening_id_fkey" FOREIGN KEY ("screening_id") REFERENCES "Screening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
