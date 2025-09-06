import { Hero } from '@/components/home/Hero'
import { RecentPosts } from '@/components/home/RecentPosts'
import { QuickStats } from '@/components/home/QuickStats'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentPosts />
        </div>
        <div className="space-y-8">
          <QuickStats />
        </div>
      </div>
    </div>
  )
}
