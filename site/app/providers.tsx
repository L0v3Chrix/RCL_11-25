'use client';

import { ModalProvider } from '@/providers/ModalProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    );
}
