import { BookOpen, Users, Award, Globe } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Courses',
    description: 'Access to hundreds of philosophical courses covering ancient wisdom, modern ethics, logic, and critical thinking.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from renowned philosophers, professors, and thought leaders from top universities worldwide.',
  },
  {
    icon: Award,
    title: 'Certificates & Recognition',
    description: 'Earn certificates of completion and showcase your philosophical knowledge to employers and peers.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Join a diverse community of learners from around the world, sharing insights and engaging in discussions.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose PHAGLP?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine ancient wisdom with modern teaching methods to provide 
            an unparalleled philosophical education experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
