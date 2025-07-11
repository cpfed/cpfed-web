'use client';

import {createContext, useContext, useState} from "react";

const DashboardHeaderContext = createContext();

export function DashboardHeaderProvider({ children }) {
    const [headerConfig, setHeaderConfig] = useState({
        title: "",
        showBackButton: false,
        onBackClick: null
    });
    return (
        <DashboardHeaderContext.Provider value={{ headerConfig, setHeaderConfig }}>
            {children}
        </DashboardHeaderContext.Provider>
    );
}

export function useDashboardHeader() {
    const context = useContext(DashboardHeaderContext);
    if (!context) {
        throw new Error('useDashboardHeader must be defined');
    }
    return context;
}