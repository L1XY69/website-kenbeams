import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Tutorial() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <ParticleBackground />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Back Button */}
        <button
          onClick={handleGoHome}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:scale-110 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Tutorial Content */}
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-6 flex items-center justify-center gap-4">
              <span className="text-6xl md:text-8xl">▶️</span>
              Tutorial
              <span className="text-6xl md:text-8xl">▶️</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Learn how to use Kenbeams tools
            </p>
          </div>

          {/* Tutorial Sections */}
          <div className="space-y-8">
            {/* Placeholder for future tutorial content */}
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleGoHome}
              className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg transition-all duration-200 glow-white text-lg"
            >
              Back to Home
            </Button>
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
