import { prisma } from '@/lib/prisma';

export async function getAllContests() {
    return prisma.contest_contest.findMany({
        orderBy: {
            date: 'desc'
        }
    });
}

export async function getMainPageContests() {
    return prisma.contest_contest.findMany({
        where: {
            show_on_main_page: true,
            registration_open: true
        },
        orderBy: {
            level_on_main_page: 'asc'
        }
    });
}

export function getContestById(id) {
    return prisma.contest_contest.findUnique({
        where: {
            id: id
        },
        include: {
            contest_usercontest: true
        }
    });
}

export function searchContests(searchTerm) {
    return prisma.contest_contest.findMany({
        where: {
            OR: [
                { name: { contains: searchTerm, mode: 'insensitive' } },
                { name_en: { contains: searchTerm, mode: 'insensitive' } },
                { playing_desc: { contains: searchTerm, mode: 'insensitive' } }
            ]
        }
    });
}