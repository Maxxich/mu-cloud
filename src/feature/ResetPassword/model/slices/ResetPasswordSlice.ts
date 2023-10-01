import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResetPasswordSchema } from '../types/ResetPasswordSchema'

const initialState: ResetPasswordSchema = {
    email: '',
    error: undefined,
    status: 'idle'
}

export const ResetPasswordSlice = createSlice({
    name: 'ResetPassword',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            if (state.status !== 'idle') return 
            state.email = action.payload
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload
        },
        setStatus: (state, action: PayloadAction<'idle' | 'loading'>) => {
            state.status = action.payload
        },
    },
})

export const { actions: ResetPasswordActions } = ResetPasswordSlice
export const { reducer: ResetPasswordReducer } = ResetPasswordSlice