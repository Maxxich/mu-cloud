export type Config = {
    name: {
        messages: {
            empty: string
            exceedsMaxLenght: string
        },
        maxLenght: number
    },
    name_secondary: {
        messages: {
            exceedsMaxLenght: string
        }
        maxLenght: number
    }
    audioFile: {
        messages: {
            invalidMimeType: string
            empty: string
        },
        validMimeTypes: string[]
    },
    imageSquareFile: {
        messages: {
            invalidMimeType: string
            empty: string
        },
        validMimeTypes: string[]
    },
    imageCroppedSquareFile: {
        messages: {
            empty: string
        }
    },
    imageWideFile: {
        messages: {
            invalidMimeType: string
            empty: string
        },
        validMimeTypes: string[]
    },
    imageCroppedWideFile: {
        messages: {
            empty: string
        }
    },
}

type ValidationErrors = {
    name: {
        empty: boolean
        exceedsMaxLenght: boolean
    }
    name_secondary: {
        exceedsMaxLenght: boolean
    },
    audioFile: {
        invalidMimeType: boolean
        empty: boolean
    },
    imageSquareFile: {
        invalidMimeType: boolean
        empty: boolean
    },
    imageCroppedSquareFile: {
        empty: boolean
    },
    imageWideFile: {
        invalidMimeType: boolean
        empty: boolean
    },
    imageCroppedWideFile: {
        empty: boolean
    },
}

export type Tab = 'form' | 'cropWideImage' | 'cropSquareImage'

export interface AddNewTrackSeparateImageLoadingSchema {
    name?: string
    name_secondary?: string

    imageSquareFileMimeType?: string | undefined
    imageCroppedSquareMimeType?: string | undefined

    imageCroppedWideMimeType?: string | undefined
    imageWideFileMimeType?: string | undefined

    audioFileMimeType?: string | undefined
    validationErrors: ValidationErrors
    tab: Tab
    status: 'idle' | 'loading'
}