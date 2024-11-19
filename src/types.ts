import { IconType } from "react-icons";

export type TipoUsuario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export type TipoBtnPgs = {
    Icon : IconType;
    texto : string;
    link : string;
}