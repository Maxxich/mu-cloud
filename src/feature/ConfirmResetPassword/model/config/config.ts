import { Config } from '../types/ConfirmResetPasswordSchema'

export const config: Config = {
    password: {
        messages: {
            empty: 'Пароль не должен быть пустым',
            exceedsMaxLenght: 'Длина пароля должна быть не более 50 символов',
            exceedsMinLenght: 'Длина пароля должна быть не менее 8 символов',
            hasBannedSymbols: 'Пароль не должен содержать пробелы'
        },
        maxLenght: 50,
        minLenght: 8,
        bannedSymbols: [
            ' '
        ],
    },
    passwordConfirm: {
        messages: {
            empty: 'Пароль не подтвержден',
            notEqualsToPassword: 'Пароли не совпадают'
        },
    },
}