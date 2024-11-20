"use client"
import { TipoUsuario } from "@/types";
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";
import paisagem from "@/images/cadastro-login.png";
import Image from "next/image";

export default function Cadastro() {

  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [mensagemStatus, setMensagem] = useState<string>("Preencha todos os campos")
  const [className, setClassName] = useState<string>("text-gray-500")
  
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
            setMensagem("Cadastro feito com sucesso")
            setClassName("text-green-500")

        }

    } catch (erro) {
      const msg = "Erro:" + erro
      setMensagem(msg)
      setClassName("text-red-500")
      console.error("Falha no cadastramento de usuario: ", erro);
    }
}

  return (
    <main>
      <aside className="formulario  pl-40 pt-10 phone:max-xl:pl-5">

          <SetaEsquerda />
          <Link href="/">
            <h3>Home</h3>
          </Link>
          <form onSubmit={handleSubmit} className="formCadastro">
                <h1>Cadastro</h1>
              <div>
                  <label htmlFor="idNome">Nome</label>
                  <input type="text" name="nome" id="idNome" value={usuario.username} onChange={(e)=> setUsuario({...usuario, username: e.target.value})} placeholder="Digite seu nome" required/>
                  <label htmlFor="idNome">*Obrigatório</label>
              </div>
              <div>
                  <label htmlFor="idEmail">Email</label>
                  <input type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value})} placeholder="Digite seu email." required/>
                  <label htmlFor="idEmail">*Obrigatório</label>
              </div>
              <div>
                  <label htmlFor="idSenha">Senha</label>
                  <input type={senhaVisivel ? "text" : "password"} name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite sua senha" required/>
                  <label htmlFor="idSenha">*Obrigatório</label>
                  <button type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
                    <input type="checkbox"/>
                  </button>
                  <h5>Mostrar Senha</h5>
              </div>
              <h4>Já tem uma conta?</h4>
              <link href="/usuario/login">
                <h6>Aperte aqui para logar</h6>
              </link>
              <h3 className={className}>{mensagemStatus}</h3>
              <div>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
      </aside>
      <aside className="phone:max-xl:hidden">
        <Image src={paisagem} alt="Paisagem"/>
      </aside>
    </main>
  )
}
