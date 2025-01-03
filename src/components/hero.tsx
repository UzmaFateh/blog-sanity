import React from 'react'
import Image from "next/image";
import photo from "../../public/image/Little_Beach_House_Barcelona_Gallery_Crops_007.jpg"

const Hero = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font mt-4 md:mt-10">
  <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font lg:text-4xl   sm:text-3xl text-xl mb-4 font-medium text-gray-900 mt-6 md:mt-0">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a href='#comment1'>Leave a comment</a>
        </button>
      
      </div>
 
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6">
     
        <Image  className="object-cover object-center rounded"
                     src={photo}
                     alt="hero"
                     width={600}
                     height={500}></Image>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
