
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/5 bg-grid-pattern"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
              <Shield size={16} />
              Ready to Deploy Safely?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Start Your Safe AI Journey Today
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Join leading organizations using SafeGuard AI to deploy autonomous agents with confidence and human oversight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8">
                Start Free Trial
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/30 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-blue-200 mt-6">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
