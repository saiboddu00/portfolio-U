import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Secure Voting System",
        subtitle: "using Smart Card & Iris Recognition",
        description: "A highly secure electronic voting system leveraging smart card technology for voter identification and iris recognition for biometric authentication, ensuring transparent and tamper-proof elections.",
        tags: ["Java", "Biometrics", "Smart Card", "Security"],
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "AI Assisted Transport System",
        subtitle: "for Road Lane Vision",
        description: "Deep learning based computer vision application to detect road lanes and assist drivers. Implements real-time lane detection algorithms to enhance road safety.",
        tags: ["Python", "Deep Learning", "OpenCV", "AI"],
        gradient: "from-purple-500 to-pink-500"
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured <span className="text-neon-purple">Projects</span></h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group relative rounded-xl bg-dark-card border border-white/5 overflow-hidden interactive"
                    >
                        {/* Animated Gradient Border */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                        <div className="absolute inset-[1px] bg-dark-card rounded-xl -z-10" />

                        {/* Image Placeholder */}
                        <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                            <span className="text-4xl font-bold text-white opacity-25 uppercase tracking-widest text-center px-4">{project.title.substring(0, 10)}...</span>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                            <p className="text-sm text-neon-purple mb-4">{project.subtitle}</p>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-blue transition-colors">
                                    <Github size={16} /> Code
                                </button>
                                <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-blue transition-colors">
                                    <ExternalLink size={16} /> Demo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
