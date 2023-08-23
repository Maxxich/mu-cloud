import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ViewerSchema } from '../..';



const initialState: ViewerSchema = {
 checking: false
}

const slice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    setCredentials: (state: ViewerSchema, action: PayloadAction<ViewerSchema>) => {
      state.id = action.payload.id
      state.adress = action.payload.adress
      state.email = action.payload.email
      state.name = action.payload.name
      state.picture_source = action.payload.picture_source
      state.access_token = action.payload.access_token
    },
    logOut: (state: ViewerSchema) => {
      state.id = undefined
      state.adress = undefined
      state.email = undefined
      state.name = undefined
      state.picture_source = undefined
      state.access_token = undefined
    },
    setChecking: (state: ViewerSchema, action: PayloadAction<boolean>) => {
      state.checking = action.payload
    }
  }
})

export const viewerActions = slice.actions
export const viewerReducer = slice.reducer