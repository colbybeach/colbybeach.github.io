import { ReactElement } from "react";
import {
    BiLogoDjango,
    BiLogoFigma,
    BiLogoGoogleCloud,
    BiLogoGraphql,
    BiLogoKubernetes,
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from "react-icons/bi";
import {
    FaAws,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaJava,
    FaJira,
    FaNode,
    FaPython,
    FaReact,
    FaSwift,
} from "react-icons/fa";

import { RiJavascriptFill } from "react-icons/ri";
import {
    SiAndroidstudio,
    SiExpress,
    SiMui,
    SiNextdotjs,
    SiTerraform,
    SiXcode,
} from "react-icons/si";
import { TbBrandMysql, TbBrandSwift } from "react-icons/tb";

import JahnelGroup from "./assets/JahnelGroup.png";
import MorninglineAi from "./assets/morninglineai.jpeg";
import Cocobolo from "./assets/cocobologroup.jpg";
import QuantBuilder from "./assets/qunatbuilder.png";
import LTI from "./assets/LTI.jpeg";

export interface Skill {
    skill: string;
    image: ReactElement;
}

export interface Project {
    title: string;
    dates: string;
    role: string;
    shortDescription: string;
    description: ReactElement;
    icon: string;
    skills: ReactElement[];
}

export const skillCat = [
    "Languages",
    "Web & Database",
    "Frameworks",
    "Technologies",
    "Certifications",
];

export const languageSkills: Skill[] = [
    { skill: "Javascript", image: <RiJavascriptFill className="w-5 h-5" /> },
    { skill: "Typescript", image: <BiLogoTypescript className="w-5 h-5" /> },
    { skill: "Python", image: <FaPython className="w-5 h-5" /> },
    {
        skill: "C",
        image: (
            <div className="bg-current rounded-md px-1 py-[2px] flex items-center">
                <span className="dark:text-gray-800 text-[#ebebeb] font-bold text-xs ">
                    C
                </span>
            </div>
        ),
    },
    { skill: "Java", image: <FaJava className="w-5 h-5" /> },
    { skill: "Swift", image: <FaSwift className="w-5 h-5" /> },
];

export const webSkills = [
    { skill: "HTML", image: <FaHtml5 className="w-5 h-5" /> },
    { skill: "CSS", image: <FaCss3Alt className="w-5 h-5" /> },
    { skill: "PostgreSQL", image: <BiLogoPostgresql className="w-5 h-5" /> },
    { skill: "MySQL", image: <TbBrandMysql className="w-5 h-5" /> },
    { skill: "MongoDB", image: <BiLogoMongodb className="w-5 h-5" /> },
    { skill: "GraphQL", image: <BiLogoGraphql className="w-5 h-5" /> },
    { skill: "AWS", image: <FaAws className="w-5 h-5" /> },
    { skill: "GCP", image: <BiLogoGoogleCloud className="w-5 h-5" /> },
];
export const frameworkSkills = [
    { skill: "React", image: <FaReact className="w-5 h-5" /> },
    { skill: "React Native", image: <FaReact className="w-5 h-5" /> },
    { skill: "NextJS", image: <SiNextdotjs className="w-5 h-5" /> },
    { skill: "Node", image: <FaNode className="w-5 h-5" /> },
    { skill: "Express", image: <SiExpress className="w-5 h-5" /> },
    { skill: "Tailwind", image: <BiLogoTailwindCss className="w-5 h-5" /> },
    { skill: "Django", image: <BiLogoDjango className="w-5 h-5" /> },
    { skill: "MaterialUI", image: <SiMui className="w-5 h-5" /> },
    { skill: "SwiftUI", image: <TbBrandSwift className="w-5 h-5" /> },
];
export const techSkills = [
    { skill: "Docker", image: <FaDocker className="w-5 h-5" /> },
    { skill: "Kubernetes", image: <BiLogoKubernetes className="w-5 h-5" /> },
    { skill: "Terraform", image: <SiTerraform className="w-5 h-5" /> },
    { skill: "Git", image: <FaGitAlt className="w-5 h-5" /> },
    { skill: "JIRA", image: <FaJira className="w-5 h-5" /> },
    { skill: "XCode", image: <SiXcode className="w-5 h-5" /> },
    { skill: "Android Studio", image: <SiAndroidstudio className="w-5 h-5" /> },
    { skill: "Figma", image: <BiLogoFigma className="w-5 h-5" /> },
];
export const certs = [
    {
        skill: "GCP Digital Cloud Leader",
        image: <BiLogoGoogleCloud className="w-5 h-5" />,
    },
    {
        skill: "GCP Professional Cloud Developer",
        image: <BiLogoGoogleCloud className="w-5 h-5" />,
    },
    { skill: "AWS Cloud Practitioner", image: <FaAws className="w-5 h-5" /> },
];

export const projects: Project[] = [
    {
        title: "Jahnel Group",
        dates: "June 2022 - Present",
        shortDescription: "Software Engineer",
        role: "Software Engineer | Schenectady, NY",
        description: (
            <>
                Lead full-stack developer for one of our clients where I have
                been able to add new features and refactor their web application
                to ensure proper scalability, as well as being able to support a
                50% uptick in the number of users and clients on their end. This
                is built in React, Typescript, Node, Nest.JS, and hosted on AWS.
                <br /> <br />
                Lead architect and full-stack developer on a client project
                where I built a new Typescript application to improve and speed
                up parts of their existing sales and engineering workflows. This
                project has allowed their existing processes to go from taking
                weeks to only a few seconds, transforming engineering and
                business critical logic into a simple button click.
                <br /> <br />
                Lead full-stack developer on an internal employee health and
                wellness tracking application. I built this project from the
                ground up, and designed and implemented it to support millions
                of data points while handling daily traffic from our entire
                company. Built with React, Typescript, Node, and PostgreSQL,
                hosted with GCP. <br /> <br />
                Led a team of first-year interns and new associate developers as
                they built a new internal application for Jahnel Group together.
            </>
        ),
        skills: [
            <FaReact className="w-5 h-5" />,
            <BiLogoTypescript className="w-5 h-5" />,
            <FaNode className="w-5 h-5" />,
            <FaAws className="w-5 h-5" />,
            <SiExpress className="w-5 h-5" />,
            <BiLogoMongodb className="w-5 h-5" />,
            <SiMui className="w-5 h-5" />,
            <BiLogoPostgresql className="w-5 h-5" />,
            <BiLogoTailwindCss className="w-5 h-5" />,
            <FaJira className="w-5 h-5" />,
            <div className="bg-current rounded-md px-1 py-[2px] flex items-center">
                <span className="dark:text-gray-800 text-[#ebebeb] font-bold text-xs ">
                    C
                </span>
            </div>,
        ],
        icon: JahnelGroup,
    },

    {
        title: "LTI (Logic Technology Inc.)",
        dates: "December 2024 - Present",
        shortDescription: "AI & Technology Strategy Consulting",
        role: "Software Engineer Consultant",
        description: (
            <>
                I currently lead the development of a new full-stack application
                for a manufacturing client, enabling real-time views and alerts
                into the critical infrastructure of their manufacturing plants.
                We estimate that this product will save our client upwards of 25
                million dollars a year in pure profit. Built with React,
                Typescript, MySQL, and AWS.
            </>
        ),
        skills: [
            <FaReact className="w-5 h-5" />,
            <BiLogoTypescript className="w-5 h-5" />,
            <TbBrandMysql className="w-5 h-5" />,
            <FaAws className="w-5 h-5" />,
            <SiExpress className="w-5 h-5" />,
        ],
        icon: LTI,
    },
    {
        title: "Morningline.ai",
        dates: "August 2024 - Present",
        shortDescription: "Lead Software Engineer",
        role: "Lead Software Engineer | Saratoga, NY",
        description: (
            <>
                At MLAI I am a lead software engineer reviewing all code changes
                to ensure quality and scalability, as well as completing new
                feature development to help our platform improve each day.
                <br /> <br />
                MorningLine.ai is a cutting-edge horse racing platform designed
                to provide advanced predictive analytics and data-driven
                insights for horse betting enthusiasts.
            </>
        ),
        skills: [
            <FaReact className="w-5 h-5" />,
            <BiLogoTypescript className="w-5 h-5" />,
            <BiLogoGoogleCloud className="w-5 h-5" />,
        ],
        icon: MorninglineAi,
    },
    {
        title: "Cocobolo Group",
        dates: "September 2022 - May 2023",
        shortDescription: "Software Engineer",
        role: "Software Engineer - Intern | Remote",
        description: (
            <>
                At Cocobolo Group/Perfecti, I was a software developer for the
                2022/2023 winter/spring term.
                <br /> <br />I worked primarily as the lead developer for the
                web development team where I built a business dashboard to
                coincide with two startup iOS applications in the restaurant
                space using React.JS, Express/Node.JS, Firebase, and Tailwind
                CSS. <br /> <br />I also worked on their two iOS applications
                using Swift/SwiftUI, and Firebase.
            </>
        ),
        skills: [
            <FaSwift className="w-5 h-5" />,
            <FaReact className="w-5 h-5" />,
            <BiLogoTypescript className="w-5 h-5" />,
            <BiLogoGoogleCloud className="w-5 h-5" />,
        ],
        icon: Cocobolo,
    },
    {
        title: "Quantbuilder.io",
        dates: "September 2024 - Present",
        shortDescription: "Trade Trade Trade",
        role: "Personal Project",
        description: (
            <>
                QuantBuilder.io is a custom-built no-code strategy builder for
                aspiring quantitative stock traders. Beginners are able to learn
                the basics of quantitative trading alongside building their own
                algorithmic strategies without writing a single line of code or
                having any finance background. Users can also share their
                strategies with the entire platform to learn together. Built
                with React/Django/GCP.
            </>
        ),
        skills: [
            <BiLogoDjango className="w-5 h-5" />,
            <BiLogoTypescript className="w-5 h-5" />,
            <FaReact className="w-5 h-5" />,
        ],
        icon: QuantBuilder,
    },
];
