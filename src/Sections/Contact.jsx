import React from 'react';

const ContactSection = () => {
    return (
        <div id="contact" className="w-full flex flex-col bg-inherit items-center text-center py-36 px-40">
            <h2 className='text-xl text-gray-200'>/contact</h2>
            <h1 className='text-4xl text-[#00FF29] drop-shadow-green mt-3'>Reach Out to Me</h1>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center mt-20">
                    <div className="w-[50%] mb-8 md:mb-0 flex justify-center items-center">
                        <form className='w-[60%]'>
                            <div className="mb-4 text-left">
                                <label htmlFor="name" className="text-gray-200 block font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border border-gray-400 p-2 rounded bg-inherit w-full text-gray-200"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4 text-left">
                                <label htmlFor="email" className="text-gray-200 block font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-gray-400 p-2 rounded bg-inherit w-full text-gray-200"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4 text-left">
                                <label htmlFor="message" className="text-gray-200 block font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="border border-gray-400 p-2 rounded bg-inherit w-full text-gray-200"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#00ff2ab6] text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2 text-left pl-32 text-gray-200">
                        <h3 className="text-4xl mb-4 text-[#00FF29]">Contact Information</h3>
                        <p className="mb-2 ml-10">
                            <span className="font-bold mr-3">Email:</span> ghodkeayush22@gmail.com
                        </p>
                        <p className="mb-2 ml-10">
                            <span className="font-bold mr-3">Phone:</span> +91 9067469535
                        </p>
                        <p className='ml-10'>
                            <span className="font-bold mr-3">Address:</span> Pune, Maharashtra , India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;