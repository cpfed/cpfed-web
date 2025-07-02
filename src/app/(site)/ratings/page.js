import SearchInput from "@/components/ui/Input/SearchInput";
import UsersTable from "@/app/(site)/ratings/components/UsersTable";
import BreadcrumbSetter from "@/components/ui/Utils/BreadcrumbSetter";

export default function RatingsPage() {
    return (
        <div className="py-6 px-16">
            <BreadcrumbSetter breadcrumbs={[{
                label: 'Рейтинги',
                path: '/ratings'
            }]} />

            <div className="flex flex-col gap-4">
                <SearchInput />

                <UsersTable />
            </div>
        </div>
    );
}