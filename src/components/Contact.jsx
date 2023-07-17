import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='h-screen pt-28'>
      <h3 className='title'>Contact</h3>
      <form action="" className="text-start w-[600px] mx-auto my-10">
        <div className="flex gap-5 w-full ">
        <div className="w-[50%]" >
          <label>Your Name</label>
          <input type="text" required placeholder="Enter your name"  className="border-b-2 focus-within:border-b-black transition-colors duration-500 bg-transparent  outline-none block h-12 w-full"/>
        </div>
        <div className="w-[50%]" >
          <label>Your Email</label>
          <input type="text" required placeholder="Enter your emial address"  className="border-b-2 focus-within:border-b-black transition-colors duration-500 bg-transparent  outline-none block h-12 w-full"/>
        </div>
        </div>
        <div className="mt-5">
        <label>Your Message</label>
        <textarea className="border-b-2 focus-within:border-b-black transition-colors duration-500 bg-transparent  block w-full outline-none " rows="4"/>
        </div>
        <button className="bg-black my-5 text-white w-40 py-4 rounded">
            Send Message
          </button>
      </form>
    </div>
  )
}
