"use client"
import BtnPgs from "@/components/BtnPgs/BtnPgs";
import { FaPencilAlt as Lapis} from "react-icons/fa";
import { TipoRelatorio, TipoUsuario} from "@/types";
import { useEffect, useState } from "react";
import Relatorios from "@/components/Relatorios/Relatorios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Usuario({params}: {params: { userId: number }}) {
  
  const navigate = useRouter();

  const [ usuario, setUsuario ] = useState<TipoUsuario>({
    id: params.userId,
    email: "",
    senha: "",
    username: "",
  })

  const [relatorios, setRelatorios] = useState<TipoRelatorio[]>([{
    id: 0,
    consumoMensal: 0,
    contaLuz: 0,
    areaDesejada: 0,
    qtdPaineis: 0,
    potenciaTotal: 0,
    custoInstalacao: 0,
    economiaMensal: 0,
    payback: 0,
    energiaMes: 0,
    idRegiao: 0,
    idUsuario: params.userId,
  }]);

  const [deletarModal, setDeletarModal] = useState(false);
  const [erroRelatorio, setErroRelatorio] = useState<string | null>(null)
  const [erroUsuario, setErroUsuario] = useState<string | null>(null)

  const mudarModal = () => {
    setDeletarModal(false);
    if(!deletarModal){
      setDeletarModal(true)
    }
  };

  useEffect(() => {
        
    const chamadaApi = async () =>{
      try{
        const respostaUsuario = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/users/${params.userId}`);

        if(!respostaUsuario.ok){
          throw new Error("Não existe usuario com este ID");
        }
        const dadosUsuario = await respostaUsuario.json();
        setUsuario(dadosUsuario);
        setErroUsuario(null)
        try {
          const respostaRelatorio = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/reports?user=${params.userId}`);
          
          if(!respostaRelatorio.ok){
            throw new Error("Este Usuario não possui relatorios");
          }
          const dadosRelatorio = await respostaRelatorio.json();
          setRelatorios(dadosRelatorio);
          setErroRelatorio(null)
        } catch (error){
          setErroRelatorio((error as Error).message)
        }
      } catch (error) {
        setErroUsuario((error as Error).message)
      }
    }

    chamadaApi();

}, [params.userId, relatorios])

const handleDelete = async ()=>{
  try {
      
      const response = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/users/${params.userId}`,{
          method:"DELETE",
          headers:{
              "Content-Type":"application/json"
              }
      });

      if(response.ok){
        navigate.push("/");
      }

  } catch (error) {
      console.error("Falha ao deletar usuario: ", error);
  }
}

if (erroUsuario){
  return (
    <main className="usuarioInvalido">
      <h1>Erro ao validar Usuario</h1>
      <p>{erroUsuario}</p>
      <Link href="/">Voltar para Home</Link>
    </main>
  )
}
    return (
    <main className="flex flex-col gap-14">
        <div className="intro bg-[url('../assets/fundo-usu.png')] bg-cover bg-center text-white px-20 py-36 flex flex-col gap-10 font-bold text-2xl phone:max-md:text-lg phone:max-md:px-2">
          <h1 className="text-5xl">{usuario.username}</h1>
          <p className="w-96 phone:max-sm:w-auto">Seja Bem vindo a página feita para você! Analíse e utilize das ferramentas que criamos especialmente para você usuario</p>
        </div>
        <div className="meio flex flex-col gap-20">
          <h2 className="text-center text-4xl font-bold">Bem vindo(a) Usuario</h2>
          <div className="texto bg-gray-100 p-20">
            <p>O projeto visa calcular a viabilidade da instalação de painéis solares com base na área disponível do usuário. Primeiro, determinamos quantos painéis cabem na área, considerando que cada painel ocupa 1,7 m². Com a quantidade de painéis, calculamos a potência total do sistema (kWp), multiplicando o número de painéis pela potência de cada painel (0,33 kW).
              Em seguida, estimamos a geração de energia mensal (kWh/mês), multiplicando a potência total pela quantidade de horas de sol diárias na região e por 30 dias. Com essa geração de energia, comparamos com o consumo do usuário para saber se o sistema será suficiente.
              Na parte financeira, calculamos o payback (tempo de retorno do investimento). Para isso, calculamos o custo total da instalação (R$ 5.250 por kW) e a economia mensal (R$ 425 por kW). Com esses valores, determinamos em quanto tempo o sistema se paga, proporcionando um retorno financeiro ao usuário.
              Esses cálculos ajudam a avaliar a viabilidade técnica e financeira da instalação de painéis solares, permitindo uma decisão informada sobre a adoção de energia solar.</p>
          </div>
          
        </div>

        <div className="relatorios">
            <h5>Aperte o botão abaixo para editar seus dados</h5>
            <div className="botaoUsu">
              <BtnPgs Icon={Lapis} texto="Editar Meus dados" link={`/usuario/editar/${params.userId}`}/>
            </div>
            <button onClick={() => mudarModal()}>Deletar Usuario</button>
        </div>      
        <dialog open={deletarModal}>
          <button onClick={() => mudarModal()}>X</button>
          <p>Você tem certeza que quer deletar sua conta? Perdera seus relatorios e sua conta para sempre</p>
          <button onClick={handleDelete}>Sim, quero deletar</button>
        </dialog>

        <div className="relatorios">
          <h5>Aperte o botão abaxio para criar um relatório</h5>
          <div className="botaoUsu">
            <BtnPgs Icon={Lapis} texto="Fazer um relatorio" link={`/usuario/relatorio/cadastrar/${params.userId}`}/>
          </div>
          {erroRelatorio ? (
            <div className="relatorioStatus">
              <h6>Você Ainda não possui Relatorios</h6>
            </div>
          ) : (

            <div className="relatorios">
            {relatorios.map((relatorio) => (
              <Relatorios key={relatorio.id} idRelatorio={relatorio.id}/>
            ))}
            </div>
          )}
        </div>
    </main>)
  }