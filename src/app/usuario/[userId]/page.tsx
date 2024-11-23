"use client"
import BtnPgs from "@/components/BtnPgs/BtnPgs";
import { FaPencilAlt as Lapis} from "react-icons/fa";
import { TipoRelatorio, TipoUsuario} from "@/types";
import { useEffect, useState } from "react";
import Relatorios from "@/components/Relatorios/Relatorios";
import Link from "next/link"
import pesquisar from "@/images/pesquisar.jpg"
import Image from "next/image";

export default function Usuario({params}: {params: { userId: number }}) {
  
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
  const [usuarioDeletado, setUsuarioDeletado] = useState<string | null>(null)

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
    const NomeUser = usuario.username
    const response = await fetch(`https://gslevi-86130ccf0dc3.herokuapp.com/users/${params.userId}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"      
    }});
    if(response.ok){
      setUsuarioDeletado(`Usuario ${NomeUser} deletado com sucesso`)
    }


  } catch (error) {
      console.error("Falha ao deletar usuario: ", error);
  }
}
if (usuarioDeletado){
  return (
    <main className="usuarioDeletado flex bg-black text-white justify-center py-20 text-3xl font-bold hover:text-red-600">
      <p>{usuarioDeletado}</p>
    </main>
  )
}

if (erroUsuario){
  return (
    <main className="usuarioInvalido flex flex-col gap-5 py-5">
      <div className="flex justify-center">
        <Image src={pesquisar} alt="pesquisar" className="w-80"/>
      </div>
      <div className="flex flex-col self-center text-2xl font-bold text-center">
        <h1>Erro ao validar Usuario</h1>
        <p>{erroUsuario}</p>
        <Link href="/">Voltar para Home</Link>

      </div>
    </main>
  )
}
    return (
    <main className="flex flex-col gap-14">
        <div className="intro bg-[url('../assets/fundo-usu.png')] bg-cover bg-center text-white px-20 py-36 flex flex-col gap-10 font-bold text-2xl phone:max-md:text-lg phone:max-md:px-2">
          <h1 className="text-5xl">{usuario.username}</h1>
          <p className="w-96 phone:max-sm:w-auto">Seja bem-vindo(a) à página feita para você! Analise e utilize das ferramentas que criamos especialmente para você!</p>
            <button className="flex ml-10 p-2 text-xl hover:text-red-600 hover:border-red-600 border-2 border-gray-400 text-gray-400 rounded-xl w-max" onClick={() => mudarModal()}>Deletar Usuário</button>
        </div>
        <div className="meio flex flex-col gap-20">
          <h2 className="text-center text-4xl font-bold">Bem vindo(a) {usuario.username}</h2>
          <div className="texto bg-gray-100 p-20">
            <p>O projeto visa calcular a viabilidade da instalação de painéis solares com base na área disponível do usuário. Primeiro, determinamos quantos painéis cabem na área, considerando que cada painel ocupa 1,7 m². Com a quantidade de painéis, calculamos a potência total do sistema (kWp), multiplicando o número de painéis pela potência de cada painel (0,33 kW).
              Em seguida, estimamos a geração de energia mensal (kWh/mês), multiplicando a potência total pela quantidade de horas de sol diárias na região e por 30 dias. Com essa geração de energia, comparamos com o consumo do usuário para saber se o sistema será suficiente.
              Na parte financeira, calculamos o payback (tempo de retorno do investimento). Para isso, calculamos o custo total da instalação e a economia mensal. Com esses valores, determinamos em quanto tempo o sistema se paga, proporcionando um retorno financeiro ao usuário.
              Esses cálculos ajudam a avaliar a viabilidade técnica e financeira da instalação de painéis solares, permitindo uma decisão informada sobre a adoção de energia solar.</p>
          </div>
          
        </div>

        <div className="relatorios px-10">
            <h5>Aperte o botão abaixo para editar seus dados</h5>
            <div className="botaoUsu">
              <BtnPgs Icon={Lapis} texto="Editar Meus dados" link={`/usuario/editar/${params.userId}`}/>
            </div>
        </div>      
        <dialog open={deletarModal} className="text-white bg-black p-5">
          <div className="flex flex-col gap-2">
            <button className="flex justify-end" onClick={() => mudarModal()}>X</button>
            <p className="w-80 phone:max-sm:w-auto">Você tem certeza que quer deletar sua conta? Perdera seus relatorios e sua conta para sempre</p>
            <button onClick={handleDelete} className="hover:text-red-600">Sim, quero deletar</button>

          </div>
        </dialog>

        <div className="relatorios">
          <h5 className="px-10">Aperte o botão abaxio para criar um relatório</h5>
          <div className="botaoUsu px-10">
            <BtnPgs Icon={Lapis} texto="Fazer um relatorio" link={`/usuario/relatorio/cadastrar/${params.userId}`}/>
          </div>
        </div>

        <div>
          {erroRelatorio ? (
              <div className="relatorioStatus px-10">
                <h6>Você Ainda não possui Relatorios</h6>
              </div>
            ) : (

            <div className="carrosel Relatorios">
              <Relatorios relatorios={relatorios}/>
            </div>
          )}
        </div>
    </main>)
  }