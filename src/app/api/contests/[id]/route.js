import { getContestById } from '@/lib/queries/contests';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { id } = await params;

        const contest = await getContestById(id);
        const serializedContest = {
            ...contest,
            id: contest.id.toString()
        };
        return NextResponse.json(serializedContest);
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}