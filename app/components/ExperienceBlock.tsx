import React from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ExperienceBlockProps {
  title: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  logo?: string;
  link?: string;
}

export function ExperienceBlock({
  title,
  company,
  period,
  description,
  stack,
  logo,
  link
}: ExperienceBlockProps) {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-4 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-sm text-gray-600">{company}</span>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <p className="text-xs text-gray-500">{period}</p>
        </div>
        {logo && (
          <Image 
            src={logo} 
            alt={`${company} logo`} 
            width={36}
            height={36}
            className="object-contain"
          />
        )}
      </div>
      
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      
      <div className="flex flex-wrap gap-1">
        {stack.map((tech) => (
          <span 
            key={tech}
            className="px-2 py-0.5 bg-blue-100 text-gray-700 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}