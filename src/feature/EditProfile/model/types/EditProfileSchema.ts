type FieldsAndErrors = {
    adress: ['empty', 'exceedsMaxLenght', 'hasBannedSymbols']
    name: ['empty', 'exceedsMaxLenght']
    uploadedAvatarMimeType: ['invalidMimeType']
    avatarCropped: ['empty']
}

type ValidationErrosFlags = ErrrosFlags<FieldsAndErrors>

export type Config = ErrorsConfig<ValidationErrosFlags>

export type RequestError = 'Такой адрес уже занят' | 'Такое имя уже занято' | 'Произошла неожиданная ошибка'

export interface EditProfileSchema {
    adress: string
    initialAdress: string
    name: string
    initialName: string
    uploadedAvatarMimeType: string | undefined
    avatarCroppedExist: boolean
    validationErrors: ValidationErrosFlags
    requestError?: RequestError
    status: 'edit' | 'idle' | 'crop' | 'loading' | 'saved'
    progress?: number
}