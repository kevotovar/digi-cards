-- CreateTable
CREATE TABLE "DigimonCards" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "cardImage" TEXT NOT NULL,
    "form" TEXT,
    "attribute" TEXT,
    "digivoluveEffect" TEXT,
    "securityEffect" TEXT,

    PRIMARY KEY ("id")
);
