"use client"
import Image from "next/image";
import { BsFillTelephoneFill as Telefone} from "react-icons/bs";
import { MdKeyboardArrowRight as Seta} from "react-icons/md";
import DuvidaImg from "@/images/faq/duvida-img.png"
import { useState } from "react";

export default function Faq() {

  const [modaisAbertos, setModaisAbertos] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
});



  const mudarModal = (id:number) => {
    setModaisAbertos((statusPrevia) => ({
      ...statusPrevia,
      [id]: !statusPrevia[id],
    }));
    }
  
  return (
    <main className="faq">
      <div className="intro">
        <h1>Perguntas Frequentes</h1>
        <h4>Veja as perguntas mais feitas por todos usuarios, caso sua duvida não tenha sido resolvida entre em contato com nós</h4>
        <div className="contato">
        <a href="mailto:luizhneri11@gmail.com?subject=Contato&body=Escreva%20sua%20mensagem%20aqui">
          <h6>Entre em contato</h6>
          <Telefone />
        </a>
        </div>
      </div>
      <Image src={DuvidaImg} alt="img-duvida"/>
      <div className="perguntas">
        <h1>FAQ&apos;s</h1>
        <div className="pergunta">
          <div className="duvida">
            <h3>Por que utilizar?</h3>
            <button onClick={()=> mudarModal(1)} className={`${modaisAbertos[1] ? "aberto": "fechado"}`}><Seta/></button>
          </div>
          <dialog open={modaisAbertos[1]} className="perguntas-modal">     
            <p>Porque aqui oferecemos ferramentas para te concientizar e ajudar o meio ambiente com base nas suas próprias ações, você terá a facilidade e rapidez em calcular seus gastos com energia, alem de ver em quanto tempo essa mudança de fonte de energia seria bom para vc.</p>
          </dialog>
        </div>

        <div className="pergunta">
          <div className="duvida">
            <h3>Como Cadastrar?</h3>
            <button onClick={()=> mudarModal(2)} className={`${modaisAbertos[2] ? "aberto": "fechado"}`}><Seta/></button>
          </div>
          <dialog open={modaisAbertos[2]} className="perguntas-modal">     
            <p>Para realizar o cadastro você deve ir até o topo da pagina e apertar o icone de usuario, após isso aparecera um menu, assim você só precisara apertar o link de cadastro. Caso o problema não tenha sido resolvido entre em contato conosco.</p>
          </dialog>
        </div>

        <div className="pergunta">
          <div className="duvida">
            <h3>Como eu vejo os meus dados?</h3>
            <button onClick={()=> mudarModal(3)} className={`${modaisAbertos[3] ? "aberto": "fechado"}`}><Seta/></button>
          </div>
          <dialog open={modaisAbertos[3]} className="perguntas-modal">     
            <p>Para ver os seus dados você deve apertar na seta do menu, porque assim aparecera varios links, você deve selecionar o link de usuario, e pronto, seus dados estarão ai. Caso o problema não tenha sido resolvido entre em contato conosco.</p>
          </dialog>
        </div>
      </div>

    </main>
  )
}
