"use client"
import { TipoRelatorio} from "@/types";
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";
import fundo from "@/images/form-edit.png";
import Image from "next/image";

export default function Cadastrar({params}: {params: { userId: number }}) {

  const [mensagemStatus, setMensagem] = useState<string>("Preencha todos os campos")
  const [className, setClassName] = useState<string>("text-gray-500")
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
    <main className="formularios">
      <aside className="phone:max-xl:hidden">
        <Image src={fundo} alt="form-edicao" className="h-101"/>
      </aside>
      <aside className="formulario w-min pr-60 pt-10 phone:max-xl:pl-5 phone:max-lg:pr-0">
          <Link className="voltar" href="/">
            <SetaEsquerda className="seta"/>
            <h3>Dados</h3>
          </Link>
          <form onSubmit={handleSubmit} className="formCad">
              <p className="font-normal">A maioria dos dados que pedimos esta presente na sua conta de luz!</p>
              <h1>Dados</h1>
              <div className="campo">
                  <label htmlFor="idTamanho">Tamanho disponivel da sua propriedade</label>
                  <input type="number" name="tamanho" id="idTamanho" value={relatorio.areaDesejada} onChange={(e)=> setRelatorio({...relatorio, areaDesejada:Number(e.target.value),}) } placeholder="Digite o tamanho em metros quadrados." required/>
              </div>
              <div className="campo"> 
                  <label htmlFor="idRegiao">Região que esta localizado</label>
                  <select name="regiao" id="idRegiao" value={relatorio.idRegiao} onChange={(e) => setRelatorio({...relatorio, idRegiao:Number(e.target.value),})} required>
                    <option selected disabled value="">Escolha uma região</option>
                    <option value="1">Norte</option>
                    <option value="2">Nordeste</option>
                    <option value="3">Centro Oeste</option>
                    <option value="4">Sudeste</option>
                    <option value="5">Sul</option>
                  </select>
              </div>
              <div className="campo">
                  <label htmlFor="idConsumo">Consumo de Energia em kWh</label>
                  <input type="number" name="consumo" id="idConsumo" value={relatorio.consumoMensal} onChange={(e)=> setRelatorio({...relatorio, consumoMensal: Number(e.target.value)})} placeholder="Digite o quanto você consome de energia por mês" required/>
              </div>
              <div className="campo">
                  <label htmlFor="idValor">Valor médio da conta de luz</label>
                  <input type="number" name="valor" id="idValor" value={relatorio.contaLuz} onChange={(e)=> setRelatorio({...relatorio, contaLuz: Number(e.target.value)})} placeholder="Digite a média da sua conta de luz" required/>
              </div>
              <h3 className={className}>{mensagemStatus}</h3>
              <div className="btn">
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
        </aside>
    </main>
  )
}
