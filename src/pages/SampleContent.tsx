import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Play, Download, Eye, Clock, Users } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SampleContent = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') || 'lower-primary';
  const subjectIndex = parseInt(searchParams.get('subject') || '0');

  const sampleContent = {
    'early-years': {
      name: 'Early Years Education',
      subjects: [
        {
          name: 'Literacy Activities',
          samples: [
            {
              title: 'Letter A Adventure',
              type: 'Interactive Game',
              duration: '15 minutes',
              description: 'Fun interactive game teaching letter A recognition through animals and objects',
              preview: 'Students identify animals starting with A: Apple, Ant, Airplane...',
              difficulty: 'Beginner'
            },
            {
              title: 'Story Time: The Ant and the Grasshopper',
              type: 'Audio Story',
              duration: '10 minutes', 
              description: 'Interactive audio story with simple vocabulary and moral lesson',
              preview: 'Once upon a time, there was a busy ant who worked all summer...',
              difficulty: 'Beginner'
            }
          ]
        },
        {
          name: 'Numeracy Activities',
          samples: [
            {
              title: 'Counting with Animals',
              type: 'Interactive Exercise',
              duration: '20 minutes',
              description: 'Learn numbers 1-5 by counting different farm animals',
              preview: 'Count the cows: 1 cow, 2 cows, 3 cows...',
              difficulty: 'Beginner'
            }
          ]
        }
      ]
    },
    'lower-primary': {
      name: 'Lower Primary',
      subjects: [
        {
          name: 'English',
          samples: [
            {
              title: 'Phonics: Short Vowel Sounds',
              type: 'Video Lesson',
              duration: '25 minutes',
              description: 'Learn short vowel sounds a, e, i, o, u with examples and practice',
              preview: 'The cat sat on the mat. Can you hear the short "a" sound?',
              difficulty: 'Grade 1'
            },
            {
              title: 'Reading Comprehension: My Family',
              type: 'Interactive Reading',
              duration: '30 minutes',
              description: 'Read a short story about family and answer questions',
              preview: 'My name is Jane. I live with my mother, father and brother...',
              difficulty: 'Grade 2'
            }
          ]
        },
        {
          name: 'Kiswahili',
          samples: [
            {
              title: 'Mazungumzo: Salamu',
              type: 'Audio Practice',
              duration: '20 minutes',
              description: 'Learn common greetings in Kiswahili with pronunciation guide',
              preview: 'Hujambo - Hello, Habari - How are you, Asante - Thank you',
              difficulty: 'Grade 1'
            }
          ]
        },
        {
          name: 'Mathematics',
          samples: [
            {
              title: 'Addition Within 10',
              type: 'Interactive Exercise',
              duration: '25 minutes',
              description: 'Practice adding numbers using visual aids and manipulatives',
              preview: '3 + 2 = ? Use the counting blocks to find the answer',
              difficulty: 'Grade 1'
            },
            {
              title: 'Shape Recognition',
              type: 'Interactive Game',
              duration: '20 minutes',
              description: 'Identify and sort basic shapes: circle, square, triangle, rectangle',
              preview: 'Find all the circles in this picture...',
              difficulty: 'Grade 1'
            }
          ]
        },
        {
          name: 'Environmental Activities',
          samples: [
            {
              title: 'Weather and Seasons',
              type: 'Video + Activity',
              duration: '30 minutes',
              description: 'Learn about different weather patterns and seasons in Kenya',
              preview: 'In Kenya, we have two main seasons: wet season and dry season...',
              difficulty: 'Grade 2'
            }
          ]
        }
      ]
    },
    'upper-primary': {
      name: 'Upper Primary',
      subjects: [
        {
          name: 'English',
          samples: [
            {
              title: 'Creative Writing: Descriptive Essays',
              type: 'Writing Workshop',
              duration: '45 minutes',
              description: 'Learn to write descriptive paragraphs using sensory details',
              preview: 'Describe your favorite place using words that help readers see, hear, smell...',
              difficulty: 'Grade 5'
            }
          ]
        },
        {
          name: 'Mathematics',
          samples: [
            {
              title: 'Introduction to Fractions',
              type: 'Interactive Lesson',
              duration: '40 minutes',
              description: 'Understanding fractions using visual models and real-life examples',
              preview: 'If you eat 2 slices of a pizza cut into 8 pieces, you ate 2/8 of the pizza',
              difficulty: 'Grade 4'
            }
          ]
        },
        {
          name: 'Science',
          samples: [
            {
              title: 'Plant Life Cycle',
              type: 'Virtual Lab',
              duration: '35 minutes',
              description: 'Observe and document the stages of plant growth from seed to flower',
              preview: 'Follow the journey: Seed → Germination → Seedling → Adult Plant → Flower',
              difficulty: 'Grade 5'
            }
          ]
        }
      ]
    }
  };

  const currentLevel = sampleContent[level as keyof typeof sampleContent];
  const currentSubject = currentLevel?.subjects[subjectIndex];

  if (!currentLevel || !currentSubject) {
    return <div>Content not found</div>;
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Lesson':
      case 'Audio Story':
      case 'Audio Practice':
        return <Play className="h-4 w-4" />;
      case 'Interactive Game':
      case 'Interactive Exercise':
      case 'Interactive Reading':
      case 'Interactive Lesson':
        return <Eye className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to={`/curriculum?level=${level}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to {currentLevel.name}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Sample Content</h1>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-xl">{currentLevel.name}</span>
            <span>•</span>
            <span className="text-xl text-primary">{currentSubject.name}</span>
          </div>
        </div>

        {/* Content Samples */}
        <div className="grid gap-6">
          {currentSubject.samples.map((sample, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{sample.title}</CardTitle>
                    <CardDescription className="text-base">
                      {sample.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getTypeIcon(sample.type)}
                    {sample.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Metadata */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {sample.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {sample.difficulty}
                  </div>
                </div>

                {/* Preview */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Content Preview:</h4>
                  <p className="text-muted-foreground italic">"{sample.preview}"</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="hero" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Start Learning
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Content CTA */}
        <div className="mt-12 text-center">
          <Card className="p-8">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">Want to see more content?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sign up for free to access our complete library of {currentLevel.name} content, 
                including interactive lessons, assessments, and teacher resources.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Sign Up Free
                </Button>
                <Button variant="outline" size="lg">
                  Browse All Levels
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SampleContent;