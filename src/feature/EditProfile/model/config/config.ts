import { Config } from '../types/EditProfileSchema'

export const config: Config = {
    adress: {
        maxLenght: 15,
        bannedSymbols: [
            ' ', '!', '?', '&', '.', ',', '/'
        ],
        messages: {
            empty: 'Адрес не должен быть пустым',
            exceedsMaxLenght: 'Длина адреса должна быть не более 15 символов',
            hasBannedSymbols: 'Адрес содержит запрещенные символы'
        }
    },
    name: {
        maxLenght: 15,
        messages: {
            empty: 'Имя не должно быть пустым',
            exceedsMaxLenght: 'Длина имени должна быть не более 15 символов',
        }
    },
    uploadedAvatarMimeType: {
        validMimeTypes: ['image/jpeg', 'image/png', 'image/webp', undefined],
        messages: {
            invalidMimeType: 'Данный тип изображения не поддерживается. Возможно использование файлов c расширением jpeg, jpg, png или webp'
        }
    },
    avatarCropped: {
        messages: {
            empty: 'Изображение должно быть откадрировано в формате 1:1'
        }
    }
}