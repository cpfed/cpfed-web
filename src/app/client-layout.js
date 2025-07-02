'use client';

import { SessionProvider } from 'next-auth/react';
import {BreadcrumbProvider} from "@/contexts/BreadcrumbContext";

export default function ClientLayout({ children }) {
    return (
        <SessionProvider>
            <BreadcrumbProvider>
                {children}
            </BreadcrumbProvider>
        </SessionProvider>
    );
}