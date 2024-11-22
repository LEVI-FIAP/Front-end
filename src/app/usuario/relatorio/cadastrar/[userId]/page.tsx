"use client"
import { TipoRelatorio} from "@/types";
import Link from "next/link"
import { useState } from "react";
import { IoIosArrowBack as SetaEsquerda } from "react-icons/io";
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import fundo from "@/images/form-edit.png";
import Image from "next/image";

export default function Cadastrar({params}: {params: { userId: number }}) {

  const [mensagemStatus, setMensagem] = useState<string>("*Preencha todos os campos")
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
        
        const response = await fetch("https://gslevi-86130ccf0dc3.herokuapp.com/reports",{
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
    <main className="formularios flex text-2xl font-bold justify-between gap-0 phone:max-xl:pb-10 phone:max-lg:pl-0 phone:max-lg:w-72 phone:max-sm:text-xl">
      <aside className="phone:max-xl:hidden">
        <Image src={fundo} alt="form-edicao" className="h-101"/>
      </aside>
      <aside className="formulario pr-40 pt-10 phone:max-xl:pl-5 phone:max-lg:pr-0 flex flex-col gap-20 pb-5">
          <Link className="voltar flex gap-4" href="/">
            <SetaEsquerda className="seta relative top-1"/>
            <h3>Home</h3>
          </Link>
          <form onSubmit={handleSubmit} className="formCad flex flex-col gap-10">
              <p className="font-normal w-96 phone:max-sm:w-auto">A maioria dos dados que pedimos está presente na sua conta de luz!</p>
              <h1 className="text-4xl phone:max-sm:text-2xl">Dados</h1>
              <div className="campo flex flex-col gap-10">
                  <label htmlFor="idTamanho">Tamanho disponível da sua propriedade:</label>
                  <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" min='0' type="number" name="tamanho" id="idTamanho" value={relatorio.areaDesejada} onChange={(e)=> setRelatorio({...relatorio, areaDesejada:Number(e.target.value),}) } placeholder="Digite o tamanho em metros quadrados." required/>
              </div>
              <div className="campo flex flex-col gap-10"> 
                  <label htmlFor="idRegiao">Região que está localizado:</label>
                  <select className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" name="regiao" id="idRegiao" value={relatorio.idRegiao} onChange={(e) => setRelatorio({...relatorio, idRegiao:Number(e.target.value),})} required>
                    <option selected value="">Escolha uma região</option>
                    <option value="1">Norte</option>
                    <option value="2">Nordeste</option>
                    <option value="3">Centro Oeste</option>
                    <option value="4">Sudeste</option>
                    <option value="5">Sul</option>
                  </select>
              </div>
              <div className="campo flex flex-col gap-10">
                  <label htmlFor="idConsumo">Consumo de Energia (kWh):</label>
                  <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" min='0' type="number" name="consumo" id="idConsumo" value={relatorio.consumoMensal} onChange={(e)=> setRelatorio({...relatorio, consumoMensal: Number(e.target.value)})} placeholder="Digite o quanto você consome de energia por mês" required/>
              </div>
              <div className="campo flex flex-col gap-10">
                  <label htmlFor="idValor">Valor médio da conta de luz (R$):</label>
                  <input className="bg-gray-300 text-gray-500 p-2 w-108 sm:max-lg:w-auto phone:max-sm:w-60" min='0' type="number" name="valor" id="idValor" value={relatorio.contaLuz} onChange={(e)=> setRelatorio({...relatorio, contaLuz: Number(e.target.value)})} placeholder="Digite a média da sua conta de luz" required/>
              </div>
              <Link href={`/usuario/${params.userId}`}>
                <SetaDireita />
                <h4>Voltar para página de Usuário</h4>
              </Link>
              <h3 className={className}>{mensagemStatus}</h3>
              <button className="btn flex justify-self-center bg-gray-600 text-white py-2 px-40 phone:max-sm:px-10" type="submit">Cadastrar</button>
          </form>
        </aside>
    </main>
  )
}
