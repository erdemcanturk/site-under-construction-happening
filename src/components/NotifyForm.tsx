import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const NotifyForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when we launch. Thanks for your interest!",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="text-center space-y-2">
        <Mail className="w-8 h-8 text-construction-primary mx-auto animate-pulse-glow" />
        <h3 className="text-lg font-semibold text-foreground">Get Notified</h3>
        <p className="text-sm text-muted-foreground">
          Be the first to know when we launch
        </p>
      </div>
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-card border-border focus:border-construction-primary"
          required
        />
        <Button 
          type="submit" 
          variant="notify" 
          disabled={isLoading}
          className="px-6"
        >
          {isLoading ? "..." : "Notify Me"}
        </Button>
      </div>
    </form>
  );
};

export default NotifyForm;