import React from 'react'
import { Bounce } from 'react-awesome-reveal'

export default function Skill() {
  return (
    <div id='skill' className='lg:pr-28'>
      <h3 className='title py-2.5 lg:pt-28 z-40 lg:static sticky top-0 backdrop-blur-lg lg:backdrop-blur-0'>Skills</h3>
      <section className="flex justify-between gap-10 text-center flex-wrap pb-28">
        <Bounce cascade damping={0.1}>
          <div className="">
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=20909&format=png"
              alt=""
            />
            <p>HTML5</p>
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=21278&format=png"
              alt=""
            />
            CSS3
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=108784&format=png"
              alt=""
            />
            JavsScript
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=123603&format=png"
              alt=""
            />
            React
          </div>
          <div>
            <img
              className="w-16 p-1"
              src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
              alt=""
            />
            Next.Js
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
              alt=""
            />
            Redux
          </div>
          <div>
            <img
              className="p-2 h-16"
              src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
              alt=""
            />
            Re-Query
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=20906&format=png"
              alt=""
            />
            Git
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=84710&format=png"
              alt=""
            />
            Bootstrap
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=QBqFNfPPB2Kx&format=png"
              alt=""
            />
            SASS
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png"
              alt=""
            />
            Tailwind
          </div>
          <div>
            <img
              className="w-16"
              src="https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png"
              alt=""
            />
            Figma
          </div>
          {/* <div>
        <img className="w-16" src="https://img.icons8.com/?size=512&id=0Dp1WS8Zuq8N&format=png" alt="" />
        Web Performance
      </div> */}
        </Bounce>
      </section>
    </div>
  )
}
