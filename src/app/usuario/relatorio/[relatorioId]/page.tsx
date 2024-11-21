"use client"
import PainelImg from "@/images/relatorio/painel.png"
import MoedasImg from "@/images/relatorio/moedas.png"
import CofrinhoImg from "@/images/relatorio/cofrinho.png"
import DinheiroImg from "@/images/relatorio/dinheiro.png"
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
    <main className="usuarioInvalido">
      <h1>Erro ao validar Relatorio</h1>
      <p>{erro}</p>
      <Link href="/">Voltar para Home</Link>
    </main>
  )
}
    return (
      <main>
        <div className="intro bg-[url('../assets/fundo-relatorio.png')] bg-cover bg-center text-white px-20 py-32 flex flex-col gap-10 font-bold text-xl phone:max-md:text-lg phone:max-md:px-2">
          <aside className="txt">
            <h1>Relatório {params.relatorioId}</h1>
            <p>Veja os detalhes e contas que utilizamos para o descobrimento do seu investimento no sistema solar</p>

            <div className="link">
              <Link href={`/usuario/relatorio/editar/${params.relatorioId}`}></Link>
                <h6>Editar Relatorio</h6>
                <SetaDireita/>
            </div>
          </aside>
          <aside className="graficos">
            <div className="grafico1"></div>
            <div className="grafico2"></div>
            <div className="grafico3"></div>
          </aside>
        </div>
        <div className="meio">
          <div className="qtdPainel">
            <aside className="img">
              <Image src={PainelImg} alt="img-painel"/>
            </aside>
            <aside className="conteudo">
              <h2>Quantidade de painéis</h2>
              <p>Veja quanto painéis serão necessarios para gerar a energia necessario com base no tamanho do local que você nos informou, o tamanho médio de um painél é 1.7m</p>
              <h3>Fórmula = </h3>
              <div className="parteCima">
                <h3>Área DIsponivel(m²)</h3>
              </div>
              <div className="parteBaixo">
                <h3>Área de um painél</h3>
              </div>
              <h4>{relatorio.areaDesejada} / 1.7m²</h4>
              <h2>{relatorio.qtdPaineis} Painéis</h2>
            </aside>

          </div>
          <div className="custoTotal">
            <aside className="img">
              <Image src={MoedasImg} alt="moedas-img"/>
            </aside>
            <aside className="conteudo">
              <h2>Custo Total</h2>
              <p>Veja o quanto você tera que investir para fazer essa transição de energia, lembresse os gastos que você tera hoje podera ser um grande investimento para todos, pois ajudaram o meio ambiente e claro a você mesmo</p>
              <h3>Formula = Potência Total x Custo por kW</h3>
              <h4>{relatorio.potenciaTotal} / R$5250</h4>
              <h2>Custo total para instalação de R${relatorio.custoInstalacao}</h2>
            </aside>
          </div>
          <div className="economiaMensal">
            <aside className="img">
              <Image src={CofrinhoImg} alt="cofrinho-img"/>
            </aside>
            <aside className="conteudo">
              <h2>Economia Mensal</h2>
              <p>Aqui você vê o quanto ira economizar utilizando a troca de energia,pois é algo que realmente pode influenciar em seus negócios, diminuindo as dividas com energia que você tem.</p>
              <h3>Formula = Potência Total x Economia de kW por mês</h3>
              <h4>{relatorio.potenciaTotal} / R$425</h4>
              <h2>Economia Mensal de R${relatorio.economiaMensal}</h2>
            </aside>
          </div>
          <div className="payback">
            <aside className="img">
              <Image src={DinheiroImg} alt="dinheiro-img"/>
            </aside>
            <aside className="conteudo">
              <h2>Payback</h2>
              <p>Aqui você vê o tempo em que o seus investimento retorna para você assim mostrando se é vantajoso ou não para você</p>
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
          </div>

        </div>
        <div className="fim">
          <BtnPgs Icon={Lapis} texto="Editar Relatorio" link={`/usuario/relatorio/editar/${params.relatorioId}`}/>
          <aside className="txt">
            <p>Esperamos que com esse investimento você decida se é vantajoso ou não, lembre-se a sua ajuda importa muito</p>
            <div className="link">
              <Link href={`/usuario/${relatorio.idUsuario}`}>
                <h6>Voltar para a página de usuario</h6>
                <SetaDireita/>
              </Link>
            </div>
          </aside>
          <aside className="graficos">
            <div className="grafico1"></div>
            <div className="grafico2"></div>
            <div className="grafico3"></div>
          </aside>
        </div>
      </main>
    );
  }
  