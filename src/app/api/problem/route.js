export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const code = searchParams.get('code');

        if (!code) {
            throw new Error('Problem code should be provided');
        }

        const res = await fetch(`https://esep.cpfed.kz/api/v2/problem/${code}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`error status: ${res.status}`);
        }

        const data = await res.json();

        return Response.json(data);
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch problem details', details: error.message },
            { status: 500 }
        );
    }
}