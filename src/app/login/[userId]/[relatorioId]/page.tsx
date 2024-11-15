import { RelatorioIdParams } from '@/types'
import React from 'react'

export default function Relatorio({params}:RelatorioIdParams) {
  const relatorioId = Number(params.relatorioId)
  return (
    <main>
        <h1>Relatorio {relatorioId}</h1>
    </main>
  )
}
