import { motion } from 'framer-motion';
// Custom typing effect hook used instead of external library

// I'll stick to standard keyframes or framer motion for simplicity unless I want to install react-type-animation.
// The user asked for "Animated typing effect". Framer motion staggering can simulate it, or I can just use a useEffect interval.
// I'll stick to a simple useEffect implementation for typing.

import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, speed);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return <span>{displayedText}</span>;
};

const Hero = () => {
    return (
        <div id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl text-neon-blue font-light mb-4 tracking-widest uppercase"
                >
                    Hi, I'm
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-neon-purple"
                >
                    B. Sai Kumar
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xl md:text-3xl text-gray-300 mb-10 font-light h-10"
                >
                    <TypingEffect text="Java Full Stack Developer | UI/UX Enthusiast" speed={50} delay={1000} />
                    <span className="animate-pulse">|</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <a href="#projects" className="group relative px-8 py-3 bg-transparent border border-neon-blue text-neon-blue rounded-full overflow-hidden interactive">
                        <div className="absolute inset-0 w-0 bg-neon-blue transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                        <span className="relative font-semibold">View Projects</span>
                    </a>
                    <a href="#contact" className="group relative px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black rounded-full overflow-hidden interactive">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <span className="relative font-bold">Contact Me</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
