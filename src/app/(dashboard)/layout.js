import Sidebar from '@/components/layout/Sidebar';
import DashboardHeader from "@/components/layout/DashboardHeader";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1">
                <DashboardHeader />

                <main className="overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}