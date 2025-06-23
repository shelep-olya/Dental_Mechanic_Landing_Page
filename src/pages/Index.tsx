
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-helvetica">
      <Navigation />
      <Hero />
      <Services />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
