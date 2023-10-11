export function checkError<ErrorsObject extends Record<string, boolean>>(errorsObj?: ErrorsObject): boolean {
    if (!errorsObj) return false

    const entries = Object.entries(errorsObj)
    for (let entry in entries) {
        const [_, flag]: [keyof ErrorsObject, boolean] = entries[entry]
        if (flag) {
            return true
        }
    }
    return false 
}