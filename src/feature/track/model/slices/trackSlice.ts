import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrackSchema } from '../types/trackSchema'

const initialState: TrackSchema = {
    
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
})

export const { actions: trackActions } = trackSlice
export const { reducer: trackReducer } = trackSlice