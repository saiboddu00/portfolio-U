import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Code, Database, Server, Layout, PenTool, Terminal, Layers, Globe, Cpu, Palette } from 'lucide-react';

// Fallback to generic icons for specific tech
const skills = [
    { name: 'Java', icon: Code, category: 'Backend' },
    { name: 'J2EE', icon: Server, category: 'Backend' },
    { name: 'Servlets', icon: Server, category: 'Backend' },
    { name: 'JDBC', icon: Database, category: 'Backend' },
    { name: 'HTML', icon: Globe, category: 'Frontend' },
    { name: 'CSS', icon: Palette, category: 'Frontend' },
    { name: 'JavaScript', icon: Code, category: 'Frontend' },
    { name: 'Bootstrap', icon: Layers, category: 'Frontend' },
    { name: 'MySQL', icon: Database, category: 'Database' },
    { name: 'Figma', icon: PenTool, category: 'Design' },
    { name: 'Adobe XD', icon: PenTool, category: 'Design' },
    { name: 'Linux', icon: Terminal, category: 'Tools' },
];

const Skills = () => {
    // Animation for container to stagger children
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl font-bold mb-10 text-center text-white"><span className="text-neon-blue">Technical</span> Skills</h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.1, y: -5, boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)" }}
                        className="glass p-6 rounded-lg flex flex-col items-center justify-center gap-4 border border-white/10 hover:border-neon-blue transition-colors cursor-pointer interactive group"
                    >
                        <skill.icon className="w-8 h-8 text-gray-400 group-hover:text-neon-blue transition-colors" />
                        <span className="font-semibold text-gray-200 group-hover:text-white">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Skills;
