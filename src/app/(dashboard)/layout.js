import Sidebar from '@/components/layout/Sidebar';
import DashboardHeader from "@/components/layout/DashboardHeader";
import {DashboardHeaderProvider} from "@/contexts/DashboardHeaderContext";

export default function DashboardLayout({ children }) {
    return (
        <DashboardHeaderProvider>
            <div className="flex">
                <Sidebar />

                <div className="flex-1">
                    <DashboardHeader />

                    <main className="overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </DashboardHeaderProvider>
    );
}