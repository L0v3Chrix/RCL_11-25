'use client';

import React, { createContext, useContext, useState } from 'react';
import { House } from '@/data/houses';

type ActiveModal =
    | { type: 'house', data: House }
    | { type: 'application' }
    | { type: 'tour' }
    | null;

interface ModalContextType {
    activeModal: ActiveModal;
    openHouseModal: (house: House) => void;
    openApplicationModal: () => void;
    openTourModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [activeModal, setActiveModal] = useState<ActiveModal>(null);

    const openHouseModal = (house: House) => setActiveModal({ type: 'house', data: house });
    const openApplicationModal = () => setActiveModal({ type: 'application' });
    const openTourModal = () => setActiveModal({ type: 'tour' });
    const closeModal = () => setActiveModal(null);

    return (
        <ModalContext.Provider value={{ activeModal, openHouseModal, openApplicationModal, openTourModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
