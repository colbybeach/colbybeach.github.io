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

interface Project {
  project: string;
  dates: string;
  description: string;
  images: string[];
}

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const getSkills = async () => {
    const res = await axios.get(`/skills`);
    return res.data as {[key: string]: Skill[]};
  };
  

export const getExperiences = async () => {
  const res = await axios.get(`/experience`);
  return res.data as Experience[];
};

export const getProjects = async () => {
  const res = await axios.get(`/project`);
  return res.data as Project[];
};


export const addContact = async (contact: ContactData) => {
    const res = await axios.post('/contact/send', contact);
    return res.data;
};
