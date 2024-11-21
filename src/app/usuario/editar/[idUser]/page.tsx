"use client"
import { TipoUsuario } from "@/types";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";
import fundo from "@/images/form-edit.png";
import Image from "next/image";

export default function Editar({params}: {params: { idUser: number }}) {

  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [mensagemStatus, setMensagem] = useState<string>("Preencha todos os campos")
  const [className, setClassName] = useState<string>("text-gray-500")

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:params.idUser,
    email:"",
    senha:"",
    username:""
});

    const navigate = useRouter();

    useEffect(() => {
        const chamarApi = async () =>{
            const response = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/users/${params.idUser}`);
            const dados = await response.json();
            setUsuario(dados)
        }
        chamarApi()
    }, [params.idUser])

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/users/${params.idUser}`,{
            method:"PUT",
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
          setMensagem("Dados editados com sucesso")
          setClassName("text-green-500")
          console.log("Atualização feita com sucesso")
          setUsuario({
            id:0,
            email:"",
            senha:"",
            username:""
          });
          navigate.push(`/usuario/${params.idUser}`);
        }

    } catch (erro) {
      const msg = "Erro:" + erro
      setMensagem(msg)
      setClassName("text-red-500")
      console.error("Falha na alteração de dados do usuario: ", erro);
    }
}

  return (
    <main className="formularios">
      <aside className="phone:max-xl:hidden">
        <Image src={fundo} alt="form-edicao" className="h-101"/>
      </aside>
      <aside className="formulario pt-10 phone:max-xl:pl-5 phone:max-lg:pr-0">

          <Link className="voltar" href="/">
            <SetaEsquerda className="seta"/>
            <h3>Home</h3>
          </Link>

          <form onSubmit={handleSubmit} className="formCad">
                <h1>Editar dados</h1>
              <div className="campo">
                  <label htmlFor="idEmail">Email</label>
                  <input type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value}) } placeholder="Digite o seu email." required/>
              </div>
              <div className="campo">
                  <label htmlFor="idNome">Nome</label>
                  <input type="text" name="nome" id="idNome" value={usuario.username} onChange={(e)=> setUsuario({...usuario, username: e.target.value})} placeholder="Digite o seu nome" required/>
              </div>
              <div className="campo">
                  <label htmlFor="idSenha">Senha</label>
                  <input type={senhaVisivel ? "text" : "password"} name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite a sua senha" required/>
                  <div className="mostrar">
                    <h5>Mostrar Senha</h5>
                    <button type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
                      <input type="checkbox"/>
                    </button>
                  </div>
              </div>
              <h3 className={className}>{mensagemStatus}</h3>
              <div className="btn">
                  <button type="submit">Alterar Dados</button>
              </div>
          </form>
        </aside>
    </main>
  )
}
