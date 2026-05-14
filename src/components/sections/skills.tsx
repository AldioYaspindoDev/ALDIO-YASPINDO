'use client'

import SKILLS from '@/data/skills'
import * as motion from "motion/react-client"
import { Button } from '../ui/button'

export default function Skills() {
  return (
    <div className="mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow">
      <Button className="mb-6 sm:mb-8 text-lg sm:text-xl font-heading md:text-2xl">
        <span className='text-base sm:text-lg font-heading'>Skills</span>
      </Button>

      {SKILLS.map((item, id) => (
        <motion.div
          key={id}
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: id * 0.1, ease: "easeOut" }}
        >
          <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-heading md:text-lg text-foreground/70 uppercase tracking-widest">
            {item.field}
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {item.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 sm:gap-2.5 rounded-base border-2 border-border bg-background px-3 sm:px-4 py-2 sm:py-2.5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              >
                <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-foreground" title="" />
                <span className="font-base text-xs sm:text-sm">{skill.skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
