import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  Bot, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Award,
  Globe,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Separate dashboards for students, teachers, and admins with appropriate permissions and content.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "CBC Curriculum",
      description: "Complete coverage of Kenya's CBC curriculum from Grade 1-12 with structured learning paths.",
      color: "text-secondary"
    },
    {
      icon: Bot,
      title: "AI Learning Assistant",
      description: "24/7 chatbot support to answer questions, provide guidance, and connect with teachers.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Decentralized & Secure",
      description: "Blockchain-based security ensuring data ownership, transparency, and resilience.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Detailed analytics and progress reports for students, parents, and teachers.",
      color: "text-secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Works perfectly on all devices with offline support for areas with limited connectivity.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Gamified Learning",
      description: "Badges, achievements, and skill mastery systems to keep students motivated and engaged.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Localized Content",
      description: "Content adapted for Kenyan context with support for local languages and cultural relevance.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Real-time Collaboration",
      description: "Live assignments, peer discussions, and instant feedback between students and teachers.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for effective CBC education in Kenya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-muted/50 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;