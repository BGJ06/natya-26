import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const SectionWrapper = ({ children, id, className, title, subtitle }) => {
    return (
        <section id={id} className={cn("relative py-20 px-4 md:px-8 max-w-7xl mx-auto w-full", className)}>
            {(title || subtitle) && (
                <div className="text-center mb-16 space-y-2">
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink drop-shadow-lg"
                        >
                            {title}
                        </motion.h2>
                    )}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            )}
            {children}
        </section>
    );
};

export default SectionWrapper;
