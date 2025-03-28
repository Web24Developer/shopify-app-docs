-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_QRCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "productId" TEXT,
    "productHandle" TEXT,
    "productVariantId" TEXT,
    "destination" TEXT NOT NULL,
    "scans" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT
);
INSERT INTO "new_QRCode" ("createdAt", "destination", "id", "productHandle", "productId", "productVariantId", "scans", "shop", "title") SELECT "createdAt", "destination", "id", "productHandle", "productId", "productVariantId", "scans", "shop", "title" FROM "QRCode";
DROP TABLE "QRCode";
ALTER TABLE "new_QRCode" RENAME TO "QRCode";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
