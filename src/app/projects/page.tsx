'use client'

import { Suspense } from 'react'
import PROJECTS from '@/data/projects'
import * as motion from "motion/react-client"
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export default function Work() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  )
}

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Ambil halaman dari URL, default ke 1
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 3;
  
  // Hitung index data
  const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = PROJECTS.slice(startIndex, endIndex);

  return (
    <section className="py-10 w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-auto max-w-full">
          <h2 className="text-xl sm:text-2xl text-center md:text-4xl pb-2 font-heading">THE PROJECT</h2>
          <p className="text-sm sm:text-base md:text-xl text-center pb-8 sm:pb-12 font-base max-w-2xl mx-auto px-2">
            Berikut adalah project-project yang pernah saya kerjakan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {currentProjects.map((project, id) => {
            return (
              <motion.div
                className="border-border shadow-shadow rounded-base bg-background border-2 p-4 sm:p-5 flex flex-col justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: id * 0.15, ease: "easeOut" }}
                onClick={() => router.push(`/projects/${project.slug}`)}
              >
                <div>
                  <div className="border-border shadow-shadow rounded-base border-2 overflow-hidden bg-background">
                    {project.video ? (
                      project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
                        <div className="w-full h-40 sm:h-56 relative">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            src={`https://www.youtube.com/embed/${project.video.split('/').pop()?.split('?')[0]}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/').pop()?.split('?')[0]}&controls=0&modestbranding=1&rel=0`}
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-40 sm:h-56 object-cover"
                          poster={project.previewImage}
                        >
                          <source src={project.video} type="video/mp4" />
                          Browser Anda tidak mendukung pemutaran video.
                        </video>
                      )
                    ) : (
                      <img
                        className="w-full h-40 sm:h-56 object-cover"
                        src={`${project.previewImage}`}
                        alt={project.name}
                      />
                    )}
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

                {/* button rute */}
                <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                  <a
                    className="border-border bg-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-3 sm:px-4 py-2 text-center text-xs transition-all hover:shadow-none sm:text-sm"
                    href={project.liveLink}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit
                  </a>
                  <a
                    className="border-border bg-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-3 sm:px-4 py-2 text-center text-xs transition-all hover:shadow-none sm:text-sm"
                    href={project.repoUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Github
                  </a>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
      <div className="mt-20">


      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'} 
              className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink 
                  href={`?page=${pageNumber}`} 
                  isActive={currentPage === pageNumber}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Menampilkan ellipsis jika halaman terlalu banyak (opsional, untuk skalabilitas) */}
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <div className="items-center md:flex hidden">
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </div>
          )}

          <PaginationItem>
            <PaginationNext 
              href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'} 
              className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      </div>
    </section>
  )
}
