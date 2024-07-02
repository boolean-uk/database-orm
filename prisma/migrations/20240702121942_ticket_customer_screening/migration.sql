-- CreateTable
CREATE TABLE "_CustomerToScreening" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToScreening_AB_unique" ON "_CustomerToScreening"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToScreening_B_index" ON "_CustomerToScreening"("B");

-- AddForeignKey
ALTER TABLE "_CustomerToScreening" ADD CONSTRAINT "_CustomerToScreening_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToScreening" ADD CONSTRAINT "_CustomerToScreening_B_fkey" FOREIGN KEY ("B") REFERENCES "Screening"("id") ON DELETE CASCADE ON UPDATE CASCADE;
