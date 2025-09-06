import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'githubio.blog - Modern Developer Blog',
  description: 'A modern blog about development, trading insights, and technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="py-10">
            <div className="flex flex-col lg:flex-row gap-12">
              <Sidebar />
              <div className="flex-1 min-w-0">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
