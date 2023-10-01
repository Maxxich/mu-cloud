export type ErrorMessage = 'Сервер недоступен' | 'Ссылка устарела'

export type Config = {
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

export interface ConfirmResetPasswordSchema {
    passwordConfirm: string
    password: string 
    status: 'idle' | 'loading' | 'error' | 'success',
    errorMessage?: ErrorMessage
    validationErrors: ValidationErrors
    requestError?: string | undefined
}