import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Interests from './components/Interests';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <CodingProfiles />
      <Skills />
      <Interests />
      <Contact />
    </Layout>
  );
}

export default App;
