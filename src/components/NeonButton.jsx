import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const NeonButton = ({ children, onClick, icon: Icon, variant = 'primary', className, href }) => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 group overflow-hidden";

    const variants = {
        primary: "bg-neon-pink text-white shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/60 hover:scale-105",
        secondary: "bg-white text-neon-purple shadow-lg shadow-white/30 hover:shadow-white/50 hover:scale-105",
        outline: "bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white hover:shadow-neon-purple/50"
    };

    const content = (
        <>
            {Icon && <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />}
            <span>{children}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(baseStyles, variants[variant], className)}
                whileTap={{ scale: 0.95 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={cn(baseStyles, variants[variant], className)}
            whileTap={{ scale: 0.95 }}
        >
            {content}
        </motion.button>
    );
};

export default NeonButton;
