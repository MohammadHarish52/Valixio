import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flowing-gradient dark:flowing-gradient-dark opacity-30"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-2xl p-12 md:p-16 min-h-[500px] flex flex-col justify-between hover:border-border/60 transition-all duration-300">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              Let's qualify smarter.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Start filtering out the noise and focus on leads that actually
              convert. Your AI sales assistant is ready to deploy.
            </p>
            <Button
              size="lg"
              className="px-10 py-8 text-xl font-medium bg-foreground text-background hover:bg-foreground/90 border-0 rounded-full mb-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Launch My AI Agent →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-border/20 pt-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3 tracking-tight">
                7-day
              </h3>
              <p className="text-muted-foreground text-base">Free trial</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3 tracking-tight">
                No credit card
              </h3>
              <p className="text-muted-foreground text-base">
                Required to start
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3 tracking-tight">
                Cancel anytime
              </h3>
              <p className="text-muted-foreground text-base">No commitments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
