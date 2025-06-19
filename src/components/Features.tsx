
import { Shield, Users, Zap, Monitor, Bell, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Intelligent Safety Gates",
    description: "AI agents automatically pause when encountering high-risk decisions, ensuring human oversight where it matters most.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Expert Escalation",
    description: "Seamlessly route complex decisions to qualified human experts with full context and recommended actions.",
    color: "purple"
  },
  {
    icon: Zap,
    title: "Autonomous Efficiency",
    description: "Maintain high throughput for routine tasks while ensuring critical decisions receive appropriate human attention.",
    color: "green"
  },
  {
    icon: Monitor,
    title: "Real-time Monitoring",
    description: "Comprehensive dashboard to track agent performance, safety metrics, and human intervention patterns.",
    color: "indigo"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Intelligent alerting system that prioritizes urgent escalations without overwhelming human operators.",
    color: "orange"
  },
  {
    icon: Settings,
    title: "Customizable Rules",
    description: "Define your own safety parameters and escalation criteria tailored to your specific use case and risk tolerance.",
    color: "teal"
  }
];

const colorClasses = {
  blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
  purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
  green: "from-green-500 to-green-600 text-green-600 bg-green-50",
  indigo: "from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50",
  orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50",
  teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-50"
};

const Features = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Built for Safety and Efficiency
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform ensures AI agents operate safely while maintaining peak performance through intelligent human-in-the-loop oversight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${colors.split(' ')[2]} flex items-center justify-center mb-6`}>
                    <Icon size={24} className={colors.split(' ')[1]} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
