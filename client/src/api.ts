import axios from "axios";

// Models

export interface Skill {
  skill: string; 
  level: string; 
  image: string; 
  category: string; 
}
interface Experience {
  experience: string;
  dates: string;
  description: string;
  images: string[];
}


export const getSkills = async () => {
    const res = await axios.get(`/skills`);
    return res.data as [Skill[]];
  };
  

export const getExperiences = async () => {
  const res = await axios.get(`/experience`);
  return res.data as Experience[];
};


