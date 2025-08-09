import { Settings } from "lucide-react";

interface AnimatedGearProps {
  size?: number;
  delay?: string;
}

const AnimatedGear = ({ size = 40, delay = "0s" }: AnimatedGearProps) => {
  return (
    <div 
      className="inline-block animate-spin-slow text-construction-primary opacity-20"
      style={{ animationDelay: delay }}
    >
      <Settings size={size} />
    </div>
  );
};

export default AnimatedGear;