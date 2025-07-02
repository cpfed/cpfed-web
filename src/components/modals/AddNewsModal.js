'use client';

import {TabButtonTop, Dropzone} from "@/components/ui";
import Modal from "@/components/modals/Modal";
import {useState} from "react";
import CancelButton from "@/components/ui/Button/CancelButton";

export default function AddContestModal({isOpen, onClose}) {
    const MAX_STEPS = 2;
    const [currentStep, setCurrentStep] = useState(1);
    const [newsData, setNewsData] = useState({title: '', description: ''});

    const handleNext = () => {
        if (currentStep === MAX_STEPS) {
            console.log('submit');
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    const changeStep = (step) => {
        setCurrentStep(step);
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="title" className="text-sm font-medium mb-1.5 block">
                                <span className="text-[#344054]">Наименование <span className="text-[#0E8AC8]">*</span></span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={newsData.title}
                                onChange={(e) => setNewsData(prev => ({...prev, title: e.target.value}))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-1 focus:ring-[#0E8AC8]"
                                required
                                placeholder="Введите наименование"
                            />
                        </div>

                        <Dropzone />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <label htmlFor="description" className="text-sm font-medium mb-1.5 block">
                            <span className="text-[#344054]">Описание <span className="text-[#0E8AC8]">*</span></span>
                        </label>
                        <textarea
                            id="description"
                            value={newsData.description}
                            onChange={(e) => setNewsData(prev => ({...prev, description: e.target.value}))}
                            className="h-[370px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0E8AC8]"
                            required
                            placeholder="Введите текст"
                        />
                    </div>
                )
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Добавление новости"
            description="Заполните необходимые данные"
            size="600px"
        >
            <div>
                <div className="space-y-4">
                    <div className="flex gap-4 mb-5">
                        <TabButtonTop option="Данные" active={currentStep === 1} additonalClasses="flex-1" onClick={() => changeStep(1)}/>
                        <TabButtonTop option="Основной текст" active={currentStep === 2} additonalClasses="flex-1" onClick={() => changeStep(2)}/>
                    </div>

                    {renderCurrentStep()}
                </div>

                <div className="flex gap-3 justify-end mt-6">
                    <CancelButton onClick={onClose} />

                    <button
                        onClick={handleNext}
                        className="w-h-11 px-4 py-2 text-sm font-medium leading-none text-white bg-[#0E8AC8] border border-transparent rounded-md hover:cursor-pointer hover:bg-[#0C75AA] duration-300"
                    >
                        {currentStep === 2 ? "Создать" : "Далее"}
                    </button>
                </div>
            </div>
        </Modal>
    );
}