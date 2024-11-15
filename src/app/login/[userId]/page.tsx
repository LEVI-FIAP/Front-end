import { useParams } from 'next/navigation';
import React from 'react';

export default function Usuario() {
  const {userId} = useParams();


  return (
    <main>
      <h1>Usuario {userId}</h1>
    </main>
  );
}
