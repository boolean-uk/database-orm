/*
  Warnings:

  - Added the required column `customerId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "customerId" INTEGER NOT NULL;
