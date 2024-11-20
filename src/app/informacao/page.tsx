import PaineisSolares from "@/images/info/paineis-solares.png"
import PaineisSolaresCima from "@/images/info/paineis-solares-cima.png"
import LeviInvert from "@/images/info/levi-logo-invertida.png"
import { TipoProfessor } from "@/types";
import Pessoa from "@/images/home/pessoa.png"
import { FaCircleArrowRight as SetaDireita} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Professores from "@/components/Professores/Professores";

export default function Informacao() {

  const professores : TipoProfessor[] = [
    {
      img : Pessoa,
      nome : "Rodolfo Rodrigues Moreira",
      materia : "Artificial Intelligence & Chatbot",
      github: "linkGithub",
      linkedin: "linkLinkedin",
    },
    {
      img : Pessoa,
      nome : "Marcel Thome Filho",
      materia : "Building Relation Database",
      github: "linkGithub",
      linkedin: "linkLinkedin",
    },
    {
      img : Pessoa,
      nome : "Computational Thinking Using Python",
      materia : "Antonio Rodrigues Carvalho Neto",
      github: "linkGithub",
      linkedin: "linkLinkedin",
    },
    {
      img : Pessoa,
      nome : "Domain Drive Design Using Java",
      materia : "Eliane Rodrigues Marion Santa Rosa",
      github: "linkGithub",
      linkedin: "linkLinkedin",
    },
    {
      img : Pessoa,
      nome : "Front-end Design Engineering",
      materia : "Alexandre Carlos de Jesus",
      github: "linkGithub",
      linkedin: "linkLinkedin",
    },
    {
      img : Pessoa,
      nome : "Software Engineering and Business Model",
      materia : "Luiz Wanderley Tavares",
      github: "linkGithub",
      linkedin: "linkLinkedin",
    },
  ]

  return (
    <main className="informacao flex flex-col gap-80">
      <div className="bg-[url('../assets/fundo.png')] bg-cover bg-center">
        <Image src={LeviInvert} alt="logo-invertida" className="w-101"/>
      </div>
      <div className="resumo flex justify-between phone:max-lg:flex-col">
        <div>
          <Image src={PaineisSolaresCima} alt="paineis-solares" className="hidden phone:max-lg:flex phone:max-lg:bg-cover phone:max-lg:bg-center"/>
        </div>
        <aside className="txt w-50 pl-10 text-3xl flex flex-col gap-10 font-bold phone:max-lg:w-auto phone:max-lg:pt-5 phone:max-lg:text-2xl">
        <h1 className="text-6xl pb-20 phone:max-lg:text-5xl">LEVI</h1>
        <h4>Conheça a hístoria do LEVI</h4>
        <p className="font-normal">LEVI é um projeto criado em 2024. Cada letra do seu nome possui um significado: LUZ, ENERGIA, VIDA e INOVAÇÃO. Nosso objetivo é ajudar o meio ambiente por meio da utilização de energia renovável, mais especificamente, a energia solar. Este site permite que você, usuário, compreenda como a utilização da energia solar pode beneficiar sua vida. Para isso, criamos uma ferramenta que permite visualizar, com seus próprios olhos, a eficiência dessa fonte de energia renovável.</p>
        </aside>
        <aside className="img">
          <Image src={PaineisSolares} alt="paineis-solares" className="bg-slate-400 px-10 phone:max-lg:hidden"/>
        </aside>
      </div>
      <div className="time bg-[url('../assets/imagem-time.png')] bg-cover bg-center text-white px-20 py-10 font-bold text-2xl flex flex-col gap-16">
        <h2 className="text-4xl">Nosso time</h2>
        <h4 className="text-3xl">Você quer conhecê los?</h4>
        <p className="w-96 font-normal phone:max-sm:w-auto">Se sua resposta for sim então fique a vontade para procurar e conhecer onde foi criado e armazenado o projeto LEVI, é só apertar o link abaixo!</p>
        <div className="link">
          <Link href="/sobre" className="flex py-10 border-t-2 border-white w-96 gap-10 phone:max-sm:w-auto">
            <h6 className="font-normal">click aqui para conhecê los</h6>
            <SetaDireita className="text-red-600 relative top-1"/>
          </Link>
        </div>
      </div>
      <div className="consideracoes">
        <h2>Considerações Finais</h2>
        <p>Viemos aqui para agradecer a cada professor que nos acompanhou durante essa jornada. Eles nos ajudaram a crescer e evoluir como pessoas, estudantes e futuros profissionais. Somos gratos por cada segundo que cada um dedicou a nós. O que somos capazes de fazer hoje é resultado do apoio e da ajuda de vocês. Foi incrível e divertido ter compartilhado esse tempo ao lado de cada um. Então, mais uma vez, muito obrigado!</p>

        <div className="Carrosel">
          <Professores listaSlides={professores} />
        </div>
      </div>


    </main>
  )
}