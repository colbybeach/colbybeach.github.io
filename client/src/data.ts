export interface Skill {
  skill: string; 
  image: string; 
}

export interface Project {
  title: string;
  dates: string;
  role: string;
  shortDescription: string;
  description: string;
  icon: string;
  skills: string[]
}


export const skillCat = [
  "Languages",
  "Web & Database",
  "Frameworks",
  "Technologies",
  "Certifications",
];

export const languageSkills = [
  {skill: "Javascript", image: ""}, 
  {skill: "Typescript", image: ""},
  {skill: "Python", image: ""},
  {skill: "C", image: ""},
  {skill: "Java", image: ""},
  {skill: "Swift", image: ""},
]

export const webSkills = [
  {skill: "HTML", image: ""}, 
  {skill: "CSS", image: ""},
  {skill: "PostgreSQL", image: ""},
  {skill: "MySQL", image: ""},
  {skill: "MongoDB", image: ""},
  {skill: "GraphQL", image: ""},
  {skill: "AWS", image: ""},
  {skill: "GCP", image: ""},
]
export const frameworkSkills = [
  {skill: "React", image: ""}, 
  {skill: "React Native", image: ""},
  {skill: "NextJS", image: ""},
  {skill: "Node", image: ""},
  {skill: "Express", image: ""},
  {skill: "Tailwind", image: ""},
  {skill: "Django", image: ""},
  {skill: "MaterialUI", image: ""},
  {skill: "SwiftUI", image: ""},
]
export const techSkills = [
  {skill: "Docker", image: ""}, 
  {skill: "Kubernetes", image: ""},
  {skill: "Terraform", image: ""},
  {skill: "Git", image: ""},
  {skill: "JIRA", image: ""},
  {skill: "XCode", image: ""},
  {skill: "Android Studio", image: ""},
  {skill: "Figma", image: ""},
]
export const certs = [
  {skill: "GCP Digital Cloud Leader", image: ""}, 
  {skill: "GCP Professional Cloud Developer", image: ""},
  {skill: "AWS Cloud Practitioner", image: ""},
]

export const projects: Project[] = [{
  title: "Jahnel Group",
  dates: "June 2022 - Present",
  shortDescription: "Web Consutling",
  role: "Software Engineer",
  description: "",
  skills: [],
  icon: ""
}]