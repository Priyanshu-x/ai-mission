import React, { useState } from 'react';
import { events } from '../data/eventsData';

const CollegeEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Chronological sorting: Newest events first
    const sortedEvents = [...events].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

    const openGallery = (event) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedEvent(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedEvent && selectedEvent.images) {
            setCurrentImageIndex((prev) =>
                prev === selectedEvent.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedEvent && selectedEvent.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedEvent.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section className="bg-black py-32 px-4 md:px-8 overflow-hidden border-t border-zinc-900">

            {/* Events Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                {sortedEvents.map((event) => (
                    <div
                        key={event.id}
                        className="group flex flex-col cursor-pointer"
                        onClick={() => event.images && openGallery(event)}
                    >
                        {/* Event Thumbnail */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-900 mb-8 transition-all duration-500 group-hover:border-zinc-700">
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                                onError={(e) => {
                                    e.target.src = '/img1.webp';
                                }}
                            />

                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-end p-8">
                                <div className="mt-auto">
                                    <span className="text-white text-xs uppercase tracking-widest font-bold border-b border-white pb-1">
                                        Exploration View
                                    </span>
                                </div>
                            </div>

                            {/* Photo Count Badge */}
                            {(event.images || event.imageCount) && (
                                <div className="absolute top-6 right-6 bg-black/90 text-white px-4 py-1.5 text-[10px] uppercase tracking-widest border border-white/20 backdrop-blur-md">
                                    {(event.images?.length || event.imageCount)} Frames
                                </div>
                            )}
                        </div>

                        {/* Event Details */}
                        <div className="px-1">
                            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">
                                <span className="text-white">{event.date}</span>
                                <span className="w-8 h-[1px] bg-zinc-800"></span>
                                <span>{event.organizer}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-zinc-300 transition-colors uppercase tracking-tight">
                                {event.title}
                            </h3>

                            <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed font-light mb-8 max-w-[90%]">
                                {event.description}
                            </p>

                            <div className="flex items-center gap-2 text-white text-[11px] uppercase tracking-widest font-bold group-hover:gap-4 transition-all duration-300">
                                <span>Discover Event</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery Modal - Clean Professional Version */}
            {selectedEvent && selectedEvent.images && (
                <div className="fixed inset-0 bg-black z-50 flex flex-col md:flex-row overflow-hidden">
                    {/* Left: Metadata & Navigation */}
                    <div className="w-full md:w-[350px] bg-zinc-950 p-12 flex flex-col justify-between border-r border-zinc-900 overflow-y-auto">
                        <div>
                            <button
                                onClick={closeGallery}
                                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest mb-16"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Archive
                            </button>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h4 className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Series Engagement</h4>
                                    <h2 className="text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
                                        {selectedEvent.title}
                                    </h2>
                                </div>

                                <div className="space-y-4 pt-8 border-t border-zinc-900">
                                    <div>
                                        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-1">Deployment Date</p>
                                        <p className="text-white text-sm">{selectedEvent.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-1">Coordinated By</p>
                                        <p className="text-white text-sm">{selectedEvent.organizer}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-1">Mission briefing</p>
                                        <p className="text-zinc-400 text-xs leading-relaxed font-light">{selectedEvent.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block pt-12">
                            <div className="text-[10px] text-zinc-700 uppercase tracking-widest">
                                Frame {currentImageIndex + 1} of {selectedEvent.images.length}
                            </div>
                        </div>
                    </div>

                    {/* Right: Immersive Viewer */}
                    <div className="flex-1 relative bg-black flex items-center justify-center p-8 md:p-16">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={selectedEvent.images[currentImageIndex]}
                                alt={`${selectedEvent.title} - ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-700"
                                onError={(e) => e.target.src = '/img1.webp'}
                            />

                            {/* Simple Professional Controls */}
                            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-between px-4 md:px-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={prevImage}
                                    className="bg-black/80 text-white p-5 border border-zinc-800 hover:border-white transition-all transform hover:-translate-x-1"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="bg-black/80 text-white p-5 border border-zinc-800 hover:border-white transition-all transform hover:translate-x-1"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Controls */}
                        <div className="absolute bottom-12 left-0 right-0 md:hidden flex justify-center gap-8 px-8">
                            <button onClick={prevImage} className="text-white uppercase tracking-widest text-[10px] font-bold">Prev</button>
                            <span className="text-zinc-600 text-[10px]">{currentImageIndex + 1} / {selectedEvent.images.length}</span>
                            <button onClick={nextImage} className="text-white uppercase tracking-widest text-[10px] font-bold">Next</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CollegeEvents;
