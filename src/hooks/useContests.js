import { useState, useEffect } from 'react';

export function useContests(mainPageOnly = false) {
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContests = async () => {
            try {
                const url = mainPageOnly
                    ? '/api/contests?mainPage=true'
                    : '/api/contests';

                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch');

                const data = await response.json();
                setContests(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchContests();
    }, [mainPageOnly]);

    return { contests, loading, error };
}

export function useContest(id) {
    const [contest, setContest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchContest = async () => {
            try {
                const response = await fetch(`/api/contests/${id}`);
                if (!response.ok) throw new Error('Failed to fetch');

                const data = await response.json();
                setContest(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchContest();
    }, [id]);

    return { contest, loading, error };
}