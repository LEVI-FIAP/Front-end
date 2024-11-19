import FiapLogo from "@/images/fiap-logo.png"
import PainelSolar from "@/images/sobre/painel-solar.png"
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
          <figcaption>
            <h3>Erick Alves Xavier dos Santos</h3>
            <h4>RM 556862</h4>
            <a href="https://github.com/Erick0105"><GithubLogo/></a>
            <a href="https://www.linkedin.com/in/erick-alves-295180235/"><LinkedinLogo/></a>
            <a href="https://www.instagram.com/erick_0105_/"><InstaLogo/></a>
          </figcaption>
        </figure>
        <figure className="luiz">
          <figcaption>
            <h3>Luiz Henrique Neri Reimberg</h3>
            <h4>RM 556864</h4>
            <a href="https://github.com/LuizHNR"><GithubLogo/></a>
            <a href="https://www.linkedin.com/in/luiz-henrique-neri-reimberg-6ab0032b8/"><LinkedinLogo/></a>
            <a href="https://www.instagram.com/loren_lhnr/"><InstaLogo/></a>
          </figcaption>
        </figure>
        <figure className="vicenzo">
          <figcaption>
            <h3>O mais lindo</h3>
            <h4>RM 554833</h4>
            <a href="https://github.com/fFukurou"><GithubLogo/></a>
            <a href="https://www.linkedin.com/in/vicenzo-massao-de-oliveira-2a8b35109/"><LinkedinLogo/></a>
            <a href="https://www.instagram.com/ffukurou_/"><InstaLogo/></a>
          </figcaption>
        </figure>
      </div>
    </main>
  )
}
