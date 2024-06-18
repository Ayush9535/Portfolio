import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full min-h-[10vh] text-white flex justify-between lg:px-40 px-16 py-6 items-center'>
            <h2 className='text-[#00FF29] text-2xl font-bold'>&lt; <span className='text-white'>Ayush</span> /&gt;</h2>
            <div className='flex gap-5 items-center'>
                <button className='group relative'>
                <a href="https://www.linkedin.com/in/ayush-ghodke-8aab941bb/" target='_blank'><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#00FF29] hover:scale-110 duration-200 hover:text-blue-500'><g id="SVGRepo_bgCarrier" stroke-width="0" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 16V11M12 16V14M12 11V14M16 16V14C16 12.5 15.5 11 14 11C12.5 11 12 12.5 12 14M7.99 8H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#00FF29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span class="absolute top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">LinkedIn<span>
                        </span></span></a>

                </button>

                <button className='group relative'>
                <a href="https://github.com/Ayush9535" target='_blank'>
                    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class=" text-[#00FF29] w-8 hover:scale-110 duration-200 "><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span class="absolute top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">GitHub<span>
                        </span></span></a>
                </button>
            </div>
        </div>
    )
}

export default Navbar
