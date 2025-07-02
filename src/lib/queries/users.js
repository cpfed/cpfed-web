import { prisma } from '@/lib/prisma';

export async function getUserByHandle(handle) {
    return prisma.authentication_mainuser.findUnique({
        where: {
            handle: handle
        }
    });
}