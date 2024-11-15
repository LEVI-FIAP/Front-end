import { useRouter } from 'next/router';
import React from 'react';

export default function Relatorio() {
  const router = useRouter();
  const { userId, relatorioId } = router.query;


  return (
    <main>
      <h1>Relatório {relatorioId}</h1>
      <p>Do usuário {userId}</p>
    </main>
  );
}
