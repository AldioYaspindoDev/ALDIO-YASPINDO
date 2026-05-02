'use client'

import PROJECTS from '@/data/projects'
import * as motion from "motion/react-client"

export default function LatestProject() {
    return (
        /* 
           Tambahkan w-screen, left-1/2, dan -translate-x-1/2 
           agar komponen bisa keluar dari batasan container 750px 
        */
        <section className="py-10 w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-10">
            {/* 
               Gunakan max-w yang lebih besar (misal 1200px) agar 
               kontennya melebar tapi tetap rapi di tengah layar besar 
            */}
            <div className="max-w-[1200px] mx-auto">
                <div className="mx-auto max-w-full">
                    <h2 className="text-xl sm:text-2xl text-center md:text-4xl pb-2 font-heading">LATEST PROJECT</h2>
                    <p className="text-sm sm:text-base md:text-xl text-center pb-8 sm:pb-12 font-base max-w-2xl mx-auto px-2">
                        Berikut adalah project-project yang pernah saya kerjakan
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
                    {PROJECTS.slice(0, 3).map((project, id) => {
                        return (
                            <motion.div
                                className="border-border shadow-shadow rounded-base bg-background border-2 p-4 sm:p-5 flex flex-col justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                key={id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: id * 0.15, ease: "easeOut" }}
                            >
                                <div>
                                    <div className="border-border shadow-shadow rounded-base border-2 overflow-hidden bg-background">
                                        <img
                                            className="w-full h-40 sm:h-56 object-cover" 
                                            src={`${project.previewImage}`}
                                            alt={project.name}
                                        />
                                    </div>

                                    <div className="text-foreground font-base mt-4 sm:mt-6">
                                        <h2 className="font-heading text-lg sm:text-xl md:text-2xl">
                                            {project.name}
                                        </h2>

                                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base line-clamp-3 opacity-90">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                                    <a
                                        className="border-border bg-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-3 sm:px-4 py-2 text-center text-xs transition-all hover:shadow-none sm:text-sm"
                                        href={project.liveLink}
                                        target="_blank"
                                    >
                                        Visit
                                    </a>
                                    <a
                                        className="border-border bg-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-3 sm:px-4 py-2 text-center text-xs transition-all hover:shadow-none sm:text-sm"
                                        href={project.repoUrl}
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
