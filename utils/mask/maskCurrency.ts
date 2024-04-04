import { maskNumeric } from "./maskNumbers"

export function maskCurrency(value: string | number) {
    if (typeof value === 'number') {
        return maskNumeric(value)
    } else {
        return value?.replace(/\D/g, "")
            .replace(/(\d)(\d{2})$/, "$1,$2")
            .replace(/(?=(\d{3})+(\D))\B/g, ".")
    }
}