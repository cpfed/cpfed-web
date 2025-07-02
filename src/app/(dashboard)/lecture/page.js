'use client';

import {useState} from "react";
import LectureCard from "@/components/ui/Card/LectureCard";
import ChoiceButton from "@/components/ui/Button/ChoiceButton";
import ProblemsList from "@/app/(dashboard)/lecture/components/ProblemsList";

export default function Lectures() {
    const [activeOption, setActiveOption] = useState('theory');

    return (
        <div className="h-full space-y-6 bg-[#F2F4F7] p-6">
            <div className="flex gap-2 bg-white rounded-md p-1 items-center">
                <ChoiceButton option="Теория" active={activeOption === 'theory'} onClick={() => setActiveOption("theory")}/>
                <ChoiceButton option="Задачи" active={activeOption === 'problems'} onClick={() => setActiveOption("problems")} />
            </div>

            { activeOption === 'theory' && (
                <div className="py-4 rounded-2xl space-y-4 bg-white">
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

            { activeOption === 'problems' && <ProblemsList />}
        </div>
    );
}