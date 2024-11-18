import FiapLogo from "@/images/fiap-logo.png"
import PainelSolar from "@/images/sobre/painel-solar.png"
import ErickImg from "@/images/sobre/erick-img.png"
import LuizImg from "@/images/sobre/luiz-img.png"
import { FaGithub as GithubLogo, FaLinkedin as LinkedinLogo, FaInstagram as InstaLogo} from "react-icons/fa";
import Image from "next/image"

export default function Sobre() {
  return (
    <main className="sobre">
      <div className="intro">
        <aside className="fiap">
          <Image src={FiapLogo} alt="fiap-logo"/>
        </aside>
        <aside className="texto">
          <h2>Quem Somos!</h2>
          <p>Somos estudantes do primeiro ano de Análise e Desenvolvimento de Sistemas dentro da FIAP, somos os responsaveis por criar esse website. Aqui oferecemos ferramentas para te conscientizar e ajudar o meio ambiente com base nas suas próprias ações, porque juntos podemos mudar o mundo.</p>
        </aside>
      </div>
      <div className="criadores">
        <h2>Criadores de LEVI</h2>
        <Image src={PainelSolar} alt="painel-solar"/>
        <h5>Turma: 1TDSPM</h5>

        <figure className="erick">
          <Image src={ErickImg} alt="erick-img"/>
          <figcaption>
            <h3>Erick Alves Xavier dos Santos</h3>
            <h4>RM 556862</h4>
            <a href=""><GithubLogo/></a>
            <a href=""><LinkedinLogo/></a>
            <a href=""><InstaLogo/></a>
          </figcaption>
        </figure>
        <figure className="luiz">
          <Image src={LuizImg} alt="luiz-img"/>
          <figcaption>
            <h3>Luiz Henrique Neri Reimberg</h3>
            <h4>RM 556864</h4>
            <a href=""><GithubLogo/></a>
            <a href=""><LinkedinLogo/></a>
            <a href=""><InstaLogo/></a>
          </figcaption>
        </figure>
        <figure className="vicenzo">
          {/* <Image src={ErickImg} alt="vicenzo-img"/> */}
          <figcaption>
            <h3>O mais lindo</h3>
            <h4>RM 554833</h4>
            <a href=""><GithubLogo/></a>
            <a href=""><LinkedinLogo/></a>
            <a href=""><InstaLogo/></a>
          </figcaption>
        </figure>
      </div>
    </main>
  )
}
