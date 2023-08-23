import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessage, SigninSchema } from '../types/signinSchema'
import { signInByEmail } from '../services/signIn'

const initialState: SigninSchema = {
    email: undefined,
    password: undefined,
    status: 'idle'
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
           state.password = action.payload
           state.status = 'idle'
           state.errorMessage = undefined
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
            state.status = 'idle'
            state.errorMessage = undefined
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(signInByEmail.pending, (state) => {
                state.status = 'loading'
                state.errorMessage = undefined
            })
            .addCase(signInByEmail.fulfilled, (state) => {
                state.status = 'success';
                state.errorMessage = undefined
            })
            .addCase(signInByEmail.rejected, (state, action) => {
                state.status = 'error'
                state.errorMessage = action.payload as ErrorMessage
            });
    },
})

export const { actions: signinActions } = signinSlice
export const { reducer: signinReducer } = signinSlice