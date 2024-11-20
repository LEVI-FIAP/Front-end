"use client"
import { TipoUsuario } from "@/types";
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";
import { FaArrowCircleRight as SetaDireita} from "react-icons/fa";
import paisagem from "@/images/cadastro-login.png";
import Image from "next/image";

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
            console.log("Cadastro feito com sucesso")
            setUsuario({
                  id:0,
                  email:"",
                  senha:"",
                  username:""
                });

        }

    } catch (error) {
        console.error("Falha no cadastramento de usuario: ", error);
    }
}

  return (
    <main>
      <aside className="formulario  pl-40 pt-10 phone:max-xl:pl-5">

          <Link href="/">
            <SetaEsquerda />
            <h3>Home</h3>
          </Link>
          <form onSubmit={handleSubmit} className="formCadastro">
                <h1>Cadastro</h1>
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
          <link href="/usuario/login">
            <h3>Já possui Conta?</h3>
            <SetaDireita />
          </link>
      </aside>
      <aside className="phone:max-xl:hidden">
        <Image src={paisagem} alt="Paisagem"/>
      </aside>
    </main>
  )
}
