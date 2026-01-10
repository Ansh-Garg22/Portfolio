import { motion } from 'framer-motion';
import data from '../data.json';
import { ArrowRight } from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

// Helper to resolve icon from string
const getIcon = (iconName) => {
    // Default mapping for simple strings if not full icon name in data.json's hero.techStack
    // But wait, data.json hero.techStack is just strings ["HTML5", "CSS"...]
    // We need to map these names to icons manually or change data.json structure for hero.
    // For simplicity and robustness, let's map common names here.
    const map = {
        "HTML5": SiIcons.SiHtml5,
        "CSS": SiIcons.SiCss3,
        "Javascript": SiIcons.SiJavascript,
        "Node.js": SiIcons.SiNodedotjs,
        "Python": SiIcons.SiPython,
        "Langchain": SiIcons.SiLangchain,
        "Github": SiIcons.SiGithub
    };

    const Icon = map[iconName];
    return Icon ? <Icon size={32} className="mr-2" /> : null;
};

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-dark pt-20" id="home">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-8 md:px-12 flex-grow flex items-center">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-baseline">
                            Hello<span className="text-primary text-4xl">.</span>
                        </h2>

                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <h3 className="text-2xl md:text-3xl text-gray-300 font-light">
                                {data.hero.title.split(",")[0].replace("Hello", "")} {data.hero.title.split("I'm ")[1]}
                            </h3>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                            {data.hero.subtitle}
                        </h1>

                        <div className="flex gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-primary rounded-sm text-white font-semibold text-lg shadow-lg shadow-primary/20 hover:bg-red-500 transition-colors duration-300"
                            >
                                {data.hero.cta}
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/1CmBBXo4TMNb8KDpmwivJdUJw8nwB03dg/view?usp=drivesdk" // Placeholder link
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-gray-600 rounded-sm text-white font-medium text-lg hover:border-white transition-colors duration-300"
                            >
                                {data.hero.resume}
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end relative"
                    >
                        {/* Circle Background Effect */}
                        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-primary/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
                        </div>

                        {/* Arrows Decoration */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 opacity-20 hidden md:block">
                            <ArrowRight size={64} className="text-primary transform rotate-180" />
                        </div>
                        <div className="absolute bottom-0 right-10 opacity-20 hidden md:block">
                            <ArrowRight size={64} className="text-primary" />
                        </div>

                        <div className="relative z-10 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                            <img
                                src={data.hero.image}
                                alt="Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('bg-gray-700');
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Skills Strip */}
            <div className="w-full bg-secondary/30 mt-12 py-8 border-t border-gray-800">
                <div className="container mx-auto px-8 md:px-12 overflow-hidden">
                    <div className="flex justify-between items-center flex-wrap gap-8 md:gap-0 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        {data.hero.techStack.map((tech, index) => (
                            <div key={index} className="flex items-center text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors cursor-default group">
                                <span className="text-gray-500 group-hover:text-primary transition-colors">{getIcon(tech)}</span>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
