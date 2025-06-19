
import { Shield, User, Zap } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-xl"></div>
        <Shield 
          size={iconSize[size]} 
          className="relative z-10 text-white drop-shadow-sm" 
          fill="currentColor"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <User size={iconSize[size] * 0.4} className="text-white" />
        </div>
        <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
          <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent ${
          size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
        }`}>
          SafeGuard AI
        </span>
        <span className="text-xs text-slate-600 font-medium tracking-wide">
          Human-in-the-Loop Oversight
        </span>
      </div>
    </div>
  );
};

export default Logo;
