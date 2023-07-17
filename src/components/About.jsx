import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function About() {
  return (
    <div id='about' className='lg:pr-28'>
      <Slide>
      <h3 className='title py-2.5 lg:pt-28 lg:static sticky top-0 backdrop-blur-lg lg:backdrop-blur-0'>
        About
      </h3>
      </Slide>
      <img className='h-80 py-5 mx-auto' src="http://funto.designing-world.com/img/bg-img/u4.jpg" alt="" />
      <div className='pb-28'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat voluptates omnis consequatur reiciendis nam. Quos maiores rem nesciunt vero? Sapiente, enim velit a aliquid dignissimos voluptates repellat cumque dolor!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat voluptates omnis consequatur reiciendis nam. Quos maiores rem nesciunt vero? Sapiente, enim velit a aliquid dignissimos voluptates repellat cumque dolor!</p>
      </div>
    </div>
  )
}
