import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, BookOpen, MessageCircle } from "lucide-react";

const sampleProfiles = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    role: "Philosophy Professor",
    institution: "Harvard University",
    avatar: "/images/profiles/sarah.jpg",
    specialties: ["Ancient Philosophy", "Ethics", "Socratic Method"],
    courses: 12,
    students: 2500,
    rating: 4.9,
    bio: "Expert in ancient Greek philosophy with over 15 years of teaching experience. Specializes in Socratic method and Platonic dialogues.",
  },
  {
    id: "2",
    name: "Prof. Michael Chen",
    role: "Ethics Researcher",
    institution: "MIT",
    avatar: "/images/profiles/michael.jpg",
    specialties: ["Modern Ethics", "Business Ethics", "Applied Philosophy"],
    courses: 8,
    students: 1800,
    rating: 4.8,
    bio: "Leading researcher in modern ethical theory and its applications in business and technology. Author of 'Ethics in the Digital Age'.",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    role: "Logic Specialist",
    institution: "Stanford University",
    avatar: "/images/profiles/emily.jpg",
    specialties: ["Logic", "Critical Thinking", "Argumentation"],
    courses: 15,
    students: 3200,
    rating: 4.9,
    bio: "Dedicated to teaching logical reasoning and critical thinking skills. Helps students develop analytical minds through practical exercises.",
  },
  {
    id: "4",
    name: "Prof. David Kim",
    role: "Philosophy of Mind",
    institution: "Oxford University",
    avatar: "/images/profiles/david.jpg",
    specialties: ["Philosophy of Mind", "Consciousness", "Cognitive Science"],
    courses: 10,
    students: 2100,
    rating: 4.7,
    bio: "Explores the intersection of philosophy and cognitive science, focusing on consciousness and the nature of mind.",
  },
  {
    id: "5",
    name: "Dr. Maria Garcia",
    role: "Feminist Philosophy",
    institution: "UC Berkeley",
    avatar: "/images/profiles/maria.jpg",
    specialties: ["Feminist Philosophy", "Social Justice", "Political Philosophy"],
    courses: 9,
    students: 1900,
    rating: 4.8,
    bio: "Leading voice in feminist philosophy and social justice. Works on contemporary issues through philosophical frameworks.",
  },
  {
    id: "6",
    name: "Prof. James Wilson",
    role: "Applied Philosophy",
    institution: "Yale University",
    avatar: "/images/profiles/james.jpg",
    specialties: ["Applied Philosophy", "Life Coaching", "Practical Wisdom"],
    courses: 11,
    students: 2800,
    rating: 4.9,
    bio: "Bridges the gap between academic philosophy and practical life wisdom. Helps students apply philosophical insights to real-world challenges.",
  },
];

export default function ProfilesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Expert Instructors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from world-renowned philosophers, professors, and thought leaders 
              from top universities around the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search instructors..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProfiles.map((profile) => (
            <Card key={profile.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <CardTitle className="text-xl">{profile.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {profile.role}
                </CardDescription>
                <CardDescription className="text-sm text-gray-600">
                  {profile.institution}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {profile.bio}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{profile.courses}</div>
                    <div className="text-xs text-gray-600">Courses</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {profile.students.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{profile.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-6 pt-0">
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Courses
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Instructors
          </Button>
        </div>
      </div>
    </div>
  );
}
