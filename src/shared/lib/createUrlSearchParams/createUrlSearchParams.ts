export function createUrlSearchParams(initialParams: any) {
    const keys = Object.keys(initialParams)
    const params: any = {}
    for (let i in keys) {
        const param = initialParams[keys[i]]
        if (param) params[keys[i]] = param.toString()
    }
    return new URLSearchParams(params).toString()
}