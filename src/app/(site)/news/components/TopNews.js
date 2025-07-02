import MainPost from "@/app/(site)/news/components/MainPost";
import Post from "@/app/(site)/news/components/Post";

export default function TopNews() {
    return (
        <div className="flex justify-between gap-6">
            <div className="w-1/2 pb-10">
                <MainPost/>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
                <div className="h-1/2">
                    <Post topNews={true}/>
                </div>
                <div className="h-1/2">
                    <Post topNews={true}/>
                </div>
            </div>
        </div>
    )
}