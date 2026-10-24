'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
    const [waveOffset, setWaveOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWaveOffset(prev => (prev + 3) % 360);
        }, 20);
        return () => clearInterval(interval);
    }, []);

    // Calculate wave points with larger amplitude (5x more prominent)
    const wave1Y = 50 + Math.sin((waveOffset * Math.PI) / 180) * 60;
    const wave2Y = 50 + Math.sin(((waveOffset + 60) * Math.PI) / 180) * 60;
    const wave3Y = 50 + Math.sin(((waveOffset + 120) * Math.PI) / 180) * 60;
    const wave4Y = 50 + Math.sin(((waveOffset + 180) * Math.PI) / 180) * 60;

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <svg 
                className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-6xl" 
                viewBox="0 0 1000 300" 
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#9333ea", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "#7c3aed", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
                    </linearGradient>
                    
                    <clipPath id="textMask">
                        <text 
                            x="500" 
                            y="160" 
                            textAnchor="middle" 
                            fontFamily="system-ui, -apple-system, sans-serif"
                            fontWeight="700" 
                            fontSize="150"
                        >
                            Brewclick
                        </text>
                        <text 
                            x="500" 
                            y="230" 
                            textAnchor="middle" 
                            fontFamily="system-ui, -apple-system, sans-serif"
                            fontWeight="700" 
                            fontSize="40"
                        >
                            Design studio
                        </text>
                    </clipPath>
                </defs>
                
                {/* Gray text base */}
                <text 
                    x="500" 
                    y="160" 
                    textAnchor="middle" 
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="700" 
                    fontSize="150" 
                    fill="#e5e7eb"
                >
                    Brewclick
                </text>
                <text 
                    x="500" 
                    y="230" 
                    textAnchor="middle" 
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="700" 
                    fontSize="40" 
                    fill="#d1d5db"
                >
                    Design studio
                </text>
                
                {/* Animated liquid with wave - clipped to text shape */}
                <g clipPath="url(#textMask)">
                    <motion.g
                        animate={{ y: [300, 0] }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        {/* Main liquid body */}
                        <rect
                            x="0"
                            y="150"
                            width="1000"
                            height="300"
                            fill="url(#liquidGradient)"
                        />
                        {/* Wave layer */}
                        <path
                            d={`
                                M 0,${wave1Y}
                                C 166,${wave2Y} 333,${wave3Y} 500,${wave4Y}
                                C 666,${wave3Y} 833,${wave2Y} 1000,${wave1Y}
                                L 1000,0
                                L 0,0
                                Z
                            `}
                            fill="url(#liquidGradient)"
                            opacity="0.8"
                        />
                    </motion.g>
                </g>
            </svg>
        </div>
    );
}
