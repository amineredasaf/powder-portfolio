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
    logo: "https://media.licdn.com/dms/image/v2/D4E22AQF0LHhFZEzSrA/feedshare-shrink_800/feedshare-shrink_800/0/1727893012136?e=2147483647&v=beta&t=7C7TpIgK0vHYdc9Mx02M9szO-UbN4OWhDSiSg45NyD4",
    link: "https://ora.ma/"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Wovoiture.",
    period: "2024 - 2024",
    description: "Helped to develop a mobile application that allows users to book and manage their car rentals.",
    stack: ["Node.js", "Flutter", "PostgreSQL", "Docker"],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEbfFXZwutELg/company-logo_200_200/company-logo_200_200/0/1708479880212/wovoiture_logo?e=2147483647&v=beta&t=xLp42Cu5w73wLDtSZBkUht4kPqXER8ycTRCtL413RsE",
    link: "https://wovoiture.ma/"
  },
  {
    id: 3,
    title: "Cofounder And Full Stack Developer",
    company: "Yonotify.",
    period: "2024 - present",
    description: "Loading...",
    stack: ["Node.js", "Flutter", "Nextjs", "PostgreSQL", "Docker"],
    logo: "https://www.yonotify.com/Ylogo.svg",
    link: "https://yonotify.com/",
  },
];

export default function ExperienceSection() {
  return (
    <section className="pt-24 pb-40 sm:pb-56 mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">Experiences</h2>
          <p className="mt-4 text-lg ">My professional journey and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
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