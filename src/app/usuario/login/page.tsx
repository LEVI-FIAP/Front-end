"use client"
import { TipoUsuario } from "@/types";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  
  const navigate = useRouter();

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    email:"",
    senha:"",
    username:""
});


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch(`http://localhost:8080/gslevi_war/users/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify({
                email: usuario.email,
                senha: usuario.senha,
            })
        });

        if(response.ok){
            const user = await response.json();
            console.log("Login com sucesso")
            navigate.push(`/usuario/${user["id"]}`);
            
        }
        

    } catch (erro) {
        console.error("Falha ao logar: ", erro);
    }
}

  return (
    <main>
        <aside className="formulario">
            <Link href="/">
                <SetaEsquerda />
                <h3>Home</h3>
            </Link>
            <form onSubmit={handleSubmit} className="formCad">
                <h1>Login</h1>
                  <div>
                      <label htmlFor="idEmail">Seu email</label>
                      <input type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value}) } placeholder="Digite seu email" required/>
                  </div>
                  <div>
                      <label htmlFor="idSenha">Sua senha</label>
                      <input type="password" name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite sua senha" required/>
                  </div>
                  <div>
                      <button type="submit">Login</button>
                  </div>
                  <h5>Não possui cadastro?</h5>
                  <Link href="/usuario/cadastro"></Link>
              </form>
        </aside>
    </main>
  )
}
