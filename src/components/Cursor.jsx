import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full border border-neon-blue mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(0, 243, 255, 0.1)' : 'transparent',
                borderColor: isHovering ? '#bc13fe' : '#00f3ff'
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-purple rounded-full -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
    );
};

export default Cursor;
