import React from 'react'
import Image from 'next/image'
import {client} from "../../../sanity/lib/client"
import { Blog } from '@/app/page'


interface Params {
    params:{
        slug:string
    }
}

const BolgPost =async (params:Params) => {

    const {slug} = params.params
      const data:Blog =  await client.fetch(`*[_type == "blog" && slug.current == $slug] {
        title,
          description,
         "slug":slug.current,
          "imageUrl": image.asset->url
      }[0]`,{slug})
        
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

      <Image className="lg:w-4/6 md:w-4/6 sm:w-5/6 w-6/6 mb-10 object-cover object-center rounded"
             src={data.imageUrl}
             alt={data.title}
             width={500}
             height={400}></Image>
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {data.title}
      </h1>
      <p className="mb-8 leading-relaxed">
   {data.description}
      </p>
      
    </div>
  </div>
</section>




    </div>

    
  )
}

export default BolgPost


