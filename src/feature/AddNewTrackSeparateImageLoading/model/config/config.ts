import { Config } from '../types/AddNewTrackSeparateImageLoadingSchema'

export const config: Config = {
    name: {
        messages: {
            empty: 'Название не должно быть пустым',
            exceedsMaxLenght: 'Длина названия должна быть не более 30 символов'
        },
        maxLenght: 30
    },
    upload_code: {
        messages: {
            empty: 'Ключ загрузки не должен быть пустым',
        }
    },
    name_secondary: {
        messages: {
            exceedsMaxLenght: 'Длина подписи должна быть не более 45 символов'
        },
        maxLenght: 45
    },
    audioFile: {
        messages: {
            empty: 'Аудиофайл не выбран',
            invalidMimeType: 'Данный тип аудиофайла не поддерживается. Возможно использование аудифайлов c расширением mp3, wav или weba',
        },
        validMimeTypes: ['audio/mpeg', 'audio/wav', 'audio/webm']
    },
    imageSquareFile: {
        messages: {
            empty: 'Изображение не выбрано',
            invalidMimeType: 'Данный тип изображения не поддерживается. Возможно использование файлов c расширением jpeg, jpg, png или webp',
        },
        validMimeTypes: ['image/jpeg', 'image/png', 'image/webp']
    },
    imageCroppedSquareFile: {
        messages: {
            empty: 'Изображение должно быть откадрировано в формате 1:1'
        }
    },
    imageWideFile: {
        messages: {
            empty: 'Изображение не выбрано',
            invalidMimeType: 'Данный тип изображения не поддерживается. Возможно использование файлов c расширением jpeg, jpg, png или webp',
        },
        validMimeTypes: ['image/jpeg', 'image/png', 'image/webp']
    },
    imageCroppedWideFile: {
        messages: {
            empty: 'Изображение должно быть откадрировано в формате 9:16'
        }
    }
}