import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const ConstructionProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(73), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Development Progress</span>
        <span className="text-construction-primary font-semibold">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-3 bg-secondary"
      />
      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-construction-primary animate-pulse"></div>
          <span>Design</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-construction-secondary animate-pulse"></div>
          <span>Development</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-border"></div>
          <span>Testing</span>
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;