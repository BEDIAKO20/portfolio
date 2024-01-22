import React from 'react'
import Typewriter from '../../components/Typewriter/Typewrite'
import myImage  from "../../components/assets/kofiimage-removebg-preview.png"

function Home() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='ml-10 mt-11'>
          <h3 className='text-3xl font-semibold text-gray-500 shadow-md'>
       
    <Typewriter text="I am Bediako-Mensah Kofi Boadi" delay={300} infinite/>
          </h3>
        </div>
    <div className='' style={{marginLeft:"27%"}}>
    <div className='bg-yellow-200 rounded-full w-96 h-96'>
          <img src={myImage}/>
        </div>
    </div>
      </div>
    </>
  )             
}

export default Home
