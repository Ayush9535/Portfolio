import React from 'react';
import ProfileAyush from "../assets/ayushprofile.jpg"

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-inherit items-center py-16 px-32">
        <div className='w-[30%] px-10 flex flex-col items-center justify-center'>
            <div className='w-60 h-60 rounded'>
                <img src={ProfileAyush} alt="profile" className="rounded-full"/>
            </div>
            <div className='bg-neutral-900 text-center px-10 py-5 rounded-md -mt-5 w-[40vw] lg:w-[18vw]'>
                <h2 className='text-white text-2xl mb-2'>Ayush Ghodke</h2>
                <div className='flex items-center justify-center gap-2'>
                <button className='group relative'>
                    <a href="https://www.linkedin.com/in/ayush-ghodke-8aab941bb/" target='_blank'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#00FF29] drop-shadow-green hover:scale-110 duration-200 hover:text-blue-500'><g id="SVGRepo_bgCarrier" stroke-width="0" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 16V11M12 16V14M12 11V14M16 16V14C16 12.5 15.5 11 14 11C12.5 11 12 12.5 12 14M7.99 8H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#00FF29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span class="absolute top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">LinkedIn<span>
                        </span></span></a>

                </button>

                <button className='group relative'>
                <a href="https://github.com/Ayush9535" target='_blank'>
                    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class=" text-[#00FF29] drop-shadow-green w-6 hover:scale-110 duration-200 "><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span class="absolute top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">GitHub<span>
                        </span></span></a>
                </button>

                <button className='group relative'>
                <a href="https://www.instagram.com/ayushghodke22/" target='_blank'>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#00FF29"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#00FF29"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#00FF29"></path> </g></svg>
                    <span class="absolute top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">Instagram<span>
                        </span></span></a>
                </button>
                </div>
            </div>
        </div>
        <div className='text-gray-300 w-[80%] lg:px-20 px-10 mt-20 lg:mt-0'>
            <h2 className='text-xl'>/about</h2>
            <h1 className='text-4xl text-[#00FF29] drop-shadow-green'>Get to Know Me !!</h1>
            <p className='text-md my-8'>Hello! I'm Ayush, an Enthusiastic Aspiring Learner diving headfirst into the exciting world of web development. My journey in this field is fueled by a passion for creating engaging and visually appealing web experiences that captivate users. Through dedication, practice, and perseverance, I aspire to evolve into a skilled full-stack developer, contributing to meaningful projects and making a positive impact on the digital world. Whether it's developing innovative solutions or optimizing existing systems, I am committed to delivering excellence in every project I undertake.</p>
        </div>
    </div>
  );
};

export default AboutSection;