"use client"
import PainelImg from "@/images/relatorio/painel.png"
import MoedasImg from "@/images/relatorio/moedas.png"
import CofrinhoImg from "@/images/relatorio/cofrinho.png"
import DinheiroImg from "@/images/relatorio/dinheiro.png"
import superChoque from "@/images/super-choque.jpg"
import { FaPencilAlt as Lapis} from "react-icons/fa";
import { TipoRelatorio } from "@/types";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowCircleRight as SetaDireita} from "react-icons/fa";
import Image from "next/image";
import BtnPgs from "@/components/BtnPgs/BtnPgs"

  export default function Usuario({params}: {params: {relatorioId: number }}) {

    const [relatorio, setRelatorio] = useState<TipoRelatorio>({
      id: params.relatorioId,
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
      idUsuario: 0,
    })

    const [erro, setErro] = useState<string|null>(null);

    useEffect(() => {
        
      const chamadaApi = async () =>{
        try{

          const response = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/reports/${params.relatorioId}`);
          
          if(!response.ok){
            throw new Error("Não existe relatorio com este ID");
          }
          const dados = await response.json();
          setRelatorio(dados);
        } catch (error){
          setErro((error as Error).message)
        }
      }
  
      chamadaApi();
  
  }, [params.relatorioId])

if (erro) {
  return (
    <main className="usuarioInvalido flex flex-col gap-5 py-5 bg-erro1">
      <div className="flex justify-center">
        <Image src={superChoque} alt="super Choque" className="w-min h-min"/>
      </div>
      <div className="flex flex-col self-center text-2xl font-bold text-center text-amber-300">
        <h1>Erro ao validar Relatorio</h1>
        <p>{erro}</p>
        <Link href="/">Voltar para Home</Link>

      </div>
    
    </main>
  )
}
    return (
      <main className="flex flex-col gap-10">
        <div className="intro bg-[url('../assets/fundo-relatorio.png')] bg-cover bg-center text-white px-20 py-32 flex flex-col gap-10 font-bold text-xl phone:max-md:text-lg phone:max-md:px-2">
          <div className="txt">
            <h1 className="text-3xl phone:max-md:text-xl">Relatório de Nº{params.relatorioId}</h1>
            <p className="w-110 phone:max-md:w-auto">Veja os detalhes e contas que utilizamos para o descobrimento do seu investimento no sistema solar</p>
          </div>
          <div className="link flex border-t-2 w-105 pt-10 mt-10 gap-10 phone:max-lg:w-auto flex-wrap">
            <h6>Veja todos os seus relatorios</h6>
            <Link href={`/usuario/${relatorio.idUsuario}`} className="relative top-1 text-red-600">
                <SetaDireita/>
            </Link>
          </div>
        </div>
        <div className="meio flex flex-col gap-10">
          <div className="qtdPainel flex h-min bg-gradient-to-b from-orange-700 to-orange-400 justify-between phone:max-lg:py-10">
            <aside className="img phone:max-lg:hidden">
              <Image src={PainelImg} alt="img-painel" className="h-101"/>
            </aside>
            <aside className="conteudo flex flex-col pr-20 justify-center text-center gap-10  text-white font-bold text-2xl sm:max-lg:px-10 phone:max-sm:px-0">
              <h2 className="text-4xl">Quantidade de painéis</h2>
              <p className="w-110 phone:max-lg:w-auto">Veja quanto painéis serão necessarios para gerar a energia necessario com base no tamanho do local que você nos informou, o tamanho médio de um painél é 1.7m</p>
              <div className="flex text-center flex-wrap">
                <h3>Fórmula = </h3>
                <h3>Área DIsponivel(m²)</h3>
                <h3>Área de um painél</h3>
              </div>
              <h4>{relatorio.areaDesejada} / 1.7m²</h4>
              <h2>{relatorio.qtdPaineis} Painéis</h2>
            </aside>

          </div>
          <div className="custoTotal flex h-min bg-gradient-to-b from-dinheiro1 to-dinheiro2 justify-between phone:max-lg:py-10">
            <aside className="conteudo flex flex-col pl-20 justify-center text-center gap-10  text-white font-bold text-2xl phone:max-lg:px-10">
              <h2 className="text-4xl">Custo Total</h2>
              <p className="w-110 phone:max-lg:w-auto">Veja o quanto você tera que investir para fazer essa transição de energia, lembresse os gastos que você tera hoje podera ser um grande investimento para todos, pois ajudaram o meio ambiente e claro a você mesmo</p>
              <div className="flex text-center">
                <h3>Formula = Potência Total x Custo por kW</h3>
                <h4>{relatorio.potenciaTotal} / R$5250</h4>
              </div>     
                <h2>Custo total para instalação de R${relatorio.custoInstalacao}</h2>
            </aside>
            <aside className="img phone:max-lg:hidden">
              <Image src={MoedasImg} alt="moedas-img" className="h-101"/>
            </aside>
          </div>

          <div className="economiaMensal flex h-min bg-economia justify-between phone:max-lg:py-10 ">
            <aside className="img phone:max-lg:hidden">
              <Image src={CofrinhoImg} alt="cofrinho-img" className="h-101"/>
            </aside>
            <aside className="conteudo flex flex-col pr-20 justify-center text-center gap-10  text-white font-bold text-2xl phone:max-lg:px-10">
              <h2 className="text-4xl">Economia Mensal</h2>
              <p className="w-110 phone:max-lg:w-auto">Aqui você vê o quanto ira economizar utilizando a troca de energia,pois é algo que realmente pode influenciar em seus negócios, diminuindo as dividas com energia que você tem.</p>
              <h3>Formula = Potência Total x Economia de kW por mês</h3>
              <h4>{relatorio.potenciaTotal} / R$425</h4>
              <h2>Economia Mensal de R${relatorio.economiaMensal}</h2>
            </aside>
          </div>

          <div className="payback flex h-min bg-payback justify-between phone:max-lg:py-10">
            <aside className="conteudo flex flex-col pl-20 py-5 justify-center text-center gap-10  text-white font-bold text-2xl phone:max-lg:px-10">
              <h2 className="text-4xl">Payback</h2>
              <p className="w-110 phone:max-lg:w-auto">Aqui você vê o tempo em que o seus investimento retorna para você assim mostrando se é vantajoso ou não para você</p>
              <h3>Fórmula</h3>
              <div className="parteCima">
                <h3>Custo Total</h3>
              </div>
              <div className="parteBaixo">
                <h3>Economia Mensal</h3>
              </div>
              <h4>{relatorio.custoInstalacao} / {relatorio.economiaMensal}</h4>
              <h2>Você terá um retorno em {relatorio.payback} meses</h2>
            </aside>
            <aside className="img phone:max-lg:hidden">
              <Image src={DinheiroImg} alt="dinheiro-img" className="h-101"/>
            </aside>
          </div>

        </div>

        <div className="w-60 pl-10 phone:max-lg:w-auto phone:max-lg:pl-0">
          <BtnPgs Icon={Lapis} texto="Editar Relatorio" link={`/usuario/relatorio/editar/${params.relatorioId}`}/>
        </div>

        <div className="bg-[url('../assets/fundo-relatorio-2.png')] bg-cover bg-center text-white px-20 py-10 flex flex-col gap-14 font-bold text-xl phone:max-md:text-lg phone:max-md:px-2 phone:max-lg:pt-20">
          <p className="w-110 phone:max-md:w-80 phone:max-sm:w-auto">Esperamos que com esse investimento você decida se é vantajoso ou não, lembre-se a sua ajuda importa muito</p>
          <div className="link flex border-t-2 w-105 pt-10 mt-10 gap-10 phone:max-lg:w-auto flex-wrap">
            <h6>Voltar para a página de usuario</h6>
            <Link href={`/usuario/${relatorio.idUsuario}`} className="relative top-1 text-red-600">
              <h6>Voltar para a página de usuario</h6>
              <SetaDireita/>
              </Link>
            </div>
        </div>

      </main>
    );
  }
  