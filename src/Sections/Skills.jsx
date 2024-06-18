import React from 'react'
import MongoDb from '../assets/mongodb.svg'
import Git from '../assets/git.svg'
import Tailwind from '../assets/tailwind-css.svg'
import Postman from '../assets/postman.svg'

const Skills = () => {

    let skills = [
        {
            name: "HTML",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/html5.svg"
        },
        {
            name: "CSS",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/css3.svg"
        },
        {
            name: "JavaScript",
            icon: "https://abrudz.github.io/logos/JS.svg"
        },
        {
            name: "React",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg"
        },
        {
            name: "Node.js",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/frameworks/nodejs.svg"
        },
        {
            name: "Express",
            icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
        },
        {
            name: "npm",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/npm.svg"
        },
        {
            name: "MongoDB",
            icon: MongoDb
        },
        {
            name: "MySql",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/mysql.svg"
        },
        {
            name: "BootStrap",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/boostrap.svg"
        },
        {
            name: "Tailwind",
            icon : Tailwind
        },
        {
            name: "Python",
            icon: "https://abrudz.github.io/logos/Python.svg"
        },
        {
            name: "C++",
            icon: "https://abrudz.github.io/logos/CPlusPlus.svg"
        },
        {
            name: "Git",
            icon: Git
        },
        {
            name: "Postman",
            icon : Postman
        },
        {
            name: "VSCode",
            icon: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/62487087dc4f4f5efee637addbc67a16dd374bf6/text%20editors/vscode.svg"
        }
    ]

    return (
        <div className='w-full flex flex-col bg-inherit items-center text-center py-36'>
            <div className='w-[40%] m-auto'>
                <h2 className='text-xl text-gray-200'>/skills</h2>
                <h1 className='text-4xl text-[#00FF29] drop-shadow-green mt-3'>The Skills and Technologies <br />
                    I am Good at</h1>
                <div className='w-full mt-16'>
                    <div className='flex flex-wrap justify-center gap-6'>
                        {skills.map((skill, index) => (
                            <div key={index} className='flex flex-col justify-center items-center'>
                                <div>
                                    <img src={skill.icon} width="50px" height="50px"/>
                                </div>
                                {/* <h1 className='text-gray-300'>{skill.name}</h1> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Skills
