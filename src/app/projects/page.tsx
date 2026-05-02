'use client'

import PROJECTS from '@/data/projects'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import * as motion from "motion/react-client"

export default function Work() {
  return (
    <div className='py-12 sm:py-20'>

      <Button className='w-full mb-5 text-main bg-background'>
        <span className='text-base sm:text-lg font-heading'>Project</span>
      </Button>

      <ScrollArea className='w-full rounded-base h-full text-foreground mb-8 sm:mb-10 border-2 border-border bg-background p-3 sm:p-4 shadow-shadow'>
        <p className="text-sm sm:text-base">
          Berikut adalah project yang pernah saya buat – masing-masing dirancang untuk memecahkan masalah nyata dan memberikan dampak, dari digitalisasi UMKM hingga efisiensi operasional perusahaan.
        </p>
      </ScrollArea>

      <div className="flex flex-col gap-4 sm:gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <motion.div
              className="border-border shadow-shadow rounded-base bg-background border-2 p-3 sm:p-5"
              key={id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: id * 0.1, ease: "easeOut" }}
            >
              <img
                className="rounded-base w-full h-40 sm:h-56 md:h-full object-cover"
                src={`${project.previewImage}`}
                alt={project.name}
              />

              <div className="text-foreground font-base mt-4 sm:mt-5">
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2 text-xs sm:text-sm md:text-base">{project.description}</p>

                <div className="mt-5 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-5">
                  <a
                    className="border-border bg-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-3 sm:px-4 py-2 text-center text-xs sm:text-sm md:text-base transition-all hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border bg-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-3 sm:px-4 py-2 text-center text-xs sm:text-sm md:text-base transition-all hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
