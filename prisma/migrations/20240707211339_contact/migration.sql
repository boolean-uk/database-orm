/*
  Warnings:

  - You are about to drop the column `contactId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_contactId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "contactId";
