import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { toast } from 'react-hot-toast'; // Import toast
import data from '../data.json';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const loadingToast = toast.loading('Sending message...'); // Start loading toast

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            toast.dismiss(loadingToast); // Dismiss loading

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                toast.success("Message sent successfully!"); // Success toast
            } else {
                setStatus('error');
                toast.error("Failed to send message: " + result.message); // Error toast
            }
        } catch (error) {
            console.error(error);
            toast.dismiss(loadingToast);
            setStatus('error');
            toast.error("An error occurred. Please try again later."); // Error toast
        }
    };

    return (
        <section id="contact" className="py-24 bg-dark relative">
            <div className="container mx-auto px-4 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-secondary p-6 md:p-12 rounded-2xl border border-gray-800 shadow-2xl">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Info</h3>
                        <p className="text-gray-400 mb-8">
                            Feel free to reach out through any of these platforms.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${data.contact.email}`} className="flex items-center space-x-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center border border-gray-700">
                                    <Mail size={20} />
                                </div>
                                <span className="text-lg">{data.contact.email}</span>
                            </a>

                            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center border border-gray-700">
                                    <Github size={20} />
                                </div>
                                <span className="text-lg">GitHub</span>
                            </a>

                            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center border border-gray-700">
                                    <Linkedin size={20} />
                                </div>
                                <span className="text-lg">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all resize-none"
                                placeholder="Project details..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
