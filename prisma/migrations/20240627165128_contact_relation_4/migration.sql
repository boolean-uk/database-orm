/*
  Warnings:

  - A unique constraint covering the columns `[costumerId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contact_costumerId_key" ON "Contact"("costumerId");
