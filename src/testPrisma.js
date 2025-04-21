import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testPrisma() {
    try {
        await prisma.$connect();
        console.log('Prisma Client initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Prisma Client:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

testPrisma();
