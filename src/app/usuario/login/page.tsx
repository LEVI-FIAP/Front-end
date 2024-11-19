"use client"
import { TipoUsuario } from "@/types";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Erro from "@/components/Erro/Erro";

export default function Login() {
  
  const navigate = useRouter();

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    email:"",
    senha:"",
    username:""
});

    const [erro, setErro] = useState<string | null>();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch("Coloca nossa API de login aqui",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify(usuario)
        });

        if(response.ok){
            const respostaApi = await fetch("Nossa API aqui de GET usuario aqui");
            const user = await respostaApi.json();
            setErro(null);
            setUsuario(user);
            navigate.push(`/usuario/${usuario.id}`);
            
        }
        

    } catch (erro) {
        const mensagem = "Falha ao logar" + erro
        setErro(mensagem)
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
                  <Erro mensagem={`${erro}`}/>
                  <div>
                      <button type="submit">Cadastrar</button>
                  </div>
                  <h5>Não possui cadastro?</h5>
                  <Link href="/usuario/cadastro"></Link>
              </form>
        </aside>
    </main>
  )
}
