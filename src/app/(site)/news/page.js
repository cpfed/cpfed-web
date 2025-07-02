import Post from "@/app/(site)/news/components/Post";
import TopNews from "@/app/(site)/news/components/TopNews";
import BreadcrumbSetter from "@/components/ui/Utils/BreadcrumbSetter";

export default function NewsPage() {
    return (
        <>
            <BreadcrumbSetter breadcrumbs={[{
                label: 'Новости',
                path: '/news'
            }]} />

            <div className="flex flex-col gap-6 py-6 px-16">
                <TopNews/>

                <div className="flex flex-col gap-6">
                    <div className="h-60">
                        <Post/>
                    </div>
                    <div className="h-60">
                        <Post/>
                    </div>
                    <div className="h-60">
                        <Post/>
                    </div>
                    <div className="h-60">
                        <Post/>
                    </div>
                </div>
            </div>
        </>
    )
}