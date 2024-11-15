import React from 'react'

export default function Relatorio({params}:{params:{id:number}}) {
  return (
    <main>
        <h1>Relatorio {params.id}</h1>
    </main>
  )
}
