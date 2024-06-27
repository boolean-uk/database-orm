-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_costumerId_fkey" FOREIGN KEY ("costumerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
