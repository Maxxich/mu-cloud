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
    imageFile: {
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
    imageCroppedSquareFile: {
        messages: {
            empty: string
        }
    }
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
    imageFile: {
        invalidMimeType: boolean
        empty: boolean
    },
    imageCroppedWideFile: {
        empty: boolean
    },
    imageCroppedSquareFile: {
        empty: boolean
    }
}

export type Tab = 'form' | 'cropWideImage' | 'cropSquareImage'

export interface AddNewTrackSchema {
    name?: string
    name_secondary?: string
    imageFileMimeType?: string | undefined
    imageCroppedWideMimeType?: string | undefined
    imageCroppedSquareMimeType?: string | undefined
    audioFileMimeType?: string | undefined
    validationErrors: ValidationErrors
    tab: Tab
    status: 'idle' | 'loading'
}