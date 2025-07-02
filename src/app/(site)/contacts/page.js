import TwoGisMap from "@/components/TwoGisMap";
import {Phone, Mail, MapPin} from "lucide-react";
import BreadcrumbSetter from "@/components/ui/Utils/BreadcrumbSetter";

export default function ContactsPage() {
    return (
        <div className="py-6 px-16">
            <BreadcrumbSetter breadcrumbs={[{
                label: 'Контакты',
                path: '/contacts'
            }]} />

            <div className="flex justify-between gap-4 h-[752px] border border-[#E4E7EC] rounded-md bg-[#F9FAFB] p-6">
                <TwoGisMap/>
                <div className="flex flex-col gap-1 font-semibold text-[#475467]">
                    <div className="flex gap-2">
                        <Phone size={20} className="flex-shrink-0" />
                        <span>+7 701 966 20 23</span>
                    </div>
                    <div className="flex gap-2">
                        <Mail size={20} className="flex-shrink-0" />
                        <span>admin@cpfed.kz</span>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                        <MapPin size={20} className="flex-shrink-0" />
                        <span>г. Астана, ул. Мангилик ел, 55/7, блок С 3.5, офис 211, Astana Hub</span>
                    </div>
                </div>
            </div>
        </div>
    )
}