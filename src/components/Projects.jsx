import React from 'react'

export default function Projects() {
  return (
    <div id='project' className='pt-28 h-screen'>
      <h3 className='title'>Projects</h3>
      <div className="flex gap-5 px-10">
        <div className="group w-[50%] h-fit overflow-hidden rounded-lg relative">
          <img
            className=""
            src="https://yevgenysim-turkey.github.io/incline/assets/img/51.png"
            alt=""
          />
          <div className="w-full flex flex-col justify-between text-center group-hover:opacity-100 opacity-0 h-full absolute left-0 top-0 bg-transparent backdrop-blur transition duration-500">
            <div className="group-hover:translate-y-10 duration-500 transition-all -translate-y-2">
              <h1>Title</h1>
              <p>tech stack</p>
            </div>
            <div className="group-hover:-translate-y-10 duration-500 transition-all translate-y-2">
              <button>Live preview</button>
            </div>
          </div>
        </div>
        <div className="group w-[50%] h-fit overflow-hidden rounded-lg relative">
          <img
            className=""
            src="https://yevgenysim-turkey.github.io/incline/assets/img/51.png"
            alt=""
          />
          <div className="w-full flex flex-col justify-between text-center group-hover:opacity-100 opacity-0 h-full absolute left-0 top-0 bg-transparent backdrop-blur transition duration-500">
            <div className="group-hover:translate-y-10 duration-500 transition-all -translate-y-2">
              <h1>Title</h1>
              <p>tech stack</p>
            </div>
            <div className="group-hover:-translate-y-10 duration-500 transition-all translate-y-2">
              <button>Live preview</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
