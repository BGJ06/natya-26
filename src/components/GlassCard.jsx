import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const GlassCard = ({ children, className, hoverEffect = true }) => {
    return (
        <motion.div
            className={cn(
                "glass-panel p-6 relative overflow-hidden group border-white/5",
                hoverEffect && "hover:shadow-neon hover:border-white/20 transition-all duration-300",
                className
            )}
            whileHover={hoverEffect ? { scale: 1.02 } : {}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5 opacity-50" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
