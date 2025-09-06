import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Full-Stack Developer & <span className="text-gradient">Trading Enthusiast</span>
          </h1>
          <p className="text-xl text-text-secondary">
            Passionate about building web applications and exploring new technologies. 
            Currently focused on React, TypeScript, and trading algorithms.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-text-tertiary">
              <span className="text-2xl">📍</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2 text-text-tertiary">
              <span className="text-2xl">💻</span>
              <span>Coding since 2019</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={Github} />
            <SocialLink href="https://twitter.com" icon={Twitter} />
            <SocialLink href="https://linkedin.com" icon={Linkedin} />
            <SocialLink href="mailto:contact@archive.blog" icon={Mail} />
          </div>
        </div>

        <div className="relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent-blue to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-accent-blue/20 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-lg bg-background-secondary border border-border-primary 
                 flex items-center justify-center hover:border-accent-blue transition-all
                 hover:shadow-lg hover:shadow-accent-blue/20"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 text-text-secondary" />
    </Link>
  )
}
