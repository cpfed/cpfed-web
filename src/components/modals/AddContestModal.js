'use client';

import {AddButton, TabButtonTop} from "@/components/ui";
import Modal from "@/components/modals/Modal";
import {useState} from "react";
import {Trash2} from "lucide-react";
import CustomDropdown from "@/app/(dashboard)/admin/components/CustomDropdown";
import CancelButton from "@/components/ui/Button/CancelButton";

export default function AddContestModal({isOpen, onClose}) {
    const MAX_STEPS = 3;
    const options = [
        {value: 'text', label: 'Текстовое', submenu: []},
        {value: 'choice', label: 'Справочник', submenu: [{ value: 'name', label: 'Наименование справочника'}, { value: 'text', label: 'Город' }]},
        {value: 'phone', label: 'Номер телефона', submenu: []}
    ];
    const [currentStep, setCurrentStep] = useState(1);
    const [currentFields, setCurrentFields] = useState([
        {
            'id': 1,
            'name': 'Фамилия',
            'required': true,
            'type': {
                'main': 'Текстовое',
                'sub': null,
                'mainValue': 'text',
                'subValue': null
            }
        },
        {
            'id': 2,
            'name': 'Имя',
            'required': true,
            'type': {
                'main': 'Текстовое',
                'sub': null,
                'mainValue': 'text',
                'subValue': null
            }
        },
        {
            'id': 3,
            'name': 'Отчество',
            'required': false,
            'type': {
                'main': 'Текстовое',
                'sub': null,
                'mainValue': 'text',
                'subValue': null
            }
        },
        {
            'id': 4,
            'name': 'Область',
            'required': true,
            'type': {
                'main': 'Справочник',
                'sub': 'Город',
                'mainValue': 'text',
                'subValue': 'text'
            }
        }
    ]);
    const [currentId, setCurrentId] = useState(5);

    const [contestData, setContestData] = useState({title: '', description: '', startDate: '', endDate: ''});

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

    const addNewField = () => {
        setCurrentFields([...currentFields, {
            'id': currentId,
            'name': '',
            'required': false,
            'type': {
                'main': 'Текстовое',
                'sub': null,
                'mainValue': 'text',
                'subValue': null
            }
        }]);
        setCurrentId(currentId + 1);
    };

    const removeField = (id) => {
        setCurrentFields(currentFields => currentFields.filter(item => item.id !== id));
    };

    const toggleSwitch = (id) => {
        setCurrentFields(currentFields => currentFields.map(item => item.id !== id ? item : {
            ...item,
            'required': !item.required
        }));
    };

    const setSelectedValue = (id, option) => {
        setCurrentFields(currentFields => currentFields.map(item => item.id !== id ? item : {
            ...item,
            'type': option
        }));
    }

    const setFieldName = (id, name) => {
        setCurrentFields(currentFields => currentFields.map(item => item.id !== id ? item : {
            ...item,
            'name': name
        }));
    }

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
                                value={contestData.title}
                                onChange={(e) => setContestData(prev => ({...prev, title: e.target.value}))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-1 focus:ring-[#0E8AC8]"
                                required
                                placeholder="Введите наименование"
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="startDate" className="text-sm font-medium mb-1.5 block">
                                    <span className="text-[#344054]">Дата начала <span className="text-[#0E8AC8]">*</span></span>
                                </label>
                                <input
                                    type="datetime-local"
                                    id="startDate"
                                    value={contestData.startDate}
                                    onChange={(e) => setContestData(prev => ({...prev, startDate: e.target.value}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0E8AC8]"
                                    required
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="endDate" className="text-sm font-medium mb-1.5 block">
                                    <span className="text-[#344054]">Дата завершения <span className="text-[#0E8AC8]">*</span></span>
                                </label>
                                <input
                                    type="datetime-local"
                                    id="endDate"
                                    value={contestData.endDate}
                                    onChange={(e) => setContestData(prev => ({...prev, endDate: e.target.value}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0E8AC8]"
                                    required
                                />
                            </div>
                        </div>
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
                            value={contestData.description}
                            onChange={(e) => setContestData(prev => ({...prev, description: e.target.value}))}
                            className="h-[370px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0E8AC8]"
                            required
                            placeholder="Введите текст"
                        />
                    </div>
                )
            case 3:
                return (
                    <div
                        className="w-full text-sm text-[#344054] overflow-visible rounded-lg border border-[#E4E7EC]">
                        <table className="w-full text-left rounded-t-lg">
                            <thead
                                className="text-xs h-11 font-medium text-[#475467] bg-[#F9FAFB] border-b border-[#E4E7EC]">
                            <tr>
                                <th className="px-4 py-3 w-12 text-center rounded-tl-lg border-r border-[#E4E7EC]">№</th>
                                <th className="px-4 py-3">Наименование поля</th>
                                <th className="px-4 py-3 border-r border-[#E4E7EC]">Обязательное поле</th>
                                <th className="px-4 py-3 border-r border-[#E4E7EC]">Тип поля</th>
                                <th className="w-[90px] rounded-tr-lg px-4 py-3">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentFields.map((field, index) => (
                                <tr key={field.id}
                                    className={index % 2 === 0 ? "bg-white border-b border-[#E4E7EC]" : " bg-[#F9FAFB] border-b border-[#E4E7EC]"}>
                                    <td className="px-4 py-3 text-center">{index + 1}</td>
                                    <td className="px-4 py-3">
                                        <input
                                            className="w-full border rounded-md border-[#D0D5DD] bg-white px-3 py-2 focus:outline-none"
                                            value={field.name}
                                            onChange={(e) => setFieldName(field.id, e.target.value)}
                                            placeholder="Введите название"
                                        />
                                    </td>
                                    <td className="px-4 py-3">
                                        <div
                                            className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors duration-300 ease-in-out ${
                                                field.required ? 'bg-[#0E8AC8]' : 'bg-[#F2F4F7]'
                                            }`}
                                            onClick={() => toggleSwitch(field.id)}
                                        >
                                            <span
                                                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
                                                    field.required ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <CustomDropdown initialValue={field.type} onSelectionChange={(value) => setSelectedValue(field.id, value)} options={options} width="w-[132px]" />
                                    </td>
                                    <td className="px-4 py-3">
                                        <button
                                            className="p-2 border rounded-md border-[#D0D5DD] text-[#344054] hover:cursor-pointer hover:text-[#182230] hover:bg-[#F9FAFB] duration-300"
                                            onClick={() => removeField(field.id)}>
                                            <Trash2 color="#344054" size={20}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <AddButton text="Добавить" onClick={addNewField}/>
                    </div>
                )
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Добавление соревнования"
            description="Заполните необходимые данные"
            size="650px"
        >
            <div>
                <div className="space-y-4">
                    <div className="flex gap-4 mb-5">
                        <TabButtonTop option="Данные" active={currentStep === 1} additonalClasses="flex-1" onClick={() => changeStep(1)}/>
                        <TabButtonTop option="Основной текст" active={currentStep === 2} additonalClasses="flex-1" onClick={() => changeStep(2)}/>
                        <TabButtonTop option="Поля для регистрации" active={currentStep === 3} additonalClasses="flex-1" onClick={() => changeStep(3)}/>
                    </div>

                    {renderCurrentStep()}
                </div>

                <div className="flex gap-3 justify-end mt-6">
                    <CancelButton onClick={onClose} />

                    <button
                        onClick={handleNext}
                        className="w-h-11 px-4 py-2 text-sm font-medium leading-none text-white bg-[#0E8AC8] border border-transparent rounded-md hover:cursor-pointer hover:bg-[#0C75AA] duration-300"
                    >
                        {currentStep === 3 ? "Создать" : "Далее"}
                    </button>
                </div>
            </div>
        </Modal>
    );
}