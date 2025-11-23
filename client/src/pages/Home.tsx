import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { toast } from "sonner";
import { useLocation } from "wouter";

const CloudEmoji = () => <img src="/cloud.svg" alt="cloud" className="w-16 h-16 md:w-20 md:h-20" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))'}} />;

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [, setLocation] = useLocation();

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    toast.success(soundEnabled ? "Sound disabled" : "Sound enabled");
  };

  const handleTutorialClick = () => {
    setLocation("/tutorial");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <ParticleBackground />

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="fixed top-4 left-4 z-50 text-2xl hover:scale-110 transition-transform"
        aria-label="Toggle sound"
      >
        {soundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="jump-cloud">
              <CloudEmoji />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider neon-glow">
              KENBEAMS
            </h1>
            <div className="jump-cloud" style={{animationDelay: '0.3s'}}>
              <CloudEmoji />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Advanced Generator & Bypasser Tools
          </p>
          
          <a
            href="https://discord.gg/8akbSjZetA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="mt-6 border-2 hover:bg-primary/10"
            >
              💬 Join Discord
            </Button>
          </a>
        </div>

        {/* Main Generator Section */}
        <div className="w-full max-w-4xl mb-12 animate-fade-in-up">
          <div className="neon-border rounded-2xl p-8 backdrop-blur-sm bg-card/30 border-glow">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div>
                <img src="/cloud.svg" alt="cloud" className="w-10 h-10" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))'}} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                MAIN GENERATOR
              </h2>
              <div>
                <img src="/cloud.svg" alt="cloud" className="w-10 h-10" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))'}} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Generator Card */}
              <a
                href="/generator"
                className="neon-border rounded-xl p-8 hover:bg-primary/5 transition-all cursor-pointer group block"
              >
                <div className="flex items-center justify-center gap-2 text-xl font-semibold">
                  <img src="/zap.svg" alt="zap" className="w-6 h-6" style={{filter: 'drop-shadow(0 0 4px rgba(255,193,7,0.6))'}} />
                  <span className="group-hover:scale-105 transition-transform inline-block">
                    Generator
                  </span>
                </div>
              </a>

              {/* Bypasser Card */}
              <a
                href="/bypasser"
                className="neon-border rounded-xl p-8 hover:bg-primary/5 transition-all cursor-pointer group block"
              >
                <div className="flex items-center justify-center gap-2 text-xl font-semibold">
                  <img src="/zap.svg" alt="zap" className="w-6 h-6" style={{filter: 'drop-shadow(0 0 4px rgba(255,193,7,0.6))'}} />
                  <span className="group-hover:scale-105 transition-transform inline-block">
                    Bypasser
                  </span>
                </div>
              </a>
            </div>

            <p className="text-center text-sm text-muted-foreground italic">
              If the Sites are down or Flagged be Patient as we are aware of this and working on fixing it asap
            </p>
          </div>
        </div>

        {/* Tutorial Section */}
        <div className="w-full max-w-4xl animate-fade-in-up animation-delay-200">
          <div className="neon-border rounded-2xl p-8 backdrop-blur-sm bg-card/30 border-glow">
            <div className="flex items-center justify-center gap-3 mb-6 glow-fade">
              <span className="text-3xl">▶️</span>
              <h2 className="text-2xl md:text-3xl font-bold">Tutorial</h2>
              <span className="text-3xl">▶️</span>
            </div>

            <div className="neon-border-dashed rounded-xl p-6 hover:bg-primary/5 transition-all cursor-pointer group">
              <button
                onClick={handleTutorialClick}
                className="flex items-center justify-center gap-2 text-xl font-semibold w-full"
              >
                <span className="text-2xl">▶️</span>
                <span className="group-hover:scale-105 transition-transform inline-block">
                  Watch Tutorial
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-4 right-4 text-xs text-muted-foreground z-50">
          Made with Manus
        </div>
      </main>
    </div>
  );
}
