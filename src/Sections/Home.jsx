import React from 'react';
import Navbar from '../Component/Navbar';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center min-h-[87vh] px-10 md:px-0">
                <h1 className="text-white mb-4">
                    <h3 className='lg:text-2xl mb-2 text-xl'>Hi 👋 I am</h3>
                    <h1 className='lg:text-6xl text-5xl'>AYUSH GHODKE</h1>
                </h1>
                <p className="lg:text-lg text-md text-white mb-8">
                    <p className='text-[#00FF29] lg:text-2xl text-xl mb-4 drop-shadow-green'>MERN STACK DEVELOPER</p>
                    Passionate About Code, Dedicated to Excellence <br />
                    in Web Development <br />
                    Let's build something amazing! 🚀
                </p>
                <div className="flex justify-center md:space-x-4 md:flex-row flex-col items-center">
                    <a href="https://github.com/Ayush9535" target='_blank'><button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#299c3c] px-6 font-medium text-neutral-200 duration-500"><div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Go to Github</div><div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button></a>

                    <a href="https://drive.google.com/file/d/1patu--mEv07LMoP0bDCWTH6Il5WohVqS/view" target="_blank">
                    <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gray-700 px-6 font-medium text-neutral-200 duration-500 mt-4 md:m-0"><div class="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">Resume</div><div class="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;
