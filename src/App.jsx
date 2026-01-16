import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from './components/VideoBackground';
import Hero from './sections/Hero';
import DanceEvents from './sections/DanceEvents';
import Highlights from './sections/Highlights';
import Flashback from './sections/Flashback';
import Coordinators from './sections/Coordinators';
import CTASection from './sections/CTASection';

import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-neon-pink selection:text-white pb-20 relative overflow-hidden">
      {/* Fixed Background Layer */}
      {/* Full Screen Live Background */}
      {/* Fixed Background Layer */}
      {/* Full Screen Live Background */}
      <VideoBackground />

      <div className="relative z-10">
        <Hero />
        <DanceEvents />
        <Highlights />
        <Flashback />
        <Coordinators />
        <CTASection />

        {/* Footer copyright */}
        <footer className="text-center text-gray-600 text-sm py-8 border-t border-white/5 mx-8 font-light">
          <p className="mb-2">For Queries: <a href="mailto:natya2k26@gmail.com" className="text-neon-purple hover:text-neon-pink transition-colors">natya2k26@gmail.com</a></p>
          <p>© 2026 NATYA. All rights reserved.</p>
        </footer>
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
