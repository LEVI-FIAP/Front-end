import React from 'react'
import Carrara from '@/img/carrara.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src={Carrara} alt='Augustinho'/>
      <h1>Página Principal</h1>
    </main>
  )
}
