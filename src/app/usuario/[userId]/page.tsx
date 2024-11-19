// import { TipoRelatorio, TipoUsuario } from "@/types";
// import { useEffect, useState } from "react";

export default function Usuario({params}: {params: { userId: number }}) {
  
//   const [usuario, setUsuario] = useState<TipoUsuario>({
//       id: params.userId,
//       email:"",
//       senha:"",
//       username:""
//   });

//   const [relatorios, setRelatorios] = useState<TipoRelatorio[]>([]);

//   useEffect(() => {
        
//     const chamadaApi = async () =>{
//         const response = await fetch('Nossa api aqui');
//         const dados = await response.json();
//         setRelatorios(dados);
//     }

//     chamadaApi();

// }, [])

    return (
    <main>
        Usuario: {params.userId}
    </main>)
  }




  // ---------------------------------------------------------
//   "use client";

// import { TipoProduto } from "@/types";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function EditarProdutos({params}:{params:{id:number}}) {

//     const navigate = useRouter();

//     const [produto, setProduto] = useState<TipoProduto>({
//         id:0,
//         nome:"",
//         qtd:0,
//     });


//     useEffect(() => {
        
//       const chamadaApi = async () =>{
//           const response = await fetch(`http://localhost:3000/api/base-produtos/${params.id}`);
//           const dados = await response.json();
//           setProduto(dados);
//       }

//       chamadaApi();

//   }, [])


//     const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
//         e.preventDefault();
//         try {
            
//             const response = await fetch(`http://localhost:3000/api/base-produtos/${params.id}`,{
//                 method:"PUT",
//                 headers:{
//                     "Content-Type":"application/json"
//                     },
//                 body: JSON.stringify(produto)
//             });

//             if(response.ok){
//                 alert("Produto atualizado com sucesso.");
//                 //Resetando os campos do form atravé do useState:
//                 setProduto({
//                     id:0,
//                     nome:"",
//                     qtd:0,
//                     });
//                 // Redirecionando o usuário para a página de preodutos:
//                 navigate.push("/produtos");
//             }

//         } catch (error) {
//             console.error("Falha na atualização de produtos: ", error);
//             navigate.push("/error");
//         }
//     }

//   return (
//     <div>
//         <h1>Editar Produtos</h1>

//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="idNome">Nome produto</label>
//                     <input type="text" name="nome" id="idNome" value={produto.nome} onChange={(e)=> setProduto({...produto, nome:e.target.value}) } placeholder="Digite o nome do produto." required/>
//                 </div>
//                 <div>
//                     <label htmlFor="idQtd">Quantidade produto</label>
//                     <input type="number" name="qtd" id="idQtd" value={produto.qtd} onChange={(e)=> setProduto({...produto, qtd: parseInt(e.target.value)})} placeholder="Digite a quantidade do produto." required/>
//                 </div>
//                 <div>
//                     <button type="submit">Atualizar</button>
//                 </div>
//             </form>
//         </div>

//     <div>
//         <p>Nome       - {produto.nome}</p>
//         <p>Quantidade - {produto.qtd}</p>
//     </div>

//     </div>
//   )
// }