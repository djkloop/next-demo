import type { Metadata } from 'next'
import './globals.css'

import { cn } from '@/lib/utils'

import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'Game Box',
  description: 'A demo of the Game Box',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen overflow-hidden')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
