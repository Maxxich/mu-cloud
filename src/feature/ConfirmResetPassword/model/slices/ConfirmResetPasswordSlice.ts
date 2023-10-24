import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConfirmResetPasswordSchema, ErrorMessage } from '../types/ConfirmResetPasswordSchema'
import { config } from '../config/config'
import { confirm } from '../services/confirm'

const initialState: ConfirmResetPasswordSchema = {
    password: '',
    passwordConfirm: '',
    status: 'idle',
    validationErrors: {
        password: {
            empty: false,
            exceedsMaxLenght: false,
            exceedsMinLenght: false,
            hasBannedSymbols: false
        },
        passwordConfirm: {
            empty: false,
            notEqualsToPassword: false,

        }
    }
}

export const ConfirmResetPasswordSlice = createSlice({
    name: 'confirmResetPassword',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setPasswordConfirm: (state, action: PayloadAction<string>) => {
            state.passwordConfirm = action.payload
        },
        validatePassword: (state, action: PayloadAction<string | undefined>) => {
            const password = action.payload

            if (!password) {
                state.validationErrors.password.empty = true
                state.validationErrors.password.exceedsMaxLenght = false
                state.validationErrors.password.exceedsMinLenght = false
                return
            } else {
                state.validationErrors.password.empty = false
            }

            if (password.length > config.password.maxLenght) {
                state.validationErrors.password.exceedsMaxLenght = true 
            } else if (password.length < config.password.minLenght) {
                state.validationErrors.password.exceedsMinLenght = true 
            } else {
                state.validationErrors.password.exceedsMaxLenght = false
                state.validationErrors.password.exceedsMinLenght = false
            }

            
            state.validationErrors.password.hasBannedSymbols = (config.password.bannedSymbols.some((symbol: string) => state.password.includes(symbol)))
        },

        validatePasswordConfirm: (state, action: PayloadAction<string | undefined>) => {
            const passwordConfirm = action.payload

            if (!passwordConfirm) {
                state.validationErrors.passwordConfirm.empty = true
                return
            } else {
                state.validationErrors.passwordConfirm.empty = false
            }

            if (passwordConfirm !== state.password) {
                state.validationErrors.passwordConfirm.notEqualsToPassword = true 
            } else {
                state.validationErrors.passwordConfirm.notEqualsToPassword = false 
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(confirm.pending, (state) => {
                state.status = 'loading'
                state.requestError = undefined
            })
            .addCase(confirm.fulfilled, (state) => {
                state.status = 'success';
                state.requestError = undefined
            })
            .addCase(confirm.rejected, (state, action) => {
                state.status = 'error'
                state.requestError = action.payload as ErrorMessage
            });
    },
})

export const { actions: confirmResetPasswordActions } = ConfirmResetPasswordSlice
export const { reducer: confirmResetPasswordReducer } = ConfirmResetPasswordSlice