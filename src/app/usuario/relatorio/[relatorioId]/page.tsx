import PainelImg from "@/images/relatorio/painel.png"
import MoedasImg from "@/images/relatorio/moedas.png"
import CofrinhoImg from "@/images/relatorio/cofrinho.png"
import DinheiroImg from "@/images/relatorio/dinheiro.png"
import { TipoRelatorio } from "@/types";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowCircleRight as SetaDireita} from "react-icons/fa";
import Image from "next/image";

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

    useEffect(() => {
        
      const chamadaApi = async () =>{
          const response = await fetch(`http://localhost:8080/gslevi_war/reports/${params.relatorioId}`);
          const dados = await response.json();
          setRelatorio(dados);
      }
  
      chamadaApi();
  
  }, [params.relatorioId])

    return (
      <main>
        <div className="intro">
          <aside className="txt">
            <h1>Relatório {params.relatorioId}</h1>
            <p>Veja os detalhes e contas que utilizamos para o descobrimento do seu investimento no sistema solar</p>

            <div className="link">
              <Link href={`/usuario/${relatorio.idUsuario}`}></Link>
              <h6>Veja todos os seus relatorios</h6>
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
              <h2>Você terá um retorno em {relatorio.payback} mêses</h2>
            </aside>
          </div>

        </div>
        <div className="fim">
          <aside className="txt">
            <h2>Comparação da suas contas</h2>
            <h5> Antes: X / Agora: X</h5>
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
  