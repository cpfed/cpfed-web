import { getUserByHandle } from '@/lib/queries/users';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { handle } = await params;

        const user = await getUserByHandle(handle);
        const serializedUser = {
            ...user,
            id: user.id.toString()
        };
        return NextResponse.json(serializedUser);
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}