import { motion } from 'framer-motion';
import data from '../data.json';
import * as SiIcons from 'react-icons/si';

// Helper to resolve icon from string
const getIcon = (iconName) => {
    const Icon = SiIcons[iconName];
    return Icon ? <Icon size={48} className="mb-4" /> : null;
};

const CodingProfiles = () => {
    return (
        <section id="coding-profiles" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Coding Profiles</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My competitive programming journey and problem-solving statistics.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {data.codingProfiles.map((profile, index) => (
                        <motion.a
                            key={index}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                            className="relative group bg-secondary/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-200 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm"
                        >
                            {/* Hover Gradient Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                                style={{ background: `radial-gradient(circle at center, ${profile.color}, transparent 70%)` }}
                            ></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon with dynamic color */}
                                <div
                                    className="p-4 rounded-full bg-dark/50 mb-6 transition-transform duration-200"
                                    style={{ color: profile.color, boxShadow: `0 0 20px ${profile.color}20` }}
                                >
                                    {getIcon(profile.icon)}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-200">
                                    {profile.platform}
                                </h3>

                                <div className="w-full h-[1px] bg-gray-800 my-4"></div>

                                <div className="w-full flex justify-between items-center px-2">
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Rating</p>
                                        <p className="text-lg font-bold text-white">{profile.rating}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Solved</p>
                                        <p className="text-lg font-bold text-primary">{profile.solved}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
