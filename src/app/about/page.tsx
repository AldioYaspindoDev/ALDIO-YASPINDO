'use client'

import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import { Button } from '@/components/ui/button'
import * as motion from "motion/react-client"

export default function About() {
  return (
    <div className="font-base py-12 sm:py-20">
      <Button className='w-full mb-5 text-main bg-background'>
        <span className='text-base sm:text-lg font-heading'>About</span>
      </Button>

      <motion.div
        className="mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
          Halo! Saya <span className="font-heading text-foreground">Muhamad Aldio Yaspindo</span>, 
          seorang <span className="underline decoration-main decoration-4 underline-offset-4">Software Engineer</span> yang 
          berbasis di Padang, Sumatera Barat.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
          Saya passionate dalam membangun aplikasi web yang robust, scalable, dan berpusat pada 
          pengguna. Saya menikmati proses mengubah masalah yang kompleks menjadi solusi digital 
          yang elegan dan mudah digunakan.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Di luar coding, saya aktif berbagi pengetahuan melalui konten di berbagai platform 
          dan selalu antusias untuk belajar teknologi baru.
        </p>
      </motion.div>

      <Skills />
      <Experience/>
    </div>
  )
}
