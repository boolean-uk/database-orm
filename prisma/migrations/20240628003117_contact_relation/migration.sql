/*
  Warnings:

  - Made the column `customerId` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "customerId" SET NOT NULL;
