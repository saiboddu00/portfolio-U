import SectionWrapper from './SectionWrapper';
import { User } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="glass-card max-w-3xl mx-auto flex flex-col items-center text-center p-10 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl -z-10" />

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mb-6 shadow-lg shadow-neon-blue/20">
                    <User className="text-black w-8 h-8" />
                </div>

                <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                    I am a Computer Science graduate passionate about information processing, teamwork, and professional growth.
                    With a strong foundation in <span className="text-neon-blue">Java Full Stack Development</span>, I enjoy building scalable web applications
                    and designing intuitive user interfaces that solve real-world problems.
                </p>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">2024</h3>
                        <p className="text-sm text-gray-400">Graduated</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">5+</h3>
                        <p className="text-sm text-gray-400">Projects</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">2</h3>
                        <p className="text-sm text-gray-400">Certifications</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
