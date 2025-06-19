
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-slate-700 hover:text-blue-700">
              Documentation
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Shield size={16} />
                  Trusted AI Deployment
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Safe AI Agent
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Deployment
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Enable autonomous AI agents to pause and escalate to human experts when encountering complex decisions, ensuring safety without sacrificing efficiency.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                  Start Free Trial
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-slate-300 hover:border-blue-300">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-blue-600" />
                  <span className="text-sm text-slate-600">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-purple-600" />
                  <span className="text-sm text-slate-600">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800">AI Agent Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-600">Active</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={16} className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Autonomous Tasks</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-900">1,247</div>
                      <div className="text-xs text-blue-600">Today</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={16} className="text-purple-600" />
                        <span className="text-sm font-medium text-purple-800">Human Reviews</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-900">23</div>
                      <div className="text-xs text-purple-600">Escalated</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Safety Score</span>
                      <span className="font-medium text-slate-800">98.7%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-[98.7%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
