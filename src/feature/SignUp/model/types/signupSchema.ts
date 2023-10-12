export type ErrorMessage = 'Сервер недоступен' | 'Неправильные данные для входа'

type FieldsAndErrors = {
    email: ['empty', 'notEmailFormat', 'hasBannedSymbols']
    name: ['exceedsMaxLenght', 'empty']
    passwordConfirm: ['empty', 'notEqualsToPassword']
    password: ['empty', 'exceedsMaxLenght', 'exceedsMinLenght', 'hasBannedSymbols']
}

type ValidationErrosFlags = ErrrosFlags<FieldsAndErrors>

export type Config = ErrorsConfig<ValidationErrosFlags>

export interface SignupSchema {
    email: string
    name: string
    passwordConfirm: string
    password: string 
    status: 'idle' | 'loading' | 'error' | 'success',
    errorMessage?: ErrorMessage
    validationErrors: ValidationErrosFlags
    requestError?: string | undefined
}