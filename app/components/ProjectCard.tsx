"use client"

import React from "react"
import { cn } from "../lib/utils"
// import { Project } from "../types" 
import { FiGithub, FiExternalLink, FiStar, FiCode } from "react-icons/fi"

export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    imageUrl?: string
    projectUrl?: string
    githubUrl?: string
    featured?: boolean
  }

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Prepare tags: show max 3 tags, if more add a +N tag
  const displayTags = project.tags?.slice(0, 2) || [];
  const remainingTags = (project.tags?.length || 0) - 2;
  
  return (
    <div className="relative">
      {/* Card with corner icons and background image/gif */}
      <div 
        className={cn(
          "h-[280px] w-[168px] sm:h-[350px] sm:w-[210px]", 
          "border border-blue-200 rounded-lg",
          "transition-all duration-300",
          "relative overflow-hidden"
        )}
        style={{
          backgroundImage: project.imageUrl ? `url(${project.imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 flex flex-col gap-1.5 sm:gap-2 text-white/60 z-10">
          <button 
            aria-label="View code details"
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded p-1"
          >
            <FiCode size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          
          {project.featured && (
            <button 
              aria-label="Featured project" 
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded p-1"
            >
              <FiStar size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="View GitHub repository"
              className="hover:text-white transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-white/40 rounded p-1"
            >
              <FiGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          )}
          
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="View live project"
              className="hover:text-white transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-white/40 rounded p-1"
            >
              <FiExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          )}
        </div>
        
        <div className="absolute bottom-[10%] left-0 right-0 px-3 sm:px-4 z-10">
          <div className="absolute inset-0 backdrop-blur-sm -z-10"></div>
          <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 truncate text-left">{project.title}</h3>
          <p className="text-white/80 text-xs sm:text-sm line-clamp-2 text-left mb-1.5 sm:mb-2">{project.description}</p>
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex gap-1 mt-1 overflow-x-auto scrollbar-none">
              {displayTags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-[10px] sm:text-xs bg-white/10 text-white/90 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
              
              {remainingTags > 0 && (
                <span className="text-[10px] sm:text-xs bg-white/20 text-white/90 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                  +{remainingTags}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
