"use client"

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDropdownCircle  as SetaBaixo} from "react-icons/io";
import { PiUserCircleFill as User } from "react-icons/pi";
import LeviLogo from "@/images/levi-logo.png"
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";

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
    <header>
        <button onClick={() => mudarNav()} className="btnNav">
          <h4>Menu</h4>
          <SetaBaixo/>
        </button>


        <Image src={LeviLogo} alt="levi-logo"/>
        
        <button onClick={() => mudarOpcoes()} className="btnUser">
          <User/>
        </button>
        
        <dialog open={navStatus} className="menuNav">
          <Nav/>
        </dialog>
        
        <dialog open={opcoesStatus} className="menuUsuario">
          <Menu/>
        </dialog>
    </header>
  )
}