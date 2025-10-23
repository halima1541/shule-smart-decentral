import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User, BookOpen, HelpCircle, Lightbulb, Loader2 } from "lucide-react";
import { useAIChat } from "@/hooks/useAIChat";

const ChatbotDemo = () => {
  const { messages, sendMessage, isLoading } = useAIChat();
  const [inputValue, setInputValue] = useState("");

  const suggestedQuestions = [
    "What is CBC Grade 5 Mathematics about?",
    "How do I submit my science project?",
    "I need help with Kiswahili grammar",
    "Connect me with my teacher"
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const message = inputValue;
    setInputValue("");
    await sendMessage(message);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Learning Assistant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant help with your CBC studies, 24/7 support for students and teachers
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Chatbot Demo */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  CBC Learning Assistant
                  <div className="ml-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">Online</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : ''}`}>
                        <div
                          className={`p-3 rounded-lg ${
                            message.type === 'user'
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 px-3">
                          {message.timestamp}
                        </p>
                      </div>

                      {message.type === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-secondary" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything about CBC..."
                      onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      variant="hero"
                      disabled={isLoading || !inputValue.trim()}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Suggested Questions & Features */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-accent" />
                  Try Asking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left h-auto p-3 justify-start"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  AI Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-sm">CBC Expert</p>
                    <p className="text-xs text-muted-foreground">Knows all CBC curriculum details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bot className="h-4 w-4 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-sm">Assignment Help</p>
                    <p className="text-xs text-muted-foreground">Guides through homework and projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="h-4 w-4 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-sm">Teacher Connect</p>
                    <p className="text-xs text-muted-foreground">Links you with human teachers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDemo;