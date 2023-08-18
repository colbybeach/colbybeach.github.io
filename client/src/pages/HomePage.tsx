import { useState } from 'react';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';
import HorizontalLine from '../components/HorizontalLine';
import profilePic from '../assets/nobackground.png'
import { getExperiences, getProjects, getSkills } from '../api';
import { useQuery } from '@tanstack/react-query';
import SkillLevel from '../components/SkillLevel';
import ImageCarousel from '../components/ImageCarousel';
import ContactForm from '../components/ContactForm';
import github from '../assets/githubicon.png'
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function HomePage() {

    const skillCategories = ['Languages', 'Web and Database', 'Frameworks', 'Technologies'];
    const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);
    const [selectedExperience, setSelectedExperience] = useState<number>(2);
    const [selectedProject, setSelectedProject] = useState<number>(0);

    const validCategories: string[] = ['language', "web", 'framework', 'technology'];
    const { data: skillData }  = useQuery(["skillQuery"], () => getSkills());
    const { data: experienceData } = useQuery(["experienceQuery"], () => getExperiences());
    const { data: projectData } = useQuery(["projectQuery"], () => getProjects());


    return (
        <>
            <Navbar />

            <div className='sm:px-16 px-4 pt-32 pb-8'>

                <div className='w-full flex md:flex-row flex-col items-center justify-around '>
                    <div className='flex flex-col md:w-1/2 gap-8'>
                        <h1 className='md:text-7xl text-5xl md:mb-0 mb-10'>
                            <Typewriter
                                options={{
                                    strings: ['Who...me?'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>

                        <p className='md:flex hidden'>
                            Hello! My name is Colby Beach, a senior at Union College in Schenectady, NY,
                            studying both Computer Science and Economics! Since I was 8 years old I have had an
                            extreme passion for technology, and I have since learned various tools to create different
                            projects ranging from mobile applications, web apps, and even Chrome extensions! Please feel free
                            to reach out with the contact form below :)
                        </p>

                        <div className='flex gap-2'>
                            <button className='btn btn-primary w-fit md:flex hidden'>Contact Me</button>
                            <a className='btn btn-ghost w-fit md:flex hidden' href="https://github.com/colbybeach" target='_none'>Github</a>
                            <a className='btn btn-ghost w-fit md:flex hidden' href="https://github.com/https://www.linkedin.com/in/colby-beach-57b66017b/" target='_none'>LinkedIn</a>
                        </div>
                    </div>

                    <div className='w-1/2 flex justify-end'>
                        <img src={profilePic} className='w-[600px]' />
                    </div>
                </div>


                <HorizontalLine />

                <div className='md:hidden flex flex-col items-center w-full '>
                    <div className='flex mt-4 gap-4 mb-5'>
                        <button className='btn btn-primary w-fit '>Contact Me</button>
                        <a className='btn btn-ghost w-fit ' href="https://github.com/colbybeach" target='_none'>Github</a>
                        <a className='btn btn-ghost w-fit' href="https://github.com/https://www.linkedin.com/in/colby-beach-57b66017b/" target='_none'>LinkedIn</a>
                    </div>
                    <p className='text-sm'>
                        Hello! My name is Colby Beach, a senior at Union College in Schenectady, NY,
                        studying both Computer Science and Economics! Since I was 8 years old I have had an
                        extreme passion for technology, and I have since learned various tools to create different
                        projects ranging from mobile applications, web apps, and even Chrome extensions! Please feel free
                        to reach out with the contact form below :)
                    </p>

                </div>

                <span id="skills" />


                <div className='flex flex-col mt-12 gap-y-10 w-full'>
                    <h3 className='text-2xl font-bold'>Skills</h3>

                    <div className='lg:hidden'>
                        <select
                            className='btn btn-outline w-full'
                            value={selectedSkillIndex}
                            onChange={(e) => setSelectedSkillIndex(Number(e.target.value))}
                        >
                            {skillCategories.map((category, index) => (
                                <option key={index} value={index}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className='shadow-2xl bg-neutral flex flex-col gap-y-5 p-10 mt-10 rounded-xl'>
                            {skillData && (
                                <>
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="lead" />
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="proficient" />
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="knowledgeable" />
                                </>
                            )}
                        </div>
                    </div>


                    <div className='hidden lg:flex justify-between w-full'>
                        {/* Stacked sections for larger screens */}
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
                            {skillData && (
                                <>
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="lead" />
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="proficient" />
                                    <SkillLevel data={skillData[validCategories[selectedSkillIndex]]} level="knowledgeable" />
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <span id="experience" />
                <div className='flex flex-col gap-y-10 mt-20'>
                    <h3 className='text-2xl font-bold'>Experience</h3>

                    <select
                        className='btn btn-outline w-full lg:hidden'
                        value={selectedExperience}
                        onChange={(e) => {
                            setSelectedExperience(Number(e.target.value))
                            console.log(e.target.value)
                        }}
                    >
                        <option value={2} key={2}>Jahnel Group (2023)</option>
                        <option value={0} key={0}>Cocobolo Group</option>
                        <option value={1} key={1}>Jahnel Group (2022)</option>
                        <option value={3} key={3}>iComputers</option>
                    </select>

                    {experienceData ?
                        <div className='flex lg:justify-between w-full lg:flex-row flex-col items-center gap-y-10'>
                            <div className='flex flex-col gap-y-2 lg:w-1/2'>
                                <h4 className='text-lg'>{experienceData[selectedExperience].experience} ({experienceData[selectedExperience].dates})</h4>
                                <p className='font-light text-sm'>
                                    {experienceData[selectedExperience].description}
                                </p>
                            </div>
                            <ImageCarousel images={experienceData[selectedExperience].images} />
                        </div>
                        : ""}


                    <div className='lg:flex w-full justify-between hidden'>
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

                    <div className='flex flex-col items-center'>


                        <div className="tabs mb-10">
                            <button className={`tab tab-bordered ${selectedProject === 1 ? 'tab-active' : ''}`} onClick={() => setSelectedProject(1)}>colbybeach.com</button>
                            <button className={`tab tab-bordered ${selectedProject === 0 ? 'tab-active' : ''}`} onClick={() => setSelectedProject(0)}>FlickPick</button>
                        </div>

                        {projectData ?
                            <div className='flex lg:justify-between w-full lg:flex-row flex-col items-center gap-y-10'>
                                <ImageCarousel images={projectData[selectedProject].images} />
                                <div className='flex flex-col gap-y-2 lg:w-1/2 lg:text-end'>
                                    <h4 className='text-lg'>{projectData[selectedProject].project} ({projectData[selectedProject].dates})</h4>
                                    <p className='font-light text-sm'>
                                        {projectData[selectedProject].description}
                                    </p>
                                </div>
                            </div>
                            : ""}

                        <a href="https://github.com/colbybeach" target='_none' className='btn btn-primary w-fit mt-10'>
                            <img src={github} className='w-8' />
                            View GitHub
                        </a>
                    </div>
                </div>


                <div className='flex flex-col mt-20 mb-16 gap-y-10' id="contact">
                    <h3 className='text-2xl font-bold'>Contact Me</h3>
                    <ContactForm />
                </div>


            </div >

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </>
    );
}

