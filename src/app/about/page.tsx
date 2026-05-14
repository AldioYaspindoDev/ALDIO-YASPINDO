'use client'

import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import { Button } from '@/components/ui/button'
import * as motion from "motion/react-client"

export default function About() {
  return (
    <div className="font-base py-16 sm:py-10">
      <motion.div
        className="mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Button className='sm:mb-2 text-lg sm:text-xl font-heading md:text-2xl'>
          <span className='text-base sm:text-lg font-heading'>About me</span>
        </Button>
        <div>

        <h2 className='"mb-6 sm:my-8 text-lg sm:text-xl font-heading md:text-2xl'>Latar belakang :</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
          Halo Semua ! Saya <span className="font-heading text-foreground">Muhamad Aldio Yaspindo</span>, 
          seorang <span className="underline decoration-main decoration-4 underline-offset-4">Software Engineer</span> yang 
          berbasis di Padang, Sumatera Barat.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-3 sm:mb-4">
          Sebagai seorang Software Engineer, saya berdedikasi pada perancangan dan pengembangan ekosistem digital end-to-end yang robust dan scalable. Kapasitas teknis saya mencakup rekayasa arsitektur Backend berkinerja tinggi, implementasi Frontend yang responsif, serta pendekatan UI/UX yang berpusat pada efisiensi pengguna. Selain pengembangan aplikasi fundamental, saya memiliki fokus analitis pada integrasi model Machine Learning untuk mengoptimalkan kapabilitas dan kecerdasan sistem. Saya berkomitmen pada continuous learning dan penerapan praktik rekayasa perangkat lunak terbaik dalam setiap baris kode yang saya bangun.
        </p>
        </div>
      </motion.div>

      <Skills />
      <Experience/>
    </div>
  )
}
