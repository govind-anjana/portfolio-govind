import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen mesh-bg">
      <BackgroundEffects />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
