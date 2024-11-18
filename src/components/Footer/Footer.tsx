import Image from "next/image";
import LeviLogo from "@/images/levi-logo.png"
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import { FaGithub as GithubLogo} from "react-icons/fa";
import PainelSolar from "@/images/painel-solar-gray.png"
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <aside className="info">
        <Image src={LeviLogo} alt="logo-levi"/>
        <h5>Luz, Energia, Vida e Inovação</h5>
        <p>Nosso projeto visa a mudança da utilização de energia não renovavel, afim de ajudar o meio ambiente.</p>
        <Link href="/informacoes">
          <h5>Sobre LEVI</h5>
          <SetaDireita/>
        </Link>
      </aside>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/usuario/login">Usuario</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/informacao">Informação</Link>
      </nav>
      <aside className="redes">
        <h6>Acompanhe LEVI</h6>
        <Image src={PainelSolar} alt="painel-solar-img"/>
        <a href="https://github.com/LEVI-FIAP">
          <GithubLogo/>
        </a>
      </aside>
    </footer>
  )
}
