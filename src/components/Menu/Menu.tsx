import Image from "next/image";
import LeviLogoInvert from "@/images/header/levi-logo-invert.png"
import { PiUserCircleFill as User } from "react-icons/pi";
import Link from "next/link";


export default function Menu() {
  return (
    <div className="opUser">
        <div className="logo">
          <Image src={LeviLogoInvert} alt="logo-levi-invert" className="bg-white bg-cover bg-center"/>
        </div>
        
        <div className="opcoes flex flex-col text-white">
          
          <User className="relative left-40 text-8xl text-gray-500 bottom-14 phone:max-sm:left-0"/>

          <div className="pb-20 px-10 flex flex-col gap-10">
            <div className="recepcao text-center border-b-2 border-gray-400 p-5">
              <h3>Bem-Vindo(a)!</h3>
            </div>

            <nav className="flex flex-col gap-10">
              <Link href="/usuario/login">Login</Link>
              <Link href="/usuario/cadastro">Cadastro</Link>
            </nav>
          </div>

        </div> 
    </div>
  )
}