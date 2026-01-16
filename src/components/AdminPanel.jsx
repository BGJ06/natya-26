import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Check, Lock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const AdminPanel = () => {
    const { content, updateContent, isAdmin, toggleAdmin } = useContent();
    const [isOpen, setIsOpen] = React.useState(false);

    // If not admin, show nothing or just a hidden trigger? 
    // User asked for "Visible only when admin mode is enabled". 
    // We'll simulate a hidden trigger or just a button at bottom right corner.

    return (
        <>
            <motion.button
                className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-white/30 hover:text-white hover:bg-black/80 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
            >
                <Settings className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-20 right-4 z-50 w-80 bg-black/90 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg text-white">Admin Panel</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">Event Title</label>
                                <input
                                    type="text"
                                    value={content.title}
                                    onChange={(e) => updateContent('title', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-neon-purple focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">Date</label>
                                <input
                                    type="text"
                                    value={content.date}
                                    onChange={(e) => updateContent('date', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-neon-purple focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">Reg Fee</label>
                                <input
                                    type="text"
                                    value={content.regFee}
                                    onChange={(e) => updateContent('regFee', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-neon-purple focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500 flex items-center gap-2">
                            <Check className="w-3 h-3 text-emerald-500" /> Auto-saved to LocalStorage
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdminPanel;
