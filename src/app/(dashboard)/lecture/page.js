'use client';

import {useEffect, useState} from "react";
import {useSearchParams} from 'next/navigation';
import LectureCard from "@/components/ui/Card/LectureCard";
import ChoiceButton from "@/components/ui/Button/ChoiceButton";
import ProblemsList from "@/app/(dashboard)/lecture/components/ProblemsList";
import {useDashboardHeader} from "@/contexts/DashboardHeaderContext";

export default function Lectures() {
    const searchParams = useSearchParams();
    const [activeOption, setActiveOption] = useState('theory');
    const {setHeaderConfig} = useDashboardHeader();
    const level = searchParams.get('level') || 'bronze';

    const mapLevelToText = (level) => {
        if (level === 'bronze') {
            return 'Бронзовый';
        } else if (level === 'silver') {
            return 'Серебряный';
        } else {
            return 'Золотой';
        }
    }

    useEffect(() => {
        console.log(activeOption);
    }, [activeOption]);

    useEffect(() => {
        setHeaderConfig({
            title: mapLevelToText(level),
            showBackButton: false,
            onBackClick: () => {}
        });
    }, [setHeaderConfig, level]);

    return (
        <div className="h-full space-y-6 bg-[#F2F4F7] p-6">
            <div className="w-fit flex gap-2 bg-white rounded-md p-1 items-center">
                <ChoiceButton option="Теория" active={activeOption === 'theory'} onClick={() => setActiveOption("theory")}/>
                <ChoiceButton option="Задачи" active={activeOption === 'problems'} onClick={() => setActiveOption("problems")} />
            </div>

            { activeOption === 'theory' && (
                <div className={`py-4 rounded-2xl space-y-4 bg-white ${activeOption === 'theory' ? 'block' : 'hidden'}`}>
                    <div className="px-4 flex gap-4">
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                    </div>

                    <div className="px-4 flex gap-4">
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                    </div>

                    <div className="px-4 flex gap-4">
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                    </div>

                    <div className="px-4 flex gap-4">
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                        <LectureCard />
                    </div>
                </div>
            )}

            <div className={activeOption === 'problems' ? 'block' : 'hidden'}>
                <ProblemsList level={level} />
            </div>
        </div>
    );
}