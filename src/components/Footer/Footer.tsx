import Image from "next/image";
import LeviLogo from "@/images/levi-logo.png"
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import { FaGithub as GithubLogo} from "react-icons/fa";
import PainelSolar from "@/images/painel-solar-gray.png"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white text-xl px-10 gap-14">
      <div className="cima flex gap-40 flex-wrap">
        <aside className="info flex flex-col pr-64 gap-8 phone:max-md:p-0">
          <Image src={LeviLogo} alt="logo-levi"/>
          <h5 className="font-bold text-2xl">Luz, Energia, Vida e Inovação</h5>
          <p className="w-80 text-gray-400 phone:max-md:w-auto">Nosso projeto visa a mudança da utilização de energia não renovavel, afim de ajudar o meio ambiente.</p>
          <Link href="/informacoes" className="flex gap-5 font-bold">
            <h5>Sobre LEVI</h5>
            <SetaDireita className="text-red-600 relative top-1"/>
          </Link>
        </aside>
        <nav className="grid grid-cols-2 h-1 gap-10 self-center relative bottom-14 font-bold">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/usuario/login">Usuario</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/informacao">Informação</Link>
        </nav>
        <aside className="redes self-center relative bottom-2 text-2xl">
          <div className="flex text-gray-400 pb-10">
            <h6>Acompanhe LEVI</h6>
            <Image src={PainelSolar} alt="painel-solar-img"/>
          </div>
          <a href="https://github.com/LEVI-FIAP" className="flex justify-center text-4xl">
            <GithubLogo />
          </a>
        </aside>
      </div>
      <div className="baixo justify-center flex pt-5 text-gray-400 border-t-2 border-gray-500">
        <h5>Todos os direitos reservados &copy; 2024 LEVI</h5>
        <Image src={PainelSolar} alt="painel-solar-img" className="phone:max-md:h-7 phone:max-md:w-7"></Image>
      </div>
    </footer>
  )
}
