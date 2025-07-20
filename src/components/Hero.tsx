import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CBC Learning
                </span>
                <br />
                <span className="text-foreground">Made Simple</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empowering Kenyan students and teachers with personalized, 
                decentralized CBC education powered by AI assistance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-sm">
                <Users className="h-8 w-8 text-secondary" />
                <div>
                  <p className="font-medium">For Students</p>
                  <p className="text-sm text-muted-foreground">Personalized learning</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-sm">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">For Teachers</p>
                  <p className="text-sm text-muted-foreground">Easy management</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-sm">
                <Bot className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-medium">AI Assistant</p>
                  <p className="text-sm text-muted-foreground">24/7 help</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/curriculum">
                <Button variant="hero" size="lg" className="text-lg">
                  Start Learning Today
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="text-lg">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">CBC Topics</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">12</p>
                <p className="text-sm text-muted-foreground">Grade Levels</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">AI Support</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Students learning with CBC platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                <p className="text-sm font-medium">Live AI Assistant</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium">Grade 1-12 CBC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;