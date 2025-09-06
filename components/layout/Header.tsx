'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/archive', label: 'Archive' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="border-b border-border-primary">
      <div className="flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold text-text-primary">
          githubio.blog
        </Link>
        <nav className="flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base transition-colors ${
                pathname === item.href
                  ? 'text-accent-blue font-semibold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
