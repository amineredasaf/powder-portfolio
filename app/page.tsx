"use client";
import Navbar from "./components/Navbar";
import Button from "./components/button";
import Chat from "./components/ChatBot";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

import FullPageSection from "./components/full-page-section";
import { getTextColor } from "./utils/colorUtils";
import { Github, Linkedin, Download } from "lucide-react";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <main className="relative h-screen w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
      <div className="">
        <Navbar />
      </div>
      <div>
        <div className="fixed bottom-[2%] left-[4%] transform -translate-y-1/2 lg:flex lg:flex-col lg:space-y-2 md:left-[4%] md:space-x-0 sm:bottom-[1%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:space-x-2">
          <Button
            nextSectionId="Github"
            link="https://Github.com/amineredasaf"
            icon={Github}
            className=""
          ></Button>
          <Button
            nextSectionId="Linkedin"
            link="https://Linkedin.com/in/amineredasaf"
            icon={Linkedin}
            className=""
          ></Button>
          <Button
            nextSectionId="Download"
            link="https://drive.google.com/file/d/1fODcGHdLk3dzLjy5D3BY2Tlj5BHsacN4/view?usp=sharing"
            icon={Download}
            className=""
          ></Button>
        </div>
      </div>

      <FullPageSection
        id="Welcome"
        bgColor="background_1"
        textColor={getTextColor("bg-indigo-900")}
      >
        <div className="absolute lg:left-[14%]  sm:left-[10%] space-y-0 text-light ">
          <p className="lg:text-[20px] sm:text-[100%]">Hi, My Name is</p>
          <h1 className="lg:text-[60px] sm:text-[200%] text-blue-200">
            Reda Amine Saf.
          </h1>
          <p className="lg:text-[25px] sm:text-[100%] text-blue-100">
            Full stack developer
          </p>
          <p className="text-blue-50 sm:text-[100%]">
            🛠️ What I do:
            <br />
            - Full stack development (Node.js, NestJS, Next.js, Flutter)
            <br />
            - Work with PostgreSQL, Kafka, C/C++, Python
            <br />
            - Build and deploy with Docker
            <br />
            - Tackle networking projects
            <br />
            - Explore and build startup ideas
            <br />- Learn fast and adapt even faster
          </p>
          <div className=" md:hidden mt-4 flex justify-center text-center">
            {/* <ChatBot /> */}
            <Chat />
          </div>
        </div>
        <div className="hidden md:block absolute right-[10%]">
          {/* <ChatBot /> */}
          <Chat />
        </div>
      </FullPageSection>

      <FullPageSection
        id="Experiences"
        bgColor="background_2"
        textColor={getTextColor("bg-emerald-100")}
      >
        <div className="text-center space-y-4">
          <ExperienceSection />
        </div>
      </FullPageSection>

      <FullPageSection
        id="Projects"
        bgColor="background_1"
        textColor={getTextColor("bg-purple-900")}
      >
        <div className="text-center space-y-4 text-light">
          <ProjectsSection />
        </div>
      </FullPageSection>

      <FullPageSection
        id="Contact"
        bgColor="background_2"
        textColor={getTextColor("bg-emerald-100")}
      >
        <div className="text-center space-y-4">
          <ContactSection />
        </div>
      </FullPageSection>
    </main>
  );
}

export default App;
