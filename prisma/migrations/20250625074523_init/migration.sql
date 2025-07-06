-- CreateTable
CREATE TABLE "food_item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "food_item_pkey" PRIMARY KEY ("id")
);
