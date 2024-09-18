-- CreateTable
CREATE TABLE "planets" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "population" INTEGER NOT NULL,

    CONSTRAINT "planets_pkey" PRIMARY KEY ("id")
);
