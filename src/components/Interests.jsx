import { motion } from 'framer-motion';
import { Camera, Mountain, Music, Book, Coffee, Gamepad2, BotIcon, TrophyIcon, Film, Plane, Trophy } from 'lucide-react'; // Import potential icons
import data from '../data.json';

const iconMap = {
    Camera: Camera,
    Mountain: Mountain,
    Music: Music,
    Book: Book,
    Coffee: Coffee,
    Gamepad: Gamepad2,
    Plane: Plane,
    Film: Film,
    Trophy: Trophy,
    Bot: BotIcon
};

const Interests = () => {
    return (
        <section id="interests" className="py-20 bg-secondary/30 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Interests & Hobbies</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        When I'm not coding, I enjoy exploring new things and staying creative.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {data.interests.map((interest, index) => {
                        // Dynamic icon selection with fallback
                        const IconComponent = iconMap[interest.icon] || Coffee;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: index * 0.03 }}
                                whileHover={{ y: -5, backgroundColor: 'rgba(255, 107, 107, 0.1)', borderColor: '#ff6b6b', transition: { duration: 0.2 } }}
                                className="flex flex-col items-center justify-center p-6 bg-dark border border-gray-800 rounded-xl w-40 h-40 transition-all duration-200 cursor-default"
                            >
                                <IconComponent className="text-primary mb-3" size={32} />
                                <span className="text-gray-300 font-medium">{interest.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Interests;
