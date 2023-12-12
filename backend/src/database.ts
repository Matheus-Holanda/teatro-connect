export interface iTeatro {
    id: number,
    cidade: string,
    nome: string,
    distancia: number,
    perfilCusto: number,
    avaliacao: number
}

export interface iUsuarios {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    senha: string,
    cpf: string,
    dataNascimento: string,
    isAdmin: boolean
}

export enum eAcompanhamentos {
    bebida = "Bebida",
    comida = "Comida"
}

export interface iAcompanhamentos {
    id: number,
    nome: string,
    preco: number,
    isCombo: boolean,
    tipo: eAcompanhamentos,
    gramatura: string
}

export enum eFatura {
    credito = "Credito",
    debito = "Débito",
    avista = "À vista"
}

export enum eFormaPagamento {
    pix = "PIX",
    credito = "Crédito",
    debito = "Débito"
}

export interface iFaturas {
    id: number,
    numeroTicket: number,
    nomeEvento: string,
    descricaoEvento: string,
    notaEvento: number,
    fotoEvento: string,
    dataEvento: Date,
    assentosSelecionados: string[],
    tipoBilhetes: string[],
    acompanhamentos: iAcompanhamentos[],
    formaPagamento: eFormaPagamento,
    valor: number,
    data: Date
}

export enum eCartao {
    credito = "Crédito",
    debito = "Débito"
}

export interface iCartao {
    id: number,
    nome: string,
    numero: string,
    expDate: string, 
    cvv: string,
    tipo: eCartao
}

export interface iEventos {
    id: number,
    nome: string,
    avaliacao: string,
    preco: number,
    dataExibicao: Date
}

export const Teatro: iTeatro[] = [];
export const Usuarios: iUsuarios[] = [];
export const Acompanhamentos: iAcompanhamentos[] = [];
export const Faturas: iFaturas[] = [];
export const Cartao: iCartao[] = [];
export const Eventos: iEventos[] = [];