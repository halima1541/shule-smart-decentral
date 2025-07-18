import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const CBCLevels = () => {
  const levels = [
    {
      name: "Early Years Education",
      grades: "PP1 - PP2",
      description: "Play-based learning foundation",
      subjects: ["Literacy", "Numeracy", "Creativity", "Movement"],
      duration: "2 Years",
      students: "Ages 4-5",
      color: "from-accent/20 to-accent/10",
      slug: "early-years"
    },
    {
      name: "Lower Primary",
      grades: "Grade 1 - 3",
      description: "Building fundamental skills",
      subjects: ["English", "Kiswahili", "Mathematics", "Environmental Activities"],
      duration: "3 Years", 
      students: "Ages 6-8",
      color: "from-primary/20 to-primary/10",
      slug: "lower-primary"
    },
    {
      name: "Upper Primary",
      grades: "Grade 4 - 6",
      description: "Expanding knowledge base",
      subjects: ["Languages", "Mathematics", "Science", "Social Studies", "Creative Arts"],
      duration: "3 Years",
      students: "Ages 9-11", 
      color: "from-secondary/20 to-secondary/10",
      slug: "upper-primary"
    },
    {
      name: "Junior Secondary",
      grades: "Grade 7 - 9",
      description: "Pre-career exploration",
      subjects: ["Core Subjects", "Pre-Technical Studies", "Sports & Arts"],
      duration: "3 Years",
      students: "Ages 12-14",
      color: "from-accent/20 to-accent/10",
      slug: "junior-secondary"
    },
    {
      name: "Senior Secondary",
      grades: "Grade 10 - 12",
      description: "Career pathway focus",
      subjects: ["Core Subjects", "Specialized Tracks", "Career Preparation"],
      duration: "3 Years",
      students: "Ages 15-17",
      color: "from-primary/20 to-primary/10",
      slug: "senior-secondary"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CBC Learning Pathway
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete coverage of Kenya's Competency-Based Curriculum from early years to senior secondary
          </p>
        </div>

        <div className="space-y-8">
          {levels.map((level, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${level.color}`} />
              
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{level.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {level.grades}
                    </CardDescription>
                    <p className="text-muted-foreground mt-1">{level.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {level.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {level.students}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      Learning Outcomes
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive competency development aligned with CBC standards
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link to={`/curriculum?level=${level.slug}`}>
                      <Button variant="learning" className="w-full">
                        View Curriculum
                      </Button>
                    </Link>
                    <Link to={`/sample-content?level=${level.slug}`}>
                      <Button variant="outline" className="w-full">
                        Sample Content
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CBCLevels;