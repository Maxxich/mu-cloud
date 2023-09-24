
export type Config = {
    adress: {
        messages: {
            empty: string
            exceedsMaxLenght: string
            hasBannedSymbols: string
        }
        maxLenght: number,
        bannedSymbols: string[]
    },
    name: {
        messages: {
            empty: string,
            exceedsMaxLenght: string
        },
        maxLenght: number
    },
    uploadedAvatarMimeType: {
        messages: {
            invalidMimeType: string
        },
        validMimeTypes: (string | undefined)[]
    },
    avatarCropped: {
        messages: {
            empty: string
        }
    },
}

type ValidationErrors = {
    adress: {
        empty: boolean
        exceedsMaxLenght: boolean
        haveBannedSymbols: boolean
    },
    name: {
        empty: boolean
        exceedsMaxLenght: boolean
    },
    uploadedAvatarMimeType: {
        invalidMimeType: boolean
    },
    avatarCropped: {
        empty: boolean
    },
}

export type RequestError = 'Такой адрес уже занят' | 'Такое имя уже занято' | 'Произошла неожиданная ошибка'

export interface EditProfileSchema {
    adress: string
    initialAdress: string
    name: string
    initialName: string
    uploadedAvatarMimeType: string | undefined
    avatarCroppedExist: boolean
    validationErrors: ValidationErrors
    requestError?: RequestError
    status: 'edit' | 'idle' | 'crop' | 'loading' | 'saved'
}