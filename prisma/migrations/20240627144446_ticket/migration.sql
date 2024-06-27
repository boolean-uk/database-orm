-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "screeningID" INTEGER,
    "customerID" INTEGER,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_screeningID_fkey" FOREIGN KEY ("screeningID") REFERENCES "Screening"("id") ON DELETE SET NULL ON UPDATE CASCADE;
