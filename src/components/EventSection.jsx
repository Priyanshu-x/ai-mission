import React from 'react';

const EventSection = ({ event, index }) => {
    const isEven = index % 2 === 0;

    return (
        <section className="bg-black py-24 px-8 border-t border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Event Header */}
                <div className="mb-16">
                    <h2 className="text-zinc-500 text-sm uppercase tracking-[0.4em] font-bold mb-4">Event Case Study</h2>
                    <h1 className="text-5xl md:text-7xl font-normal text-white font-['Bebas_Neue'] leading-none uppercase">
                        {event.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-4 text-xs tracking-widest text-zinc-400 uppercase font-bold">
                        <span>{event.date}</span>
                        <span className="w-8 h-[1px] bg-zinc-800"></span>
                        <span>{event.organizer}</span>
                    </div>
                </div>

                {/* Side-by-Side Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Description */}
                    <div className="lg:col-span-4 space-y-8">
                        <p className="text-zinc-400 text-lg leading-relaxed font-light border-l-2 border-white pl-8">
                            {event.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                        </p>

                        <div className="pt-8 flex flex-col gap-4">
                            <div className="text-sm text-zinc-600 uppercase tracking-widest font-bold">Mission Scope</div>
                            <div className="p-6 bg-zinc-950 border border-zinc-900">
                                <p className="text-zinc-400 text-base italic leading-relaxed">
                                    {event.missionScope || "This initiative focused on bringing advanced AI literacy to the participants, ensuring a comprehensive understanding of practical applications and ethical considerations."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Related Photos */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {event.images && event.images.length > 0 ? (
                                event.images.slice(0, 6).map((img, i) => (
                                    <div key={i} className="aspect-square overflow-hidden bg-zinc-900 group">
                                        <img
                                            src={img}
                                            alt={`${event.title} - ${i}`}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            onError={(e) => { e.target.src = '/img1.webp'; }}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="text-zinc-600 text-sm italic">Documentation media pending deployment...</p>
                            )}
                        </div>

                        {event.images && event.images.length > 6 && (
                            <div className="mt-6 text-right">
                                <span className="text-zinc-700 text-[10px] uppercase tracking-widest font-bold">
                                    + {event.images.length - 6} Additional Frames in Archive
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventSection;
