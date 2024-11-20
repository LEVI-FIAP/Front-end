"use client"
import { TipoRelatorio} from "@/types";
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";

export default function Cadastrar({params}: {params: {userId: number }}) {
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





  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch(`API aqui`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify({
              areaDesejada: relatorio.areaDesejada,
              qtdPaineis: 0,
              potenciaTotal: 0,
              custoInstalacao: 0,
              economiaMensal: 0,
              payback: 0,
              energiaMes: 0,
              idRegiao: relatorio.idRegiao,
              idUsuario: params.userId,
          })
        });

        if(response.ok){
            console.log("Cadastro feito com sucesso")
        }

    } catch (error) {
        console.error("Falha no cadastramento de usuario: ", error);
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
                  <label htmlFor="idTamanho">Tamanho disponivel da sua propriedade</label>
                  <input type="number" name="tamanho" id="idTamanho" value={relatorio.areaDesejada} onChange={(e)=> setRelatorio({...relatorio, areaDesejada:Number(e.target.value),}) } placeholder="Digite o seu email." required/>
              </div>
              <div>
                  <label htmlFor="idRegiao">Região que esta localizado</label>
                  <input type="text" name="regiao" id="idRegiao" value={relatorio.idRegiao} onChange={(e)=> setRelatorio({...relatorio, idRegiao: Number(e.target.value),})} placeholder="Digite o seu nome" required/>
              </div>
              <div>
                  <label htmlFor="idConsumo">Consumo de Energia</label>
                  <input type="password" name="senha" id="idSenha" value={relatorio.consumoMensal} onChange={(e)=> setRelatorio({...relatorio, consumoMensal: Number(e.target.value),})} placeholder="Digite o seu consumo de energia" required/>
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
