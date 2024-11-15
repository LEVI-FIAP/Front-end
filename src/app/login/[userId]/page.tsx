import { useRouter } from 'next/router';
import React from 'react';

export default function Usuario() {
  const router = useRouter();
  const  {userId} = router.query;


  return (
    <main>
      <h1>Usuario {userId}</h1>
    </main>
  );
}
