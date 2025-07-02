'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, description, children, size = 'md' }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '600px': 'max-w-[600px]',
        '650px': 'max-w-[650px]'
    };

    return createPortal(
        <div
            className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-lg shadow-xl w-full max-h-[700px] overflow-y-auto ${sizeClasses[size]} transform transition-all duration-300 scale-100`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
            >
                {title && (
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex flex-col gap-1">
                            <h3 id="modal-title" className="text-lg font-semibold text-[#101828]">
                                {title}
                            </h3>

                            <h1 id="modal-description" className="text-sm text-[#475467]">
                                {description}
                            </h1>
                        </div>

                        <button
                            onClick={onClose}
                            className="text-[#98A2B3] hover:text-gray-600 hover:cursor-pointer duration-300 transition-colors"
                            aria-label="Close modal"
                        >
                            <X />
                        </button>
                    </div>
                )}

                <div className="p-6 text-sm">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}