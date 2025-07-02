import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
    try {
        const contestCount = await prisma.contest_contest.count();
        res.status(200).json({
            success: true,
            message: `Found ${contestCount} contests in database`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}