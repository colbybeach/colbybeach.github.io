/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useState } from "react";
import profile from "../assets/ColbyProfilePic.jpg";
import Typewriter from "typewriter-effect";
import SkillCategoryButton from "../components/SkillCategoryButton";
import {
  certs,
  frameworkSkills,
  languageSkills,
  projects,
  skillCat,
  techSkills,
  webSkills,
} from "../data";
import ProjectCard from "../components/ProjectCard";

import { FaBriefcase, FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import SkillRow from "../components/SkillRow";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#ebebeb] text-[#363945] dark:bg-gray-800 dark:text-[#ebebeb] w-full flex justify-center ">
      <div className="fixed inset-0 z-10 dark:bg-[radial-gradient(#ebebeb55_1px,transparent_1px)] bg-[radial-gradient(#36394555_1px,transparent_1px)] bg-[size:48px_36px] pointer-events-none" />
      <div className="w-[800px]  mx-8 py-16 flex flex-col gap-y-12">
        <div className="w-full flex md:flex-row flex-col gap-y-6 md:items-center items-start px-12 py-8 justify-between shadow-md dark:shadow-lg dark:bg-white/10 bg-gray-200  rounded-xl">
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />

          {/* Name and Title */}
          <div className="flex flex-col md:text-center md:items-center gap-6 md:pl-8">
            <h1 className="text-2xl font-bold leading-6">Colby Beach</h1>
            <p className="text-md md:w-3/4 leading-6">
              SWE @ Jahnel Group & MLAI | Founder of Jupiter Ventures
            </p>
          </div>

          {/* Social Icons and Toggle */}
          <div className="flex md:flex-col md:w-fit w-full flex-row justify-between gap-6 ">
            <div className="flex justify-between gap-x-4 pb-2">
              <FaGithub
                className="w-6 h-6 cursor-pointer"
                onClick={() =>
                  (window.location.href = "https://example.com/1234")
                }
              />
              <FaLinkedin className="w-6 h-6 cursor-pointer" />
              <FaBriefcase className="w-6 h-6 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2">
              <IoSunny className="w-6 h-6" />
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer/toggle"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked/toggle:bg-indigo-600 transition-colors duration-300 ease-in-out" />
                <div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-md transition-all duration-300 ease-in-out peer-checked/toggle:translate-x-5" />
              </label>
              <FaRegMoon className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-3xl font-bold ">
            <Typewriter
              options={{
                strings: ["Who...me?"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="text-sm leading-8">
            Hello! My name is Colby, and I am super passionate about
            programming, buisness, and leadership. I am currently a software
            developer at Jahnel Group Inc in Schenectady, NY (full-time), where
            I have been for the last 3 years, as well as the startup
            MorningLine.ai (part-time). I also recently started my own company,
            Jupiter Ventures 😆. Feel free to reach out anytime, I would love to
            talk!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-3xl font-bold ">Skills</span>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-[35%]">
              {skillCat.map((item, index) => {
                return (
                  <SkillCategoryButton
                    title={item}
                    selected={index == currentSkill}
                    onClick={() => {
                      setCurrentSkill(index);
                    }}
                  />
                );
              })}
            </div>
            <div className="w-[50%] flex gap-x-6 flex-wrap justify-center items-center">
              {currentSkill == 0
                ? languageSkills.map((item) => <SkillRow item={item} />)
                : currentSkill == 1
                  ? webSkills.map((item) => <SkillRow item={item} />)
                  : currentSkill == 2
                    ? frameworkSkills.map((item) => <SkillRow item={item} />)
                    : currentSkill == 3
                      ? techSkills.map((item) => <SkillRow item={item} />)
                      : certs.map((item) => <SkillRow item={item} />)}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-3xl font-bold ">Experience & Projects</span>
          <div className="flex justify-between gap-y-6 flex-wrap w-full">
            {projects.map((item, index) => {
              return (
                <ProjectCard
                  project={item}
                  onClick={() => {
                    setProjectModalOpen(true);
                    setCurrentProject(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <ProjectModal
        currentProject={currentProject}
        isOpen={isProjectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </div>
  );
}
