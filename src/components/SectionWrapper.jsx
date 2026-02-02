import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`min-h-screen py-20 relative overflow-hidden flex items-center ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl mx-auto px-6 z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
