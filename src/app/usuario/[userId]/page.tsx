"use client"

import { TipoUsuario } from "@/types"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Usuario() {
  const router = useRouter();
  const [user, setUser] = useState<TipoUsuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
  });

  // Atualizando o estado assim que o router.query estiver disponível
  useEffect(() => {
    if (router.query.userId) {
      setUser(prevState => ({
        ...prevState,
        id: Number(router.query.userId), // Convertendo para número
      }));
    }
  }, [router.query]);

  return (
    <main>
      <h1>Página de Usuário</h1>
      <h4>ID - {user.id}</h4>
    </main>
  );
}
