
import { Bot, Zap, CircuitBoard, Activity, Brain, Shield } from "lucide-react";

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
        {/* Main gradient background with enhanced depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-xl opacity-95 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/30 rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/10 rounded-xl"></div>
        
        {/* Enhanced circuit pattern overlay with agent handling details */}
        <div className="absolute inset-0 opacity-25">
          <CircuitBoard 
            size={iconSize[size] * 0.9} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/50" 
          />
        </div>
        <div className="absolute inset-0 opacity-15">
          <Activity 
            size={iconSize[size] * 0.7} 
            className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-emerald-200/60 rotate-12" 
          />
        </div>
        <div className="absolute inset-0 opacity-20">
          <Brain 
            size={iconSize[size] * 0.5} 
            className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-cyan-200/50 rotate-45" 
          />
        </div>
        
        {/* Enhanced main bot icon with agent handling glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-full bg-white/20 rounded-xl blur-sm"></div>
          <div className="absolute w-3/4 h-3/4 bg-emerald-300/30 rounded-lg blur-md animate-pulse"></div>
          <Bot 
            size={iconSize[size]} 
            className="relative z-10 text-white drop-shadow-lg filter brightness-110" 
            fill="currentColor"
          />
        </div>
        
        {/* Enhanced lightning accent with agent control indicators */}
        <div className="absolute -top-1 -right-1 transform">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
            <div className="relative w-5 h-5 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
              <Zap size={10} className="text-white drop-shadow-sm" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Agent handling status indicators in contained box */}
        <div className="absolute -bottom-2 -left-2 w-6 h-4 bg-slate-800/90 backdrop-blur-sm rounded border border-slate-600/50 flex items-center justify-center gap-0.5">
          <div className="w-1 h-1 bg-green-400 rounded-full opacity-80 animate-ping"></div>
          <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-1 bg-emerald-300 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Additional agent monitoring indicators */}
        <div className="absolute top-0 left-0 transform -translate-x-1 -translate-y-1">
          <div className="w-3 h-3 bg-slate-800/90 backdrop-blur-sm rounded border border-slate-600/50 flex items-center justify-center">
            <Shield size={8} className="text-emerald-400 opacity-80" />
          </div>
        </div>
        
        {/* Processing activity indicator */}
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-2 translate-y-2">
          <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80 animate-bounce"></div>
        </div>
        
        {/* Neural network connection dots */}
        <div className="absolute top-1/3 left-1/3 transform">
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full opacity-60 animate-ping"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 transform">
          <div className="w-1 h-1 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm ${
            size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
          }`}>
            Agent
          </span>
          <span className={`font-bold bg-gradient-to-r from-teal-700 via-slate-700 to-slate-800 bg-clip-text text-transparent drop-shadow-sm ${
            size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
          }`}>
            Pilot
          </span>
          <span className={`font-light text-slate-500 drop-shadow-sm ${
            size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base'
          }`}>
            Labs
          </span>
        </div>
        <span className="text-xs text-slate-600 font-medium tracking-wide opacity-90">
          Autonomous AI Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
