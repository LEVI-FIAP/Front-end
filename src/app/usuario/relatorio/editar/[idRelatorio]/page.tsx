"use client"
import { TipoRelatorio} from "@/types";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";

export default function Editar({params}: {params: { userId: number }}) {
    const [relatorio, setRelatorio] = useState<TipoRelatorio>({
        id: 0,
        consumoMensal: 0,
        contaLuz: 0,
        areaDesejada: 0,
        qtdPaineis: 0,
        potenciaTotal: 0,
        custoInstalacao: 0,
        economiaMensal: 0,
        payback: 0,
        energiaMes: 0,
        idRegiao: 0,
        idUsuario: params.userId,
    });

    const navigate = useRouter();

    useEffect(() => {
        const chamarApi = async () =>{
            const response = await fetch(`http://localhost:8080/gslevi_war/users/${params.userId}`);
            const dados = await response.json();
            setRelatorio(dados)
        }
        chamarApi()
    })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch("Coloca a API aqui",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify({
            //   Coloca as coisas q vc precisa
          })
        });

        if(response.ok){
            console.log("Atualização com sucesso")
            navigate.push(`/usuario/${params.idUser}`);
        }

    } catch (error) {
        console.error("Falha na alteração de dados do usuario: ", error);
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
                  <input type="password" name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite a sua senha" required/>
              </div>
              <div>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </aside>
        <aside className="imagem"></aside>
    </main>
  )
}
