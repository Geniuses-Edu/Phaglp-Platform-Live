import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDate, formatReadTime } from '@/lib/utils'
import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <div className="relative">
        <Image
          src={article.thumbnail}
          alt={article.title}
          width={featured ? 600 : 400}
          height={featured ? 300 : 225}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            featured ? 'h-64' : 'h-48'
          }`}
          unoptimized
        />
        {article.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>

      <CardContent className={`p-6 ${featured ? 'pb-4' : ''}`}>
        <div className="space-y-3">
          <h3 className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {article.title}
          </h3>
          
          <p className={`text-gray-600 line-clamp-3 ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatReadTime(article.readTime)}
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(article.publishedAt)}
          </div>

          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-gray-500 text-xs">
                  +{article.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/articles/${article.slug}`}>
            Read Article
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
