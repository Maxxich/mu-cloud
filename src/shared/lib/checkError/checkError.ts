type ErrorsObject = Record<string, boolean>

export function checkError(errorsObj?: ErrorsObject): boolean {
    if (!errorsObj) return false

    const entries = Object.entries(errorsObj)
    for (let entry in entries) {
        const [_, flag]: [string, boolean] = entries[entry]
        if (flag) {
            return true
        }
    }
    return false 
}