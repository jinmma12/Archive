import Link from 'next/link'
import { Calendar, Clock, Eye, MessageSquare } from 'lucide-react'
import { Post } from '@/lib/types'

interface PostCardProps {
  post: Partial<Post>
}

export function PostCard({ post }: PostCardProps) {
  const isFeatured = post.tags?.includes('Development');

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-background-secondary rounded-xl border border-border-primary 
                        hover:border-accent-blue transition-all duration-300 p-6 relative">
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-accent-blue text-xs font-semibold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {isFeatured && (
              <span className="px-3 py-1 bg-accent-blue text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
            {post.title}
          </h3>
          
          <p className="text-text-secondary line-clamp-2 mb-4">{post.excerpt}</p>
          
          <div className="flex items-center justify-between text-sm text-text-secondary">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date!).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MessageSquare className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
               <span className="text-accent-blue font-semibold hover:underline">Read More</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
