import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='h-screen lg:pr-28'>
      <h3 className='title py-2.5 lg:pt-28 lg:static sticky top-0 z-40 backdrop-blur-lg lg:backdrop-blur-0'>Contact</h3>
      <form action="" className="text-start mx-auto my-10">
        <div className="flex flex-col lg:flex-row gap-5 w-full ">
        <div className="lg:w-[50%]" >
          <label>Your Name</label>
          <input type="text" required placeholder="Enter your name"  className="border-b-2 focus-within:border-b-black transition-colors duration-500 bg-transparent  outline-none block h-12 w-full"/>
        </div>
        <div className="lg:w-[50%]" >
          <label>Your Email</label>
          <input type="text" required placeholder="Enter your emial address"  className="border-b-2 focus-within:border-b-black transition-colors duration-500 bg-transparent  outline-none block h-12 w-full"/>
        </div>
        </div>
        <div className="mt-5">
        <label>Your Message</label>
        <textarea placeholder='Enter your message' className="border-b-2 mt-3 focus-within:border-b-black transition-colors duration-500 bg-transparent  block w-full outline-none " rows="4"/>
        </div>
        <button className="border-2 my-5 w-40 py-4 rounded">
            Send Message
          </button>
      </form>
    </div>
  )
}
