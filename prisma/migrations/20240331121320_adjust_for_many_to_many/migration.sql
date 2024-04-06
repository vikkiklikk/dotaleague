/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Video` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_categoryId_fkey";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "_VideoToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VideoToCategory_AB_unique" ON "_VideoToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_VideoToCategory_B_index" ON "_VideoToCategory"("B");

-- AddForeignKey
ALTER TABLE "_VideoToCategory" ADD CONSTRAINT "_VideoToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VideoToCategory" ADD CONSTRAINT "_VideoToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
