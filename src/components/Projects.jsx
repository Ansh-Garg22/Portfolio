import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import data from '../data.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('bg-gray-800');
                                    }}
                                />
                                <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark/80 rounded-full text-white hover:bg-primary transition-colors" title="View Code">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark/80 rounded-full text-white hover:bg-primary transition-colors" title="Live Demo">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-gray-300 border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
