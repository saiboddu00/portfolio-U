import SectionWrapper from './SectionWrapper';
import { Phone, Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="glass-card max-w-4xl mx-auto p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple" />

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <a href="tel:9392589312" className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group interactive">
                        <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                            <Phone />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Phone</h3>
                            <p className="text-gray-400 group-hover:text-neon-blue transition-colors">9392589312</p>
                        </div>
                    </a>

                    <a href="mailto:saiboddu007@gmail.com" className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group interactive">
                        <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                            <Mail />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Email</h3>
                            <p className="text-gray-400 group-hover:text-neon-purple transition-colors">saiboddu007@gmail.com</p>
                        </div>
                    </a>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/saikumar-b-a4419b380" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-neon-blue/20 hover:text-neon-blue text-white transition-all interactive">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/saiboddu00" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-neon-purple/20 hover:text-neon-purple text-white transition-all interactive">
                        <Github size={24} />
                    </a>
                </div>

                <div className="mt-12 text-sm text-gray-500">
                    © 2024 Sai Kumar. All rights reserved.
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
