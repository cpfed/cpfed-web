'use client';

import SearchInput from "@/components/ui/Input/SearchInput";
import ChoiceButton from "@/components/ui/Button/ChoiceButton";
import ContestsTable from "@/app/(site)/contests/components/ContestsTable";
import {useEffect, useState} from "react";
import { useContests } from '@/hooks/useContests';
import { Loader2 } from 'lucide-react';
import {useBreadcrumb} from "@/contexts/BreadcrumbContext";

export default function ContestsPage({ mainPageOnly = false }) {
    const [activeOption, setActiveOption] = useState('all');
    const { contests, loading, error } = useContests(mainPageOnly);
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs([
            {
                label: 'Соревнования',
                path: '/contests'
            }
        ]);
    }, [setBreadcrumbs]);

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

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <div className="flex flex-col gap-6 py-6 px-16">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-1">
                        <ChoiceButton option="Все" active={activeOption === 'all'} onClick={() => handleOptionClick("all")}/>
                        <ChoiceButton option="Республиканские" active={activeOption === 'national'} onClick={() => handleOptionClick("national")} />
                        <ChoiceButton option="Официальные" active={activeOption === 'official'} onClick={() => handleOptionClick("official")} />
                        <ChoiceButton option="Тематические" active={activeOption === 'themed'} onClick={() => handleOptionClick("themed")} />
                        <ChoiceButton option="Рейтинговые контесты" active={activeOption === 'rated'} onClick={() => handleOptionClick("rated")} />
                    </div>

                    <SearchInput />
                </div>

                <ContestsTable contests={contests} />
            </div>
        </div>
    );
};