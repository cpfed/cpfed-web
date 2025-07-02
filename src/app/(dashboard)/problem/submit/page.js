'use client';

import EditorPage from "@/app/(dashboard)/problem/components/EditorPage";
import CodeUpload from "@/components/ui/Utils/CodeUpload";
import CancelButton from "@/components/ui/Button/CancelButton";

export default function SubmitSolution() {
    const onClick = () => {
        console.log('click');
    };

    return (
        <div className="p-6 bg-[#F2F4F7]">
            <div className="p-6 bg-white rounded-md">
                <div className="flex flex-col gap-1 mb-5">
                    <h3 id="modal-title" className="text-lg font-semibold text-[#101828]">
                        Отправка решений
                    </h3>

                    <h1 id="modal-description" className="text-sm text-[#475467]">
                        Заполните необходимые данные
                    </h1>
                </div>

                <EditorPage />

                <hr className="mt-8 mb-6 border-[#E4E7EC]" />

                <div className="flex justify-between">
                    <CodeUpload />

                    <div className="flex gap-3">
                        <CancelButton onClick={onClick} />
                        <button className="w-[123px] h-11 rounded-lg font-semibold text-base flex justify-center text-white items-center bg-[#0E8AC8] cursor-pointer leading-none hover:bg-[#0C75AA] duration-300">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}