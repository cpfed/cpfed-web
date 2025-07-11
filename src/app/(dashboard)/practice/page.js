'use client';

import {useDashboardHeader} from "@/contexts/DashboardHeaderContext";
import {useEffect} from "react";

export default function Practice() {
    const {setHeaderConfig} = useDashboardHeader();

    useEffect(() => {
        setHeaderConfig({
            title: 'Практика',
            showBackButton: false,
            onBackClick: () => {}
        });
    }, [setHeaderConfig]);

    return (
        <div>Practice</div>
    );
}