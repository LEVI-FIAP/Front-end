import React from 'react'

export default function Usuario({params}:{params:{id:number}}) {
  return (
    <main>
        <h1>Usuario {params.id}</h1>
    </main>
  )
}
