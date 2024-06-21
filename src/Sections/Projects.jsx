import React from 'react'
import ProjectCard from '../Component/ProjectCard'
import TastyTales from '../assets/tastytales.png'
import Chatio from '../assets/chatio.png'
import Dopahiya from "../assets/Dopahiya.png"

const Projects = () => {

  let project = [
    {
      title: "DoPahiya - Spec Store of Bikes",
      desc : "Dopahiya is a comprehensive bike specification store that offers detailed information and personalized recommendations for various bike models. Users can compare bikes side-by-side, create profiles to track their favorite bikes, and get list of bikes suitable for them by some questionaire. The platform includes robust authentication, supports CRUD operations for managing bike data, and leverages the Context API to optimize performance. Dopahiya is designed to provide a seamless and engaging experience for bike enthusiasts.",
      tags: ["React", "Node", "Express", "MongoDB", "Context API" , "CRUD"],
      previewLink : "https://dopahiya.netlify.app/",
      codeLink : "https://github.com/kalviumcommunity/S56_Ayush_Capstone_DoPahiya",
      image: Dopahiya
    },
    {
      title: "Chat.io - Realtime Chat Application",
      desc : "Chat.io is an innovative messaging platform designed with a focus on robust functionality to facilitate seamless communication. Utilizing socket.io, it enables users to chat in rooms with multiple participants in real time. I have focused on making the backend and not the frontend so it is quite basic. This Project was completely made for learning purpose.",
      tags: ["React", "Tailwind Css", "Nodejs", "Express", "Mongodb", "Socket.io"],
      previewLink : "https://socket-io-e3s4.onrender.com",
      codeLink : "https://github.com/Ayush9535/Socket.io",
      image: Chatio
    },
    {
      title: "Tasty Tales - Recipe Ingredients",
      desc : "Tasty Tales is a website where user get to see ingredients of various delicious dishes. It has Today's Special Section which shows different dish on every time. This project involves API Calls and API Testing majorly.",
      tags: ["HTML", "CSS", "JS" , "API" , "POSTMAN"],
      previewLink : "https://tasty-tales.netlify.app/",
      codeLink : "https://github.com/Ayush9535/tastyTales-Recipe-Website-FEWDCA3",
      image: TastyTales
    }
  ]

  return (
    <div className='w-full flex flex-col bg-inherit items-center py-16 px-8 md:px-20'>
        <h2 className='text-xl text-gray-200'>/projects</h2>
        <h1 className='text-3xl text-center text-[#00FF29] drop-shadow-green mt-3'>Things I'vs built so far</h1>
        <div className='mt-20 md:mb-10'>
            {project.map((el,i) => {
              return <ProjectCard el={el} key={i}/>
            })}
        </div>
        <a href="https://github.com/Ayush9535" target='_blank'>
        <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#299c3c] px-6 font-medium text-neutral-200 duration-500"><div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">View More on Github</div><div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button></a>
    </div>
  )
}

export default Projects
