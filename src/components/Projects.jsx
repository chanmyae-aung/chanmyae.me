import React from 'react'
import { projects } from '../constants/data'

export default function Projects() {
  return (
    <div id='project' className=' lg:pr-28'>
      <h3 className='title py-2.5 lg:pt-28 lg:static sticky top-0 z-40 backdrop-blur-lg lg:backdrop-blur-0'>Projects</h3>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0  flex-wrap justify-between transition-all duration-700 pb-28">
        {projects.map((i) => {
          return(
            <div key={i.id} className="group lg:w-[48.5%] lg:mb-4 hover:w-full hover:order-first transition-all duration-500 h-fit overflow-hidden rounded-lg relative">
          <img
            className=""
            src={i.image}
            alt=""
          />
          <div className="w-full flex flex-col justify-between text-center group-hover:opacity-100 opacity-0 h-full absolute left-0 top-0 bg-transparent backdrop-blur transition duration-500">
            <div className="group-hover:translate-y-7 duration-500 transition-all -translate-y-2">
              <h1>{i.title}</h1>
              <p>{i.tech}</p>
            </div>
            <div className="group-hover:-translate-y-7 duration-500 transition-all translate-y-2">
              <button>{i.preview}</button>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}
