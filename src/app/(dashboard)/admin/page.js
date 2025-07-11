'use client';

import ChoiceButton from "@/components/ui/Button/ChoiceButton";
import SearchInput from "@/components/ui/Input/SearchInput";
import {useEffect, useState} from "react";
import {Plus, Trash2} from "lucide-react";
import { TabButton } from "@/components/ui";
import EditNewsTable from "@/app/(dashboard)/admin/components/EditNewsTable";
import EditContestsTable from "@/app/(dashboard)/admin/components/EditContestsTable";
import AddNewsModal from "@/components/modals/AddNewsModal";
import AddContestModal from "@/components/modals/AddContestModal";
import {useModalManager} from "@/hooks/useModalManager";
import {useDashboardHeader} from "@/contexts/DashboardHeaderContext";

export default function Admin() {
    const modalManager = useModalManager();

    const [activeOption, setActiveOption] = useState('landing');
    const [activeSubSection, setActiveSubSection] = useState('news');
    const {setHeaderConfig} = useDashboardHeader();

    useEffect(() => {
        setHeaderConfig({
            title: 'Администрирование',
            showBackButton: false,
            onBackClick: () => {}
        });
    }, [setHeaderConfig]);

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    const handleSubSectionChange = (subSection) => {
        setActiveSubSection(subSection);
    };

    const handleAdd = () => {
        if (activeSubSection === 'news') {
            modalManager.openModal('news');
        } else {
            modalManager.openModal('contest');
        }
    };

    return (
        <div className="p-6 bg-[#F2F4F7]">
            <div className="shadow-md rounded-lg bg-white pl-6 pb-8 pr-6">
                <div className="flex flex-col gap-4 py-6">
                    <div className="flex gap-2 p-1">
                        <ChoiceButton option="Landing" active={activeOption === 'landing'}
                                      onClick={() => handleOptionClick("landing")}/>
                        <ChoiceButton option="Портал" active={activeOption === 'portal'}
                                      onClick={() => handleOptionClick("portal")}/>
                    </div>

                    <div className="flex justify-between font-semibold text-sm">
                        <SearchInput/>
                        <div className="flex gap-2">
                            <button
                                className="rounded-lg font-semibold flex gap-1.5 text-white items-center bg-[#0E8AC8] px-3.5 hover:cursor-pointer hover:bg-[#0C75AA] duration-300"
                                onClick={handleAdd}>
                                <Plus/>
                                <span>Добавить</span>
                            </button>

                            <button
                                className="p-2 border rounded-md border-[#D0D5DD] text-[#344054] hover:cursor-pointer hover:text-[#182230] hover:bg-[#F9FAFB] duration-300">
                                <Trash2 color="#344054" size={20}/>
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2 border-b border-[#E4E7EC]">
                        <TabButton option="Новости" active={activeSubSection === 'news'}
                                   onClick={() => handleSubSectionChange("news")}/>
                        <TabButton option="Соревнования" active={activeSubSection === 'contests'}
                                   onClick={() => handleSubSectionChange("contests")}/>
                    </div>
                </div>

                {activeSubSection === 'news' ? <EditNewsTable/> : <EditContestsTable/>}

                <AddNewsModal
                    isOpen={modalManager.isModalOpen('news')}
                    onClose={() => modalManager.closeModal('news')}
                    initialData={modalManager.getModalData('news')}
                />
                <AddContestModal
                    isOpen={modalManager.isModalOpen('contest')}
                    onClose={() => modalManager.closeModal('contest')}
                    initialData={modalManager.getModalData('contest')}
                />
            </div>
        </div>
    );
}