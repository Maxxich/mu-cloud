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
    }
}

export interface AddNewTrackSchema {
    name?: string
    name_secondary?: string
    imageFileMimeType?: string | undefined
    audioFileMimeType?: string | undefined
    validationErrors: ValidationErrors
}