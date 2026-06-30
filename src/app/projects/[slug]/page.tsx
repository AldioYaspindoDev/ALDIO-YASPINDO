"use client"

import PROJECTS from '@/data/projects';
import SKILLS from '@/data/skills';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"
import { useState, use, useEffect } from "react"
import { ArrowUpRight } from "lucide-react";
import { API_BASE_URL } from "@/lib/constant";
import { SiReact, type IconType } from '@icons-pack/react-simple-icons';
import { portfolioService } from '@/service/portfolioService';


// Build a lookup map of all skills to their icons
const skillIconMap: Record<string, IconType> = {};
SKILLS.forEach(category => {
  category.skills.forEach(s => {
    skillIconMap[s.skill.toLowerCase().replace(/\s+/g, '')] = s.icon;
  });
});
PROJECTS.forEach(proj => {
  proj.skills?.forEach(s => {
    skillIconMap[s.skill.toLowerCase().replace(/\s+/g, '')] = s.icon;
  });
});

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [portfolio, setPortfolio] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const GetPortfolioBySlug = async (slug: string) => {
    try {
      setLoading(true);
      const response = await portfolioService.getPorfolioBySlug(slug);
      const data = response.data?.data || response.data;
      if (data) {
        setPortfolio(data);
        if (data.date) {
          setDate(new Date(data.date));
        }
      } else {
        // Fallback to static PROJECTS
        const staticProj = PROJECTS.find((p) => p.slug === slug);
        if (staticProj) {
          setPortfolio(staticProj);
          if (staticProj.date) {
            setDate(new Date(staticProj.date));
          }
        }
      }
    } catch (error) {
      console.error("Gagal mendapatkan data:", error);
      // Fallback on error
      const staticProj = PROJECTS.find((p) => p.slug === slug);
      if (staticProj) {
        setPortfolio(staticProj);
        if (staticProj.date) {
          setDate(new Date(staticProj.date));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (resolvedParams.slug) {
      GetPortfolioBySlug(resolvedParams.slug);
    }
  }, [resolvedParams.slug]);

  const getImageUrl = (imagePath: string | null | undefined) => {
    if (!imagePath) return "/placeholder.svg";
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    return `${API_BASE_URL}${cleanPath}`;
  };

  const getNormalizedSkills = (): { skill: string; icon: IconType }[] => {
    if (!portfolio) return [];
    if (Array.isArray(portfolio.skills)) {
      return portfolio.skills.map((s: any) => {
        if (typeof s === 'object' && s.skill) return s;
        const name = String(s);
        const key = name.toLowerCase().replace(/\s+/g, '');
        return { skill: name, icon: skillIconMap[key] || SiReact };
      });
    }
    if (typeof portfolio.skills === 'string') {
      return portfolio.skills.split(',').map((s: string) => {
        const name = s.trim();
        const key = name.toLowerCase().replace(/\s+/g, '');
        return { skill: name, icon: skillIconMap[key] || SiReact };
      });
    }
    return [];
  };

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!portfolio) {
    return notFound();
  }

  const normalizedSkills = getNormalizedSkills();
  const repoUrl = portfolio.repositoryLink || portfolio.repoUrl || '#';
  const liveLink = portfolio.liveLink || '#';

  return (
    <div className="mb-8 mt-25 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow">
      <Button className='w-full py-8 my-5 text-main bg-background'>
        <h1 className="text-2xl sm:text-4xl font-heading">{portfolio.name}</h1>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
        <div className="lg:col-span-2 rounded-base border-2 border-border shadow-shadow overflow-hidden bg-background">
          {portfolio.video ? (
            portfolio.video.includes('youtube.com') || portfolio.video.includes('youtu.be') ? (
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${portfolio.video.split('/').pop()?.split('?')[0]}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                controls
                className="w-full h-auto"
                poster={getImageUrl(portfolio.previewImage)}
              >
                <source src={portfolio.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            )
          ) : (
            <img src={getImageUrl(portfolio.previewImage)} alt={portfolio.name} className="w-full h-auto" />
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
            Pengerjaan selesai pada: <span className="font-heading">{portfolio.date}</span>
          </p>
        </div>
      </div>

      <div className='mb-8 sm:mb-12 rounded-base border-2 border-border bg-background p-4 sm:p-6 shadow-shadow'>
        <Button className="mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl"> Description </Button>
        <p className="text-xs mb-2 sm:mb-6 sm:text-sm font-base leading-relaxed text-justify">{portfolio.description}</p>

        {portfolio.problem && (
          <>
            <Button className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl'> Problem </Button>
            <p className="text-xs mb-2 sm:mb-6 sm:text-sm font-base leading-relaxed text-justify">{portfolio.problem}</p>
          </>
        )}

        {portfolio.solution && (
          <>
            <Button className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl'> Solution </Button>
            <p className="text-xs mb-2 sm:mb-6 sm:text-sm font-base leading-relaxed text-justify">{portfolio.solution}</p>
          </>
        )}

        {normalizedSkills.length > 0 && (
          <>
            <Button className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl'> Tool </Button>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {normalizedSkills.map((skill: { skill: string; icon: IconType }, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 sm:gap-2.5 rounded-base border-2 border-border bg-background px-3 sm:px-4 py-2 sm:py-2.5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                >
                  <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-foreground" title="" />
                  <span className="font-base text-xs sm:text-sm">{skill.skill}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        {liveLink && liveLink !== '#' && (
          <Button 
            className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl' 
            onClick={() => window.open(liveLink, '_blank')}
          >
            Visit Website
            <ArrowUpRight className="size-5" />
          </Button>
        )}

        {repoUrl && repoUrl !== '#' && (
          <Button 
            className='mb-2 sm:mb-4 text-lg sm:text-xl font-heading md:text-2xl bg-secondary text-secondary-foreground' 
            onClick={() => window.open(repoUrl, '_blank')}
          >
            Github Repository
            <ArrowUpRight className="size-5" />
          </Button>
        )}
      </div>
    </div>
  );
}