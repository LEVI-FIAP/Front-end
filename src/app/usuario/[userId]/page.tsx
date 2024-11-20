"use client"
import BtnPgs from "@/components/BtnPgs/BtnPgs";
import { FaPencilAlt as Lapis} from "react-icons/fa";
import { TipoRelatorio} from "@/types";
import { useEffect, useState } from "react";
import Relatorios from "@/components/Relatorios/Relatorios";

export default function Usuario({params}: {params: { userId: number }}) {
  

  const [relatorios, setRelatorios] = useState<TipoRelatorio[]>([]);

  useEffect(() => {
        
    const chamadaApi = async () =>{
        const response = await fetch(`http://localhost:8080/gslevi_war/reports?user=${params.userId}`);
        const dados = await response.json();
        setRelatorios(dados);
        console.log(relatorios)
        console.log(dados)
    }

    chamadaApi();

}, [params.userId, relatorios])

const handleDelete = async ()=>{
  try {
      
      const response = await fetch(`http://localhost:8080/gslevi_war/users/${params.userId}`,{
          method:"DELETE",
          headers:{
              "Content-Type":"application/json"
              }
      });

      if(response.ok){
          console.log("Usuario deletado feita com sucesso")
      }

  } catch (error) {
      console.error("Falha ao deletar usuario: ", error);
  }
}
    return (
    <main>
        <div className="intro">
          <h1>Usuario</h1>
          <p>Seja Bem vindo a página feita para você! Analíse e utilize das ferramentas que criamos especialmente para você usuario</p>
        </div>
        <div className="meio">
          <h2>Bem vindo(a) Usuario</h2>
          <div className="texto">
            <p>O projeto visa calcular a viabilidade da instalação de painéis solares com base na área disponivel.... bla bla bla e etc etc</p>
          </div>
          <button onClick={handleDelete}>Deletar User</button>
        </div>
        <div className="relatorios">
          <h5>Aperte o botão abaxio para criar um relatório</h5>
          <BtnPgs Icon={Lapis} texto="Fazer um relatorio" link={`/usuario/relatorio/cadastrar${params.userId}`}/>
          <div className="carrosel">
            {relatorios.map((relatorio) => (
              <Relatorios key={relatorio.id} idRelatorio={relatorio.id}/>
            ))}
          </div>
        </div>
    </main>)
  }