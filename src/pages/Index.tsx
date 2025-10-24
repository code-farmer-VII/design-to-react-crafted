import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
