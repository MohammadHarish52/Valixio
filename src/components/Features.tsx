import { Filter, Zap, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Intelligent Filtering",
      description: "Advanced AI algorithms filter out noise and identify high-quality leads automatically."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Outreach",
      description: "Set up personalized cold outreach sequences that run on autopilot."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Targeting",
      description: "Reach the right prospects at the right time with data-driven insights."
    }
  ];

  return (
    <section id="features" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Ready to filter noise out
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            How it works
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-10 text-center hover:scale-105 transition-all duration-300 min-h-[280px] flex flex-col justify-center">
              <div className="text-primary mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;