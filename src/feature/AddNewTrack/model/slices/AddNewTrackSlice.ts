import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddNewTrackSchema, Tab } from '../types/AddNewTrackSchema'
import { config } from '../config/config'

const initialState: AddNewTrackSchema = {
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
        imageFile: {
            invalidMimeType: false,
            empty: false
        },
        imageCroppedSquareFile: {
            empty: false
        },
        imageCroppedWideFile: {
            empty: false
        }
    },
    tab: 'form',
    status: 'idle'
}

export const AddNewTrackSlice = createSlice({
    name: 'AddNewTrack',
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
        validateImageFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            const value = action.payload
            if (!value) {
                state.validationErrors.imageFile.invalidMimeType = false
                state.validationErrors.imageFile.empty = true
                return
            } else {
                state.validationErrors.imageFile.empty = false
            }
            if (config.imageFile.validMimeTypes.includes(value)) {
                state.validationErrors.imageFile.invalidMimeType = false
            } else {
                state.validationErrors.imageFile.invalidMimeType = true
            }
        },
        setImageFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.imageFileMimeType = action.payload
        },
        setImageCroppedWideFileMimeType: (state, action: PayloadAction<string | undefined>) => {
            state.imageFileMimeType = action.payload
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
            state.imageFileMimeType = action.payload
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
        },
        setIdle: (state) => {
            state.status = 'idle'
        },
        reset: (state) => {
            state.name = ''
            state.name_secondary = ''
            state.audioFileMimeType = undefined
            state.imageCroppedSquareMimeType = undefined
            state.imageCroppedWideMimeType = undefined
            state.imageFileMimeType = undefined
            state.validationErrors.audioFile.empty = false
            state.validationErrors.audioFile.invalidMimeType = false
            state.validationErrors.imageCroppedSquareFile.empty = false
            state.validationErrors.imageCroppedWideFile.empty = false
            state.validationErrors.imageFile.empty = false
            state.validationErrors.imageFile.invalidMimeType = false
            state.validationErrors.name.empty = false
            state.validationErrors.name.exceedsMaxLenght = false
            state.validationErrors.name_secondary.exceedsMaxLenght = false
        }
    },
})

export const { actions: AddNewTrackActions } = AddNewTrackSlice
export const { reducer: AddNewTrackReducer } = AddNewTrackSlice