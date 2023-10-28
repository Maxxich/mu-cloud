type FieldsAndErrors = {
    name: ['empty', 'exceedsMaxLenght']
    name_secondary: ['exceedsMaxLenght']
    audioFile: ['empty', 'invalidMimeType']
    imageSquareFile: ['empty', 'invalidMimeType']
    imageCroppedSquareFile: ['empty']
    imageWideFile: ['empty', 'invalidMimeType']
    imageCroppedWideFile: ['empty']
    upload_code: ['empty']
}


type ValidationErrosFlags = ErrrosFlags<FieldsAndErrors>

export type Config = ErrorsConfig<ValidationErrosFlags>

export type Tab = 'form' | 'cropWideImage' | 'cropSquareImage'

export interface AddNewTrackSeparateImageLoadingSchema {
    name?: string
    name_secondary?: string
    color?: string,
    upload_code?: string

    imageSquareFileMimeType?: string | undefined
    imageCroppedSquareMimeType?: string | undefined

    imageCroppedWideMimeType?: string | undefined
    imageWideFileMimeType?: string | undefined
    
    audioFileMimeType?: string | undefined
    validationErrors: ValidationErrosFlags
    tab: Tab
    status: 'idle' | 'loading',
    progress?: number | undefined

    isSmallPictureActive: boolean
}