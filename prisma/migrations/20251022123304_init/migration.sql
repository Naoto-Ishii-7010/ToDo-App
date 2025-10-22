/*
  Warnings:

  - You are about to drop the column `completeeed` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "completeeed",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
