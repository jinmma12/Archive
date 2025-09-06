import { RecentPosts } from '@/components/home/RecentPosts'
import { Subscribe } from '@/components/home/Subscribe'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-3">Welcome to my digital space</h1>
        <p className="text-text-secondary">
          I share my journey in software development, building interesting projects, and exploring new technologies. This is where I document my coding adventures and technical insights.
        </p>
      </section>
      <Subscribe />
      <RecentPosts />
    </div>
  )
}
