import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import data from '../data.json';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {data.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                            className="bg-secondary/30 backdrop-blur-md border border-gray-800 rounded-2xl p-6 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Decorative Icon Background */}
                            <div className="absolute -right-10 -bottom-10 text-primary/5">
                                <GraduationCap size={200} />
                            </div>

                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
                                {/* Icon / Logo Placeholder */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center border border-gray-700 shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    <img src="/nitlogo.png" alt="NIT Kurukshetra Logo" className="w-full h-full object-contain p-2" />
                                </div>

                                {/* Content */}
                                <div className="text-left flex-grow w-full">
                                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2 leading-tight">{edu.institution}</h3>
                                    <p className="text-lg md:text-xl text-primary font-medium mb-4 flex flex-wrap items-center gap-2">
                                        <BookOpen size={18} className="flex-shrink-0" />
                                        {edu.degree}
                                    </p>

                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-dark/50 rounded-full border border-gray-700 text-gray-300 text-xs md:text-sm mb-6">
                                        <Calendar size={12} className="text-primary" />
                                        {edu.period}
                                    </div>

                                    {edu.description && (
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-2xl">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
