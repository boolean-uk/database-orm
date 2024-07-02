/*
  Warnings:

  - You are about to drop the column `createAt` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the `_CustomerToScreening` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screening" DROP CONSTRAINT "Screening_screenId_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerToScreening" DROP CONSTRAINT "_CustomerToScreening_A_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerToScreening" DROP CONSTRAINT "_CustomerToScreening_B_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "createAt",
DROP COLUMN "updateAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "_CustomerToScreening";
