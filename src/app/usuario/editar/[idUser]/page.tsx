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
    <main className="formularios flex text-2xl font-bold justify-between gap-10 phone:max-xl:pb-10 phone:max-lg:pl-0 phone:max-lg:w-72 phone:max-sm:text-xl">
      <aside className="phone:max-xl:hidden">
        <Image src={fundo} alt="form-edicao" className="h-101"/>
      </aside>
      <aside className="formulario pr-40 pt-10 phone:max-xl:pl-5 phone:max-lg:pr-0 flex flex-col gap-20 pb-5">

          <Link className="voltar flex gap-4" href="/">
            <SetaEsquerda className="seta relative top-1"/>
            <h3>Home</h3>
          </Link>

          <form onSubmit={handleSubmit} className="formCad flex flex-col gap-10">
              <h1 className="text-4xl phone:max-sm:text-2xl">Editar dados</h1>
              <div className="campo flex flex-col gap-10">
                  <label htmlFor="idEmail">Email</label>
                  <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value}) } placeholder="Digite o seu email." required/>
              </div>
              <div className="campo flex flex-col gap-10">
                  <label htmlFor="idNome">Nome</label>
                  <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" type="text" name="nome" id="idNome" value={usuario.username} onChange={(e)=> setUsuario({...usuario, username: e.target.value})} placeholder="Digite o seu nome" required/>
              </div>
              <div className="campo flex flex-col gap-10">
                  <label htmlFor="idSenha">Senha</label>
                  <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" type={senhaVisivel ? "text" : "password"} name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite a sua senha" required/>
                  <div className="mostrar flex gap-3">
                    <h5>Mostrar Senha</h5>
                    <button type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
                      <input type="checkbox"/>
                    </button>
                  </div>
              </div>
              <h3 className={className}>{mensagemStatus}</h3>
              <div>
                  <button className="btn flex justify-self-center bg-gray-600 text-white py-2 px-40 phone:max-sm:px-10" type="submit">Alterar Dados</button>
              </div>
          </form>
        </aside>
    </main>
  )
}
