import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, MinusCircle, User, Bot } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const { content } = useContent();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Namaste! I'm the Natya '26 Assistant. How can I help you today?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleQuestion = async (question, answer) => {
        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: question }]);

        setIsTyping(true);

        // Simulate network delay
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: answer }]);
            setIsTyping(false);
        }, 1000);
    };

    const faqData = [
        {
            question: "When is the event?",
            answer: `Natya '26 is scheduled for ${content.date}. Mark your calendars!`
        },
        {
            question: "Registration Fee?",
            answer: `The registration fee is ₹${content.regFee} per head.`
        },
        {
            question: "Where is the venue?",
            answer: "The event will be held at our main campus auditorium. Check the 'Location' section for a map!"
        },
        {
            question: "Contact / More Doubts",
            answer: "For further queries, please mail to natya2k26@gmail.com or call any of the organizers listed in the events section."
        }
    ];

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userText = inputValue.trim();
        setInputValue("");
        setMessages(prev => [...prev, { type: 'user', text: userText }]);
        setIsTyping(true);

        // "AI" Logic - Keyword Matching
        const lowerText = userText.toLowerCase();
        let botResponse = "I'm essentially a simple AI, but I can help with basic info! try asking about 'date', 'fee', 'location' or 'contact'.";

        if (lowerText.match(/date|when|time|schedule|calendar/)) {
            botResponse = `Natya '26 is happening on ${content.date}. Don't miss it!`;
        } else if (lowerText.match(/fee|cost|price|pay|register|ticket|money|registration/)) {
            botResponse = `Registration is just ₹${content.regFee} per person. Great value!`;
        } else if (lowerText.match(/where|location|venue|place|map|address|campus/)) {
            botResponse = "We are at the main campus auditorium. Use the map in the Location section below.";
        } else if (lowerText.match(/contact|mail|email|phone|call|number|person|support|help|doubt/)) {
            botResponse = "You can reach us at natya2k26@gmail.com or call our coordinators listed below for personal assistance.";
        } else if (lowerText.match(/hi|hello|hey|greetings|namaste|start/)) {
            botResponse = "Namaste! Excited for Natya '26? Ask me anything about the event!";
        } else if (lowerText.match(/trophy|prize|win|reward/)) {
            botResponse = "There are exciting cash prizes and the Overall Trophy awaits the best team!";
        }

        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl w-[90vw] max-w-[350px] shadow-[0_0_30px_rgba(139,92,246,0.3)] mb-4 overflow-hidden pointer-events-auto flex flex-col"
                        style={{ height: '500px', maxHeight: '70vh' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 p-4 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="font-bold text-white">Natya '26 Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-neon-pink/20 text-neon-pink' : 'bg-neon-purple/20 text-neon-purple'}`}>
                                        {msg.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${msg.type === 'user'
                                        ? 'bg-neon-pink/10 border border-neon-pink/20 text-white rounded-tr-sm'
                                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 text-neon-purple flex items-center justify-center shrink-0">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-sm flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            {/* Input Area */}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage();
                                }}
                                className="flex gap-2 mb-3"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-purple/50 placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-neon-purple text-white p-2 rounded-xl hover:bg-neon-purple/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </form>

                            <p className="text-xs text-gray-400 mb-2 font-medium">Suggested:</p>
                            <div className="flex flex-wrap gap-2">
                                {faqData.map((faq, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleQuestion(faq.question, faq.answer)}
                                        disabled={isTyping}
                                        className="text-xs bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/40 border border-white/10 text-gray-300 rounded-full px-3 py-1.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-left"
                                    >
                                        {faq.question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-neon-purple to-neon-pink p-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] text-white pointer-events-auto relative group"
            >
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75 group-hover:opacity-100" />
                {isOpen ? <MinusCircle size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
