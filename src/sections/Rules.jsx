import React, { useState } from 'react';
import { AlertCircle, ChevronDown, Clock } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';

const Rules = () => {
    const [isDurationExpanded, setIsDurationExpanded] = useState(false);

    return (
        <SectionWrapper id="rules" title="Event Rules" subtitle="Please follow these guidelines strictly">
            <div className="max-w-4xl mx-auto">
                <GlassCard className="border-neon-pink/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-pink" />
                    <div className="flex items-start gap-4 p-2">
                        <div className="p-3 rounded-full bg-neon-pink/10 text-neon-pink shrink-0 mt-1">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <div className="space-y-6 w-full">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">General Regulations</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 shrink-0" />
                                        <span>Strictly no fire, colour powder, smoke, glass, or sharp objects.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 shrink-0" />
                                        <span>Formal Dress Code is compulsory.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 shrink-0" />
                                        <span>Boys and Girls are not allowed to perform together.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 shrink-0" />
                                        <span className="text-red-400 font-semibold">Violation of rules will lead to disqualification of the team.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Song Duration Rules - Integrated Toggle */}
                            <div className="border-t border-white/10 pt-4 cursor-pointer group" onClick={() => setIsDurationExpanded(!isDurationExpanded)}>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-neon-purple/10 text-neon-purple">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">Song Duration Rules!!!</h3>
                                    </div>
                                    <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isDurationExpanded ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isDurationExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 pl-12 pb-2">
                                                <ul className="space-y-3 text-gray-300">
                                                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                                        <span>Solo Song</span>
                                                        <span className="font-mono text-neon-purple">3 to 4 mins</span>
                                                    </li>
                                                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                                        <span>Duo Song</span>
                                                        <span className="font-mono text-neon-purple">3 to 4 mins</span>
                                                    </li>
                                                    <li className="flex justify-between items-center">
                                                        <span>Group Dance</span>
                                                        <span className="font-mono text-neon-purple">4 to 5 mins</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
};

export default Rules;
