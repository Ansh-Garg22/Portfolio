import React from 'react';
import { motion, animate, useInView } from 'framer-motion';
import data from '../data.json';
import { Monitor, Smartphone, Server, Lightbulb } from 'lucide-react';

const iconMap = {
    Monitor: Monitor,
    Smartphone: Smartphone,
    Bulb: Lightbulb,
    Server: Server
};

// Helper component for counting animation
const CountUp = ({ from, to, duration = 2 }) => {
    const nodeRef = React.useRef();
    const isInView = useInView(nodeRef); // Use hook to detect if element is in view

    React.useEffect(() => {
        const node = nodeRef.current;
        if (isInView) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate(value) {
                    node.textContent = value.toFixed(0);
                }
            });
            return () => controls.stop();
        } else {
            // Optional: Reset to 'from' when out of view, so it counts up again
            node.textContent = from.toFixed(0);
        }
    }, [from, to, duration, isInView]);

    return <span ref={nodeRef} />;
};
// Add animate to imports first, or just import it directly here for the specific use case if not at top level.
// Wait, I need to check imports. `animate` comes from `framer-motion`.

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark">
            <div className="container mx-auto px-8 md:px-12">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Left: Services List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3 space-y-8 relative"
                    >
                        {/* Vertical line decoration */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800 h-full">
                            {/* Active dots */}
                            <div className="absolute top-[15%] left-[-4px] w-2.5 h-2.5 bg-primary rounded-full"></div>
                            <div className="absolute top-[41%] left-[-4px] w-2.5 h-2.5 bg-primary rounded-full"></div>
                            <div className="absolute top-[65%] left-[-4px] w-2.5 h-2.5 bg-primary rounded-full"></div>
                            <div className="absolute top-[89%] left-[-4px] w-2.5 h-2.5 bg-primary rounded-full"></div>
                        </div>

                        {data.about.services.map((service, index) => {
                            const Icon = iconMap[service.icon] || Monitor;
                            return (
                                <div key={index} className="flex items-center gap-6 pl-8 group cursor-pointer">
                                    <Icon size={32} className="text-gray-500 group-hover:text-primary transition-colors" />
                                    <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Right: Bio & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-2/3"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About me</h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
                            {data.about.bio}
                        </p>

                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2 flex">
                                    <CountUp from={0} to={parseInt(data.about.stats.projects)} />+
                                </h4>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Completed Projects</span>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2 flex">
                                    <CountUp from={0} to={parseInt(data.about.stats.satisfaction)} />+
                                </h4>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Problems Solved</span>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2 flex">
                                    <CountUp from={0} to={parseInt(data.about.stats.experience)} />+
                                </h4>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Years of Experience</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
