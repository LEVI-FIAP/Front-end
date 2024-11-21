"use client"
import { FaInfoCircle as InformacaoMark, FaQuestion as QuestionMark} from "react-icons/fa";
import { IoPeopleCircleOutline as PessoasMark, IoLogInOutline as LoginMark} from "react-icons/io5";
import { GiArchiveRegister as CadastroMark} from "react-icons/gi";
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import Link from "next/link";
import BtnPgs from "@/components/BtnPgs/BtnPgs";
import Carrossel from "@/components/Carrossel/Carrosel";
import ResponsavelImg from "@/images/home/responsaveis.png"
import PessoaImg from "@/images/home/pessoa.png"
import FaqImg from "@/images/home/faq.png"
import LoginImg from "@/images/home/login.png"
import CadastroImg from "@/images/home/cadastro.png"
import { TipoCarrosel } from "@/types";

export default function Home() {

  const listaSlide : TipoCarrosel[] = [
    {
      img : ResponsavelImg,
      subtitulo : "Conheça os responsaveis",
      texto : "Aqui você pode encontrar os responsaveis por planejar e criar LEVI",
      link : "/sobre",
      Icon : PessoasMark,
    },
    {
      img : PessoaImg,
      subtitulo : "Sobre nosso sistema",
      texto : "Aqui o usuário pode descobrir as ferramentas disponíveis em nosso site.",
      link : "/informacao",
      Icon : InformacaoMark,  
    },
    {
      img : FaqImg,
      subtitulo : "FAQ",
      texto : "Aqui você pode tirar algumas dúvidas sobre nosso sistema.",
      link : "/faq",
      Icon : QuestionMark,  
    },
    {
      img : LoginImg,
      subtitulo : "Login",
      texto : "Aqui o senhor(a) pode realizar um login para acessar os restos das nossas funções do nosso sistema.",
      link : "/usuario/login",
      Icon : LoginMark,  
    },
    {
      img : CadastroImg,
      subtitulo : "Cadastro",
      texto : "Aqui você pode cadastrar um usúario para ter acesso as nossas funções.",
      link : "/usuario/cadastro",
      Icon : CadastroMark,  
    }
  ]
  
  return (
    <main className="home">
      <div className="intro bg-[url('../assets/home-fundo.png')] bg-cover bg-center text-white px-20 py-32 flex flex-col gap-10 font-bold text-xl phone:max-md:text-lg phone:max-md:px-2">
        <h1 className="text-3xl phone:max-md:text-xl">Bem Vindo ao Projeto L.E.V.I</h1>
        <p className="w-96 phone:max-md:w-auto">Embarque nessa experiencia para descobrir como ajudar e melhorar a saúde do nosso planeta!!</p>
        <Link href="/usuario/login" className="bg-red-950 w-max px-5 py-2 rounded-lg phone:max-md:w-auto">Aperte Aqui para Começar</Link>
        <div className="link flex gap-5 border-t-2 border-white w-96 pt-10 mt-16 phone:max-md:w-auto">
          <h6>Conheça tudo sobre LEVI</h6>
          <Link href="/informacao">
          <SetaDireita className="relative top-1 text-red-800 "/>
          </Link>
        </div>
      </div>
      <div className="paginas flex flex-col gap-5 pl-10 pt-10 pb-5 font-bold phone:max-md:px-0">
        <h3 className="text-4xl phone:max-md:text-2xl">Conheça as Paginas Disponiveis</h3>
        <div className="Links flex gap-10 flex-wrap phone:max-md:gap-2">
          <BtnPgs Icon={PessoasMark} texto="Sobre" link="/sobre"/>
          <BtnPgs Icon={InformacaoMark} texto="Informação" link="/informacao"/>
          <BtnPgs Icon={QuestionMark} texto="FAQ" link="/faq"/>
          <BtnPgs Icon={LoginMark} texto="Login" link="/usuario/login"/>
          <BtnPgs Icon={CadastroMark} texto="FAQ" link="/faq"/>
        </div>
      </div>
      <div className="carrosel">
        <Carrossel listaSlides={listaSlide}/>
      </div>
    </main>
  )
}
