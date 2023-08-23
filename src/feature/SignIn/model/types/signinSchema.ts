export type ErrorMessage = 'Сервер недоступен' | 'Неправильные данные для входа'

export interface SigninSchema {
    email: string | undefined
    password: string | undefined
    status: 'idle' | 'loading' | 'error' | 'success',
    errorMessage?: ErrorMessage
}