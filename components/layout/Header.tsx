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
