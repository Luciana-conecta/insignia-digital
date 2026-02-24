"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

// MediaItemType defines the structure of a media item
interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null); // Reference for video element
    const [isInView, setIsInView] = useState(false); // To track if video is in the viewport
    const [isBuffering, setIsBuffering] = useState(true);  // To track if video is buffering

    // Intersection Observer to detect if video is in view and play/pause accordingly
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting); // Set isInView to true if the video is in view
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current); // Start observing the video element
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current); // Clean up observer when component unmounts
            }
        };
    }, []);

    // Handle video play/pause based on whether the video is in view or not
    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return; // Don't play if video is not in view or component is unmounted

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play(); // Play the video if it's ready
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve; // Wait until the video can start playing
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url} // Image source URL
            alt={item.title} // Alt text for the image
            className={`${className} object-cover cursor-pointer`} // Style the image
            onClick={onClick} // Trigger onClick when the image is clicked
            loading="lazy" // Lazy load the image for performance
            decoding="async" // Decode the image asynchronously
        />
    );
};

// GalleryModal component displays the selected media item in a modal
interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[]; // List of media items to display in the modal
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });  // Track the position of the dockable panel

    if (!isOpen) return null; // Return null if the modal is not open

    return (
        <>
            {/* Main Modal Overlay */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-primary/20 backdrop-blur-xl"
                onClick={onClose}
            >
                {/* Main Modal Content */}
                <motion.div
                    initial={{ scale: 0.98, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.98, opacity: 0, y: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                    className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Main Content Area */}
                    <div className="flex flex-col h-full max-h-[90vh]">
                        <div className="flex-1 p-2 bg-gray-900/5 overflow-hidden flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedItem.id}
                                    className="relative w-full h-full max-h-[70vh] flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MediaItem item={selectedItem} className="max-w-full max-h-full object-contain" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="p-8 bg-white">
                            <h3 className="text-2xl font-bold text-primary font-display">
                                {selectedItem.title}
                            </h3>
                            <p className="text-gray-500 mt-2 leading-relaxed">
                                {selectedItem.desc}
                            </p>
                        </div>
                    </div>

                    {/* Close Button */}
                    <motion.button
                        className="absolute top-4 right-4 p-3 rounded-full bg-white/80 text-primary hover:bg-primary hover:text-white transition-colors backdrop-blur-sm"
                        onClick={onClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className='w-5 h-5' />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Draggable Dock */}
            <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                initial={false}
                animate={{ x: dockPosition.x, y: dockPosition.y }}
                onDragEnd={(_, info) => {
                    setDockPosition(prev => ({
                        x: prev.x + info.offset.x,
                        y: prev.y + info.offset.y
                    }));
                }}
                className="fixed z-[70] left-1/2 bottom-8 -translate-x-1/2 touch-none"
            >
                <motion.div
                    className="relative rounded-2xl bg-primary/10 backdrop-blur-2xl border border-white/20 shadow-2xl cursor-grab active:cursor-grabbing p-2"
                >
                    <div className="flex items-center -space-x-1">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                }}
                                style={{
                                    zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                                }}
                                className={`
                                    relative group
                                    w-10 h-10 md:w-12 md:h-12 flex-shrink-0 
                                    rounded-xl overflow-hidden 
                                    cursor-pointer hover:z-20 border-2
                                    ${selectedItem.id === item.id
                                        ? 'border-accent shadow-lg scale-110'
                                        : 'border-transparent hover:border-white/50'}
                                `}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.2 : 1,
                                    y: selectedItem.id === item.id ? -10 : 0,
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    y: -15,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                            >
                                <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="w-full py-12">
            <div className="mb-12 text-center max-w-2xl mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-primary font-display"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>
                <motion.p
                    className="mt-4 text-gray-500 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {description}
                </motion.p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    {selectedItem ? (
                        <GalleryModal
                            selectedItem={selectedItem}
                            isOpen={true}
                            onClose={() => setSelectedItem(null)}
                            setSelectedItem={setSelectedItem}
                            mediaItems={items}
                        />
                    ) : (
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[100px] md:auto-rows-[120px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.05 }
                                }
                            }}
                        >
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layoutId={`media-${item.id}`}
                                    className={`relative overflow-hidden rounded-2xl cursor-move shadow-sm hover:shadow-xl transition-shadow ${item.span}`}
                                    onClick={() => !isDragging && setSelectedItem(item)}
                                    variants={{
                                        hidden: { y: 20, scale: 0.9, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            scale: 1,
                                            opacity: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 25,
                                            }
                                        }
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    drag
                                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                    dragElastic={1}
                                    onDragStart={() => setIsDragging(true)}
                                    onDragEnd={(e, info) => {
                                        setIsDragging(false);
                                        const moveDistance = info.offset.x + info.offset.y;
                                        if (Math.abs(moveDistance) > 80) {
                                            const newItems = [...items];
                                            const draggedItem = newItems[index];
                                            const targetIndex = moveDistance > 0 ?
                                                Math.min(index + 1, items.length - 1) :
                                                Math.max(index - 1, 0);
                                            newItems.splice(index, 1);
                                            newItems.splice(targetIndex, 0, draggedItem);
                                            setItems(newItems);
                                        }
                                    }}
                                >
                                    <MediaItem
                                        item={item}
                                        className="absolute inset-0 w-full h-full"
                                        onClick={() => !isDragging && setSelectedItem(item)}
                                    />
                                    <motion.div
                                        className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"
                                    >
                                        <h3 className="text-white text-sm font-bold truncate">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/80 text-[10px] line-clamp-1">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default InteractiveBentoGallery;