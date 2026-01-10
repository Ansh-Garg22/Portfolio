import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import data from '../data.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark">
            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gray-800"></div>

                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                } items-center w-full`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform -translate-x-[2px] md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 box-content border-4 border-dark"></div>

                            {/* Content Side */}
                            <div className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                                } text-left`}>
                                <div className="bg-secondary p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Briefcase size={18} className="text-primary" />
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg text-primary mb-2 font-medium">{exp.company}</h4>

                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.date}
                                    </div>

                                    <ul className="list-disc list-outside ml-4 text-gray-400 text-sm leading-relaxed space-y-2">
                                        {Array.isArray(exp.description) ? exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        )) : <li>{exp.description}</li>}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty Side for layout balance */}
                            <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
