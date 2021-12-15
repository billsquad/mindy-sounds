/*
  Warnings:

  - Added the required column `avatarUrl` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "avatarUrl" TEXT NOT NULL;
