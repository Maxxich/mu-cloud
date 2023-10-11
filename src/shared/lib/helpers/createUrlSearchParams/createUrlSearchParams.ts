export function createUrlSearchParams<T extends URLSearchParams>(params: T) {
    return new URLSearchParams(params).toString()
}