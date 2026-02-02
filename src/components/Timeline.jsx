import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
    {
        degree: "B.Tech CSE",
        year: "2020 – 2024",
        institution: "Sreenivasa Institute of Technology"
    },
    {
        degree: "Intermediate",
        year: "2018 - 2020",
        institution: "Bhashyam Junior College"
    },
    {
        degree: "School",
        year: "2018",
        institution: "Bhashyam School"
    }
];

const certifications = [
    "Pantech AI Certification",
    "Coding Raj Web Development Certification"
];

const Timeline = () => {
    return (
        <SectionWrapper id="education">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Education Column */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                        <GraduationCap className="text-neon-blue" /> Education
                    </h2>
                    <div className="relative border-l border-white/10 ml-3 space-y-8 pl-8 pb-8">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-neon-blue/50 transition-all group overflow-hidden"
                            >
                                {/* Colorful Card Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-dark border-2 border-neon-blue z-10 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />

                                <h3 className="text-xl font-bold text-white mb-1 relative z-10">{item.degree}</h3>
                                <span className="inline-flex items-center gap-1 text-sm text-neon-blue mb-2 relative z-10 font-medium bg-neon-blue/10 px-2 py-0.5 rounded">
                                    <Calendar size={14} /> {item.year}
                                </span>
                                <p className="text-gray-300 relative z-10">{item.institution}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                        <Award className="text-neon-purple" /> Certifications
                    </h2>
                    <div className="grid gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-5 rounded-lg border-l-4 border-l-neon-purple bg-gradient-to-r from-neon-purple/10 to-transparent flex items-center justify-between group interactive relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="font-semibold text-white group-hover:text-neon-blue transition-colors relative z-10">{cert}</span>
                                <Award className="text-neon-purple group-hover:text-neon-blue transition-colors relative z-10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Timeline;
