export function QuickStats() {
  const stats = [
    { label: 'Posts', value: 24 },
    { label: 'Projects', value: 12 },
    { label: 'Years Coding', value: '5+' },
  ]

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-accent-blue">{stat.value}</div>
            <div className="text-sm text-text-tertiary">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4 mt-8">
        <h4 className="font-semibold text-text-secondary">Recent Activity</h4>
        
        <div className="space-y-3">
          <ActivityItem title="Published new post" time="2 days ago" />
          <ActivityItem title="Updated trading bot" time="1 week ago" />
          <ActivityItem title="Started new project" time="2 weeks ago" />
        </div>
      </div>
    </section>
  )
}

function ActivityItem({ title, time }: { title: string; time: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-text-primary">{title}</span>
      <span className="text-xs text-text-tertiary">{time}</span>
    </div>
  )
}
