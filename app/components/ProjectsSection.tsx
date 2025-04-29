import { useMemo, useState, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    title: 'Ping Pong Game Platform',
    description: 'A fun and interactive ping pong game platform with real-time multiplayer features',
    tags: ['Postgres', 'Next.js', 'TypeScript', 'Tailwind'],
    imageUrl: 'https://i.pinimg.com/originals/32/48/ce/3248cee8c0f7cb165130337f560e9043.gif',
    githubUrl: 'https://github.com/yabtaour/pinje-ponje',
    featured: true
  },
  {
    id: '2',
    title: 'Rebuilding a Shell Terminal from Scratch Using C',
    description: 'A custom shell terminal built from scratch using C, featuring command execution and piping',
    tags: ['C', 'Unix', 'Shell Scripting'],
    imageUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210722231800/giphy-1.gif',
    githubUrl: 'https://github.com/amineredasaf/minishell',
    featured: true
  },
  {
    id: '3',
    title: 'Custom HTTP Server from Scratch',
    description: 'A custom HTTP server built from scratch using C++, supporting GET and POST requests',
    tags: ['C++', 'HTTP', 'Networking'],
    imageUrl: 'https://i.pinimg.com/originals/0e/4a/c3/0e4ac37acbff81cd087aa19692a07a9d.gif',
    projectUrl: 'https://tasks-app.com',
    featured: true
  },
  {
    id: '4',
    title: 'Build a Game Using Only C and Raycasting from Scratch — Inspired by DOOM',
    description: 'A 3D game built from scratch using C and raycasting techniques, inspired by the classic DOOM game',
    tags: ['C', 'Raycasting', 'Game Development'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4dwazSQPttnnEoNs2V5ZymnlnjoQyhroOA&s',
    githubUrl: 'https://github.com/amineredasaf/cub3D',
    featured: true
  },
];

const ProjectsSection = () => {
  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, []);
  
  const [activeIndex, setActiveIndex] = useState(1); 
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const cardWidth = 210;
    const scrollPosition = slider.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex >= 0 && newIndex < featuredProjects.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };
  
  if (featuredProjects.length === 0) return null;

  return (
    <div className="w-full py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
      <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl font-bold ">Feauterd Projects</h2>
          <p className="mt-4 text-lg ">Here are some of my projects that I have worked on</p>
        </div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sliderRef}
          className="flex items-center overflow-x-auto scrollbar-none py-4 px-8 sm:px-12 md:px-16"
          style={{ 
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarWidth: 'none',   /* Firefox */
          }}
          onScroll={handleScroll}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex-shrink-0 w-[calc(50%-130px)] sm:w-[calc(50%-155px)] md:w-[calc(50%-180px)]"></div>
          
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex-shrink-0 px-3 sm:px-4 transition-all duration-300 snap-center ${
                index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[calc(50%-130px)] sm:w-[calc(50%-155px)] md:w-[calc(50%-180px)]"></div>
        </div>
      </div>
      
      <div className="w-full mt-8 md:mt-10 flex justify-center">
        <Link 
          href="/projects" 
          className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-200 hover:bg-blue-400 
                     text-black text-sm md:text-base rounded-md transition-colors duration-200"
        >
          <span>View All Projects</span>
          <FaArrowRight size={12} className="md:text-base" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;