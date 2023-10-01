export interface ResetPasswordSchema {
    email: string
    error: string | undefined
    status: 'idle' | 'loading'
}