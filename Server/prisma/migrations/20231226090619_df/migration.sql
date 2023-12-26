-- CreateTable
CREATE TABLE "Replies" (
    "id" TEXT NOT NULL,
    "questionId" TEXT,
    "userId" TEXT,
    "content" TEXT NOT NULL,

    CONSTRAINT "Replies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Replies" ADD CONSTRAINT "Replies_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replies" ADD CONSTRAINT "Replies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
