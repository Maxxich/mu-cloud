import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddNewTrackSeparateImageLoadingSchema, Tab } from '../types/AddNewTrackSeparateImageLoadingSchema'
import { config } from '../config/config'

const initialState: AddNewTrackSeparateImageLoadingSchema = {
    validationErrors: {
        name: {
            empty: false,
            exceedsMaxLenght: false
        },
        name_secondary: {
            exceedsMaxLenght: false
        },
        audioFile: {
            invalidMimeType: false,
            empty: false
        },
        imageSquareFile: {
            invalidMimeType: false,
            empty: false
        },
        imageWideFile: {
            invalidMimeType: false,
            empty: false
        },
        imageCroppedSquareFile: {
            empty: false
        },
        imageCroppedWideFile: {
            empty: false
        },
        upload_code: {
            empty: false
        }
    },
    tab: 'form',
    status: 'idle',
    isSmallPictureActive: true,
}

export const AddNewTrackSeparateImageLoadingSlice = createSlice({
    name: 'AddNewTrackSeparateImageLoading',
    initialState,
    reducers: {
        validateName: (state, action: PayloadAction<string | undefined>) => {
            const name = action.payload
            if (!name) {
                state.validationErrors.name.empty = true 
                state.validationErrors.name.exceedsMaxLenght = false 
                return
            } else {
                state.validationErrors.name.empty = false
            }
            if (name.length > config.name.maxLenght) {
                state.validationErrors.name.exceedsMaxLenght = true 
            } else {
                state.validationErrors.name.exceedsMaxLenght = false 
            }
        },
        setName: (state, action: PayloadAction<string | undefined>) => {
            state.name = action.payload
        },
        validateNameSecondary: (state, action: PayloadAction<string | undefined>) => {
            const name_secondary = action.payload

            if (!name_secondary) {
                state.validationErrors.name_secondary.exceedsMaxLenght = false
                return
            }

            if (name_secondary.length > config.name_secondary.maxLenght) {
                state.validationErrors.name_secondary.exceedsMaxLenght = true 
            } else {
                state.validationErrors.name_secondary.exceedsMaxLenght = false
            }
        },
        setProgress: (state, action: PayloadAction<number | undefined>) => {
            state.progress = action.payload
        }, 
        setNameSecondary: (state, action: PayloadAction<string | undefined>) => {
            state.name_secondary = action.payload
        },
        validateAudioFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            const value = action.payload
            if (!value) {
                state.validationErrors.audioFile.invalidMimeType = false
                state.validationErrors.audioFile.empty = true
                return
            } else {
                state.validationErrors.audioFile.empty = false
            }
            if (config.audioFile.validMimeTypes.includes(value)) {
                state.validationErrors.audioFile.invalidMimeType = false
                
            } else {
                state.validationErrors.audioFile.invalidMimeType = true
            }
        },
        setAudioFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.audioFileMimeType = action.payload
        },
        validateImageSquareFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            const value = action.payload
            if (!value) {
                state.validationErrors.imageSquareFile.invalidMimeType = false
                state.validationErrors.imageSquareFile.empty = true
                return
            } else {
                state.validationErrors.imageSquareFile.empty = false
            }
            if (config.imageSquareFile.validMimeTypes.includes(value)) {
                state.validationErrors.imageSquareFile.invalidMimeType = false
            } else {
                state.validationErrors.imageSquareFile.invalidMimeType = true
            }
        },
        validateUploadCode: (state, action: PayloadAction<string | undefined>) => {
            const upload_code = action.payload
            if (!upload_code) {
                state.validationErrors.upload_code.empty = true 
                return
            } else {
                state.validationErrors.upload_code.empty = false
            }
        },
        setUploadCode: (state, action: PayloadAction<string | undefined>) => {
            state.upload_code = action.payload
        },
        setImageSquareFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.imageSquareFileMimeType = action.payload
        },
        validateImageWideFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            const value = action.payload
            if (!value) {
                state.validationErrors.imageWideFile.invalidMimeType = false
                state.validationErrors.imageWideFile.empty = true
                return
            } else {
                state.validationErrors.imageWideFile.empty = false
            }
            if (config.imageWideFile.validMimeTypes.includes(value)) {
                state.validationErrors.imageWideFile.invalidMimeType = false
            } else {
                state.validationErrors.imageWideFile.invalidMimeType = true
            }
        },
        setImageWideFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.imageWideFileMimeType = action.payload
        },
        setImageCroppedWideFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.imageCroppedWideMimeType = action.payload
        },
        validateImageCroppedWideFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            const value = action.payload
            if (!value) {
                state.validationErrors.imageCroppedWideFile.empty = true
                return
            } else {
                state.validationErrors.imageCroppedWideFile.empty = false
            }
        },
        setImageCroppedSquareFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.imageCroppedSquareMimeType = action.payload
        },
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        validateImageCroppedSquareFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            const value = action.payload
            if (!value) {
                state.validationErrors.imageCroppedSquareFile.empty = true
                return
            } else {
                state.validationErrors.imageCroppedSquareFile.empty = false
            }
        },
        setTab: (state, action: PayloadAction<Tab>) => {
            state.tab = action.payload
        },
        startLoad: (state) => {
            state.status = 'loading'
            state.progress = 0
        },
        setIdle: (state) => {
            state.status = 'idle'
            state.progress = undefined
        },
        toggleIsSmallPictureActive: (state) => {
            state.isSmallPictureActive = !state.isSmallPictureActive
        },
        reset: (state) => {
            state.name = ''
            state.name_secondary = ''
            state.audioFileMimeType = undefined
            state.imageCroppedSquareMimeType = undefined
            state.imageCroppedWideMimeType = undefined
            state.imageSquareFileMimeType = undefined
            state.imageWideFileMimeType = undefined
            state.color = undefined
            state.validationErrors.audioFile.empty = false
            state.validationErrors.audioFile.invalidMimeType = false
            state.validationErrors.imageCroppedSquareFile.empty = false
            state.validationErrors.imageCroppedWideFile.empty = false
            state.validationErrors.imageSquareFile.empty = false
            state.validationErrors.imageSquareFile.invalidMimeType = false
            state.validationErrors.imageWideFile.empty = false
            state.validationErrors.imageWideFile.invalidMimeType = false
            state.validationErrors.name.empty = false
            state.validationErrors.name.exceedsMaxLenght = false
            state.validationErrors.name_secondary.exceedsMaxLenght = false
        }
    },
})

export const { actions: AddNewTrackSeparateImageLoadingActions } = AddNewTrackSeparateImageLoadingSlice
export const { reducer: AddNewTrackSeparateImageLoadingReducer } = AddNewTrackSeparateImageLoadingSlice