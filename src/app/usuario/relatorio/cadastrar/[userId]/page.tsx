"use client"
import { TipoRelatorio} from "@/types";
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";

export default function Cadastrar({params}: {params: { userId: number }}) {
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
        
        const response = await fetch("http://localhost:8080/gslevi_war/reports",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify({
              consumoMensal: relatorio.consumoMensal,
              contaLuz: relatorio.contaLuz,
              areaDesejada: relatorio.areaDesejada,
              idRegiao: relatorio.idRegiao,
              idUsuario: relatorio.idUsuario
          })
        });

        if(response.ok){
            console.log("Cadastro feito com sucesso")
            setRelatorio({
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
            <h3>Dados</h3>
            <p>A maioria dos dados que pedimos esta presente na sua conta de luz!</p>
          </Link>
          <form onSubmit={handleSubmit} className="formCadastro">
                <h1>Dados</h1>
              <div>
                  <label htmlFor="idTamanho">Tamanho disponivel da sua propriedade</label>
                  <input type="number" name="tamanho" id="idTamanho" value={relatorio.areaDesejada} onChange={(e)=> setRelatorio({...relatorio, areaDesejada:Number(e.target.value),}) } placeholder="Digite o tamanho em metros quadrados." required/>
              </div>
              <div>
                  <label htmlFor="idRegiao">Região que esta localizado</label>
                  <input type="number" name="regiao" id="idRegiao" value={relatorio.idRegiao} onChange={(e)=> setRelatorio({...relatorio, idRegiao: Number(e.target.value),})} placeholder="Regiao" required/>
              </div>
              <div>
                  <label htmlFor="idConsumo">Consumo de Energia em kWh</label>
                  <input type="number" name="consumo" id="idConsumo" value={relatorio.consumoMensal} onChange={(e)=> setRelatorio({...relatorio, consumoMensal: Number(e.target.value)})} placeholder="Digite o quanto você consome de energia por mês" required/>
              </div>
              <div>
                  <label htmlFor="idValor">Valor médio da conta</label>
                  <input type="number" name="valor" id="idValor" value={relatorio.contaLuz} onChange={(e)=> setRelatorio({...relatorio, contaLuz: Number(e.target.value)})} placeholder="Digite a média da sua conta de luz" required/>
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
