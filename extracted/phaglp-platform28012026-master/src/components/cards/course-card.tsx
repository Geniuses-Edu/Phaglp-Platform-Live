import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, Star, Tag } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Course } from '@/types'

interface CourseCardProps {
  course: Course
  featured?: boolean
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <div className="relative">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={featured ? 600 : 400}
          height={featured ? 300 : 225}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            featured ? 'h-64' : 'h-48'
          }`}
          unoptimized
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
            {course.category}
          </span>
        </div>
      </div>

      <CardContent className={`p-6 ${featured ? 'pb-4' : ''}`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {course.level}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
              {course.rating}
            </div>
          </div>

          <h3 className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {course.title}
          </h3>
          
          <p className={`text-gray-600 line-clamp-2 ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {course.shortDescription}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {course.studentsCount.toLocaleString()} students
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                ${course.price}
              </span>
              {course.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${course.originalPrice}
                </span>
              )}
            </div>
          </div>

          {course.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {course.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
              {course.tags.length > 3 && (
                <span className="text-gray-500 text-xs">
                  +{course.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>
            Enroll Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
