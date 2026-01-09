import { Github, Linkedin, Mail } from 'lucide-react';
import data from '../data.json';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8 mt-20">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex space-x-6 mb-4">
                    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${data.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} {data.hero.title.split("I'm ")[1] || "Portfolio"}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
