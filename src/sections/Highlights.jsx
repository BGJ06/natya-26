import React from 'react';
import { Banknote, Trophy, Ticket } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import { useContent } from '../context/ContentContext';

const Highlights = () => {
    const { content } = useContent();

    const highlights = [
        {
            icon: Banknote,
            title: "Attractive Cash Prizes",
            desc: "Win big and take home the glory",
            border: "border-emerald-500/30"
        },
        {
            icon: Trophy,
            title: "Overall Trophy",
            desc: "Championship trophy for the best team",
            border: "border-amber-500/30",
            main: true
        },
        {
            icon: Ticket,
            title: `₹${content.regFee}`,
            desc: "Registration Fee per Head",
            border: "border-neon-pink/30"
        }
    ];

    return (
        <SectionWrapper id="highlights" title="Event Highlights">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {highlights.map((item, index) => (
                    <GlassCard
                        key={index}
                        className={`flex flex-col items-center text-center gap-4 py-10 ${item.main ? 'scale-110 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)] z-10' : ''}`}
                    >
                        <div className={`p-4 rounded-full bg-white/5 border ${item.border} backdrop-blur-md mb-2`}>
                            <item.icon className={`w-10 h-10 ${item.main ? 'text-amber-400' : 'text-white'}`} />
                        </div>

                        <h3 className={`text-2xl font-bold ${item.title === "Overall Trophy" ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 tracking-wider" : "bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400"}`}>
                            {item.title}
                        </h3>
                        <p className={`text-gray-400 ${item.title === "Overall Trophy" ? "text-yellow-100/80 font-medium" : ""}`}>{item.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Highlights;
