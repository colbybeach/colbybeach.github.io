import { useState } from 'react';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';
import HorizontalLine from '../components/HorizontalLine';
import profilePic from '../assets/nobackground.png'
import { getExperiences, getSkills } from '../api';
import { useQuery } from '@tanstack/react-query';
import SkillLevel from '../components/SkillLevel';
import ImageCarousel from '../components/ImageCarousel';

export default function HomePage() {

    const skillCategories = ['Languages', 'Web and Database', 'Frameworks', 'Technologies'];
    const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);
    const [selectedExperience, setSelectedExperience] = useState<number>(2);

    const validCategories = ['language', "web", 'framework', 'technology'];
    const { data: skillData } = useQuery(["skillQuery"], () => getSkills());
    const { data: experienceData } = useQuery(["experienceQuery"], () => getExperiences());

    return (
        <>
            <Navbar />

            <div className='px-16 py-8'>

                <div className='w-full flex md:flex-row flex-col items-center justify-around '>
                    <div className='flex flex-col w-1/2 gap-8'>
                        <h1 className='text-7xl'>
                            <Typewriter
                                options={{
                                    strings: ['Who...me?'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>

                        <p>
                            Hello! My name is Colby Beach, a senior at Union College in Schenectady, NY,
                            studying both Computer Science and Economics! Since I was 8 years old I have had an
                            extreme passion for technology, and I have since learned various tools to create different
                            projects ranging from mobile applications, web apps, and even Chrome extensions! Please feel free
                            to reach out with the contact form below :)
                        </p>

                        <button className='btn btn-primary w-fit'>Contact Me</button>

                    </div>

                    <div className='w-1/2 flex justify-end'>
                        <img src={profilePic} className='w-[600px]' />
                    </div>
                </div>


                <HorizontalLine />



                <div className='flex flex-col mt-12 gap-y-10 w-full'>

                    <h3 className='text-2xl font-bold'>Skills</h3>

                    <div className='flex justify-between w-full'>

                        <div className='shadow-xl bg-neutral flex flex-col justify-around p-10 w-2/5 rounded-xl'>
                            Skill Categories
                            {skillCategories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`btn ${selectedSkillIndex === index ? 'btn-primary' : 'btn-outline'}`}
                                    onClick={() => setSelectedSkillIndex(index)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className='shadow-2xl bg-neutral flex flex-col gap-y-5 p-10 w-1/2 rounded-xl'>
                            {skillData &&
                                <>
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="knowledgeable" />
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="proficient" />
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="lead" />
                                </>
                            }
                        </div>

                    </div>
                </div>


                <div className='flex flex-col gap-y-10 mt-20'>
                    <h3 className='text-2xl font-bold'>Experience</h3>

                    {experienceData ?
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col gap-y-2 w-1/2'>
                                <h4 className='text-lg'>{experienceData[selectedExperience].experience} ({experienceData[selectedExperience].dates})</h4>
                                <p className='font-light text-sm'>
                                    {experienceData[selectedExperience].description}
                                </p>
                            </div>
                            <ImageCarousel images={experienceData[selectedExperience].images} />
                        </div>
                        : ""}

                    <div className='flex w-full justify-between'>
                        <button
                            className={`btn ${selectedExperience === 2 ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setSelectedExperience(2)}
                        >
                            Jahnel Group (2023)
                        </button>
                        <button
                            className={`btn ${selectedExperience === 0 ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setSelectedExperience(0)}
                        >
                            Cocobolo Group
                        </button>
                        <button
                            className={`btn ${selectedExperience === 1 ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setSelectedExperience(1)}
                        >
                            Jahnel Group (2022)
                        </button>
                        <button
                            className={`btn ${selectedExperience === 3 ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setSelectedExperience(3)}
                        >
                            iComputers
                        </button>
                    </div>
                </div>


                <div className='flex flex-col mt-20 gap-y-10'>
                    <h3 className='text-2xl font-bold'>Personal Projects</h3>
                    
                </div>



            </div >
        </>
    );
}

