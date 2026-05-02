'use client'

import Marquee from "@/components/ui/marquee"
import { SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiPython, SiExpress, SiPostgresql, SiMongodb, SiTailwindcss, SiMysql, SiFigma, SiGithub, SiVercel, SiNestjs } from "@icons-pack/react-simple-icons"
import * as motion from "motion/react-client"

export default function ProgramingLanguage() {
    const items = [
        <SiJavascript key="js" size={50} fill="#FFCC29" />,
        <SiReact key="react" size={50} fill="#00D9FF" />,
        <SiTypescript key="ts" size={50} fill="#2E7EC8" />,
        <SiNextdotjs key="next" size={50} fill="#000000" />,
        <SiNodedotjs key="node" size={50} fill="#438544" />,
        <SiHtml5 key="html" size={50} fill="#E44D26" />,
        <SiCss3 key="css" size={50} fill="#1572B6" />,
        <SiGit key="git" size={50} fill="#F05032" />,
        <SiPython key="python" size={50} fill="#3776AB" />,
        <SiExpress key="express" size={50} fill="#438544" />,
        <SiPostgresql key="pg" size={50} fill="#438544" />,
        <SiMongodb key="mongo" size={50} fill="#438544" />,
        <SiTailwindcss key="tw" size={50} fill="#06B6D4" />,
        <SiMysql key="mysql" size={50} fill="#F29111" />,
        <SiFigma key="figma" size={50} fill="#9D90FF" />,
        <SiGithub key="github" size={50} fill="#181717" />,
        <SiVercel key="vercel" size={50} fill="#000000" />,
        <SiNestjs key="nest" size={50} fill="#EA2845" />,
    ]

    return (
        <motion.div
            className="py-16 sm:py-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Marquee items={items} />
        </motion.div>
    )
}
