import Image from "next/image";
import Link from "next/link";
import EnergiaSolar from "@/images/header/nav/solar.png"
import EnergiaEolica from "@/images/header/nav/eolica.png"
import EnergiaHidraulica from "@/images/header/nav/hidraulica.png"
import FiapLogo from "@/images/fiap-logo.png"

export default function Nav() {
  return (
    <div className="navegacao">

      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Quem Somos</Link>
        <Link href="/usuario/login">Usuario</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/informacao">Informação</Link>
      </nav>

      <div className="energias">

        <h5>Energias Limpas</h5>

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
      <Image src={FiapLogo} alt="Fiap-logo"/>
      <h6>Clique na página para fechar o menu</h6>
    </div>
  )
}