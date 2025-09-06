import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { QuickStats } from '@/components/home/QuickStats'

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-3 text-sm text-text-secondary hover:text-accent-blue transition-colors">
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  )
}

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[280px] lg:flex-shrink-0">
      <div className="space-y-6 lg:sticky lg:top-10">
        <div className="p-6 bg-background-secondary rounded-xl border border-border-primary">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 bg-[url('https://i.imgur.com/3Z3XqZc.png')] bg-cover border-4 border-white shadow-md" />
            <h2 className="text-xl font-semibold text-text-primary">Alex Chen</h2>
            <p className="text-sm text-accent-blue mb-3 font-semibold">Full Stack Developer</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Passionate about building scalable web applications and exploring new technologies.
            </p>
          </div>
          <hr className="my-6 border-border-primary" />
          <div className="space-y-3 text-sm text-text-secondary">
             <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">💻</span>
              <span>Coding since 2019</span>
            </div>
          </div>
        </div>
        <div className="p-6 bg-background-secondary rounded-xl border border-border-primary">
          <QuickStats />
        </div>
        <div className="p-6 bg-background-secondary rounded-xl border border-border-primary">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Connect</h3>
          <div className="space-y-4">
            <SocialLink href="https://github.com" icon={Github} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="mailto:contact@githubio.blog" icon={Mail} label="Email" />
          </div>
        </div>
      </div>
    </aside>
  )
}
