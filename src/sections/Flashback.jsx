import React, { useState, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const VideoCard = ({ item }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const bgVideoRef = useRef(null);

    const toggleMute = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = (e) => {
        e.preventDefault();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                if (bgVideoRef.current) bgVideoRef.current.pause();
            } else {
                videoRef.current.play();
                if (bgVideoRef.current) bgVideoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <GlassCard className="p-2 group hover:scale-105 transition-transform duration-300 relative">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black" onClick={togglePlay}>
                {/* Background Blurred Video */}
                <video
                    ref={bgVideoRef}
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-md opacity-60 scale-110 -rotate-90"
                />

                {/* Main Content Video */}
                <video
                    ref={videoRef}
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative w-full h-full object-contain z-10 shadow-lg -rotate-90 scale-[2]"
                />

                {/* Controls Container */}
                <div className="absolute bottom-3 right-3 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Play/Pause Control */}
                    <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>

                    {/* Audio Control */}
                    <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
                    >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none z-20">
                    <p className="text-white font-medium">{item.caption}</p>
                </div>
            </div>
        </GlassCard>
    );
};

const Flashback = () => {
    // Video data for flashback section
    const memories = [
        { id: 1, src: "videos/flashback-1.mp4", caption: "Natya '25" },
        { id: 2, src: "videos/flashback-2.mp4", caption: "Group Dance" },
        { id: 3, src: "videos/flashback-3.mp4", caption: "Crowd Cheering" },
    ];

    return (
        <SectionWrapper id="flashback" title="Flashback" subtitle="Glimpses of our previous editions">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {memories.map((item) => (
                    <VideoCard key={item.id} item={item} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Flashback;
