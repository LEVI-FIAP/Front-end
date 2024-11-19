"use client"
import { TipoUsuario } from "@/types";
import Link from "next/link"
import { useState } from "react";

export default function Cadastro() {
  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    email:"",
    senha:"",
    username:""
});

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch("http://localhost:8080/gslevi_war/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify({
              email: usuario.email,
              senha: usuario.senha,
              username: usuario.username
          })
        });

        if(response.ok){
            alert("Produto cadastrado com sucesso.");
            setUsuario({
                  id:0,
                  email:"",
                  senha:"",
                  username:""
                });
        }

    } catch (error) {
        console.error("Falha no cadastramento de produtos: ", error);
    }
}

  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Página Cadastro</h1>

      <div>
          <form onSubmit={handleSubmit} className="formCad">
               <h1>Cadastro de Produtos</h1>
              <div>
                  <label htmlFor="idEmail">Email</label>
                  <input type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value}) } placeholder="Digite o seu email." required/>
              </div>
              <div>
                  <label htmlFor="idNome">Nome</label>
                  <input type="text" name="nome" id="idNome" value={usuario.username} onChange={(e)=> setUsuario({...usuario, username: e.target.value})} placeholder="Digite o seu nome" required/>
              </div>
              <div>
                  <label htmlFor="idSenha">Senha</label>
                  <input type="password" name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite a sua senha" required/>
              </div>
              <div>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </div>
    </main>
  )
}
