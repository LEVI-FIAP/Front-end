import PainelSolar from "@/images/sobre/painel-solar.png";
import { FaGithub as GithubLogo, FaLinkedin as LinkedinLogo, FaInstagram as InstaLogo} from "react-icons/fa";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="sobre pb-20 flex flex-col gap-20">
      <div className="intro bg-[url('../assets/fundo-sobre.jpg')] bg-cover bg-center h-110">
        <aside className="texto flex flex-col justify-self-end w-110 text-white pr-20 pt-36 text-center gap-5 font-bold phone:max-md:w-auto phone:max-md:pr-0">
          <h2 className="text-4xl">Quem Somos!</h2>
          <p className="text-xl">Somos estudantes do primeiro ano de Análise e Desenvolvimento de Sistemas dentro da FIAP, somos os responsaveis por criar esse website. Aqui oferecemos ferramentas para te conscientizar e ajudar o meio ambiente com base nas suas próprias ações, porque juntos podemos mudar o mundo.</p>
        </aside>
      </div>
      <div className="criadores flex flex-col gap-10 font-bold">
        <div className="px-10 flex flex-col gap-10">
          <div className="flex">
            <h2 className="text-4xl">Criadores de LEVI</h2>
            <Image src={PainelSolar} alt="painel-solar" className="phone:max-md:w-7"/>
          </div>
          <h5 className="text-2xl">Turma: 1TDSPM</h5>
        </div>

        <div className="flex flex-col gap-20">
          <figure className="bg-[url('../assets/erick-img.png')] bg-cover bg-center bg-no-repeat phone:max-md:bg-left">
            <figcaption className="pessoa justify-self-end phone:max-md:justify-self-start">
              <h3>Erick Alves Xavier dos Santos</h3>
              <h4>RM 556862</h4>
              <div className="links">
                <a href="https://github.com/Erick0105"><GithubLogo/></a>
                <a href="https://www.linkedin.com/in/erick-alves-295180235/"><LinkedinLogo/></a>
                <a href="https://www.instagram.com/erick_0105_/"><InstaLogo/></a>
              </div>
            </figcaption>
          </figure>
          <figure className="bg-[url('../assets/luiz-img.png')] bg-cover bg-center phone:max-md:bg-right">
            <figcaption className="pessoa justify-self-start phone:max-md:justify-self-end">
              <h3>Luiz Henrique Neri Reimberg</h3>
              <h4>RM 556864</h4>
              <div className="links">
                <a href="https://github.com/LuizHNR"><GithubLogo/></a>
                <a href="https://www.linkedin.com/in/luiz-henrique-neri-reimberg-6ab0032b8/"><LinkedinLogo/></a>
                <a href="https://www.instagram.com/loren_lhnr/"><InstaLogo/></a>
              </div>
            </figcaption>
          </figure>
          <figure className="bg-[url('../assets/erick-img.png')] bg-cover bg-center bg-no-repeat phone:max-md:bg-left">
            <figcaption className="pessoa justify-self-end phone:max-md:justify-self-start">
              <h3>Vicenzo Massao de Oliveira</h3>
              <h4>RM 554833</h4>
              <div className="links">
                <a href="https://github.com/fFukurou"><GithubLogo/></a>
                <a href="https://www.linkedin.com/in/vicenzo-massao-de-oliveira-2a8b35109/"><LinkedinLogo/></a>
                <a href="https://www.instagram.com/ffukurou_/"><InstaLogo/></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  )
}
