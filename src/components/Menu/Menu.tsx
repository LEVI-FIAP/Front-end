import Image from "next/image";
import LeviLogoInvert from "@/images/header/levi-logo-invert.png"
import { PiUserCircleFill as User } from "react-icons/pi";
import { RiUserSearchLine as UserDados} from "react-icons/ri";
import Link from "next/link";


export default function Menu() {
  return (
    <div className="opUser">
        <div className="logo">
          <Image src={LeviLogoInvert} alt="logo-levi-invert"/>
        </div>
        <div className="opcoes">
          
          <User/>

          <div className="recepcao">
            <h3>Bem Vindo!!</h3>
          </div>

          <nav>
            <Link href="/usuario/login">Logar</Link>
            <Link href="/usuario/cadastro">Cadastrar</Link>
          </nav>

          <div className="dados">
            <h3>Veja os seus dados</h3>
            <UserDados/>
          </div>
        </div>
    </div>
  )
}