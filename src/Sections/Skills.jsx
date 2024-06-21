import React from 'react'
import MongoDb from '../assets/mongodb.svg'
import Git from '../assets/git.svg'
import Tailwind from '../assets/tailwind-css.svg'
import Postman from '../assets/postman.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import npm from '../assets/npm.svg'
import mysql from '../assets/mysql.svg'
import bootstrap from '../assets/bootstrap.svg'
import vscode from '../assets/vscode.svg'

const Skills = () => {

    let skills = [
        {
            name: "HTML",
            icon: html
        },
        {
            name: "CSS",
            icon: css
        },
        {
            name: "JavaScript",
            icon: "https://abrudz.github.io/logos/JS.svg"
        },
        {
            name: "React",
            icon: react
        },
        {
            name: "Node.js",
            icon: nodejs
        },
        {
            name: "Express",
            icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
        },
        {
            name: "npm",
            icon: npm 
        },
        {
            name: "MongoDB",
            icon: MongoDb
        },
        {
            name: "MySql",
            icon: mysql
        },
        {
            name: "BootStrap",
            icon: bootstrap
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
            icon: vscode
        }
    ]

    return (
        <div className='w-full flex flex-col bg-inherit items-center text-center py-36'>
            <div className='w-[90%] md:w-[40%] m-auto'>
                <h2 className='text-xl text-gray-200'>/skills</h2>
                <h1 className='text-4xl text-[#00FF29] drop-shadow-green mt-3'>The Skills and Technologies <br />
                    I am Good at</h1>
                <div className='w-full mt-16 flex justify-center items-center'>
                    <div className='w-[80%] md:w-full flex flex-wrap justify-center gap-6'>
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
