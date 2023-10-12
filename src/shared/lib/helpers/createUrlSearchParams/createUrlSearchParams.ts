export function createUrlSearchParams(params: OptionalRecord<string, string | number>) {
    const recordParams: Record<string, string> = {}
    const keys = Object.keys(params)
    for (let i in keys) {
        const param = params[keys[i]]
        if (param) recordParams[keys[i]] = param.toString()
    }
    
    return new URLSearchParams(recordParams).toString()
}
