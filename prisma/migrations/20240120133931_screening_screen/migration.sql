-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "screening_id" INTEGER NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screen_screening_id_key" ON "Screen"("screening_id");

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_screening_id_fkey" FOREIGN KEY ("screening_id") REFERENCES "Screening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
