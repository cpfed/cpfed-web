import { useState } from 'react';

export function useModalManager() {
    const [modals, setModals] = useState({});

    const openModal = (modalName, data = null) => {
        setModals(prev => ({
            ...prev,
            [modalName]: { isOpen: true, data }
        }));
    };

    const closeModal = (modalName) => {
        setModals(prev => ({
            ...prev,
            [modalName]: { isOpen: false, data: null }
        }));
    };

    const isModalOpen = (modalName) => {
        return modals[modalName]?.isOpen || false;
    };

    const getModalData = (modalName) => {
        return modals[modalName]?.data || null;
    };

    return {
        openModal,
        closeModal,
        isModalOpen,
        getModalData
    };
}