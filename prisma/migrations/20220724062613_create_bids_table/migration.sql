-- CreateEnum
CREATE TYPE "typeOfProgress" AS ENUM ('posted', 'opened', 'closed');

-- CreateTable
CREATE TABLE "bids" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "openingDate" TIMESTAMP(3) NOT NULL,
    "progress" "typeOfProgress" NOT NULL,
    "check" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "bids_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bids_number_key" ON "bids"("number");
