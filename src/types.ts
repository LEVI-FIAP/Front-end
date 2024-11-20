import { TipoRelatorio } from '@/types';
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type TipoUsuario = {
    id: number;
    email: string;
    senha: string;
    username: string;
}

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


export type TipoCarrosel = {
    img : string | StaticImageData;
    subtitulo : string;
    texto : string;
    link : string;
    Icon : IconType;
}

export type TipoProfessor = {
    img : string | StaticImageData;
    nome : string;
    materia : string;
    github: string;
    linkedin: string;
}


