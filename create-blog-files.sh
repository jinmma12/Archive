#!/bin/bash

# create-blog-files.sh
echo "📝 블로그 파일들을 생성합니다..."

# 1. tailwind.config.js
cat > tailwind.config.js << 'EOL'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0B0D',
        'background-secondary': '#18191B',
        'background-tertiary': '#252629',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A1A7',
        'text-tertiary': '#6B6C73',
        'accent-blue': '#0052FF',
        'accent-blue-hover': '#0040CC',
        'border-primary': '#2A2B2F',
        'border-secondary': '#3A3B40',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
EOL

# 2. app/globals.css
cat > app/globals.css << 'EOL'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #0A0B0D;
    --background-secondary: #18191B;
    --background-tertiary: #252629;
    --text-primary: #FFFFFF;
    --text-secondary: #A0A1A7;
    --text-tertiary: #6B6C73;
    --accent-blue: #0052FF;
    --border-primary: #2A2B2F;
  }

  * {
    @apply border-border-primary;
  }

  body {
    @apply bg-background text-text-primary;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-background-secondary;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-background-tertiary rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-text-tertiary;
  }
}

@layer utilities {
  .animate-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .glass-effect {
    @apply bg-background-secondary/80 backdrop-blur-md;
  }

  .glow {
    box-shadow: 0 0 20px rgba(0, 82, 255, 0.3);
  }

  .text-gradient {
    @apply bg-gradient-to-r from-accent-blue to-blue-400 bg-clip-text text-transparent;
  }
}
EOL

# 3. app/layout.tsx
cat > app/layout.tsx << 'EOL'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Archive - Modern Developer Blog',
  description: 'A modern blog about development, trading insights, and technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4 py-8 max-w-7xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
EOL

# 4. app/page.tsx
cat > app/page.tsx << 'EOL'
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
EOL

# 5. lib/types.ts
cat > lib/types.ts << 'EOL'
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  coverImage?: string;
  tags: string[];
  readingTime: string;
  status: 'public' | 'private';
  password?: string;
  views: number;
  likes: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
  featured: boolean;
}
EOL

# 6. lib/utils.ts
cat > lib/utils.ts << 'EOL'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOL

# 7. components/layout/Header.tsx
cat > components/layout/Header.tsx << 'EOL'
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Archive, Info, Mail, Edit3 } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/archive', label: 'Archive', icon: Archive },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gradient">
            Archive
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-accent-blue'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <Link href="/write" className="bg-accent-blue hover:bg-accent-blue-hover text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Edit3 className="w-4 h-4" />
            <span>Write</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
EOL

# 8. components/home/Hero.tsx
cat > components/home/Hero.tsx << 'EOL'
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
EOL

# 9. components/home/RecentPosts.tsx
cat > components/home/RecentPosts.tsx << 'EOL'
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
EOL

# 10. components/home/QuickStats.tsx
cat > components/home/QuickStats.tsx << 'EOL'
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
EOL

# 11. components/blog/PostCard.tsx
cat > components/blog/PostCard.tsx << 'EOL'
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
EOL

# 12. components/ui/Button.tsx
cat > components/ui/Button.tsx << 'EOL'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent-blue text-white hover:bg-accent-blue-hover',
      secondary: 'bg-background-secondary text-text-primary hover:bg-background-tertiary',
      outline: 'border border-border-primary hover:border-accent-blue',
      ghost: 'hover:bg-background-secondary',
    }

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-11 px-6',
    }

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
EOL

echo "✅ 모든 파일이 생성되었습니다!"
echo ""
echo "📁 생성된 파일:"
echo "  - tailwind.config.js"
echo "  - app/globals.css"
echo "  - app/layout.tsx"
echo "  - app/page.tsx"
echo "  - lib/types.ts"
echo "  - lib/utils.ts"
echo "  - components/layout/Header.tsx"
echo "  - components/home/Hero.tsx"
echo "  - components/home/RecentPosts.tsx"
echo "  - components/home/QuickStats.tsx"
echo "  - components/blog/PostCard.tsx"
echo "  - components/ui/Button.tsx"
echo ""
echo "🚀 서버를 재시작하세요: npm run dev"
