import { getAllContests, getMainPageContests } from '@/lib/queries/contests';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const mainPage = searchParams.get('mainPage');

        const contests = mainPage === 'true'
            ? await getMainPageContests()
            : await getAllContests();

        const serializedContests = contests.map(contest => ({
            ...contest,
            id: contest.id.toString()
        }));

        return NextResponse.json(serializedContests);
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}