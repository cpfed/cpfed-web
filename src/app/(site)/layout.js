import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function SiteLayout({ children }) {
    return (
        <div className="h-full">
            <Header />

            <main>
                <Breadcrumb />

                {children}
            </main>
            <Footer />
        </div>
    );
}