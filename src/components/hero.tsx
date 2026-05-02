// src/components/hero.tsx
'use client'

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-28 mx-auto w-container max-w-full">
      <div className="flex flex-col items-center text-center">
        <motion.h1
          className="leading-tight text-3xl sm:text-5xl md:text-6xl font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Crafting Digital <br />
          <Button className="relative p-4 sm:p-7 text-main text-3xl sm:text-5xl bg-background">
            Experiences
          </Button>{" "}
          Through Code.
        </motion.h1>
        
        <motion.p
          className="mt-6 sm:mt-8 md:mt-12 text-base sm:text-xl md:text-2xl font-base max-w-2xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Hi, I&apos;m <span className="font-heading text-foreground">Muhamad Aldio Yaspindo</span>, 
          a passionate <span className="underline decoration-main decoration-4 underline-offset-4">Software Engineer</span> based in Padang, Sumatera Barat.
        </motion.p>

        <motion.p
          className="mt-4 text-foreground/60 text-sm sm:text-base md:text-lg max-w-xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          I specialize in building robust, scalable, and user-centric web applications 
          that turn complex problems into elegant digital solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="/docs"
            className="flex items-center justify-center gap-2.5 rounded-base border-2 border-border bg-background px-6 sm:px-8 py-3 text-base sm:text-lg font-heading shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            View My Resume
            <ArrowUpRight className="size-5" />
          </a>
          <a
            href="/work"
            className="flex items-center justify-center gap-2.5 rounded-base border-2 border-border bg-background px-6 sm:px-8 py-3 text-base sm:text-lg font-heading shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            See My Work
          </a>
        </motion.div>
      </div>
    </div>
  );
}
