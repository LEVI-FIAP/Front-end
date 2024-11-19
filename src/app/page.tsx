"use client"
import { FaInfoCircle as InformacaoMark, FaQuestion as QuestionMark} from "react-icons/fa";
import { IoPeopleCircleOutline as Pessoas} from "react-icons/io5";
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import Link from "next/link";
import BtnPgs from "@/components/BtnPgs/BtnPgs";
import Carrossel from "@/components/Carrossel/Carrosel";
import Responsavel from "@/images/home/responsaveis.png"
import Pessoa from "@/images/home/pessoa.png"
import { TipoSlidesHome } from "@/types";

export default function Home() {

  const listaSlide : TipoSlidesHome[] = [
    {
      img : Responsavel,
      subtitulo : "Conheça os responsaveis",
      texto : "Aqui você pode encontrar os responsaveis por planejar e criar LEVI",
      link : "/sobre",
      Icon : Pessoas,
    },
    {
      img : Pessoa,
      subtitulo : "Veja sobre nosso sistema",
      texto : "Aqui o usuário pode descobrir as ferramentas disponíveis em nosso site.",
      link : "/informacao",
      Icon : InformacaoMark,  
    },
    {
      img : Pessoa,
      subtitulo : "Login",
      texto : "Aqui você pode logar para ter acesso ao seu perfil e relatorios.",
      link : "/usuario/login",
      Icon : InformacaoMark,  
    }
  ]
  
  return (
    <main className="home">
      <div className="intro">
        <h1>Bem Vindo ao Projeto L.E.V.I</h1>
        <p>Embarque nessa experiencia para descobrir como ajudar e melhorar a saúde do nosso planeta!!</p>
        <Link href="/usuario/login">Aperte Aqui para Começar</Link>
        <div className="link">
          <h6>Conheça tudo sobre LEVI</h6>
          <Link href="/informacao">
          <SetaDireita/>
          </Link>
        </div>
      </div>
      <div className="paginas">
        <h3>Conheça as Paginas Disponiveis</h3>
        <div className="Links">
          <BtnPgs Icon={InformacaoMark} texto="Informação" link="/informacao"/>
          <BtnPgs Icon={Pessoas} texto="Sobre" link="/sobre"/>
          <BtnPgs Icon={QuestionMark} texto="FAQ" link="/faq"/>
        </div>
      </div>
      <div className="carrosel">
        <Carrossel listaSlides={listaSlide}/>
      </div>
    </main>
  )
}
