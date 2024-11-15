import { useParams } from 'next/navigation';
import React from 'react';

export default function Relatorio() {
  const { userId, relatorioId } = useParams();


  return (
    <main>
      <h1>Relatório {relatorioId}</h1>
      <p>Do usuário {userId}</p>
    </main>
  );
}
