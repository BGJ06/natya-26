import React from 'react';
import { Phone, User, GraduationCap, Star } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';

const ContactRow = ({ name, number, role }) => (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
        <div className="p-2 rounded-full bg-neon-purple/10 text-neon-purple">
            <Phone className="w-4 h-4" />
        </div>
        <div>
            <h4 className="font-semibold text-white">{name}</h4>
            {number && (
                <a href={`tel:${number.replace(/\s/g, '').replace(/-/g, '')}`} className="text-sm text-gray-400 hover:text-neon-pink transition-colors">
                    {number}
                </a>
            )}
        </div>
    </div>
);

const Coordinators = () => {
    return (
        <SectionWrapper id="contact" title="Contact Coordinators">

            {/* Convenor Section - Added based on Poster */}
            <div className="flex justify-center mb-10">
                <GlassCard className="flex items-center gap-6 px-10 py-6 border-neon-pink/30 shadow-neon">
                    <div className="p-3 rounded-full bg-neon-pink/20 text-neon-pink">
                        <Star className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-neon-pink tracking-widest uppercase mb-1">Convenor</h3>
                        <p className="text-2xl font-bold text-white">Dr. S. Senthil (Principal)</p>
                    </div>
                </GlassCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Student Coordinators */}
                <GlassCard className="space-y-6">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <User className="w-6 h-6 text-neon-pink" />
                        <h3 className="text-2xl font-bold text-white">Student Co-Ordinators</h3>
                    </div>
                    <div className="space-y-2">
                        <ContactRow name="R. Jai Akash" number="86101 58958" />
                        <ContactRow name="R.C. Vino" number="82481 79785" />
                        <ContactRow name="R. Vignesh" number="93442 17948" />
                    </div>
                </GlassCard>

                {/* Staff Coordinators */}
                <GlassCard className="space-y-6">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <GraduationCap className="w-6 h-6 text-neon-purple" />
                        <h3 className="text-2xl font-bold text-white">Staff Co-Ordinators</h3>
                    </div>
                    <div className="space-y-2">
                        <ContactRow name="Dr. S. Luna Eunice" number="96559 84421" />
                        <ContactRow name="Mr. S. Pradeep Kumar" number="96007 32145" />
                        <ContactRow name="Mr. D. Asir" />
                        <ContactRow name="Mrs. E. Vijayalakshmi" />
                    </div>
                </GlassCard>
            </div>
        </SectionWrapper >
    );
};

export default Coordinators;
