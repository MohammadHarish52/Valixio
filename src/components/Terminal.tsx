import { useState, useEffect } from "react";

const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  const lines = [
    "> Validating lead quality...",
    "> Analyzing intent signals...",
    "> Scoring lead value: 87/100",
    "> Qualification status: APPROVED",
    "> Personalizing outreach sequence...",
    "> Ready to engage_"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < lines.length) {
          return prev + 1;
        }
        // Reset animation after completion
        setTimeout(() => setVisibleLines(0), 2000);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card rounded-lg p-6 bg-slate-900/90 border border-slate-700/50 font-mono text-sm w-full max-w-4xl h-64 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className={`text-green-400 transition-opacity duration-300 ${
              index === visibleLines - 1 ? 'animate-pulse' : ''
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;