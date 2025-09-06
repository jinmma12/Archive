import Link from 'next/link'
import { Calendar, Clock, Eye, Lock } from 'lucide-react'
import { Post } from '@/lib/types'

interface PostCardProps {
  post: Partial<Post>
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-background-secondary rounded-xl border border-border-primary 
                        hover:border-accent-blue/50 transition-all duration-300 overflow-hidden
                        hover:shadow-lg hover:shadow-accent-blue/10 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags?.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-background-tertiary text-text-secondary text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-blue transition-colors">
            {post.title}
          </h3>
          
          <p className="text-text-secondary line-clamp-2 mb-4">{post.excerpt}</p>
          
          <div className="flex items-center justify-between text-sm text-text-tertiary">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date!).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
