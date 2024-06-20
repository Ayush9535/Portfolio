import React from 'react';


const ProjectCard = ({el}) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center px-8 mb-10 w-full'>
        <div className='w-[100%] md:w-[60%] md:ml-20'>
            <div className='w-full md:w-[75%] h-[80%] border-4 border-[#00FF29] rounded-md bg-inherit'>
                <img src={el.image} alt={el.title} className="w-[100%] h-[100%] rounded-md relative -top-4 left-4"/>
            </div>
        </div>

        {/* <div className="flex items-center justify-start w-[60%]"> */}
        <div className="flex items-start justify-center flex-col rounded-lg py-6 w-full pb-20 md:pb-0">
            <h1 className="text-3xl font-bold mb-4 text-white">{el.title}</h1>
            <p className="text-white mb-6">
            {el.desc}
            </p>
            <div className="flex flex-wrap text-xs gap-3 md:space-x-3">
                {el.tags.map((tag,i) => {
                    return  <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                        {tag}
                    </button>
                })}
            </div>
            <div className="flex justify-start space-x-4 mt-6 gap-6">
                <a href={el.previewLink} target="_blank">
                <button className='group relative flex items-center text-white gap-2'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#00FF29" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#00FF29" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <span class="absolute top-12 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">Preview<span>
                        </span></span>
                    Preview
                </button></a>
                <a href={el.codeLink} target="_blank">
                <button className='group relative flex items-center text-white gap-2'>
                    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class=" text-[#00FF29] w-6 hover:scale-110 duration-200 "><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span class="absolute top-12 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100 text-black">GitHub<span>
                        </span></span>Code
                </button></a>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;