import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import Team from "@/components/Team";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="py-24 px-6 flex justify-center">
        <Terminal />
      </div>
      <Features />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
