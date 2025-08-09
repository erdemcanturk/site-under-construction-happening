import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConstructionProgress from "@/components/ConstructionProgress";
import AnimatedGear from "@/components/AnimatedGear";
import NotifyForm from "@/components/NotifyForm";
import { HardHat, Construction, Clock, Rocket } from "lucide-react";
import constructionHero from "@/assets/construction-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10">
          <AnimatedGear size={60} delay="0s" />
        </div>
        <div className="absolute top-32 right-20">
          <AnimatedGear size={40} delay="1s" />
        </div>
        <div className="absolute bottom-20 left-32">
          <AnimatedGear size={50} delay="2s" />
        </div>
        <div className="absolute bottom-40 right-10">
          <AnimatedGear size={35} delay="0.5s" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardHat className="w-8 h-8 text-construction-primary" />
              <span className="text-xl font-bold text-foreground">BuildSite</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Est. Launch: Q2 2024
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Hero Section */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-construction-primary/20 to-construction-secondary/20 blur-3xl rounded-full"></div>
                <img 
                  src={constructionHero} 
                  alt="Under Construction" 
                  className="relative w-full max-w-2xl mx-auto rounded-2xl shadow-2xl animate-bounce-gentle"
                />
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-construction-primary/10 rounded-full border border-construction-primary/20">
                  <Construction className="w-5 h-5 text-construction-primary" />
                  <span className="text-construction-primary font-medium">Under Construction</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-construction-primary via-construction-secondary to-construction-accent bg-clip-text text-transparent leading-tight">
                  Something Amazing
                  <br />
                  is Coming Soon
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We're working hard to bring you an incredible experience. 
                  Our team is crafting something special just for you.
                </p>
              </div>
            </div>

            {/* Progress Section */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <ConstructionProgress />
            </Card>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30">
                <Rocket className="w-10 h-10 text-construction-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Optimized for speed and performance</p>
              </Card>
              
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30">
                <Construction className="w-10 h-10 text-construction-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
                <p className="text-sm text-muted-foreground">Beautiful, responsive, and intuitive</p>
              </Card>
              
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30">
                <Clock className="w-10 h-10 text-construction-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Always Available</h3>
                <p className="text-sm text-muted-foreground">24/7 reliability you can count on</p>
              </Card>
            </div>

            {/* Notification Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <NotifyForm />
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-construction-primary">
                About
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-construction-primary">
                Contact
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-construction-primary">
                Privacy
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 BuildSite. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
