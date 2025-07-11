'use client';

import {useDashboardHeader} from "@/contexts/DashboardHeaderContext";
import {useEffect} from "react";

export default function Tests() {
    const {setHeaderConfig} = useDashboardHeader();

    useEffect(() => {
        setHeaderConfig({
            title: 'Тесты',
            showBackButton: false,
            onBackClick: () => {}
        });
    }, [setHeaderConfig]);

    return (
        <div>Tests</div>
    );
}