import { motion } from 'framer-motion';
import data from '../data.json';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

// Helper to resolve icon from string
const getIcon = (iconName) => {
    const Icon = SiIcons[iconName] || FaIcons[iconName];
    // Brand color mapping
    const iconColors = {
        SiC: "#A8B9CC",
        SiCplusplus: "#00599C",
        SiPython: "#3776AB",
        SiJavascript: "#F7DF1E",
        SiHtml5: "#E34F26",
        SiCss3: "#1572B6",
        SiBootstrap: "#7952B3",
        SiGit: "#F05032",
        SiGithub: "#ffffff", // Dark mode default
        SiPostman: "#FF6C37",
        SiNodedotjs: "#339933",
        SiExpress: "#ffffff", // Dark mode default
        FaLink: "#ffffff",
        SiHuggingface: "#FFD21E",
        SiFastapi: "#009688",
        SiMongodb: "#47A248",
        SiMysql: "#4479A1"
    };

    const color = iconColors[iconName] || "#9ca3af"; // Default gray-400

    return Icon ? <Icon size={40} className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{ color: color }} /> : null;
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-dark">
            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">SKILLS</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {data.skills.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-300 mb-8 border-l-4 border-primary pl-4">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {category.items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="bg-secondary p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg group flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="text-gray-400 group-hover:text-primary transition-colors">
                                            {getIcon(skill.icon)}
                                        </div>
                                        <span className="font-semibold text-gray-200 mt-2">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
