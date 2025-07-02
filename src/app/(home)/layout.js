import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function HomeLayout({ children }) {
    return (
        <div className="h-full">
            <Header />

            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}