'use client';

import {Check, XCircle} from "lucide-react";
import {MoreButtonGray} from "@/components/ui";
import {useEffect, useState} from "react";

export default function ProblemsList({ level = 'bronze' }) {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTypeByLevel = (level) => {
        switch (level) {
            case 'bronze':
                return 'Шартты операторлар';
            case 'silver':
                return 'Циклдер (while)';
            case 'gold':
                return 'Екі өлшемді массив';
        }
    }

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const res = await fetch(`/api/problems?type=${encodeURIComponent(getTypeByLevel(level))}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch problems');
                }

                const data = await res.json();
                setProblems(data['data']['objects']);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();

        console.log('fetch');
    }, [level]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4 rounded-md space-y-4 bg-white">
            <h1 className="text-[#101828] font-bold text-xl">Список задач</h1>
            <div className="w-[770px] shadow-sm border border-[#D0D5DD] rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead
                        className="text-xs h-11 text-[#475467] bg-[#F9FAFB] border-b border-[#E4E7EC]">
                    <tr>
                        <th className="px-4 py-3 w-[188px] font-medium">Наименование</th>
                        <th className="px-4 py-3 font-medium">Категория</th>
                        <th className="px-4 py-3 font-medium">Баллы</th>
                        <th className="px-4 py-3 font-medium">АС %</th>
                        <th className="px-4 py-3 font-medium">Статус</th>
                        <th className="px-4 py-3 w-[139px]"></th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-[#101828]  divide-y divide-[#E4E7EC]">
                        {problems.map((problem, index) => (
                            <tr key={problem.code}
                                className={index % 2 === 0 ? "bg-white h-15" : " bg-[#F9FAFB] h-15"}>
                                <td className="px-4 py-3">{problem.name}</td>
                                <td className="px-4 py-3">{problem.types[0]}</td>
                                <td className="px-4 py-3">{problem.points}</td>
                                <td className="px-4 py-3">100 %</td>
                                <td className="px-4 py-3">{index % 2 === 0 ? <Check className="bg-[#E2F4FD] rounded-full p-1" stroke="#0E8AC8" strokeWidth={3} size={20}/> : <XCircle
                                    size={20}
                                    fill="#FDA29B"
                                    stroke="#D92D20"
                                    strokeWidth={1}
                                />}</td>
                                <td className="px-4 py-3"><MoreButtonGray href={`problem/${problem.code}`} text="Подробнее" className="border border-[#D0D5DD]"/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}