"use client"
import { TipoUsuario } from "@/types";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";

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
            const response = await fetch(`http://localhost:8080/gslevi_war/users/${params.idUser}`);
            const dados = await response.json();
            setUsuario(dados)
        }
        chamarApi()
    }, [params.idUser])

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch(`http://localhost:8080/gslevi_war/users/${params.idUser}`,{
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
            console.log("Atualização feita com sucesso")
            setUsuario({
                id:0,
                email:"",
                senha:"",
                username:""
            });
            setMensagem("Dados editados com sucesso")
            setClassName("text-green-500")
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
    <main>
      <aside className="formulario">
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
                  <input type={senhaVisivel ? "text" : "password"} name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite a sua senha" required/>
                  <button type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
                    <input type="checkbox"/>
                  </button>
                  <h5>Mostrar Senha</h5>
              </div>
              <h3 className={className}>{mensagemStatus}</h3>
              <div>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </aside>
        <aside className="imagem"></aside>
    </main>
  )
}
