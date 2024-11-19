import { TipoBtnPgs } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function BtnPgs({Icon, texto, link}: TipoBtnPgs) {
  return (
    <div className='botoes'>
        <Link href={link} className='flex gap-1 border-2 border-gray-400 px-4 py-1 text-xl text-gray-500 rounded-2xl hover:border-blue-400'>
            <Icon className='relative top-1'/>
            <h6>{texto}</h6>
        </Link>
    </div>
  )
}
