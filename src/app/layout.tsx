import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import Links from '@/components/links'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhamad Aldio Yaspindo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={`${montserrat.className} bg-grid-pattern min-h-screen`}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto max-w-[1200px] px-5 pt-28 pb-10">
              {children}
            </div>
            <Links />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
