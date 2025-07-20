import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Pause, RotateCcw, Volume2, VolumeX, BookOpen, Bot, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentDemo, setCurrentDemo] = useState("student");

  const demoVideos = {
    student: {
      title: "Student Learning Experience",
      description: "See how students interact with personalized CBC content",
      thumbnail: "/placeholder.svg",
      duration: "3:24",
      features: [
        "Personalized learning paths",
        "Interactive CBC lessons", 
        "Progress tracking",
        "AI-powered hints"
      ]
    },
    teacher: {
      title: "Teacher Dashboard",
      description: "Explore classroom management and content creation tools",
      thumbnail: "/placeholder.svg", 
      duration: "2:45",
      features: [
        "Class progress monitoring",
        "Assignment creation",
        "CBC curriculum alignment",
        "Student analytics"
      ]
    },
    ai: {
      title: "AI Assistant Demo",
      description: "Experience our intelligent tutoring system",
      thumbnail: "/placeholder.svg",
      duration: "4:12", 
      features: [
        "Natural language interaction",
        "Subject-specific help",
        "Instant feedback",
        "24/7 availability"
      ]
    }
  };

  const currentVideo = demoVideos[currentDemo as keyof typeof demoVideos];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            See CBC Learning in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how our platform transforms CBC education for students, teachers, and the entire learning community.
          </p>
        </div>

        {/* Demo Selection */}
        <Tabs value={currentDemo} onValueChange={setCurrentDemo} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="student" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Student View
            </TabsTrigger>
            <TabsTrigger value="teacher" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Teacher View
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={currentVideo.thumbnail} 
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-16 w-16 text-white hover:bg-white/20"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? (
                          <Pause className="h-8 w-8" />
                        ) : (
                          <Play className="h-8 w-8" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20"
                            onClick={() => setIsPlaying(!isPlaying)}
                          >
                            {isPlaying ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20"
                          >
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                          <span className="text-white text-sm">{currentVideo.duration}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Demo Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{currentVideo.title}</CardTitle>
                  <CardDescription>
                    {currentVideo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-medium">Key Features:</h4>
                    <ul className="space-y-2">
                      {currentVideo.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Join thousands of students and teachers already using our platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="hero" className="w-full">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Demo Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>

        {/* Demo Stats */}
        <div className="mt-16">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Trusted by Educators Across Kenya</h3>
              <p className="text-muted-foreground">Real results from real classrooms</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Schools Using Platform</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">10K+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">95%</p>
                <p className="text-sm text-muted-foreground">Teacher Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">Improvement in Scores</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;