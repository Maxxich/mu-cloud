type FieldsAndErrors = {
    name: ['empty', 'exceedsMaxLenght']
    name_secondary: ['exceedsMaxLenght']
    audioFile: ['empty', 'invalidMimeType']
    imageFile: ['empty', 'invalidMimeType']
    imageCroppedWideFile: ['empty']
    imageCroppedSquareFile: ['empty']
}

type ValidationErrosFlags = ErrrosFlags<FieldsAndErrors>

export type Config = ErrorsConfig<ValidationErrosFlags>

export type Tab = 'form' | 'cropWideImage' | 'cropSquareImage'

export interface AddNewTrackSchema {
    name?: string
    name_secondary?: string
    imageFileMimeType?: string | undefined
    imageCroppedWideMimeType?: string | undefined
    imageCroppedSquareMimeType?: string | undefined
    audioFileMimeType?: string | undefined
    validationErrors: ValidationErrosFlags
    tab: Tab
    status: 'idle' | 'loading'
}