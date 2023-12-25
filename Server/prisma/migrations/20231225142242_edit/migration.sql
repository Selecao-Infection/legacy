/*
  Warnings:

  - Added the required column `coverUrl` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "coverUrl" TEXT NOT NULL;
