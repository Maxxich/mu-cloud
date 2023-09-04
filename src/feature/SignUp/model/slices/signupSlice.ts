import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessage, SignupSchema } from '../types/signupSchema'
import { signUpByEmail } from '../services/signUp'
import { config } from '../config/config'
import { validateEmail } from '@/shared/lib/validateEmail/validateEmail'

const initialState: SignupSchema = {
    email: undefined,
    password: undefined,
    name: undefined,
    passwordConfirm: undefined,
    status: 'idle',
    validationErrors: {
        email: {
            empty: false,
            notEmailFormat: false
        },
        name: {
            empty: false,
            exceedsMaxLenght: false
        },
        password: {
            empty: false,
            exceedsMaxLenght: false,
            exceedsMinLenght: false
        },
        passwordConfirm: {
            empty: false,
            notEqualsToPassword: false
        }
    }
}

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
           state.password = action.payload
        },
        setPasswordConfirm: (state, action: PayloadAction<string>) => {
            state.passwordConfirm = action.payload
         },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
            state.validationErrors.email.notEmailFormat = false
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

         validateEmail: (state, action: PayloadAction<string | undefined>) => {
            const email = action.payload

            if (!email) {
                state.validationErrors.email.empty = true
                return
            } else {
                state.validationErrors.email.empty = false
            }
         },
         validateEmailOnSubmit: (state, action: PayloadAction<string | undefined>) => {
            const email = action.payload
            if (!validateEmail(email)) {
                state.validationErrors.email.notEmailFormat = true
            }
            }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpByEmail.pending, (state) => {
                state.status = 'loading'
                state.requestError = undefined
            })
            .addCase(signUpByEmail.fulfilled, (state) => {
                state.status = 'success';
                state.requestError = undefined
            })
            .addCase(signUpByEmail.rejected, (state, action) => {
                state.status = 'error'
                state.requestError = action.payload as ErrorMessage
            });
    },
})

export const { actions: signupActions } = signupSlice
export const { reducer: signupReducer } = signupSlice