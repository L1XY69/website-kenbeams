import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";
import { useLocation } from "wouter";
import { useState } from "react";
import { Star } from "lucide-react";

interface GeneratorOption {
  id: string;
  name: string;
  rating: number;
  features: string[];
  buttonLink?: string;
}

const generators: GeneratorOption[] = [
  {
    id: "main",
    name: "Main Site",
    rating: 5,
    features: ["Auto Disable 2fac", "Auto Change Age", "Auto Add Authenticator"],
    buttonLink: "https://immortal.rs/?code=MjQ2NDEwMjE1MDQ0NDA0NjA5OQ==",
  },
  {
    id: "backup",
    name: "Backup Site",
    rating: 5,
    features: [
      "Auto Set Email",
      "Auto Disable 2Fac",
      "Auto Add Authenticator",
      "Auto Change Age",
    ],
    buttonLink: "/backup",
  },
];

export default function Generator() {
  const [, navigate] = useLocation();
  const [selectedId, setSelectedId] = useState<string>("main");

  const handleButtonClick = (link: string) => {
    if (link.startsWith('/')) {
      navigate(link);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <ParticleBackground />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 flex items-center justify-center gap-4 neon-glow">
            <div className="jump-cloud">
              <img src="/cloud.svg" alt="cloud" className="w-16 h-16 md:w-20 md:h-20" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))'}} />
            </div>
            GENERATORS
            <div className="jump-cloud" style={{animationDelay: '0.3s'}}>
              <img src="/cloud.svg" alt="cloud" className="w-16 h-16 md:w-20 md:h-20" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))'}} />
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Select your preferred generator option
          </p>
        </div>

        {/* Generator Options */}
        <div className="w-full max-w-2xl space-y-6 mb-8 animate-fade-in-up">
          {generators.map((generator) => (
             <div
              key={generator.id}
              className="neon-border rounded-2xl p-8 backdrop-blur-sm bg-card/30 hover:bg-card/50 transition-all cursor-pointer"
              onClick={() => setSelectedId(generator.id)}
            >
              {/* Header with Radio Button and Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedId === generator.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedId === generator.id && (
                      <div className="w-2 h-2 bg-background rounded-full" />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold">{generator.name}</h2>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: generator.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-left">
                {generator.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-primary">●</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Standard Option Button */}
              {generator.buttonLink ? (
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 border-2 border-primary font-bold text-lg py-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick(generator.buttonLink!);
                  }}
                >
                  STANDARD OPTION
                </Button>
              ) : (
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 border-2 border-primary font-bold text-lg py-6"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  STANDARD OPTION
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <a
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            ← Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground z-50">
        Made with Manus
      </div>
    </div>
  );
}
