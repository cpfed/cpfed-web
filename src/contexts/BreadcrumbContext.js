'use client';

import { createContext, useContext, useState } from 'react';

const BreadCrumbContext = createContext(undefined);

export function BreadcrumbProvider({ children }) {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const addBreadcrumb = (item) => {
        setBreadcrumbs([...breadcrumbs, item]);
    };

    const removeBreadcrumb = (href) => {
        setBreadcrumbs(prev => prev.filter(item => item.href !== href));
    };

    const clearBreadcrumbs = () => {
        setBreadcrumbs([]);
    };

    return (
        <BreadCrumbContext.Provider value={{
            breadcrumbs,
            setBreadcrumbs,
            addBreadcrumb,
            removeBreadcrumb,
            clearBreadcrumbs
        }}>
            {children}
        </BreadCrumbContext.Provider>
    )
}

export const useBreadcrumb = () => {
    const context = useContext(BreadCrumbContext);
    if (!context) {
        throw new Error('useBreadcrumb must be used within the BreadcrumbProvider');
    }
    return context;
}