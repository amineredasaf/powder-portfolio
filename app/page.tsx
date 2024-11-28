"use client";
import Navbar from "./components/Navbar";
import Button from "./components/button";
import ChatBot from "./components/ChatBot";
import FullPageSection from "./components/full-page-section";
import { getTextColor } from "./utils/colorUtils";
import { Github, Linkedin, Download } from "lucide-react";

function App() {
  return (
    <main className="relative h-screen w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
      <div className="">
        <Navbar />
      </div>
      <div>
        <div className="fixed bottom-[2%] left-[1%] transform -translate-y-1/2 flex flex-col space-y-2">
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
            link="https://amineredasaf.com"
            icon={Download}
            className=""
          ></Button>
        </div>
      </div>

      <FullPageSection
        id="hero"
        bgColor="background_1"
        textColor={getTextColor("bg-indigo-900")}
      >
        <div className="absolute left-[14%] space-y-0 text-light ">
          <p className="text-[20px]">Hi, My Name is</p>
          <h1 className="text-[60px] text-blue-200">Reda Amine Saf.</h1>
          <p className="text-[25px] text-blue-100">Frontend Developer</p>
          <p className="text-blue-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s,
          </p>
          <div className=" md:hidden mt-4 flex justify-center text-center">
            <ChatBot />
          </div>
        </div>
        <div className="hidden md:block absolute right-[14%]">
        <ChatBot />
        </div>
      </FullPageSection>

      <FullPageSection
        id="about"
        bgColor="background_2"
        textColor={getTextColor("bg-emerald-100")}
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">well well</p>
        </div>
      </FullPageSection>

      <FullPageSection
        id="skills"
        bgColor="background_1"
        textColor={getTextColor("bg-purple-900")}
      >
        <div className="text-center space-y-4 text-light">
          <h2 className="text-3xl font-bold">Skill</h2>
          <p className="text-lg">thedestroies of the world</p>
        </div>
      </FullPageSection>
    </main>
  );
}

export default App;
