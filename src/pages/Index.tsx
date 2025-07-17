import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CBCLevels from "@/components/CBCLevels";
import ChatbotDemo from "@/components/ChatbotDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CBCLevels />
      <ChatbotDemo />
      <Footer />
    </div>
  );
};

export default Index;
