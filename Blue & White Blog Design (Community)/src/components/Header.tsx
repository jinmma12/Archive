import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const archiveCategories = [
    { name: 'Development', slug: 'dev' },
    { name: 'Trading', slug: 'trading' },
    { name: 'Daily Life', slug: 'daily-life' },
    { name: 'Tech Reviews', slug: 'tech-reviews' },
    { name: 'Learning Notes', slug: 'learning' },
  ];

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-blue-600 text-xl font-semibold">
              githubio.blog
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600 p-0">
                  Archive
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {archiveCategories.map((category) => (
                  <DropdownMenuItem key={category.slug} asChild>
                    <a href={`/archive/${category.slug}`} className="cursor-pointer">
                      {category.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              
              <div className="pl-4">
                <p className="text-gray-500 text-sm mb-2">Archive</p>
                {archiveCategories.map((category) => (
                  <a
                    key={category.slug}
                    href={`/archive/${category.slug}`}
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {category.name}
                  </a>
                ))}
              </div>

              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}