import { Footer } from '@/components/Footer'
import NavBar from '@/components/Navbar'
import Providers from '@/components/Providers/Providers'
import { Toaster } from '@/components/ui/toaster'
import { constructMetadata } from '@/lib/utils'
import { Recursive } from 'next/font/google'
import './globals.css'

const recursive = Recursive({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <NavBar />
        <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex h-full flex-1 flex-col">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}
