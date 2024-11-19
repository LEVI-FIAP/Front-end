import { MensagemErroPropos } from '@/types';
import React from 'react'

export default function Erro({mensagem} : MensagemErroPropos) {

    if (!mensagem) return null;
    
  return (
    <div style={{color : 'red'}}>mensagem</div>
  )
}