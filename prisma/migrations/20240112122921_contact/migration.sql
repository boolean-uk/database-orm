-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "phone" INTEGER,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
