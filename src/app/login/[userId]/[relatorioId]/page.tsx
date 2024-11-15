"use client"
import React from 'react';

export default function Usuario({ params }: { params: { userId: string, relatorioId: string } }) {
  const { userId, relatorioId } = params;

  return (
    <main>
      <h1>Relatório de usuário {userId}</h1>
      <p>ID do relatório: {relatorioId}</p>
    </main>
  );
}

// Função para gerar os parâmetros estáticos
export function generateStaticParams() {
  return [
    { userId: '123', relatorioId: '456' }, 
    { userId: '789', relatorioId: '101' }, // Outro exemplo
    // Adicione mais combinações conforme necessário
  ].map((params) => ({
    params,
  }));
}
