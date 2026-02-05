import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your
            <br />
            <span className="text-yellow-300">Understanding of Life?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join over 10,000 learners who have already started their philosophical 
            journey. Begin your transformation today with our comprehensive courses 
            and expert guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center text-white">
              <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
              <span className="text-lg">Free 7-day trial</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
              <span className="text-lg">Cancel anytime</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
              <span className="text-lg">Access on all devices</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              View All Courses
            </Button>
          </div>

          <p className="text-blue-200 text-sm">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
