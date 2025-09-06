import { PostCard } from '@/components/blog/PostCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function RecentPosts() {
  // 임시 데이터
  const posts = [
    {
      slug: 'building-trading-dashboard',
      title: 'Building a Real-Time Trading Dashboard with React and WebSockets',
      excerpt: 'Learn how to create a responsive trading dashboard that displays real-time market data using React, TypeScript, and WebSocket connections.',
      date: '2024-12-15',
      author: { name: 'Admin', image: '' },
      tags: ['Development'],
      readingTime: '8 min read',
      status: 'public' as const,
      views: 1024,
      likes: 42,
    },
    {
      slug: 'algorithmic-trading-journey',
      title: 'My Journey into Algorithmic Trading',
      excerpt: 'From manual trading to building automated systems - here\'s what I learned about developing trading algorithms.',
      date: '2024-12-12',
      author: { name: 'Admin', image: '' },
      tags: ['Trading'],
      readingTime: '6 min read',
      status: 'public' as const,
      views: 856,
      likes: 31,
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Recent Posts</h2>
        <Link 
          href="/archive" 
          className="text-accent-blue hover:text-accent-blue-hover flex items-center space-x-1"
        >
          <span>View all posts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
