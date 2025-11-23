import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";
import { useLocation } from "wouter";
import { Star } from "lucide-react";

interface BackupOption {
  id: string;
  name: string;
  rating: number;
  features: string[];
  buttonText: string;
  link: string;
}

const backupOptions: BackupOption[] = [
  {
    id: "shockify",
    name: "Shockify",
    rating: 5,
    features: [
      "High Performance",
      "Fast Processing",
      "Secure Connection",
      "24/7 Uptime",
    ],
    buttonText: "BACKUP OPTION 1",
    link: "https://shockify.st/?code=MjQ2NDEwMjE1MDQ0NDA0NjA5OQ==",
  },
  {
    id: "injury",
    name: "Injury",
    rating: 5,
    features: [
      "Ultimate Reliability",
      "Lightning Fast",
      "Advanced Security",
      "Never Down",
    ],
    buttonText: "BACKUP OPTION 2",
    link: "https://www.logged.tg/auth/kenbeam",
  },
];

export default function Backup() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <ParticleBackground />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Back to Generators Link */}
        <div className="w-full max-w-2xl mb-8">
          <button
            onClick={() => navigate("/generator")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            ← Back to Generators
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 flex items-center justify-center gap-4 neon-glow">
            <span className="text-6xl md:text-8xl">🛡️</span>
            BACKUP
            <span className="text-6xl md:text-8xl">🛡️</span>
          </h1>
        </div>

        {/* Backup Options */}
        <div className="w-full max-w-2xl space-y-6 mb-8 animate-fade-in-up">
          {backupOptions.map((option) => (
            <div
              key={option.id}
              className="neon-border rounded-2xl p-6 backdrop-blur-sm bg-card/30 hover:bg-card/50 transition-all"
            >
              {/* Header with Title and Rating */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{option.name}</h2>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: option.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-left">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-primary">●</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Backup Option Button */}
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 border-2 border-primary font-bold text-lg py-6"
                >
                  {option.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground z-50">
        Made with Manus
      </div>
    </div>
  );
}
