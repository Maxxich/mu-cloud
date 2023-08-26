import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { playerReducer } from '@/entity/player';
import { StateSchema } from './StateSchema';
import { viewerReducer } from '@/entity/viewer';
import { signinReducer } from '@/feature/SignIn';
import { AddNewTrack } from '@/feature/AddNewTrack';
import { AddNewTrackReducer } from '@/feature/AddNewTrack';

export function createReduxStore(
  initialState?: StateSchema,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    player: playerReducer,
    viewer: viewerReducer,
    signin: signinReducer,
    addNewTrack: AddNewTrackReducer
  };

  const store = configureStore({
      reducer: rootReducers,
      preloadedState: initialState,
      devTools: true
    
  });

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof createReduxStore>['getState'];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

