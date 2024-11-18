"use client"

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDropdownCircle  as SetaBaixo} from "react-icons/io";
import { PiUserCircleFill as User } from "react-icons/pi";
import LeviLogo from "@/images/levi-logo.png"
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import Link from "next/link";

export default function Header() {

    const [navStatus, setNavStatus] = useState(false);
    const [opcoesStatus, setOpcoesStatus] = useState(false);

    const mudarNav = () => {
        setNavStatus(false);
        setOpcoesStatus(false);
        if(!navStatus){
            setNavStatus(true)
        }
    };

    const mudarOpcoes = () => {
        setOpcoesStatus(false);
        setNavStatus(false);
        if(!opcoesStatus){
            setOpcoesStatus(true)
        }
    };

  return (
    <header className="flex bg-black text-white justify-between text-2xl items-center px-10 py-8 phone:max-md:p-0 phone:max-md:flex-wrap" >
        <button onClick={() => mudarNav()} className="btnNav flex gap-2">
          <h4>Menu</h4>
          <SetaBaixo className="relative top-1"/>
        </button>

        <Link href="/">
          <Image src={LeviLogo} alt="levi-logo"/>
        </Link>
        
        <button onClick={() => mudarOpcoes()} className="btnUser text-5xl">
          <User/>
        </button>
        
        <dialog open={navStatus} className="menuNav">
          <button onClick={() => mudarNav()} className="fecharNav">X</button>
          <Nav/>
        </dialog>
        
        <dialog open={opcoesStatus} className="menuUsuario">
          <button onClick={() => mudarOpcoes()} className="fecharOpcoes">X</button>
          <Menu/>
        </dialog>
    </header>
  )
}