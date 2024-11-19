import { TipoUsuario } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  
  const navigate = useRouter();

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    email:"",
    senha:"",
    username:""
});

  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch("Coloca nossa API aqui",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify(usuario)
        });

        if(response.ok){
            setUsuario({
                  id:0,
                  email:"",
                  senha:"",
                  username:""
                });
            navigate.push("/usuario/");
        }

    } catch (error) {
        console.error("Falha no cadastramento de produtos: ", error);
        navigate.push("/error");
    }
}

  return (
    <main>
        <Link href="/">Home</Link>
        <h1>Página de Login</h1>
        <form onSubmit={handleSubmit} className="formCad">
               <h1>Cadastro de Produtos</h1>
              <div>
                  <label htmlFor="idEmail">Email</label>
                  <input type="email" name="email" id="idEmail" value={usuario.email} onChange={(e)=> setUsuario({...usuario, email:e.target.value}) } placeholder="Digite seu email" required/>
              </div>
              <div>
                  <label htmlFor="idSenha">Senha</label>
                  <input type="password" name="senha" id="idSenha" value={usuario.senha} onChange={(e)=> setUsuario({...usuario, senha: e.target.value})} placeholder="Digite sua senha" required/>
              </div>
              <div>
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
    </main>
  )
}
