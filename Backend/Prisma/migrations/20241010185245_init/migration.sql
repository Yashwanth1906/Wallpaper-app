-- CreateTable
CREATE TABLE "Wallpaper" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Wallpaper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LikedWallpapers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_WallpaperCollections" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserCollections" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_LikedWallpapers_AB_unique" ON "_LikedWallpapers"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedWallpapers_B_index" ON "_LikedWallpapers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WallpaperCollections_AB_unique" ON "_WallpaperCollections"("A", "B");

-- CreateIndex
CREATE INDEX "_WallpaperCollections_B_index" ON "_WallpaperCollections"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserCollections_AB_unique" ON "_UserCollections"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCollections_B_index" ON "_UserCollections"("B");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedWallpapers" ADD CONSTRAINT "_LikedWallpapers_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedWallpapers" ADD CONSTRAINT "_LikedWallpapers_B_fkey" FOREIGN KEY ("B") REFERENCES "Wallpaper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WallpaperCollections" ADD CONSTRAINT "_WallpaperCollections_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WallpaperCollections" ADD CONSTRAINT "_WallpaperCollections_B_fkey" FOREIGN KEY ("B") REFERENCES "Wallpaper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCollections" ADD CONSTRAINT "_UserCollections_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCollections" ADD CONSTRAINT "_UserCollections_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
