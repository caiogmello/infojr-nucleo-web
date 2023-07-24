-- CreateTable
CREATE TABLE "Row" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breadQty" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false
);
