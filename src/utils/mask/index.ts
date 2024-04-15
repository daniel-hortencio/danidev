import { maskCPF } from "./maskCPF";
import { maskPhoneBR } from "./maskPhone";
import { maskCEP } from "./maskCEP";
import { maskOAB } from "./maskOAB";
import { maskCNPJ } from "./maskCNPJ";
import { maskNumeric, maskRemoveNonNumeric } from "./maskNumbers";

export const mask = {
  cpf: (value: string) => {
    return maskCPF(value);
  },
  phoneBR: (value: string) => {
    return maskPhoneBR(value);
  },
  cep: (value: string) => {
    return maskCEP(value);
  },
  cnpj: (value: string) => {
    return maskCNPJ(value);
  },
  removeNonNumeric: (value: string) => {
    return maskRemoveNonNumeric(value);
  },
  numeric: (value: number) => {
    return maskNumeric(value);
  },
  oab: (value: string) => {
    return maskOAB(value);
  },
};
