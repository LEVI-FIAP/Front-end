import Image from "next/image";
import Link from "next/link";
import EnergiaSolar from "@/images/header/nav/solar.png"
import EnergiaEolica from "@/images/header/nav/eolica.png"
import EnergiaHidraulica from "@/images/header/nav/hidraulica.png"
import FiapLogo from "@/images/fiap-logo.png"

export default function Nav() {
  return (
    <div className="navegacao flex gap-20 py-10">

      <nav className="flex flex-col gap-10 pr-20 border-r-2 border-white phone:max-sm:pr-0 phone:max-sm:flex-row phone:max-sm:flex-wrap phone:max-sm:border-r-0">
        <Link href="/">Home</Link>
        <Link href="/sobre">Quem Somos</Link>
        <Link href="/usuario/login">Usuario</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/informacao">Informação</Link>
      </nav>

      <div className="energias flex flex-col gap-10 phone:max-nav:hidden">

        <h5>Energias Limpas</h5>

        <div className="flex gap-10">
          <figure className="solar">
            <Image src={EnergiaSolar} alt="Energia-Solar"/>
            <figcaption>
              <h5>Energia Solar</h5>
              <p>Placas solares convertem a luz do sol em eletricidade, oferencendo uma fonte limpa e renovável de energia.</p>
            </figcaption>
          </figure>

          <figure className="eolica">
            <Image src={EnergiaEolica} alt="Energia-Eolica"/>
            <figcaption>
              <h5>Energia Eólica</h5>
              <p>A energia eólica converte o vento em eletricidade, sendo uma fonte limpa e renovável de energia.</p>
            </figcaption>
          </figure>

          <figure className="hidraulica">
            <Image src={EnergiaHidraulica} alt="Energia-Hidraulica"/>
            <figcaption>
              <h5>Energia Hidráulica</h5>
              <p>A energia hidráulica é gerada a partir do movimento da água, geralmente em represas. É uma fonte renovável e eficiente, amplamente usada no mundo todo</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <Image src={FiapLogo} alt="Fiap-logo" className="h-8 flex self-end phone:max-sm:hidden"/>
    </div>
  )
}