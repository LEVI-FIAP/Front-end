import { IconType } from "react-icons";

export type TipoUsuario = {
    id: number;
    email: string;
    senha: string;
    username: string;
}

export type TipoBtnPgs = {
    Icon : IconType;
    texto : string;
    link : string;
}

/*
Norte - 1
Nordeste - 2
Centro oeste - 3
Sudeste - 4
Sul - 5
*/

export type TipoRelatorio = {
    id: number;
    consumoMensal: number;
    contaLuz: number;
    areaDesejada: number;
    qtdPaineis: number;
    potenciaTotal: number;
    custoInstalacao: number;
    economiaMensal: number;
    payback: number;
    energiaMes: number;
    idRegiao: number;
    idUsuario: number;
}