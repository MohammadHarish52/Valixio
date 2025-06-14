import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/particle-ai-brain.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Gradient overlay above video */}
      <div className="absolute inset-0 flowing-gradient dark:flowing-gradient-dark opacity-60"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-8">
          Valixio
        </h1>
        <p className="text-xl md:text-2xl text-foreground font-light mb-4 max-w-3xl mx-auto leading-relaxed">
          Filters your inbound and automates your cold outreach.
        </p>
        <p className="text-lg md:text-xl text-foreground font-light mb-12 max-w-2xl mx-auto">
          No fluff. No fake leads. Just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 border-0"
          >
            Try Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-6 text-lg font-medium border-border hover:bg-accent"
          >
            <a
              href="https://calendly.com/vaishchhu24/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
