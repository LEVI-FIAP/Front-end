import React from 'react'
import problema from "@/images/problemas.jpg"
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='notFound flex flex-col text-center text-2xl py-10'>
      <div className='flex justify-center'>
        <Image src={problema} alt="problema" className='h-105 w-105'/>

      </div>
    
      <h1> ERROR 404 - NotFound</h1>
      <h2>Não foi possivel encontrar essa página.</h2>
    </div>
  )
}