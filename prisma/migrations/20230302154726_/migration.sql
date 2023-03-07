-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "user_name" VARCHAR NOT NULL,
    "user_age" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "banks" (
    "bank_id" SERIAL NOT NULL,
    "bank_title" VARCHAR NOT NULL,
    "bank_price" VARCHAR NOT NULL,

    CONSTRAINT "banks_pkey" PRIMARY KEY ("bank_id")
);

-- CreateTable
CREATE TABLE "_BanksToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BanksToUsers_AB_unique" ON "_BanksToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_BanksToUsers_B_index" ON "_BanksToUsers"("B");

-- AddForeignKey
ALTER TABLE "_BanksToUsers" ADD CONSTRAINT "_BanksToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "banks"("bank_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BanksToUsers" ADD CONSTRAINT "_BanksToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
