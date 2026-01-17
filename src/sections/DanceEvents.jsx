import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';

const DanceEvents = () => {
    const events = [
        { name: "Mudra Mystique", subtitle: "(Solo Classical)", image: "images/mudra.png", color: "from-purple-500 to-indigo-500" },
        { name: "Freestyle Flare", subtitle: "(Solo Western)", image: "images/freestyle.png", color: "from-pink-500 to-rose-500" },
        { name: "Duo Blaze", subtitle: "", image: "images/duo.png", color: "from-amber-500 to-orange-500" },
        { name: "Folk Fiesta", subtitle: "(Group Folk)", image: "images/folk.png", color: "from-emerald-500 to-teal-500" },
        { name: "Dynamix Crew", subtitle: "(Group Western)", image: "images/dynamix.png", color: "from-red-500 to-orange-500" },
    ];

    return (
        <SectionWrapper id="events" title="Dance Events" subtitle="Showcase your talent on the grand stage">
            <div className="flex flex-wrap justify-center gap-6">
                {events.map((event, index) => (
                    <div key={index} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex">
                        <GlassCard className="flex flex-col items-center text-center gap-6 h-full group py-8 w-full">
                            <div className={`p-4 rounded-full bg-gradient-to-br ${event.color} bg-opacity-10 opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-white/5 group-hover:shadow-neon ring-1 ring-white/10 group-hover:ring-white/30`}>
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-24 h-24 object-cover rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">
                                    {event.name}
                                </h3>
                                {event.subtitle && (
                                    <p className="text-sm text-gray-400 mt-2 font-light tracking-wide uppercase">{event.subtitle}</p>
                                )}
                            </div>

                            <div className="w-full h-1 bg-white/10 rounded-full mt-auto relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default DanceEvents;
