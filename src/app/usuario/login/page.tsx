"use client"
import { TipoUsuario } from "@/types";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";
import paisagem from "@/images/cadastro-login.png";
import Image from "next/image";
import { FaArrowCircleRight as SetaDireita} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  
  const navigate = useRouter();

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
        
        const response = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/users/login`,{
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
            setMensagem("Login feito com sucesso")
            setClassName("text-green-500")
            navigate.push(`/usuario/${user["id"]}`);
        }
        
        
    } catch (erro) {
        const msg = "Erro:" + erro
        setMensagem(msg)
        setClassName("text-red-500")
        console.error("Falha ao logar: ", erro);
    }
}

  return (
    <main className="formularios flex text-2xl font-bold justify-between gap-10 phone:max-xl:pb-10 phone:max-lg:pl-0 phone:max-lg:w-72 phone:max-sm:text-xl">
        <aside className="phone:max-xl:hidden">
            <Image src={paisagem} alt="Paisagem" className="h-101"/>
        </aside>

        <aside className="formulario pr-40 pt-10 phone:max-xl:pl-5 phone:max-lg:pr-0 flex flex-col gap-20 pb-5">
            
            <Link className="voltar flex gap-4" href="/">
                <SetaEsquerda className="seta relative top-1"/>
                <h3>Home</h3>
            </Link>

            <form onSubmit={handleSubmit} className="formCad flex flex-col gap-10">
                <h1 className="text-4xl phone:max-sm:text-2xl">Login</h1>
                  <div className="campo flex flex-col gap-10">
                      <label htmlFor="idEmail">Seu email</label>
                      <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value}) } placeholder="Digite seu email" required/>
                  </div>
                  <div className="campo flex flex-col gap-10">
                      <label htmlFor="idSenha">Sua senha</label>
                      <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" type={senhaVisivel ? "text" : "password"} name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite sua senha" required/>
                      <div className="mostrar flex gap-3">
                        <h5>Mostrar Senha</h5>
                        <button type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
                            <input type="checkbox"/>
                        </button>
                      </div>
                  </div>
                  <h4>Não possui cadastro?</h4>
                  <Link href="/usuario/cadastro" className="flex gap-5">
                    <h6>Aperte aqui para criar uma conta</h6>
                    <SetaDireita />
                  </Link>
                  <h3 className={className}>{mensagemStatus}</h3>
                  <div>
                      <button className="btn flex justify-self-center bg-gray-600 text-white py-2 px-40" type="submit">entrar</button>
                  </div>
              </form>
        </aside>
    </main>
  )
}
