export type ErrorMessage = 'Сервер недоступен' | 'Неправильные данные для входа'

export type Config = {
    email: {
        messages: {
            empty: string
            notEmailFormat: string
            hasBannedSymbols: string
        },
        bannedSymbols: string[]
    },
    name: {
        messages: {
            exceedsMaxLenght: string
            empty: string
        }
        maxLenght: number
    }
    passwordConfirm: {
        messages: {
            empty: string
            notEqualsToPassword: string
        },
    },
    password: {
        messages: {
            empty: string
            exceedsMaxLenght: string
            exceedsMinLenght: string
            hasBannedSymbols: string
        },
        bannedSymbols: string[]
        maxLenght: number
        minLenght: number
    },
}

type ValidationErrors = {
    email: {
        empty: boolean
        notEmailFormat: boolean
        hasBannedSymbols: boolean
    }
    name: {
        empty: boolean
        exceedsMaxLenght: boolean
    },
    password: {
        empty: boolean
        exceedsMaxLenght: boolean 
        exceedsMinLenght: boolean
        hasBannedSymbols: boolean
    },
    passwordConfirm: {
        empty: boolean
        notEqualsToPassword: boolean
    },
}

export interface SignupSchema {
    email: string
    name: string
    passwordConfirm: string
    password: string 
    status: 'idle' | 'loading' | 'error' | 'success',
    errorMessage?: ErrorMessage
    validationErrors: ValidationErrors
    requestError?: string | undefined
}