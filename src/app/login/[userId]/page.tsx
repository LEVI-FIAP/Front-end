import React from 'react';

type PageProps = {
  params: {
    userId: string; 
  };
};

export default function Usuario({ params }: PageProps) {
  const { userId } = params;

  return (
    <main>
      <h1>Relatório de usuário {userId}</h1>
    </main>
  );
}
