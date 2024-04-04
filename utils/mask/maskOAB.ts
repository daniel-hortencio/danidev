export function maskOAB(oab: string) {
  return oab
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .slice(0, 8);
}

