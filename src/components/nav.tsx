'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Menu, X } from 'lucide-react'
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"

export default function Nav() {
  const path = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/projects', text: 'Projects' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-5 px-3 sm:px-5">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between border-2 border-border bg-background p-2 sm:p-2.5 px-3 sm:px-5 shadow-shadow rounded-full text-foreground font-base">

        {/* KIRI: Logo/Nama */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-heading tracking-tight">
            <Image
              src={'/Logo-WD.png'}
              alt={'Logo'}
              width={105}
              height={105}
              className="dark:invert w-16 sm:w-[105px]"
            />
          </Link>
        </div>

        {/* TENGAH: Navigasi Links (Desktop) */}
        <div className="hidden md:flex text-foreground items-center gap-2 bg-main/10 border-2 rounded-full p-1 px-2">
          {links.map((link) => (
            <Link
              key={link.path}
              className={clsx(
                'rounded-full px-4 py-1.5 transition-all hover:bg-secondary-background hover:text-foreground',
                path === link.path ? 'bg-main text-main-foreground' : 'text-foreground/60',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* KANAN: Button / ThemeSwitcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />
          <Avatar className='w-8 h-8 sm:w-12 sm:h-12'>
            <AvatarImage src="/Logo-WD2.png" alt="@shadcn" className="dark:invert" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Link
            href="/docs"
            className="hidden sm:block rounded-full border-2 border-border bg-background px-5 py-1.5 text-sm text-foreground font-heading shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            Resume
          </Link>

          {/* Hamburger button (Mobile) */}
          <button
            className="md:hidden p-1.5 rounded-base border-2 border-border bg-background"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="size-5 text-foreground" /> : <Menu className="size-5 text-foreground" />}
          </button>
        </div>

      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden mt-2 mx-auto max-w-[1200px] border-2 border-border bg-background rounded-base shadow-shadow overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col p-3 gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  className={clsx(
                    'rounded-base px-4 py-2.5 transition-all text-base font-heading',
                    path === link.path ? 'bg-main text-main-foreground' : 'text-foreground/60 hover:bg-secondary-background hover:text-foreground',
                  )}
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
