import { BookOpen, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">CBC Learn</span>
            </div>
            <p className="text-muted-foreground">
              Empowering Kenyan education through personalized, decentralized CBC learning with AI assistance.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Student Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Teacher Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CBC Curriculum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Progress Tracking</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">CBC Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Learning Materials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Developer API</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@cbclearn.ke</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Nairobi, Kenya<br />Education Technology Hub</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 CBC Learn. All rights reserved. Building the future of Kenyan education.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;