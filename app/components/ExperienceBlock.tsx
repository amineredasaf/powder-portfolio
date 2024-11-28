import React from 'react';
import { ExternalLink } from 'lucide-react';

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
    <div className="bg-blue-50 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-600">{company}</span>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{period}</p>
        </div>
        {logo && (
          <img 
            src={logo} 
            alt={`${company} logo`} 
            className="w-12 h-12 object-contain"
          />
        )}
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-blue-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}