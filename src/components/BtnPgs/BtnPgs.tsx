import { TipoBtnPgs } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function BtnPgs({Icon, texto, link}: TipoBtnPgs) {
  return (
    <div className='botoes'>
        <Link href={link}>
            <Icon />
            <h6>{texto}</h6>
        </Link>
    </div>
  )
}
