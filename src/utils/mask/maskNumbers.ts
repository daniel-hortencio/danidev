export function maskRemoveNonNumeric(value: string) {
  return value.replace(/\D/g, "");
}

export function maskNumeric(value: number) {
  return value.toLocaleString("pt-BR");
}
