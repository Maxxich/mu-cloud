import { Config } from '../types/signupSchema'

export const config: Config = {
    name: {
        messages: {
            empty: 'Имя не должно быть пустым',
            exceedsMaxLenght: 'Длина имени должна быть не более 15 символов'
        },
        maxLenght: 15
    },
    email: {
        messages: {
            empty: 'Email адрес не должен быть пустым',
            notEmailFormat: 'Неккоректный Email',
            hasBannedSymbols: 'Email не должен содержать пробелы'
        },
        bannedSymbols: [
            ' '
        ],
    },
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