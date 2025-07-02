'use client';

import ImageCard from "@/components/ui/Card/ImageCard";
import {useContest} from "@/hooks/useContests";
import {Loader2} from "lucide-react";
import {use, useEffect} from "react";
import {format, parseISO} from "date-fns";
import {useBreadcrumb} from "@/contexts/BreadcrumbContext";

export default function ContestDetails({ params }) {
    const { contest_id } = use(params);
    const { contest, loading, error } = useContest(contest_id);
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        if (contest) {
            setBreadcrumbs([
                {
                    label: 'Соревнования',
                    path: '/contests'
                },
                {
                    label: contest.name,
                    path: `/contests/${contest_id}`
                }
            ]);
        }
    }, [contest_id, contest, setBreadcrumbs]);

    if (loading) {
        return (
            <div className="py-6 flex items-center justify-center">
                <Loader2 className="animate-spin" />
            </div>
        );
    }
    if (error) {
        return (
            <div className="py-6 flex items-center justify-center">
                Unexpected Error. Please try again later.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 py-6 px-16">
            <div className="flex flex-col gap-6">
                <div className="relative w-full h-[612px] rounded-2xl overflow-hidden">
                    <ImageCard
                        src={contest.image_url}
                        alt="Contest logo"
                        href="/contest/register"
                        text="Зарегистрироваться"
                    />
                </div>

                <div className="text-2xl font-bold text-[#101828]">{contest.name}</div>
                <div className="text-lg font-medium text-[#344054]">{contest.playing_desc}</div>
                <div className="text-lg font-medium text-[#475467]">{format(parseISO(contest.date), 'dd/MM/yyyy HH:mm')}</div>
            </div>
        </div>
    );
}