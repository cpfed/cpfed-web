'use client';

import ChoiceButton from "@/components/ui/Button/ChoiceButton";
import Contest from "@/app/(site)/contests/components/Contest";
import {useState} from "react";
import {SeeAllButton} from "@/components/ui";

export default function ContestsPage() {
    const [activeOption, setActiveOption] = useState('all');

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <div className="px-16 py-8 flex flex-col gap-6">
            <div className="flex justify-between">
                <div className="font-bold text-4xl">Соревнования</div>
                <SeeAllButton link="/contests" text="Перейти ко всем соревнованиям"/>
            </div>
            <div className="flex gap-1">
                <ChoiceButton option="Все" active={activeOption === 'all'} onClick={() => handleOptionClick("all")}/>
                <ChoiceButton option="Республиканские" active={activeOption === 'national'} onClick={() => handleOptionClick("national")} />
                <ChoiceButton option="Тематические" active={activeOption === 'themed'} onClick={() => handleOptionClick("themed")} />
            </div>

            <div className="flex gap-6 overflow-x-auto">
                <Contest />
                <Contest />
                <Contest />
                <Contest />
                <Contest />
            </div>
        </div>
    );
}