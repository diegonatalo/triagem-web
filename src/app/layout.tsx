import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Triagem Web',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto flex min-h-full w-full max-w-[600px] flex-col gap-4 px-4 py-8">
          {children}

          <Toaster position="bottom-center" />
        </main>
      </body>
    </html>
  )
}
