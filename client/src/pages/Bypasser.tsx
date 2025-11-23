import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";


interface BypassTool {
  id: string;
  title: string;
  description: string;
  buttonLink?: string;
}

const handleBypassToolClick = (link?: string) => {
  if (link) {
    window.open(link, "_blank");
  }
};

const bypassTools: BypassTool[] = [
  {
    id: "age-bypass",
    title: "13+ To <13",
    description: "Bypass age restrictions",
    buttonLink: "https://rbx-tool.com/BypassAge/Kenbeams",
  },
  {
    id: "dual-hook",
    title: "Dual Hook",
    description: "Advanced bypass creation",
  },
];

export default function Bypasser() {

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <ParticleBackground />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8 flex items-center justify-center gap-4">
            <div className="jump-cloud">
              <img src="/cloud.svg" alt="cloud" className="w-16 h-16 md:w-20 md:h-20" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))'}} />
            </div>
            BYPASSER
            <div className="jump-cloud" style={{animationDelay: '0.3s'}}>
              <img src="/cloud.svg" alt="cloud" className="w-16 h-16 md:w-20 md:h-20" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))'}} />
            </div>
          </h1>

          {/* Main Container */}
          <div className="border-2 border-border rounded-2xl p-8 backdrop-blur-sm bg-card/30 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-3">
              <div>
                <img src="/cloud.svg" alt="cloud" className="w-10 h-10" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))'}} />
              </div>
              BYPASS TOOLS
              <div>
                <img src="/cloud.svg" alt="cloud" className="w-10 h-10" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))'}} />
              </div>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">Coming soon</p>

            {/* Bypass Tool Options */}
            <div className="space-y-6">
              {bypassTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => handleBypassToolClick(tool.buttonLink)}
                  disabled={true}
                  className="w-full border-2 border-primary rounded-xl p-6 backdrop-blur-sm bg-transparent hover:bg-primary/5 transition-all text-center cursor-not-allowed opacity-50 glow-white disabled:opacity-50"
                >
                  {/* Tool Title */}
                  <h3 className="text-2xl font-bold mb-2">
                    ☁️ {tool.title} ☁️
                  </h3>

                  {/* Tool Description */}
                  <p className="text-muted-foreground text-lg">
                    {tool.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold px-6 py-3 border-2 border-primary rounded-lg glow-white"
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
