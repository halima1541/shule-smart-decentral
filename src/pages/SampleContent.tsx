import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Play, Download, Eye, Clock, Users } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const SampleContent = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') || 'lower-primary';
  const subjectIndex = parseInt(searchParams.get('subject') || '0');
  const { toast } = useToast();

  const handleStartLearning = (title: string) => {
    toast({
      title: "Starting Lesson!",
      description: `Opening "${title}" - enjoy your learning journey!`,
    });
  };

  const handleDownload = (title: string) => {
    toast({
      title: "Download Started",
      description: `Downloading "${title}" for offline access.`,
    });
  };

  const handlePreview = (title: string) => {
    toast({
      title: "Preview Available",
      description: `Opening preview for "${title}".`,
    });
  };

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
        },
        {
          name: 'Creative Activities',
          samples: [
            {
              title: 'Art and Craft: Paper Flowers',
              type: 'Creative Workshop',
              duration: '30 minutes',
              description: 'Create beautiful paper flowers while learning colors and shapes',
              preview: 'Let\'s make red roses, yellow sunflowers, and blue forget-me-nots...',
              difficulty: 'Beginner'
            }
          ]
        },
        {
          name: 'Environmental Activities',
          samples: [
            {
              title: 'My Family Tree',
              type: 'Interactive Activity',
              duration: '25 minutes',
              description: 'Learn about family relationships and create a family tree',
              preview: 'This is my mother, this is my father, these are my grandparents...',
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
            },
            {
              title: 'Kusoma: Hadithi Fupi',
              type: 'Reading Exercise',
              duration: '25 minutes',
              description: 'Read simple Kiswahili stories and practice comprehension',
              preview: 'Paka alipenda mchezo. Alikimbia hapa na pale...',
              difficulty: 'Grade 2'
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
            },
            {
              title: 'Poetry Analysis: African Folk Tales',
              type: 'Literature Study',
              duration: '40 minutes',
              description: 'Analyze themes and literary devices in traditional African poetry',
              preview: 'The spider and the tortoise teach us about wisdom...',
              difficulty: 'Grade 6'
            }
          ]
        },
        {
          name: 'Kiswahili',
          samples: [
            {
              title: 'Fasihi: Methali na Nahau',
              type: 'Cultural Study',
              duration: '35 minutes',
              description: 'Explore Kiswahili proverbs and idioms with cultural context',
              preview: 'Haba na ukunga halipatani - A proverb about patience and timing...',
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
            },
            {
              title: 'Decimal Numbers',
              type: 'Problem Solving',
              duration: '35 minutes',
              description: 'Work with decimal numbers in money and measurement contexts',
              preview: 'If 1 meter = 1.0m, then 50 centimeters = 0.5m...',
              difficulty: 'Grade 5'
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
        },
        {
          name: 'Social Studies',
          samples: [
            {
              title: 'Kenya\'s Independence Heroes',
              type: 'Historical Study',
              duration: '40 minutes',
              description: 'Learn about key figures in Kenya\'s struggle for independence',
              preview: 'Jomo Kenyatta, Dedan Kimathi, and others who fought for our freedom...',
              difficulty: 'Grade 6'
            }
          ]
        }
      ]
    },
    'junior-secondary': {
      name: 'Junior Secondary',
      subjects: [
        {
          name: 'English',
          samples: [
            {
              title: 'Poetry Analysis: Discovering Metaphors',
              type: 'Literature Workshop',
              duration: '50 minutes',
              description: 'Analyze metaphors and symbolism in contemporary African poetry',
              preview: 'The baobab tree stands as a metaphor for African resilience...',
              difficulty: 'Grade 7'
            },
            {
              title: 'Debate Skills: Persuasive Arguments',
              type: 'Communication Skills',
              duration: '45 minutes',
              description: 'Learn to construct and present persuasive arguments effectively',
              preview: 'Should uniforms be mandatory in schools? Let\'s examine both sides...',
              difficulty: 'Grade 8'
            }
          ]
        },
        {
          name: 'Kiswahili',
          samples: [
            {
              title: 'Fasihi ya Kiswahili: Mashairi',
              type: 'Literary Analysis',
              duration: '45 minutes',
              description: 'Study classical Kiswahili poetry and its cultural significance',
              preview: 'Shaaban Robert na mashairi yake ya kijamii...',
              difficulty: 'Grade 8'
            }
          ]
        },
        {
          name: 'Mathematics',
          samples: [
            {
              title: 'Introduction to Algebra',
              type: 'Problem Solving',
              duration: '50 minutes',
              description: 'Solve algebraic equations using substitution and elimination methods',
              preview: 'If x + 3 = 7, then x = 4. Let\'s try more complex examples...',
              difficulty: 'Grade 7'
            },
            {
              title: 'Geometry: Area and Perimeter',
              type: 'Mathematical Modeling',
              duration: '45 minutes',
              description: 'Calculate areas and perimeters of complex shapes and real-world objects',
              preview: 'A football field measures 100m × 60m. What is its area and perimeter?',
              difficulty: 'Grade 8'
            }
          ]
        },
        {
          name: 'Integrated Science',
          samples: [
            {
              title: 'Chemical Reactions in Daily Life',
              type: 'Lab Experiment',
              duration: '60 minutes',
              description: 'Explore chemical reactions through safe, hands-on experiments',
              preview: 'When baking soda meets vinegar, a chemical reaction produces gas...',
              difficulty: 'Grade 8'
            }
          ]
        },
        {
          name: 'Pre-Technical Studies',
          samples: [
            {
              title: 'Introduction to Programming',
              type: 'Coding Workshop',
              duration: '55 minutes',
              description: 'Learn basic programming concepts using visual programming tools',
              preview: 'Let\'s create a simple calculator using block-based coding...',
              difficulty: 'Grade 9'
            }
          ]
        }
      ]
    },
    'senior-secondary': {
      name: 'Senior Secondary',
      subjects: [
        {
          name: 'Core Subjects',
          samples: [
            {
              title: 'Advanced Essay Writing',
              type: 'Writing Masterclass',
              duration: '60 minutes',
              description: 'Master argumentative and expository essay writing for university preparation',
              preview: 'Structure your argument: Introduction, body paragraphs with evidence, conclusion...',
              difficulty: 'Grade 11'
            },
            {
              title: 'Mathematical Problem Solving',
              type: 'Advanced Mathematics',
              duration: '55 minutes',
              description: 'Tackle complex mathematical problems using multiple approaches',
              preview: 'Optimization problems: Find the maximum area of a rectangle...',
              difficulty: 'Grade 12'
            }
          ]
        },
        {
          name: 'STEM Track',
          samples: [
            {
              title: 'Physics: Electromagnetic Induction',
              type: 'Laboratory Investigation',
              duration: '70 minutes',
              description: 'Investigate Faraday\'s law through hands-on experiments',
              preview: 'Moving a magnet through a coil generates electric current...',
              difficulty: 'Grade 11'
            },
            {
              title: 'Computer Science: Data Structures',
              type: 'Programming Project',
              duration: '65 minutes',
              description: 'Implement and analyze arrays, lists, and trees in Python',
              preview: 'Arrays store multiple values: [1, 2, 3, 4, 5]...',
              difficulty: 'Grade 12'
            }
          ]
        },
        {
          name: 'Arts Track',
          samples: [
            {
              title: 'African Literature: Post-Colonial Themes',
              type: 'Literary Criticism',
              duration: '60 minutes',
              description: 'Analyze themes of identity and culture in African literature',
              preview: 'Ngugi wa Thiong\'o\'s works explore language and cultural identity...',
              difficulty: 'Grade 11'
            }
          ]
        },
        {
          name: 'Social Sciences Track',
          samples: [
            {
              title: 'Economic Development in Kenya',
              type: 'Research Project',
              duration: '75 minutes',
              description: 'Analyze Kenya\'s economic growth and development challenges',
              preview: 'Vision 2030 aims to transform Kenya into a middle-income country...',
              difficulty: 'Grade 12'
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
                  <Button 
                    variant="hero" 
                    className="flex items-center gap-2"
                    onClick={() => handleStartLearning(sample.title)}
                  >
                    <Play className="h-4 w-4" />
                    Start Learning
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleDownload(sample.title)}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2"
                    onClick={() => handlePreview(sample.title)}
                  >
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
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => toast({
                    title: "Welcome to CBC Learning!",
                    description: "Your free account has been created. Check your email for login details.",
                  })}
                >
                  Sign Up Free
                </Button>
                <Link to="/curriculum">
                  <Button variant="outline" size="lg">
                    Browse All Levels
                  </Button>
                </Link>
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