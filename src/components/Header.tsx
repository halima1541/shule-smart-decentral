import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, X, BookOpen, Users, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LoginDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to CBC Learn</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button variant="hero" className="w-full">Login</Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const SignupDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join CBC Learn</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="signup-name">Full Name</Label>
            <Input id="signup-name" type="text" placeholder="Enter your full name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input id="signup-password" type="password" placeholder="Create a password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="user-type">I am a</Label>
            <select id="user-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <Button variant="hero" className="w-full">Create Account</Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const GetStartedDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to CBC Learn</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-muted-foreground">Choose how you'd like to get started:</p>
          <div className="grid gap-3">
            <SignupDialog />
            <LoginDialog />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">CBC Learn</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#curriculum" className="text-foreground hover:text-primary transition-colors">
              Curriculum
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LoginDialog />
            <SignupDialog />
            <GetStartedDialog />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 mt-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#curriculum" className="text-foreground hover:text-primary transition-colors">
                Curriculum
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <LoginDialog />
                <SignupDialog />
                <GetStartedDialog />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;