import { UserIdParams } from '@/types'
import React from 'react'

export default function Usuario({params}:UserIdParams) {
  const userId = Number(params.userId)
  return (
    <main>
        <h1>Usuario {userId}</h1>
    </main>
  )
}
