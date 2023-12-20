-- AlterTable
ALTER TABLE "User" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "coverUrl" DROP NOT NULL,
ALTER COLUMN "coverUrl" SET DEFAULT 'https://images.unsplash.com/photo-1694376015496-140430f9bf88?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
ALTER COLUMN "pdp" DROP NOT NULL,
ALTER COLUMN "pdp" SET DEFAULT 'https://cdn-icons-png.flaticon.com/512/6386/6386976.png';
