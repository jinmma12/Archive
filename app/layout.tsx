import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import localFont from 'next/font/local'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Archive - Modern Developer Blog',
  description: 'A modern blog about development, trading insights, and technology',
}
const geistSans = localFont({
  src: '../public/fonts/GeistMono-Regular.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: '../public/fonts/GeistMono-Regular.woff',
  variable: '--font-geist-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Add Header component back in after fixing the layout issues
  // <Header />
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}