import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditProfileSchema, RequestError } from '../types/EditProfileSchema'
import { config } from '../config/config'

const initialState: EditProfileSchema = {
    adress: '',
    initialAdress: '',
    name: '',
    initialName: '',
    uploadedAvatarMimeType: undefined,
    avatarCroppedExist: false,
    validationErrors: {
        adress: {
            empty: false,
            exceedsMaxLenght: false,
            hasBannedSymbols: false
        },
        name: {
            empty: false,
            exceedsMaxLenght: false
        },
        uploadedAvatarMimeType: {
            invalidMimeType: false,
        },
        avatarCropped: {
            empty: false
        }
    },
    status: 'idle'
}

export const EditProfileSlice = createSlice({
    name: 'EditProfile',
    initialState,
    reducers: {
        setAdress: (state, action: PayloadAction<string>) => {
            if (state.status !== 'edit') return
            state.adress = action.payload
            state.requestError = undefined
        },
        initializateAdress: (state, action: PayloadAction<string>) => {
            if (state.status !== 'idle') return
            state.initialAdress = action.payload
            state.adress = action.payload
        },
        validateAdress: (state) => {
            if (state.status !== 'edit') return
            state.validationErrors.adress.empty = (state.adress.length === 0)
                && (state.initialAdress.length !== 0)
            state.validationErrors.adress.exceedsMaxLenght = (state.adress.length > config.adress.maxLenght)
            state.validationErrors.adress.hasBannedSymbols = (config.adress.bannedSymbols.some((symbol: string) => state.adress.includes(symbol)))
        },
        setName: (state, action: PayloadAction<string>) => {
            if (state.status !== 'edit') return
            state.name = action.payload
            state.requestError = undefined
        },
        initializateName: (state, action: PayloadAction<string>) => {
            if (state.status !== 'idle') return
            state.initialName = action.payload
            state.name = action.payload
        },
        validateName: (state) => {
            if (state.status !== 'edit') return
            state.validationErrors.name.empty = (state.name.length === 0)
            state.validationErrors.name.exceedsMaxLenght = (state.name.length > config.name.maxLenght)
        },
        setUploadedAvatarMimeType: (state, action: PayloadAction<string>) => {
            if (state.status !== 'edit') return
            state.uploadedAvatarMimeType = action.payload
            state.requestError = undefined
        },
        validateAvatarMimeType: (state) => {
            if (state.status !== 'edit') return
            state.validationErrors.uploadedAvatarMimeType.invalidMimeType 
                = (!state.uploadedAvatarMimeType) 
                    ? (false)
                    : (!config.uploadedAvatarMimeType.validMimeTypes.includes(state.uploadedAvatarMimeType))  
            if (!state.validationErrors.uploadedAvatarMimeType.invalidMimeType) {
                state.status = 'crop'
            }
        },
        setAvatarCroppedExist: (state) => {
            if (!['edit', 'crop'].includes(state.status)) return
            state.avatarCroppedExist = true
            state.status = 'edit'
            state.requestError = undefined
        },
        removeUploadedAvatar: (state) => {
            if (!['edit', 'crop'].includes(state.status)) return
            state.uploadedAvatarMimeType = undefined
            state.avatarCroppedExist = false
            state.validationErrors.uploadedAvatarMimeType.invalidMimeType = false
            state.validationErrors.avatarCropped.empty = false
            state.status = 'edit'
            state.requestError = undefined
        },
        startEdit: (state) => {
            state.status = 'edit'
        },
        cancelEdit: (state) => {
            state.status = 'idle'
            state.adress = state.initialAdress
            state.validationErrors.adress.empty = false
            state.validationErrors.adress.exceedsMaxLenght = false
            state.validationErrors.adress.hasBannedSymbols = false
            state.name = state.initialName
            state.validationErrors.name.empty = false
            state.validationErrors.name.exceedsMaxLenght = false
            state.uploadedAvatarMimeType = undefined
            state.avatarCroppedExist = false
            state.validationErrors.uploadedAvatarMimeType.invalidMimeType = false
            state.validationErrors.avatarCropped.empty = false
            state.requestError = undefined
        },
        startLoad: (state) => {
            state.status = 'loading'
        },
        setIdle: (state) => {
            state.status = 'idle'
        },
        setSaved: (state) => {
            state.status = 'saved'
        },
        setRequestError: (state, action: PayloadAction<RequestError | undefined>) => {
            state.requestError = action.payload
        }
    },
})

export const { actions: EditProfileActions } = EditProfileSlice
export const { reducer: EditProfileReducer } = EditProfileSlice