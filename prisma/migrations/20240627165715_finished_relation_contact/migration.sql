/*
  Warnings:

  - You are about to drop the column `costumerId` on the `Contact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_costumerId_fkey";

-- DropIndex
DROP INDEX "Contact_costumerId_key";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "costumerId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_customerId_key" ON "Contact"("customerId");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
