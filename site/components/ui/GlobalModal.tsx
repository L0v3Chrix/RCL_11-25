'use client';

import { useModal } from '@/providers/ModalProvider';
import Modal from '@/components/ui/Modal';
import HouseModal from '@/components/modals/HouseModal';
import ApplicationModal from '@/components/modals/ApplicationModal';
import TourModal from '@/components/modals/TourModal';

export default function GlobalModal() {
    const { activeModal, closeModal } = useModal();

    return (
        <Modal
            isOpen={!!activeModal}
            onClose={closeModal}
            className="max-w-6xl w-[95vw] h-[90vh] md:h-auto overflow-y-auto shadow-2xl rounded-[2rem]"
        >
            {activeModal?.type === 'house' && <HouseModal house={activeModal.data} />}
            {activeModal?.type === 'application' && <ApplicationModal />}
            {activeModal?.type === 'tour' && <TourModal />}
        </Modal>
    );
}
