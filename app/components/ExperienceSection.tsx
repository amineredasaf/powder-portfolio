import React from 'react';
import { ExperienceBlock } from './ExperienceBlock';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  logo?: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "QA Engineer And QC Tester",
    company: "Ora Technologies",
    period: "2023 - 2024",
    description: "Developed and maintained a suite of automated tests, checking for regressions and ensuring the quality of the product.",
    stack: ["React", "TypeScript", "Jest", "Python"],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGQ2vsSFYiCdg/company-logo_200_200/company-logo_200_200/0/1676872502124/ora_technologies_sas_logo?e=2147483647&v=beta&t=yqoe_kqREimIgdT3TLo7nH-lmWSk1dVqDBqXiGeW5Xs",
    link: "https://ora.ma/"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupX",
    period: "2020 - 2022",
    description: "Architected and built scalable microservices, handling millions of daily requests while maintaining 99.9% uptime.",
    stack: ["Node.js", "React", "PostgreSQL", "Docker"],
    logo: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=64&h=64&fit=crop&auto=format"
  },
  
];

export default function ExperienceSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">Experiences</h2>
          <p className="mt-4 text-lg ">My professional journey and achievements</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {experiences.map((experience) => (
            <ExperienceBlock
              key={experience.id}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}