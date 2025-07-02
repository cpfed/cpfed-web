'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#E4E7EC] text-[#101828] py-4">
            <button
                className="flex w-full justify-between items-center text-left hover:cursor-pointer text-base font-medium rounded"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 transition-transform duration-300" />
                ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300" />
                )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            }`}>
                <p className="text-sm">{answer}</p>
            </div>
        </div>
    );
};

export default function FaqPage() {
    const faqData = [
        {
            question: "Какой-то вопрос?",
            answer: "Какой-то ответ."
        },
        {
            question: "Какой-то вопрос?",
            answer: "Какой-то ответ."
        },
        {
            question: "Какой-то вопрос?",
            answer: "Какой-то ответ."
        },
        {
            question: "Какой-то вопрос?",
            answer: "Какой-то ответ."
        }
    ];

    return (
        <div className="flex flex-col gap-6 px-16 py-8">
            <div className="w-full mx-auto bg-white">
                <h2 className="text-4xl font-bold text-[#101828] mb-6" id="faq">Часто задаваемые вопросы</h2>
                <div className="space-y-2">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};