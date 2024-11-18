import PaineisSolares from "@/images/info/paineis-solares.png"
import LeviInvert from "@/images/info/levi-logo-invertida.png"
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import LogoLevi from "@/images/levi-logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Informacao() {
  return (
    <main className="informacao">
      <div className="bagroundAqui">
        <Image src={LeviInvert} alt="logo-invertida"/>
      </div>
      <div className="resumo">
        <aside className="txt">
        <h1>LEVI</h1>
        <h4>Conheça a hístoria do LEVI</h4>
        <p>LEVI é um projeto criado em 2024. Cada letra do seu nome possui um significado: LUZ, ENERGIA, VIDA e INOVAÇÃO. Nosso objetivo é ajudar o meio ambiente por meio da utilização de energia renovável, mais especificamente, a energia solar. Este site permite que você, usuário, compreenda como a utilização da energia solar pode beneficiar sua vida. Para isso, criamos uma ferramenta que permite visualizar, com seus próprios olhos, a eficiência dessa fonte de energia renovável.</p>
        </aside>
        <aside className="img">
          <Image src={PaineisSolares} alt="paineis-solares"/>
        </aside>
      </div>
      <div className="time">
        <h2>Nosso time</h2>
        <h4>Você quer conhecê los?</h4>
        <p>Se sua resposta for sim então fique a vontade para procurar e conhecer onde foi criado e armazenado o projeto LEVI, é só apertar o link abaixo!</p>
        <div className="link">
          <Link href="/sobre">
          <h6>click aqui para conhecê los</h6>
          <SetaDireita/>
          </Link>
        </div>
        <Image src={LogoLevi} alt="logo-levi"/>
      </div>
      <div className="consideracoes">
        <h2>Considerações Finais</h2>
        <p>Viemos aqui para agradecer a cada professor que nos acompanhou durante essa jornada. Eles nos ajudaram a crescer e evoluir como pessoas, estudantes e futuros profissionais. Somos gratos por cada segundo que cada um dedicou a nós. O que somos capazes de fazer hoje é resultado do apoio e da ajuda de vocês. Foi incrível e divertido ter compartilhado esse tempo ao lado de cada um. Então, mais uma vez, muito obrigado!</p>
      </div>
    </main>
  )
}