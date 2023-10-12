export type ErrorMessage = 'Сервер недоступен' | 'Ссылка устарела'

type FieldsAndErrors = {
    passwordConfirm: ['empty', 'notEqualsToPassword']
    password: ['empty', 'exceedsMaxLenght', 'exceedsMinLenght', 'hasBannedSymbols']

}

type ValidationErrosFlags = ErrrosFlags<FieldsAndErrors>

export type Config = ErrorsConfig<ValidationErrosFlags>

export interface ConfirmResetPasswordSchema {
    passwordConfirm: string
    password: string 
    status: 'idle' | 'loading' | 'error' | 'success',
    errorMessage?: ErrorMessage
    validationErrors: ValidationErrosFlags
    requestError?: string | undefined
}