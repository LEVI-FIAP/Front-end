"use client"

import { TipoUsuario } from "@/types"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Usuario() {
    
    const router = useRouter();
    const [user] = useState<TipoUsuario>({
        id: Number(router.query),
        nome: "",
        email: "",
        senha: "",
    })

    
  return (
    <main>
        <h1>Página de Usuario</h1>
        <h4>ID - {user.id}</h4>
    </main>
  )
}
