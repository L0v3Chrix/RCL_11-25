'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: { src: string; label?: string }[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export default function Lightbox({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNavigate
}: LightboxProps) {
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;

        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') onNavigate(Math.max(0, currentIndex - 1));
        if (e.key === 'ArrowRight') onNavigate(Math.min(images.length - 1, currentIndex + 1));
    }, [isOpen, onClose, onNavigate, currentIndex, images.length]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown, isOpen]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < images.length - 1) {
                onNavigate(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                onNavigate(currentIndex - 1);
            }
        }
        setTouchStart(null);
    };

    if (!isOpen) return null;

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Close lightbox"
                >
                    <X size={28} />
                </button>

                {/* Navigation Arrows */}
                {currentIndex > 0 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(currentIndex - 1);
                        }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>
                )}

                {currentIndex < images.length - 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(currentIndex + 1);
                        }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>
                )}

                {/* Image Container */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-5xl max-h-[85vh] mx-4 md:mx-8 aspect-auto"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                        <Image
                            src={currentImage.src}
                            alt={currentImage.label || 'Community photo'}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 95vw, 80vw"
                            priority
                        />
                    </div>

                    {/* Caption */}
                    {currentImage.label && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                            <p className="font-handwritten text-3xl md:text-4xl text-white drop-shadow-lg">
                                {currentImage.label}
                            </p>
                        </div>
                    )}
                </motion.div>

                {/* Image Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-bold">
                    {currentIndex + 1} / {images.length}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
