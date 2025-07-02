import { GraduationCap } from "lucide-react";

const GraduationHatWithDoubleCircle = () => {
    return (
        <div className="w-16 h-16 border border-[#7ACCF6] rounded-full flex items-center justify-center bg-gradient-to-b from-[#E2F4FD] to-white">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0E8AC8]">
                <GraduationCap size={24} color="#FFFFFF" />
            </div>
        </div>
    );
};

export default function InfoCard(props) {
    return (
        <div className="flex flex-col p-6 gap-3 bg-[#F9FAFB] rounded-2xl">
            <GraduationHatWithDoubleCircle />

            <h1 className="font-bold text-2xl">{props.title}</h1>
            <p className="font-medium text-lg text-[#344054]">{props.description}</p>
        </div>
    );
}