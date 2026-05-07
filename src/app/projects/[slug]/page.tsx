"use client"

import PROJECTS from '@/data/projects';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"
import { useState, use } from "react"

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return notFound();
  }

  const [date, setDate] = useState<Date | undefined>(new Date(project.date))

  return (
    <div className="w-full">
      <Button className='w-full p-5 mb-5 text-main bg-background'>
        <h1 className="text-2xl sm:text-4xl font-heading">{project.name}</h1>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
        <div className="lg:col-span-2 rounded-base border-2 border-border shadow-shadow overflow-hidden bg-background">
          {project.video ? (
            project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.video.split('/').pop()?.split('?')[0]}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                controls
                className="w-full h-auto"
                poster={project.previewImage}
              >
                <source src={project.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            )
          ) : (
            <img src={project.previewImage} alt={project.name} className="w-full h-auto" />
          )}
        </div>

        <div className="rounded-base border-2 border-border bg-background p-4 shadow-shadow flex flex-col items-center justify-center">
          <h2 className="font-heading text-lg mb-4">Project Date</h2>
          <Calendar 
            mode="single" 
            selected={date} 
            onSelect={setDate} 
            className="rounded-md border border-border"
          />
          <p className="mt-4 text-sm font-base">
            Pengerjaan selesai pada: <span className="font-heading">{project.date}</span>
          </p>
        </div>
      </div>

      <div className='mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow'>
        <h2 className='font-heading text-lg sm:text-xl md:text-2xl text-foreground mb-2'>Description</h2>
        <p className="text-lg text-justify mb-4">{project.description}</p>

        <h2 className='font-heading text-lg sm:text-xl md:text-2xl text-foreground mb-2'> Tool </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 sm:gap-2.5 rounded-base border-2 border-border bg-background px-3 sm:px-4 py-2 sm:py-2.5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              >
                <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-foreground" title="" />
                <span className="font-base text-xs sm:text-sm">{skill.skill}</span>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
}