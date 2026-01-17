import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoBackground = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-0 bg-black overflow-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-10" />
            </div>

            <div className="absolute inset-0 opacity-80 mix-blend-screen">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-neon-purple/60 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-tech-blue/60 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[30%] left-[30%] w-[60%] h-[60%] bg-neon-pink/50 rounded-full blur-[80px] animate-pulse-slow delay-2000" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('images/grid.svg')] opacity-10 mix-blend-overlay" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        </div>
    );
};

export default VideoBackground;
