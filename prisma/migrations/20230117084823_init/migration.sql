-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "authorId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("authorId")
);

-- CreateTable
CREATE TABLE "quotes" (
    "quoteId" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("quoteId")
);

-- CreateTable
CREATE TABLE "token" (
    "tokenId" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("tokenId")
);

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("authorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
