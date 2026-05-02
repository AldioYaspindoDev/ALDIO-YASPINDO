'use client'

import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiWhatsapp
} from '@icons-pack/react-simple-icons'
import Image from 'next/image'
import * as motion from "motion/react-client"

export default function Links() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGmail,
      href: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWslwwgxKNLKCkCvvDmHQJWgwpkjfTJWTJhspSKXtfjFZwLrsVbwQrNlWvHVSTwxBpjRdrjkb',
      label: 'Email',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/AldioYaspindoDev',
      label: 'Github',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/muhammad-aldio-yaspindo/',
      label: 'LinkedIn',
    },
    {
      icon: SiWhatsapp,
      href: 'https://wa.me/6285183200450',
      label: 'WhatsApp',
    },
  ]

  return (
    <footer className="mt-12 sm:mt-20 w-screen relative left-1/2 -translate-x-1/2 border-t-4 border-border bg-background py-10 sm:py-16 px-4 sm:px-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-main/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:gap-12 md:flex-row md:items-start">
          <motion.div
            className="max-w-md text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image className='dark:invert mx-auto md:mx-0' src={'/Logo-WD.png'} alt='Logo' width={80} height={80} />
            <h2 className="text-2xl sm:text-3xl font-heading pt-4 sm:pt-6 text-foreground md:text-5xl tracking-tight leading-tight">
              Let&apos;s Build Something <br />
              <span className="text-main underline decoration-4 underline-offset-8">Amazing Together.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-foreground/60 font-base text-sm sm:text-lg leading-relaxed">
              Saya selalu terbuka untuk proyek baru, kolaborasi, atau sekadar menyapa. 
              Jangan ragu untuk menghubungi saya melalui platform berikut!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-6 w-full md:w-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {links.map((link, id) => (
              <a
                target="_blank"
                key={id}
                href={link.href}
                className="group flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-base border-2 border-border bg-background p-4 sm:p-6 transition-all text-foreground shadow-shadow hover:shadow-none hover:translate-x-boxShadowX hover:translate-y-boxShadowY min-w-0 sm:min-w-[140px]"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6 sm:h-8 sm:w-8 transition-transform group-hover:scale-110 text-foreground" />
                <span className="font-heading text-[10px] sm:text-xs uppercase tracking-widest">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-20 border-t-2 border-border pt-6 sm:pt-10 flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-foreground/50 font-base text-xs sm:text-sm">
              Available for new projects
            </p>
          </div>
          
          <p className="text-foreground/40 font-base text-xs sm:text-sm order-3 md:order-2 text-center">
            © {new Date().getFullYear()} Muhamad Aldio Yaspindo. Built with passion.
          </p>

          <div className="flex gap-6 sm:gap-8 text-foreground/50 font-base text-xs sm:text-sm order-2 md:order-3">
            <a href="https://www.tiktok.com/@way_dev?_r=1&_t=ZS-961O2QAyfE0" className="hover:text-main transition-colors underline decoration-foreground/20 underline-offset-4 hover:decoration-main">Tiktok</a>
            <a href="https://www.instagram.com/yaspindo_" className="hover:text-main transition-colors underline decoration-foreground/20 underline-offset-4 hover:decoration-main">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
