import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowDown } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import NeonButton from '../components/NeonButton';

const Hero = () => {
    const { content } = useContent();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-pink/20 rounded-full blur-[80px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "outCirc" }}
                className="space-y-6 z-10 px-4"
            >
                {/* College Details */}
                <div className="space-y-2 text-gray-300 text-lg md:text-xl font-light">
                    <p className="font-semibold text-white text-2xl">Kamaraj College of Engineering & Technology</p>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-400">
                        <p className="uppercase tracking-widest text-sm text-neon-purple mt-2">
                            (An Autonomous Institution Affiliated to Anna University, Chennai)
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-400">
                        <MapPin className="w-4 h-4 text-neon-pink" />
                        <span>Virudhunagar, Tamil Nadu</span>
                    </div>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase text-white/80 mt-8">
                    PROUDLY PRESENTS
                </h2>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-fuchsia-500 to-neon-pink drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                    {content.title}
                </motion.h1>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neon-pink mt-4 animate-pulse">
                    CLASH OF DANCE
                </h3>

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto my-8" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="my-4"
                >
                    <p className="text-lg text-neon-purple/80 uppercase tracking-[0.3em] font-bold py-4 inline-block border-t border-b border-white/5 bg-background/50 backdrop-blur-sm rounded-full px-6">
                        State Level Cultural Festival
                    </p>
                </motion.div>

                <motion.div
                    className="py-3 px-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm inline-flex items-center gap-3 mt-6"
                    whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
                >
                    <Calendar className="w-6 h-6 text-neon-pink" />
                    <span className="text-2xl font-bold tracking-wide">21.02.2026 (Saturday)</span>
                </motion.div>

            </motion.div>



            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </div>
    );
};

export default Hero;
