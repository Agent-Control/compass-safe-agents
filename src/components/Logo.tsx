
import { Bot, Zap, CircuitBoard } from "lucide-react";

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-xl opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/25 rounded-xl"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <CircuitBoard 
            size={iconSize[size] * 0.8} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/40" 
          />
        </div>
        
        {/* Main bot icon */}
        <Bot 
          size={iconSize[size]} 
          className="relative z-10 text-white drop-shadow-sm" 
          fill="currentColor"
        />
        
        {/* Lightning accent - representing automation/speed */}
        <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
          <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-2 border-white">
            <Zap size={8} className="text-white" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent ${
            size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
          }`}>
            Agent
          </span>
          <span className={`font-bold bg-gradient-to-r from-teal-700 to-slate-700 bg-clip-text text-transparent ${
            size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
          }`}>
            Pilot
          </span>
          <span className={`font-light text-slate-500 ${
            size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base'
          }`}>
            Labs
          </span>
        </div>
        <span className="text-xs text-slate-600 font-medium tracking-wide">
          Autonomous AI Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
