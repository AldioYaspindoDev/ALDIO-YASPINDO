"use client"

import PROJECTS from '@/data/projects';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"
import { useState, use } from "react"
import { ArrowUpRight } from "lucide-react";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return notFound();
  }

  const [date, setDate] = useState<Date | undefined>(new Date(project.date))

  return (
    <div className="mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow">
      <Button className='w-full py-8 my-5 text-main bg-background'>
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

        <div className="rounded-base border-2 border-border bg-background p-8 shadow-shadow flex flex-col items-center justify-center">
          <h2 className="font-heading text-lg mb-4">Project Date</h2>
          <Calendar 
            mode="single" 
            selected={date} 
            onSelect={setDate} 
            className="rounded-md border h-full w-full border-border"
          />
          <p className="mt-4 text-sm font-base">
            Pengerjaan selesai pada: <span className="font-heading">{project.date}</span>
          </p>
        </div>
      </div>

      <div className='mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow'>
        <Button className="mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl"> Description </Button>
        <p className="text-xs mb-2 sm:mb-6 sm:text-sm font-base leading-relaxed text-justify">{project.description}</p>

        <Button className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl'> Problem </Button>
        <p className="text-xs mb-2 sm:mb-6 sm:text-sm font-base leading-relaxed text-justify">{project.problem}</p>

        <Button className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl'> Solution </Button>
        <p className="text-xs mb-2 sm:mb-6 sm:text-sm font-base leading-relaxed text-justify">{project.solution}</p>

        <Button className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl'> Tool </Button>

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
          <Button 
          className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl' 
          onClick={() => window.open(project.liveLink, '_blank')}
        >
          Visit Website
          <ArrowUpRight className="size-5" />
        </Button>
    </div>
  );
}