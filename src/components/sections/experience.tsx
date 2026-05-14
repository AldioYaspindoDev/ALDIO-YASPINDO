'use client'

import EXPERIENCES from "@/data/experience"
import * as motion from "motion/react-client"
import { Button } from "../ui/button"

export default function Experience() {
  return (
    <div className="mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow">
      <Button className="mb-6 sm:mb-8 text-lg sm:text-xl font-heading md:text-2xl">Experience</Button>

      <div className="flex flex-col gap-3 sm:gap-4">
        {EXPERIENCES.map((exp, id) => (
          <motion.div
            key={id}
            className="rounded-base border-2 border-border bg-background p-4 sm:p-5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: id * 0.1, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-heading text-sm sm:text-base md:text-lg">{exp.role}</h3>
              <span className="text-xs sm:text-sm text-foreground/60 font-base">{exp.period}</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-base text-foreground/70 mb-2 sm:mb-3">{exp.company}</p>
            <p className="text-xs sm:text-sm font-base leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
