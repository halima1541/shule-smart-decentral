import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Users, Target, CheckCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Curriculum = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') || 'lower-primary';

  const curriculumData = {
    'early-years': {
      name: 'Early Years Education',
      grades: 'PP1 - PP2',
      description: 'Play-based learning foundation for ages 4-5',
      duration: '2 Years',
      subjects: [
        {
          name: 'Literacy Activities',
          description: 'Building pre-reading and pre-writing skills through play',
          topics: ['Letter recognition', 'Sound patterns', 'Simple words', 'Story telling'],
          skills: ['Communication', 'Language development', 'Creativity']
        },
        {
          name: 'Numeracy Activities', 
          description: 'Mathematical concepts through hands-on activities',
          topics: ['Number recognition 1-10', 'Counting', 'Shapes', 'Patterns'],
          skills: ['Problem solving', 'Logical thinking', 'Pattern recognition']
        },
        {
          name: 'Creative Activities',
          description: 'Developing creativity and fine motor skills',
          topics: ['Art and craft', 'Music and movement', 'Drama and role play'],
          skills: ['Creativity', 'Self-expression', 'Motor skills']
        },
        {
          name: 'Environmental Activities',
          description: 'Understanding the world around them',
          topics: ['My family', 'My school', 'Animals', 'Plants', 'Weather'],
          skills: ['Observation', 'Environmental awareness', 'Social skills']
        }
      ]
    },
    'lower-primary': {
      name: 'Lower Primary',
      grades: 'Grade 1 - 3',
      description: 'Building fundamental skills for ages 6-8',
      duration: '3 Years',
      subjects: [
        {
          name: 'English',
          description: 'Language and communication skills development',
          topics: ['Phonics', 'Reading comprehension', 'Writing skills', 'Oral communication'],
          skills: ['Communication', 'Critical thinking', 'Creativity']
        },
        {
          name: 'Kiswahili',
          description: 'Kenyan national language proficiency',
          topics: ['Mazungumzo', 'Kusoma', 'Kuandika', 'Lugha'],
          skills: ['Cultural awareness', 'Communication', 'National identity']
        },
        {
          name: 'Mathematics',
          description: 'Number operations and problem solving',
          topics: ['Number work', 'Measurement', 'Geometry', 'Data handling'],
          skills: ['Problem solving', 'Logical thinking', 'Analytical skills']
        },
        {
          name: 'Environmental Activities',
          description: 'Understanding the immediate environment',
          topics: ['My community', 'Weather and climate', 'Plants and animals', 'Health and safety'],
          skills: ['Observation', 'Environmental stewardship', 'Health consciousness']
        }
      ]
    },
    'upper-primary': {
      name: 'Upper Primary',
      grades: 'Grade 4 - 6', 
      description: 'Expanding knowledge base for ages 9-11',
      duration: '3 Years',
      subjects: [
        {
          name: 'English',
          description: 'Advanced language skills and literature',
          topics: ['Literature', 'Grammar', 'Composition', 'Listening and speaking'],
          skills: ['Critical thinking', 'Communication', 'Literary appreciation']
        },
        {
          name: 'Kiswahili',
          description: 'Advanced Kiswahili proficiency',
          topics: ['Fasihi', 'Sarufi', 'Insha', 'Mazungumzo'],
          skills: ['Cultural identity', 'Advanced communication', 'Literary skills']
        },
        {
          name: 'Mathematics',
          description: 'Advanced mathematical concepts',
          topics: ['Fractions and decimals', 'Algebra basics', 'Geometry', 'Statistics'],
          skills: ['Abstract thinking', 'Problem solving', 'Mathematical reasoning']
        },
        {
          name: 'Science',
          description: 'Introduction to scientific concepts',
          topics: ['Living things', 'Matter and materials', 'Energy', 'Earth and space'],
          skills: ['Scientific inquiry', 'Experimentation', 'Observation']
        },
        {
          name: 'Social Studies',
          description: 'Understanding society and culture',
          topics: ['History of Kenya', 'Geography', 'Civics', 'Cultural diversity'],
          skills: ['Civic responsibility', 'Cultural awareness', 'Historical thinking']
        }
      ]
    },
    'junior-secondary': {
      name: 'Junior Secondary',
      grades: 'Grade 7 - 9',
      description: 'Pre-career exploration for ages 12-14', 
      duration: '3 Years',
      subjects: [
        {
          name: 'English',
          description: 'Literature and advanced communication',
          topics: ['Poetry analysis', 'Novel study', 'Essay writing', 'Public speaking'],
          skills: ['Literary analysis', 'Advanced communication', 'Critical thinking']
        },
        {
          name: 'Kiswahili',
          description: 'Advanced Kiswahili studies',
          topics: ['Fasihi ya Kiswahili', 'Lugha na Mawasiliano', 'Utamaduni'],
          skills: ['Cultural preservation', 'Advanced literacy', 'Research skills']
        },
        {
          name: 'Mathematics',
          description: 'Pre-calculus and advanced algebra',
          topics: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics and probability'],
          skills: ['Mathematical modeling', 'Logical reasoning', 'Problem solving']
        },
        {
          name: 'Integrated Science',
          description: 'Physics, Chemistry, and Biology foundations',
          topics: ['Scientific method', 'Classification', 'Forces and motion', 'Chemical reactions'],
          skills: ['Scientific thinking', 'Experimentation', 'Data analysis']
        },
        {
          name: 'Pre-Technical Studies',
          description: 'Introduction to technical skills',
          topics: ['Design and technology', 'Agriculture', 'Business studies', 'Computer studies'],
          skills: ['Innovation', 'Entrepreneurship', 'Digital literacy']
        }
      ]
    },
    'senior-secondary': {
      name: 'Senior Secondary',
      grades: 'Grade 10 - 12',
      description: 'Career pathway focus for ages 15-17',
      duration: '3 Years', 
      subjects: [
        {
          name: 'Core Subjects',
          description: 'Essential skills for all students',
          topics: ['Advanced English', 'Kiswahili', 'Mathematics', 'Life skills'],
          skills: ['Academic excellence', 'Life preparation', 'University readiness']
        },
        {
          name: 'STEM Track',
          description: 'Science, Technology, Engineering, Mathematics',
          topics: ['Physics', 'Chemistry', 'Biology', 'Computer Science', 'Engineering'],
          skills: ['Scientific research', 'Innovation', 'Technical problem solving']
        },
        {
          name: 'Arts Track',
          description: 'Creative and performing arts pathway',
          topics: ['Literature', 'Music', 'Art and design', 'Drama', 'Media studies'],
          skills: ['Creativity', 'Cultural expression', 'Artistic techniques']
        },
        {
          name: 'Social Sciences Track',
          description: 'Humanities and social studies focus',
          topics: ['History', 'Geography', 'Government', 'Economics', 'Philosophy'],
          skills: ['Critical analysis', 'Research methods', 'Social awareness']
        }
      ]
    }
  };

  const currentLevel = curriculumData[level as keyof typeof curriculumData];

  if (!currentLevel) {
    return <div>Level not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/#curriculum">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Curriculum Overview
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">{currentLevel.name}</h1>
          </div>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              {currentLevel.grades}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {currentLevel.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {currentLevel.description}
            </div>
          </div>
        </div>

        {/* Subjects */}
        <Tabs defaultValue="0" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {currentLevel.subjects.map((subject, index) => (
              <TabsTrigger key={index} value={index.toString()} className="text-sm">
                {subject.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {currentLevel.subjects.map((subject, index) => (
            <TabsContent key={index} value={index.toString()}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{subject.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Topics */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Key Topics
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {subject.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-accent" />
                      Key Skills Developed
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {subject.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex gap-4">
                      <Link to={`/sample-content?level=${level}&subject=${index}`}>
                        <Button variant="hero">
                          View Sample Content
                        </Button>
                      </Link>
                      <Button variant="outline">
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Curriculum;