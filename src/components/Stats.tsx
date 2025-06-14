const Stats = () => {
  const stats = [
    { number: "95%", label: "Lead Quality Improvement" },
    { number: "3x", label: "Faster Response Times" },
    { number: "60%", label: "Higher Conversion Rates" }
  ];

  return (
    <section id="stats" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-light text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;