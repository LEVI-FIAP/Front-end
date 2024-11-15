import React from 'react';

export default function Usuario({ params }: { params: { userId: string } }) {
  const { userId } = params;

  return (
    <main>
      <h1>Relatório de usuário {userId}</h1>
    </main>
  );
}

// Função para gerar os parâmetros estáticos
export function generateStaticParams() {
  return [
    { userId: '123'}, 
    { userId: '789'}, // Outro exemplo
    // Adicione mais combinações conforme necessário
  ].map((params) => ({
    params,
  }));
}
